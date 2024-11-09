
function baseBall(operations){
    let stack = []
    for(let op of operations){
        if(op === '+'){
            const score1 = stack.pop()
            const score2 = stack[stack.length-1]
            const newScore = score1 + score2
            stack.push(score1)
            stack.push(newScore)
        }
        else if(op === 'D'){
            const lastScore = stack[stack.length-1]
            const doubledScore = lastScore*2
            stack.push(doubledScore)
        }
        else if(op === 'C'){
            stack.pop()
        }
        else{
            stack.push(parseInt(op))
        }
    }
    return stack.reduce((total,score)=>total + score,0)
}

console.log(baseBall(["5","2","C","D","+"]))