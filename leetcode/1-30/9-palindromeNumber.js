/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numberToString = x + ''
  const wordLength = numberToString.length - 1
  const loopLimit = Math.floor(numberToString.length / 2)
  let isPalindrome = true

  if (numberToString === 1) return isPalindrome

  for (var i = 0; i <= loopLimit; i++) {
    if (numberToString[i] !== numberToString[wordLength - i]) {
      isPalindrome = false
    }
  }

  return isPalindrome
}

console.log(isPalindrome(-121))
