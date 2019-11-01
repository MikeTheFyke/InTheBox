var canvas = document.getElementById('gameCanvas03');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var topY = 20;
var topX = 20;
const Xwidth = 770;
const Ywidth = 450;
var Xcord = 0;
var Ycord = 0;
var pointX = 0;
var pointY = 0;
var Xeye = 0;
var Yeye = 0;
var Xhead = 0;
var Yhead = 0;

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
    drawEyes();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        pointX = topX - 200;
        pointY = topY + 185;
        Xeye = Xcord;
        Yeye = Ycord;
        Xhead = Xcord;
        Yhead = Ycord;
       });
}

function drawEyes() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
////////////////////////////////////////////////////// Eye Boundries
    if (Yeye <= 280){ // Top Boundry
        Yeye = 280 ;}
    if (Yeye >= 300){ // Bottom Boundry
        Yeye = 300 ;} 
    if (Xeye >= 650){ // Right Boundry
        Xeye = 650 ;}
    if (Xeye <= 550){ // Left Boundry
        Xeye = 550 ;}
////////////////////////////////////////////////////// Head Boundries
    if (Yhead <= 300){ // Top Boundry
        Yhead = 300 ;}
    if (Yhead >= 320){ // Bottom Boundry
        Yhead = 320 ;} 
    if (Xhead >= 665){ // Right Boundry
        Xhead = 665 ;}
    if (Xhead <= 540){ // Left Boundry
        Xhead = 540 ;}
////////////////////////////////////////////////////// Head
ctx.fillStyle = "teal"; // Base
ctx.beginPath(); 
ctx.arc(Xeye, Yeye - 40,165, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "MediumTurquoise"; // Base
ctx.beginPath(); 
ctx.arc(Xhead, Yhead - 60,145, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
////////////////////////////////////////////////////// Right Eye
    ctx.fillStyle = "darkred"; // Base
    ctx.beginPath(); 
    ctx.arc(Xeye + 80, Yeye + 7, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "crimson"; // Base
    ctx.beginPath(); 
    ctx.arc(Xeye + 80, Yeye + 9, 75, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "crimson"; // lid
    ctx.beginPath(); 
    ctx.arc(Xeye + 80, Yeye + 9, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "white"; // Pupil
    ctx.beginPath(); 
    ctx.arc(Xeye + 80, Yeye, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

////////////////////////////////////////////////////// Left Eye
    ctx.fillStyle = "crimson"; // Base
    ctx.beginPath(); 
    ctx.arc(Xeye - 80, Yeye +  9, 75, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "darkred"; // bottom lid
    ctx.beginPath(); 
    ctx.arc(Xeye - 80, Yeye + 9, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "crimson"; // bottom lid
    ctx.beginPath(); 
    ctx.arc(Xeye - 80, Yeye +7, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "crimson"; // top lid
    ctx.beginPath(); 
    ctx.arc(Xeye - 81, Yeye - 13, 72, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "darkred"; // top lid
    ctx.beginPath(); 
    ctx.arc(Xeye - 80, Yeye - 7, 69, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "white"; // Pupil
    ctx.beginPath(); 
    ctx.arc(Xeye - 80, Yeye, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // Right Eyes pupils
        var pupilX = Xcord;
        var pupilY = Ycord;

        if (pupilX < 515 ){ pupilX = 515;}
        if (pupilX > 700 ){ pupilX = 700;}
        if (pupilY < 260 ){ pupilY = 260;}
        if (pupilY > 380 ){ pupilY = 380;}
        if (Ycord > 600){ pupilY = pupilY - 35;}

        ctx.fillStyle = "black"; // Pupil
        ctx.beginPath(); 
        ctx.arc(pupilX + 70, pupilY - 30, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    //  Left Eyes pupils
        var pupilX1 = Xcord;
        var pupilY1 = Ycord;
        
        if (pupilX1 < 510 ) { pupilX1 = 510;}
        if (pupilX1 > 695 ) { pupilX1 = 695;}
        if (pupilY1 < 260 ) { pupilY1 = 260;}
        if (pupilY1 > 380 ){ pupilY1 = 380;}
        if (Xcord > ) { ;}
        if (Ycord > 600){ pupilY1 = pupilY1 - 35;}
        
        ctx.fillStyle = "black"; // Pupil
        ctx.beginPath(); 
        ctx.arc(pupilX1 - 80, pupilY1 - 30, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();      
  }