function RemoveDuplicate(arr){
    let unique=[]
    for(let i=0;i<arr.length;i++){
        let found = false
        for(let j=0;j<unique.length;j++){
            if(arr[i]===unique[j]){
               found = true
               break
            }
        }
        if(!found){
            unique.push(arr[i])
        }
    }
    return unique
}

const arr = [1, 2, 3, 3, 4, 4, 5]

console.log(RemoveDuplicate(arr))


//or




function removeDuplicatesFromArray(arr){
    const map = new Map()
    const result = []
    for(let item of arr){
      if(!map.has(item)){
        map.set(item,true)
        result.push(item)
      }
    }
    return result
  }
  
  
  //another approach



function RemoveDuplicate(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }
  return arr
}



const arr1 = [1, 2, 3, 2, 4, 3, 5];

console.log(RemoveDuplicate(arr1))