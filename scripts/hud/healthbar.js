function drawHealthBar() {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "lightblue";
    ctx.beginPath(); // main frame
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(topXCorner + xthick -220 , topYCorner + 30, 20, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick -200 , topYCorner + 10, 20, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick + 20 , topYCorner + 65, 40, 1.5 * Math.PI, 2.25 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick + 20 , topYCorner + 65, 40, 0 * Math.PI, .5 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick - 30 , topYCorner + 100, 40, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    // ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(topXCorner + xthick -210 , topYCorner + 27, 15, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick -200 , topYCorner + 13, 15, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick + 17 , topYCorner + 63, 35, 1.5 * Math.PI, 2.25 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick + 17 , topYCorner + 63, 35, 0 * Math.PI, .5 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick - 18 , topYCorner + 90, 35, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    ctx.fill();
    

    // var healthBarWidth = ( (topXCorner + xthick) - (topXCorner + xthick - 240) ) / 8;
    // console.log("health Bar Width = " + healthBarWidth);

    // for (c = 0; c <= 7; c++) {   
    //     ctx.strokeStyle = "darkblue";
    //     ctx.fillStyle = "blue";
    //     ctx.beginPath()
    //     ctx.moveTo( topXCorner + xthick - ( c * healthBarWidth ) + ( c * 5 ) , topYCorner + 20 - ( c * 3 ) ); // Right Top
    //     ctx.lineTo( topXCorner + xthick - ( c * healthBarWidth ), topYCorner + 40 ); // Right Bottom
    //     ctx.lineTo(topXCorner + xthick - ( healthBarWidth ) - ( c * healthBarWidth ) - ( c * .75 ) , topYCorner + 40 ) // Left Bottom
    //     ctx.lineTo(topXCorner + xthick - ( healthBarWidth ) - ( c * healthBarWidth ) + ( c * 5.5 ) , topYCorner + 20  - ( c * 4 ) ) // Left Top
    //     ctx.closePath()
    //     ctx.stroke()
        
    // }

    // ctx.strokeStyle = "darkblue";
    // ctx.beginPath(); // main frame
    // ctx.lineWidth = 6;
    // ctx.moveTo( topXCorner + xthick, topYCorner + 20 ); // Left Top Corner
    // ctx.lineTo( topXCorner + xthick - 200, topYCorner - 5 ); // Right Top Corner
    // ctx.lineTo( topXCorner + xthick - 240, topYCorner + 40 ); // Right Bottom Corner
    // ctx.lineTo( topXCorner + xthick, topYCorner + 40 ); // Left Bottom Corner 
    // ctx.closePath();
    // ctx.stroke();

}