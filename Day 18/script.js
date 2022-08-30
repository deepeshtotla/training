var bg, bgImage;

var mario, mario_running;
var mario_collided;

var brickGroup, brickImage;

var coinImage, coinsGroup;
var coinScore = 0;

var mushObstacleImage, turtleObstacleImage, obstaclesGroup;

var gameState = "PLAY";

var restartImg;

function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );

  brickImage = loadImage("images/brick.png");

  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png"
  );

  // Add Sounds
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");

  mushObstacleImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  mario_collided = loadAnimation("images/dead.png");

  dieSound = loadSound("sounds/dieSound.mp3");

  restartImg = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(600, 300);
  bg.addImage(bgImage);
  bg.scale = 0.5;

  mario = createSprite(200, 520, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.2;

  ground = createSprite(200, 580, 400, 10);

  brickGroup = new Group();

  coinsGroup = new Group();

  obstaclesGroup = new Group();

  mario.addAnimation("collided", mario_collided);

  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
}

function draw() {
  drawSprites();

  if (gameState == "PLAY") {
    // Make background Move
    bg.velocityX = -5;
    if (bg.x < 100) {
      bg.x = bg.width / 4;
    }

    // Make Mario Jump-Up
    if (keyDown("space")) {
      mario.velocityY = -10;

      // Mario Jump Sound
      jumpSound.play();
    }

    // Make Mario Come-Down
    mario.velocityY = mario.velocityY + 0.5;

    // Ground for Mario
    mario.collide(ground);
    ground.visible = false;

    generateBricks();

    // Stay on Bricks
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;

    generateCoins();

    // Collect Coins
    for (var i = 0; i < coinsGroup.length; i++) {
      var temp = coinsGroup.get(i);
      if (temp.isTouching(mario)) {
        coinScore++;
        //Coin Sound
        coinSound.play();

        temp.destroy();
        temp = null;
      }
    }

    generateObstacles();
    for (var i = 0; i < obstaclesGroup.length; i++) {
        var temp = obstaclesGroup.get(i);
        if (temp.isTouching(mario)) {
        //   coinScore++;
          //Coin Sound
        //   coinSound.play();
        dieSound.play();
        gameState = "END";
          temp.destroy();
          temp = null;
        }
      }

    // if (obstaclesGroup.isTouching(mario)) {
    //     //obstaclesGroup.destroy();
    //     dieSound.play();
    //     gameState = "END";
    // }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);

    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.3;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

  // Score Card
  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 500, 50);
}

function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200, 120, 40, 10);
    brick.y = random(400, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;

    brick.lifetime = 250;

    brickGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 40 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -6;

    coin.lifetime = 500;

    coinsGroup.add(coin);
  }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";

  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();

  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;

  coinScore = 0;

  restart.visible = false;
}









// //global scope
// var bg;
// var bgImage;
// var mario,mario_running;
// var ground;
// var brickImage,brickGroup;
// var coins,coinsGroup;
// var points=0;
// var coinSound,jumpSound;
// var b=0;
// var c=0;
// var obs,obsImage;
// var dead,de;
// var deadSound;
// var gameState = "PLAY";
// var restartImg;
// //Load Assets
// function preload(){

//     //load image
//      bgImage=loadImage("images/bgnew.jpg");

//      mario_running=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png");//for animation containing all images

//      brickImage = loadImage("images/brick.png");

//      coins = loadAnimation("images/con1.png","images/con2.png","images/con3.png","images/con4.png","images/con5.png","images/con6.png");

//      coinSound=loadSound("sounds/coinSound.mp3");

//      jumpSound = loadSound("sounds/jump.mp3");

//      obsImage = loadAnimation("images/mush1.png","images/mush2.png","images/mush3.png","images/mush4.png","images/mush5.png");
    
//      dead = loadAnimation("images/dead.png");

//      deadSound = loadSound("sounds/dieSound.mp3");

//      restartImg = loadImage("images/restart.png");
//     }

// //create basic skeleton with their required credentials
// function setup(){

//     //create canvas
//     createCanvas(1000,600);

//     //function to create objects
//     bg=createSprite(600, 300, 150, 50);


//     //add images on object
//     bg.addImage(bgImage);

//     bg.scale = .5;

//     mario = createSprite(200, 500);
//     mario.addAnimation("running",mario_running);
//     mario.scale = 0.2;

//     // obs = createSprite(900, 550);
//     // obs.addAnimation("obstacle",obsImage);
//     // obs.scale = 0.1;

