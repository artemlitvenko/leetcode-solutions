/*
    You are given a list of songs where the ith song has a duration of time[i] seconds.

    Return the number of pairs of songs for which their total duration in seconds is divisible by 60.
    Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
*/

var numPairsDivisibleBy60 = function (time) {
    let result = 0;

    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                result += 1;
            }
        }
    }

    return result;
};
