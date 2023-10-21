import { Player } from "../player.js";
import { warrior } from "./TestSpriteCoords.js";

export class Warrior extends Player {

    constructor({ position, keys }) {
        super({
            position,
            imageSrc: warrior.path,
            coords: warrior.coords,
            animations: warrior.anim,
            idleState: "idleRight",
            keys,
            showOrigin: true
        });
    }
}