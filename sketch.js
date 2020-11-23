
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, ball, basket1, basket2, basket3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,385,1200,10);
	ball = new paperBall(50,370,30);
	basket1 = new Basket(1150, 313, 15, 130);
	basket2 = new Basket(1000, 313, 15, 130);
	basket3 = new Basket(1075, 370, 130, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  keyPressed();

  drawSprites();

  ground.display();
  ball.display();
  basket1.display();
  basket2.display();
  basket3.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}



