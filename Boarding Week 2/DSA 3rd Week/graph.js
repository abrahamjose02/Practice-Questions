

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
   
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }


    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " +[...this.adjacencyList[vertex]])
        }
    }


    hasEdge(vertex1,vertex2){  //helper method to know whether an edge exists between two vertices
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }


    removeEdge(vertex1,vertex2){  //has helper methods to remove the Edge
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex2)
    }


    removeVertex(vertex){   //All the function has constant time complextiy but for removeVertex , the time complexity depends on the number of adjacent vertices
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacenctVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }
   
    depthFirstIterative(start){
        const stack = [start]
        const visited = {}
        const result = []
        let currentVertex


        visited[start] = true;
        while(stack.length){
            console.log(stack)
            currentVertex = stack.pop()
            result.push(currentVertex);


           this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor);
                }
            });
        }
        return result
    }

    hasCycle() {
        const visited = new Set(); // Tracks visited vertices

        // Traverse each vertex to account for disconnected components
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                if (this.dfsCycleCheck(vertex, visited, null)) {
                    return true; // Cycle found
                }
            }
        }
        return false; // No cycle found in any component
    }

    // Helper method to recursively check for cycles
    dfsCycleCheck(vertex, visited, parent) {
        visited.add(vertex); // Mark the current vertex as visited

        // Check all neighbors of the current vertex
        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                // Recurse to check the neighbor, with current vertex as the parent
                if (this.dfsCycleCheck(neighbor, visited, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                // If a visited neighbor is found that isn't the parent, a cycle exists
                return true;
            }
        }
        return false; // No cycle in this path
    }

     // Method to count the number of cycles in the graph
     countCycles() {
        const visited = new Set();
        let cycleCount = 0;

        // Traverse each vertex to ensure all connected components are considered
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                cycleCount += this.dfsCycleCount(vertex, visited, null);
            }
        }
        
        // Since each cycle is counted twice, divide by 2
        return cycleCount / 2;
    }

    // Helper method for counting cycles using DFS
    dfsCycleCount(vertex, visited, parent) {
        visited.add(vertex);
        let cycleCount = 0;

        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                // Recurse to check the neighbor
                cycleCount += this.dfsCycleCount(neighbor, visited, vertex);
            } else if (neighbor !== parent) {
                // If a back edge (to a non-parent visited node) is found, a cycle exists
                cycleCount += 1;
            }
        }

        return cycleCount;
    }
}
const g = new Graph()


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")




g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


console.log(g.depthFirstIterative('A'))

console.log(g.hasCycle())
