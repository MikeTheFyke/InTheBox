var canvas = document.getElementById('gameCanvas05');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var centerX = canvas.width / 2;
var centerY = canvas.height /2;

var width = 50;

var x01 = centerX - width;
var y01 = centerY;

var x02 = centerX;
var y02 = centerY - width;

var x03 = centerX + width;
var y03 = centerY;

var x04 = centerX;
var y04 = centerY + width;

var speed = 10;
var Yspeed = 10;

window.onload = function() {
    setInterval(function() {
    drawEverything();
    },3000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousedown', handleMouseClick); // handles mouseclick

}

function handleMouseClick(evt){
  if ( x01 <= centerX && y01 <= centerY){ // Less than or equal to Position 2
    console.log("Less than Position 2 X " + x01 + " Y " + y01);
    x01 += speed;
    y01 -= Yspeed;
    x02 += speed;
    y02 += Yspeed;
    x03 -= speed;
    y03 += Yspeed;
    x04 -= speed;
    y04 -= Yspeed;
}
else if (x01 > centerX && y01 < centerY) { // Less than or equal to Position 3
  console.log("Less than Position 3 X " + x01 + " Y " + y01);
    x01 += speed;
    y01 += Yspeed;
    x02 -= speed;
    y02 += Yspeed;
    x03 -= speed;
    y03 -= Yspeed;
    x04 += speed;
    y04 -= Yspeed;
}
else if (x01 > centerX && y01 > centerY) { // Less more than or eqaul to Position 4
  console.log("Less than Position 4 X " + x01 + " Y " + y01);
  x01 -= speed;
  y01 += Yspeed;
  x02 -= speed;
  y02 -= Yspeed;
  x03 += speed;
  y03 -= Yspeed;
  x04 += speed;
  y04 += Yspeed;
}
else if (x01 < centerX && y01 > centerY) { // Less than or equal to Posiiton 1
  console.log("Less than Position 1 X " + x01 + " Y " + y01);
  x01 -= speed;
  y01 -= Yspeed;
  x02 += speed;
  y02 -= Yspeed;
  x03 += speed;
  y03 += Yspeed;
  x04 -= speed;
  y04 += Yspeed;
}
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x01,y01);
    ctx.lineTo(x02,y02);
    ctx.lineTo(x03,y03);
    ctx.lineTo(x04,y04);
    ctx.closePath();
    ctx.fill();
  }