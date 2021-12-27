/*
    A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
    You are given an array of strings sentences, where each sentences[i] represents a single sentence.
    Return the maximum number of words that appear in a single sentence.
*/

var mostWordsFound = function (sentences) {
    let result = [];
    for (let sentence of sentences) {
        result.push(sentence.split(' ').length);
    }

    return result.sort((a, b) => a - b)[result.length - 1];
};
