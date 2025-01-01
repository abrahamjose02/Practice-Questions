function PairsOfGivenSum(arr,target){
   const seen = new Set();
   const pairs = [];
   for (let num of arr) {
     const complement = target - num;
     if (seen.has(complement)) {
       pairs.push([num, complement]);
     }
     seen.add(num);
   }
   return pairs;
}

console.log(PairsOfGivenSum([1, 2, 3, 4, 5], 5));
