class Paper{
    constructor(x, y, radius, angle){
        var options = {
            density : 1.2,
            restitution : 1,
            friction : 0.5,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(255, 51, 0);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}