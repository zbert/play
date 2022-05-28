/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function generateListNode (list) {
  if (list.length === 0) {
    return null
  }

  const val = list.shift()

  return new ListNode(val, generateListNode(list))
}

const l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1))))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))


function traverseListToArray (linkedList) {
  if (linkedList.next === null) {
    return [linkedList.val]
  }
  return [
    linkedList.val,
    ...traverseListToArray(linkedList.next)
  ]
}

function combineNode (array) {
  if (array.length === 0) {
    return null
  }

  const value = array.pop()
  // console.log(value, 'asdcs')

  return new ListNode(value, combineNode(array))
}

var addTwoNumbers = function (l1, l2) {
  const l1Array = traverseListToArray(l1)
  const l2Array = traverseListToArray(l2)

  const sum = add(l1Array.join(''), l2Array.join(''))
  const sumArray = String(sum).split('').map(number => parseInt(number))
  const nodes = combineNode(sumArray)

  return nodes
}

function add (A, B) {
  const AL = A.length
  const BL = B.length
  const ML = Math.max(AL, BL)

  let carry = 0
  let sum = ''

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(i - 1)
    let b = +B.charAt(i - 1)

    let t = carry + a + b
    carry = t / 10 | 0
    t %= 10

    sum = (i === ML && carry)
      ? carry * 10 + t + sum
      : t + sum
  }

  return sum
}

console.log(addTwoNumbers(generateListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), l2))
