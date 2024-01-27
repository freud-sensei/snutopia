// 바뀔 수 있는 것 (리셋 구현하기 위해 setup에서 변수 설정)
let name, stats, eventArray, counter, warning, warningArray, warningCounter, ending, eventNo, lastEvent, boardEvent, destination, endSoundPlayed;

// 바뀌지 않는 것
let input, button, result, dice, font, img_title, img_gameProgressing, img_marker, img_first, img_cursor, img_veryFirst, img_explain, img_duck, img_duck_reversal, img_flower, img_dice1, img_dice2, img_dice3, img_rdice1, img_rdice2, img_rdice3, button_startNext, reset_A, reset_B, manual_A, manual_B, img_introduction, button_close, img_warningSign, sound_BGM, sound_warning, sound_wow, sound_stop, sound_COVID, sound_graduation, sound_dice;
let duckX = 1;
let duckXB = 2;
let duckSwitch = 0;
let duckSwitchB = 0;
let imgArray = [];
let badImgArray = [];
let statnames = ['학업', '금전', '우정', '건강', '연애'];
// 파란 말 칸 (2지선다, 4지선다)
let blueArray = [3, 4, 8, 13, 14, 17, 20, 23, 24, 25, 29];
let blueFourArray = [9, 10, 15, 18];
// 바뀔 순 있지만, 초기화 시 5번이 아니라 0번으로 지정하기 때문에 여기에 둠

function preload() {
  //폰트지정
  font = loadFont('/assets/drfont.ttf');
  //소리
  sound_BGM = loadSound('/assets/BGM1.mp3');
  sound_warning = loadSound('/assets/warning.mp3');
  sound_wow = loadSound('/assets/wow.mp3');
  sound_graduation = loadSound('/assets/graduation.mp3')
  sound_stop = loadSound('/assets/stop.mp3');
  sound_COVID = loadSound('/assets/COVID.mp3');
  sound_dice = loadSound('/assets/dice.mp3');
  //게임 진행 화면
  img_veryFirst = loadImage('/assets/최초시작화면.jpg');
  img_title = loadImage('/assets/타이틀.png');
  img_explain = loadImage('/assets/설명서.png');
  img_introduction = loadImage('/assets/인트로.png');
  img_gameProgressing = loadImage('/assets/진행화면_수정본.jpg');
  img_duck = loadImage('/assets/duck.png');
  img_duck_reversal = loadImage('/assets/duck_reversal.png');
  img_flower = loadImage('/assets/flower.png');
  img_cursor = loadImage('/assets/커서.png');
  img_warningSign = loadImage('/assets/경고 아이콘.png');
  img_dice1 = loadImage('/assets/dice1.png');
  img_dice2 = loadImage('/assets/dice2.png');
  img_dice3 = loadImage('/assets/dice3.png');
  img_rdice1 = loadImage('/assets/dicer1.png');
  img_rdice2 = loadImage('/assets/dicer2.png');
  img_rdice3 = loadImage('/assets/dicer3.png');

  //초기화,설명서
  reset_A = loadImage('/assets/초기화_1.png')
  reset_B = loadImage('/assets/초기화_2.png')
  manual_A = loadImage('/assets/설명서_1.png')
  manual_B = loadImage('/assets/설명서_2.png')

  //보드게임 말
  img_marker = loadImage('/assets/말.png')

  //이벤트 이미지
  for (let i = 0; i < 8; i++) {
    badImgArray[i] = loadImage(`assets/ending${i + 1}.png`);
  }

  for (let i = 0; i < 30; i++) {
    if (blueArray.includes(i)) {
      imgArray[i] = [];
      imgArray[i][0] = loadImage(`assets/event${i + 1}-1.png`);
      imgArray[i][1] = loadImage(`assets/event${i + 1}-2.png`);
    } else if (blueFourArray.includes(i)) {
      imgArray[i] = [];
      imgArray[i][0] = loadImage(`assets/event${i + 1}-1.png`);
      imgArray[i][1] = loadImage(`assets/event${i + 1}-2.png`);
      imgArray[i][2] = loadImage(`assets/event${i + 1}-3.png`);
      imgArray[i][3] = loadImage(`assets/event${i + 1}-4.png`);
    } else {
      imgArray[i] = loadImage(`assets/event${i + 1}.png`);
    }
  }
}

