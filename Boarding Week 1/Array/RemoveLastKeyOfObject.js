
function removeLastProperty(obj){
    const keys = Object.keys(obj)
    const lastKey = keys[keys.length-1]
    delete obj[lastKey]
    return obj
}


let exampleObject = { name: "Joe", email: "Joe@gmail.com", age: 30 };
console.log(removeLastProperty(exampleObject));