var ammoText = 8

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

    // drawBars() Health Like Interior Bar
    if (ammoText >= 1 ){
        drawBullets();
    } else {
        reloadBullets();
    }

    ctx.font = "30px Verdana";
    ctx.fillText(ammoText,topXCorner + 180,topYCorner + 30, 90,100);
}

// function drawBars() { // Health Like Bar
//     ctx.strokeStyle = "green";
//     ctx.beginPath(); // Health Icon
//     ctx.lineWidth = 5;
//     ctx.moveTo( topXCorner + 10,topYCorner + 25); // LeTop Mid Top Corner
//     ctx.lineTo( topXCorner + 195,topYCorner + 5);      // RT Mid Top Corner
//     ctx.lineTo( topXCorner + 220,topYCorner + 30); // RT SubMid
//     ctx.lineTo( topXCorner + 10,topYCorner + 30); // LeTop SubMid 
//     ctx.closePath();
//     ctx.stroke();
// }

function drawBullets(){
    for (var i = 1; i <= ammoText; i++){
        ctx.strokeStyle = "blue";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner + (i * 10) + (i*10),topYCorner + 60); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + ((i * 10) + 10) + (i*10),topYCorner + 60);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + ((i * 10) + 10) + (i*10),topYCorner + 75); // RT SubMid
        ctx.lineTo( topXCorner + (i * 10) + (i*10),topYCorner + 75); // LeTop SubMid 
        ctx.closePath();
        ctx.fill();

        ctx.beginPath() // Bullet Arc
        ctx.arc(topXCorner + 5 + (i * 10) + (i*10), topYCorner + 55, 5, 1 * Math.PI, 0 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }
}

function reloadBullets (){
        ctx.fillStyle = "red";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner ,topYCorner + 50); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + 250,topYCorner + 50);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + 265, topYCorner + 65); // RT SubMid
        ctx.lineTo( topXCorner , topYCorner + 65); // LeTop SubMid 
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "white";
        ctx.beginPath(); // Top Middle Icon
        ctx.lineWidth = 2;
        ctx.moveTo( topXCorner + 2 ,topYCorner + 52); // LeTop Mid Top Corner
        ctx.lineTo( topXCorner + 248,topYCorner + 52);      // RT Mid Top Corner
        ctx.lineTo( topXCorner + 258, topYCorner + 63); // RT SubMid
        ctx.lineTo( topXCorner + 2, topYCorner + 63); // LeTop SubMid 
        ctx.closePath();
        ctx.stroke();

        ctx.font = "9px Verdana";
        ctx.fillStyle="white";
        ctx.fillText("-- RELOAD --",topXCorner + 80,topYCorner + 61, 90,100);
}