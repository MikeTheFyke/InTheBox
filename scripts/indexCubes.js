function drawBoxes () {
    if (topY <= 20){ // Top Boundry
        topY = 20 ;}
    if (topY >= 120){ // Bottom Boundry
        topY = 120 ;} 
    if (topX >= 100){ // Right Boundry
        topX = 100 ;}
    if (topX <= 20){ // Left Boundry
        topX = 20 ;}

    if (Xcord <= 200 && Ycord <= 355) {
        Backs();
        SidesLeft();
        SidesRight();
        Bottoms();
        Tops();
    } else if (Xcord >= 200 && Ycord <= 355) {
        Backs();
        SidesRight();
        SidesLeft();
        Bottoms();
        Tops();
    } else if (Xcord <= 200 && Ycord >= 355){
        Bottoms();
        Backs();
        SidesLeft();
        SidesRight();
        Tops();
    } else if (Xcord >=200 && Ycord >= 355){
        Bottoms();
        SidesRight();
        SidesLeft();
        Backs();
        Tops();
    }
    function Tops(){
        for (var i = 0; i < boxCtrX; i++){
            for (var j = 0; j < boxCtrY; j++){
                ctx.fillStyle = "crimson"; // Top Side Face 01 02
                ctx.fillRect(topX + ((boxSpacing + boxWidth) * i),topY + ((boxSpacing + boxWidth) * j),boxWidth,boxWidth);
            }
        }
    }
    
    function SidesLeft (){
        for (var i1 = 0; i1 < boxCtrX; i1++){
            for (var j1 = 0; j1 < boxCtrY; j1++){
                ctx.beginPath(); // Left Side Face
                ctx.fillStyle = "red";
                ctx.moveTo(backX1 + ((boxSpacing + boxWidth) * i1),backY1  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i1),topY  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i1),topY + boxWidth  + ((boxSpacing + boxWidth) * j1));
                ctx.lineTo(backX1 + ((boxSpacing + boxWidth) * i1),backY1 + boxWidth  + ((boxSpacing + boxWidth) * j1));
                ctx.fill();

            }
        }
    }
    
    function SidesRight (){
        for (var i2 = 0; i2 < boxCtrX; i2++){
            for (var j2 = 0; j2 < boxCtrY; j2++){
                ctx.fillStyle = "red";
                ctx.beginPath(); // Right Side Face
                ctx.moveTo(topX + boxWidth + ((boxSpacing + boxWidth) * i2),topY  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i2),backY1  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i2),backY1 + boxWidth  + ((boxSpacing + boxWidth) * j2));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i2),topY + boxWidth  + ((boxSpacing + boxWidth) * j2));
                ctx.fill();

            }
        }
    }
    
    
    function Backs (){
        for (var i3 = 0; i3 < boxCtrX; i3++){
            for (var j3 = 0; j3 < boxCtrY; j3++){
                ctx.beginPath(); // Back Face
                ctx.fillStyle = "darkred";
                ctx.moveTo(backX1 + ((boxSpacing + boxWidth) * i3),backY1 + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i3),backY1 + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i3),topY + ((boxSpacing + boxWidth) * j3));
                ctx.lineTo(topX + ((boxSpacing + boxWidth) * i3),topY + ((boxSpacing + boxWidth) * j3));
                ctx.fill();
            }
        }
    }
    
    function Bottoms(){
        for (var i4 = 0; i4 < boxCtrX; i4++){
            for (var j4 = 0; j4 < boxCtrY; j4++){
                ctx.beginPath(); // Bottom Face
                ctx.fillStyle = "darkred";
                ctx.moveTo(topX + ((boxSpacing + boxWidth) * i4),topY + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(topX + boxWidth + ((boxSpacing + boxWidth) * i4),topY + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(backX1 + boxWidth + ((boxSpacing + boxWidth) * i4),backY1 + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.lineTo(backX1 + ((boxSpacing + boxWidth) * i4),backY1 + boxWidth + ((boxSpacing + boxWidth) * j4));
                ctx.fill();
            }
        }
    }
}

function drawBoxesInside (){
    var boxInsideX = (backX1 + backWidth) - boxWidth;
    var boxInsideY =  backY1;
    var boxInsideTopX = topX + (backWidth - boxInsideWidth);
    var boxInsideTopY = topY;

    var boxInsideWidth = 80;

    for (var m = 0; m < 2; m++){  // Bottom Face
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(boxInsideX - ((boxSpacing + boxInsideWidth) * m), boxInsideY);
    ctx.lineTo(boxInsideX + boxWidth - ((boxSpacing + boxInsideWidth) * m), boxInsideY);
    ctx.lineTo(boxInsideX + boxWidth - ((boxSpacing + boxInsideWidth) * m), boxInsideY + boxInsideWidth );
    ctx.lineTo(boxInsideX - ((boxSpacing + boxInsideWidth) * m), boxInsideY + boxInsideWidth) ;
    ctx.fill();
    }

        for (var i = 0; i < boxCtrX; i++){
            // for (var j = 0; j < boxCtrY; j++){
                ctx.fillStyle = "crimson"; // Top Side Face 01 02
                ctx.fillRect(boxInsideTopX - ((boxInsideWidth + boxSpacing)*i),boxInsideTopY ,boxWidth,boxWidth);
            // }
        }



}