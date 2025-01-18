var prefixCount = function(words, pref) {
    let count=0;
    words.forEach(item=>{
        if(item.startsWith(pref)){
            count++;
        }
    })
    return count;
};
console.log(prefixCount(["leetcode","win","loops","success"],"code"))