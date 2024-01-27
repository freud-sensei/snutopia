function reset() {
  // 나중에 리셋 기능을 활용하기 위해 일부 변수를 여기로 옮김
  textFont(font);
  warning = [false, false, false, false, false];
  warningArray = [];
  stats = [0, 20, 0, 50, 0];
  // 0: 주사위를 굴릴 때. 1: 주사위 눈 확인 후 캐릭터가 움직일 때. 2: 이벤트 혹은 엔딩이 진행될 때. 3: 소개글 4: 설명서. 5: 최초 시작화면. 6: 주사위를 굴리는 애니메이션 기본값 5
  boardEvent = 0;
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
  button_duck = new Button(120, 270, 95, 74);
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