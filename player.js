export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.speed = 0
        this.maxSpeed = 10;

        this.vy = 0;
        this.weight = 1;
    }
    update(input){
        // horizontal movement
        this.x += this.speed;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // vertical movement
        if(input.includes('ArrowUp') && this.onGround()) this.vy -= 20; // will activate only once when arrow up is pressed
        this.y += this.vy; // will make player move up by vy
         // during in air, value of vy decreases but y still moving up just at a slower pace.
         // once vy hits 0 at max jump height, it will become positive value so player will start to drop
        if(!this.onGround()) this.vy += this.weight;
        else this.vy = 0; // until it hits the ground and vy will stop increasinhg.

    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    onGround(){
        return this.y >= this.game.height - this.height;
    }
}