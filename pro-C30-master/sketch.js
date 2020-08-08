const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine;
var world;

var stand1,stand2;
var holder,ball,ground;

var slingShot,ball;

var score = 0;

function preload(){
  ballImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  stand1 = new Stand(490,300,240,10);
  stand2 = new Stand(750,190,180,10);



 //STAND 1
 //Row 1
  block1 = new Block(415,280,30,30);
  block2 = new Block(445,280,30,30);
  block3 = new Block(475,280,30,30);
  block4 = new Block(505,280,30,30);
  block5 = new Block(535,280,30,30);
  block6 = new Block(565,280,30,30);

 //Row 2
 block7 = new Block(430,250,30,30);
 block8 = new Block(460,250,30,30);
 block9 = new Block(490,250,30,30);
 block10 = new Block(520,250,30,30);
 block11 = new Block(550,250,30,30);

//Row 3
 block12 = new Block(445,220,30,30);
 block13 = new Block(475,220,30,30);
 block14 = new Block(505,220,30,30);
 block15 = new Block(535,220,30,30);

 //Row 4
 block16 = new Block(475,190,30,30); 
 block17 = new Block(505,190,30,30); 

 //STAND 2
//Row 1
block18 = new Block(690,170,30,30);
block19 = new Block(720,170,30,30); 
block20 = new Block(750,170,30,30); 
block21 = new Block(780,170,30,30); 
block22 = new Block(810,170,30,30);

//Row 2
block23 = new Block(705,140,30,30);  
block24 = new Block(735,140,30,30); 
block25 = new Block(765,140,30,30); 
block26 = new Block(795,140,30,30); 

//Row 3
block27 = new Block(720,110,30,30);
block28 = new Block(750,110,30,30); 
block29 = new Block(780,110,30,30);

//Row 4
block30 = new Block(750,80,30,30);

//Ball
ball = Bodies.circle(50,200,20);
World.add(world,ball);

//Sling Shot
slingShot = new Slingshot(this.ball,{x:150,y:200});

}

function draw() {
  background(0,100);  
  Engine.update(engine);

 text("Score  " + score, 650, 50);
 text("x:"+mouseX,50,50); text("y:"+mouseY,50,70);

    ground.display();

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();

    imageMode(CENTER);
    image(ballImg,ball.position.x,ball.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball);   
  }
}
