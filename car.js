class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.controls = new Controls()
    }

    draw(ctx) {
        //draw car as rectangle
        ctx.beginPath();
        ctx.rect( // -> rect(x,y,w,h)
            // center the car (rectangle lololol)
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}