/*
    Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

    Given a balanced string s, split it in the maximum amount of balanced strings.

    Return the maximum amount of split balanced strings.
*/
var balancedStringSplit = function(s) {
    let result = 0;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            counter++
        } else {
            counter--
        }

        if (counter === 0) {
            result++
        }
    }

    return result;
};
