import { Sprite } from "./sprite.js";
import { coords } from "./assets/leona/leona.coords.js";

// let playerState = 'idle';
// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(e){
//     playerState = e.target.value;
// })

let frame = 10;
const state = 'fj';
const animations = {
    'idle': ['idle-1', 'idle-2', 'idle-3', 'idle-4', 'idle-5', 'idle-6', 'idle-7', 'idle-8'],
    'fj': ['forward-jump-1', 'forward-jump-2', 'forward-jump-3', 'forward-jump-4', 'forward-jump-5', 'forward-jump-6', 'forward-jump-7', 'forward-jump-8', 'forward-jump-9', 'forward-jump-10', 'forward-jump-11']
}

document.getElementById('prev').addEventListener('click', function(e){
    if(frame < 1) frame = animations[state].length - 1;
    else frame--; 
})
document.getElementById('next').addEventListener('click', function(e){
    if(frame >= animations[state].length - 1) frame = 0;
    else frame++;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 400;

const player = new Sprite({
    position: {x: 200, y: 200},
    imageSrc: "./assets/leona/Leona-trans.png",
    frames: coords,
    animations: animations,
    state: state
})

let prevTime = 0;
let secPassed = 0;

function animate(){
    // init
    requestAnimationFrame(animate);
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    frame++;

    // Items to Loop through
    player.update(ctx, frame);
}

animate();