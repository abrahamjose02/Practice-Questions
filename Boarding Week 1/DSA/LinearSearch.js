
function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
       
    }
    return -1
}

const Array = [2,5,7,1,54,8];
const result = linearSearch(Array,54);
console.log("Result :",result);