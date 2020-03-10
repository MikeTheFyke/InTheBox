var ctr = 0;

function drawRadar() {

    ctx.fillStyle="blue"
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 50, 0 * Math.PI, 2.0 * Math.PI, false); // Boundry Point
    ctx.fill()
    
    ctx.fillStyle="blue"
    ctx.strokeStyle="black"
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 35, 0 * Math.PI, 2.0 * Math.PI, false); // Edge Point
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle="blue"
    ctx.strokeStyle="black"
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, 5, 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
    ctx.fill()
    ctx.stroke()

    ctx.beginPath() // Hozizontal Radar Lines
    ctx.moveTo( topXCorner - 35 ,(topYCorner + ythick) - 62.5)
    ctx.lineTo( topXCorner + 35 ,(topYCorner + ythick) - 62.5)
    ctx.stroke()

    ctx.beginPath() // Vertical Radar Lines
    ctx.moveTo( topXCorner, (topYCorner + ythick) - 97.5)
    ctx.lineTo( topXCorner, (topYCorner + ythick) - 27)
    ctx.stroke()
    
}

function flashing(){
      
    if ( ctr <= 50 ) {
        for (var a = 0; a <= 50; a ++){
            ctx.strokeStyle="white"
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, (5 + a), 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
            ctx.stroke()

            ctx.strokeStyle="blue"
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, (5 + a), 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
            ctx.stroke()
        
            ctr = ctr + 1
            console.log("ctr = " + ctr)
        }
    } else {
        for (var b = 0; b <= 50; b ++){
            ctx.strokeStyle="white"
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, (50 - b), 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
            ctx.stroke()

            ctx.strokeStyle="blue"
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc( topXCorner,(topYCorner + ythick) - 62.5, (50 - b), 0 * Math.PI, 2.0 * Math.PI, false); // Middle Point
            ctx.stroke()
        
            ctr = ctr - 1
            console.log("ctr = " + ctr)
        }
    }
}
