class SliderSimple {
  
    constructor(x, y, w, h, min, max, val, txt, showtxt, showval) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.min = min;
        this.max = max;
        this.val = val;
        this.drag = false;
        this.txt = txt;
        this.showtxt =showtxt;
        this.showval = showval;
      }
  
    draw() {
        strokeWeight(1);
        // Fundo
        stroke(1);
        fill(220);
        rect(this.x, this.y, this.w, this.h);

        // Posição da "barra" com base no val
        let pos = map(this.val, this.min, this.max, 0, this.w);
        fill(0);
        rect(this.x, this.y, pos, this.h);
        fill(0);
        noStroke();
        if (this.showval) text(this.val.toFixed(2), this.x+this.w+5, this.y+this.h/2+3);
        if (this.showtxt) text(this.txt, this.x+this.w+40, this.y+this.h/2+3);
    }

    update() {
        if (this.drag) {
            let newval = constrain(mouseX, this.x, this.x + this.w);
            this.val = map(newval - this.x, 0, this.w, this.min, this.max);
        }
    }

    checkPress() {
        if (
            mouseX >= this.x && mouseX <= this.x + this.w &&
            mouseY >= this.y && mouseY <= this.y + this.h) {
            this.drag = true;
        }
    }

    release() {
        this.drag = false;
    }
};