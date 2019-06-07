/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //store in object
  const numObj = {};
  for (var i = 0; i < nums.length; i++) {
    if (numObj[nums[i]]) {
      numObj[nums[i]]++;
    } else {
      numObj[nums[i]] = 1;
    }
  }

  //look for key with value 1
  for (var key in numObj) {
    if (numObj[key] === 1) {
      return key;
    }
  }
};
