/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sCount = {};
  const tCount = {};
  
  for (var i = 0; i < s.length; i++) {
      if (!sCount[s[i]]) {
          sCount[s[i]] = 1;
      } else {
          sCount[s[i]] += 1;
      }
  }
  
  for (var i = 0; i < t.length; i++) {
      if (!tCount[t[i]]) {
          tCount[t[i]] = 1;
      } else {
          tCount[t[i]] += 1;
      }
  }

  for (var keys in sCount) {
      if (sCount[keys] !== tCount[keys]) {
          return false;
      }
  }
  
  for (var keys in tCount) {
      if (sCount[keys] !== tCount[keys]) {
          return false;
      }
  }
  return true;
};
