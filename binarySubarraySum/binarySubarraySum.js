/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  let count = 0;
  let j = 0;
  while (j < A.length) {
      let sum = 0;
      for (var i = j; i < A.length; i++) {
          sum += A[i];
          if (sum === S) {
              count++;
          } else if (sum > S) {
              break;
          }
      }
      j++;
  }
  return count;
};
