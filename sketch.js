var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage = loadImage("cloud.png")
  groundImage = loadImage("ground2.png")

  obastacle1 = loadImage("obstacle1.png")
  obastacle2 = loadImage("obstacle2.png")
  obastacle3 = loadImage("obstacle3.png")
  obastacle4 = loadImage("obstacle4.png")
  obastacle5 = loadImage("obstacle5.png")
  obastacle6 = loadImage("obstacle6.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
var quo = 25/5
var rem = 25 % 5

//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisibleGround = createSprite(200,190,400,10)  
invisibleGround.visible = false
}

function draw() {
background(180);

//jump when the space button is pressed
if (keyDown("space") && trex.y > 140) {
  trex.velocityY = -10;
}

var rand = Math.round(random(1,10))
console.log(rand)

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
spawnClouds()
spawnObstacles()
drawSprites()
}



function spawnClouds(){

  if(frameCount % 60 === 0){
    var cloud = createSprite(600,50,50,20)
    cloud.velocityX = -4
    cloud.addImage(cloudImage)
    cloud.scale = 0.2
    cloud.y = Math.round(random(25,75))
    cloud.lifetime = 200
  }
  
  
  
}

function spawnObstacles(){

  if(frameCount % 60 === 0){
    var obstacle = createSprite(600,175,10,35)
    obstacle.velocityX = -6
    var rand = Math.round(random(1,6))
    obstacle.scale = 0.08
    switch(rand){
    case 1: obstacle.addImage(obastacle1);
     break;
     case 2: obstacle.addImage(obastacle2);
     break;
     case 3: obstacle.addImage(obastacle3);
     break;
     case 4: obstacle.addImage(obastacle4);
     break;
     case 5: obstacle.addImage(obastacle5);
     break;
     case 6: obstacle.addImage(obastacle6);
     break;

    default:break;
    }
    
  

  }
  
  
}