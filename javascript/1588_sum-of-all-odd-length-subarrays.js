/*
    Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
    A subarray is a contiguous subsequence of the array.
    Return the sum of all odd-length subarrays of arr.
*/

var sumOddLengthSubarrays = function (arr) {
    const oddArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let ii = i; ii < arr.length; ii++) {
            oddArr.push(arr[ii]);
            if (oddArr.length % 2 !== 0) {
                for (let value of oddArr) {
                    count += value;
                }
            }
        }
        oddArr.length = 0;
    }

    return count;
};
