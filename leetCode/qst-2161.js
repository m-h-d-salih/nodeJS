var pivotArray = function(nums, pivot) {
    const left = [];
    const middle = [];
    const right = [];
    for (let i of nums) {
        if (i < pivot) {
            left.push(i);
        } else if (i > pivot) {
            right.push(i);
        } else {
            middle.push(i); 
        }
    }
    return [...left, ...middle, ...right];
};
console.log(pivotArray([-3,4,3,2],2))