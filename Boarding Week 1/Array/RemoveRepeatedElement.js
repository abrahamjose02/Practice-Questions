

function removeRepeatedNumbers(arr){
    let numCount = {}
    let result = []

    for(let num of arr){
        numCount[num] = (numCount[num]||0) + 1
    }

    for(let num of arr){
        if(numCount[num]===1){
            result.push(num)
        }
    }
    return result
}




console.log(removeRepeatedNumbers([1, 2, 2, 3, 4, 4, 5]));