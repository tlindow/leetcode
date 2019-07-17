/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jewels = {};
  let unionCount = 0;
  for (var i = 0; i < J.length; i++) {
      if(!jewels[J[i]]) {
          jewels[J[i]] = 0;
      }
      jewels[J[i]]++;
  }

  for (var i = 0; i < S.length; i++) {
      if (jewels[S[i]]) {
          unionCount++;
      }
  }
  return unionCount;
};
