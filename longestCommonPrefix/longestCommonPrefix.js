/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
      return '';
  }
  let common = strs[0];
  let prefix = '';
  strs.forEach((str) => {
      for (var i = 0; i < str.length; i++) {
          if (str[i] === common[i]) {
              prefix += str[i];
          } else {
              break;
          }
      }
      common = prefix;
      prefix = '';
  });
  return common;
};
