const printDiamond = (n) => {
  for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i) + "*".repeat(2*i-1))
  }
  for(let i=n-1;i>0;i--){
    console.log(' '.repeat(n-i) + '*'.repeat(2 * i -1))
  }
};
printDiamond(5);
