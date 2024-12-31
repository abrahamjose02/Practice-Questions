
function kthRepeatingNumber(arr,k){
    let frequencyMap = new Map()
    for(let num of arr){
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }

    const sorted = Object.entries(frequencyMap)
                    .sort((a,b)=>b[1]-a[1])

    if(k<=0 || k>sorted.length){
        return null
    }
   return parseInt(sorted[k-1][0])
}



const arr = [1, 3, 1, 3, 2, 1, 4, 2, 3];
console.log(kthRepeatingNumber(arr, 1)); 
console.log(kthRepeatingNumber(arr, 2));