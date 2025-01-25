var diagonalSum = function(mat) {
    let result=0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(i===j || i + j === mat.length - 1){
                result+=mat[i][j];
            }
        }
    }
    return result;
};
console.log(diagonalSum([[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]]))