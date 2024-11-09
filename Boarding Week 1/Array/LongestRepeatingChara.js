
function longestRepeatingChar(str){
    let currentLength = 0;
    let maxLength = 0;
    let currentChar = "";
    let maxChar = "";

    for(let i=0;i<str.length;i++){
        if(i===0 || str[i]===str[i-1]){
            currentChar += str[i]
            currentLength++
        }
    }
}

console.log(longestRepeatingChar("heeguuuu"));