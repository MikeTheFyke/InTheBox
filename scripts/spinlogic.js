var canvas = document.getElementById('gameCanvas04');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topY = 0;
var topX = 0;


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
    drawBase();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        topY = mousePos.y-(Ywidth/2); // paddle aligns in centre with mouse
        topX = mousePos.x-(Xwidth/2) + 200;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

function drawBase(){
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(200,350);
  ctx.lineTo(400,250);
  ctx.lineTo(600,350);
  ctx.lineTo(400,500);
  ctx.closePath();
  ctx.fill();
}