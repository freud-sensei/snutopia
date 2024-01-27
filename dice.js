// 주사위 클래스입니다.
let shakeA = 0;
let shakeB = 0;

class Dice {
  constructor() {
    this.diceRed = false;
    this.counter = 20;
    this.landX = 380;
    this.landY = 350;
    this.destX = 0;
    this.destY = 0;
  }

  // 주사위 숫자결정
  diceResult() {
    return int(random(1, 4));
  }

  // 주사위 나오는 방식입니다. sketch.js에서 1~6까지의 랜덤한 값을 받으면 
  // 여기서 가져와서 1이면 1을 표시하고 2면 2를 표시하고 ...
  // 수정: 1에서 3으로
  diceSketch(result) {
    //console.log(this.counter, this.landX, this.landY, this.destX, this.destY);
    imageMode(CENTER);
    push();
    translate(this.landX, this.landY);
    if (boardEvent == 6 & this.counter > 0) {
      if (this.counter == 20){
        sound_dice.play();
      }
      this.diceRed = true;
      rotate(frameCount % 60);
      shakeA = random(-3, 3);
      shakeB = random(-3, 3);
      this.counter -= 1;
      this.landX += this.destX / 20;
      this.landY -= this.destY / 20;
    } else if (boardEvent == 6 & this.counter <= 0 && -30 < this.counter) {
      this.diceRed = false;
      this.counter -= 1;
    } else if (boardEvent == 6 & this.counter == -30) {
      boardEvent = 1;
      this.counter = 20;
      this.landX = 380;
      this.landY = 350;
    } else if (this.mouseHold(mouseX, mouseY)) {
      shakeA = random(-5, 5);
      shakeB = random(-5, 5);
    } else {
      shakeA = 0;
      shakeB = 0;
    }

    if (result == 1) {
      this.display1();
    } else if (result == 2) {
      this.display2();
    } else if (result == 3) {
      this.display3();
    }
    // console.log(result);
    pop();
    imageMode(CORNER);
  }

  mouseHold(mx, my) {
    if (330 < mx && mx < 430 && 300 < my && my < 400 && mouseIsPressed)
      return true;
    else
      return false;
  }

  //주사위 1~6까지 나타내는 것입니다. 색깔은 마음대로 바꾸셔도 됩니다.
  // 주사위1
  display1() {
    if (this.diceRed) {
      image(img_rdice1, shakeA, shakeB, 100, 100);
    } else {
      image(img_dice1, 0, 0, 100, 100);
    }

  }
  // 주사위2
  display2() {
    if (this.diceRed) {
      image(img_rdice2, shakeA, shakeB, 100, 100);
    } else {
      image(img_dice2, 0, 0, 100, 100);
    }
  }
  // 주사위3
  display3() {
    if (this.diceRed) {
      image(img_rdice3, shakeA, shakeB, 100, 100);
    } else {
      image(img_dice3, 0, 0, 100, 100);
    }
  }

  landWhere(_x, _y) {
    this.destX = _x;
    this.destY = _y;
  }

}