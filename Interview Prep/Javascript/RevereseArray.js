
function reverseArray(arr){
     return arr.reverse()
}

function revesedArray(arr){
    let left = 0 , right = arr.length-1
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}


const exampleArray = [3, 1, 2, 5, 4, 0, 0, 6, 7, 3];
console.log(reverseArray(exampleArray))
console.log(revesedArray(exampleArray))