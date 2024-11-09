class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
           this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        else{
            if(root.value === value){
                return true
            }
            else if(value < root.left){
              return this.search(root.left,value)
            }
            else{
              return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }


    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }


    levelOrder(){
        // Use the optimized queue implementation
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
   
    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }


    delete(value){
        this.root = this.deleteNode(this.root,value)
    }


    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){  // if there is no left child return the right child
                return root.right
            }
            else if(!root.right){ // if there is no right child return the left child
                return root.left  
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }


    closestValue(target){
        if(!this.root){
            return null
        }
        let closest = null;
        let currentNode = this.root


        while(currentNode){
            if(Math.abs(target - currentNode.value) < (Math.abs(target - closest))){
                closest = currentNode.value
            }
            if(target < currentNode.value){
                currentNode = currentNode.left
            }
            else if (target > currentNode.value){
                currentNode = currentNode.right
            }
            else{
                return closest
            }
        }
        return closest
    }


    isValidBST() {
        const inOrderValues = [];
        this.inOrderValidation(this.root, inOrderValues);


        for (let i = 1; i < inOrderValues.length; i++) {
            if (inOrderValues[i] <= inOrderValues[i - 1]) {
                return false;
            }
        }
        return true;
    }


    inOrderValidation(root, inOrderValues) {
       if(root){
        this.inOrderValidation(root.left, inOrderValues);
        inOrderValues.push(root.value);
        this.inOrderValidation(root.right, inOrderValues);
       }
    }

    isBalanced(){
        return this.checkBalanced(this.root) !== 1
    }

    checkBalanced(node){
        if(node === null) return 0

        const leftHeight = this.checkBalanced(node.left)
        if(leftHeight === -1) return -1

        const rightHeight = this.checkBalanced(node.right)
        if(rightHeight === -1) return -1

        if(Math.abs(leftHeight-rightHeight)>1){
            return -1;
        }
        return Math.max(leftHeight,rightHeight) + 1;
    }
    findSecondLargest(){
        if(!this.root || !this.root.left || !this.root.right){
            return null
        }
        let current = this.root
        let parent = null
        if(current.right){
            parent = current
            current = current.right
        }

        if(current.left){
            return this.findMax(current.left)
        }
        return parent.value
    }

    findMax(node){
        while(node.right){
            node=node.right
        }
        return node.value
    }
}


const bst = new BinarySearchTree()
console.log('Tree is Empty? ',bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.preOrder(bst.root)
bst.inOrder(bst.root)

console.log(bst.isBalanced())


