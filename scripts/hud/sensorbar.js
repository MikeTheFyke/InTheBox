function drawIcons () {
    ctx.strokeStyle = "red";

    // ctx.beginPath(); // Top Middle Icon
    // ctx.lineWidth = 5;
    // ctx.moveTo((topXCorner + 270),topYCorner); // LeTop Mid Top Corner
    // ctx.lineTo( ( (topXCorner + xthick) - 270),topYCorner); // RT Mid Top Corner
    // ctx.lineTo( ( (topXCorner + xthick) - 285),topYCorner + 15); // RT SubMid
    // ctx.lineTo((topXCorner + 285),topYCorner + 15); // LeTop SubMid 
    // ctx.closePath();
    // ctx.stroke();

    ctx.beginPath(); // Bottom Middle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( ((topXCorner + xthick) - 270),topYCorner + ythick); // RiBot Mid Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick)); // LeBot Mid Corner
    ctx.lineTo((topXCorner + 285),((topYCorner + ythick) - 15 ) ); // LeBot SubMid
    ctx.lineTo( ((topXCorner + xthick) - 285),(topYCorner + ythick) -15); // RiBto SubMid
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "red"; // Right Side
    ctx.beginPath(); // Bottom SubMiddle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( ((topXCorner + xthick) - 270),(topYCorner + ythick + 30) )  ; // Right Top Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick) + 30 ); // Left Top Corner
    ctx.lineTo((topXCorner + 270),(topYCorner + ythick) + 50 ); // Left Bottom Corner
    ctx.lineTo( ((topXCorner + xthick) - 270),(topYCorner + ythick) + 50 ) ; // Right Bottom Corner
    ctx.closePath();
    ctx.fill();
}