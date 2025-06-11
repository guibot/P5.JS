let toggles = [];
let slidersGrupos = [];
let activeGroup = 0;
let togglesTotal = 6;
let slidersTotal = 10;

function setup() {
  createCanvas(600, 400);
  textSize(12);

  // Criar 4 toggles
  for (let i = 0; i < togglesTotal; i++) {
    toggles.push(new ToggleSimple(5 + i * 15, 5, 10, 10, "Grupo " + (i + 1), false, i, false));
  }

  // Criar grupos de sliders
  for (let i = 0; i < togglesTotal; i++) {
    let grupo = [];
    for (let j = 0; j < slidersTotal; j++) {
      grupo.push(new SliderSimple(5, 25 + j * 20, 100, 10, 0, 100, random(100), "S" + (j + 1), false, true));
    }
    slidersGrupos.push(grupo);
  }
}

function draw() {
  background(240);

  // Desenhar toggles
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].draw();
  }

  // Atualizar e desenhar sliders do grupo ativo
  let grupoAtivo = slidersGrupos[activeGroup];
  for (let slider of grupoAtivo) {
    slider.update();
    slider.draw();
  }
}

function mousePressed() {
  // Verificar se algum toggle foi clicado
  for (let i = 0; i < toggles.length; i++) {
    if (
      mouseX >= toggles[i].x && mouseX <= toggles[i].x + toggles[i].w &&
      mouseY >= toggles[i].y && mouseY <= toggles[i].y + toggles[i].h
    ) {
      activeGroup = i;
      for (let j = 0; j < toggles.length; j++) {
        toggles[j].pressed = (j === i); // só o toggle ativo fica ligado
      }
    }
  }

  // Ativar drag nos sliders ativos
  for (let s of slidersGrupos[activeGroup]) {
    s.checkPress();
  }
}

function mouseReleased() {
  for (let grupo of slidersGrupos) {
    for (let s of grupo) {
      s.release();
    }
  }
}
