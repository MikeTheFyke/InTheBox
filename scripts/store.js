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

var clicked = false;
const gridCtr = 8;
var doors = 0;
var shelfCtr = 0;

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
    drawBox();
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
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

  function drawCloset(){
    const yUnit = 60;  /// Defining a foot -> pixel scale - Y meaning Height scale
    const xUnit = 100; /// Defining a foot -> pixel scale - X meaning Length scale

    cLength = document.getElementById("closetLength").value; /// Receiving Closet Dimensions
    cWidth = document.getElementById("closetWidth").value; /// as whole numbers... hopefully.
    cHeight = document.getElementById("closetHeight").value;

    /// Defining front face of storage face co-ordinates. 
    frontX1 = (canvasWidth/2) - ((cLength*xUnit)/2);  /// converted to a pixel scale
    frontY1 = (canvasHeight/2) - ((cHeight*yUnit)/2); /// ie: 7 = 420px (7 X yUnit(60))
    frontX2 = (canvasWidth/2) + ((cLength*xUnit)/2);  /// ie: 7 = 700px (7 X xUnit(100))
    frontY2 = (canvasHeight/2) - ((cHeight*yUnit)/2);
    frontX3 = (canvasWidth/2) + ((cLength*xUnit)/2);
    frontY3 = (canvasHeight/2) + ((cHeight*yUnit)/2);
    frontX4 = (canvasWidth/2) - ((cLength*xUnit)/2);
    frontY4 = (canvasHeight/2) + ((cHeight*yUnit)/2);

    /// Defining back face of storage face co-ordinates. 
    const wUnit = (cWidth * 30); /// Defining a foot -> pixel scale - W meaning Width scale

    backX1 = frontX1 + wUnit;
    backY1 = frontY1 + wUnit;
    backX2 = frontX2 - wUnit;
    backY2 = frontY2 + wUnit;
    backX3 = frontX3 - wUnit;
    backY3 = frontY3 - wUnit;
    backX4 = frontX4 + wUnit;
    backY4 = frontY4 - wUnit;

    ctx.fillStyle = "red"; // Back side face
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX2,backY2);
    ctx.lineTo(backX3,backY3);
    ctx.lineTo(backX4,backY4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "orange"; // Left side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(backX1,backY1);
    ctx.lineTo(backX4,backY4);
    ctx.lineTo(frontX4,frontY4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "orange"; // Right side face
    ctx.beginPath();
    ctx.moveTo(backX2,backY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo(backX3,backY3);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "darkred"; // Roof face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(backX2,backY2);
    ctx.lineTo(backX1,backY1);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "darkred"; // Floor face
    ctx.beginPath();
    ctx.moveTo(backX4,backY4);
    ctx.lineTo(backX3,backY3);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo(frontX4,frontY4);
    ctx.closePath();
    ctx.fill();

  drawGrid();

    //// Front Side Face & Door Logic
    if (document.getElementById("doorCount").value < 2){
      ctx.strokeStyle = "yellow"; // Front side face
      ctx.beginPath();
      ctx.moveTo(frontX1,frontY1);
      ctx.lineTo(frontX2,frontY2);
      ctx.lineTo(frontX3,frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY1 + ((cHeight*yUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY1 + ((cHeight*yUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY4);
      ctx.lineTo((frontX4),frontY4);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.strokeStyle = "yellow"; // Front side face
      ctx.beginPath();
      ctx.moveTo(frontX1,frontY1);
      ctx.lineTo(frontX2,frontY2);
      ctx.lineTo(frontX3,frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/6),frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/6),frontY1 + ((cHeight*yUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/6),frontY1 + ((cHeight*yUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/6),frontY4);
      ctx.lineTo((frontX4),frontY4);
      ctx.closePath();
      ctx.stroke();
    }
  
    //// Shelf Logic
    shelfCtr = document.getElementById("shelfCount").value;
    var shelfFrontX1 = frontX1 + ((backX1 - frontX1)/cWidth);
    var shelfFrontY1 = frontY1 + ((frontY4 - frontY1)/cHeight);
    console.log("Shelf  X1 : "+ shelfFrontX1 + "  Y1 : "+shelfFrontY1);

    for (var i2 = 0; i2 < shelfCtr; i2++){
      ctx.strokeStyle = "blue"; // Shelf back side face 01
      ctx.beginPath();
      ctx.moveTo(backX1, backY1 + (((backY4 - backY1)/cHeight)*3) - (((backY4 - backY1)/cHeight)*i2));
      ctx.lineTo(backX2, backY1 + (((backY4 - backY1)/cHeight)*3) - (((backY4 - backY1)/cHeight)*i2));
      ctx.lineTo(backX2, backY1 + (((backY4 - backY1)/cHeight)*3) - (((backY4 - backY1)/cHeight)*i2) + 10);
      ctx.lineTo(backX4, backY1 + (((backY4 - backY1)/cHeight)*3) - (((backY4 - backY1)/cHeight)*i2) + 10);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*2)) , frontY1 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*3) - (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*i2) + (canvas.Height - frontY4) );
      ctx.lineTo( (frontX2 - (((backX1 - frontX1)/document.getElementById("closetWidth").value)*2)) , frontY2 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*3) - (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*i2) + (canvas.Height - frontY4) );
      ctx.lineTo( (frontX2 - (((backX1 - frontX1)/document.getElementById("closetWidth").value)*2)) , frontY2 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*3) - (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*i2) + (canvas.Height - frontY4) );
      ctx.lineTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*2)) , frontY1 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*3) - (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*i2) + (canvas.Height - frontY4) );
      ctx.closePath();
      ctx.stroke();

    } 

  }