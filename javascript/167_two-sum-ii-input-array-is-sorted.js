/*
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
    Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

var twoSum = function(numbers, target) {
    let item1 = 0;
    let item2 = numbers.length -1;
    while (numbers[item1] + numbers[item2] !== target) {
        if (numbers[item1] + numbers[item2] < target) {
            item1++;
        } else {
            item2--;
        }
    }
    return [item1 + 1, item2 + 1];
};
