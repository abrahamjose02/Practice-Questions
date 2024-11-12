function RemoveAdjacentOdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !== 0 && arr[i+1] % 2 !== 0){
            arr.splice(i+1,1)
            i--
        }
    }
    return arr
}

const result = RemoveAdjacentOdd([1,2,3,5,6,7,9,10])
console.log(result)