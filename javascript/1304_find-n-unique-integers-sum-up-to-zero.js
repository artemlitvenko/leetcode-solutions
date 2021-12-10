/*
    Given an integer n, return any array containing n unique integers such that they add up to 0.
*/

var sumZero = function(n) {
    const result = [];
    const halfLength = n / 2;

    if (n === 1) {
        return [0];
    }

    if (n % 2) {
        result.push(0);
    }

    for (let i = 1; i <= halfLength; i++) {
        result.push(i);
        result.push(-i);
    }

    return result;
};
