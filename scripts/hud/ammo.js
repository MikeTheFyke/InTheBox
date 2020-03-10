var ammoText = "8"

function ammoCtr(){
    if (ammoCount >= 1){
        ammoCount = ammoCount - 1;
        ammoText = ammoCount;
        console.log("AmmoCount = " + ammoCount)
    } else {
        ammoCount = ammoCount + 9;
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

    drawBars()

    ctx.font = "30px Verdana";
    ctx.fillText(ammoText,topXCorner + 180,topYCorner + 30, 90,100);
}

function drawBars() {
    ctx.strokeStyle = "green";
    ctx.beginPath(); // Health Icon
    ctx.lineWidth = 5;
    ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
    ctx.lineTo( topXCorner + 195,topYCorner + 5);      // RT Mid Top Corner
    ctx.lineTo( topXCorner + 220,topYCorner + 30); // RT SubMid
    ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
    ctx.closePath();
    ctx.stroke();
}