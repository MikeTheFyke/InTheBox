var ctr = 0;

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
