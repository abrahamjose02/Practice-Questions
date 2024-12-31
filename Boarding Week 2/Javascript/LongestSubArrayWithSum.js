
function longestSubarrayWithSum(arr,target){
    let map = new Map()
    let currentSum = 0
    let maxLength = 0

    for(let i=0;i<arr.length;i++){
        currentSum += arr[i]

        if(currentSum === target){
            maxLength = i+1
        }

        if(map.has(currentSum-target)){
            maxLength = Math.max(maxLength,i - map.get(currentSum-target))
        }
        if(!map.has(currentSum)){
            map.set(currentSum,i)
        }
    }
    return maxLength
}

console.log(longestSubarrayWithSum([1, -1, 5, -2, 3], 3)); 
