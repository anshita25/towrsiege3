class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.6,
            'friction':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        if(this.body.speed<8.5)
        { var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("red");
          rect(0, 0, this.width, this.height);
          pop();}
        
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(100,this.Visiblity);
          
          pop();
        }
        
      }
     
      score()
      {
        if(this.Visiblity<0 && this.Visiblity>-10)
        {
          score=score+5;
        }
      }
     
     };


