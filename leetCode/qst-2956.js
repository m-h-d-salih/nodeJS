var findIntersectionValues = function(nums1, nums2) {
    let result1=0;
    let result2=0;
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            result1++;
        }
    }
    for(let i=0;i<nums2.length;i++){
        if(nums1.includes(nums2[i])){
            result2++;
        }
    }
    return [result1,result2];
};
console.log(findIntersectionValues([2,3,2],[1,2]))