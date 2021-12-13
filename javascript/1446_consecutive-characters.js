/*
    The power of the string is the maximum length of a non-empty substring that contains only one unique character.

    Given a string s, return the power of s.
*/

var maxPower = function(s) {
    let maxStr = 1;
    let accum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            maxStr += 1;
        } else {
            maxStr = 1;
        }
        if (maxStr > accum) {
            accum = maxStr;
        }
    }

    return accum;
};
