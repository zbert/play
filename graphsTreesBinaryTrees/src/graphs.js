class Graph {
  constructor() {
    this.nodes = []
    this.adjList = {}
  }

  addNode(node) {

    this.adjList[node.value] = {
      node: node,
      edges: []
    }
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2)
    this.adjList[node2.value].edges.push(node1)
  }

  removeNode(node) {
    delete this.adjList[node.value]

    const nodes = Object.keys(this.adjList)
    nodes.forEach(currNode => {
      if (this.adjList[currNode].edges.indexOf(node) ? -1) {
        this.adjList[currNode].edges.splice()
      }
    })
  }

  removeEdge(node1, node2) {
  }

  depthFirstTraversal(startingNode, func = console.log) {
  }

  breadthFirstTraversal(startingNode, func = console.log) {
  }
}

const adjList = new Graph()

export default Graph;