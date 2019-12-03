var canvas = document.getElementById('kittyCanvas');
var ctx = canvas.getContext('2d');
var yarnImg = document.getElementById("yarnBall");
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topCorner = 20;
var topXCorner = 20;
const xthick = 800;
const ythick = 450;


var yarnX;
var yarnY

var kittyX;
var kittyY;

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
    drawYarn();
    drawKitty();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        yarnX = mousePos.x;
        yarnY = mousePos.y;
        kittyX = mousePos.x - 400;
        kittyY = mousePos.y + 400;
        topCorner = mousePos.y-(ythick/2); // mouse positionY - (paddle height divided by Two)
        topXCorner = mousePos.x-(xthick/2); // mouse positionX - (paddle width divided by Two)
       });
}

function drawEverything() {
    ctx.fillStyle = '#ffad33'; // Canvas Orangish...
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#800040" // Ground Layer
    ctx.fillRect (0,400,1000,250);

  }


 function drawKitty(){

    if (kittyY >= 400){
        kittyY = 400;
    }
    if (kittyY <= 400){
        kittyY = 400;
    }

    if (kittyX <= 100){
        kittyX = 100;
    }
    if (kittyX >= 900){
        kittyX = 900;
    }

//// Belly
    ctx.fillStyle = "#cc4400";
    ctx.beginPath(); 
    ctx.arc(kittyX, kittyY ,70, 0, 2 * Math.PI);
    ctx.fill();
////
//// Head
    ctx.fillStyle = "#803300"; // His Left Ear
    ctx.beginPath(); 
    ctx.moveTo(kittyX + 55, kittyY - 55);
    ctx.lineTo(kittyX + 100, kittyY - 60);
    ctx.arc(kittyX + 80, kittyY - 65,23, 0, (2 * Math.PI/2), true);
    ctx.fill();

    ctx.fillStyle = "#b34700"; // Head
    ctx.beginPath(); 
    ctx.arc(kittyX + 55, kittyY - 20,60, 0, 2 * Math.PI);
    ctx.fill();

//// Right Ear
    ctx.fillStyle = "#803300"; // His Right Ear Outer
    ctx.beginPath(); 
    ctx.moveTo(kittyX + 10, kittyY - 55);
    ctx.lineTo(kittyX + 65, kittyY - 60);
    ctx.arc(kittyX + 40, kittyY - 65,23, 0, (2 * Math.PI/2), true);
    ctx.fill();

    ctx.fillStyle = "#b34700"; // His Right Ear
    ctx.beginPath(); 
    ctx.moveTo(kittyX + 10, kittyY - 55);
    ctx.lineTo(kittyX + 55, kittyY - 60);
    ctx.arc(kittyX + 35, kittyY - 65,23, 0, (2 * Math.PI/2), true);
    ctx.fill();

    ctx.fillStyle = "#803300"; // His Right Ear Inner
    ctx.beginPath(); 
    ctx.moveTo(kittyX + 15, kittyY - 55);
    ctx.lineTo(kittyX + 45, kittyY - 59);
    ctx.arc(kittyX + 30, kittyY - 65,13, 0, (2 * Math.PI/2), true);
    ctx.fill();

    ctx.fillStyle = "#b34700"; // His Right Ear Inner Inner
    ctx.beginPath(); 
    ctx.moveTo(kittyX + 20, kittyY - 55);
    ctx.lineTo(kittyX + 45, kittyY - 59);
    ctx.arc(kittyX + 35, kittyY - 65,13, 0, (2 * Math.PI/2), true);
    ctx.fill();
////

    ctx.fillStyle = "white"; // His Left Eye
    ctx.beginPath(); 
    ctx.arc(kittyX + 95, kittyY - 32,28, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#cc4400"; // Nose
    ctx.beginPath(); 
    ctx.arc(kittyX + 76, kittyY - 20,10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "white"; // His Right Eye
    ctx.beginPath(); 
    ctx.arc(kittyX + 45, kittyY - 30,30, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#803300"; // His Left Eye lid
    ctx.beginPath(); 
    ctx.arc(kittyX + 95, kittyY - 45,26, 0, (2 * Math.PI/2), true);
    ctx.fill();

    ctx.fillStyle = "#cc4400"; // His Right Eye lid
    ctx.beginPath(); 
    ctx.arc(kittyX + 47, kittyY - 45,28, 0, (2 * Math.PI/2), true);
    ctx.fill();
//// Paws
    ctx.fillStyle = "#b34700";  // His Left Back Paw
    ctx.beginPath(); 
    ctx.arc(kittyX - 10, kittyY + 100,20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#b34700"; // His Right Back Paw
    ctx.beginPath(); 
    ctx.arc(kittyX + 70, kittyY + 100,20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#cc4400"; // His Right Front Paw
    ctx.beginPath(); 
    ctx.arc(kittyX + 50, kittyY + 100,20, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#cc4400";  // His Left Front Paw
    ctx.beginPath(); 
    ctx.arc(kittyX - 50, kittyY + 100,20, 0, 2 * Math.PI);
    ctx.fill();
////
 }

