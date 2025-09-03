let C = [];

function setup() {
  createCanvas(400, 400);
  createCircles();
}

function draw() {
  background(220);
  drawCircles();
}

function createCircles() {
  for (let i = 0; i < 10; i++) {
    C[i] = new Circle(random(0, 400), random(0, 400), random(0, 255), random(0, 255), random(0, 255), random(3, 103));
  }
}

function drawCircles() {
  for (let j = 0; j < 10; j++) {
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