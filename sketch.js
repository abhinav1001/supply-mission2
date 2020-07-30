var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(1800, 700);
rectMode(CENTER);


packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2;

var pakageSprite_option={
  friction:5.0,
  restitution:0.6,
  desity:0.5
}

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6
//helicopterSprite.velocityX=5;
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255)


engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:1.0,friction:5.0, isStatic:true});
packageBody.velocityX=5;
World.add(world, packageBody);


//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);


Engine.run(engine);
block=new blockA(800,150,50,150);
block2=new blockA(1000,150,50,150);
block3=new blockA(890,150,180,50);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  block.display();
  block2.display();
  block3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    packageSprite.x=6;
  }
}  





