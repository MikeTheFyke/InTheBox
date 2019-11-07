var canvas02 = document.getElementById('gameCanvas06');
var ct = canvas02.getContext('2d');
var framesPerSecond = 30;

var centerX2 = canvas02.width / 2;
var centerY2 = canvas02.height /2;

var x1 = centerX2 - 50;
var y1 = centerY2;

var x2 = centerX2;
var y2 = centerY2 - 50;

var x3 = centerX2 + 50;
var y3 = centerY2;

var x4 = centerX2;
var y4 = centerY2 + 50;

var speed = 5;

window.onload = function() {
    setInterval(function() {
    drawEverything();
    },3000/framesPerSecond); // Hundredth of seconds

    canvas.addEventListener ('mousedown', handleMouseClick2); // handles mouseclick

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
    function(evt) {
      var mousePos = calculateMousePos(evt);
      var Xcord2 = mousePos.x;
      var Ycord2 = mousePos.y;
     });
}

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

function drawEverything() {
    ct.fillStyle = "black"; // Canvas Black
    ct.fillRect(0,0,canvas02.width,canvas02.height);
    requestAnimationFrame(drawEverything);
    console.log("animated");

    ct.fillStyle = "blue";
    ct.beginPath();
    ct.moveTo(x1,y1);
    ct.lineTo(x2,y2);
    ct.lineTo(x3,y3);
    ct.lineTo(x4,y4);
    ct.closePath();
    ct.fill();
}

function handleMouseClick2(evt){
if ( x1 <= centerX2 && y1 <= centerY2){
        x1 += speed;
        y1 -= speed;
        x2 += speed;
        y2 += speed;
        x3 -= speed;
        y3 += speed;
        x4 -= speed;
        y4 -= speed;
    } 
    else if (x1 >= centerX2 && y1 <= centerY2) {
        x1 += speed;
        y1 += speed;
        x2 -= speed;
        y2 += speed;
        x3 -= speed;
        y3 -= speed;
        x4 += speed;
        y4 -= speed;
    }
    else if (x1 >= centerX2 && y1 >= centerY2) {
      x1 -= speed;
      y1 += speed;
      x2 -= speed;
      y2 -= speed;
      x3 += speed;
      y3 -= speed;
      x4 += speed;
      y4 += speed;
    }
    else if (x1 <= centerX2 && y1 >= centerY2 ) {
      x1 -= speed;
      y1 -= speed;
      x2 += speed;
      y2 -= speed;
      x3 += speed;
      y3 += speed;
      x4 -= speed;
      y4 += speed;
    }
}