const star = require('./star');
starSizes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function draw() {
  translate(200, 200);
  let ordered = [];
  for (let size of starSizes) {
    ordered.push((size + frameCount / 80) % starSizes.length);
  }
  
  ordered.sort((a, b) => b - a);
  
  for (let size of ordered) {
    let color = lerpColorFromPalette(ceil(size) % 4);
    push();
    scale(size);
    fill(color);
    star(0, 0, 30, 70, 5);
    pop();
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}
