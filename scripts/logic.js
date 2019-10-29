var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var topCorner = 20;
var topXCorner = 20;
const xthick = 800;
const ythick = 450;

var redTopY = 20;
var redTopX = 20;
const redXthick = 400;
const redYthick = 400;



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
    boxRight();
    boxLeft();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        topCorner = mousePos.y-(ythick/2); // paddle aligns in centre with mouse
        topXCorner = mousePos.x-(xthick/2);
        redTopY = topCorner / 2;
        redTopX = topXCorner / 2;
       });
}

function boxRight(){
    var yellTopX = topXCorner / 2 + 703;
    var yellTopY = topCorner / 2;
    const yellXthick = 400;
    const yellYthick = 400;
    if ( yellTopX >= 990){
        yellTopX = 990;
    } else if (yellTopX <= 500){
        yellTopX = 500;
    } else if (yellTopY >= 125){
        yellTopY = 125;
    } else if (yellTopY <= 20){
        yellTopY = 20;
    }
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(yellTopX, yellTopY);
    ctx.lineTo(yellTopX + redXthick, yellTopY);
    ctx.lineTo(yellTopX + redXthick, yellTopY + redYthick);
    ctx.lineTo(yellTopX, yellTopY + redYthick);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(yellTopX, yellTopY);
    ctx.lineTo(yellTopX + redXthick, yellTopY);
    ctx.lineTo(yellTopX + redXthick, yellTopY + redYthick);
    ctx.lineTo(yellTopX, yellTopY + redYthick);
    ctx.closePath();
    ctx.fill();
}

function boxLeft (){

    var blueTopX = topXCorner + 5;
    var blueTopY = topCorner + 5;
    var blueYthick = 300;

    if(redTopX < 30) {
        redTopX = 30;
    }
    if (redTopX > 280){
        redTopX = 280;
    }
    if (redTopY < 27){
        redTopY = 27;
    } 
    if (redTopY > 125){
        redTopY = 125;
    }

    if (blueTopX > 555){
        blueTopX = 555;
    }
    if (blueTopY > 190){
        blueYthick += -15;
    }
    if (blueTopY > 219){
        blueYthick += -20;
    }
        
    ctx.fillStyle = "red"; // Top Side
    ctx.fillRect(redTopX,redTopY,redXthick,redYthick);

    ctx.fillStyle = "blue"; // Bottom Side
    ctx.fillRect(blueTopX,blueTopY,300,blueYthick);

    ctx.fillStyle = "green"; // Right Side
    ctx.beginPath();
    ctx.moveTo(redTopX + redXthick, redTopY);
    ctx.lineTo(topXCorner + 5 + 300, blueTopY);
    ctx.lineTo(topXCorner + 5 + 300, blueTopY + blueYthick);
    ctx.lineTo(redTopX + redXthick,redTopY + redYthick);
    ctx.closePath();
    ctx.fill();
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if (topCorner <= 50){ // Top Boundry
        topCorner = 50 ;
    }
    if (topCorner >= 240){ // Bottom Boundry
        topCorner = 240 ;
    } 
    if (topXCorner >= 550){ // Right Boundry
        topXCorner = 550 ;
    }
    if (topXCorner <= 50){ // Left Boundry
        topXCorner = 50 ;
    } 
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