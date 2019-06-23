/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const totals = [];
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
      return nums[0];
    }
    for (let i = 0; i < nums.length; i ++){
        if (i === 0) {
            totals.push(nums[i])
        } else if (i === 1) {
            totals.push(Math.max(nums[i - 1], nums[i]));
        } else {
            totals.push(Math.max(totals[i - 1], totals[i - 2] + nums[i])); 
        }
    }
    return totals[totals.length - 1];
};
