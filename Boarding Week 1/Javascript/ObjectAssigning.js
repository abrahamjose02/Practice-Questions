const obj1 = { name: "John", age: 30 };
const obj2 = { address: { city: "New York" }, age: 35 };

const merge = Object.assign({},obj1,obj2)

console.log(merge)