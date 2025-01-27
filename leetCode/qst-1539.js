var findKthPositive = function(arr, k) {
    const result=[];
    let count=0;
    let i=1;
    while(true){
        if(!arr.includes(i)){
            result.push(i);
            count++;
            
            if(count===k){
            break;
            }
           
        }
         i++;
    }
    return result[k-1];
};
console.log(findKthPositive([1,2,3,4],2))