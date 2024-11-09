const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 5, 6];

const set = new Set(array1)

const unMatchedElements = array2.filter((num)=>!set.has(num))

console.log(unMatchedElements)