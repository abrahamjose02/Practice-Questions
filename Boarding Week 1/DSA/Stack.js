class Stack {
    constructor(){
        this.stack = []
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't Perform PoP "
        }

        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't Perform PoP "
        }
        return this.stack[this.size()-1]
    }
    printStack(){
        if(this.isEmpty()){
            console.log('Stack is Empty')
        }
        console.log('Elements in stack is :')
        console.log(this.stack.join(' '))
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size());


stack.printStack()