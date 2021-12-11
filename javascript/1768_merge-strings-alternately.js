/*
    You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
    If a string is longer than the other, append the additional letters onto the end of the merged string.
    Return the merged string.
*/

var mergeAlternately = function(word1, word2) {
    let word1Arr = word1.split('');
    let word2Arr = word2.split('');
    let biggestWord = word1.length > word2.length ? word1 : word2;

    let result = [];
    for (let i = 0; i < biggestWord.length; i++) {
        if (word1Arr[i]) result.push(word1Arr[i]);
        if (word2Arr[i]) result.push(word2Arr[i]);
    }
    return result.join('');
};
