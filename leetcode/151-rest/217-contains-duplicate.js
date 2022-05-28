/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let foundDuplicate = false
  let i = 0
  while (i < nums.length - 1 && !foundDuplicate) {
    if (nums.indexOf(nums[i], i + 1) > -1) {
      foundDuplicate = true
    }
    i++
  }

  return foundDuplicate
}

console.log(containsDuplicate([1, 2, 3, 4]))