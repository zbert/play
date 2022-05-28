/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


function LinkedList(val, next = null) {
  this.val = val
  this.next = next
}

function mergeAdjacent (list) {
  console.log(list)
  if (list.length === 1) {
    return new LinkedList(list[0], null)
  }
  const [firstTuple, secondTuple] = list

  if (secondTuple[0] <= firstTuple[1]) {
    const mergedTuple = [firstTuple[0], secondTuple[1]]
    return new LinkedList(mergedTuple, mergeAdjacent([mergedTuple, ...list.slice(2)]))
  } else {
    return new LinkedList(secondTuple, mergeAdjacent(list.slice(1)))
  }
}

var merge = function (intervals) {
  const sortedArray = intervals.sort((Atuple, bTuple) => Atuple[0] - bTuple[0])

  if (sortedArray.length <= 2) {
    const [firstTuple, lastTuple] = sortedArray
    if (lastTuple[0] <= firstTuple[1]) {
      return [[firstTuple[0], lastTuple[1]]]
    } else {
      return lastTuple
        ? [firstTuple, lastTuple]
        : sortedArray
    }
  }

  const linkedList = mergeAdjacent(sortedArray)

  return linkedList
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
