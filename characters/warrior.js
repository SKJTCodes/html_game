import { Player } from "../player.js";
import { warrior } from "./TestSpriteCoords.js";

export class Warrior extends Player {

    constructor({ position, keys }) {
        console.log(warrior.state);
        super({
            position,
            imageSrc: warrior.path,
            coords: warrior.coords,
            animations: warrior.anim,
            idleState: warrior.state,
            keys,
            showOrigin: true
        });
    }
    init(context){
        this.state = warrior.state;
        this.update(context);
    }
}