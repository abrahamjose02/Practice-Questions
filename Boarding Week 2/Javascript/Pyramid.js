function pyramid(n){
     for(let i=1;i<=n;i++){
        console.log(' '.repeat(n-i) + '*'.repeat(2 * i - 1))
     }
}

pyramid(5)