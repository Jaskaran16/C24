
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashbin,trashbin2,trashbin3;
var ground;
var trash;

function preload()
{
trashIMG=loadImage("paper.png")
trashbinIMG=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	trash = new Trash(100,680)
	trashbin = new Trashbin(650,685,100,10)
	trashbin2 = new Trashbin(600,650,10,100)
	trashbin3 = new Trashbin(700,650,10,100)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  trash.display()
  trashbin.display()
  trashbin2.display()
  trashbin3.display()
  ground.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:85})
}
}


