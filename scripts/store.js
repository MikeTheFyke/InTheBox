var canvas = document.getElementById('storageCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var frontY1;
var frontX1;
const canvasWidth = 1000;
const canvasHeight = 600;
var cLength;
var cWidth;
var cHeight;

var frontX1;
var frontY1;
var frontX2;
var frontY2;
var frontX3;
var frontY3;
var frontX4;
var frontY4;

var backX1;
var backY1;
var backX2;
var backY2;
var backX3;
var backY3;
var backX4;
var backY4;


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
    drawCloset();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        frontY1 = mousePos.y-(canvasHeight/2); // paddle aligns in centre with mouse
        frontX1 = mousePos.x-(canvasWidth/2);
       });
}

function drawEverything() {
    ctx.fillStyle = "grey"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

  function drawCloset(){
    const hUnit = 60;
    const xUnit = 100;
    cLength = document.getElementById("closetLength").value;
    cWidth = document.getElementById("closetWidth").value;
    cHeight = document.getElementById("closetHeight").value;
    console.log ("Length - " + cLength + " Width - " + cWidth + " Height -  " + cHeight);

    frontX1 = (canvasWidth/2) - ((cLength*xUnit)/2);
    frontY1 = (canvasHeight/2) - ((cHeight*hUnit)/2);
    frontX2 = (canvasWidth/2) + ((cLength*xUnit)/2);
    frontY2 = (canvasHeight/2) - ((cHeight*hUnit)/2);
    frontX3 = (canvasWidth/2) + ((cLength*xUnit)/2);
    frontY3 = (canvasHeight/2) + ((cHeight*hUnit)/2);
    frontX4 = (canvasWidth/2) - ((cLength*xUnit)/2);
    frontY4 = (canvasHeight/2) + ((cHeight*hUnit)/2);

    console.log ("frontX1 - " + frontX1 + " frontY1 - " + frontY1);

    backX1 = frontX1 + 50;
    backY1 = frontY1 + 50;
    backX2 = frontX2 - 50;
    backY2 = frontY2 + 50;
    backX3 = frontX3 - 50;
    backY3 = frontY3 - 50;
    backX4 = frontX4 + 50;
    backY4 = frontY4 - 50;

    ctx.strokeStyle = "yellow"; // Back side face
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX2,backY2);
    ctx.lineTo(backX3,backY3);
    ctx.lineTo(backX4,backY4);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "yellow"; // Front side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo(frontX4,frontY4);
    ctx.closePath();
    ctx.stroke();
  }