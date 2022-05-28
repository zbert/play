
function sum (arr) {

  if(arr.length === 0) return 0

  return arr[0] + sum(arr.slice(1))
}

// console.log(sum([1,2,3,4]))

function quickSort(array) {
  console.log(array)
  if(array.length < 2) return array

  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []

  for (let i in array) {
    if (i != pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

console.log(quickSort([3, 5, 6, 4, 2, 1]))

const items = [1, 5, 2, 7, 3, 12, 6, 10];

function search(list, item) {
  let low = 0
  let high = list.length
  let counter = 0

  while (low <= high) {
    counter++
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]
    console.log(counter)
    if (guess === item) return true
    if (guess > item) high = mid - 1
    else low = mid + 1
  }
  console.log(counter)
  return null
}
