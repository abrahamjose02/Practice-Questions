
function reverseString(str){
    let arr = str.replace(/\s+/g,'').split('') // remove the spacing
    let left = 0 , right = str.length-1
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr.join("")
}

console.log(reverseString("hello world"));


// \s matches any whitespace character (spaces, tabs, etc.).
// + ensures it matches one or more consecutive spaces.
// g applies the replacement globally across the string.