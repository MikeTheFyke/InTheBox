var canvas07 = document.getElementById('gameCanvas07');
var co = canvas07.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var backY = 20;
var backX = 20;
const xthick = 400;
const ythick = 200;
var topX;
var topY;
const topXthick = 40;
const topYthick = 40;
var spacing = 45;

function calculateMousePos(evt){      // an event fires when mouse moves
    var rect = canvas07.getBoundingClientRect();
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
    drawEverything02();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas07.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        var Xcenter = canvas07.width/2;
        var Ycenter = canvas07.height/2;
        backY = Ycord - 100;
        backX = Xcord;
        topX = mousePos.x - 140;
        topY = mousePos.y - 80;

       });
}

function drawEverything02() {
    co.fillStyle = "black"; // canvas07 Black
    co.fillRect(0,0,canvas07.width,canvas07.height);
            if (backY <= 100){ // Top Boundry
                backY = 100 ;}
            if (backY >= 120){ // Bottom Boundry
                backY = 120 ;} 
            if (backX >= 200){ // Right Boundry
                backX = 200 ;}
            if (backX <= 140){ // Left Boundry
                backX = 140 ;}

            if (topY <= 40){ // Top Boundry
                topY = 40 ;}
            if (topY >= 175){ // Bottom Boundry
                topY = 175 ;} 
            if (topX >= 250){ // Right Boundry
                topX = 250 ;}
            if (topX <= 100){ // Left Boundry
                topX = 100 ;}
    Row01();
    Tops();
    Sides();
}


function Tops(){
    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 3; j++){
            co.fillStyle = "crimson"; // Top Side Face 01 02
            co.fillRect(topX + (spacing * i),topY +(spacing * j),topXthick,topYthick);
        }
    }
}

function Sides (){
    co.beginPath(); // Left Side Face
    co.fillStyle = "red";
    co.moveTo(backX,backY);
    co.lineTo(topX,topY);
    co.lineTo(topX,topY + topYthick);
    co.lineTo(backX,backY + topXthick);
    co.fill();

    co.beginPath(); // Right Side Face
    co.fillStyle = "red";
    co.moveTo(topX + topXthick,topY);
    co.lineTo(backX + topXthick,backY);
    co.lineTo(backX + topXthick,backY + topYthick);
    co.lineTo(topX + topXthick,topY + topYthick);
    co.fill();
}

