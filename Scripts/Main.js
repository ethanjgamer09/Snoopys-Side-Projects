let C = [];
let cAmount = 10;

function setup() {
  createCanvas(400, 400);
  createCircles();
}

function draw() {
  background(220);
  drawCircles();
}

function createCircles() {
  for (let i = 0; i < cAmount; i++) {
    C[i] = new CClass(random(0, 400), random(0, 400), random(0, 255), random(0, 255), random(0, 255), random(3, 103));
  }
}

function drawCircles() {
  for (let j = 0; j < cAmount; j++) {
    C[j].show();
  }
}

function reset() {
  let C = [];
  createCircles();
  drawCircles();
}

function keyReleased() {
  if (keyCode === 82) {
    reset();
  }
}
