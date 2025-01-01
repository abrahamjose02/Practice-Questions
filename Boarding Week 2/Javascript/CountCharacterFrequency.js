function countCharacterFrequency(str) {
  let charCount = new Map();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  return Object.fromEntries(charCount)
}

// Example
console.log(countCharacterFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
