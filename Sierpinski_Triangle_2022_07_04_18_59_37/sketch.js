let x1, y1;
let x2, y2;
let x3, y3;
let r;
let px, py;

function setup() {
  createCanvas(500, 500);
  background(220);
  x1 = 250;
  x2 = 100;
  x3 = 400;
  y1 = 50;
  y2 = 400;
  y3 = 400;
  r = 0.5;
  px = 270;
  py = 150;
  circle(x1,y1,r)
  circle(x2,y2,r)
  circle(x3,y3,r)
  circle(px,py,r)
  
  
}

function draw() {
  let point = random([1,2,3])
  switch (point) {
    case 1:
      px = (px + x1)/2
      py = (py + y1)/2
      circle(px, py, r);
      break;
    case 2:
      px = (px + x2)/2
      py = (py + y2)/2
      circle(px, py, r);
      break;
    case 3:
      px = (px + x3)/2
      py = (py + y3)/2
      circle(px, py, r);
      break;
  }
  frameRate(1000)
  
  
}