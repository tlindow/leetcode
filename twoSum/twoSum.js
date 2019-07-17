/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let pair = null;
  const hash = nums.reduce((acc, next, i) => {
      acc[next] = i;
      return acc;
  }, {});
  nums.forEach((num, i) => {
      if (hash[target - num] !== undefined && i !== hash[target - num]) {
          pair = [i, hash[target - num]];
      }
  });
  return pair;
};
