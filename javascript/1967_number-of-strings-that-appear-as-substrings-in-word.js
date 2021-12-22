/*
    Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
    A substring is a contiguous sequence of characters within a string.
*/

var numOfStrings = function (patterns, word) {
    let result = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) {
            result += 1;
        }
    }

    return result;
};
