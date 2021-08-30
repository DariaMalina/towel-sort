
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let doneArray=[]
    if (arguments.length===0){
        return []
    }
    for (let i = 0; i < matrix.length; i++) {
        if(i%2!==0){
            doneArray=  doneArray.concat(matrix[i].reverse())
        }else {
            doneArray= doneArray.concat(matrix[i])
        }
    }
    return doneArray
}