function setup() {
  //BGM 재생
  sound_BGM.loop();
  // 나중에 리셋 기능을 활용하기 위해 일부 변수를 여기로 옮김
  textFont(font);
  warning = [false, false, false, false, false];
  warningArray = [];
  name = '익명';
  stats = [0, 20, 0, 50, 0];
  // 0: 주사위를 굴릴 때. 1: 주사위 눈 확인 후 캐릭터가 움직일 때. 2: 이벤트 혹은 엔딩이 진행될 때. 3: 소개글 4: 설명서. 5: 최초 시작화면. 6: 주사위를 굴리는 애니메이션 기본값 5
  boardEvent = 5;
  // 중간에 설명서를 볼 때, 직전의 이벤트가 무엇이였는지 기록하는 용도
  lastEvent = 0;
  // 이벤트 클래스용
  eventArray = [];
  // 짤막한 로딩시간 카운터
  counter = 0;
  // 한칸한칸씩 이동 가능하게
  destination = 0;
  // 경고창 사용
  warningString = "";
  warningCounter = 120;
  // 엔딩 트리거 (기본값 -1, 0 - 4 배드 엔딩, 5 졸업 엔딩)
  ending = -1;
  // 이벤트 번호 (기본값 -1, 0부터 29까지 각 칸, 30은 졸업)
  eventNo = -1;
  endSoundPlayed = false;

  // 이름 입력칸
  nameBox();
  //캔버스 크기 800*560
  createCanvas(800, 560);
  //주사위 생성
  dice = new Dice();
  //보드게임 말 생성
  player = new Player();
  // 시작창 버튼
  button_startNext = new Button(455, 415, 120, 35, '시작하기', 20);
  // 설명서 버튼
  button_close = new Button(600, 185, 70, 35, '닫기', 20);
  //쀽뺙이를 움직이게 하는 버튼
  button_duck = new Button(130, 230, 95, 74);
  button_duck2 = new Button(110, 290, 105, 79);
  //꽃입니다.
  flower1 = new Flower(100, 100, 90, 77);
  flower2 = new Flower(40, 200, 67, 57);
  flower3 = new Flower(400, 70, 77, 67);

  //pLocation은 현재 보드게임의 말이 어디에 존재하는지 나타냅니다.
  player.pLocation = 0;
  // 이벤트 클래스 선언
  for (let i = 0; i < 30; i++) {
    if (blueArray.includes(i)) {
      eventArray[i] = new BlueEvent(titleArray[i], messageArray[i], changeArray[i], imgArray[i], imgSizeArray[i]);
    } else if (blueFourArray.includes(i)) {
      eventArray[i] = new BlueFourEvent(titleArray[i], messageArray[i], changeArray[i], imgArray[i], imgSizeArray[i]);
    } else {
      eventArray[i] = new GreenEvent(titleArray[i], messageArray[i], changeArray[i], imgArray[i], imgSizeArray[i]);
    }
  }
}

function draw() {
  background(255);
  image(img_gameProgressing, 0, 0, 800, 561);
  image(img_title, 15, 15, 250, 65);
  duckMoving();
  flower1.show();
  flower2.show();
  flower3.show();
  buttonHover();
  showStats();
  gameOver();
  warningAlert();
  player.character_culculation(player.pLocation);
  player.charaterSketch(player.pLocation);

  switch (boardEvent) {
    case 0:
      // 주사위를 굴릴 때
      // 코로나 이벤트 걸리면 바로 졸업학년 칸으로 이동
      textAlign(CENTER, CENTER);
      fill(27, 66, 105);
      noStroke();
      textSize(25);
      text('주사위를 클릭해서 굴려주세요!', 395, 425);
      dice.diceSketch(int(random(1, 4)))
      break;
    case 1:
      textAlign(CENTER, CENTER);
      fill(27, 66, 105);
      noStroke();
      textSize(25);
      dice.diceRed = false;
      dice.diceSketch(result);
      counter++;
      // 한칸씩 움직이기
      if (eventNo == 6 & player.pLocation < 20) {
        // 코로나 칸
        text('졸업학년으로 이동합니다. ㅠㅠ', 395, 425);
        oneStepMove(0);
      } else {
        text(`목적지: ${titleArray[destination - 1]}`, 395, 425);
        oneStepMove(2);
      }
      break;
    case 2:
      // 이벤트 시작
      counter = 0;
      startEvent();
      break;
    case 3:
      image(img_introduction, 25, 30, 750, 500);
      button_startNext.show();
      if (button_startNext.selection(mouseX, mouseY)) {
        boardEvent = 0;
      }
      break;
    case 4:
      image(img_explain, 25, 65, 750, 430);
      button_close.show();
      if (button_close.selection(mouseX, mouseY)) {
        // 처음엔 lastEvent = 0이므로 바로 주사위 굴리는 걸로 게임이 시작되고, 중간에 설명서를 켰을 때는 해당되는 event 번호로 이동.
        boardEvent = lastEvent;
      }
      break;
    case 5:
      cursor();
      image(img_veryFirst, 0, 0, 800, 560);
      break;
    case 6:
      textAlign(CENTER, CENTER);
      fill(27, 66, 105);
      noStroke();
      textSize(25);
      text('주사위를 클릭해서 굴려주세요!', 395, 425);
      if (dice.counter > 0) {
        dice.diceSketch(int(random(1, 4)))
      } else {
        dice.diceSketch(result);
      }
      break;
    default:
  }

  if (boardEvent != 5) {
    noCursor();
    image(img_cursor, mouseX, mouseY, 20, 30);
  }
}

