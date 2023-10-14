export class Sprite {
    constructor({position, imageSrc, frames}){
        this.spriteSheet = new Image();
        this.spriteSheet.src = imageSrc;
        this.position = position;
        this.frames = frames;
        this.curFrame = 1;
    }

    draw(context){
        const [[x, y, width, height], [originX, originY]] = this.frames.get(`idle-${this.curFrame}`);
        // this is basically simulating an origin in a different area. in actual fact, the origin is still top left
        // but through using the magic of methethics, we can simulate that the center is the new origin.
        const nx = this.position.x - originX
        const ny = this.position.y - originY
        console.log(nx, ny);
        context.drawImage(this.spriteSheet,
            // Position of cropping (x, y, width, height)
            x, y, width, height,
            // Position to display on canvas (x, y, width * scale, height * scale)
            nx, ny, width, height
        );
        this.drawDebug(context);
    }

    drawDebug(context){
        context.lineWidth = 1;
        context.beginPath();
        context.strokeStyle = 'red';
        context.moveTo(this.position.x - 5, this.position.y);
        context.lineTo(this.position.x + 4, this.position.y);
        context.moveTo(this.position.x, this.position.y - 5);
        context.lineTo(this.position.x, this.position.y + 4);
        context.stroke();
    }

    update(context){
        this.draw(context);
        this.curFrame++;
        if (this.curFrame > 7) this.curFrame = 1;
    }
}