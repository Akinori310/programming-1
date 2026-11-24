// 最終課題を制作しよう
let tileSize = 50;

// 0 = 床、1 = 壁
let meiro = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,1],
  [1,0,0,1,0,0,0,1,0,1],
  [1,1,0,1,1,1,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,1],
  [1,0,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];


let switchX = 8;
let switchY = 7;
let switchOn = false;

let doorX = 8;
let doorY = 1;

let goalX = 9;
let goalY = 1;
let gameClear = false;

let playerX = 1;
let playerY = 1;

let cloneX = -1;
let cloneY = -1;
let cloneExists = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(20, 25, 40);

  let meiroWidth = meiro[0].length * tileSize;
  let meiroHeight = meiro.length * tileSize;

  let offsetX = (width - meiroWidth) / 2;
  let offsetY = (height - meiroHeight) / 2;

  for(let y = 0; y < meiro.length; y++){
    for(let x = 0; x < meiro[y].length; x++){

      if(meiro[y][x] == 1){
        fill(65, 75, 100);
      }else{
        fill(180, 190, 205);
      }

      rect(
        offsetX + x * tileSize,
        offsetY + y * tileSize,
        tileSize,
        tileSize
      );
    }
  }  

if(switchOn == true){
  fill(0, 255, 100);
}else{
  fill(255, 200, 0);
}
rect(
  offsetX + switchX * tileSize + 10,
  offsetY + switchY * tileSize + 10,
  tileSize - 20,
  tileSize - 20
);

// 扉
if(switchOn == true){
  fill(0, 255, 100);
}else{
  fill(200, 50, 50);
}

rect(
  offsetX + doorX * tileSize + 5,
  offsetY + doorY * tileSize + 5,
  tileSize - 10,
  tileSize - 10
);


fill(255, 220, 0);
rect(
  offsetX + goalX * tileSize + 5,
  offsetY + goalY * tileSize + 5,
  tileSize - 10,
  tileSize - 10
);

if(cloneExists == true){
  fill(100, 220, 255);
  circle(
    offsetX + cloneX * tileSize + tileSize / 2,
    offsetY + cloneY * tileSize + tileSize / 2,
    tileSize * 0.6
  );
}

fill(50, 150, 255);
circle(
  offsetX + playerX * tileSize + tileSize / 2,
  offsetY + playerY * tileSize + tileSize / 2,
  tileSize * 0.6
);

if(cloneExists == true &&
   cloneX == switchX &&
   cloneY == switchY){
  switchOn = true;
}else{
  switchOn = false;
}

if(playerX == goalX && playerY == goalY){
  gameClear = true;
}
// クリア画面
if(gameClear == true){
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("GAME CLEAR!", width / 2, height / 2);
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function canMove(x, y){

  // まず扉かどうかを確認
  if(x == doorX && y == doorY){
    return switchOn;
  }

  // 床なら通れる
  if(meiro[y][x] == 0){
    return true;
  }

  // それ以外は通れない
  return false;
}
function keyPressed(){

  if(keyIsDown(UP_ARROW)){
  if(canMove(playerX, playerY - 1)){
    playerY--;
  }
}

if(keyIsDown(DOWN_ARROW)){
  if(canMove(playerX, playerY + 1)){
    playerY++;
  }
}

if(keyIsDown(LEFT_ARROW)){
  if(canMove(playerX - 1, playerY)){
    playerX--;
  }
}

if(keyIsDown(RIGHT_ARROW)){
  if(canMove(playerX + 1, playerY)){
    playerX++;
  }
}
if(keyIsDown(" ") && cloneExists == false){
  cloneX = playerX;
  cloneY = playerY;
  cloneExists = true;
}


}

