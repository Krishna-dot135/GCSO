var car, wall;
var gamestate;
var PLAY = 1;
var END = 0;

var speed, weight;
var Start_Button;

function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(700,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0); 
  
if(mousePressedOver(Start_Button)){
  gamestate = PLAY;
}

if(gamestate = PLAY){
  car.velocityX = speed;
}
  if(wall.x-car.x < (car.width + wall.width)/2){
  car.velocityX = 0;
  var Deformation = 0.5*weight*speed*speed/22500;

  if(Deformation < 100){
    car.shapeColor = color(0,255,0); 
    
  }
  if (Deformation > 100 && Deformation < 180) {
    car.shapeColor = color(230,230,0);
  }
  if (Deformation > 180) {
    car.shapeColor = color(255,0,0);
  }
  gamestate = END;
}

  drawSprites();

}  
