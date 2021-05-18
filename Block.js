class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    attach(body){
      this.sling.bodyA-body;
    }

    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      this.image= loadImage("block.png")

      if(this.body.speed < 5){
        super.display()
      }
      else{
       World.remove(world,this.body);
       Push ();
       this.visibility- this.visibility- 5;
       Tint (255,this.Visibility)
      this.image(this.image, this.body.position.x,this.body.position.y,50,50);
      Pop();
      }



    }
}