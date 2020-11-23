class Basket {
    constructor(x, y, width, height, angle) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:10,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("white");
      stroke("blue");
      strokeWeight(3);
      rect(0, 0, this.width, this.height);
      pop();
    
    }
  }
  