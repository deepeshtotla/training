//global scope
var bg;
var bgImage;
var mario,mario_running;
var ground;
var brickImage,brickGroup;
var coins,coinsGroup;
var points=0;
var coinSound,jumpSound;
var b=0;
var c=0;
var obs,obsImage;
var dead,de;
var deadSound;
//Load Assets
function preload(){

    //load image
     bgImage=loadImage("images/bgnew.jpg");

     mario_running=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png");//for animation containing all images

     brickImage = loadImage("images/brick.png");

     coins = loadAnimation("images/con1.png","images/con2.png","images/con3.png","images/con4.png","images/con5.png","images/con6.png");

     coinSound=loadSound("sounds/coinSound.mp3");

     jumpSound = loadSound("sounds/jump.mp3");

     obsImage = loadAnimation("images/mush1.png","images/mush2.png","images/mush3.png","images/mush4.png","images/mush5.png");
    
     dead = loadImage("images/dead.png");

     deadSound = loadSound("sounds/dieSound.mp3");
    }

//create basic skeleton with their required credentials
function setup(){

    //create canvas
    createCanvas(1000,600);

    //function to create objects
    bg=createSprite(600, 300, 150, 50);


    //add images on object
    bg.addImage(bgImage);

    bg.scale = .5;

    mario = createSprite(200, 500);
    mario.addAnimation("running",mario_running);
    mario.scale = 0.2;

    // obs = createSprite(900, 550);
    // obs.addAnimation("obstacle",obsImage);
    // obs.scale = 0.1;

    //create ground
    ground = createSprite(200,580,400,10);
    ground.visible = false;

    brickGroup = new Group();
    coinsGroup = new Group();
    obsGroup = new Group();

}

//use to redraw the objects on the canvas
function draw(){
  //make background and repeat
    bg.velocityX = -5;
    if(bg.x<100){
        bg.x=bg.width/4;
    }

    // obs.velocityX = -10;
    // setInterval(generateObs,5000);
   

    //mario jump
    if(keyDown('space')){
        mario.velocityY = -10;
        jumpSound.play();
    }
    

    //add gravity
    mario.velocityY = mario.velocityY+0.5;


    //mario stuck on ground
    mario.collide(ground);


    //call generateBricks
    generateBricks();

    for(var i=0;i<brickGroup.length;i++){
        var temp = brickGroup.get(i);
        if(mario.isTouching(temp))
        mario.collide(temp);
    }

    
    generateCoins();
    for(var i=0;i<coinsGroup.length;i++){
        var temp = coinsGroup.get(i);
        if(mario.isTouching(temp)){
        coinSound.play(); 
        temp.destroy();
        points++;
        temp=null;}
    }

    generateObs();
    for(var i=0;i<obsGroup.length;i++){
        var temp = obsGroup.get(i);
        if(mario.isTouching(temp)){
       // coinSound.play(); 
       de=createSprite(200,530);
       de.addImage(dead);
       de.scale = .4;
       
        temp.destroy();

        //points++;
        temp=null;
        mario.destroy();
        deadSound.play();
    noLoop();}
    }


if(mario.x<200){
    mario.x=200;
}
if(mario.y<50){
    mario.y=50;
}
    //method to redraw objects
    drawSprites();

    textSize(40);
    fill("brown");  
    text("Coins Collected: " + points,320,50);

}

function generateObs()
{
    if(frameCount%50==0) //
    {
        var obs = createSprite(900, 550);
        obs.x = Math.floor(random(500,1000));//random between 50 and 450\
        //c=obs.y;
        // console.log("coin"+c);
    //    if((c<b)&&(c>(b+40))){
        // if(c<b){
        obs.addAnimation("obstacle",obsImage);
        obs.velocityX = -8;
        obs.lifetime = 250;
        obs.scale = .1
    
        obsGroup.add(obs);
    
    }
}

function generateBricks()
{
    if(frameCount%80==0) //
    {
        b=frameCount;
        var brick = createSprite(1200,300,40,10);
        brick.y = Math.floor(random(100,400));//random between 50 and 450
        // b=brick.y;
        // console.log(b);
        brick.addImage(brickImage);
        brick.velocityX = -5;
        brick.lifetime = 250;
    
        brickGroup.add(brick);
    
    }
   


}
function generateCoins()
{
    if(frameCount%50==0) //
    {
        if(frameCount!=b){
        var coin = createSprite(1200,100,40,10);
        coin.y = Math.floor(random(50,350));//random between 50 and 450\
        c=coin.y;
        console.log("coin"+c);
    //    if((c<b)&&(c>(b+40))){
        // if(c<b){
        coin.addAnimation("rotate",coins);
        coin.velocityX = -5;
        coin.lifetime = 250;
        coin.scale = .1
    
        coinsGroup.add(coin);
        }
    }
   


}


