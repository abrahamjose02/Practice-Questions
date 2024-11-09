const obj = { name: "John", age: 30, city: "New York" };


Object.keys(obj).forEach(key=>{
    console.log(key)
})

Object.values(obj).forEach(value=>{
    console.log(value)
})

Object.entries(obj).forEach(([key,value])=>{
    console.log(`${key}:${value}`)
})