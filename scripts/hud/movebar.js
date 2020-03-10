
function moveBar() {

    var barX = Xcord;
    var barY = Ycord;

        if (barX >= 890){ // Right Boundry
            barX = 890 ;}
        if (barX <= 510 ){ // Left Boundry
            barX = 510 ;}
    
    ctx.strokeStyle= "lightblue";
    ctx.fillStyle = "white";

    ctx.beginPath(); // 
    ctx.moveTo( barX - 50,topYCorner - 35 ); // Left Top Corner
    ctx.lineTo( barX + 50,topYCorner - 35 ); // Right Top Corner
    ctx.lineTo( barX + 50,topYCorner + 15); // RT SubMid
    ctx.lineTo( barX - 50,topYCorner + 15); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
    ctx.fill()

    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Top Middle Icon
    ctx.lineWidth = 10;
    ctx.moveTo((topXCorner + 270),topYCorner - 35 ); // Left Top Corner
    ctx.lineTo( ( (topXCorner + xthick) - 270),topYCorner - 35 ); // Right Top Corner
    ctx.lineTo( ( (topXCorner + xthick) - 285),topYCorner + 15); // RT SubMid
    ctx.lineTo((topXCorner + 285),topYCorner + 15); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
}
