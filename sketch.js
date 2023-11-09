// let p;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // p = new Particula(width / 2, height / 2);
  s = new Sistema();
}

function draw() {
  background(250, 50);
  // // circle(mouseX, mouseY, 20);
  // if (p.alive) {
  //   p.update();
  //   p.display();
  // }
  s.update();
  s.display();
}
