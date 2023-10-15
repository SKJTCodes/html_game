export class Player {
    constructor({position}){
        this.image = new Image();
        this.image.src = "./assets/Characters/female.png";
        this.position = position;
    }

    draw(context){
        context.drawImage(this.image, 
            0, 0, this.image.width, this.image.height,
            this.position.x, this.position.y, this.image.width, this.image.height
        );
    }
} 