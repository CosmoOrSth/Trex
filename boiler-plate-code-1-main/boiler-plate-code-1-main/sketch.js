var fixedRect, movingRect;
var fweg

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite( 600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite( 400, 200 ,80 ,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fweg = createSprite( 200, 100, 50, 80);
  fweg.shapeColor = "green";
  fweg.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisionDetector(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else if (collisionDetector(movingRect,fweg)) {

    movingRect.shapeColor= "blue";
    fweg.shapeColor = "blue";

  }

  else {

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fweg.shapeColor = "green";

  }

  drawSprites();
}
