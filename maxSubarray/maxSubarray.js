/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
      sum = Math.max(nums[i], sum + nums[i]);
      maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};
