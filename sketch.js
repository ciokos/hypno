let triangles = 100;
let side = 5;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
  noFill();
}

function draw() {
  // put drawing code here
  translate(width / 2, height / 2);
  strokeWeight(8);
  background(0);


  let old_side = side;
  let new_side = old_side * 2 * sqrt(3) / 3;
  for (let i = 1; i <= triangles; i++) {
    let r = map(sin(angle + i), -1, 1, 0, 255, true);
    let g = map(sin(angle*10 + i), -1, 1, 0, 255, true);
    let b = map(sin(angle*20 + i), -1, 1, 0, 255, true);

    stroke(r, g, b);
    draw6(new_side, old_side);
    old_side = new_side;
    new_side = old_side * 2 * sqrt(3) / 3;
    rotate(angle);
  }
  angle += 0.0015;
}

function draw6(side, v) {
  beginShape();
  vertex(-side, 0);
  vertex(-side / 2, -v);
  vertex(side / 2, -v);
  vertex(side, 0);
  vertex(side / 2, v);
  vertex(-side / 2, v);
  endShape(CLOSE);
}