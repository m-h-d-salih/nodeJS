const arr=[5,4,2,5,3,1];
for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        }
    }
}
console.log(arr)
let second;
for(let i=arr.length-1;i>0;i--){
        if(arr[i]!==arr[i-1]){
            second=arr[i-1];
            break;
        }
    }

console.log(second)
//
const arra=[5,4,2,5,3,1];
let firstLargest=arra[0];
let secondLargest=0;
for (let i=1;i<arra.length;i++){
    if(firstLargest<arra[i]){
        secondLargest=firstLargest;
        firstLargest=arra[i]
    }else if(secondLargest<arra[i] && firstLargest!==arra[i]){
        secondLargest=arra[i];
    }
}
console.log(secondLargest)