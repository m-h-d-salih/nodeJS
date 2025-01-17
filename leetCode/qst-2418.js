var sortPeople = function(names, heights) {
    const arr=[];
    for(let i=0;i<names.length;i++){
           arr.push([names[i],heights[i]])
    }
    const sorted=arr.sort((a,b)=>b[1]-a[1]).map(item=>item[0])
    return sorted;
};
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))