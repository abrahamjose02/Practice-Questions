function ExpandString(str){
    let result  = ''
    for(let i=0;i<str.length;i++){
        let char = str[i]
        let number = parseInt(str[i+1])
        result += char.repeat(number)
        
    }
    return result
}



console.log(ExpandString("a3b2c"));