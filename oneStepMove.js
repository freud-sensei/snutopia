function oneStepMove(nextEvent) {
  if (counter % 20 == 19) {
    if (player.pLocation < destination) {
      player.pLocation++;
    } else {
      if (eventNo == 6) {
        eventNo = -1;
      }
      if (player.pLocation > 30) {
        player.pLocation = 31;
        // 끝까지 도착 시 엔딩 실행
        ending = 5;
      }
      boardEvent = nextEvent;
    }
    counter = 0;
  }
}