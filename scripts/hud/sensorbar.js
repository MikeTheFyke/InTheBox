function drawIcons () {
    ctx.strokeStyle = "blue";

    ctx.beginPath(); // Outer Frame
    ctx.lineWidth = 5;
    ctx.moveTo( ( topXCorner + 285 ),((topYCorner + ythick) - 5 ) ); // Left Top
    ctx.lineTo( ((topXCorner + xthick ) - 285 ),(topYCorner + ythick) - 5 ); // Right Top
    ctx.lineTo( ((topXCorner + xthick ) - 230 ),(topYCorner + ythick) + 50 ) ; // Right Bottom Corner
    ctx.lineTo( ( topXCorner + 230 ),(topYCorner + ythick) + 50 ); // Left Bottom Corner
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