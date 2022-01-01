/*
    A self-dividing number is a number that is divisible by every digit it contains.
    - For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

    A self-dividing number is not allowed to contain the digit zero.
    Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/

var selfDividingNumbers = function (left, right) {
    let result = [];

    for (let i = left; i <= right; i++) {
        if (i < 10) {
            result.push(i);
        } else {
            let iStr = String(i).split('');
            let flag = false;
            for (let j = 0; j < iStr.length; j++) {
                if (i % Number(iStr[j]) === 0) {
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                result.push(i);
            }
        }
    }

    return result;
};
