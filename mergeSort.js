function merge (left, right) {
  const array = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length || rightIndex < right.length) {

    if (right[rightIndex] === undefined || left[leftIndex] <= right[rightIndex]) {
      array.push(left[leftIndex])
      leftIndex++
    } else {
      array.push(right[rightIndex])
      rightIndex++
    }
  }

  return array
}

function mergeSort (arr) {
  if (arr.length < 2) return arr

  const middle = Math.floor(arr.length / 2)

  const leftArray = mergeSort(arr.slice(0, middle))
  const rightArray = mergeSort(arr.slice(middle))

  return merge(leftArray, rightArray)
}

// Solution

//TASK: implement mergesort!

// Split the array into halves and merge them recursively 
// function mergeSort(arr) {
//   if (arr.length === 1) {
//     // return once we hit an array with a single item
//     return arr
//   }

//   const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
//   const left = arr.slice(0, middle) // items on the left side
//   const right = arr.slice(middle) // items on the right side
//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);
//   return merge(sortedLeft, sortedRight);
// }

// // compare the arrays item by item and return the concatenated result
// function merge(left, right) {
//   let result = []
//   let indexLeft = 0
//   let indexRight = 0

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] < right[indexRight]) {
//       result.push(left[indexLeft])
//       indexLeft++
//     } else {
//       result.push(right[indexRight])
//       indexRight++
//     }
//   }

//   return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

