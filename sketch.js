var wall,car,speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);


  car=createSprite(25, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=colour(255);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);
  if(wall.x-car.x < (car.width+wall.width)/2);
  {
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
  car.shapeColor=color("red");
  }
  if(deformation<180&&deformation>80)
  {
  car.shapeColor=color("yellow");
  }
  if(deformation<80)
  {
  car.shapeColor=color("green");
  }
  }
  drawSprites();
}