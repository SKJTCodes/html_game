import { shadow_dog_coords } from "./assets/shadow_dog/shadow_dog.js";

let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
//sprite sheet width = 6876px
// sprite sheet height = 5230px
playerImage.src = './assets/shadow_dog/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate(){
    const sprite_coords = shadow_dog_coords[playerState][frameX];
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, 
        sprite_coords['x'], sprite_coords['y'], sprite_coords['width'], sprite_coords['height'], 
        0, 0, spriteWidth, spriteHeight
    );
   
    // every 5th gameFrame, will load 1 sprite from sheet
    if(gameFrame % staggerFrames == 0){
        if(frameX < shadow_dog_coords[playerState].length - 1) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();