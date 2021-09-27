/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    const convertToString = x.toString().split('').reverse().join('').replace('-', '');
    const convertNumber = x < 0 ? parseInt(convertToString) * (-1) : parseInt(convertToString);
    return (convertNumber > (2**31 - 1) || convertNumber < (-(2**31))) ? 0 : convertNumber;
};
