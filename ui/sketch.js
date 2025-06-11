let slider1;
let button1;
let toggle1;

let toggles = [];


function setup() {
  createCanvas(600, 600);

  toggle1 = new ToggleSimple(5, 5, 10, 10, "toggle1");
  button1 = new ButtonSimple(5, 25, 10, 10, "button1");
  slider1 = new SliderSimple(5, 45, 100, 10, 0, 2, 0, "slider1");

 toggles.push(new ToggleSimple(5, 65, 10, 10, "", 0, false));
 toggles.push(new ToggleSimple(20, 65, 10, 10, "", 1, false));
 toggles.push(new ToggleSimple(35, 65, 10, 10, "", 2, false));
 toggles.push(new ToggleSimple(50, 65, 10, 10, "", 3, false));
 toggles.push(new ToggleSimple(65, 65, 10, 10, "", 4, false));
 toggles.push(new ToggleSimple(80, 65, 10, 10, "", 5, false));

 
}

function draw() {
  background(220);

  slider1.update();
  slider1.draw();

  button1.draw();

  toggle1.draw();

  for (let i = 0; i < toggles.length; i++) {
    toggles[i].draw();
  }

  
}


function mousePressed() {
  slider1.checkPress();
  button1.checkPress();
  toggle1.toggle();

  checkToogles();
}

function mouseReleased() {
  slider1.release();
  button1.release();
}

function checkToogles()
{
  for (let i = 0; i < toggles.length; i++) {
    if (
      mouseX >= toggles[i].x && mouseX <= toggles[i].x + toggles[i].w &&
      mouseY >= toggles[i].y && mouseY <= toggles[i].y + toggles[i].h
    ) {
      // Desativa todos
      for (let j = 0; j < toggles.length; j++) {
        toggles[j].pressed = false;
        toggles[j].bgcolor = 0;
      }

      // Ativa só o clicado
      toggles[i].pressed = true;
      toggles[i].bgcolor = 200;
      console.log(toggles[i].id);
    }
  }
}