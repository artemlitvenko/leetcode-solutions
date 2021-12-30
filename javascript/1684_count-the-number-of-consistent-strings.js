/*
    You are given a string allowed consisting of distinct characters and an array of strings words.
    A string is consistent if all characters in the string appear in the string allowed.
    Return the number of consistent strings in the array words.
*/

var countConsistentStrings = function (allowed, words) {
    let result = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        for (let j = 0; j < word.length; j++) {
            if (!allowed.includes(word[j])) {
                break;
            } else if (j === word.length - 1) {
                result += 1;
            }
        }
    }

    return result;
};
