

let a = { age: 29, name: 'Dionysia'};
let b = { name: 'Dionysia', age: 29};
console.log(a === b);

// Both objects have identical keys and values, but the result was false because they are different instances.
// To compare objects by reference, you have to test whether both point to the same location in memory.

// console.log(JSON.stringify(a)===JSON.stringify(b)); correct when the key and value or properties are in the same order and doesn't go well when they are not in the same order


console.log(_.isEqual(a,b))