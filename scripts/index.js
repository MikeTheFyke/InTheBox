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
    drawBoxes();
}

function drawBoxes () {
    console.log("Xcord : " + Xcord + " Ycord : " +Ycord);

    if (topY <= 20){ // Top Boundry
        topY = 20 ;}
    if (topY >= 120){ // Bottom Boundry
        topY = 120 ;} 
    if (topX >= 100){ // Right Boundry
        topX = 100 ;}
    if (topX <= 20){ // Left Boundry
        topX = 20 ;}

    if (Xcord <= 200 && Ycord <= 355) {
        Backs();
        SidesLeft();
        SidesRight();
        Bottoms();
        Tops();
    } else if (Xcord >= 200 && Ycord <= 355) {
        Backs();
        SidesRight();
        SidesLeft();
        Bottoms();
        Tops();
    } else if (Xcord <= 200 && Ycord >= 355){
        Bottoms();
        Backs();
        SidesLeft();
        SidesRight();
        Tops();
    } else if (Xcord >=200 && Ycord >= 355){
        Bottoms();
        SidesRight();
        SidesLeft();
        Backs();
        Tops();
    }
    function Tops(){
        for (var i = 0; i < boxCtrX; i++){
            for (var j = 0; j < boxCtrY; j++){
                ctx.fillStyle = "crimson"; // Top Side Face 01 02
                ctx.fillRect(topX + ((boxSpacing + boxWidth) * i),topY + ((boxSpacing + boxWidth) * j),boxWidth,boxWidth);
            }
        }
    }
    
    function SidesLeft (){
        for (var i1 = 0; i1 < boxCtrX; i1++){
            for (var j1 = 0; j1 < boxCtrY; j1++){
                ctx.beginPath(); // Left Side Face
                ctx.fillStyle = "red";
                ctx.moveTo(backX1 + ((boxSpacing + boxWidth) * i1),backY1  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i1),topY  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i1),topY + boxWidth  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(backX1 + ((boxSpacing + boxWidth) * i1),backY1 + boxWidth  + ((boxSpacing + boxWidth) * j1));
                ctx.fill();

            }
        }
    }
    
    function SidesRight (){
        for (var i2 = 0; i2 < boxCtrX; i2++){
            for (var j2 = 0; j2 < boxCtrY; j2++){
                ctx.fillStyle = "red";
                ctx.beginPath(); // Right Side Face
                ctx.moveTo(topX + boxWidth + ((boxSpacing + boxWidth) * i2),topY  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i2),backY1  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i2),backY1 + boxWidth  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i2),topY + boxWidth  + ((boxSpacing + boxWidth) * j2));
                ctx.fill();

            }
        }
    }
    
    
    function Backs (){
        for (var i3 = 0; i3 < boxCtrX; i3++){
            for (var j3 = 0; j3 < boxCtrY; j3++){
                ctx.beginPath(); // Back Face
                ctx.fillStyle = "darkred";
                ctx.moveTo(backX1 + ((boxSpacing + boxWidth) * i3),backY1 + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i3),backY1 + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i3),topY + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i3),topY + ((boxSpacing + boxWidth) * j3));
                ctx.fill();
            }
        }
    }
    
    function Bottoms(){
        for (var i4 = 0; i4 < boxCtrX; i4++){
            for (var j4 = 0; j4 < boxCtrY; j4++){
                ctx.beginPath(); // Bottom Face
                ctx.fillStyle = "darkred";
                ctx.moveTo(topX + ((boxSpacing + boxWidth) * i4),topY + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i4),topY + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i4),backY1 + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(backX1 + ((boxSpacing + boxWidth) * i4),backY1 + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.fill();
            }
        }
    }

}