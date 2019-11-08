var canvas02 = document.getElementById('gameCanvas06');
var c = canvas02.getContext('2d');

var centerX2 = canvas02.width / 2;
var centerY2 = canvas02.height /2;

const boxWidth = 50;
const speed2 = 1;
const Yspeed2 = 1;

var x1 = centerX2 - boxWidth;
var y1 = centerY2;

var x2 = centerX2;
var y2 = centerY2 - boxWidth;

var x3 = centerX2 + boxWidth;
var y3 = centerY2;

var x4 = centerX2;
var y4 = centerY2 + boxWidth;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black"; // Canvas Black
  c.fillRect(0,0,canvas02.width,canvas02.height);

  c.fillStyle = "yellow";
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.lineTo(x3,y3);
  c.lineTo(x4,y4);
  c.closePath();
  c.fill();

  if ( x1 <= centerX2 && y1 <= centerY2){ // Less than or equal to Position 2
    console.log("Less than Position 2 X " + x1 + " Y " + y1);
    x1 += speed2;
    y1 -= Yspeed2;
    x2 += speed2;
    y2 += Yspeed2;
    x3 -= speed2;
    y3 += Yspeed2;
    x4 -= speed2;
    y4 -= Yspeed2;
}
else if (x1 >= centerX2 && y1 < centerY2) { // Less than or equal to Position 3
  console.log("Less than Position 3 X " + x1 + " Y " + y1);
    x1 += speed2;
    y1 += Yspeed2;
    x2 -= speed2;
    y2 += Yspeed2;
    x3 -= speed2;
    y3 -= Yspeed2;
    x4 += speed2;
    y4 -= Yspeed2;
}
else if (x1 >= centerX2 && y1 >= centerY2) { // Less more than or eqaul to Position 4
  console.log("Less than Position 4 X " + x1 + " Y " + y1);
  x1 -= speed2;
  y1 += Yspeed2;
  x2 -= speed2;
  y2 -= Yspeed2;
  x3 += speed2;
  y3 -= Yspeed2;
  x4 += speed2;
  y4 += Yspeed2;
}
else if (x1 <= centerX2 && y1 > centerY2) { // Less than or equal to Posiiton 1
  console.log("Less than Position 1 X " + x1 + " Y " + y1);
  x1 -= speed2;
  y1 -= Yspeed2;
  x2 += speed2;
  y2 -= Yspeed2;
  x3 += speed2;
  y3 += Yspeed2;
  x4 -= speed2;
  y4 += Yspeed2;
} else if (x1 < centerX2 - boxWidth){
  x1 = centerX2 - boxWidth;
  y1 = centerY2;
  x2 = centerX2;
  y2 = centerY2 - boxWidth;
  x3 = centerX2 + boxWidth;
  y3 = centerY2;
  x4 = centerX2;
  y4 = centerY2 + boxWidth;
}
  console.log("Animation Function Firing");
}

animate();