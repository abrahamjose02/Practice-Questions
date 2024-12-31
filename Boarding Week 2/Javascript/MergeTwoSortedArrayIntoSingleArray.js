//Merge Two Sorted Array into a single Array

function Merge(arr1,arr2){
    return [...arr1,...arr2].sort((a,b)=>a-b)
}


//2nd Method

function Merge1(arr1,arr2){
    let result = []
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }
        else{
            result.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length) result.push(arr1[i++])
    while(j<arr2.length) result.push(arr2[j++])
    return result
}

const arr1 = [1, 2, 3, 5];
const arr2 = [3, 5, 6, 15];



console.log(Merge1(arr1, arr2));