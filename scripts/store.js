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

    const wUnit = (cWidth * 30);

    backX1 = frontX1 + wUnit;
    backY1 = frontY1 + wUnit;
    backX2 = frontX2 - wUnit;
    backY2 = frontY2 + wUnit;
    backX3 = frontX3 - wUnit;
    backY3 = frontY3 - wUnit;
    backX4 = frontX4 + wUnit;
    backY4 = frontY4 - wUnit;

//// GRID
    //// Horizontal
        ctx.strokeStyle = "blue"; // X center
        ctx.beginPath();
        ctx.moveTo(frontX4 + ((backX4 - frontX4)/2), frontY4 + ((backY4 - frontY4)/2));
        ctx.lineTo(frontX3 - ((frontX3 - backX3)/2), frontY3 - ((frontY3 - backY3)/2));
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath(); // 3/4
        ctx.moveTo(frontX4 + ((backX4 - frontX4)/4), frontY4 + ((backY4 - frontY4)/4));
        ctx.lineTo(frontX3 - ((frontX3 - backX3)/4), frontY3 - ((frontY3 - backY3)/4));
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath(); // 1/4
        ctx.moveTo(backX4 - ((backX4 - frontX4)/4), backY4 + ((frontY4 - backY4)/4));
        ctx.lineTo(backX3 + ((frontX3 - backX3)/4), backY3 + ((frontY3 - backY3)/4));
        ctx.closePath();
        ctx.stroke();
    //// Vertical Plane
        ctx.strokeStyle = "lightblue"; // Z center
        ctx.beginPath();
        ctx.moveTo(frontX4 + ((backX4 - frontX4)/2), frontY4 + ((backY4 - frontY4)/2));
        ctx.lineTo(frontX3 - ((frontX3 - backX3)/2), frontY3 - ((frontY3 - backY3)/2));
        ctx.closePath();
        ctx.stroke();
////

    ctx.strokeStyle = "red"; // Back side face
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX2,backY2);
    ctx.lineTo(backX3,backY3);
    ctx.lineTo(backX4,backY4);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange"; // Left side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(backX1,backY1);
    ctx.lineTo(backX4,backY4);
    ctx.lineTo(frontX4,frontY4);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange"; // Right side face
    ctx.beginPath();
    ctx.moveTo(backX2,backY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo(backX3,backY3);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "yellow"; // Front side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY3);
    ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY1 + ((cHeight*hUnit)/4));
    ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY1 + ((cHeight*hUnit)/4));
    ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY4);
    ctx.lineTo((frontX4),frontY4);
    ctx.closePath();
    ctx.stroke();
    
  }