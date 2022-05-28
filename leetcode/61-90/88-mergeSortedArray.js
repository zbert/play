/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const totalLength = m + n
  let leadingZero = m

  if (nums2.length === 0) {
    return nums1
  }

  nums2.forEach((nums2Digit) => {
    const foundIndex = nums1.findIndex((nums1Digit) => (nums1Digit >= nums2Digit))
    if (foundIndex > -1) {
      nums1.splice(foundIndex, 0, nums2Digit)
      leadingZero++
    } else {
      nums1.splice(leadingZero, 1, nums2Digit)
      leadingZero++
    }
  })

  

  if (nums1.length > totalLength) {
    const itemsToDelete = (nums1.length - totalLength)

    nums1.splice(itemsToDelete * -1)
  }

  return nums1
}

console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0],
6,
  [1, 2, 2],
3
))
