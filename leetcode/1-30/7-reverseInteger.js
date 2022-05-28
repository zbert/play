/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   const max = Math.pow(2, 31) - 1
//   const min = max * -1
//   const isNegative = x < 0
//   let reverseValue = 0

//   const numArray = String(x).split('')

//   console.log(max/10, 'max', x > max)
//   console.log(x)

//   if (x < min || x > max) {
//     return reverseValue
//   }

//   if (isNegative) {
//     numArray.shift()
//   }

//   const zeroFound = false
//   const length = Math.floor(numArray.length / 2)
//   const arrayLength = (numArray.length - 1)
  
//   for (let i = 0; i < length; i++) {
//     let temp = numArray[i]
//     let oppositeIndex =  arrayLength - i
    
//     //swap
//     if (parseInt(numArray[oppositeIndex]) === 0 && zeroFound ) {
//       numArray[i] = numArray[oppositeIndex]

//     } else {
//       numArray[i] = numArray[oppositeIndex]
//     }

//     numArray[oppositeIndex] = temp
//   }

//   reverseValue = parseInt(numArray.join(''))

//   return isNegative ? Math.abs(reverseValue) * -1 : Math.abs(reverseValue)
  
// };


var reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  const isNegative = x < 0

  let accReverse = 0
  let i = Math.abs(x)
  while ( i > 0) {
    accReverse = (accReverse * 10) + i % 10;

    i = Math.floor(i / 10)
  }


  return accReverse > max || accReverse < min
    ? 0 
    : isNegative
      ? accReverse * -1
      : accReverse
}


console.log(reverse(1230))