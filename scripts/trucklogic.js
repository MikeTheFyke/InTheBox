var canvas = document.getElementById('truckCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var roof_gradient;
var wall_gradient;

var Xcord = 0;
var Ycord = 0;
var topCorner = 20;
var topXCorner = 20;
const xthick = 400;
const ythick = 500;

var frontTopY = 20;
var frontTopX = 20;
const frontWidth = 400;
const frontHeight = 500;




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
        topCorner = mousePos.y-(ythick/2); // aligns to centre with mouse
        topXCorner = mousePos.x-(xthick/2);
        frontTopY = topCorner / 2;
        frontTopX = topXCorner / 2;
        roof_gradient = ctx.createLinearGradient(200,frontTopY,200,300);
        wall_gradient = ctx.createLinearGradient(200,frontTopY,200,600);
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

    var backTopX = 250;
    var backTopY = 250;
    var backThick = 150;

    if(frontTopX < 30) {
        frontTopX = 30;
    }
    if (frontTopX > 280){
        frontTopX = 280;
    }
    if (frontTopY < 27){
        frontTopY = 27;
    } 
    if (frontTopY > 125){
        frontTopY = 125;
    }
      
    roof_gradient.addColorStop(0, "#85a3e0");
    roof_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = roof_gradient;

    // Roof
    ctx.beginPath();
    ctx.moveTo(frontTopX, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(backTopX + backThick,backTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    wall_gradient.addColorStop(0, "#85a3e0");
    wall_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = wall_gradient;

    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backTopX, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY + backThick);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Right Side
    ctx.beginPath();
    ctx.moveTo(backTopX + backThick, backTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY + frontHeight);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Left Side
    ctx.beginPath();
    ctx.moveTo(frontTopX,frontTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Floor
    ctx.beginPath();
    ctx.moveTo(backTopX,backTopY + backThick);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}