class Button {
  constructor(x, y, w, h, t, ts){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.t = t;
    this.ts = ts;
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
      fill(255, 0, 0);
    } else {
      fill(242, 114, 0);
    }
    noStroke();
    rect(this.x, this.y, this.w, this.h, 15);
    textSize(this.ts);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.t, this.x + this.w/2, this.y + this.h/3);
    fill(0);
  }
}