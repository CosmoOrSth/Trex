
var car, wall
var weight, speed;
var deformation;



function setup() {
  createCanvas(1880,1000);
  car = createSprite(400, 500, 100, 50);
  wall = createSprite(1700, 500, 50 , 400); 

}

function draw() {
  background(255,255,255);  
  background("black")
  drawSprites();
  

  weight = 10000;
  speed = 21;

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
  deformation = 0.5 * weight * speed * speed/22500;
  car.velocityX = 0;
  }

  if (deformation <= 80) {

   car.shapeColor = "green"

  }

  if (deformation >= 180) {

    car.shapeColor = "red"
 
   }

   if (deformation >= 80 && deformation <= 180) {

    car.shapeColor = "yellow"
 
   }

   if (keyDown("k")) {

     car.velocityX = 21;

   }

   

}