function Row01(){
    /// Box 01
    co.beginPath(); // Back Face
    co.fillStyle = "darkred";
    co.moveTo(backX,backY);
    co.lineTo(backX + topYthick,backY);
    co.lineTo(topX + topXthick,topY);
    co.lineTo(topX,topY);
    co.fill();

    co.beginPath(); // Bottom Face
    co.fillStyle = "darkred";
    co.moveTo(topX,topY + topYthick);
    co.lineTo(topX + topXthick,topY + topYthick);
    co.lineTo(backX + topXthick,backY + topYthick);
    co.lineTo(backX,backY + topYthick);
    co.fill();

/// Box 02
    co.beginPath(); // Back Face
    co.fillStyle = "darkred";
    co.moveTo(backX + spacing,backY);
    co.lineTo(backX + topYthick + spacing,backY);
    co.lineTo(topX + topXthick + spacing,topY);
    co.lineTo(topX + spacing,topY);
    co.fill();

    co.beginPath(); // Left Side Face
    co.fillStyle = "red";
    co.moveTo(backX + spacing,backY);
    co.lineTo(topX + spacing,topY);
    co.lineTo(topX + spacing,topY + topYthick);
    co.lineTo(backX + spacing,backY + topXthick);
    co.fill();

    co.beginPath(); // Right Side Face
    co.fillStyle = "red";
    co.moveTo(topX + topXthick + spacing,topY);
    co.lineTo(backX + topXthick + spacing,backY);
    co.lineTo(backX + topXthick  + spacing,backY + topYthick);
    co.lineTo(topX + topXthick + spacing,topY + topYthick);
    co.fill();

    co.beginPath(); // Bottom Face
    co.fillStyle = "darkred";
    co.moveTo(topX + spacing,topY + topYthick);
    co.lineTo(topX + topXthick + spacing,topY + topYthick);
    co.lineTo(backX + topXthick + spacing,backY + topYthick);
    co.lineTo(backX + spacing,backY + topYthick);
    co.fill();


/// Box 03
    co.beginPath(); // Back Face
    co.fillStyle = "darkred";
    co.moveTo(backX + spacing + spacing,backY);
    co.lineTo(backX + topYthick + spacing + spacing,backY);
    co.lineTo(topX + topXthick + spacing + spacing,topY);
    co.lineTo(topX + spacing + spacing,topY);
    co.fill();

    co.beginPath(); // Left Side Face
    co.fillStyle = "red";
    co.moveTo(backX + spacing + spacing,backY);
    co.lineTo(topX + spacing + spacing,topY);
    co.lineTo(topX + spacing + spacing,topY + topYthick);
    co.lineTo(backX + spacing + spacing,backY + topXthick);
    co.fill();

    co.beginPath(); // Right Side Face
    co.fillStyle = "red";
    co.moveTo(topX + topXthick + spacing + spacing,topY);
    co.lineTo(backX + topXthick + spacing + spacing,backY);
    co.lineTo(backX + topXthick  + spacing + spacing,backY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing,topY + topYthick);
    co.fill();

    co.beginPath(); // Bottom Face
    co.fillStyle = "darkred";
    co.moveTo(topX + spacing + spacing,topY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing,topY + topYthick);
    co.lineTo(backX + topXthick + spacing + spacing,backY + topYthick);
    co.lineTo(backX + spacing + spacing,backY + topYthick);
    co.fill();

/// Box 04
    co.beginPath(); // Back Face
    co.fillStyle = "darkred";
    co.moveTo(backX + spacing + spacing + spacing,backY);
    co.lineTo(backX + topYthick + spacing + spacing + spacing,backY);
    co.lineTo(topX + topXthick + spacing + spacing + spacing,topY);
    co.lineTo(topX + spacing + spacing + spacing,topY);
    co.fill();

    co.beginPath(); // Left Side Face
    co.fillStyle = "red";
    co.moveTo(backX + spacing + spacing+ spacing,backY);
    co.lineTo(topX + spacing + spacing+ spacing,topY);
    co.lineTo(topX + spacing + spacing+ spacing,topY + topYthick);
    co.lineTo(backX + spacing + spacing+ spacing,backY + topXthick);
    co.fill();

    co.beginPath(); // Right Side Face
    co.fillStyle = "red";
    co.moveTo(topX + topXthick + spacing + spacing+ spacing,topY);
    co.lineTo(backX + topXthick + spacing + spacing+ spacing,backY);
    co.lineTo(backX + topXthick  + spacing + spacing+ spacing,backY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing+ spacing,topY + topYthick);
    co.fill();

    co.beginPath(); // Bottom Face
    co.fillStyle = "darkred";
    co.moveTo(topX + spacing + spacing+ spacing,topY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing+ spacing,topY + topYthick);
    co.lineTo(backX + topXthick + spacing + spacing+ spacing,backY + topYthick);
    co.lineTo(backX + spacing + spacing+ spacing,backY + topYthick);
    co.fill();
    
/// Box 05
    co.beginPath(); // Back Face
    co.fillStyle = "darkred";
    co.moveTo(backX + spacing + spacing + spacing + spacing,backY);
    co.lineTo(backX + topYthick + spacing + spacing + spacing + spacing,backY);
    co.lineTo(topX + topXthick + spacing + spacing + spacing + spacing,topY);
    co.lineTo(topX + spacing + spacing + spacing + spacing,topY);
    co.fill();

    co.beginPath(); // Left Side Face
    co.fillStyle = "red";
    co.moveTo(backX + spacing + spacing + spacing + spacing,backY);
    co.lineTo(topX + spacing + spacing+ spacing + spacing,topY);
    co.lineTo(topX + spacing + spacing+ spacing + spacing,topY + topYthick);
    co.lineTo(backX + spacing + spacing+ spacing + spacing,backY + topXthick);
    co.fill();

    co.beginPath(); // Right Side Face
    co.fillStyle = "red";
    co.moveTo(topX + topXthick + spacing + spacing+ spacing + spacing,topY);
    co.lineTo(backX + topXthick + spacing + spacing+ spacing + spacing,backY);
    co.lineTo(backX + topXthick  + spacing + spacing+ spacing + spacing,backY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing+ spacing + spacing,topY + topYthick);
    co.fill();

    co.beginPath(); // Bottom Face
    co.fillStyle = "darkred";
    co.moveTo(topX + spacing + spacing+ spacing + spacing,topY + topYthick);
    co.lineTo(topX + topXthick + spacing + spacing+ spacing + spacing,topY + topYthick);
    co.lineTo(backX + topXthick + spacing + spacing+ spacing + spacing,backY + topYthick);
    co.lineTo(backX + spacing + spacing+ spacing + spacing,backY + topYthick);
    co.fill();
    }

