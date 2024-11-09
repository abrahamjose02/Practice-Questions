
function SearchTwoElements(arr,val1,val2){
    let value1  = false ;
     let value2 = false ;
    for(let i =0;i<arr.length;i++){
        if(arr[i]===val1){
            value1 = true
        }
        if(arr[i] === val2){
            value2 = true
        }
    }
    if(value1 && value2){
        return true
    }
    else{ 
      return false
    }
}



console.log(SearchTwoElements([1, 4, 3, 2, 5],3,9));