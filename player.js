export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.speed = 0
        this.maxSpeed = 10;
    }
    update(input){
        this.x += this.speed;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}