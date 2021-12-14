/*
    Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

var reverseWords = function(s) {
    let arrStr = s.split(' ');
    let result = [];
    for (const item of arrStr) {
        result.push(item.split('').reverse().join(''))
    }

    return result.join(' ');
};
