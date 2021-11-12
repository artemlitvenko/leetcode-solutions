/*
    Given an array of integers nums, return the number of good pairs.
    A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

var numIdenticalPairs = function(nums) {
    let accum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let ii = i + 1; ii < nums.length; ii++) {
            if (nums[i] === nums[ii]) {
                accum += 1
            }
        }
    }
    return accum;
};
