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
var yellWidth = 100;
var yellThick = 150;


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
    
      ctx.fillStyle = "yellow"; // 01
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX + yellWidth , topY);
      ctx.lineTo(topX + yellWidth , topY + yellWidth);
      ctx.lineTo(topX, topY + yellWidth);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "yellow"; // 02
      ctx.beginPath();
      ctx.moveTo(topX + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick, topY + yellWidth);
      ctx.lineTo(topX + yellThick, topY + yellWidth);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "yellow"; // 03
      ctx.beginPath();
      ctx.moveTo(topX + yellThick + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick + yellThick, topY + yellWidth);
      ctx.lineTo(topX + yellThick + yellThick, topY + yellWidth);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath(); // circle 01
      ctx.arc(topX + 55, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
      ctx.stroke();

      var pointX = topX - 200;

      if (pointX <= 150){
        pointX = 150;
      }
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(topX + 55, topY + 150);
      ctx.lineTo(topX + 55, topY + 250);
      ctx.lineTo(pointX, topY + 185);
      ctx.fill();

      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(topX + 105, topY + 200);
      ctx.lineTo(topX + 5, topY + 200);
      ctx.lineTo(pointX, topY + 185);
      ctx.fill();
  }