      const Engine = Matter.Engine;
      const World= Matter.World;
      const Bodies = Matter.Bodies;
      const Constraint = Matter.Constraint;

      var engine, world;

      var b1;
      var ground;
      var g2;
      var b2;
      var b3;
      var b4;
      var b5;
      var b6;
      var b7;
      var b8;
      var b9;
      var b10;
      var b11;
      var b12;
      var b13,b14,b15,b16,g3;
      var polygon;
      var slingShot;
      var polygon_image;
      var bg_image;
      var bg_image1;
      var backgroundimage;
      var sounda;
      var score=0;

function preload(){

    polygon_image=loadImage("polygon.png");
    bg_image=loadImage("bg3.jpg")  

}

function setup(){

    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    b1=new Box(300,200,60,40);
    b2=new Box(365,200,60,40);
    b3=new Box(430,200,60,40);
    b4=new Box(495,200,60,40);
    b5=new Box(325,100,60,40)
    b6=new Box(385,100,60,40)
    b7=new Box(450,100,60,40)
    b8=new Box(355,50,60,40)
    b9=new Box(415,50,60,40)
    b11=new Box(800,100,60,40)
    b12=new Box(865,100,60,40)
    b13=new Box(930,100,60,40)
    b14=new Box(830,50,60,40)
    b15=new Box(885,50,60,40)
    b16=new Box(855,0,60,40)
    g2 = new Ground(430,300,500,10);
    g3=new Ground(900,200,400,10);
    polygon=Bodies.circle(50,200,20);

    World.add(world,polygon);
    slingShot=new Slingshot(this.polygon,{x:100,y:200});

}

function draw(){

  background(bg_image);
    
    Engine.update(engine);

    b1.display();
    ground.display();
    g2.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    g3.display();

    b1.score();  
    b2.score();  
    b3.score();  
    b4.score();  
    b5.score();  
    b6.score();  
    b7.score();  
    b8.score();  
    b9.score();  
    b11.score();  
    b12.score();  
    b13.score();  
    b14.score();  
    b15.score();  
    b16.score();  
    slingShot.display();

    imageMode(CENTER)
    image(polygon_image ,polygon.position.x,polygon.position.y,40,40);

    fill("white")
    stroke("white")
    strokeWeight(1);
    textSize(40);
    text("TOWER SIEGE 3",400,50)

    textSize(20)
    text("PRESS SPACE TO GET ONE MORE CHANCE",100,390)

    textSize(24);
    text("Score : "+score,30,360);

if(score===150){

    text("YOU WON",200,200)

 }

}

function mouseDragged(){
   
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){

   slingShot.fly();

}

function keyPressed(){

if(keyCode===32){

    Matter.Body.setPosition(this.polygon,{x:50,y:200})
    slingShot.attach(polygon)

  }

}
