function MoveZero(arr){
    const nonZero = arr.filter((num)=>num !== 0).sort((a,b)=>a-b)
    const zero = arr.filter((num)=> num === 0)
    return [...nonZero,...zero]
}


//or


function MoveZeros(arr){
    let index = 0
    for(let i=0 ;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[index] = arr[i]
            index++;
        }
    }
    while(index<arr.length){
        arr[index] = 0
        index++
    }
    return arr
}

const arr = [1,3,0,2,0,7,0]

console.log(MoveZeros(arr))