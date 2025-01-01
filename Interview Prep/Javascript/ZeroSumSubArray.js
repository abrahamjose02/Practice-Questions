
function ZeroSumArray(arr){
    let prefixSum = 0
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i]
        if(prefixSum === 0 || map.has(prefixSum)){
            return true
        }
        map.get(prefixSum,i)
    }
    return false
}


const arr = [3, 4, -7, 5];

console.log(ZeroSumArray(arr))