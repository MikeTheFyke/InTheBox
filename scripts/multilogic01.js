var canvas = document.getElementById('gameCanvas05');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var centerX = canvas.width / 2;
var centerY = canvas.height /2;

var x1 = centerX - 50;
var y1 = centerY;

var x2 = centerX;
var y2 = centerY - 50;

var x3 = centerX + 50;
var y3 = centerY;

var x4 = centerX;
var y4 = centerY + 50;

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
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        var Xcord = mousePos.x;
        var Ycord = mousePos.y;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.closePath();
    ctx.fill();
    
  }