/*
    Given an integer num, return the number of steps to reduce it to zero.
    In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function(num) {
    let result = num;
    let step = 0;
    while (result !== 0) {
        if (result % 2 === 0) {
            result = result / 2;
            step += 1;
        } else {
            result -= 1;
            step += 1;
        }
    }
    return step;
};
