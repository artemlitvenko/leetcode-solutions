/*
    Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
    and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

var merge = function (intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for (const interval of intervals) {
        let lastInterval = result[result.length - 1];

        if (lastInterval[1] >= interval[0]) {
            lastInterval[1] = Math.max(lastInterval[1], interval[1]);
        } else {
            result.push(interval);
        }
    }

    return result;
};
