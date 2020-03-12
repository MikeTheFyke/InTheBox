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
            if (frameTopY <= 100){ // Top Boundry
                frameTopY = 100 ;}
            if (frameTopY >= 102){ // Bottom Boundry
                frameTopY = 102 ;} 
            if (frameTopX >= 252){ // Right Boundry
                frameTopX = 252 ;}
            if (frameTopX <= 250){ // Left Boundry
                frameTopX = 250 ;}

    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(frameTopX,frameTopY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1200,0);
    ctx.lineTo(frameTopX + frameWidthX,frameTopY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,650);
    ctx.lineTo(frameTopX,frameTopY + frameHeightY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1200,650);
    ctx.lineTo(frameTopX + frameWidthX,frameTopY +frameHeightY);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    drawFrame();
  }

function drawFrame(){
    ctx.strokeStyle="brown";
    ctx.beginPath();
    ctx.moveTo(frameTopX ,  frameTopY - 50 ); // Top Left
    ctx.lineTo(frameTopX + frameWidthX - 100, frameTopY - 50); // Top Right
    ctx.lineTo(frameTopX + frameWidthX - 100, frameTopY + frameHeightY ); // Bottom Right
    ctx.lineTo(frameTopX , frameTopY + frameHeightY ); // Bottom Left
    ctx.closePath();
    ctx.stroke();

}