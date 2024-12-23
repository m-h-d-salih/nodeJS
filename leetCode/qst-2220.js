var minBitFlips = function(start, goal) {
    let startBin=start.toString(2);
    let goalBin=goal.toString(2);
    let len=startBin.length>=goalBin.length?startBin.length:goalBin.length
    if(startBin.length>goalBin.length){
        let diff=startBin.length-goalBin.length
      goalBin=goalBin.padStart(goalBin.length+diff,'0')
    }else if(goalBin.length>startBin.length){
         let diff=goalBin.length-startBin.length
        startBin=startBin.padStart(startBin.length+diff,'0')
    }
    let step=0;
    for(i=len;i>=0;i--){
        if(goalBin[i]!==startBin[i]){
            step++;
        }
    }
    return step;
};