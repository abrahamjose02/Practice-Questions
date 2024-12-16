async function test() {
  console.log(1);
  const result = await Promise.resolve(2);
  console.log(result);
  console.log(3);
}
test();
console.log(4);

//output : 1 , 4 , 2 , 3

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};
const person1 = new Person("Alice");
console.log(person1.getName()); // output is : Alice
delete person1.getName;
console.log(person1.getName()); // Alice

//Ouput : The person1 doesn't have the getName property , it is inherits using the prototype function and when we try to delete the function no effect occurs


function curry(fn) {
  return function (a) {
    // First level: accepts the first argument
    return function (b) {
      // Second level: accepts the second argument
      return fn(a, b); // Calls the original function with both arguments
    };
  };
}

function add(a, b) {
  return a + b; // A simple function that takes two numbers and returns their sum
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2));



function* generator() {
  yield 1;
  yield 2;
  return 3;
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//output
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: true }

console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});


const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);
console.log(rest);
// ouptut : a = 1
//rest : {b:2,c:3}

setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 2"));

//output : Promise 1
// Promise 2
// Timeout 1
// Timeout 2