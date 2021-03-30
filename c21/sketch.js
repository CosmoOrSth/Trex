
var bullet, wall
var weight, speed, thickness;
var damage;



function setup() {
  createCanvas(1880,1000);
  bullet = createSprite(400, 500, 100, 5);
  wall = createSprite(1700, 500, 50 , 400); 
  weight = 600
  speed = random(1,10)
  thickness = 9
}

function draw() {
  background(255,255,255);  
  background("black")
  drawSprites();
  

  

  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
    damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;
  bullet.velocityX = 0;
  }

  if (damage < 100000) {

   wall.shapeColor = "green"

  }

  if (damage > 100000) {

    wall.shapeColor = "red"
 
   }

   if (keyDown("k")) {

     bullet.velocityX = 21;

   }

   

}









