function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueArr[1];
}

const arr = [3, 1, 2, 5, 4, 0, 0, 6, 7, 3];
console.log(secondLargest(arr));
