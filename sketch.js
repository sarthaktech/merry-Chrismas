const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies; 



var snowBall=[]

function preload(){
  backgroundImg=loadImage("snow.jpg")
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  for (var a =0; a < 500; a++){  
    snowBall.push(new Snow(random(1,width),random(1,height)))
  }
  
 
 


}

function draw() {
  background(backgroundImg); 
  Engine.update(engine)
  

  
    


 
 for (var a =0; a < snowBall.length; a++){  
  snowBall[a].display()
  snowBall[a].update()
}








  drawSprites();
}