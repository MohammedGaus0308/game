const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var crane,craneImg
var box,ground
function preload(){
bg=loadImage("images/bg.jpg")
craneImg=loadImage("images/crane.png")
}
function setup()
 {
  var canvas = createCanvas(2000,850);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(1000,840,2000,10)
  crane=createSprite(1400,400,20,30)
  crane.addImage(craneImg)
  crane.scale=1.8
  
boxes()
  
}

function draw() 
{
  background(bg)
  Engine.update(engine);
  box.display()
  ground.display()
  drawSprites()
 
  
}
function boxes(){
  box=new Box(1000,100,100,100)


}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    Matter.Body.setStatic(box.body,false)
  }
}