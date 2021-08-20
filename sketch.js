var paddle;
var ball;
var wall1;
var wall2;
var wall3;
var screenWidth;
var screenHeight;
var window1;

function draw(){
  background("black")
  paddle.x=World.mouseX
  if (keyDown("enter")){
    ball.velocityX=5
    ball.velocityY=5
  }

    createEdgeSprites();
    
    ball.bounceOff(paddle)
    ball.bounceOff(wall1);
    ball.bounceOff(wall2);
    ball.bounceOff(wall3);
    if(ball.velocityY<12 && ball.velocityY>-12){
    ball.velocityX *= 5.5;
    ball.velocityY *= 5.5;
    }


    drawSprites();
}




function setup(){
    createCanvas(1024,655)
  ball=createSprite(512,327.5,25,25)
  paddle=createSprite(512,655,100,15)
  wall1=createSprite(0,655,12,1500)
  wall2=createSprite(1024,200,12,1500)
  wall3=createSprite(500,0,1500,12)
  wall1.shapeColor=("black")
  wall2.shapeColor=("black")
  wall3.shapeColor=("black")

}

