/*
    You are given a 0-indexed integer array nums and a target element target.

    A target index is an index i such that nums[i] == target.

    Return a list of the target indices of nums after sorting nums in non-decreasing order.
    If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
*/
var targetIndices = function (nums, target) {
    let sortArr = nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === target) result.push(i);
    }
    return result;
};
