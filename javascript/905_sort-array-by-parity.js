/*
    Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
    Return any array that satisfies this condition.
*/

var sortArrayByParity = function (nums) {
    let evenNum = nums.filter((item) => item % 2 === 0);
    let oddNum = nums.filter((item) => item % 2 !== 0);

    return [...evenNum, ...oddNum];
};
