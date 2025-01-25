var isBalanced = function(num) {
    let evenSum=0;
    let oddSum=0;
    for(let i in num){
        if(parseInt(i)%2===0){
            evenSum+=parseInt(num[i]);
        }else{
            oddSum+=parseInt(num[i]);
        }
    }
    console.log(evenSum+" "+oddSum)
    return evenSum===oddSum;
};
console.log(isBalanced("24123"))