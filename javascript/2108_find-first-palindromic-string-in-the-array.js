/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

var firstPalindrome = function (words) {
    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            return word;
        }
    }

    return '';
};
