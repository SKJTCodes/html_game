import { Player } from "./player.js";
import { Sprite } from "./sprite.js";
import { sprites } from "./testSpriteOrigin.js";

// init
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 250;

// declare objects
const player = new Player({
    position: { x: 0, y: 0 }
});

// 832 x 1344
// rows x cols : 21 x 13
// frame w x h : 40 x 103
const sprite = new Sprite({
    position: { x: 250, y: 150 },
    imageSrc: "./assets/Characters/female.png",
    coords: {
        'walk-right-0': [[80, 720, 48, 48], [13, 0]],
        'walk-right-1': [[140, 719, 51, 49], [17, 0]],
        'walk-right-2': [[195, 719, 54, 49], [26, 0]],
        'walk-right-3': [[262, 719, 53, 49], [23, 0]],
        'walk-right-4': [[324, 720, 53, 48], [25, 0]],
        'walk-right-5': [[386, 719, 54, 49], [27, 0]],
        'walk-right-6': [[457, 719, 51, 49], [20, 0]],
        'walk-right-7': [[524, 719, 48, 49], [17, 0]]
    },
    animations: {
        'walkRight': ['walk-right-0', 'walk-right-1', 'walk-right-2', 'walk-right-3', 'walk-right-4', 'walk-right-5', 'walk-right-6', 'walk-right-7']
    }
})

function checkOrigin() {
    const xPos = 60;
    const padding = 20;
    sprites.forEach((s, i) => {
        s.position.x = padding + (i * xPos);
        s.animateIndex = i;
        s.draw(ctx);
    })
}


function animate() {
    // init
    requestAnimationFrame(animate);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // object updates
    checkOrigin();


    // sprite.animateIndex = 0;
    // sprite.draw(ctx);
    // sprite.animateIndex = 1;
    // sprite.position.x = 200;
    // sprite.draw(ctx);
    // sprite.animateIndex = 2;
    // sprite.position.x = 300;
    // sprite.draw(ctx);

    sprite.update(ctx);
}

animate();
