class Flower {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 0;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
  }


  // 버튼 위에 마우스를 댔을 때
  over(mx, my) {

    if (this.x < mx && mx < this.x2 && this.y < my && my < this.y2)
      return true;
    else
      return false;
  }

  // 버튼을 눌렀을 때
  selection(mx, my) {
    if (this.x < mx && mx < this.x2 && this.y < my && my < this.y2 && mouseIsPressed)
      return true;
    else
      return false;
  }

  show() {
    if (this.over(mouseX, mouseY)) {
      push();
      translate(this.x+(this.w/2), this.y + (this.h/2));
      this.r++;
      rotate(this.r*0.05);  
      image(img_flower, -this.w/2,-this.h/2, this.w, this.h);
      pop();
    }
    else
      image(img_flower, this.x, this.y, this.w, this.h);
  }
}