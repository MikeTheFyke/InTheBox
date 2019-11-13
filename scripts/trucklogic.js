var canvas = document.getElementById('truckCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var roof_gradient;
var wall_gradient;
var back_gradient;
var floor_gradient;
var edge_gradient;
var bottomedge_gradient;

var Xcord = 0;
var Ycord = 0;
var topYCorner = 20;
var topXCorner = 20;
const xthick = 400;
const ythick = 500;

var frontTopY = 20;
var frontTopX = 20;
const frontWidth = 400;
const frontHeight = 500;

var backTopX = 250;
var backTopY = 250;
var backThick = 150;

var vertX;
var vertY;


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
    drawTruck();
    drawGrid();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        topYCorner = mousePos.y-(ythick/2); // aligns to centre with mouse
        topXCorner = mousePos.x-(xthick/2);
        frontTopY = 40;
        frontTopX = topXCorner / 2;;
       });
}

function drawEverything() {
    ctx.fillStyle = "lightskyblue"; // Sky
    ctx.fillRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle = "green"; // Grass
    ctx.fillRect(0,300,canvas.width,canvas.height);

    ctx.fillStyle = "LightSlateGrey"; // Far Curb
    ctx.fillRect(0,310,canvas.width,10);

    ctx.fillStyle = "LightSlateGrey"; // Far Curb
    ctx.fillRect(0,325,canvas.width,30);

    ctx.fillStyle = "black"; // Road
    ctx.fillRect(0,335,canvas.width,90);

    ctx.fillStyle = "LightSlateGrey"; // Curb
    ctx.fillRect(0,425,canvas.width,30);

    ctx.fillStyle = "LightSlateGrey"; // Road
    ctx.fillRect(0,460,canvas.width,30);

    ctx.beginPath(); // Drive Way
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(275, 300);
    ctx.lineTo(300, 300);
    ctx.lineTo(canvas.width,canvas.height);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

function drawTruck (){
    ctx.strokeStyle = "black";

    roof_gradient = ctx.createLinearGradient(200,40,200,300);
    wall_gradient = ctx.createLinearGradient(200,40,200,600)
    back_gradient = ctx.createLinearGradient(backTopX,backTopY,backTopX,backTopY + backThick);
    floor_gradient = ctx.createLinearGradient(100,150,100,450);
    edge_gradient = ctx.createLinearGradient(100,40,100,80);
    bottomedge_gradient = ctx.createLinearGradient(100,540,100,580);

    if(frontTopX < 80) {
        frontTopX = 80;
    }
    if (frontTopX > 120){
        frontTopX = 120;
    }
    // if (frontTopY < 40){
    //     frontTopY = 40;
    // } 
    // if (frontTopY > 50){
    //     frontTopY = 50;
    // }

////////////// Roof
    roof_gradient.addColorStop(0, "#85a3e0");
    roof_gradient.addColorStop(1, "#142952");

    ctx.fillStyle = roof_gradient;

    ctx.beginPath();
    ctx.moveTo(frontTopX, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(backTopX + backThick,backTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

////////////// Right Side
    wall_gradient.addColorStop(0, "#85a3e0");
    wall_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = wall_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX + backThick, backTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY + frontHeight);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Left Side
    ctx.beginPath();
    ctx.moveTo(frontTopX,frontTopY);
    ctx.lineTo(backTopX,backTopY);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Floor
    floor_gradient.addColorStop(0, "#142952");
    floor_gradient.addColorStop(1, "#85a3e0");

    ctx.fillStyle = floor_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX,backTopY + backThick);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Back Wall

    back_gradient.addColorStop(0, "#24478f");
    back_gradient.addColorStop(1, "#142952");

    ctx.fillStyle = back_gradient;

    ctx.beginPath();
    ctx.moveTo(backTopX, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY);
    ctx.lineTo(backTopX + backThick, backTopY + backThick);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

////////////// Tires

        ////////////// Left Tire
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(frontTopX - 25, frontTopY + frontHeight + 30);
        ctx.lineTo(frontTopX - 15, frontTopY + frontHeight + 10);
        ctx.lineTo(frontTopX  + 45, frontTopY + frontHeight + 10);
        ctx.lineTo(frontTopX  + 45, frontTopY + frontHeight + 100);
        ctx.lineTo(frontTopX - 10,frontTopY + frontHeight + 100);
        ctx.lineTo(frontTopX - 25,frontTopY + frontHeight + 75);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    
        ////////////// Left Tire Side
        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.moveTo(frontTopX + 35, frontTopY + frontHeight + 35);
        ctx.lineTo(frontTopX + 45, frontTopY + frontHeight + 10);
        ctx.lineTo(backTopX - 80, frontTopY + frontHeight + 25);
        ctx.lineTo(backTopX - 80, frontTopY + frontHeight + 70);
        ctx.lineTo(frontTopX + 45,frontTopY + frontHeight + 100);
        ctx.lineTo(frontTopX + 35,frontTopY + frontHeight + 75);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    
        ////////////// Right Tire
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(frontTopX + frontWidth - 45, frontTopY + frontHeight + 10);
        ctx.lineTo(frontTopX + frontWidth + 15, frontTopY + frontHeight + 10);
        ctx.lineTo(frontTopX + frontWidth + 25, frontTopY + frontHeight + 30);
        ctx.lineTo(frontTopX + frontWidth + 25, frontTopY + frontHeight + 75);
        ctx.lineTo(frontTopX + frontWidth + 10, frontTopY + frontHeight + 100);
        ctx.lineTo(frontTopX + frontWidth - 45,frontTopY + frontHeight + 100);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    
        ////////////// Right Tire Side
        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.moveTo(frontTopX + frontWidth - 20, frontTopY + frontHeight + 35);
        ctx.lineTo(frontTopX + frontWidth -45, frontTopY + frontHeight + 10);
        ctx.lineTo(backTopX + backThick + 25, frontTopY + frontHeight + 25);
        ctx.lineTo(backTopX + backThick + 25, frontTopY + frontHeight + 70);
        ctx.lineTo(frontTopX + frontWidth - 45,frontTopY + frontHeight + 100);
        ctx.lineTo(frontTopX + frontWidth - 20,frontTopY + frontHeight + 75);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

////////////// Edges

    ////////////// Top
    edge_gradient.addColorStop(0, "#85a3e0");
    edge_gradient.addColorStop(1, "#193366");

    ctx.fillStyle = edge_gradient;
    ctx.beginPath();
    ctx.moveTo(frontTopX,frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth,frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + 20);
    ctx.lineTo(frontTopX + frontWidth - 10,frontTopY + 30);
    ctx.lineTo(frontTopX + 10,frontTopY + 30);
    ctx.lineTo(frontTopX,frontTopY + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ////////////// Right Side
    ctx.fillStyle = wall_gradient;
    ctx.beginPath();
    ctx.moveTo(frontTopX + frontWidth, frontTopY -20);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY - 20);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY + frontHeight);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ////////////// Left Side
    ctx.beginPath();
    ctx.moveTo(frontTopX - 20,frontTopY - 20);
    ctx.lineTo(frontTopX,frontTopY - 20);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.lineTo(frontTopX - 20,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ////////////// Bottom Edge
    bottomedge_gradient.addColorStop(0, "#85a3e0");
    bottomedge_gradient.addColorStop(1, "#193366");
    ctx.fillStyle = bottomedge_gradient;
    ctx.beginPath();
    ctx.moveTo(frontTopX - 20, frontTopY + frontHeight);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY + frontHeight);
    ctx.lineTo(frontTopX + frontWidth + 20, frontTopY + frontHeight + 20);
    ctx.lineTo(frontTopX + frontWidth + 10, frontTopY + frontHeight + 20);
    ctx.lineTo(frontTopX + frontWidth + 10, frontTopY + frontHeight + 40);

    ctx.lineTo(frontTopX - 10, frontTopY + frontHeight + 40);
    ctx.lineTo(frontTopX - 10, frontTopY + frontHeight + 20);

    ctx.lineTo(frontTopX - 20,frontTopY + frontHeight + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}

function drawGrid (){
// Frame Outter
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(frontTopX, frontTopY);
    ctx.lineTo(frontTopX + frontWidth, frontTopY);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();

// Bottom Vertical Lines
    ctx.strokeStyle = "red";
    ctx.beginPath(); // Bottom Vertical 00 Line
    ctx.moveTo(frontTopX,frontTopY + frontHeight);
    ctx.lineTo(backTopX,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 01 Line
    ctx.moveTo(frontTopX + (((frontWidth/2)/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + (((backThick/2)/2)/2),backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 02 Line
    ctx.moveTo(frontTopX + ((frontWidth/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + ((backThick/2)/2),backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 03 Line
    ctx.moveTo(frontTopX + (((frontWidth/2)/2)/2) + ((frontWidth/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + (((backThick/2)/2)/2) + ((backThick/2)/2) ,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Bottom Vertical Center Line
    ctx.moveTo(frontTopX + (frontWidth/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + (backThick/2),backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath(); // Bottom Vertical 05 Line
    ctx.moveTo(frontTopX + (frontWidth/2) + (((frontWidth/2)/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + (backThick/2) + (((backThick/2)/2)/2) ,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 06 Line
    ctx.moveTo(frontTopX + (frontWidth/2) + ((frontWidth/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + (backThick/2) + ((backThick/2)/2) ,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 07 Line
    ctx.moveTo(frontTopX + frontWidth - (((frontWidth/2)/2)/2),frontTopY + frontHeight);
    ctx.lineTo(backTopX + backThick - (((backThick/2)/2)/2) ,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath(); // Bottom Vertical 08 Line
    ctx.moveTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.lineTo(backTopX + backThick,backTopY + backThick);
    ctx.closePath();
    ctx.stroke();


    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Bottom Horizontal - 04 Line
    ctx.moveTo(frontTopX + 122,backTopY + backThick + 38);
    ctx.lineTo(frontTopX + frontWidth - 90,backTopY + backThick + 38);
    ctx.closePath();
    ctx.stroke();

    //  Orange Lines
    vertX = (backTopX - frontTopX)/2;
    vertY = (backTopY - frontTopY)/2;

    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 1/4 Line
    ctx.moveTo(frontTopX + ((vertX/2)*2) + 65,vertY + 116);
    ctx.lineTo(frontTopX + ((vertX/2)*2) + (frontWidth/2) + 30,vertY + 116);
    ctx.lineTo(frontTopX + ((vertX/2)*2) + (frontWidth/2) + 30,vertY + backThick + 160);
    ctx.lineTo(frontTopX + ((vertX/2)*2) + 65,vertY + backThick + 160);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 1/2
    ctx.moveTo(frontTopX + vertX + 40,vertY + 86);
    ctx.lineTo(frontTopX + vertX + 40 + (frontWidth/2) + 10,vertY + 86);
    ctx.lineTo(frontTopX + vertX + 40 + (frontWidth/2) + 10,vertY + backThick + 180);
    ctx.lineTo(frontTopX + vertX + 40,vertY + backThick + 180);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 3/4
    ctx.moveTo(frontTopX + (vertX/2) + 30,vertY + 32);
    ctx.lineTo(frontTopX + (vertX/2) + (frontWidth/2) + 110,vertY + 32);
    ctx.lineTo(frontTopX + (vertX/2) + (frontWidth/2) + 110,vertY + backThick + 223);
    ctx.lineTo(frontTopX + (vertX/2) + 30,vertY + backThick + 223);
    ctx.closePath();
    ctx.stroke();

// Verticals
    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 1/4 Line
    ctx.moveTo(frontTopX + ((frontWidth/2)/2),frontTopY);
    ctx.lineTo(backTopX + ((backThick/2)/2),backTopY);
    ctx.lineTo(backTopX + ((backThick/2)/2),backTopY + backThick);
    ctx.lineTo(frontTopX + ((frontWidth/2)/2),frontTopY + frontHeight);
    ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 1/2 Line
    ctx.moveTo(frontTopX + (frontWidth/2),frontTopY);
    ctx.lineTo(backTopX + (backThick/2),backTopY);
    ctx.lineTo(backTopX + (backThick/2),backTopY + backThick);
    ctx.lineTo(frontTopX + (frontWidth/2),frontTopY + frontHeight);
    ctx.stroke();

    ctx.strokeStyle = "orange";
    ctx.beginPath(); // 3/4 Line
    ctx.moveTo(frontTopX + (frontWidth/2) + ((frontWidth/2)/2),frontTopY);
    ctx.lineTo(backTopX + (backThick/2) + ((backThick/2)/2),backTopY);
    ctx.lineTo(backTopX + (backThick/2) + ((backThick/2)/2),backTopY + backThick);
    ctx.lineTo(frontTopX + (frontWidth/2) + ((frontWidth/2)/2),frontTopY + frontHeight);
    ctx.stroke();

// Back Wall

ctx.strokeStyle = "orange";
ctx.beginPath(); // 1/4 Line
ctx.moveTo(frontTopX,frontTopY + ((frontHeight/2)/2));
ctx.lineTo(backTopX,backTopY + ((backThick/2)/2));
ctx.lineTo(backTopX + backThick,backTopY + ((backThick/2)/2));
ctx.lineTo(frontTopX + frontWidth,frontTopY + ((frontHeight/2)/2));
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath(); // 1/2 Line
ctx.moveTo(frontTopX,frontTopY + (frontHeight/2));
ctx.lineTo(backTopX,backTopY + (backThick/2));
ctx.lineTo(backTopX + backThick,backTopY + (backThick/2));
ctx.lineTo(frontTopX + frontWidth,frontTopY + (frontHeight/2));
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath(); // 3/4 Line
ctx.moveTo(frontTopX,frontTopY + (frontHeight/2)+ (frontTopY + ((frontHeight/2)/2))- 10);
ctx.lineTo(backTopX,backTopY + (backThick/2) + ((backThick/2)/2));
ctx.lineTo(backTopX + backThick,backTopY + (backThick/2) + ((backThick/2)/2));
ctx.lineTo(frontTopX + frontWidth,frontTopY + (frontHeight/2)+ (frontTopY + ((frontHeight/2)/2))- 10);
ctx.stroke();

// Cross 
    ctx.strokeStyle = "green";
    ctx.beginPath(); // Bottom Cross Left - Right Line
    ctx.moveTo(frontTopX,frontTopY);
    ctx.lineTo(frontTopX + frontWidth,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath(); // Bottom Cross Right - Left Line
    ctx.moveTo(frontTopX + frontWidth,frontTopY);
    ctx.lineTo(frontTopX,frontTopY + frontHeight);
    ctx.closePath();
    ctx.stroke();
}