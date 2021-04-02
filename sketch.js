
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var stone;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(900,250,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(960,300,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(235,420,30);
    launcherObject = new Slingshot(stone.body,{x:235,y:420});
	
	Engine.run(engine);

}  

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(60);
  text("Press Space To Restart",50,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  stone.display();
  launcherObject.display();

  collisiondetection(stone,mango1);
  collisiondetection(stone,mango2);
  collisiondetection(stone,mango3);
  collisiondetection(stone,mango4);
  collisiondetection(stone,mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}

function collisiondetection(lstone,lmango){
	mposition=lmango.body.position;
	sposition=lstone.body.position;
	var distance= dist(mposition.x,mposition.y,sposition.x,sposition.y);
	if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
	}
}