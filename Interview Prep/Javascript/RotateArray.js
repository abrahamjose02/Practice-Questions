
function rotateArray(arr,k){
    k %= arr.length
    return [...arr.slice(-k), ...arr.slice(0,-k)]
}

const exampleArray = [3, 1, 2, 5, 4, 0, 0, 6, 7, 3];

// console.log(rotateArray(exampleArray,2))

// arr.slice(-2) = output : [ 7, 3 ]
//arr.slice(0,-2) = ouptut : [3, 1, 2, 5,4, 0, 0, 6]

function rotateArray1(arr,k){
    k %= arr.length
    for(let i=0;i<k;i++){
        let last = arr.pop()
        arr.unshift(last)
    }
    return arr
}


console.log(rotateArray1(exampleArray, 2));