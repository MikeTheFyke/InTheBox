var canvas = document.getElementById('hudCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topYCorner = 20;
var topXCorner = 20;
const xthick = 950;
const ythick = 525;

ammoCount = 8;

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
            Xcord = mousePos.x;
            Ycord = mousePos.y;
            topYCorner = mousePos.y-((ythick/2) + 75);
            topXCorner = mousePos.x-((xthick/2) + 50);
            
       }
    );
    canvas.addEventListener("click", 
        function (){
            ammoCtr()
        }
    );
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if (topYCorner <= 50){ // Top Boundry
        topYCorner = 50 ;}
    if (topYCorner >= 90){ // Bottom Boundry
        topYCorner = 90 ;} 
    if (topXCorner >= 275){ // Right Boundry
        topXCorner = 275 ;}
    if (topXCorner <= 175 ){ // Left Boundry
        topXCorner = 175 ;}

    // ctx.fillStyle = "teal"; // Back Wall Grey Border
    // ctx.fillRect(topXCorner,topYCorner,xthick,ythick);
    // ctx.fillStyle = "black"; // Back Wall Black
    // ctx.fillRect(topXCorner +5,topYCorner +5 ,(xthick -10),(ythick -10));

    drawLines()

    hudFrameRed()
    drawIcons()
    blueHud()
    rectile()
    moveBar()
    drawHealthBar()
    drawRadar()
    ammoBar()
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

function drawIcons () {
    ctx.strokeStyle = "red";

    // ctx.beginPath(); // Top Middle Icon
    // ctx.lineWidth = 5;
    // ctx.moveTo((topXCorner + 270),topYCorner); // LeTop Mid Top Corner
    // ctx.lineTo( ( (topXCorner + xthick) - 270),topYCorner); // RT Mid Top Corner
    // ctx.lineTo( ( (topXCorner + xthick) - 285),topYCorner + 15); // RT SubMid
    // ctx.lineTo((topXCorner + 285),topYCorner + 15); // LeTop SubMid 
    // ctx.closePath();
    // ctx.stroke();

    ctx.beginPath(); // Bottom Middle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( ((topXCorner + xthick) - 270),topYCorner + ythick); // RiBot Mid Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick)); // LeBot Mid Corner
    ctx.lineTo((topXCorner + 285),((topYCorner + ythick) - 15 ) ); // LeBot SubMid
    ctx.lineTo( ((topXCorner + xthick) - 285),(topYCorner + ythick) -15); // RiBto SubMid
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "red"; // Right Side
    ctx.beginPath(); // Bottom SubMiddle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( ((topXCorner + xthick) - 270),(topYCorner + ythick + 30) )  ; // Right Top Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick) + 30 ); // Left Top Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick) + 50 ); // Left Bottom Corner
    ctx.lineTo( ((topXCorner + xthick) - 270),(topYCorner + ythick) + 50 ) ; // Right Bottom Corner
    ctx.closePath();
    ctx.fill();
}