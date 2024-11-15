function findLargestValue(data){
    let max = -Infinity

    data.forEach((obj)=>{
        obj.values.forEach((value)=>{
            if(value > max){
                max = value
            }
        })
    })
    return max
}



const data = [
    { id: 1, values: [3, 5, 9, 2] },
    { id: 2, values: [8, 1, 7] },
    { id: 3, values: [4, 6, 12, 1] }
];
const largestValue = findLargestValue(data);
console.log("Largest value across all arrays:", largestValue);