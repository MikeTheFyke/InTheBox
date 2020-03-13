var canvas = document.getElementById('antCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;

// Front Frame Variables
var frameTopY = 20;
var frameTopX = 20;
const frameWidthX = 800;
const frameHeightY = 450;
// Back Frame Variables
const frameBackX1 =  250;
const frameBackX2 = 1100;
const frameBackY1 =   90;
const frameBackY2 =  590;
//


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
        frameTopY = mousePos.y-(frameHeightY/2) + 50; 
        frameTopX = mousePos.x-(frameWidthX/2) + 50;
       });
}

function drawEverything() {
    ctx.fillStyle = "white"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
            if (frameTopY <= 140){ // Top Boundry
                frameTopY = 140 ;}
            if (frameTopY >= 142){ // Bottom Boundry
                frameTopY = 142 ;} 
            if (frameTopX >= 300){ // Right Boundry
                frameTopX = 300 ;}
            if (frameTopX <= 200){ // Left Boundry
                frameTopX = 200 ;}

    
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 2;
    
    ctx.beginPath(); // Top Left Line - out to in
    ctx.moveTo(frameTopX  - 50,  frameTopY - 100 );
    ctx.lineTo( 250, 90);
    ctx.stroke();
    ctx.beginPath(); // Top Right Line
    ctx.moveTo(frameTopX + frameWidthX + 100, frameTopY - 100);
    ctx.lineTo( 1100 ,  90 );
    ctx.stroke();
    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(frameTopX  - 50, frameTopY + frameHeightY + 50 );
    ctx.lineTo(  250 ,  590 );
    ctx.stroke();
    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 );
    ctx.lineTo( 1100 ,  590 );
    ctx.stroke();

    drawBackFrame();
    drawFrontFrame();
    drawLeftFrame();
    drawRightFrame();
  }

function drawBackFrame() {
    // Back Frame
    ctx.strokeStyle="brown";
    ctx.beginPath();
    ctx.moveTo( frameBackX1 , frameBackY1 ); // Top Left
    ctx.lineTo( frameBackX2 , frameBackY1 ); // Top Right
    ctx.lineTo( frameBackX2 , frameBackY2 ); // Bottom Right
    ctx.lineTo( frameBackX1 , frameBackY2 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();
}

function drawFrontFrame() {
    // Front Frame
    ctx.strokeStyle="brown"; 
    ctx.beginPath();
    ctx.moveTo(frameTopX  - 50, frameTopY - 100 ); // Top Left
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY - 100); // Top Right
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 ); // Bottom Right
    ctx.lineTo(frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();
}

