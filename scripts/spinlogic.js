var canvas = document.getElementById('gameCanvas04');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var centerX = canvas.width / 2;
var centerY = canvas.height /2;

var x1 = centerX - 200;
var y1 = centerY;

var x2 = centerX;
var y2 = centerY - 200;

var x3 = centerX + 200;
var y3 = centerY;

var x4 = centerX;
var y4 = centerY + 200;

var speed = 10;

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

function handleMouseClick(evt){
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if ( x1 <= centerX && y1 <= centerY){
        x1 += speed;
        y1 -= speed;
        x2 += speed;
        y2 += speed;
        x3 -= speed;
        y3 += speed;
        x4 -= speed;
        y4 -= speed;
    } 
    else if (x1 >= centerX && y1 <= centerY) {
        x1 += speed;
        y1 += speed;
        x2 -= speed;
        y2 += speed;
        x3 -= speed;
        y3 -= speed;
        x4 += speed;
        y4 -= speed;
    }
    else if (x1 >= centerX && y1 >= centerY) {
      x1 -= speed;
      y1 += speed;
      x2 -= speed;
      y2 -= speed;
      x3 += speed;
      y3 -= speed;
      x4 += speed;
      y4 += speed;
    }
    else if (x1 <= centerX && y1 >= centerY ) {
      x1 -= speed;
      y1 -= speed;
      x2 += speed;
      y2 -= speed;
      x3 += speed;
      y3 += speed;
      x4 -= speed;
      y4 += speed;
    }

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.closePath();
    ctx.fill();
}

window.onload = function() {
    setInterval(function() {
    drawEverything();

    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousedown', handleMouseClick); // handles mouseclick

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

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.closePath();
    ctx.fill();
  }