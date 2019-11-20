var canvas02 = document.getElementById('storageCanvas');
var ct = canvas02.getContext('2d');
var framesPerSecond = 30;

var Xcord02 = 0;
var Ycord02 = 0;
const canvasWidth02 = 1000;
const canvasHeight02 = 600;

var box01X1;
var box01Y1;
var box01X2;
var box01Y2;
var box01X3;
var box01Y3;
var box01X4;
var box01Y4;

  function drawBox(){

    ct.strokeStyle = "orange"; // Right side face
    ct.beginPath();
    ct.moveTo(100 , 100);
    ct.lineTo(150 , 100);
    ct.lineTo(150, 150);
    ct.lineTo(100, 150);
    ct.closePath();
    ct.stroke();


}