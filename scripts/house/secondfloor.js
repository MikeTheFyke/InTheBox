function drawSecondFloor(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
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
    // Front
    ctx.beginPath(); 
    ctx.moveTo(topXCorner + 10, topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + 10);
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50) - 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + 10, topYCorner + 10);
    ctx.stroke();
 // 2nd Floor Middle Room
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
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50),topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + ((Xwidth/3) + 50), topYCorner + 10);
    ctx.stroke();
// 2nd Floor Right Room
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
    // Front
    ctx.beginPath();
    ctx.moveTo(topXCorner + Xwidth - 10, topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + 10);
    ctx.lineTo(topXCorner + Xwidth - ((Xwidth/3)+50) + 10,topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + ((Yheight/2) - 20));
    ctx.lineTo(topXCorner + Xwidth - 10, topYCorner + 10);
    ctx.stroke();
}