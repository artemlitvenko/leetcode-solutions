/*
    Write a function that reverses a string. The input string is given as an array of characters s.
    You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
    let startArr = 0;
    let endArr = s.length - 1;

    while (startArr <= endArr) {
        [s[startArr], s[endArr]] = [s[endArr], s[startArr]];
        startArr++;
        endArr--;
    }
};
