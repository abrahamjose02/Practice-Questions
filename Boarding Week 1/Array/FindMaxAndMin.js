function findMaxMin(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }

        if(arr[i]<min){
            min = arr[i]
        }
    }
    return {max,min}
}



let result = findMaxMin([3, 5, 7, 2, 8]);
console.log(`Max: ${result.max}, Min: ${result.min}`);