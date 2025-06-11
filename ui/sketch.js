let slider1;
let button1;

function setup() {
  createCanvas(600, 600);

  slider1 = new SliderSimple(5, 25, 100, 10, 0, 50, 10, "slider1");
  button1 = new ButtonSimple(5, 5, 10, 10, "");
}

function draw() {
  background(220);

  slider1.update();
  slider1.draw();

  button1.draw();
}


function mousePressed() {
  slider1.checkPress();
  button1.checkPress();
}

function mouseReleased() {
  slider1.release();
  button1.release();
}