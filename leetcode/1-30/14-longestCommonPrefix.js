/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs ) {
  let prefixLimitReached = false
  let prefix = ''
  let pivot = 0
  const arraySorted = strs.sort((a, b) => a.length - b.length)
  const shortestWord = strs.sort((a, b) => a.length - b.length)[0]

  while (pivot < shortestWord.length && !prefixLimitReached) {
    let tempPrefix = prefix + arraySorted[0][pivot]

    for (var i = 1; i < arraySorted.length; i++) {
      let word = arraySorted[i]
      if (tempPrefix !== word.slice(0, pivot + 1)) {
        prefixLimitReached = true
      }
    }

    if (!prefixLimitReached) {
      prefix += arraySorted[0][pivot]
    }
    pivot++
  }

  return prefix
}

console.log(longestCommonPrefix(["reflower", "flow", "flight"]))
