class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos= this.body.position;
     

      //if means that if the body's speed is below three than it can be displayed
      //else means that if it is over three then the body should be removed or become invisible\
      //super.display will not work for this code since there is no parent class 
      if (this.body.speed < 3) {
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
    else {
           World.remove(world, this.body); 
           push();
           this.visibility = this.visibility -5; 
           tint(255, this.visibility);
           image(this.image, this.body.position.x, this.body.position.y, this.body.position.width, this.body.position.height); 
           pop();
           
      }
    }
  }

