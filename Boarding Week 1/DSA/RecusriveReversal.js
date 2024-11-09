const arr = [1,3,5,6,8]

function reverseArray (arr){
    if(arr.length <= 1) return arr

   let restArray = reverseArray(arr.slice(1))
   return [...restArray,arr[0]]
}



console.log(reverseArray(arr))