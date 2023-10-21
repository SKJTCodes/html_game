import { Female } from "./characters/female.js";
import { sprites } from "./testSpriteOrigin.js";
import { InputHandler } from "./input.js";

// init
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

const input = new InputHandler();
const player = new Female({
    position: { x: 250, y: 150 },
    keys: input.keys
});

function checkOrigin() {
    const xPos = 60;
    const padding = 20;
    sprites.forEach((s, i) => {
        s.state = 'attackDown';
        s.position.x = padding + (i * xPos);
        s.animateIndex = i;
        s.draw(ctx);
    })
}

function animate() {
    // init
    requestAnimationFrame(animate);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // keep character within borders
    if (player.position.x <= 0) {
        player.position.x = 0;
    } else if (player.position.x >= canvas.width) {
        player.position.x = canvas.width;
    }
    if (player.position.y >= canvas.height) {
        player.position.y = canvas.height;
    } else if (player.position.y <= 0) {
        player.position.y = 0;
    }

    // checkOrigin();
    player.update(ctx);
}

animate();
