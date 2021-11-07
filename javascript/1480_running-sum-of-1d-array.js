/*
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.
*/

var runningSum = function(nums) {
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {
        if (newArr.length === 0) {
            newArr.push(nums[0]);
        } else {
            newArr.push(newArr[i - 1] + nums[i]);
        }
    }
    return newArr;
};
