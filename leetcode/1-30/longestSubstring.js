/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arrayOfString = s.split('')
  const duplicateOfArray = [...arrayOfString]
  let pivot = 0
  let repeatingCharacter = ''
  let longestSubstring = 0
  let longestStartingSubstring = 0
  let positionOfLastSubstring = 0
  

  while (pivot < arrayOfString.length - 1 && arrayOfString.length > 0) {
    repeatingCharacter = arrayOfString[pivot]

    if (arrayOfString.indexOf(repeatingCharacter, pivot + 1) > 0) {
      let arrayPosition = arrayOfString.indexOf(repeatingCharacter, pivot + 1)

      if (longestSubstring === 0) {
        longestStartingSubstring = pivot + 1
      }

      if (arrayPosition - (pivot) > longestSubstring) {
        longestSubstring = arrayPosition - (pivot)
      }

      positionOfLastSubstring = arrayPosition
      pivot = arrayOfString.indexOf(repeatingCharacter, pivot + 1)
    } else {
      pivot++
    }
  }
  console.log(longestSubstring, duplicateOfArray.splice(positionOfLastSubstring).length, longestStartingSubstring)
  return longestSubstring === 0 || arrayOfString.length === 1
    ? arrayOfString.length
    : Math.max(longestSubstring, duplicateOfArray.splice(positionOfLastSubstring).length, longestStartingSubstring)
}

var lengthOfLongestSubstring = function (s) {
  const dict = {};
  let from = 0, maxLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    console.log(dict[s[i]], i, s[i])
    if (dict[s[i]] >= from) {
      console.log(dict[s[i]], 'inside')
      maxLen = Math.max(maxLen, i - from);
      from = dict[s[i]] + 1;
      console.log(maxLen, from)
    }
    dict[s[i]] = i;
  }
  return Math.max(maxLen, s.length - from);
}

console.log(lengthOfLongestSubstring('abbazxc'))
