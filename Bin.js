class Bin{
    constructor(x, y, width, height){
        var options={
            density : 2,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(0, 32, 128);
        rect(pos.x, pos.y, this.width, this.height); 
    }
}