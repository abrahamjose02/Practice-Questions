function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1

    while(leftIndex<= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(arr[middleIndex]===target){
            return middleIndex
        }

        if(arr[middleIndex]<target){
            leftIndex = middleIndex +1
        }
        else{
            rightIndex = middleIndex-1
        }
    }
    return -1
}


const nums = [1, 3, 5, 7, 9, 11, 13];
const target = 13;
console.log("Index of target:", binarySearch(nums, target));