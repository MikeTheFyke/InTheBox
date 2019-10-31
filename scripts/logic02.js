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
        var pointX1 = pointX ;
        var pointY1 = pointY ;

        if (pointX1 <= 100){ pointX1 = 100; }
        if (pointX1 >= 300){ pointX1 = 300; }
        if (pointY1 < 275) { pointY1 = pointY1 - 10; }
        if (pointY1 <= 225) { pointY1 = 225; }
        if (pointY1 > 300) { pointY1 = pointY1 + 10; }
        if (pointY1 >= 450){ pointY1 = 450; }

    ctx.fillStyle = "orange"; // Base
        ctx.beginPath(); 
        ctx.arc(topX + 55, topY + 50 + yellThick, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 55, topY + 150);
        ctx.lineTo(topX + 55, topY + 250);
        ctx.lineTo(pointX1, pointY1);
        ctx.fill();

    ctx.fillStyle = "red"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 105, topY + 200);
      ctx.lineTo(topX + 5, topY + 200);
      ctx.lineTo(pointX1, pointY1);
      ctx.fill();

    // Spike 02
        var pointX2 = topX - 100;
        var pointY2 = topY + 185;

        if (pointX2 <= 220){ pointX2 = 220;}
        if (pointY2 < 275) { pointY2 = pointY2 - 10; }
        if (pointY2 <= 225) { pointY2 = 225; }
        if (pointY2 > 300) { pointY2 = pointY2 + 20; }
        if (pointY2 >= 560) { pointY2 = 560; }

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
        if (pointY3 < 275) { pointY3 = pointY3 - 10; }
        if (pointY3 <= 225) { pointY3 = 225; }
        if (pointY3 > 300) { pointY3 = pointY3 + 20; }
        if (pointY3 >= 560) { pointY3 = 560; }

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
      if (pointY4 < 275) { pointY4 = pointY4 - 10; }
      if (pointY4 <= 225) { pointY4 = 225; }
      if (pointY4 > 300) { pointY4 = pointY4 + 20; }
      if (pointY4 >= 560) { pointY4 = 560; }

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
      if (pointY5 < 275) { pointY5 = pointY5 - 10; }
      if (pointY5 <= 225) { pointY5 = 225; }
      if (pointY5 > 300) { pointY5 = pointY5 + 20; }
      if (pointY5 >= 560) { pointY5 = 560; }

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
      if (pointY6 < 275) { pointY6 = pointY6 - 10; }
      if (pointY6 <= 225) { pointY6 = 225; }
      if (pointY6 > 300) { pointY6 = pointY6 + 20; }
      if (pointY6 >= 560) { pointY6 = 560; }

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

    if (pointX7 >= 805 ) { pointX7 = 805;}
    if (pointX7 <= 1000) { pointX7 = 1000; }
      if (pointY7 < 275) { pointY7 = pointY7 - 10; }
      if (pointY7 <= 225) { pointY7 = 225; }
      if (pointY7 > 300) { pointY7 = pointY7 + 20; }
      if (pointY7 >= 560) { pointY7 = 560; }

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