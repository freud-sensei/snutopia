// 보드게임에 나오는 말을 조종하는 클래스입니다.
// 캐릭터x 와 캐릭터y의 값은 sketch.js에서 나오는 width와 height값입니다. characterX = width / characterY = height
// width와 height를 썼을 때 오류가 나서 따로 지정했습니다. --> 외부 변수 말고 constructor에서 characterX와 characterY를 지정해 주니 문제가 사라져서 수정

let playerArraysX;
let playerArraysY;

playerArraysX = new Array(32);
playerArraysY = new Array(32);

playerArraysX[0] =100; playerArraysY[0] =488;
playerArraysX[1] =167; playerArraysY[1] =488;
playerArraysX[2] =195 ; playerArraysY[2] =441;
playerArraysX[3] =221 ; playerArraysY[3] =394 ;
playerArraysX[4] =246 ; playerArraysY[4] =344 ;
playerArraysX[5] =271 ; playerArraysY[5] =296 ;
playerArraysX[6] =295 ; playerArraysY[6] =246 ;
playerArraysX[7] =322 ; playerArraysY[7] =202 ;
playerArraysX[8] =343 ; playerArraysY[8] =157 ;
playerArraysX[9] =370 ; playerArraysY[9] =121 ;
playerArraysX[10] =397 ; playerArraysY[10] =156 ;
playerArraysX[11] =430 ; playerArraysY[11] =195 ;
playerArraysX[12] =460 ; playerArraysY[12] =235 ;
playerArraysX[13] =490 ; playerArraysY[13] =278 ;
playerArraysX[14] =520 ; playerArraysY[14] =316 ;
playerArraysX[15] =550 ; playerArraysY[15] =356 ;
playerArraysX[16] =579 ; playerArraysY[16] =392 ;
playerArraysX[17] =604 ; playerArraysY[17] =428 ;
playerArraysX[18] =634 ; playerArraysY[18] =465 ;
playerArraysX[19] =659 ; playerArraysY[19] =500 ;
playerArraysX[20] =705; playerArraysY[20] =486;
playerArraysX[21] =705; playerArraysY[21] =441;
playerArraysX[22] =705; playerArraysY[22] =397;
playerArraysX[23] =705; playerArraysY[23] =356;
playerArraysX[24] =705; playerArraysY[24] =318;
playerArraysX[25] = 705; playerArraysY[25] = 276;
playerArraysX[26] = 705; playerArraysY[26] = 236;
playerArraysX[27] = 705; playerArraysY[27] = 189;
playerArraysX[28] = 705; playerArraysY[28] = 141;
playerArraysX[29] = 705; playerArraysY[29] = 100;
playerArraysX[30] = 705; playerArraysY[30] = 61;
playerArraysX[31] = 662; playerArraysY[31] = 61;

class Player {
  
  constructor() {
    this.characterX = width / 20;
    this.characterY = height / 20;
    this.pLocation = 0;
  }
//보드게임 말의 간단한 모습입니다.
  charaterSketch(i) {
    rectMode(CENTER);
    fill(200, 100, 100);
    // img_marker = rect(playerArraysX[i], playerArraysY[i], 40, 40);
    image(img_marker,playerArraysX[i]-40,playerArraysY[i]-40,80,80);
    rectMode(CORNER);
    fill(255);
  }
// 보드게임 말이 움직이게 하는 계산식입니다.
  // x값을 받을때 1~9까지는 1열(컴퓨터로는 0열) / 다음은 마지막 행 / 다음은 마지막 열/ 다음은 첫번째 행 순서입니다.
  // 직접 실행해보면 이해가 빠릅니다. 첫 시작지점부터 반시계방향으로 움직이게 해 두었습니다. 
  // 숫자는 변수를 안쓰고 숫자 그래도 사용했습니다. 나중에 보드게임 판의 규칙이 정형화되면 숫자를 변수로 바꾸면됩니다.
  
  character_move(x) {
    
  }
  
  character_culculation(x) {
  }
}