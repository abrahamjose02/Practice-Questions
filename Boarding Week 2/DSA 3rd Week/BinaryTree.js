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

  function factorial(n){
    if(n===0){
        return 1
    }
    else {
        return n * factorial(n-1)
    }
  }

  function factorialToBinary(n){
    const tree = new BinaryTree()
    for(let i=1;i<=n;i++){
        tree.insert(factorial(i))
    }
    return tree
  }

  const n =5
  const factorialTree = factorialToBinary(n)
  console.log(factorialTree)