/*
    Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
    return s.replace(/\s+/g, ' ').trim().split(' ').pop().length;
};
