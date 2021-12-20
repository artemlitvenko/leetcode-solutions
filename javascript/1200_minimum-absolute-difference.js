/*
    Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

    Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
    - a, b are from arr
    - a < b
    - b - a equals to the minimum absolute difference of any two elements in arr
*/

var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let minDifference = Infinity;
    const result = [];

    let i = 1;
    while (i < arr.length) {
        minDifference = Math.min(Math.abs(arr[i] - arr[i - 1]), Math.abs(minDifference));
        i++;
    }

    let j = 0;
    while (j < arr.length) {
        let currentValue = Math.abs(arr[j + 1] - arr[j]);
        if (currentValue === minDifference) {
            result.push([arr[j], arr[j + 1]]);
        }
        j++;
    }

    return result;
};
