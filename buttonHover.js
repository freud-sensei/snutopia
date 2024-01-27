// 초기화, 설명서 버튼 반짝이
function buttonHover() {
  if (boardEvent != 3 && boardEvent != 4) {
    if (330 < mouseX && mouseX < 430 && 300 < mouseY && mouseY < 400 && boardEvent == 0) {
      dice.diceRed = true;
    } else {
      dice.diceRed = false;
    }
    if (730 < mouseX && mouseX < 790 && 140 < mouseY && mouseY < 180) {
      image(reset_B, 730, 140, 60, 40);
    } else {
      image(reset_A, 730, 140, 60, 40);
    }
    if (730 < mouseX && mouseX < 790 && 190 < mouseY && mouseY < 230) {
      image(manual_B, 730, 190, 60, 40);
    } else {
      image(manual_A, 730, 190, 60, 40);
    }
  }
}