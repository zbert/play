/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneLetterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  if (digits.length === 0) {
    return []
  }

  if (digits.length === 1) {
    return phoneLetterMap[digits] || []
  }

  const base = phoneLetterMap[digits[0]]
  const restOfDigitsArray = digits.slice(1).split('')

  const combination = base.map(baseLetter => {
    // combineLetters(elementArray)
    return phoneLetterMap[digits[1]].map(element => baseLetter + element)
  })

  return combination
}

console.log(letterCombinations('23'))

function combineLetters (baseLetters, array) {
  if (array.length === 1) {
    return array.map(element => baseLetter + element)
  }

  return []
    .concat(combineLetters(letter, array.slice(1)))
}
