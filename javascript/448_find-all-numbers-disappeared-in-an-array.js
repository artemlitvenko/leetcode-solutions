/*
    Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
*/

var findDisappearedNumbers = function (num) {
    let result = [];
    let uniqNums = new Set(num);

    for (let i = 0; i < num.length; i++) {
        if (!uniqNums.has(i + 1)) {
            result.push(i + 1);
        }
    }

    return result;
};
