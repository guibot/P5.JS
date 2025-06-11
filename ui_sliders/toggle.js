class ToggleSimple {
  
    constructor(x, y, w, h, txt, showtxt, id, showid) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.txt = txt;
        this.showtxt = showtxt;
        this.id = id;
        this.pressed = false;
        this.showid = showid;
        this.bgOn = [200, 200, 200];   // verde ligado
        this.bgOff = [0, 0, 0];  // vermelho desligado
    }
  
    draw() {
        strokeWeight(1);
        stroke(1);
        fill(this.pressed ? this.bgOn : this.bgOff);
        rect(this.x, this.y, this.w, this.h);

        noStroke();
        fill(0);
        if (this.showtxt) text(this.txt, this.x + this.w + 10, this.y + this.h / 2 + 3);
        if (this.showid) (this.id, this.x, this.y + 25);
    }

    toggle() {
        if (
            mouseX >= this.x && mouseX <= this.x + this.w &&
            mouseY >= this.y && mouseY <= this.y + this.h
        ) {
            this.pressed = !this.pressed;
        }
    }
};
