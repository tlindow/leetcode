/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // for each in nums, if num of previous === to current, splice at index
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          nums.splice(i, 1);
          i -= 1;
      }
  }
  return nums.length;
};
