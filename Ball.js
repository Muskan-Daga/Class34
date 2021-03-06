class Ball {
    constructor(x,y,r) {
      var options = {
          restitution : 0.5 ,
          density : 12
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(RADIUS);
      strokeWeight(5);
      stroke("blue");
      fill("yellow");
      ellipse(0,0,this.r);
      pop();
    }
  };
  
  