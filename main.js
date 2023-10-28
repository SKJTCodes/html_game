import { Female } from "./characters/female.js";
import { Warrior } from "./characters/warrior.js";
import { sprites } from "./characters/TestSprites.js";
import { InputHandler } from "./input.js";
import { Player } from "./player.js";
import { player } from "./characters/TestSpriteCoords.js"

class TestAnim extends Player {
    constructor({ position, keys }) {
        super({
            position,
            imageSrc: player.path,
            coords: player.coords,
            animations: player.anim,
            idleState: player.state,
            keys,
            showOrigin: true,
            staggerFrame: 6
        });
    }
    init(context){
        this.state = player.state;
        this.update(context);
    }
}

// init
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

const input = new InputHandler();
const femaleCharacter = new Female({
    position: { x: 250, y: 150 },
    keys: input.keys
});
const warrior = new Warrior({
    position: { x: 250, y: 350 },
    keys: input.keys
})
const testAnim = new TestAnim({
    position: { x: 300, y: 260},
    keys: input.keys
})

function animate() {
    // init
    requestAnimationFrame(animate);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // keep character within borders
    if (femaleCharacter.position.x <= 0) {
        femaleCharacter.position.x = 0;
    } else if (femaleCharacter.position.x >= canvas.width) {
        femaleCharacter.position.x = canvas.width;
    }
    if (femaleCharacter.position.y >= canvas.height) {
        femaleCharacter.position.y = canvas.height;
    } else if (femaleCharacter.position.y <= 0) {
        femaleCharacter.position.y = 0;
    }

    sprites.forEach((s, i) => {
        s.animateIndex = i;
        s.draw(ctx);
    })

    testAnim.update(ctx);
    // console.log(warrior.state);
    // femaleCharacter.update(ctx);
}

animate();
