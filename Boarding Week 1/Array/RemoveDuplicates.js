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
  
  