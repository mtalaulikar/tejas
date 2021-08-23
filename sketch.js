const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var snow = [];
function preload() {
  bgImage = loadImage("tejas2.png");
  girlImage = loadImage("fairy1.png");
}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  
  
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  
  if(frameCount % 6 === 0){
    snow.push(new Snow(random(10,800),random(5,100),random(10,40)));
  }
  for (var j = 0; j < snow.length; j++) {
   
    snow[j].display();
  }
   
}

