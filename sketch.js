const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1, bin2, bin3;
var paper;
var endPoint1, endPoint2, endPoint3;

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 495, 1000, 10);
	bin1 = new Bin(830, 480, 160, 20);
	bin2 = new Bin(740, 435, 20, 110);
	bin3 = new Bin(920, 435, 20, 110);
	paper = new Paper(100, 480, 10, PI/2);
	endPoint1 = new Ground(995, 250, 10, 500);
	endPoint2 = new Ground(5, 250, 10, 500);
	endPoint3 = new Ground(500, 5, 1000, 10);

	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background(255);

	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	paper.display();
	endPoint1.display();
	endPoint2.display();
	endPoint3.display();
  
    drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 16.5, y : -20});
	} 
}