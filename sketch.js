var forest,forestImg
var boy,boyImg
var dog,dogImg
var rockImg
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
forestImg=loadImage("forest.jpg")
boyImg=loadImage("boy.gif")
dogImg=loadImage("dog.gif")
rockImg=loadImage("rock2.png")
gameOverImg=loadImage("gameOver.png")
restartImg=loadImage("restart.jpg")
}

function setup(){

  createCanvas(windowWidth,windowHeight)

  forest=createSprite(width/2,height,width,2)
  forest.addImage("foest1",forestImg)
  forest.scale=2
  forest.velocityX=1
  forest.y=height/2.1
  forest.x=width/2

  boy=createSprite(350,height-220,20,50);
  boy.addImage("boy_moving",boyImg);
  boy.scale=0.4

  dog=createSprite(90,height-180,20,50);
  dog.addImage("dog_moving",dogImg);
  dog.scale=0.3

  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.1;

  gameOver.visible = false;
  restart.visible = false;
  

  rockG=new Group();
}

function draw(){
  background("white")

  if (gameState===PLAY){

    if (forest.x < 0){
      forest.x=forest.width/2
  }

  if(keyDown("space")&& boy.y >= 100) {
    boy.velocityY = -12;
}
   boy.velocityY = boy.velocityY + 0.8

  spawnRocks()

  if(rockG.isTouching(boy)){
     gameState=END
  }

  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
   
    boy.velocityX = 0;
    rockG.velocityY = 0

    rockG.setLifetimeEach(-1);
   
 }

  drawSprites()
  
}
}

function spawnRocks(){
  if (frameCount%100===0){
  var rock=createSprite(600,height-160,20,30)
  rock.x=Math.round(random(width/1,width/1))
  rock.addImage(rockImg)
  rock.velocityX=-4
  rock.lifetime=800
  rock.scale=0.1
  rockG.add(rock)

  }
}