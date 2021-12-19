/*
    Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

var subtractProductAndSum = function (n) {
    let product = String(n)
        .split('')
        .reduce((total, value) => {
            return total * +value;
        }, 1);
    let sum = String(n)
        .split('')
        .reduce((total, value) => {
            return total + +value;
        }, 0);
    return product - sum;
};
