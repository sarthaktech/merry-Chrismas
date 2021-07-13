class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            
        }
        this.r = 3;
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(1,width),y:random(1,height)})
        }
    }

};