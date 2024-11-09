class Node {
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
        return this.root === null
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
            }
            else{
                return this.insertNode(root.left,newNode)
            }
        }
        else {
             if(root.right === null){
                root.right = newNode
             }
             else {
                return this.insertNode(root.right,newNode)
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
            else if(value < root.value){
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
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const curr = queue.shift()
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
        return this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===value){
            return null;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}


const bst = new BinarySearchTree()
console.log('Tree is Empty?',bst.isEmpty())
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)

bst.preOrder(bst.root)

console.log(bst.search(bst.root,30))

bst.inOrder(bst.root)

bst.postOrder(bst.root)

bst.levelOrder()