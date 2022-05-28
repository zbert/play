function countReccos(node) {
  if (node === null) return 0

  if (!node.yes && node.no) {
    return 1
  }


  return (node.yes && countReccos(node.yes)) +
    (node.no && countReccos(node.no))
}

class BinaryTree {
  constructor (question) {
    this.question = question
    this.yes = null
    this.no = null
  }

  insertChild(value) {
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    func(this.question)
    if(this.yes) {
      this.yes.inOrderTraversal(func)
    }
    if (this.no) {
      this.no.inOrderTraversal(func)
    }
  }

  contains (question) {
    if (this.question === question) {
      return true
    }
    
    if(this.yes) this.yes.contains(question)
    if (this.no) this.no.contains(question)
  }

  removeChild (value) {

  }

  // root, left, right
  preOrderTraversal(func = console.log) {
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
  }
}

export default BinaryTree;