export class Sprite {
    constructor({ position, imageSrc, coords, animations }) {
        this.spriteSheet = new Image();
        this.spriteSheet.src = imageSrc;
        this.position = position;
        this.coords = coords;
        this.animations = animations;
        this.animateIndex = 0;
        this.staggerFrame = 7;
        this.frame = 0;
        this.state = "idleDown";
        this.width = 0;
        this.height = 0;
    }
    draw(context) {
        // console.log(this.animateIndex);
        // console.log(this.animations[this.state][this.animateIndex]);
        const [[x, y, width, height], [originX, originY]] = this.coords[this.animations[this.state][this.animateIndex]];
        this.height = height;
        
        context.drawImage(
            this.spriteSheet,
            x, y, width, height,
            this.position.x - originX, this.position.y - originY, width, height
        );
        this.drawDebug(context);
    }
    update(context) {
        this.frame++;
        if (this.frame % this.staggerFrame == 0) {
            this.animateIndex++;
            if (this.animateIndex >= this.animations[this.state].length) {
                this.animateIndex = 0;
            }
            // console.log(this.animateIndex);
        }

        this.draw(context);
    }
    drawDebug(context) {
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