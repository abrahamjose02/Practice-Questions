
function reverseString(str){
    let stack = []
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    str = ""
    while(stack.length){
        str += stack.pop()
    }
    return str
}


const result = reverseString('hello')

console.log(result)