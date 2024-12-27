var sortArrayByParity = function(nums) {
    const even=nums.filter(i=>i%2===0).sort((a,b)=>a-b);
    const odd=nums.filter(i=>i%2!==0).sort((a,b)=>a-b);
    return [...even,...odd]
};