// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  strokeWeight(0.2);
     
  
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if(i%2==0&&j%2!=0||i%2!=0&&j%2==0)
        fill(170);
      else fill(255);
        rect(size*i,size*j,size,size);
    }
  }
 for(let i =0;i<8;i++){
    for(let j=0;j<8;j++){
      if(i%2==0&&j%2!=0&&j<3||i%2!=0&&j%2==0&&j<3){
       fill(255,0,0);circle(size*i+size/2,size*j+size/2,size*5/6);
      }
     else if(i%2==0&&j%2!=0&&j>4||i%2!=0&&j%2==0&&j>4){
      fill(0);circle(size*i+size/2,size*j+size/2,size*5/6);
    }
  
    }
  }
  }