var canvas02 = document.getElementById('storageCanvas');
var ct = canvas02.getContext('2d');


  function drawBox(){
//// Box 01
    var box01X1 = backX4;
    var box01Y1 = backY4 - ((backY4 - backY1)/4);
    
    var box01X2 = backX1 + ((backX2 - backX1)/4);
    var box01Y2 = backY4 - ((backY4 - backY1)/4);
    
    var box01X3 = backX1 + ((backX2 - backX1)/4);
    var box01Y3 = backY4;
    
    var box01X4 = backX4;
    var box01Y4 = backY4;

//// Box 02
    var box02X1 = frontX1 + (((backX1 - frontX1)/gridCtr)*6)
    var box02Y1 = frontY4 - (((frontY4 - backY4)/gridCtr)*15);

    var box02X2 = box02X1 + (((frontX2 - frontX1)/4)-35);
    var box02Y2 = frontY4 - (((frontY4 - backY4)/gridCtr)*15);

    var box02X3 = box02X1 + (((frontX2 - frontX1)/4)-35);
    var box02Y3 = frontY4 - (((frontY4 - backY4)/gridCtr)*6);

    var box02X4 = frontX1 + (((backX1 - frontX1)/gridCtr)*6);
    var box02Y4 = frontY4 - (((frontY4 - backY4)/gridCtr)*6);
////
    var boxCtr = document.getElementById("boxCount").value;

    if (document.getElementById("boxCount").value > 0){
        for (var i = 0; i < boxCtr; i ++){
            ct.strokeStyle = "orange"; // back side face
            ct.beginPath();
            ct.moveTo(box01X1 + (((backX2 - backX1)/4) * i) , box01Y1);
            ct.lineTo(box01X2 + (((backX2 - backX1)/4) * i) , box01Y2);
            ct.lineTo(box01X3 + (((backX2 - backX1)/4) * i) , box01Y3);
            ct.lineTo(box01X4 + (((backX2 - backX1)/4) * i) , box01Y4);
            ct.closePath();
            ct.stroke();
            ct.strokeStyle = "yellow"; // front side face
            ctx.beginPath();
            ctx.moveTo(box02X1 + (((frontX2 - frontX1)/4) * i),box02Y1);
            ctx.lineTo(box02X2 + (((frontX2 - frontX1)/4) * i),box02Y2);
            ctx.lineTo(box02X3 + (((frontX2 - frontX1)/4) * i),box02Y3);
            ctx.lineTo(box02X4 + (((frontX2 - frontX1)/4) * i), box02Y4);
            ctx.closePath();
            ctx.stroke();
            ctx.strokeStyle = "green"; ///Vertical
            ctx.beginPath();
            ctx.moveTo(box01X2 + (((backX2 - backX1)/4) * i),box01Y2);
            ctx.lineTo(box02X2 + (((frontX2 - frontX1)/4) * i),box02Y2);
            ctx.lineTo(box02X3 + (((frontX2 - frontX1)/4) * i),box02Y3);
            ct.lineTo(box01X3 + (((backX2 - backX1)/4) * i) , box01Y3);
            ctx.closePath();
            ctx.stroke();
            
        }
    }
}