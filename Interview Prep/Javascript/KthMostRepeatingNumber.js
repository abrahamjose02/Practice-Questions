
function kthMostRepeatingNumbers(arr,k){
  const frequencyMap = new Map();
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }
  const sorted = Object.entries(frequencyMap) // Convert object to array
    .sort((a, b) => b[1] - a[1]); // Sort by frequency in descending order

   if(k<0 ||  k>sorted.length){
    return [];
   }
   return sorted.slice(0,k).map((item)=>parseInt(item[0]))
}


const arr = [1, 3, 1, 3, 2, 1, 4, 2, 3];
console.log(kthMostRepeatingNumbers(arr, 1)); 
console.log(kthMostRepeatingNumbers(arr, 2));