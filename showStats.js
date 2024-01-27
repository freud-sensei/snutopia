// 스탯을 보여주는 화면
function showStats() {
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  let textA = `${name}의`;
  let textB = "서울대 생활";
  text(`${name}의`, 567, 93);
  text("서울대 생활", 568, 113);
  fill(0);

  textSize(17);
  // -10 이하일 시 깜빡임
  for (let i = 0; i < 3; i++) {
    if (stats[i] <= -10) {
      if (5 <= frameCount % 30 && frameCount % 30 <= 19) {
        fill(255, 0, 0);
      } else {
        fill(0);
      }
    } else {
      fill(0);
    }
    text(`${statnames[i]} ${stats[i]}`, 530, 148 + 25 * i);
  }

  for (let i = 0; i < 2; i++) {
    if (stats[i + 3] <= -10) {
      if (5 <= frameCount % 30 && frameCount % 30 <= 19) {
        fill(255, 0, 0);
      } else {
        fill(0);
      }
    } else {
      fill(0);
    }
    text(`${statnames[i + 3]} ${stats[i + 3]}`, 605, 148 + 25 * i);
  }

  let average = (stats[0] + stats[1] + stats[2] + stats[3] + stats[4]) / 5;
  fill(0);
  text(`평균 ${average}`, 605, 198);
}