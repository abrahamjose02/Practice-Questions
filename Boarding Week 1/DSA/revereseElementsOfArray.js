function reverseArrayAndNumbers(arr) {
    // Step 1: Reverse the array manually
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
  
    // Step 2: Reverse digits of each number
    let result = [];
    for (let i = 0; i < reversedArray.length; i++) {
      let num = reversedArray[i];
      let reversedNum = 0;
  
      
      while (num > 0) {
        let lastDigit = num % 10; 
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num / 10); 
      }
      
      result.push(reversedNum);
    }
  
    return result;
  }
  
  // Example
  let arr = [582, 12, 56];
  let result = reverseArrayAndNumbers(arr);
  console.log(result); // Output: [65, 21, 321]
  