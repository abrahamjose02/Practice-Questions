function validParenthesis(str){
    const stack = []
    const opening = ['(','{','[']
    const closing = [')','}',']']
    const matching = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for(let char of str){
        if(opening.includes(char)){
            stack.push(char)
        }
        else if(closing.includes(char)){
            if(stack.length === 0 || stack.pop()!== matching[char]){
                return false
            }
        }
    }
    return stack.length === 0
}


const str ="()[{{}"

console.log(validParenthesis(str))