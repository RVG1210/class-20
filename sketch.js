var object1,object2
function setup() {
  createCanvas(800,400);
  object1=createSprite(100, 200, 50, 50);
  object1.shapeColor = "blue"
  object1.velocityX= +1
  
  object2=createSprite(400, 200, 50, 50);
  object2.shapeColor = "orange"
  object2.velocityX = -1

}

function draw() {
  background("black");
  if (object1.x-object2.x<=object1.width/2+object2.width/2
    && object2.x-object1.x<=object1.width/2+object2.width/2) 
    {object1.velocityX=-1
    object2.velocityX=+1}

  drawSprites();
}