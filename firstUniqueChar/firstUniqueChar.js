/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s.indexOf(s[i]);
    }
  }
  return -1;
};
