/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }

  const exceptions = ['V', 'X', 'L', 'C', 'D', 'M']

  let pointer = s.length - 1
  let sum = 0

  while (pointer >= 0) {
    const letter = s.charAt(pointer)

    if (exceptions.includes(letter)) {
      let letterBefore = s.charAt(pointer - 1)
      if (pointer === 0) {        
        sum = sum + romanMap[letter]
        --pointer
      } else if (romanMap[letterBefore + letter]) {
        sum = sum + romanMap[letterBefore + letter]
        pointer = pointer - 2
      } else {
        sum = sum + romanMap[letter]
        --pointer
      }
    } else {
      sum = sum + romanMap[letter]
      --pointer
    }
  }

  return sum
}

// console.log(romanToInt("III"))
// console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
