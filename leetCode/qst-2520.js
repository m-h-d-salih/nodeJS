var countDigits = function(num) {
    let s=num.toString();
    let count=0;
    for(let i of s){
    if(num%i===0)    
    count++;
    }
    return count;
};
console.log(countDigits(1248))