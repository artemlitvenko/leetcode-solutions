/*
    There is an integer array nums sorted in ascending order (with distinct values).

    Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
    For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

    You must write an algorithm with O(log n) runtime complexity.
*/

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midNum = Math.floor((left + right) / 2);

        if (nums[midNum] === target) {
            return midNum;
        }

        if (nums[left] <= nums[midNum]) {
            if (nums[left] <= target && target <= nums[midNum]) {
                right = midNum - 1;
            } else {
                left = midNum + 1;
            }
        } else {
            if (nums[midNum] <= target && target <= nums[right]) {
                left = midNum + 1;
            } else {
                right = midNum - 1;
            }
        }
    }

    return -1;
};
