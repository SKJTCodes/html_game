import { Sprite } from "../sprite.js";
import { player } from "./TestSpriteCoords.js";

export const sprites = generateSprites(player.state, player.anim, player.coords, player.path);
function generateSprites(state = "idleRight", a, c, img) {
    let sprites = [];
    for (let i = 0; i < a[state].length; i++) {
        sprites.push(new Sprite({
            position: { x: i * 80 + 50, y: 100 },
            coords: c,
            animations: a,
            imageSrc: img,
            idleState: state
        }));
    }

    return sprites;
};;

