var canvas02 = document.getElementById('gameCanvas06');
var ct = canvas02.getContext('2d');
var framesPerSecond = 30;

var centerX2 = canvas02.width / 2;
var centerY2 = canvas02.height /2;

var x21 = centerX2 - 50;
var y21 = centerY2;

var x22 = centerX2;
var y22 = centerY2 - 50;

var x23 = centerX2 + 50;
var y23 = centerY2;

var x24 = centerX2;
var y24 = centerY2 + 50;

window.onload = function() {
    setInterval(function() {
    drawEverything();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement
}

function drawEverything() {
    ct.fillStyle = "black"; // Canvas Black
    ct.fillRect(0,0,canvas02.width,canvas02.height);

    ct.fillStyle = "blue";
    ct.beginPath();
    ct.moveTo(x21,y21);
    ct.lineTo(x22,y22);
    ct.lineTo(x23,y23);
    ct.lineTo(x24,y24);
    ct.closePath();
    ct.fill();
    
  }