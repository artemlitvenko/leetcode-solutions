/*
    Given a string s and an integer array indices of the same length.
    The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
    Return the shuffled string.
*/

var restoreString = function (s, indices) {
    return s
        .split('')
        .reduce((acc, item, index) => {
            acc[indices[index]] = item;
            return acc;
        }, [])
        .join('');
};
