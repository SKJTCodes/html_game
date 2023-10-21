import { Player } from "./player.js";
import { Sprite } from "./sprite.js";
import { sprites } from "./testSpriteOrigin.js";
import { InputHandler } from "./input.js";

// init
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

// declare objects
// const player = new Player({
//     position: { x: 0, y: 0 }
// });

// 832 x 1344
// rows x cols : 21 x 13
// frame w x h : 40 x 103
const input = new InputHandler();
const player = new Player({
    position: { x: 250, y: 150 },
    imageSrc: "./assets/Characters/female.png",
    coords: {
        // walk up
        'walk-up-0': [[71, 527, 51, 49], [25, 30]],
        'walk-up-1': [[135, 527, 51, 49], [25, 30]],
        'walk-up-2': [[198, 528, 51, 48], [26, 30]],
        'walk-up-3': [[263, 527, 51, 49], [25, 30]],
        'walk-up-4': [[327, 527, 51, 49], [25, 30]],
        'walk-up-5': [[391, 527, 51, 49], [25, 30]],
        'walk-up-6': [[455, 528, 51, 48], [25, 30]],
        'walk-up-7': [[519, 527, 51, 49], [25, 30]],
        // walk left
        'walk-left-0': [[64, 592, 48, 48], [31, 29]],
        'walk-left-1': [[129, 591, 51, 49], [30, 29]],
        'walk-left-2': [[199, 591, 54, 49], [24, 29]],
        'walk-left-3': [[261, 591, 53, 49], [26, 29]],
        'walk-left-4': [[327, 592, 53, 48], [24, 29]],
        'walk-left-5': [[392, 591, 54, 49], [23, 29]],
        'walk-left-6': [[452, 591, 51, 49], [27, 29]],
        'walk-left-7': [[516, 591, 48, 49], [27, 29]],
        // walk down
        'walk-down-0': [[64, 655, 51, 49], [32, 31]],
        'walk-down-1': [[128, 655, 51, 49], [32, 31]],
        'walk-down-2': [[193, 656, 51, 48], [31, 31]],
        'walk-down-3': [[256, 655, 51, 49], [32, 31]],
        'walk-down-4': [[320, 655, 51, 49], [32, 31]],
        'walk-down-5': [[384, 655, 51, 49], [32, 31]],
        'walk-down-6': [[448, 656, 51, 48], [32, 31]],
        'walk-down-7': [[512, 655, 51, 49], [32, 31]],
        // walk right
        'walk-right-0': [[80, 720, 48, 48], [21, 30]],
        'walk-right-1': [[140, 719, 51, 49], [25, 30]],
        'walk-right-2': [[195, 719, 54, 49], [34, 30]],
        'walk-right-3': [[262, 719, 53, 49], [31, 30]],
        'walk-right-4': [[324, 720, 53, 48], [33, 30]],
        'walk-right-5': [[386, 719, 54, 49], [35, 30]],
        'walk-right-6': [[457, 719, 51, 49], [28, 30]],
        'walk-right-7': [[524, 719, 48, 49], [25, 30]],
        // attack up
        'attack-up-0': [[4, 272, 54, 48], [28, 30]],
        'attack-up-1': [[68, 273, 51, 47], [28, 30]],
        'attack-up-2': [[139, 272, 40, 48], [21, 30]],
        'attack-up-3': [[211, 266, 27, 54], [12, 36]],
        'attack-up-4': [[275, 261, 28, 59], [13, 41]],
        'attack-up-5': [[334, 256, 35, 63], [18, 46]],
        'attack-up-6': [[403, 261, 28, 59], [13, 41]],
        'attack-up-7': [[467, 266, 27, 54], [12, 36]],
        // attack left
        'attack-left-0': [[3, 335, 51, 49], [28, 29]],
        'attack-left-1': [[70, 335, 54, 49], [25, 29]],
        'attack-left-2': [[134, 335, 54, 49], [25, 29]],
        'attack-left-3': [[201, 335, 54, 49], [24, 29]],
        'attack-left-4': [[259, 335, 54, 49], [30, 29]],
        'attack-left-5': [[320, 335, 54, 49], [33, 29]],
        'attack-left-6': [[387, 335, 54, 49], [30, 29]],
        'attack-left-7': [[457, 335, 54, 49], [24, 29]],
        // attack down
        'attack-down-0': [[4, 399, 54, 49], [28, 29]],
        'attack-down-1': [[71, 399, 51, 49], [25, 29]],
        'attack-down-2': [[133, 399, 40, 49], [26, 29]],
        'attack-down-3': [[210, 390, 27, 57], [14, 36]],
        'attack-down-4': [[275, 392, 26, 55], [13, 34]],
        'attack-down-5': [[339, 394, 27, 54], [13, 32]],
        'attack-down-6': [[403, 392, 26, 55], [13, 34]],
        'attack-down-7': [[466, 390, 27, 57], [14, 36]],
        // attack right
        'attack-right-0': [[10, 463, 51, 49], [28, 29]],
        'attack-right-1': [[68, 463, 54, 49], [34, 29]],
        'attack-right-2': [[132, 463, 54, 49], [34, 29]],
        'attack-right-3': [[193, 463, 54, 49], [35, 29]],
        'attack-right-4': [[263, 463, 54, 49], [29, 29]],
        'attack-right-5': [[330, 463, 54, 49], [26, 29]],
        'attack-right-6': [[391, 463, 54, 49], [29, 29]],
        'attack-right-7': [[449, 463, 54, 49], [35, 29]],
        // idle
        'idle-up': [[7, 527, 51, 49], [25, 29]],
        'idle-left': [[3, 591, 51, 49], [28, 29]],
        'idle-down': [[0, 655, 51, 49], [32, 30]],
        'idle-right': [[10, 719, 51, 49], [28, 30]],
    },
    animations: {
        'walkUp': ['walk-up-0', 'walk-up-1', 'walk-up-2', 'walk-up-3', 'walk-up-4', 'walk-up-5', 'walk-up-6', 'walk-up-7'],
        'walkLeft': ['walk-left-0', 'walk-left-1', 'walk-left-2', 'walk-left-3', 'walk-left-4', 'walk-left-5', 'walk-left-6', 'walk-left-7'],
        'walkDown': ['walk-down-0', 'walk-down-1', 'walk-down-2', 'walk-down-3', 'walk-down-4', 'walk-down-5', 'walk-down-6', 'walk-down-7'],
        'walkRight': ['idle-right', 'walk-right-0', 'walk-right-1', 'walk-right-2', 'walk-right-3', 'walk-right-4', 'walk-right-5', 'walk-right-6', 'walk-right-7'],
        'attackUp': ['attack-up-0', 'attack-up-1', 'attack-up-2', 'attack-up-3', 'attack-up-4', 'attack-up-5', 'attack-up-6', 'attack-up-7'],
        'attackLeft': ['attack-left-0', 'attack-left-1', 'attack-left-2', 'attack-left-3', 'attack-left-4', 'attack-left-5', 'attack-left-6', 'attack-left-7'],
        'attackDown': ['attack-down-0', 'attack-down-1', 'attack-down-2', 'attack-down-3', 'attack-down-4', 'attack-down-5', 'attack-down-6', 'attack-down-7'],
        'attackRight': ['attack-right-0', 'attack-right-1', 'attack-right-2', 'attack-right-3', 'attack-right-4', 'attack-right-5', 'attack-right-6', 'attack-right-7'],
        'idleUp': ['idle-up'],
        'idleLeft': ['idle-left'],
        'idleRight': ['idle-right'],
        'idleDown': ['idle-down']
    },
    keys: input.keys,
    idleState: 'idleDown'
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
    } else if (player.position.y <= 0){
        player.position.y = 0;
    }

    // checkOrigin();
    player.update(ctx);
}

animate();
