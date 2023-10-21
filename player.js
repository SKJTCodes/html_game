import { Sprite } from "./sprite.js";

// Player.js handles the movement
// sprite.js handles the animation
// character.js initializes everything else

export class Player extends Sprite {
    constructor({ position, imageSrc, coords, animations, idleState, keys }) {
        super({ position, imageSrc, coords, animations, idleState });
        this.keys = keys;
        this.velocity = 2;
    }

    init(context) {
        // load idle animation
        this.update(context);

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
    }
} 