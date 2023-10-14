import { Sprite } from "./sprite.js";

// let playerState = 'idle';
// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(e){
//     playerState = e.target.value;
// })

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 700;

const frames = new Map([
    ['idle-1', [[0, 0, 575, 523], [286, 523]]], 
    ['idle-2', [[575, 0, 575, 523], [286, 523]]], 
    ['idle-3', [[1150, 0, 575, 523], [286, 523]]], 
    ['idle-4', [[1725, 0, 575, 523], [286, 523]]], 
    ['idle-5', [[2300, 0, 575, 523], [286, 523]]], 
    ['idle-6', [[2875, 0, 575, 523], [286, 523]]], 
    ['idle-7', [[3450, 0, 575, 523], [286, 523]]]
]);

const player = new Sprite({
    position: {x: 350, y: 350},
    imageSrc: "./assets/shadow_dog/shadow_dog.png",
    frames: frames
})

let prevTime = 0;
let secPassed = 0;

function animate(){
    // init
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Items to Loop through
    player.update(ctx);
}

animate();