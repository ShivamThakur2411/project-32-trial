class Block4{
    constructor(x, y, width, height,angle) {
        var options = {
            restitution:0.1,
            friction:1.5,
            density:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Orange Block Image.png");
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 5){
         var pos =this.body.position;
      imageMode(CENTER);
      fill("orange");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }else {
         World.remove(world, this.body);
      push();

      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

      pop();
      }

    }
    score(){
      if(this.visibility < 0 && this.visibility > -105){
        score + 2;
      }
    }
}