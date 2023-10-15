import { Sprite } from "./sprite.js";

const coords = {
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
   // idle
   'idle-up': [[7, 527, 51, 49], [25, 29]],
   'idle-left': [[3, 591, 51, 49], [28, 29]],
   'idle-down': [[0, 655, 51, 49], [32, 30]],
   'idle-right': [[10, 719, 51, 49], [28, 30]],
};
const animations = {
    'walkUp': ['walk-up-0', 'walk-up-1', 'walk-up-2', 'walk-up-3', 'walk-up-4', 'walk-up-5', 'walk-up-6', 'walk-up-7'],
    'walkLeft': ['walk-left-0', 'walk-left-1', 'walk-left-2', 'walk-left-3', 'walk-left-4', 'walk-left-5', 'walk-left-6', 'walk-left-7'],
    'walkDown': ['walk-down-0', 'walk-down-1', 'walk-down-2', 'walk-down-3', 'walk-down-4', 'walk-down-5', 'walk-down-6', 'walk-down-7'],
    'walkRight': ['idle-right', 'walk-right-0', 'walk-right-1', 'walk-right-2', 'walk-right-3', 'walk-right-4', 'walk-right-5', 'walk-right-6', 'walk-right-7'],
    'attackUp': ['attack-up-0', 'attack-up-1', 'attack-up-2','attack-up-3', 'attack-up-4', 'attack-up-5','attack-up-6', 'attack-up-7'],
    'idleUp': ['idle-up', 'idle-left', 'idle-down', 'idle-right'],
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