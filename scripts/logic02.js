var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topY = 20;
var topX = 20;
const Xwidth = 770;
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
    ctx.fillStyle = "black"; // Back Wall Grey Border
    ctx.fillRect(topX,topY,Xwidth,Ywidth);

    ctx.fillStyle = "darkred"; // Base
    ctx.beginPath(); 
    ctx.arc(topX + 385, topY + 210, 335, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "crimson"; // Base
    ctx.beginPath(); 
    ctx.arc(topX + 385, topY + 210, 325, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

function drawSpikes(){

  if (pointX > 230){
    // Spike 01
        var pointX1 = pointX ;
        var pointY1 = pointY ;

        if (pointX1 <= 100){ pointX1 = 100; } // left boundry
        if (pointX1 >= 350){ pointX1 = 350; } // right boundry
        
        if (pointY1 < 300) { pointY1 = pointY1 - 10; }
        if (pointY1 <= 200) { pointY1 = 200; }

        if (pointY1 > 300) { pointY1 = pointY1 + 10; } // Bottom boundries
        if (pointY1 >= 470){ pointY1 = 470; }

    ctx.fillStyle = "crimson"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 55, topY + 150);
        ctx.lineTo(topX + 55, topY + 250);
        ctx.lineTo(pointX1, pointY1);
        ctx.fill();

    ctx.fillStyle = "darkred"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 105, topY + 200);
      ctx.lineTo(topX + 45, topY + 200);
      ctx.lineTo(pointX1, pointY1);
      ctx.fill();

    // Spike 02
        var pointX2 = topX - 100;
        var pointY2 = pointY;
        
        if (pointX2 <= 225){ pointX2 = 225;} // Left boundries
        if (pointX2 >= 450){ pointX2 = 450;} // Right boundries
        
        if (pointY2 < 300) { pointY2 = pointY2 - 20; } // Top boundries
        if (pointY2 <= 180) { pointY2 = 180; }
        
        if (pointY2 > 300) { pointY2 = pointY2 + 20; } // Bottom boundries
        if (pointY2 >= 500) { pointY2 = 500; }

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 165, topY + 150);
        ctx.lineTo(topX + 165, topY + 250);
        ctx.lineTo(pointX2, pointY2);
        ctx.fill();

    ctx.fillStyle = "darkred"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 215, topY + 200);
      ctx.lineTo(topX + 115, topY + 200);
      ctx.lineTo(pointX2, pointY2);
      ctx.fill();

    // Spike 03
        var pointX3 = topX - 70;
        var pointY3 = pointY;

        if (pointX3 <= 340) { pointX3 = 340;} // Left boundries
        if (pointX3 <= 400) { pointX3 = 400;} // Right boundries

        if (pointY3 < 280) { pointY3 = pointY3 - 20; } // Top Boundries
        if (pointY3 <= 120) { pointY3 = 120; }

        if (pointY3 > 300) { pointY3 = pointY3 + 20; } // Bottom boundries
        if (pointY3 >= 540) { pointY3 = 540; }

    ctx.fillStyle = "darkred"; // Vertical Spike
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
    var pointY4 = pointY;

    if (pointX4 <= 450) {  pointX4 = 450;}
      if (pointX4 <= 600) { pointX4 = 600;}

      if (pointY4 < 280) { pointY4 = pointY4 - 20; } // Top Boundries
      if (pointY4 <= 100) { pointY4 = 100; }

      if (pointY4 > 300) { pointY4 = pointY4 + 20; } // Bottom Boundries
      if (pointY4 >= 560) { pointY4 = 560; }

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 385, topY + 150);
        ctx.lineTo(topX + 385, topY + 250);
        ctx.lineTo(pointX4, pointY4);
        ctx.fill();

    ctx.fillStyle = "darkred"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 435, topY + 200);
      ctx.lineTo(topX + 335, topY + 200);
      ctx.lineTo(pointX4, pointY4);
      ctx.fill();

    // Spike 05
    var pointX5 = topX ;
    var pointY5 = pointY;

      if (pointX5 <= 570){ pointX5 = 570;}
      if (pointX5 <= 800){ pointX5 = 800;}

      if (pointY5 < 280) { pointY5 = pointY5 - 20; } // Top Boundries
      if (pointY5 <= 120) { pointY5 = 120; }

      if (pointY5 > 300) { pointY5 = pointY5 + 20; } // Bottom boundries
      if (pointY5 >= 540) { pointY5 = 540; }

    ctx.fillStyle = "darkred"; // Vertical Spike
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

    // Spike 07
    var pointX7 = topX + 750;
    var pointY7 = pointY;

    if (pointX7 >= 805 ) { pointX7 = 805;}
    if (pointX7 <= 1200) { pointX7 = 1200; }

    if (pointY7 < 300) { pointY7 = pointY7 - 10; } // Top boundries
    if (pointY7 <= 200) { pointY7 = 200; }

    if (pointY7 > 300) { pointY7 = pointY7 + 10; } // Bottom boundries
    if (pointY7 >= 470){ pointY7 = 470; }

    ctx.fillStyle = "crimson"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 715, topY + 150);
        ctx.lineTo(topX + 715, topY + 250);
        ctx.lineTo(pointX7, pointY7);
        ctx.fill();

    ctx.fillStyle = "darkred"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 765, topY + 200);
      ctx.lineTo(topX + 665, topY + 200);
      ctx.lineTo(pointX7, pointY7);
      ctx.fill();

          // Spike 06
    var pointX6 = topX + 40;
    var pointY6 = pointY;

      if (pointX6 <= 705){ pointX6 = 705;}
      if (pointX6 <= 1000){ pointX6 = 1000;}

      if (pointY6 < 300) { pointY6 = pointY6 - 20; } // Top boundries
      if (pointY6 <= 180) { pointY6 = 180; }
      
      if (pointY6 > 300) { pointY6 = pointY6 + 20; } // Bottom boundries
      if (pointY6 >= 500) { pointY6 = 500; }

    ctx.fillStyle = "red"; // Vertical Spike
        ctx.beginPath();
        ctx.moveTo(topX + 605, topY + 150);
        ctx.lineTo(topX + 605, topY + 250);
        ctx.lineTo(pointX6, pointY6);
        ctx.fill();

    ctx.fillStyle = "darkred"; // Horizontal Spike
      ctx.beginPath();
      ctx.moveTo(topX + 655, topY + 200);
      ctx.lineTo(topX + 555, topY + 200);
      ctx.lineTo(pointX6, pointY6);
      ctx.fill();
    }

