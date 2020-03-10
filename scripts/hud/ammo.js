var ammoText = "8"

function ammoCtr(){
    if (ammoCount >= 1){
        ammoCount = ammoCount - 1;
        ammoText = ammoCount;
        console.log("AmmoCount = " + ammoCount)
    } else {
        ammoCount = ammoCount + 8;
    }
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