/*
    You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
    Return the sum of all the unique elements of nums.
*/

var sumOfUnique = function (nums) {
    return nums.filter((item, index, arr) => arr.lastIndexOf(item) === arr.indexOf(item)).reduce((sum, current) => (sum += current), 0);
};