else if (pointX <= 230){

  // Spike 07
var pointX7 = topX + 750;
var pointY7 = pointY;

if (pointX7 >= 805 ) { pointX7 = 805;}
if (pointX7 <= 1200) { pointX7 = 1200; }

if (pointY7 < 300) { pointY7 = pointY7 - 10; } // Top boundries
if (pointY7 <= 200) { pointY7 = 200; }

if (pointY7 > 300) { pointY7 = pointY7 + 10; } // Bottom boundries
if (pointY7 >= 470){ pointY7 = 470; }

ctx.fillStyle = "crimson"; // Vertical Spike
    ctx.beginPath();
    ctx.moveTo(topX + 715, topY + 150);
    ctx.lineTo(topX + 715, topY + 250);
    ctx.lineTo(pointX7, pointY7);
    ctx.fill();

ctx.fillStyle = "darkred"; // Horizontal Spike
  ctx.beginPath();
  ctx.moveTo(topX + 765, topY + 200);
  ctx.lineTo(topX + 665, topY + 200);
  ctx.lineTo(pointX7, pointY7);
  ctx.fill();

      // Spike 06
var pointX6 = topX + 40;
var pointY6 = pointY;

  if (pointX6 <= 705){ pointX6 = 705;}
  if (pointX6 <= 1000){ pointX6 = 1000;}

  if (pointY6 < 300) { pointY6 = pointY6 - 20; } // Top boundries
  if (pointY6 <= 180) { pointY6 = 180; }
  
  if (pointY6 > 300) { pointY6 = pointY6 + 20; } // Bottom boundries
  if (pointY6 >= 500) { pointY6 = 500; }

ctx.fillStyle = "red"; // Vertical Spike
    ctx.beginPath();
    ctx.moveTo(topX + 605, topY + 150);
    ctx.lineTo(topX + 605, topY + 250);
    ctx.lineTo(pointX6, pointY6);
    ctx.fill();

ctx.fillStyle = "darkred"; // Horizontal Spike
  ctx.beginPath();
  ctx.moveTo(topX + 655, topY + 200);
  ctx.lineTo(topX + 555, topY + 200);
  ctx.lineTo(pointX6, pointY6);
  ctx.fill();

  // Spike 05
var pointX5 = topX ;
var pointY5 = pointY;

  if (pointX5 <= 570){ pointX5 = 570;}
  if (pointX5 <= 800){ pointX5 = 800;}

  if (pointY5 < 280) { pointY5 = pointY5 - 20; } // Top Boundries
  if (pointY5 <= 120) { pointY5 = 120; }

  if (pointY5 > 300) { pointY5 = pointY5 + 20; } // Bottom boundries
  if (pointY5 >= 540) { pointY5 = 540; }

ctx.fillStyle = "darkred"; // Vertical Spike
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

      // Spike 01
          var pointX1 = pointX ;
          var pointY1 = pointY ;
  
          if (pointX1 <= 100){ pointX1 = 100; } // left boundry
          if (pointX1 >= 350){ pointX1 = 350; } // right boundry
          
          if (pointY1 < 300) { pointY1 = pointY1 - 10; }
          if (pointY1 <= 200) { pointY1 = 200; }
  
          if (pointY1 > 300) { pointY1 = pointY1 + 10; } // Bottom boundries
          if (pointY1 >= 470){ pointY1 = 470; }
  
      ctx.fillStyle = "crimson"; // Vertical Spike
          ctx.beginPath();
          ctx.moveTo(topX + 55, topY + 150);
          ctx.lineTo(topX + 55, topY + 250);
          ctx.lineTo(pointX1, pointY1);
          ctx.fill();
  
      ctx.fillStyle = "darkred"; // Horizontal Spike
        ctx.beginPath();
        ctx.moveTo(topX + 105, topY + 200);
        ctx.lineTo(topX + 45, topY + 200);
        ctx.lineTo(pointX1, pointY1);
        ctx.fill();
  
      // Spike 02
          var pointX2 = topX - 100;
          var pointY2 = pointY;
          
          if (pointX2 <= 225){ pointX2 = 225;} // Left boundries
          if (pointX2 >= 450){ pointX2 = 450;} // Right boundries
          
          if (pointY2 < 300) { pointY2 = pointY2 - 20; } // Top boundries
          if (pointY2 <= 180) { pointY2 = 180; }
          
          if (pointY2 > 300) { pointY2 = pointY2 + 20; } // Bottom boundries
          if (pointY2 >= 500) { pointY2 = 500; }
  
      ctx.fillStyle = "red"; // Vertical Spike
          ctx.beginPath();
          ctx.moveTo(topX + 165, topY + 150);
          ctx.lineTo(topX + 165, topY + 250);
          ctx.lineTo(pointX2, pointY2);
          ctx.fill();
  
      ctx.fillStyle = "darkred"; // Horizontal Spike
        ctx.beginPath();
        ctx.moveTo(topX + 215, topY + 200);
        ctx.lineTo(topX + 115, topY + 200);
        ctx.lineTo(pointX2, pointY2);
        ctx.fill();
  
      // Spike 03
          var pointX3 = topX - 70;
          var pointY3 = pointY;
  
          if (pointX3 <= 340) { pointX3 = 340;} // Left boundries
          if (pointX3 <= 400) { pointX3 = 400;} // Right boundries
  
          if (pointY3 < 280) { pointY3 = pointY3 - 20; } // Top Boundries
          if (pointY3 <= 120) { pointY3 = 120; }
  
          if (pointY3 > 300) { pointY3 = pointY3 + 20; } // Bottom boundries
          if (pointY3 >= 540) { pointY3 = 540; }
  
      ctx.fillStyle = "darkred"; // Vertical Spike
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
      var pointY4 = pointY;
  
      if (pointX4 <= 450) {  pointX4 = 450;}
        if (pointX4 <= 600) { pointX4 = 600;}
  
        if (pointY4 < 280) { pointY4 = pointY4 - 20; } // Top Boundries
        if (pointY4 <= 100) { pointY4 = 100; }
  
        if (pointY4 > 300) { pointY4 = pointY4 + 20; } // Bottom Boundries
        if (pointY4 >= 560) { pointY4 = 560; }
  
      ctx.fillStyle = "red"; // Vertical Spike
          ctx.beginPath();
          ctx.moveTo(topX + 385, topY + 150);
          ctx.lineTo(topX + 385, topY + 250);
          ctx.lineTo(pointX4, pointY4);
          ctx.fill();
  
      ctx.fillStyle = "darkred"; // Horizontal Spike
        ctx.beginPath();
        ctx.moveTo(topX + 435, topY + 200);
        ctx.lineTo(topX + 335, topY + 200);
        ctx.lineTo(pointX4, pointY4);
        ctx.fill();
  
      
      }
  }