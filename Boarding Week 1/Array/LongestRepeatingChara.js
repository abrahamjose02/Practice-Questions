function longestRepeatingCharSequence(str){
    if(str.length === 0) return ''
    let maxChar = str[0]
    let maxCount = 1;
    let currentChar = str[0]
    let currentCount = 1;
    for(let i=1;i<str.length;i++){
        if(str[i]=== currentChar){
            currentCount++
        }
        else {
            if(currentCount > maxCount){
                maxChar = currentChar
                maxCount = currentCount
            }
            currentChar = str[i]
            currentCount = 1;
        }
    }
    if(currentCount > maxCount){
        maxChar = currentChar
        maxCount = currentCount
    }
     return maxChar.repeat(maxCount)
}

console.log(longestRepeatingCharSequence("heeguuuu"));