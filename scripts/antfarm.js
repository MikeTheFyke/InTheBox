var canvas = document.getElementById('antCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var frameTopY = 20;
var frameTopX = 20;
const frameWidthX = 800;
const frameHeightY = 450;

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

    drawFrame();
  }

function drawFrame(){
    ctx.strokeStyle="brown"; // Back Frame
    ctx.beginPath();
    ctx.moveTo(  250 ,  90 ); // Top Left
    ctx.lineTo( 1100 ,  90 ); // Top Right
    ctx.lineTo( 1100 ,  590 ); // Bottom Right
    ctx.lineTo(  250 ,  590 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle="brown"; // Front Frame
    ctx.beginPath();
    ctx.moveTo(frameTopX  - 50, frameTopY - 100 ); // Top Left
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY - 100); // Top Right
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 ); // Bottom Right
    ctx.lineTo(frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // Left Side Frame
    ctx.moveTo(frameTopX  - 50, frameTopY + frameHeightY + 50 ); // Bottom Left
    ctx.lineTo( frameTopX - 50, frameTopY - 100 ); // Top Left
    ctx.lineTo(  250 ,  90 ); // Top Left
    ctx.lineTo(  250 ,  590 ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); // Right Side Frame
    ctx.moveTo(frameTopX + frameWidthX + 100, frameTopY - 100); // Top Right
    ctx.lineTo( 1100 ,  90 ); // Top Right
    ctx.lineTo( 1100 ,  590 ); // Bottom Right
    ctx.lineTo(frameTopX + frameWidthX + 100, frameTopY + frameHeightY + 50 ); // Bottom Right
    ctx.closePath();
    ctx.stroke();
}