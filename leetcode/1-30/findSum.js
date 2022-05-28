/*
  Given an array of integers, return the first indices of the two numbers 
  such that they add up to a specific target.
  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.
  Example:
  Given nums = [1, 2, 11, 7, 8, 15], target = 9,
  Because nums[1] + nums[3] = 2 + 7 = 9,
  return [1, 3]
  num[0] + num[4] = 1 + 8 = 9 but this set will come later than the other.
*/

function findTwoSumOptimized(arr, target) {
  const dict = {}
  arr.forEach((item, index) => {
    dict[item] = index
  })
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = target - arr[i]
    if (dict[diff] && dict[diff] !== i) {
      return [i, dict[diff]]
    }
  }
  return []
}

function findTwoSum(arr, target) {
  const answer = []
  let pivot = 0

  while (pivot < arr.length - 1) {
    for (let i = 0; i < arr.length; i++) {

      if (arr[pivot] + arr[i] === target && i !== pivot) {
        return [pivot, i]
      }
    }
    pivot++
  }
  return false
}

const array = [1,3 ,3, 2, 11, 7, 8, 15]

console.log(findTwoSum(array, 9))


