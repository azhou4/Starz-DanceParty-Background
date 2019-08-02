starSizes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
iceCream= ['#f6ccec', '#e2fee0', '#6784a6', '#dfb48d', '#feffed'];
function draw() {
  translate(200, 200);
  let ordered = [];
  for (let size of starSizes) {
    ordered.push((size + frameCount / 80) % starSizes.length);
  }
  
  ordered.sort((a, b) => b - a);
  
  for (let size of ordered) {
    let color = iceCream[ceil(size) % 4];
    push();
    scale(size);
    fill(color);
    star(0, 0, 30, 70, 5);
    pop();
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}