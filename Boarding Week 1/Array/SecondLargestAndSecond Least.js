

function secondLargestAndSmallest(arr){
    if(arr.length<2){
        return 'Array should be atleast 2 length'
    }
    let largest = -Infinity ; let secondLargest = -Infinity
    let smallest = Infinity ; let secondSmallest = Infinity

    arr.forEach((num)=>{
        if(num >largest){
            secondLargest = largest
            largest = num
        }
        else if(num > secondLargest && num !== largest){
            secondLargest = num
        }

        if(num<smallest){
            secondSmallest =smallest
            smallest = num
        }
        else if(num < secondSmallest && num !== smallest){
            secondSmallest =num            
        }

    })
    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    }
}


const arr = [10, 4, 2, 7, 3, 8, 4, 7];
const result = secondLargestAndSmallest(arr);

console.log(`Second Smallest: ${result.secondSmallest}`);  
console.log(`Second Largest: ${result.secondLargest}`);   