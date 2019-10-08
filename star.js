module.exports = function drawStar(x, y, radius1, radius2, npoints) {
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

// module.exports = function drawStar(ctx) {
// 	ctx.save();
// 	ctx.fillStyle = "blue";
// 	ctx.beginPath();
// 	ctx.moveTo(108, 0.0);
// 	ctx.lineTo(141, 70);
// 	ctx.lineTo(218, 78.3);
// 	ctx.lineTo(162, 131);
// 	ctx.lineTo(175, 205);
// 	ctx.lineTo(108, 170);
// 	ctx.lineTo(41.2, 205);
// 	ctx.lineTo(55, 131);
// 	ctx.lineTo(1, 78);
// 	ctx.lineTo(75, 68);
// 	ctx.lineTo(108, 0);
// 	ctx.closePath();
// 	ctx.fill();

// }
