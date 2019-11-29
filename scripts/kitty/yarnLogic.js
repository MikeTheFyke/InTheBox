function drawYarn (){

    if (yarnY >= 250){
        yarnY = 250;
    }
    if (yarnY <= 100){
        yarnY = 100;
    }

    if (yarnX <= 100){
        yarnX = 100;
    }
    if (yarnX >= 900){
        yarnX = 900;
    }

    ctx.fillStyle = "teal"; // Base
    ctx.beginPath(); 
    ctx.arc(yarnX, yarnY ,80, 0, 2 * Math.PI);
    ctx.fill();
  }