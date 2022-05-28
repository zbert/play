function createNode (key) {
  const children = []
  return {
    key,
    children,
    addChildren(childkey) {
      const childNode = createNode(childkey)

      children.push(childNode),
      return childNode
    }
  }
}
