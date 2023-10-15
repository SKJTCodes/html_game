import { Sprite } from "./sprite.js";

const coords = {
   // walk up
   'walk-up-0': [[71, 527, 51, 49], [23, 0]],
   'walk-up-1': [[135, 527, 51, 49], [23, 0]],
   'walk-up-2': [[198, 528, 51, 48], [24, 0]],
   'walk-up-3': [[263, 527, 51, 49], [23, 0]],
   'walk-up-4': [[327, 527, 51, 49], [23, 0]],
   'walk-up-5': [[391, 527, 51, 49], [23, 0]],
   'walk-up-6': [[455, 528, 51, 48], [23, 0]],
   'walk-up-7': [[519, 527, 51, 49], [23, 0]],
   // walk left
   'walk-left-0': [[64, 592, 48, 48], [31, 0]],
   'walk-left-1': [[129, 591, 51, 49], [30, 0]],
   'walk-left-2': [[199, 591, 54, 49], [24, 0]],
   'walk-left-3': [[261, 591, 53, 49], [26, 0]],
   'walk-left-4': [[327, 592, 53, 48], [24, 0]],
   'walk-left-5': [[392, 591, 54, 49], [23, 0]],
   'walk-left-6': [[452, 591, 51, 49], [27, 0]],
   'walk-left-7': [[516, 591, 48, 49], [27, 0]],
   // walk down
   'walk-down-0': [[64, 655, 51, 49], [28, 0]],
   'walk-down-1': [[128, 655, 51, 49], [28, 0]],
   'walk-down-2': [[193, 656, 51, 48], [27, 0]],
   'walk-down-3': [[256, 655, 51, 49], [28, 0]],
   'walk-down-4': [[320, 655, 51, 49], [28, 0]],
   'walk-down-5': [[384, 655, 51, 49], [28, 0]],
   'walk-down-6': [[448, 656, 51, 48], [28, 0]],
   'walk-down-7': [[512, 655, 51, 49], [28, 0]],
   // walk right
   'walk-right-0': [[80, 720, 48, 48], [13, 0]],
   'walk-right-1': [[140, 719, 51, 49], [17, 0]],
   'walk-right-2': [[195, 719, 54, 49], [26, 0]],
   'walk-right-3': [[262, 719, 53, 49], [23, 0]],
   'walk-right-4': [[324, 720, 53, 48], [25, 0]],
   'walk-right-5': [[386, 719, 54, 49], [27, 0]],
   'walk-right-6': [[457, 719, 51, 49], [20, 0]],
   'walk-right-7': [[524, 719, 48, 49], [17, 0]],
   // idle
   'idle-up':[[7, 527, 51, 49], [20, 0]],
   'idle-left':[[3, 591, 51, 49], [24, 0]],
   'idle-down':[[0, 655, 51, 49], [26, 0]],
   'idle-right':[[10, 719, 51, 49], [19, 0]],
};
const animations = {
    'walkUp': ['walk-up-0', 'walk-up-1', 'walk-up-2', 'walk-up-3', 'walk-up-4', 'walk-up-5', 'walk-up-6', 'walk-up-7'],
    'walkLeft': ['walk-left-0', 'walk-left-1', 'walk-left-2', 'walk-left-3', 'walk-left-4', 'walk-left-5', 'walk-left-6', 'walk-left-7'],
    'walkDown': ['walk-down-0', 'walk-down-1', 'walk-down-2', 'walk-down-3', 'walk-down-4', 'walk-down-5', 'walk-down-6', 'walk-down-7'],
    'walkRight': ['walk-right-0', 'walk-right-1', 'walk-right-2', 'walk-right-3', 'walk-right-4', 'walk-right-5', 'walk-right-6', 'walk-right-7'],
    'idleUp': ['idle-up'],
    'idleLeft': ['idle-left'],
    'idleRight': ['idle-right'],
    'idleDown': ['idle-down']
}

export const sprites = [
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    }),
    new Sprite({
        position: {x: 25, y: 50},
        imageSrc: "./assets/Characters/female.png",
        coords: coords,
        animations: animations
    })
]