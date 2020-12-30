class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
          
      }
      
      this.body = Bodies.rectangle(x,y,200, 200,options);
      
      World.add(world, this.body);
      this.image = loadImage("dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill(255);
      image(this.image, pos.x, pos.y, 200, 200);
      pop();
    }
  };