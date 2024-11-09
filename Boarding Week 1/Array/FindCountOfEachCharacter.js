
function removeRepeatedChars(str){
    let charCount = {}
    

    for(let char of str){
        charCount[char] = (charCount[char]||0) +1
    }
    return charCount
}                                                                                                                                                                                                    


console.log(removeRepeatedChars("abbcdeefff"));