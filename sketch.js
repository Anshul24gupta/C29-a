const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, leftwall, rightwall;
var bridge, joinpoint;
var stones=[];
var jointlink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground= new Base(0,height-10,width*2,20,"#795548",true);
  leftwall= new Base(300,height/2+50,300,100,"#8d6e63",true);
  rightwall= new Base(width-300,height/2+50,300,100,"#8d6e63",true);
  
  bridge= new Bridge(15,{x:width/2-1000,y:height/50});
  joinpoint= new Base(width-400,height/2+20,40,20,"#8d6e63",true);
  
  Matter.Composite.add(bridge.body, joinpoint);
  jointlink= new Link(bridge, joinpoint);

  for(var i=0; i<=8; i++)
  {
    var x=random(width/2-200, width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  bridge.show();
  leftwall.show();
  rightwall.show();
  for(var stone of stones)
  {
    stone.show();
  }
}
