var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

window.onload = function() {
    setInterval(function() {
    drawEverything();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement
}

function drawEverything() {
    console.log("Drawing Back");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);       // blanks screen black
    ctx.fillStyle = "grey";
    ctx.fillRect(90,50,120,60);
    ctx.fillStyle = "black";
    ctx.fillRect(92,52,116,56);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(90,50);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo(210,50);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,150);
    ctx.lineTo(90,110);
    ctx.strokeStyle = "grey";
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(300,150);
    ctx.lineTo(210,110);
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }