





function timeConversion(s) {
    var chunks = s.slice(0, 9);
    chunks = chunks.split(":");
    var armtime = []
    
    
    if (parseInt(chunks[0]) <= 24 && parseInt(chunks[0]) > 12) {
        armtime.push(parseInt(chunks[0]) - 12 );
    }
    else {
        armtime.push(chunks[0]);
    }
    
    for (var i = 1; i < chunks.length; i++) {
        armtime.push(chunks[i].padStart(2, '0'));
    }
    return armtime.join(":");
}







function reDraw(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    ctx.clearRect(0,0, c.width, c.height );
    var holdTime = [];
    var dayte = new Date();
    var printDate = dayte.getHours().toString() + ":" + dayte.getMinutes().toString() + ":" + dayte.getSeconds().toString();
    
    var regularTime = timeConversion(printDate);
    
    printDate = printDate.split(":");

    for (var i = 0; i < printDate.length; i++) {
        holdTime.push(printDate[i].padStart(2, '0'));
    }
    printDate = holdTime.join(":");

    ctx.rect(0, 0, 300, 200);
    ctx.font = "30px Arial";
    ctx.fillText(printDate,50, 50);
    ctx.fillText(regularTime, 50, 100);
    ctx.stroke();

    setTimeout(reDraw, 1000);

}



    
  
