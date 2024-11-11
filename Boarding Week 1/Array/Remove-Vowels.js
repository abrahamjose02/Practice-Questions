function removeVowels(str){
    let result = ''
    let vowels = 'aeiouAEIOU'
    for(let i=0;i<str.length;i++){
        let char = str[i]
        let isVowel = false
        for(let i=0;i<vowels.length;i++){
            if(char === vowels[i]){
                isVowel = true
                break;
            }
        }
        if(!isVowel){
            result += char
        }
    }
    return result
}




console.log(removeVowels("Hello World"));