const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));
}

class Boundary {
    static width = 48;
    static height = 48;
    constructor({ position }) {
        this.position = position;
        this.width = 48;
        this.height = 48;
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.2)';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const offset = { x: -740, y: -620 };
const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) boundaries.push(new Boundary({
            position: { x: j * Boundary.width + offset.x, y: i * Boundary.height + offset.y }
        }))
    })
})

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./img/Pellet Town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
    constructor({ position, velocity, image, frames = { max: 1 } }) {
        this.position = position;
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height;
            console.log(this.width, this.height);
        }
    }

    draw() {
        // c.drawImage(this.image, this.position.x, this.position.y);
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        );
    }
}
// 512 - this.image.width / 4 / 2,
// 288 - this.image.height / 2,

const player = new Sprite({
    position: {
        x: 512 - 192 / 4 / 2,
        y: 288 - 68 / 2
    },
    image: playerImage,
    frames: { max: 4 }
})

const background = new Sprite({
    position: { x: offset.x, y: offset.y },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

const movables = [background, ...boundaries]

function rectangularColision(rectangle1, rectangle2) {
    if (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y) {
        return true;
    }
    return false;
}

function animate() {
    window.requestAnimationFrame(animate);
    background.draw();

    boundaries.forEach(boundary => {
        boundary.draw();
    })

    player.draw();

    let moving = true;
    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularColision(player, {
                ...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 3
                }
            })) {
                moving = false;
                break;
            }
        }
        if (moving) movables.forEach(movable => { movable.position.y += 3; });
    }
    else if (keys.a.pressed && lastKey === 'a') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularColision(player, {
                ...boundary, position: {
                    x: boundary.position.x + 3,
                    y: boundary.position.y
                }
            })) {
                moving = false;
                break;
            }
        }
        if (moving) movables.forEach(movable => { movable.position.x += 3; });
    }
    else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularColision(player, {
                ...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - 3
                }
            })) {
                moving = false;
                break;
            }
        }
        if (moving) movables.forEach(movable => { movable.position.y -= 3; });
    }
    else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularColision(player, {
                ...boundary, position: {
                    x: boundary.position.x - 3,
                    y: boundary.position.y
                }
            })) {
                moving = false;
                break;
            }
        }
        if (moving) movables.forEach(movable => { movable.position.x -= 3; });
    }

}
animate();

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd';
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
});