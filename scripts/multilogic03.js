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
const topXthick = 60;
const topYthick = 60;

var spacing = 80;

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
        backY = 40;
        backX = 40;
        topX = mousePos.x - 140;
        topY = mousePos.y - 80;

       });
}

function drawEverything02() {
    co.fillStyle = "black"; // canvas07 Black
    co.fillRect(0,0,canvas07.width,canvas07.height);


            if (topY <= 20){ // Top Boundry
                topY = 20 ;}
            if (topY >= 60){ // Bottom Boundry
                topY = 60 ;} 
            if (topX >= 60){ // Right Boundry
                topX = 60 ;}
            if (topX <= 20){ // Left Boundry
                topX = 20 ;}
            
            if (Xcord <= 300 && Ycord <= 120) {
                Backs();
                SidesLeft();
                SidesRight();
                Bottoms();
                Tops();
            } else if (Xcord >= 300 && Ycord <= 120) {
                Backs();
                SidesRight();
                SidesLeft();
                Bottoms();
                Tops();
            } else if (Xcord <= 300 && Ycord >= 120){
                Bottoms();
                SidesLeft();
                SidesRight();
                Backs();
                Tops();
            } else if (Xcord >=300 && Ycord >= 120){
                Bottoms();
                SidesRight();
                SidesLeft();
                Backs();
                Tops();
            }
}


function Tops(){
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            co.fillStyle = "crimson"; // Top Side Face 01 02
            co.fillRect(topX + (spacing * i),topY +(spacing * j),topXthick,topYthick);
        }
    }
}

function SidesLeft (){
    for (var i2 = 0; i2 < 3; i2++){
        for (var j2 = 0; j2 < 3; j2++){
            co.beginPath(); // Left Side Face
            co.fillStyle = "red";
            co.moveTo(backX + (spacing * i2),backY  + (spacing * j2));
            co.lineTo(topX + (spacing * i2),topY  + (spacing * j2));
            co.lineTo(topX + (spacing * i2),topY + topYthick  + (spacing * j2));
            co.lineTo(backX + (spacing * i2),backY + topXthick  + (spacing * j2));
            co.fill();
            co.beginPath(); // Right Side Face
            co.moveTo(topX + topXthick + (spacing * i2),topY  + (spacing * j2));
            co.lineTo(backX + topXthick + (spacing * i2),backY  + (spacing * j2));
            co.lineTo(backX + topXthick + (spacing * i2),backY + topYthick  + (spacing * j2));
            co.lineTo(topX + topXthick + (spacing * i2),topY + topYthick  + (spacing * j2));
            co.fill();
        }
    }
}

function SidesRight (){
    for (var i2 = 0; i2 < 3; i2++){
        for (var j2 = 0; j2 < 3; j2++){
            co.beginPath(); // Right Side Face
            co.moveTo(topX + topXthick + (spacing * i2),topY  + (spacing * j2));
            co.lineTo(backX + topXthick + (spacing * i2),backY  + (spacing * j2));
            co.lineTo(backX + topXthick + (spacing * i2),backY + topYthick  + (spacing * j2));
            co.lineTo(topX + topXthick + (spacing * i2),topY + topYthick  + (spacing * j2));
            co.fill();
            co.beginPath(); // Left Side Face
            co.fillStyle = "red";
            co.moveTo(backX + (spacing * i2),backY  + (spacing * j2));
            co.lineTo(topX + (spacing * i2),topY  + (spacing * j2));
            co.lineTo(topX + (spacing * i2),topY + topYthick  + (spacing * j2));
            co.lineTo(backX + (spacing * i2),backY + topXthick  + (spacing * j2));
            co.fill();
        }
    }
}


function Backs (){
    for (var i3 = 0; i3 < 3; i3++){
        for (var j3 = 0; j3 < 3; j3++){
            co.beginPath(); // Back Face
            co.fillStyle = "darkred";
            co.moveTo(backX + (spacing * i3),backY + (spacing * j3));
            co.lineTo(backX + topYthick + (spacing * i3),backY + (spacing * j3));
            co.lineTo(topX + topXthick + (spacing * i3),topY + (spacing * j3));
            co.lineTo(topX + (spacing * i3),topY + (spacing * j3));
            co.fill();
        }
    }
}

function Bottoms(){
    for (var i4 = 0; i4 < 3; i4++){
        for (var j4 = 0; j4 < 3; j4++){
            co.beginPath(); // Bottom Face
            co.fillStyle = "darkred";
            co.moveTo(topX + (spacing * i4),topY + topYthick + (spacing * j4));
            co.lineTo(topX + topXthick + (spacing * i4),topY + topYthick + (spacing * j4));
            co.lineTo(backX + topXthick + (spacing * i4),backY + topYthick + (spacing * j4));
            co.lineTo(backX + (spacing * i4),backY + topYthick + (spacing * j4));
            co.fill();
        }
    }
}