//     //create ground
//     ground = createSprite(200,580,400,10);
//     ground.visible = false;

//     brickGroup = new Group();
//     coinsGroup = new Group();
//     obsGroup = new Group();

//   restart = createSprite(500, 300);
//   restart.addImage(restartImg);
//   restart.visible = false;

// }

// //use to redraw the objects on the canvas
// function draw(){
// //method to redraw objects
// drawSprites();
//     if (gameState == "PLAY") {
//   //make background and repeat
//     bg.velocityX = -5;
//     if(bg.x<100){
//         bg.x=bg.width/4;
//     }

//     // obs.velocityX = -10;
//     // setInterval(generateObs,5000);
   

//     //mario jump
//     if(keyDown('space')){
//         mario.velocityY = -10;
//         jumpSound.play();
//     }
    

//     //add gravity
//     mario.velocityY = mario.velocityY+0.5;


//     //mario stuck on ground
//     mario.collide(ground);


//     //call generateBricks
//     generateBricks();

//     for(var i=0;i<brickGroup.length;i++){
//         var temp = brickGroup.get(i);
//         if(mario.isTouching(temp))
//         mario.collide(temp);
//     }

    
//     generateCoins();
//     for(var i=0;i<coinsGroup.length;i++){
//         var temp = coinsGroup.get(i);
//         if(mario.isTouching(temp)){
//         coinSound.play(); 
//         temp.destroy();
//         points++;
//         temp=null;}
//     }
//     if(mario.x<200){
//         mario.x=200;
//     }
//     if(mario.y<50){
//         mario.y=50;
//     }

//     generateObs();
//     for(var i=0;i<obsGroup.length;i++){
//         var temp = obsGroup.get(i);
//         if(mario.isTouching(temp)){
//        // coinSound.play(); 
//        de=createSprite(200,530);
//        de.addImage(dead);
//        de.scale = .4;
//         temp.destroy();

//         //points++;
//         temp=null;
//         mario.destroy();
//         deadSound.play();
//         gameState = "END";
//     noLoop();}
//     }



    
//     }
//     else if (gameState === "END") {
//         bg.velocityX = 0;
//         mario.velocityY = 0;
//         mario.velocityX = 0;
    
//         obsGroup.setVelocityXEach(0);
//         coinsGroup.setVelocityXEach(0);
//         brickGroup.setVelocityXEach(0);
    
//         brickGroup.setLifetimeEach(-1);
//         coinsGroup.setLifetimeEach(-1);
//         obsGroup.setLifetimeEach(-1);
    
//         mario.changeAnimation("collided", dead);
//         mario.y = 570;
//         mario.scale = 0.4;
    
//         restart.visible = true;
//         if (mousePressedOver(restart)) {
//           restartGame();
//         }
//       }
//     textSize(40);
//     fill("brown");  
//     text("Coins Collected: " + points,320,50);

// }

// function generateObs()
// {
//     if(frameCount%50==0) //
//     {
//         var obs = createSprite(900, 550);
//         obs.x = Math.floor(random(500,1000));//random between 50 and 450\
//         //c=obs.y;
//         // console.log("coin"+c);
//     //    if((c<b)&&(c>(b+40))){
//         // if(c<b){
//         obs.addAnimation("obstacle",obsImage);
//         obs.velocityX = -8;
//         obs.lifetime = 250;
//         obs.scale = .1;
    
//         obsGroup.add(obs);
    
//     }
// }

// function generateBricks()
// {
//     if(frameCount%80==0) //
//     {
//         b=frameCount;
//         var brick = createSprite(1200,300,40,10);
//         brick.y = Math.floor(random(100,400));//random between 50 and 450
//         // b=brick.y;
//         // console.log(b);
//         brick.addImage(brickImage);
//         brick.velocityX = -5;
//         brick.lifetime = 250;
    
//         brickGroup.add(brick);
    
//     }
   


// }
// function generateCoins()
// {
//     if(frameCount%50==0) //
//     {
//         if(frameCount!=b){
//         var coin = createSprite(1200,100,40,10);
//         coin.y = Math.floor(random(50,350));//random between 50 and 450\
//         c=coin.y;
//         console.log("coin"+c);
//     //    if((c<b)&&(c>(b+40))){
//         // if(c<b){
//         coin.addAnimation("rotate",coins);
//         coin.velocityX = -10;
//         coin.lifetime = 250;
//         coin.scale = .1
    
//         coinsGroup.add(coin);
//         }
//     }
   


// }


