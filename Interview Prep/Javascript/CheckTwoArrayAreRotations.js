//Check if two arrays are rotations of each other

function areRotation(arr1,arr2){
    if(arr1.length !== arr2.length) return false
    return (arr1.join("") + arr1.join("")).includes(arr2.join(""))
}

const arr1 = [1,2,3,5]
const arr2 = [3,5,1,6]

console.log(areRotations(arr1,arr2))

function areRotations(arr1,arr2){
    if(arr1.length !== arr2.length) return false
    for(let i=0;i<arr1.length;i++){
        let rotated = arr1.slice(i).concat(arr1.slice(0,i))
        if(rotated.toString() === arr2.toString()) return true
    }
    return false;
}