class ChoiceButton {
  constructor(x, y, w, h, text, size = 18){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.text = text;
    this.size = size;
  }
  
  
  // 버튼 위에 마우스를 댔을 때
  over(mx, my) {
    if (this.x < mx && mx < this.x2 && this.y < my && my < this.y2)
      return true;
    else
      return false;
  }
  
  // 버튼을 눌렀을 때
  selection(mx, my){
    if (this.x < mx && mx < this.x2 && this.y < my && my < this.y2 && mouseIsPressed)
      return true;
    else
      return false;
  }
  
  show() {
    if(this.over(mouseX, mouseY)){
      fill(255, 230, 10);
    } else {
      fill(255);
    }
    noStroke();
    rect(this.x, this.y, this.w, this.h, 15);
    textSize(this.size);
    textAlign(CENTER, CENTER);
    fill(27, 66, 105);
    text(this.text, this.x + this.w / 2, this.y + this.h/2 - 5);
    fill(0);
  }
}