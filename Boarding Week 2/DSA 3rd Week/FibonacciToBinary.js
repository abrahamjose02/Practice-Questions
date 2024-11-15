class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.root = newNode;
        console.log(`Inserted root node with value: ${value}`);
        return this;
      }
      let current = this.root;
      while (true) {
        if (value === current.value) {
          console.log(`Duplicate value found (${value}), not inserting.`);
          return undefined; // Avoid duplicates
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            console.log(`Inserted node with value: ${value} to the left of ${current.value}`);
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            console.log(`Inserted node with value: ${value} to the right of ${current.value}`);
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  
  // Recursive function to get the nth Fibonacci number
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Function to generate the Fibonacci sequence up to n terms and insert them into a binary tree
  function fibonacciToBinary(n) {
    const tree = new BinaryTree();
    for (let i = 0; i < n; i++) {
      const fibNumber = fibonacci(i);
      console.log(`Generated Fibonacci number ${i}: ${fibNumber}`);
      tree.insert(fibNumber);
    }
    return tree;
  }
  

  // Example usage
  const n = 10; // Number of Fibonacci terms to generate and insert
  const fibonacciTree = fibonacciToBinary(n);
  console.log(fibonacciTree)
  