function drawGrid (){
//// Grid Texts
        //// Length
        if (document.getElementById("closetLength").value > 0){
            ctx.strokeStyle = "red";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("LENGTH : " + document.getElementById("closetLength").value, backX4 + 5, backY4 - 5);
        } else{
            ctx.strokeStyle = "transparent";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("LENGTH : " + document.getElementById("closetLength").value, backX4 + 5, backY4 - 5); 
        }
        //// Height
        if (document.getElementById("closetHeight").value > 0){
            ctx.strokeStyle = "orange";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("HEIGHT : " + document.getElementById("closetHeight").value, backX1 + 5, backY1 + 30);
        } else{
            ctx.strokeStyle = "transparent";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("HEIGHT : " + document.getElementById("closetHeight").value, backX1 + 5, backY1 + 30); 
        }
        //// Width
        if (document.getElementById("closetWidth").value > 0){
            ctx.strokeStyle = "yellow";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("WIDTH : " + document.getElementById("closetWidth").value, frontX1 + 35, frontY1 + 35);
        } else{
            ctx.strokeStyle = "transparent";
            ctx.font = "30px Comic Sans MS"; // Length text 
            ctx.strokeText("WIDTH : " + document.getElementById("closetWidth").value, frontX1 + 35, frontY1 + 35); 
        }
//// GRIDS
    for (var j = 0; j < document.getElementById("closetLength").value; j++){
        // Roof Vertical
        ctx.strokeStyle = "green"; 
        ctx.beginPath();
        ctx.moveTo(backX1 + (((backX3 - backX4)/document.getElementById("closetLength").value)*j), backY1);
        ctx.lineTo(frontX1 + (((frontX2 - frontX1)/document.getElementById("closetLength").value)*j), frontY1);
        // Back Wall Vertical
        ctx.moveTo(backX1 + (((backX3 - backX4)/document.getElementById("closetLength").value)*j), backY1);
        ctx.lineTo(backX1 + (((backX3 - backX4)/document.getElementById("closetLength").value)*j), backY4)
        // Floor Vertical
        ctx.moveTo(backX4 + (((backX3 - backX4)/document.getElementById("closetLength").value)*j), backY4);
        ctx.lineTo(frontX4 + (((frontX2 - frontX1)/document.getElementById("closetLength").value)*j), frontY4);
        ctx.closePath();
        ctx.stroke();
    }
    for (var k = 0; k < document.getElementById("closetHeight").value; k++){
        // Right Wall Horizontal
        ctx.beginPath();
        ctx.moveTo(frontX2, frontY1 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*k));
        ctx.lineTo(backX2 , backY1 + (((backY4 - backY1)/document.getElementById("closetHeight").value)*k));
        ctx.closePath();
        ctx.stroke();
        // Back Wall Horizontal
        ctx.beginPath();
        ctx.moveTo(backX1, backY1 + (((backY4 - backY1)/document.getElementById("closetHeight").value)*k));
        ctx.lineTo(backX2 , backY1 + (((backY4 - backY1)/document.getElementById("closetHeight").value)*k));
        ctx.closePath();
        ctx.stroke();
        // Left Wall Horizontal
        ctx.beginPath();
        ctx.moveTo(backX1 , backY1 + (((backY4 - backY1)/document.getElementById("closetHeight").value)*k));
        ctx.lineTo(frontX1, frontY1 + (((frontY4 - frontY1)/document.getElementById("closetHeight").value)*k));
        ctx.closePath();
        ctx.stroke();
    }
    for (var m = 0; m < document.getElementById("closetWidth").value; m++){
        // Roof Horizontal
        ctx.beginPath();
        ctx.moveTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*m)) , frontY1 + (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        ctx.lineTo( (frontX3 - (((frontX3 - backX3)/document.getElementById("closetWidth").value)*m)) , frontY1 + (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        //  Right Wall Vertical
        ctx.beginPath();
        ctx.lineTo( (frontX3 - (((frontX3 - backX3)/document.getElementById("closetWidth").value)*m)) , frontY1 + (((backY1 - frontY1)/document.getElementById("closetWidth").value)*m));
        ctx.lineTo( (frontX3 - (((frontX3 - backX3)/document.getElementById("closetWidth").value)*m)) , frontY4 - (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        // Floor Horizontal
        ctx.lineTo( (frontX3 - (((frontX3 - backX3)/document.getElementById("closetWidth").value)*m)) , frontY4 - (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        ctx.lineTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*m)) , frontY4 - (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        //  Left Wall Vertical
        ctx.lineTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*m)) , frontY4 - (((frontY4 - backY4)/document.getElementById("closetWidth").value)*m));
        ctx.lineTo( (frontX1 + (((backX1 - frontX1)/document.getElementById("closetWidth").value)*m)) , frontY1 + (((backY1 - frontY1)/document.getElementById("closetWidth").value)*m));
        ctx.closePath();
        ctx.stroke();
    }
}
////