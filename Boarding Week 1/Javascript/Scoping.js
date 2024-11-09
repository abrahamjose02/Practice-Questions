var x = 'global';


function outerFunction() {
  console.log(`Before declaration: ${x}`); 
  var x = 'outer';


  function innerFunction() {
    console.log(`Inside innerFunction: ${x}`); 
    x = 'inner';
    console.log(`After reassignment in innerFunction: ${x}`); 
  }


  innerFunction();
  console.log(`After innerFunction: ${x}`); 
}


outerFunction();
console.log(`Final value of x: ${x}`); 
