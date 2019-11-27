var canvas = document.getElementById('houseCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var topYCorner;
var topXCorner;
const Xwidth = 700;
const Yheight = 300;

var backX1 = canvas.width/2 - 200;
var backY1 = canvas.height/2 + 50;

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
        topYCorner = (mousePos.y-(Yheight/2) - 50);
        topXCorner = (mousePos.x-(Xwidth/2) );
       });
}

function drawEverything() {
    ctx.fillStyle = 'rgb(197, 215, 221)'; // Canvas Clear
    ctx.fillRect(0,0,canvas.width,canvas.height);

        if (topYCorner <= 110){ // Top Boundry
            topYCorner = 110 ;}
        if (topYCorner >= 255){ // Bottom Boundry
            topYCorner = 255 ;} 
            
        if (topXCorner >= 130){ // Right Boundry
            topXCorner = 130 ;}
        if (topXCorner <= 90){ // Left Boundry
            topXCorner = 90 ;}

/// House Frame
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.beginPath(); // Top Left Line
    ctx.moveTo(topXCorner,topYCorner);
    ctx.lineTo(topXCorner + (Xwidth/2),topYCorner - 100); // Peak
    ctx.lineTo(topXCorner + Xwidth,topYCorner);
    ctx.lineTo(topXCorner + Xwidth,topYCorner + Yheight);
    ctx.lineTo(topXCorner,topYCorner + Yheight);
    ctx.lineTo(topXCorner,topYCorner);
    ctx.stroke();

/// Perspective Lines

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.beginPath(); // Top Left Line
    ctx.moveTo(0,0);
    ctx.lineTo(topXCorner,topYCorner);
    ctx.stroke();

    ctx.beginPath(); // Top Right Line
    ctx.moveTo(900,0);
    ctx.lineTo(topXCorner + Xwidth,topYCorner);
    ctx.stroke();

    // ctx.beginPath(); // Bottom Leftt Line
    // ctx.moveTo(0,650);
    // ctx.lineTo(topXCorner,topYCorner + Yheight);
    // ctx.stroke();

    // ctx.beginPath(); // Bottom Right Line
    // ctx.moveTo(900,650);
    // ctx.lineTo(topXCorner + Xwidth,topYCorner + Yheight);
    // ctx.stroke();
    
    drawOutside ();
    drawBasement ();
    drawBackWalls ();
    drawRooms();
    drawAttic();
}

function drawRooms(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
/// Ground Floor
    ctx.beginPath(); // Ground Floor Left Front
    ctx.moveTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/2)-10),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/2)-10),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.stroke();

    ctx.beginPath(); // Ground Floor Right Front
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/2)-10),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/2)-10),topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.stroke();
/// Middle Floor
    ctx.beginPath(); // 2nd Floor Left Room
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + 10);
    ctx.stroke();

    ctx.beginPath(); // 2nd Floor Middle Room
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.stroke();

    ctx.beginPath(); // 2nd Floor Right Room
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + 10);
    ctx.stroke();
}

function drawBackWalls (){
/// Ground Floor Left
    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150),backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150),backY1 + 100);
    ctx.lineTo(backX1,backY1 + 100);
    ctx.lineTo(backX1,backY1);
    ctx.stroke();
    // Left Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(topXCorner + 10,topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + 10,topYCorner + Yheight - 10);
    ctx.lineTo(backX1,backY1 + 100);
    ctx.lineTo(backX1,backY1);
    ctx.stroke();
    // Right Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + ((Xwidth/2) - 150),backY1);
    ctx.lineTo(topXCorner + ((Xwidth/2)-10),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(topXCorner + ((Xwidth/2)-10),topYCorner + Yheight - 10);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150),backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150),backY1);
    ctx.stroke();
/// Ground Floor Right
    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + ((Xwidth/2) - 150) + 20,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 20,backY1 + 100);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 20,backY1);
    ctx.stroke();
    // Right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 250,backY1 + 100);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + Yheight - 10);
    ctx.stroke();
    // Left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/2)-10),topYCorner + ((Yheight/2) - 10));
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 20,backY1);
    ctx.lineTo(backX1 + ((Xwidth/2) - 150) + 20,backY1 + 100);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/2)-10),topYCorner + Yheight - 10);
    ctx.stroke();
/// 2nd Floor Left 
    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1,backY1 - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 10);
    ctx.lineTo(backX1,backY1  - 10);
    ctx.lineTo(backX1,backY1 - 100 );
    ctx.stroke();
    // left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(backX1,backY1 - 100 );
    ctx.lineTo(backX1,backY1  - 10);
    ctx.lineTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.stroke();
    // right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 100 );
    ctx.lineTo(backX1 + ((Xwidth/2) - 210),backY1  - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.stroke();
/// 2nd Floor Right 
    // Back Wall
    ctx.beginPath();
    ctx.moveTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 10);
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 10 );
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 );
    ctx.stroke();
    // left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10);
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) - 70 ,backY1  - 10 );
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20));   
    ctx.stroke();
    // right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + 10); //
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 100 );
    ctx.lineTo( (backX1 + (Xwidth/2)) + 100 ,backY1  - 10);
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20));
    ctx.stroke();
/// 2nd Floor Middle 
    // Back Wall
    ctx.beginPath();
    ctx.moveTo(backX1 + 150,backY1 - 100 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 100 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 10);
    ctx.lineTo(backX1 + 150,backY1  - 10);
    ctx.lineTo(backX1 + 150,backY1 - 100 );
    ctx.stroke();
    // left Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50),topYCorner + 10);
    ctx.lineTo(backX1 + 150,backY1 - 100 );
    ctx.lineTo(backX1 + 150,backY1  - 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
    ctx.stroke();
    // right Wall
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 100 );
    ctx.lineTo(backX1 + 150 + ((Xwidth/2) - 230),backY1  - 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
    ctx.stroke();
}