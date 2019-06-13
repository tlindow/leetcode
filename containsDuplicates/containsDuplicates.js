/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const numCounts = nums.reduce((counts, num) => {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
    return counts;
  }, {});
  
  for (var key in numCounts) {
    if (numCounts[key] > 1) {
      return true;
    }
  }
  return false;
};
