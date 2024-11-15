class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; // Avoid duplicates
  
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  function arrayToBinaryWithSum(arr){
    const tree = new BinaryTree();
    let sum = 0;

    arr.forEach((num)=>{
        tree.insert(num)
        sum += num;
    })

    tree.insert(sum)

    return tree
  }

  const array = [3, 5, 2, 8, 1]; // Example array
const binaryTree = arrayToBinaryWithSum(array);
console.log(binaryTree)