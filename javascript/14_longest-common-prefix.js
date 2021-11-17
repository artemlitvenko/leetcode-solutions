/*
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let result = '';
    let firstWord = strs[0];

    for (let i = 0; i < firstWord.length; i++) {
        for (let ii = 1; ii < strs.length; ii++) {
            if (firstWord[i] !== strs[ii][i]) {
                return result;
            }
        }
        result += firstWord[i];
    }
    return result;
};
