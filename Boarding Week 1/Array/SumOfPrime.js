function isPrime(num){
    if(num<=1) return false
    for(let i=2;i<=num/2;i++){
        if(num % i === 0){
            return false
        }
    } 
    return true
}

function sum(arr){
    let sum =0;
    arr.forEach((num)=>{
        if(isPrime(num)){
            sum += num
        }
    })
    return sum
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeSum = sum(numbers);
console.log("Sum of prime numbers:", primeSum);