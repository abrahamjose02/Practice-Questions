let object = {
    name: "Joe",
    email: "Joe@gmail.com"
  }
  
  let output = Object.entries(object)
    .map(([key,value])=>`${key}=${value}`)
    .join('&')
  
  console.log(output)