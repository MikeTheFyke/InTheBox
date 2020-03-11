function drawHealthBar() {
    ctx.fillStyle = "white";
    ctx.beginPath(); // main frame
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner + xthick, topYCorner + 20 ); // Left Top Corner
    ctx.lineTo( topXCorner + xthick - 200, topYCorner - 5 ); // Right Top Corner
    ctx.lineTo( topXCorner + xthick - 240, topYCorner + 40 ); // Right Bottom Corner
    ctx.lineTo( topXCorner + xthick, topYCorner + 40 ); // Left Bottom Corner 
    ctx.closePath();
    ctx.fill();

    var healthBarWidth = ( (topXCorner + xthick) - (topXCorner + xthick - 240) ) / 8;
    console.log("health Bar Width = " + healthBarWidth);

    for (c = 0; c <= 7; c++) {   
        ctx.strokeStyle = "darkblue";
        ctx.fillStyle = "blue";
        ctx.beginPath()
        ctx.moveTo( topXCorner + xthick - ( c * healthBarWidth ) + ( c * 5 ) , topYCorner + 20 - ( c * 3 ) ); // Right Top
        ctx.lineTo( topXCorner + xthick - ( c * healthBarWidth ), topYCorner + 40 ); // Right Bottom
        ctx.lineTo(topXCorner + xthick - ( healthBarWidth ) - ( c * healthBarWidth ) - ( c * .75 ) , topYCorner + 40 ) // Left Bottom
        ctx.lineTo(topXCorner + xthick - ( healthBarWidth ) - ( c * healthBarWidth ) + ( c * 5.5 ) , topYCorner + 20  - ( c * 4 ) ) // Left Top
        ctx.closePath()
        ctx.stroke()
        
    }

    ctx.strokeStyle = "darkblue";
    ctx.beginPath(); // main frame
    ctx.lineWidth = 6;
    ctx.moveTo( topXCorner + xthick, topYCorner + 20 ); // Left Top Corner
    ctx.lineTo( topXCorner + xthick - 200, topYCorner - 5 ); // Right Top Corner
    ctx.lineTo( topXCorner + xthick - 240, topYCorner + 40 ); // Right Bottom Corner
    ctx.lineTo( topXCorner + xthick, topYCorner + 40 ); // Left Bottom Corner 
    ctx.closePath();
    ctx.stroke();

}