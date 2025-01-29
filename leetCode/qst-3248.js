var finalPositionOfSnake = function(n, commands) {
    let result=0;
    for(let i=0;i<commands.length;i++){
        if(commands[i]==='RIGHT'){
            result+=1;
        }else if(commands[i]==="DOWN"){
            result+=n;
        }else if(commands[i]==="UP"){
            result-=n;
        }else if(commands[i]==="LEFT"){
            result-=1;
        }
    }
    return result;
};