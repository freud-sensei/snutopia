// 배드엔딩 트리거
function gameOver() {
  for (let i = 0; i < 5; i++) {
    if (stats[i] <= -25) {
      ending = i;
      boardEvent = 2;
    }
  }
}

// 칸에 따라 이벤트 종류가 달라짐
function startEvent() {
  // 이벤트를 테스트할 땐 아래 주석처리해 주세
  eventNo = player.pLocation - 1;
  // 배드엔딩 - 졸업엔딩 - 파란 칸 - 파란 칸(4지선다) - 초록 칸 순서대로
  if (0 <= ending && ending <= 4) {
    let gr = new GrayEvent(ending, badImgArray[ending], badSizeArray[ending]);
    gr.display();
  } else if (ending == 5) {
    let w = new WhiteEvent(stats);
    w.display();
  } else if (blueArray.includes(eventNo) || blueFourArray.includes(eventNo)) {
    blueTrigger();
  } else {
    greenTrigger();
  }
}

// 파란 칸 트리거
function blueTrigger() {
  let b = eventArray[eventNo];
  b.display();
  b.changeValue();
  if (b.next == true) {
    for (let i = 0; i < 5; i++) {
      stats[i] += b.change[b.choiceNum][i];
    }
    b.choiceNum = -1;
    b.next = false;
    boardEvent = 0;
  }
}

// 초록 칸 트리거
function greenTrigger() {
  let g = eventArray[eventNo];
  g.display();
  if (g.next == true) {
    if (eventNo == 6) {
      boardEvent = 1;
      destination = 19;
    } else {
      boardEvent = 0;
    }
    for (let i = 0; i < 5; i++) {
      stats[i] += g.change[i];
    }
  }
}