function drawLeftFrame() {

    // Left Side Frame
    ctx.strokeStyle="brown";
    ctx.beginPath();
    ctx.moveTo(frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
    ctx.lineTo( frameTopX - 50, frameTopY - 100 ); // Top Left
    ctx.lineTo(  250 ,  90 ); // Top Left
    ctx.lineTo(  250 ,  590 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    // Left side X 01
    ctx.strokeStyle="blue";
    ctx.beginPath();
    ctx.moveTo(frameTopX  - 50, frameTopY - 100 ); // Top Left
    ctx.lineTo(  250 ,  590 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    // Left side X 02
    ctx.beginPath();
    ctx.moveTo(  250 ,  90 ); // Top Left
    ctx.lineTo(frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    leftEdge()
}

function leftEdge() {
// frameWork ////////////////////////////
var Xspacing = (frameBackX1 - (frameTopX - 50)) / 8;
var Yspacing = (frameBackY1 - (frameTopY - 100))/ 8; 

var sideLeftOutX  = ( frameTopX - 50 )  + Xspacing; // Back X1 - FrontX1 / 8
var sideLeftInnX  =   frameBackX1 - Xspacing; // BackX1 - 1/8 Side Length
var sideLeftInnY1 = ( frameTopY - 100 ) + ( Yspacing * 7 ); // FrontY1 + 7/8 Front Length
var sideLeftInnY2 =  ( frameTopY + frameHeightY + 50 ) - (Yspacing * 11); // FrontY2 - 7/8 Front Length
var sideLeftOutY1 = ( frameTopY - 100 ) + (Yspacing); // FrontY2 - FrontY1
var sideLeftOutY2 = ( frameTopY + frameHeightY + 50 ) - (Yspacing*6); // FrontY2 - 1/8 of Front Length

ctx.strokeStyle="red"; 
ctx.beginPath(); // Inner Edge
ctx.moveTo( frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
ctx.lineTo( frameTopX - 50, frameTopY - 100 ); // Top Left
ctx.lineTo( sideLeftOutX, sideLeftOutY1); // Top Left OutEdge 01
ctx.lineTo( sideLeftOutX, sideLeftOutY2); // Top Left OutEdge 02
ctx.lineTo( sideLeftInnX,  sideLeftInnY2); // Top Right InnEdge 02
ctx.lineTo( sideLeftInnX,  sideLeftInnY1); // Top Right InnEdge 01
ctx.lineTo( frameBackX1, frameBackY1); // Top Right
ctx.lineTo( frameBackX1, frameBackY2); // Bottom Right
ctx.closePath();
ctx.stroke();

ctx.beginPath(); // Outter Edge
ctx.moveTo( frameTopX    - 70,  frameTopY + frameHeightY + 50 ); // Bottom Left - 20
ctx.lineTo( frameTopX    - 70,  frameTopY - 100 ); // Top Left
ctx.lineTo( sideLeftOutX - 20,  sideLeftOutY1); // Top Left OutEdge 01
ctx.lineTo( sideLeftOutX - 20,  sideLeftOutY2); // Top Left OutEdge 02
ctx.lineTo( sideLeftInnX - 20,  sideLeftInnY2); // Top Right InnEdge 02
ctx.lineTo( sideLeftInnX - 20,  sideLeftInnY1); // Top Right InnEdge 01
ctx.lineTo( frameBackX1  - 20,  frameBackY1); // Top Right
ctx.lineTo( frameBackX1  - 20,  frameBackY2); // Bottom Right 
ctx.closePath();
ctx.stroke();

ctx.fillStyle="brown"; // Front Face
ctx.beginPath();
ctx.moveTo( frameTopX    - 70,  frameTopY + frameHeightY + 50 ); // Outter Bottom Left
ctx.lineTo( frameTopX    - 70,  frameTopY - 100 );               // Outter Top Left
ctx.lineTo( frameTopX - 50, frameTopY - 100 );                   // Inner  Top Left
ctx.lineTo( frameTopX  - 50, frameTopY + frameHeightY + 50 );    // Inner Bottom Left
ctx.closePath();
ctx.fill();
ctx.beginPath(); // Bottom And Back Faces
ctx.moveTo( frameTopX    - 70,  frameTopY + frameHeightY + 50 ); // Outter Bottom Left
ctx.lineTo( frameTopX  - 50, frameTopY + frameHeightY + 50 );    // Inner Bottom Left
ctx.lineTo( frameBackX1, frameBackY2);                           // Inner Bottom Right
ctx.lineTo( frameBackX1, frameBackY1);                           // Inner  Top Right
ctx.lineTo( frameBackX1  - 20,  frameBackY1);                    // Outter Top Right
ctx.lineTo( frameBackX1  - 20,  frameBackY2);                    // Outter Bottom Right
ctx.closePath();
ctx.fill();

ctx.fillStyle="lightbrown"; // Front Top Face
ctx.beginPath();
ctx.moveTo( frameTopX    - 70,  frameTopY - 100 ); // Outter Top Left
ctx.lineTo( frameTopX - 50, frameTopY - 100 );     // Inner Top Left
ctx.lineTo( sideLeftOutX, sideLeftOutY1);          // Inner  Top Left inner 01
ctx.lineTo( sideLeftOutX - 20,  sideLeftOutY1);    // Outter Top Left inner 01
ctx.closePath();
ctx.fill();

ctx.beginPath(); // Back Top Face
ctx.moveTo( frameBackX1  - 20,  frameBackY1); // Outter Top Right
ctx.lineTo( frameBackX1, frameBackY1);     // Inner Top Right
ctx.lineTo( sideLeftInnX,  sideLeftInnY1);          // Inner  Top Right inner 01
ctx.lineTo( sideLeftInnX - 20,  sideLeftInnY1);    // Outter Top Right inner 01
ctx.closePath();
ctx.fill();

}

function drawRightFrame() {

    // Right Side Frame
    ctx.strokeStyle="brown";
    ctx.beginPath();
    ctx.moveTo(frameTopX + frameWidthX + 100, frameTopY - 100); // Top Right
    ctx.lineTo( 1100 ,  90 ); // Top Right
    ctx.lineTo( 1100 ,  590 ); // Bottom Right
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 ); // Bottom Right
    ctx.closePath();
    ctx.stroke();

    // Right side X 01
    ctx.strokeStyle="blue";
    ctx.beginPath();
    ctx.moveTo(frameTopX + frameWidthX + 100, frameTopY - 100); // Top Right
    ctx.lineTo( 1100 ,  590 ); // Bottom Right
    ctx.closePath();
    ctx.stroke();

    // Right side X 02
    ctx.beginPath();
    ctx.moveTo( 1100 ,  90 ); // Top Right
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 ); // Bottom Right
    ctx.closePath();
    ctx.stroke();

}