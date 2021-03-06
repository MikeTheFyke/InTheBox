var canvas = document.getElementById('indexCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var backY1 = 20;
var backX1 = 20;
const backWidth = 800;
const backHeight = 450;

var topX;
var topY;

var boxSpacing = 30;
var boxWidth = ((backWidth/8) - 10);
var boxCtrX = 2;
var boxCtrY = 2;

for(var m = 0; m < 2; m++){
var boxInnerSizes = {
    id:m,
    width:(Math.floor((Math.random() * 10) + 1))*10
};
console.log(boxInnerSizes[m]);
}
// var boxInsideWidth  = (Math.floor((Math.random() * 10) + 1))*10;

// console.log(boxInsideWidth);

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
    drawBoxes();
    drawBoxesInside();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        backY1 = mousePos.y-(backHeight/2);
        backX1 = mousePos.x-(backWidth/2);
        topX = mousePos.x - 500;
        topY = mousePos.y - 260;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);

            if (backY1 <= 50){ // Top Boundry
                backY1 = 50 ;}
            if (backY1 >= 100){ // Bottom Boundry
                backY1 = 100 ;} 
            if (backX1 >= 80){ // Right Boundry
                backX1 = 80 ;}
            if (backX1 <= 50){ // Left Boundry
                backX1 = 50 ;}

    ctx.strokeStyle = "grey"; // Back Wall
    ctx.lineWidth = 2;
    ctx.beginPath(); // Top Left Line
        ctx.moveTo(backX1 ,backY1 ); // top left corner
        ctx.lineTo(backX1 + backWidth,backY1 ); // top right corner
        ctx.lineTo(backX1 + backWidth,backY1 + backHeight ); // bottom right corner
        ctx.lineTo(backX1 ,backY1 + backHeight ); // bottom left corner
        ctx.lineTo(backX1 ,backY1 ); // top left corner
    ctx.stroke();

    //// Corner Lines
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 2;
        ctx.beginPath(); // Top Left Line
            ctx.moveTo(0,0);
            ctx.lineTo(backX1,backY1);
        ctx.stroke();
        ctx.beginPath(); // Top Right Line
            ctx.moveTo(1000,0);
            ctx.lineTo(backX1 + backWidth,backY1);
        ctx.stroke();
        ctx.beginPath(); // Bottom Right Line
            ctx.moveTo(0,600);
            ctx.lineTo(backX1,backY1 + backHeight);
        ctx.stroke();
        ctx.beginPath(); // Bottom Left Line
            ctx.moveTo(1000,600);
            ctx.lineTo(backX1 + backWidth,backY1 +backHeight);
        ctx.stroke();
    ////
}