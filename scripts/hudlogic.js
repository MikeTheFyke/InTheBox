var canvas = document.getElementById('hudCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topCorner = 20;
var topXCorner = 20;
const xthick = 800;
const ythick = 450;


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
        topCorner = mousePos.y-(ythick/2); // paddle aligns in centre with mouse
        topXCorner = mousePos.x-(xthick/2);
        redTopY = topCorner / 2;
        redTopX = topXCorner / 2;
        yellTopX = (topXCorner / 2) + 703;
        yellTopY = topCorner / 2;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
            if (topCorner <= 50){ // Top Boundry
                topCorner = 50 ;}
            if (topCorner >= 240){ // Bottom Boundry
                topCorner = 240 ;} 
            if (topXCorner >= 550){ // Right Boundry
                topXCorner = 550 ;}
            if (topXCorner <= 50){ // Left Boundry
                topXCorner = 50 ;}
    ctx.fillStyle = "grey"; // Back Wall Grey Border
    ctx.fillRect(topXCorner,topCorner,xthick,ythick);
    ctx.fillStyle = "black"; // Back Wall Black
    ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);

    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topXCorner,topCorner);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1400,0);
    ctx.lineTo(topXCorner + xthick,topCorner);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,720);
    ctx.lineTo(topXCorner,topCorner + ythick);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1400,720);
    ctx.lineTo(topXCorner + xthick,topCorner +ythick);
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }