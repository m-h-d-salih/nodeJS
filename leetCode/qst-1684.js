var countConsistentStrings = function(allowed, words) {
    const myset=new Set(allowed);
    let count=words.length;
    for(let i of words){
        for(let j of i){
            if(!myset.has(j)){
                count--;
                break;
            }
        }
    }
    return count;
};
console.log(countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"]))