function expandString(str){
    let result = ''
    for(let i=0;i<str.length;i++){
        const char = str[i]
        const count = parseInt(str[i+1])
        result += char.repeat(count)
    }
    return result
}

console.log(expandString("a1b2c3d4"));