/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max
}


console.log(maxSubArray([5, 4, -1, 7, 8]))