function nameChanger() {
  playerName.html(nameBox.value());
}

function duckMoving() {
  
  //   button_duck = new Button(130, 230, 95, 74);
  // button_duck2 = new Button(110, 290, 105, 79);
  if (duckSwitch == 0) image(img_duck, 120 + duckX, 270, 95, 74);
  else image(img_duck_reversal, 120 + duckX, 270, 95, 74);
  if (button_duck.over(mouseX, mouseY)) {
    if (duckSwitch == 0) {
      duckX+=0.5;
      if (duckX >= 40) {
        duckSwitch = 1;
      }
    } else if (duckSwitch == 1) {
      duckX-=0.5;
      if (duckX <= 0) {
        duckSwitch = 0;
      }
    }
  }
  
  if (duckSwitchB == 0) image(img_duck, 85 + duckXB, 330, 105, 79);
  else image(img_duck_reversal, 85 + duckXB, 330, 105, 79);
  if (button_duck2.over(mouseX, mouseY)) {
    if (duckSwitchB == 0) {
      duckXB +=0.5;
      if (duckXB >= 40) {
        duckSwitchB = 1;
      }
    } else if (duckSwitchB == 1) {
      duckXB-=0.5;
      if (duckXB <= 0) {
        duckSwitchB = 0;
      }
    }
  }
}



function startText() {
  //시작 텍스트
  textAlign(CENTER, CENTER);
  fill(27, 66, 105);
  noStroke();
  textSize(18);
  text("새내기부터 졸업까지! 보드게임을 통해 서울대학교 생활을 \n 간접 체험해보세요! \n", 400, 280);
  text("게임 시작 전에 오른쪽의 '설명서' 버튼을 클릭하여 게임의 규칙을 읽어보세요!", 400, 360);
  strokeWeight(1);
  fill(255);
}

//이름지정
function nameBox() {
  input = createInput('');
  input.position(275, 360);
  button = createButton("이름 입력");
  button.position(455, 360);
  button.mousePressed(nameSet);
  textSize(10);
}

function nameSet() {
  name = input.value();
  input.position(-100, -100);
  button.position(-100, 100);
  boardEvent = 3;
}

//시작 설명화면 배경
function startBackground() {
  noStroke();
  fill(255, 230, 10);
  rect(130, 100, 550, 400, 15);
  fill(255);
  strokeWeight(1);
}
// 시작 타이틀
function titleName() {
  image(img_title, 200, 130, 400, 103);
}

//주사위를 굴리는 함수입니다. 마우스를 누를 때 작동하며(if문), pLocation에 계속해서 더하게 됩니다.
function rollDice() {
  if (boardEvent == 0) {
    if (eventNo == -1) {
      result = 1;
    } else {
      result = int(random(1, 4));
    }
    // player.pLocation += result;
    destination = player.pLocation + result;
    if (destination > 31) {
      destination = 31;
    }
    dice.landWhere(random(-350, 350), random(-200, 200));
    boardEvent = 6;
  }
}

function mouseClicked() {
  if (boardEvent != 3 && boardEvent != 4) {
    // 주사위를 눌러야만 굴러감
    if (330 < mouseX && mouseX < 430 && 300 < mouseY && mouseY < 400 && boardEvent == 0) {
      rollDice();
    }
    // 초기화
    if (730 < mouseX && mouseX < 790 && 140 < mouseY && mouseY < 180) {
      reset();
    }
    // 설명서
    if (730 < mouseX && mouseX < 790 && 190 < mouseY && mouseY < 230) {
      lastEvent = boardEvent;
      boardEvent = 4;
    }
  }
}

// 주사위나 이벤트의 노란색 배경입니다.
function diceBackground(x, y, w, h, backgroundColor) {
  noStroke();
  fill(backgroundColor);
  rect(x, y, w, h, 20);
  fill(255);
  stroke(1);
}