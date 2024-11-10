function unMatchedElements(arr1,arr2){
    const set = new Set(arr1)

    return arr2.filter((num)=> !set.has(num))
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 5, 6];

console.log(unMatchedElements(array1,array2))