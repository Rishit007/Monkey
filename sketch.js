
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(400,400);
  //making monkey
  monkey = createSprite(75,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  monkey.setCollider("rectangle",0,0,800,600);
  //monkey.debug=true;
  
  //making ground
  ground = createSprite(300,400,800,160);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  //making groups
  foodGroup= new Group();
  obstacleGroup = new Group();
  
}


function draw() {
 background(126,227,251);
  //making working score
  textSize(20);
  textFont("Comic Sans MS");
  text("Survival Time: " + score,200,20)
  score = score + Math.round(getFrameRate()/60);
  
  
  //making jump function
  if(monkey.isTouching(obstacleGroup)&& monkey.y>=250) {
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.6;
  
  
  //making the monkey collide with ground
  monkey.collide(ground);  
  
  
  //making moving ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  //mentioning new functions
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  //making food for monkey
  if(frameCount%80===0){
   banana = createSprite(500,Math.round(random(120,200)));
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-4;
   banana.lifetime=150;
  
   foodGroup.add(banana);
  }
}


function obstacles(){
  //making obstales
  if(frameCount%300===0){
    obstacle = createSprite(500,300);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.lifetime=120;
    
    obstacleGroup.add(obstacle);
  }
}




