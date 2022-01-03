/*
    Given an integer array nums, return the third distinct maximum number in this array.
    If the third maximum does not exist, return the maximum number.
*/

var thirdMax = function (nums) {
    if (nums.length < 3) {
        return nums.sort((a, b) => a - b)[nums.length - 1];
    } else {
        let uniqNums = [...new Set(nums)];
        if (uniqNums.length < 3) {
            return nums.sort((a, b) => a - b)[nums.length - 1];
        } else {
            return uniqNums.sort((a, b) => a - b)[uniqNums.length - 3];
        }
    }
};
