// let a=10
// b=a++;
// c=++a;
// console.log(b)
// console.log(c)

// const numbers = [12, 45, 7, 89, 23];

// const maxNumber = numbers.reduce((max, num) => {
    
// acc=num > max ? num : max
// return acc
// }
// , numbers[0]);

// console.log(maxNumber); // Output: 89

// const numbers = [12, 45, 7, 89, 23];

// const maxNumber = numbers.reduce((acc, num) => acc=num > acc ? num : acc, numbers[0]);

// console.log(maxNumber); // Output: 89
// const sum=numbers.reduce((acc,item)=>acc+item)
// console.log(sum)
var deleteGreatestValue = function(grid) {
    let sum=0;
    let max=[];
    while(true){
        if(grid.length===0){
            break;
        } 
    const arr=grid.map(i=>{
     i.sort((a,b)=>b-a)[0];
     max.push(i[0])
     i.shift();
   return i;
       })
    sum+=max[0]>=max[1]?max[0]:+max[1];
    max=[];
    grid=[...arr];
    }
return sum;        
};
console.log(deleteGreatestValue([[1,2,4],[3,3,1]]))

