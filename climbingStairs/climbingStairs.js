/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  //find all combination sums of the number n
  const cached = [];
  for (var i = 0; i < n; i++) {
      if (i === 0 || i === 1) {
        cached.push(i + 1)
      } else {
        cached.push(cached[i - 1] + cached[i - 2]);
      }
  }
  return cached[n - 1];
};
