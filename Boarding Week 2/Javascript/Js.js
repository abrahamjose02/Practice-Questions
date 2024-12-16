function greet() {
  var greeting = "Hello";
  console.log(greeting);
}
greet();
console.log(greeting);


//Output : hello and Reference Error


console.log(a);
var a = 10;

// Output : undefined - Hoisitig principle

let a = { name: "Alice" };
let b = a;
b.name = "Bob";
console.log(a.name);

//output : Bob

console.log(2 + "2");
console.log(2 - "2");

//output : "22" and 0


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const increment = outer();
increment();
increment();

//output: 1 and 2


const obj = {
  name: "John",
  getName: function () {
    return this.name;
  },
};
const getName = obj.getName;
console.log(getName());


//output : undefined or TypeError ; if console.log(getName) //John


console.log("start");
setTimeout(() => {
  console.log("middle");
}, 0);
console.log("end");

//output : start , end , middle

function add(a = 1, b = 2) {
  return a + b;
}
console.log(add(5));

//output : 7 , first argument is passed as 5 , so value will be changed like  5 +2 = 7