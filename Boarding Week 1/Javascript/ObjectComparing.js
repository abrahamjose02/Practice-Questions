
function deepEqual(obj1,obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null){
        return obj1 === obj2 // They are not objects compare them directly
    }

    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    if(key1.length !== key2.length){
        return false;
    }

    for(let key of key1){
        if(!key2.includes(key)|| !deepEqual(obj1[key],obj2[key])){
            return false
        }
    }
     return true
 }



const obj1 = { name: "John", age: 30, address: { city: "New York", zip: 10001 } };
const obj2 = { name: "John", age: 30, address: { city: "New York", zip: 10001 } };
const obj3 = { name: "John", age: 31, address: { city: "New York", zip: 10001 } };

console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3)); 