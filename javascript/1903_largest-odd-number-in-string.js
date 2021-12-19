/*
    You are given a string num, representing a large integer.
    Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

    A substring is a contiguous sequence of characters within a string.
*/

function largestOddNumber(num) {
    let numArr = num.split('');
    while (numArr[numArr.length - 1] % 2 === 0) {
        numArr.pop();
    }

    return numArr.join('');
}
