var minElement = function(nums) {
    const arr=nums.map(item=>{ sum=item.toString().split('').reduce((a,b)=>a+Number(b),0);
    return sum;
    }).sort((a,b)=>a-b)
    return arr[0]
};
console.log(minElement([999,19,199]))