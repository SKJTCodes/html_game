import { Sprite } from "../sprite.js";
import { warrior } from "./TestSpriteCoords.js";

export const sprites = generateSprites("idleRight", warrior.anim, warrior.coords, warrior.path);
function generateSprites(state = "idleRight", a, c, img) {
    let sprites = [];
    for (let i = 0; i < a[state].length; i++) {
        sprites.push(new Sprite({
            position: { x: i * 80 + 10, y: 100 },
            coords: c,
            animations: a,
            imageSrc: img
        }));
    }

    return sprites;
};;

