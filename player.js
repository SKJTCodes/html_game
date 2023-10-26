import { Sprite } from "./sprite.js";

// Player.js handles the movement
// sprite.js handles the animation
// character.js initializes everything else

export class Player extends Sprite {
    constructor({ position, imageSrc, coords, animations, idleState, keys, showOrigin, staggerFrame }) {
        super({ position, imageSrc, coords, animations, idleState, showOrigin, staggerFrame });
        this.keys = keys;
        this.velocity = 1;
        this.action_lock = false;
    }

    update(context) {
        // load idle animation
        this.animate(context);

        if (this.keys.includes(' ') || this.action_lock) {
            this.action_lock = this.startAttack();
        }

        if (!this.action_lock) {
            // Up-down movement
            if (this.keys.includes('ArrowDown') && !this.keys.includes('ArrowUp')) {
                this.position.y += this.velocity;
            } else if (this.keys.includes('ArrowUp') && !this.keys.includes('ArrowDown')) {
                this.position.y -= this.velocity;

            }

            // left-right movement
            if (this.keys.includes('ArrowLeft') && !this.keys.includes('ArrowRight')) {
                this.position.x -= this.velocity;
            } else if (this.keys.includes('ArrowRight') && !this.keys.includes('ArrowLeft')) {
                this.position.x += this.velocity;
            }
            this.setState();
        }
    }
} 