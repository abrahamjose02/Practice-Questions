const objArray = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Mike", age: 35, city: "Chicago" }
];


objArray.forEach((obj)=>{
    Object.entries(obj).forEach(([key,value])=>{
        console.log(`${key} is ${value}`)
    })
})