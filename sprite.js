export class Sprite {
    constructor({ position, imageSrc, coords, animations, idleState, staggerFrame = 6, showOrigin = true }) {
        this.spriteSheet = new Image();
        this.spriteSheet.src = imageSrc;
        this.position = position;
        this.coords = coords;
        this.animations = animations;
        this.animateIndex = 0;
        this.staggerFrame = staggerFrame;
        this.frame = 0;
        this.state = idleState;
        this.width = 0;
        this.height = 0;
        this.facing = "Right";
        this.showOrigin = showOrigin;
        this.prev = { x: position.x, y: position.y, state: this.state };
    }
    startAttack() {
        // lock users into the attack animation until it ends.
        this.state = "attack" + this.facing;
        if (this.animateIndex + 1 >= this.animations[this.state].length) {
            return false;
        }
        return true;
    }
    animate(context) {
        // if state change, need to reset frame count
        if (this.state != this.prev.state) {
            this.animateIndex = 0;
        }

        // iterate through animation frames
        this.frame++;
        if (this.frame % this.staggerFrame == 0) {
            this.animateIndex++;
            if (this.animateIndex >= this.animations[this.state].length) {
                this.animateIndex = 0;
            }
        }
        // draw sprite on screen
        this.draw(context);
        this.prev.x = this.position.x;
        this.prev.y = this.position.y;
        this.prev.state = this.state;
    }
    draw(context) {
        const [[x, y, width, height], [originX, originY]] = this.coords[this.animations[this.state][this.animateIndex]];
        this.height = height;

        context.drawImage(
            this.spriteSheet,
            x, y, width, height,
            this.position.x - originX, this.position.y - originY, width, height
        );
        if (this.showOrigin) this.drawOrigin(context);
    }
    setState() {
        // choose movement state according to change in position
        // priority animation is up and down
        if (this.position.y > this.prev.y) {
            this.state = "walkDown";
            this.facing = "Down";
        } else if (this.position.y < this.prev.y) {
            this.state = "walkUp";
            this.facing = "Up";
        } else if (this.position.x > this.prev.x) {
            this.state = "walkRight";
            this.facing = "Right"
        } else if (this.position.x < this.prev.x) {
            this.state = "walkLeft";
            this.facing = "Left"
        } else { // when both are equal
            this.state = "idle" + this.facing;
        }
    }
    drawOrigin(context) {
        context.lineWidth = 1;
        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(this.position.x - 5, this.position.y);
        context.lineTo(this.position.x + 4, this.position.y);
        context.moveTo(this.position.x, this.position.y - 5);
        context.lineTo(this.position.x, this.position.y + 4);
        context.stroke();
    }
}