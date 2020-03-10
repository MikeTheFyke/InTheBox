var clipRemain = 8;
var ammoText = "YOU HAVE " + clipRemain + " Left";

function ammoCtr(){
    ammoCount = ammoCount - 1;
    console.log("AmmoCount = " + ammoCount)
}

function ammoBar(){
    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Top Middle Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner,topYCorner + 20); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 200,topYCorner - 5);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 240,topYCorner + 40); // RT SubMid
    ctx.lineTo( topXCorner,topYCorner + 40); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();

    ctx.font = "30px Verdana";
    ctx.fillText(ammoText,topXCorner + 20,topYCorner + 30, 90,100);
}