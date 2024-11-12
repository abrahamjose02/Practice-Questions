
function removeLastProperty(obj){
    const keys = Object.keys(obj)
    const lastKey = keys[keys.length-1]
    delete obj[lastKey]
    return obj
}


let exampleObject = { name: "Joe", email: "Joe@gmail.com", age: 30 };
console.log(removeLastProperty(exampleObject));



function removeLastProperty(obj){
    let keys = Object.keys(obj)
    
    if(keys.length === 0){
      return obj
    }
    
    let lastKey = keys[keys.length-1]
    if(typeof obj[lastKey] === 'object' && obj[lastKey] !== null){
      removeLastProperty(obj[lastKey])
    }
    delete obj[lastKey]
    return obj
  }
  
  
  
  let exampleObject2 = {
      name: "Joe",
      email: "Joe@gmail.com",
      details: {
          age: 30,
          address: "123 Main St"
      }
  };
  console.log(removeLastProperty(exampleObject2));