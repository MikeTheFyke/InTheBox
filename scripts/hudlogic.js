var canvas = document.getElementById('hudCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topYCorner = 20;
var topXCorner = 20;
const xthick = 950;
const ythick = 525;


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
    boxLeft();
    boxRight();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
        function(evt) {
            var mousePos = calculateMousePos(evt);
            Xcord = mousePos.x;
            Ycord = mousePos.y;
            topYCorner = mousePos.y-((ythick/2) + 75);
            topXCorner = mousePos.x-((xthick/2) + 50);
            // redTopY = topYCorner / 2;
            // redTopX = topXCorner / 2;
            // yellTopX = (topXCorner / 2) + 703;
            // yellTopY = topYCorner / 2;
       }
    );
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
    drawRect()
    drawLines()
    drawHudFrame()
  }

  function drawRect() {
            if (topYCorner <= 50){ // Top Boundry
                topYCorner = 50 ;}
            if (topYCorner >= 150){ // Bottom Boundry
                topYCorner = 150 ;} 
            if (topXCorner >= 550){ // Right Boundry
                topXCorner = 550 ;}
            if (topXCorner <= 50){ // Left Boundry
                topXCorner = 50 ;}
    ctx.fillStyle = "teal"; // Back Wall Grey Border
    ctx.fillRect(topXCorner,topYCorner,xthick,ythick);
    ctx.fillStyle = "black"; // Back Wall Black
    ctx.fillRect(topXCorner +5,topYCorner +5 ,(xthick -10),(ythick -10));
  }

  function drawLines() {
    ctx.strokeStyle = "teal";
    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topXCorner,topYCorner);
    ctx.stroke();

    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1400,0);
    ctx.lineTo(topXCorner + xthick,topYCorner);
    ctx.stroke();

    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,675);
    ctx.lineTo(topXCorner,topYCorner + ythick);
    ctx.stroke();

    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1400,675);
    ctx.lineTo(topXCorner + xthick,topYCorner +ythick); 
    ctx.stroke();
  }

  function drawHudFrame() {
    ctx.strokeStyle = "red";
    ctx.beginPath(); // Top Line
    ctx.lineWidth = 10;
    ctx.moveTo((topXCorner),topYCorner); // Left Top Corner
    ctx.lineTo((topXCorner + 250),topYCorner);
    ctx.lineTo((topXCorner + 275),topYCorner + 25);
    ctx.lineTo( ( (topXCorner + xthick) - 275),topYCorner + 25);
    ctx.lineTo( ( (topXCorner + xthick) - 250),topYCorner);
    ctx.lineTo( (topXCorner + xthick),topYCorner);  //Right Top Corner
    ctx.stroke();

    ctx.beginPath(); // Bottom Left Line
    ctx.lineWidth = 10;
    ctx.moveTo((topXCorner),(topYCorner + ythick));
    ctx.lineTo((topXCorner + 250),(topYCorner + ythick));
    ctx.lineTo((topXCorner + 275),((topYCorner + ythick) - 25 ) );
    ctx.stroke();

    ctx.beginPath(); // Bottom Right Line
    ctx.lineWidth = 10;
    ctx.moveTo( (topXCorner + xthick),(topYCorner + ythick) );
    ctx.lineTo( ((topXCorner + xthick) - 250),topYCorner + ythick);
    ctx.lineTo( ((topXCorner + xthick) - 275),(topYCorner + ythick) -25);
    ctx.stroke();

  }