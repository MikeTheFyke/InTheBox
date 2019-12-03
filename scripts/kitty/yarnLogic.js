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

    ctx.drawImage(yarnImg, yarnX - 50, yarnY - 50);
  }