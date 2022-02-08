/*
    Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/

function addDigits(num) {
    let result = num;

    while (result >= 10) {
        result = result
            .toString()
            .split('')
            .reduce((accum, current) => (accum += Number(current)), 0);
    }

    return result;
}
