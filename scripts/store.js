var canvas = document.getElementById('storageCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var Xcord = 0;
var Ycord = 0;
var frontY1;
var frontX1;
const canvasWidth = 1000;
const canvasHeight = 600;
var cLength;
var cWidth;
var cHeight;

var frontX1;
var frontY1;
var frontX2;
var frontY2;
var frontX3;
var frontY3;
var frontX4;
var frontY4;

var backX1;
var backY1;
var backX2;
var backY2;
var backX3;
var backY3;
var backX4;
var backY4;

var clicked = false;
const gridCtr = 8;
var doors = 0;
var shelfCtr = 0;

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

    drawCloset();
    drawBox();
    },1000/framesPerSecond); // Hundredth of seconds, ballX movement

    canvas.addEventListener ('mousemove',   // keypress, mouseclick, mousemove
      function(evt) {
        var mousePos = calculateMousePos(evt);
        Xcord = mousePos.x;
        Ycord = mousePos.y;
        frontY1 = mousePos.y-(canvasHeight/2); // paddle aligns in centre with mouse
        frontX1 = mousePos.x-(canvasWidth/2);
       });
}

function drawEverything() {
    ctx.fillStyle = "black"; // Canvas Black
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

  function drawCloset(){
    const hUnit = 60;
    const xUnit = 100;
    
    cLength = document.getElementById("closetLength").value;
    cWidth = document.getElementById("closetWidth").value;
    cHeight = document.getElementById("closetHeight").value;
    // console.log ("Length - " + cLength + " Width - " + cWidth + " Height -  " + cHeight);

    frontX1 = (canvasWidth/2) - ((cLength*xUnit)/2);
    frontY1 = (canvasHeight/2) - ((cHeight*hUnit)/2);
    frontX2 = (canvasWidth/2) + ((cLength*xUnit)/2);
    frontY2 = (canvasHeight/2) - ((cHeight*hUnit)/2);
    frontX3 = (canvasWidth/2) + ((cLength*xUnit)/2);
    frontY3 = (canvasHeight/2) + ((cHeight*hUnit)/2);
    frontX4 = (canvasWidth/2) - ((cLength*xUnit)/2);
    frontY4 = (canvasHeight/2) + ((cHeight*hUnit)/2);

    // console.log ("frontX1 - " + frontX1 + " frontY1 - " + frontY1);

    const wUnit = (cWidth * 30);

    backX1 = frontX1 + wUnit;
    backY1 = frontY1 + wUnit;
    backX2 = frontX2 - wUnit;
    backY2 = frontY2 + wUnit;
    backX3 = frontX3 - wUnit;
    backY3 = frontY3 - wUnit;
    backX4 = frontX4 + wUnit;
    backY4 = frontY4 - wUnit;

    drawGrid();

    ctx.strokeStyle = "red"; // Back side face
    ctx.beginPath();
    ctx.moveTo(backX1,backY1);
    ctx.lineTo(backX2,backY2);
    ctx.lineTo(backX3,backY3);
    ctx.lineTo(backX4,backY4);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange"; // Left side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(backX1,backY1);
    ctx.lineTo(backX4,backY4);
    ctx.lineTo(frontX4,frontY4);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "orange"; // Right side face
    ctx.beginPath();
    ctx.moveTo(backX2,backY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo(backX3,backY3);
    ctx.closePath();
    ctx.stroke();
//// Grid Texts
    //// Length
    if (document.getElementById("closetLength").value > 0){
      ctx.strokeStyle = "red";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("LENGTH : ", backX4 + 5, backY4 - 5);
    } else{
      ctx.strokeStyle = "transparent";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("LENGTH : ", backX4 + 5, backY4 - 5); 
    }
    //// Height
    if (document.getElementById("closetHeight").value > 0){
      ctx.strokeStyle = "orange";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("HEIGHT : ", backX1 + 5, backY1 + 30);
    } else{
      ctx.strokeStyle = "transparent";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("HEIGHT : ", backX1 + 5, backY1 + 30); 
    }
    //// Width
    if (document.getElementById("closetWidth").value > 0){
      ctx.strokeStyle = "yellow";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("WIDTH : ", frontX1 + 35, frontY1 + 35);
    } else{
      ctx.strokeStyle = "transparent";
      ctx.font = "30px Comic Sans MS"; // Length text 
      ctx.strokeText("WIDTH : ", frontX1 + 35, frontY1 + 35); 
    }
////
    if (document.getElementById("doorCount").value < 2){
      ctx.strokeStyle = "yellow"; // Front side face
      ctx.beginPath();
      ctx.moveTo(frontX1,frontY1);
      ctx.lineTo(frontX2,frontY2);
      ctx.lineTo(frontX3,frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY3);
      ctx.lineTo((frontX3) - ((cLength*xUnit)/3),frontY1 + ((cHeight*hUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY1 + ((cHeight*hUnit)/4));
      ctx.lineTo((frontX4) + ((cLength*xUnit)/3),frontY4);
      ctx.lineTo((frontX4),frontY4);
      ctx.closePath();
      ctx.stroke();
    } else {
    ctx.strokeStyle = "yellow"; // Front side face
    ctx.beginPath();
    ctx.moveTo(frontX1,frontY1);
    ctx.lineTo(frontX2,frontY2);
    ctx.lineTo(frontX3,frontY3);
    ctx.lineTo((frontX3) - ((cLength*xUnit)/6),frontY3);
    ctx.lineTo((frontX3) - ((cLength*xUnit)/6),frontY1 + ((cHeight*hUnit)/4));
    ctx.lineTo((frontX4) + ((cLength*xUnit)/6),frontY1 + ((cHeight*hUnit)/4));
    ctx.lineTo((frontX4) + ((cLength*xUnit)/6),frontY4);
    ctx.lineTo((frontX4),frontY4);
    ctx.closePath();
    ctx.stroke();
    }
  /// Shelves
  shelfCtr = document.getElementById("shelfCount").value;


    if (shelfCtr >= 1){
      ctx.strokeStyle = "red"; // Shelf back side face
      ctx.beginPath();
      ctx.moveTo(backX1, backY1 + (((backY4 - backY1)/gridCtr)*3));
      ctx.lineTo(backX2 , backY1 + (((backY4 - backY1)/gridCtr)*3));
      ctx.lineTo(backX2 , backY1 + (((backY4 - backY1)/gridCtr)*3) + 10);
      ctx.lineTo(backX4, backY1 + (((backY4 - backY1)/gridCtr)*3) + 10);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();  
      ctx.strokeStyle = "yellow"; // Shelf Front side face
      ctx.moveTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 20);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 20);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 25);
      ctx.lineTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 25);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();  
      ctx.strokeStyle = "orange"; // Shelf bottom side face
      ctx.moveTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 25);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + (((frontY4 - frontY1)/gridCtr)*3) + 25);
      ctx.lineTo(backX2 , backY1 + (((backY4 - backY1)/gridCtr)*3) + 10);
      ctx.lineTo(backX4, backY1 + (((backY4 - backY1)/gridCtr)*3) + 10);
      ctx.closePath();
      ctx.stroke(); 
    } 
    if (shelfCtr > 1){
      ctx.strokeStyle = "red"; // Shelf back side face
      ctx.beginPath();
      ctx.moveTo(backX1, backY1 + ((((backY4 - backY1)/gridCtr)*3)/2));
      ctx.lineTo(backX2 , backY1 + ((((backY4 - backY1)/gridCtr)*3)/2));
      ctx.lineTo(backX2 , backY1 + ((((backY4 - backY1)/gridCtr)*3)/2) + 10);
      ctx.lineTo(backX4, backY1 + ((((backY4 - backY1)/gridCtr)*3)/2) + 10);
      ctx.closePath();
      ctx.stroke();  
      ctx.strokeStyle = "orange"; // Shelf bottom side face
      ctx.beginPath(); 
      ctx.moveTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 55);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 55);
      ctx.lineTo(backX2 , backY1 + ((((backY4 - backY1)/gridCtr)*3)/2) + 10);
      ctx.lineTo(backX4, backY1 + ((((backY4 - backY1)/gridCtr)*3)/2) + 10);
      ctx.closePath();
      ctx.stroke(); 
      ctx.strokeStyle = "yellow"; // Shelf Front side face
      ctx.moveTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 50);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 50);
      ctx.lineTo(frontX3 - ((((frontX3 - backX3)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 55);
      ctx.lineTo(frontX1 + ((((backX1 - frontX1)/gridCtr)*3)*2) ,  frontY1 + ((((frontY4 - frontY1)/gridCtr)*3)/2) + 55);
      ctx.closePath();
      ctx.stroke();
    }

  }