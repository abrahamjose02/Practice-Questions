// Merge Two unsorted Array into One

function MergeAndSort(arr1,arr2){
    const merged = [...arr1,...arr2]
   return  merged.sort((a,b)=>a-b)
}

// or 

function MergeAndSort1(arr1,arr2){
    const mergeSort = []
    for(let i=0;i<arr1.length;i++) mergeSort.push(arr1[i])
    for(let j=0;j<arr2.length;j++) mergeSort.push(arr2[j])

        for(let i=0;i<mergeSort.length;i++){
            for(let j=i+1;j<mergeSort.length;j++){
                if(mergeSort[i] > mergeSort[j]){
                    let temp = mergeSort[i]
                     mergeSort[i] = mergeSort[j]
                     mergeSort[j] = temp
                }
            }
        }
        return mergeSort
}


const arr1 = [1, 2, 3, 5];
const arr2 = [3, 5, 6, 15];

console.log(MergeAndSort1(arr1,arr2))