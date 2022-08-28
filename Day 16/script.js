var image = document.getElementById("imgo");
var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
const player = {
    w: 70,
    h: 70,
    x: 450,
    y: 260,
    speed: 5,
    dx: 0,
    dy: 0
  };
function drawplayer(){
    ctx.drawImage(image,player.x,player.y,player.w,player.h);
    
    }
function cler(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function newPost(){
    player.x+=player.dx;
    player.y+=player.dy;
    
    detectWalls();
  }
  
  function detectWalls() {
    // Left wall
    if (player.x < 0) {
      player.x = 0;
    }
  
    // Right Wall
    if (player.x + player.w > canvas.width) {
      player.x = canvas.width - player.w;
    }
  
    // Top wall
    if (player.y < 0) {
      player.y = 0;
    }
  
    // Bottom Wall
    if (player.y + player.h > canvas.height) {
      player.y = canvas.height - player.h;
    }
  }
  function update() {
    cler();
  
    drawplayer();
  
    newPost();
  
    requestAnimationFrame(update);
  }
  // console.log("sagar");

  function moveUp() {
    player.dy = -player.speed;
  }
  
  function moveDown() {
    player.dy = player.speed;
  }
  
  function moveRight() {
    player.dx = player.speed;
  }
  
  function moveLeft() {
    player.dx = -player.speed;
  }
  
  function keyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowRight" || e.key === "Right") {
      moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      moveLeft();
    } else if (e.key === "ArrowUp" || e.key === "Up") {
      moveUp();
    } else if (e.key === "ArrowDown" || e.key === "Down") {
      moveDown();
    }
  }
  
  
  function keyUp(e) {
    if (
      e.key == "Right" ||
      e.key == "ArrowRight" ||
      e.key == "Left" ||
      e.key == "ArrowLeft" ||
      e.key == "Up" ||
      e.key == "ArrowUp" ||
      e.key == "Down" ||
      e.key == "ArrowDown"
    ) {
      player.dx = 0;
      player.dy = 0;
    }
  }
  
  update();
  
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
  