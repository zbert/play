/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const shortArray = (nums1.length <= nums2.length) ? nums1 : nums2
  const longArray = (nums1.length > nums2.length) ? nums1 : nums2

  const cache = []

  let pivot = 0
  while (pivot < shortArray.length) {
    let numberToSearch = shortArray[pivot]
    let indexMatch = longArray.indexOf(numberToSearch)
    
    if (indexMatch > -1) {
      cache.push(numberToSearch)
      longArray.splice(indexMatch, 1)
    }
    pivot++
  }

  return cache
}

console.log(intersect(
  [2, 1],
  [1, 2]
))
