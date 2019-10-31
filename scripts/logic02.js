var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topY = 20;
var topX = 20;
const Xwidth = 800;
const Ywidth = 450;
var yellX = 100;
var yellY = 100;
var yellWidth = 100;
var yellThick = 150;
var pointX ;
var pointY ;

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
    drawBox();
    drawSpikes();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        topY = mousePos.y-(Ywidth/2); // paddle aligns in centre with mouse
        topX = mousePos.x-(Xwidth/2) + 200;
        yellX = topX -200;
        yellY = topY -50;
         pointX = topX - 200;
         pointY = topY + 185;
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
            if (topY <= 50){ // Top Boundry
                topY = 50 ;}
            if (topY >= 240){ // Bottom Boundry
                topY = 240 ;} 
            if (topX >= 550){ // Right Boundry
                topX = 550 ;}
            if (topX <= 50){ // Left Boundry
                topX = 50 ;}
    ctx.fillStyle = "grey"; // Back Wall Grey Border
    ctx.fillRect(topX,topY,Xwidth,Ywidth);
    ctx.fillStyle = "black"; // Back Wall Black
    ctx.fillRect(topX +5,topY +5 ,790,440);

    ctx.beginPath(); // Top Left Line
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topX,topY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Top Right Line
    ctx.moveTo(1400,0);
    ctx.lineTo(topX + Xwidth,topY);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Right Line
    ctx.moveTo(0,720);
    ctx.lineTo(topX,topY + Ywidth);
    ctx.strokeStyle = "grey";
    ctx.stroke();
    ctx.beginPath(); // Bottom Left Line
    ctx.moveTo(1400,720);
    ctx.lineTo(topX + Xwidth,topY +Ywidth);
    ctx.strokeStyle = "grey";
    ctx.stroke();
  }

  function drawBox(){
    
      ctx.fillStyle = "yellow"; // 01
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(topX + yellWidth , topY);
      ctx.lineTo(topX + yellWidth , topY + yellWidth);
      ctx.lineTo(topX, topY + yellWidth);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "yellow"; // 02
      ctx.beginPath();
      ctx.moveTo(topX + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick, topY + yellWidth);
      ctx.lineTo(topX + yellThick, topY + yellWidth);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "yellow"; // 03
      ctx.beginPath();
      ctx.moveTo(topX + yellThick + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick + yellThick, topY);
      ctx.lineTo(topX + yellWidth + yellThick + yellThick, topY + yellWidth);
      ctx.lineTo(topX + yellThick + yellThick, topY + yellWidth);
      ctx.closePath();
      ctx.fill();
  }

function drawSpikes(){
    // Spike 01


        if (pointX <= 100){ pointX = 100; }
        if (pointX >= 300){ pointX = 300; }
        if (pointY < 275) { pointY = pointY - 10; }
        if (pointY <= 225) { pointY = 225; }
        if (pointY > 300) { pointY = pointY + 10; }
        if (pointY >= 450){ pointY = 450; }

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 55, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 55, topY + 150);
        ctx.lineTo(topX + 55, topY + 250);
        ctx.lineTo(pointX, pointY);
        ctx.fill();

    ctx.fillStyle = "red"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 105, topY + 200);
      ctx.lineTo(topX + 5, topY + 200);
      ctx.lineTo(pointX, pointY);
      ctx.fill();

    // Spike 02
        var pointX2 = topX - 100;
        var pointY2 = topY + 185;

        if (pointX2 <= 220){ pointX2 = 220;}
        if (pointY2 < 200) { pointY2 += -5;}
        if (pointY2 > 400) { pointY2 += +5;}

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 165, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "blue"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 165, topY + 150);
        ctx.lineTo(topX + 165, topY + 250);
        ctx.lineTo(pointX2, pointY2);
        ctx.fill();

    ctx.fillStyle = "green"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 215, topY + 200);
      ctx.lineTo(topX + 115, topY + 200);
      ctx.lineTo(pointX2, pointY2);
      ctx.fill();

    // Spike 03
        var pointX3 = topX - 70;
        var pointY3 = topY + 185;

        if (pointX3 <= 340) { pointX3 = 340;}
        if (pointY3 < 200)  { pointY3 += -5;}
        if (pointY3 > 400)  { pointY3 += 5; }

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 275, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 275, topY + 150);
        ctx.lineTo(topX + 275, topY + 250);
        ctx.lineTo(pointX3, pointY3);
        ctx.fill();

    ctx.fillStyle = "red"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 325, topY + 200);
      ctx.lineTo(topX + 225, topY + 200);
      ctx.lineTo(pointX3, pointY3);
      ctx.fill();

    // Spike 04
    var pointX4 = topX - 40;
    var pointY4 = topY + 185;

    if (pointX4 <= 450){
      pointX4 = 450;}
    if (pointY4 < 200){
      pointY4 += -5;}
    if (pointY4 > 400){
      pointY4 += 5;}

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 385, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "blue"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 385, topY + 150);
        ctx.lineTo(topX + 385, topY + 250);
        ctx.lineTo(pointX4, pointY4);
        ctx.fill();

    ctx.fillStyle = "green"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 435, topY + 200);
      ctx.lineTo(topX + 335, topY + 200);
      ctx.lineTo(pointX4, pointY4);
      ctx.fill();

    // Spike 05
    var pointX5 = topX ;
    var pointY5 = topY + 185;

    if (pointX5 <= 570){
      pointX5 = 570;}
    if (pointY5 < 200){
      pointY5 += -5;}
    if (pointY5 > 400){
      pointY5 += 5;}

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 495, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 495, topY + 150);
        ctx.lineTo(topX + 495, topY + 250);
        ctx.lineTo(pointX5, pointY5);
        ctx.fill();

    ctx.fillStyle = "red"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 545, topY + 200);
      ctx.lineTo(topX + 445, topY + 200);
      ctx.lineTo(pointX5, pointY5);
      ctx.fill();

    // Spike 06
    var pointX6 = topX + 40;
    var pointY6 = topY + 185;

    if (pointX6 <= 705){
      pointX6 = 705;}
    if (pointY6 < 200){
      pointY6 += -5;}
    if (pointY6 > 400){
      pointY6 += 5;}

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 605, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "green"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 605, topY + 150);
        ctx.lineTo(topX + 605, topY + 250);
        ctx.lineTo(pointX6, pointY6);
        ctx.fill();

    ctx.fillStyle = "blue"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 655, topY + 200);
      ctx.lineTo(topX + 555, topY + 200);
      ctx.lineTo(pointX6, pointY6);
      ctx.fill();

    // Spike 07
    var pointX7 = topX + 750;
    console.log("pointX7 = " + pointX7);
    var pointY7 = topY + 185;

    if (pointX7 >= 805){
      pointX7 = 805;}
    if (pointY7 < 200){
      pointY7 += -5;}
    if (pointY7 > 400){
      pointY7 += 5;}

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 715, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 715, topY + 150);
        ctx.lineTo(topX + 715, topY + 250);
        ctx.lineTo(pointX7, pointY7);
        ctx.fill();

    ctx.fillStyle = "red"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 765, topY + 200);
      ctx.lineTo(topX + 665, topY + 200);
      ctx.lineTo(pointX7, pointY7);
      ctx.fill();
  }