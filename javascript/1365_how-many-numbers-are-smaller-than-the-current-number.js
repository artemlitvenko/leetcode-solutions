/*
    Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
    That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
    Return the answer in an array.
*/

var smallerNumbersThanCurrent = function(nums) {
    let result = 0;
    let accum = [];
    for (let i = 0; i < nums.length; i++) {
        for (let ii = 0; ii < nums.length; ii++) {
            if (nums[i] > nums[ii]) {
                result += 1;
            }
        }
        accum.push(result)
        result = 0;
    }
    return accum;
};
