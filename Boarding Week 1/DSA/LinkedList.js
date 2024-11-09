class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insertValue(value,index){
        if(index<0 || index>this.size){
            return null;
        }
        if(index === 0){
            this.append(value)
        }
        else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            let removedNode
            removedNode = prev.next
            prev.next = removedNode.next
            this.size--
        }
        
    }
    removeIndex(index){
        if(index<0 || index>this.size){
            return null
        }
        let removedNode
        if(index ===0){
            removedNode = this.head
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.value
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    findMiddleNode(){
        if(this.isEmpty()){
            return null
        }
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    deleteMiddleNode(){
        if(this.isEmpty()){
            return null
        }
        let slow = this.head
        let fast = this.head
        let removedNode
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        if(fast){
            removedNode = slow
            prev.next = removedNode.next
        }
        else{
            removedNode = prev.next
            prev.next = removedNode.next
        }
        return removedNode.value
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
             curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    isCircular(){
        if(this.isEmpty()){
            return null
        }
        let slow = this.head
        let fast = this.head.next

        while(fast&&fast.next){
            if(slow === fast){
                return true
            }
            slow = slow.next
            fast = fast.next.next
        }
        return false
    }
    isPalindrome(){
        if(!this.head || !this.head.next){
            return true
        }

        let getReversed = (head)=>{
            let prev = null
            let curr = head 
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            return prev

        }

        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let reverseSecondHalf = getReversed(slow)

        let curr = this.head
        while(reverseSecondHalf){
            if(curr.value !== reverseSecondHalf.value){
                return false
            }
            curr = curr.next
            reverseSecondHalf = reverseSecondHalf.next
        }
        return true
    }

    RemoveDuplicates(){
        if(this.isEmpty()){
            return ;
        }
        let seen = new Set()
        let curr = this.head
        let prev = null
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
                this.size--;
            }
            else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    reverseRecursive(node=this.head){
        if(!node || !node.next){
            this.head = node
            return node;
        }

        // Recurse until the end of the list
        let reverseListHead = this.reverseRecursive(node.next)

        // Reverse the link (node.next's next will point to node)
        node.next.next = node
        node.next = null; // Set current node's next to null to prevent cycles

        return reverseListHead; // Return the new head of the reversed list
    }

    print(){
        if(this.isEmpty()){
            return ''
        }
        let listValues = ''
        let curr = this.head
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}

const list = new LinkedList()
list.prepend(10)
list.append(20)
list.append(10)

list.insertValue(40,2)

list.removeIndex(2)

list.deleteMiddleNode()

list.reverse()

list.RemoveDuplicates()

list.print()
console.log(list.isPalindrome())




