
function removeDuplicates(str){
    const seen = new Set()
    const result = []

    for(let char of str){
        if(!seen.has(char)){
            seen.add(char)
            result.push(char)
        }
    }
    return result.join('')
}


const inputString = "hello world";
const resultString = removeDuplicates(inputString);
console.log(resultString)