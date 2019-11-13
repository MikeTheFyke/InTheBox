var canvas = document.getElementById('truckCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var roof_gradient;

var Xcord = 0;
var Ycord = 0;
var topCorner = 20;
var topXCorner = 20;
const xthick = 400;
const ythick = 500;

var redTopY = 20;
var redTopX = 20;
const redXthick = 400;
const redYthick = 500;




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
        roof_gradient = ctx.createLinearGradient(redTopX,redTopY,200,180);
       });
}

function drawEverything() {
    ctx.fillStyle = "lightskyblue"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
            if (topCorner <= 50){ // Top Boundry
                topCorner = 50 ;}
            if (topCorner >= 240){ // Bottom Boundry
                topCorner = 240 ;} 
            if (topXCorner >= 550){ // Right Boundry
                topXCorner = 550 ;}
            if (topXCorner <= 50){ // Left Boundry
                topXCorner = 50 ;}


  }

function boxLeft (){

    var blueTopX = 250;
    var blueTopY = 250;
    var blueThick = 150;

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
      
    roof_gradient.addColorStop(0, "#85a3e0");
    roof_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = roof_gradient;

    // Roof
    ctx.beginPath();
    ctx.moveTo(redTopX, redTopY);
    ctx.lineTo(redTopX + redXthick, redTopY);
    ctx.lineTo(blueTopX + blueThick,blueTopY);
    ctx.lineTo(blueTopX,blueTopY);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    // Right Side
    ctx.beginPath();
    ctx.moveTo(blueTopX, blueTopY);
    ctx.lineTo(blueTopX + blueThick, blueTopY);
    ctx.lineTo(blueTopX + blueThick, blueTopY + blueThick);
    ctx.lineTo(blueTopX,blueTopY + blueThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Right Side
    ctx.beginPath();
    ctx.moveTo(blueTopX + blueThick, blueTopY);
    ctx.lineTo(redTopX + redXthick, redTopY);
    ctx.lineTo(redTopX + redXthick, redTopY + redYthick);
    ctx.lineTo(blueTopX + blueThick,blueTopY + blueThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Left Side
    ctx.beginPath();
    ctx.moveTo(redTopX,redTopY);
    ctx.lineTo(blueTopX,blueTopY);
    ctx.lineTo(blueTopX,blueTopY + blueThick);
    ctx.lineTo(redTopX,redTopY + redYthick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Floor
    ctx.beginPath();
    ctx.moveTo(blueTopX,blueTopY + blueThick);
    ctx.lineTo(blueTopX + blueThick,blueTopY + blueThick);
    ctx.lineTo(redTopX + redXthick,redTopY + redYthick);
    ctx.lineTo(redTopX,redTopY + redYthick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}