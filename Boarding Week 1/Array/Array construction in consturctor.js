
class MyArrayclass {
    constructor(){
        this.array = []
    }
    addElement(element){
        this.array.push(element)
    }
    removeElement(index){
        if(index>=0 && index < this.array.length){
            this.array.splice(index,1)
        }
    }

    findElement(element) {
        return this.array.includes(element);
    }
    getArray(){
        return this.array
    }
}

const array = new MyArrayclass()
array.addElement(1)
array.addElement(2)
console.log(array.getArray());