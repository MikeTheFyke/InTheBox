var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topY = 20;
var topX = 20;
const Xwidth = 800;
const Ywidth = 450;
var yellX = 100;
var yellY = 100;

function calculateMousePos(evt){      // an event fires when mouse moves
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x:mouseX,   // Object Literal
      y:mouseY    // Object Literal
    };
  }

window.onload = function() {
    setInterval(function() {
    drawEverything();
    drawBox();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        topY = mousePos.y-(Ywidth/2); // paddle aligns in centre with mouse
        topX = mousePos.x-(Xwidth/2);
        yellX = topX -200;
        yellY = topY -50;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
            if (topY <= 50){ // Top Boundry
                topY = 50 ;}
            if (topY >= 240){ // Bottom Boundry
                topY = 240 ;} 
            if (topX >= 550){ // Right Boundry
                topX = 550 ;}
            if (topX <= 50){ // Left Boundry
                topX = 50 ;}
    ctx.fillStyle = "grey"; // Back Wall Grey Border
    ctx.fillRect(topX,topY,Xwidth,Ywidth);
    ctx.fillStyle = "black"; // Back Wall Black
    ctx.fillRect(topX +5,topY +5 ,790,440);

    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topX,topY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1400,0);
    ctx.lineTo(topX + Xwidth,topY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,720);
    ctx.lineTo(topX,topY + Ywidth);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1400,720);
    ctx.lineTo(topX + Xwidth,topY +Ywidth);
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  function drawBox(){
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX + 50 , topY);
      ctx.lineTo(topX + 50,topY + 50);
      ctx.lineTo(topX, topY + 50);
      ctx.closePath();
      ctx.fill();
  }