
function secondLargest(arr){
    let max = 0 , secondMax = 0
    for(let num of arr){
        if(num > max){
            secondMax = max 
            max = num
        }
        else if(num > secondMax && num !== max){
            secondMax = num
        }
    }
    return secondMax
}



console.log(secondLargest([1, 4, 3, 2, 5]));