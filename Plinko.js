class Plinko {
    constructor(x, y,diameter) {
      var options = {
          
          isStatic:true
      }
      this.diameter=diameter;
      this.body = Bodies.circle(x, y, diameter,options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      
       fill("white");
       ellipseMode(RADIUS);
      ellipse(0,0,this.diameter,this.diameter);
      pop();
    }
  };