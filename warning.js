// 경고 문구
function warningAlert() {
  for (let i = 0; i < 5; i++) {
    if (warning[i] == false && stats[i] <= -10) {
      warningArray.push(statnames[i])
      warning[i] = true;
      warningCounter = 0;
    } else if (warning[i] == true && stats[i] > -10) {
      warning[i] = false;
    } else {}
  }

  if (warningArray.length != 0 && ending == -1) {
    if (warningCounter != 120) {
      if (warningCounter == 3) {
        // 경고 효과음 삽입 바람.
        sound_warning.play();
      }
      fill(255, 0, 0);
      rect(0, 30, width, 50);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(26);
      warningString = "";
      for(let i = 0; i < warningArray.length - 1; i++){
        warningString += `${warningArray[i]}, `
      }
      warningString += `${warningArray[warningArray.length - 1]} 점수가 부족합니다!`
      image(img_warningSign, 100, 40, 30, 30);
      image(img_warningSign, 660, 40, 30, 30);
      if (5 <= frameCount % 30 && frameCount % 30 <= 19) {
        fill(255, 230, 10);
      } else {
        fill(255);
      }
      text(warningString, width / 2, 50);
      warningCounter++;
    } else {
      warningArray = [];
      fill(0);
    }
  }
}