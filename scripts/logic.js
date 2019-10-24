var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var framesPerSecond = 30;

var topCorner = 20;
var topXCorner = 20;
const xthick = 800;
const ythick = 450;

var redTopY = 120;
var redTopX = 250;
const redXthick = 400;
const redYthick = 400;


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
        topCorner = mousePos.y-(ythick/2); // paddle aligns in centre with mouse
        topXCorner = mousePos.x-(xthick/2);
        redTopY = mousePos.y - 200;
        redTopX = mousePos.x - 500;
       });
}

function drawEverything() {
    ////////////////////////////// Print Normally
    if(topXCorner > 50 ) {        
    console.log("Drawing Back");
    ctx.fillStyle = "black"; // blanks screen black
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "grey"; //
    ctx.fillRect(topXCorner,topCorner,xthick,ythick);

    ctx.fillStyle = "black"; //
    ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);

    ctx.beginPath(); //
    ctx.lineWidth = 2;
    ctx.moveTo(0,0);
    ctx.lineTo(topXCorner,topCorner);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.beginPath(); //
    ctx.moveTo(1400,0);
    ctx.lineTo(topXCorner + xthick,topCorner);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.beginPath(); //
    ctx.moveTo(0,720);
    ctx.lineTo(topXCorner,topCorner + ythick);
    ctx.strokeStyle = "grey";
    ctx.stroke();


    ctx.beginPath(); //
    ctx.moveTo(1400,720);
    ctx.lineTo(topXCorner + xthick,topCorner +ythick);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.fillStyle = "blue"; //
    ctx.fillRect(topXCorner + 270,topCorner + 170,100,100);

    ctx.fillStyle = "red"; //
    ctx.fillRect(redTopX,redTopY,redXthick,redYthick);
    console.log("topXCorner",topXCorner)
    console.log("topYCorner",topCorner)
    } 
    if(redTopX < 30) {
        redTopX = 30;
    }
    if (redTopX >= 350){
        redTopX = 350;
    }
    if (redTopY < 35){
        redTopY = 35;
    }
    if (redTopY > 150){
        redTopY = 150;
    }
////////////////////////////// Left Boundry - STOP
        if (topXCorner <= 50){

            topXCorner = 50 ;
    
            ctx.fillStyle = "black"; // blanks screen black
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = "grey"; //
            ctx.fillRect(topXCorner,topCorner,xthick,ythick);
            ctx.fillStyle = "black"; //
            ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);
            ctx.beginPath(); //
            ctx.lineWidth = 2;
            ctx.moveTo(0,0);
            ctx.lineTo(topXCorner,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); //
            ctx.moveTo(1400,0);
            ctx.lineTo(topXCorner + xthick,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); //
            ctx.moveTo(0,720);
            ctx.lineTo(topXCorner,topCorner + ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath();  //
            ctx.moveTo(1400,720);
            ctx.lineTo(topXCorner + xthick,topCorner +ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();

            ctx.fillStyle = "blue"; //
            ctx.fillRect(topXCorner + 270,topCorner + 170,100,100);

            ctx.fillStyle = "red"; //
            ctx.fillRect(redTopX,redTopY,redXthick,redYthick);
        } 
////////////////////////////// Top Boundry - Stop
        if (topCorner <= 50) {

        topCorner = 50 ;
        
        ctx.fillStyle = "black";  // blanks screen black
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "grey"; //
        ctx.fillRect(topXCorner,topCorner,xthick,ythick);
        ctx.fillStyle = "black"; //
        ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);
        ctx.beginPath(); //
        ctx.lineWidth = 2;
        ctx.moveTo(0,0);
        ctx.lineTo(topXCorner,topCorner);
        ctx.strokeStyle = "grey";
        ctx.stroke();
        ctx.beginPath(); //
        ctx.moveTo(1400,0);
        ctx.lineTo(topXCorner + xthick,topCorner);
        ctx.strokeStyle = "grey";
        ctx.stroke();
        ctx.beginPath(); //
        ctx.moveTo(0,720);
        ctx.lineTo(topXCorner,topCorner + ythick);
        ctx.strokeStyle = "grey";
        ctx.stroke();
        ctx.beginPath(); //
        ctx.moveTo(1400,720);
        ctx.lineTo(topXCorner + xthick,topCorner +ythick);
        ctx.strokeStyle = "grey";
        ctx.stroke();    
        
        ctx.fillStyle = "blue"; //
        ctx.fillRect(topXCorner + 270,topCorner + 170,100,100);
        if(redTopY <= 20) {
            redTopY = 20;
        }
        ctx.fillStyle = "red"; //
        ctx.fillRect(redTopX,redTopY,redXthick,redYthick);
        }
////////////////////////////// Right Boundry - Stop
        if (topXCorner >= 550){
    
            topXCorner = 550 ;
            
            ctx.fillStyle = "black";// blanks screen black
            ctx.fillRect(0,0,canvas.width,canvas.height);    
            ctx.fillStyle = "grey"; //
            ctx.fillRect(topXCorner,topCorner,xthick,ythick);
            ctx.fillStyle = "black"; //
            ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);
            ctx.beginPath(); //
            ctx.lineWidth = 2;
            ctx.moveTo(0,0);
            ctx.lineTo(topXCorner,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); //
            ctx.moveTo(1400,0);
            ctx.lineTo(topXCorner + xthick,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); //
            ctx.moveTo(0,720);
            ctx.lineTo(topXCorner,topCorner + ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); //
            ctx.moveTo(1400,720);
            ctx.lineTo(topXCorner + xthick,topCorner +ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();

            ctx.fillStyle = "blue"; //
            ctx.fillRect(topXCorner + 270,topCorner + 170,100,100);

            ctx.fillStyle = "red"; //
            ctx.fillRect(redTopX,redTopY,redXthick,redYthick);
        }
////////////////////////////// Bottom Boundry - Stop
        if (topCorner >= 240){

            topCorner = 240 ;
            
            ctx.fillStyle = "black"; // blanks screen black
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = "grey"; // Back Grey Box
            ctx.fillRect(topXCorner,topCorner,xthick,ythick);
            ctx.fillStyle = "black"; // Inner Back Box Black
            ctx.fillRect(topXCorner +5,topCorner +5 ,790,440);
            ctx.beginPath(); // Top Left Stroke
            ctx.lineWidth = 2;
            ctx.moveTo(0,0);
            ctx.lineTo(topXCorner,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); // Top Right Stroke
            ctx.moveTo(1400,0);
            ctx.lineTo(topXCorner + xthick,topCorner);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); // Bottom Left Stroke
            ctx.moveTo(0,720);
            ctx.lineTo(topXCorner,topCorner + ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();
            ctx.beginPath(); // Bottom Right Stroke
            ctx.moveTo(1400,720);
            ctx.lineTo(topXCorner + xthick,topCorner +ythick);
            ctx.strokeStyle = "grey";
            ctx.stroke();

            ctx.fillStyle = "blue"; //
            ctx.fillRect(topXCorner + 270,topCorner + 170,100,100);

            ctx.fillStyle = "red"; //
            ctx.fillRect(redTopX,redTopY,redXthick,redYthick);
        } 


  }