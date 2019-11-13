var canvas = document.getElementById('truckCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var roof_gradient;
var wall_gradient;
var back_gradient;
var floor_gradient;
var edge_gradient;

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
        frontTopX = topXCorner / 2;;
       });
}

function drawEverything() {
    ctx.fillStyle = "lightskyblue"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

function boxLeft (){

    var backTopX = 250;
    var backTopY = 250;
    var backThick = 150;

    roof_gradient = ctx.createLinearGradient(200,40,200,300);
    wall_gradient = ctx.createLinearGradient(200,40,200,600)
    back_gradient = ctx.createLinearGradient(backTopX,backTopY,backTopX,backTopY + backThick);
    floor_gradient = ctx.createLinearGradient(100,150,100,450);
    edge_gradient = ctx.createLinearGradient(100,40,100,80);

    if(frontTopX < 100) {
        frontTopX = 100;
    }
    if (frontTopX > 120){
        frontTopX = 120;
    }
    if (frontTopY < 40){
        frontTopY = 40;
    } 
    if (frontTopY > 50){
        frontTopY = 50;
    }

////////////// Roof
    roof_gradient.addColorStop(0, "#85a3e0");
    roof_gradient.addColorStop(1, "#142952");

    ctx.fillStyle = roof_gradient;

    ctx.beginPath();
    ctx.moveTo(frontTopX, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(backTopX + backThick,backTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

////////////// Right Side
    wall_gradient.addColorStop(0, "#85a3e0");
    wall_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = wall_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX + backThick, backTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY + frontHeight);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Left Side
    ctx.beginPath();
    ctx.moveTo(frontTopX,frontTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Floor
    floor_gradient.addColorStop(0, "#142952");
    floor_gradient.addColorStop(1, "#85a3e0");

    ctx.fillStyle = floor_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX,backTopY + backThick);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Back Wall

    back_gradient.addColorStop(0, "#24478f");
    back_gradient.addColorStop(1, "#142952");

    ctx.fillStyle = back_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY + backThick);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Edges

    ////////////// Top
    edge_gradient.addColorStop(0, "#85a3e0");
    edge_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = edge_gradient;
    ctx.beginPath();
    ctx.moveTo(frontTopX,frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth,frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + 20);
    ctx.lineTo(frontTopX + frontWidth - 10,frontTopY + 30);
    ctx.lineTo(frontTopX + 10,frontTopY + 30);
    ctx.lineTo(frontTopX,frontTopY + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ////////////// Right Side
    ctx.fillStyle = wall_gradient;
    ctx.beginPath();
    ctx.moveTo(frontTopX + frontWidth, frontTopY -20);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY + frontHeight);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ////////////// Left Side
    ctx.beginPath();
    ctx.moveTo(frontTopX - 20,frontTopY - 20);
    ctx.lineTo(frontTopX,frontTopY - 20);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.lineTo(frontTopX - 20,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}