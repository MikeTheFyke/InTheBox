function drawHealthBar() {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";

    ctx.beginPath(); // Outter Frame
    ctx.arc(topXCorner + xthick -220 , topYCorner + 30, 20, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick -200 , topYCorner + 10, 20, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick + 20 , topYCorner + 65, 40, 1.5 * Math.PI, 2.55 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick - 30 , topYCorner + 100, 40, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    ctx.stroke();

    innerBars();
}

var width1 = 15;
var width2 = 12;
var width3 = 25;
var width4 = 33;

var d = 11 ;

function innerBars(){
    ctx.lineWidth = 6;
    ctx.strokeStyle="white";
    ctx.fillStyle = "blue";
    ctx.beginPath(); // Inner Cell
    ctx.arc(topXCorner + xthick - 205 , topYCorner + 24, width1, 0.5 * Math.PI, 1.25 * Math.PI, false); // Bottom Left Arc
    ctx.arc(topXCorner + xthick - 200 , topYCorner + 13, 12, 1.25 * Math.PI, 1.5 * Math.PI, false); // Top Left Arc
    ctx.arc(topXCorner + xthick +  22 , topYCorner + 65, width3, 1.5 * Math.PI, 2.5 * Math.PI, false); // Top Right Arc
    ctx.arc(topXCorner + xthick -  12 , topYCorner + 84, width4, 0 * Math.PI, 1.5 * Math.PI, true); // Bottom Interior Arc
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    drawBar01()
}

function bar01() {

    for (var b = 0; b <= 6; b++){

        ctx.fillStyle = "white";
        ctx.beginPath(); // Inner Cell
        ctx.arc(topXCorner + xthick - 230 + ( b * 34) , topYCorner + 85, d, 0 * Math.PI, 2 * Math.PI, false); // Bottom Left Arc
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "blue";
        ctx.beginPath(); // Inner Cell
        ctx.arc(topXCorner + xthick - 230 + ( b * 34) , topYCorner + 85, 12, 0 * Math.PI, 2 * Math.PI, false); // Bottom Left Arc
        ctx.closePath();
        ctx.fill();
    }
}



function drawBar01() {
    bar01();
    if ( d >= 15){
        d = 11;
    
    }
    d = d + 0.05;

}