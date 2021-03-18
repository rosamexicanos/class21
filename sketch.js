var fixedRect, movingRect;
var obj1,obj2,obj3,obj4
var bRect1,bRect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100,100,50,50)
  obj1.shapeColor = "green"
  obj2 = createSprite(200,100,50,50)
  obj2.shapeColor = "green"
  obj3 = createSprite(300,100,50,50)
  obj3.shapeColor = "green"
  obj4 = createSprite(400,100,50,50)
  obj4.shapeColor = "green"
  bRect1 = createSprite(300,400,40,40)
  bRect1.shapeColor = "blue"
  bRect2 = createSprite(300,200,40,40)
  bRect2.shapeColor = "purple"
  bRect1.velocityY = -3
  bRect2.velocityY = 3
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,obj3)){
  movingRect.shapeColor = "red";
  obj3.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  obj3.shapeColor = "green";
 }
bounceOff(bRect1,bRect2)
  drawSprites();
}
