class ButtonSimple {
  
    constructor(x, y, w, h, txt) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.txt = txt;
        this.pressed = false;
        this.bgcolor = 0;
      }
  
    draw() {
        strokeWeight(1);
        // Fundo
        stroke(1);
        fill(this.bgcolor);
        rect(this.x, this.y, this.w, this.h);

        noStroke();
        fill(0);
        text(this.txt, this.x+this.w+10, this.y+this.h/2+3);
    }

    checkPress() {
        if (
            mouseX >= this.x && mouseX <= this.x + this.w &&
            mouseY >= this.y && mouseY <= this.y + this.h) {
            this.bgcolor = 200;
            this.pressed = true;
        }
    }

    release() {
        this.pressed = false;
        this.bgcolor = 0;
    }
};