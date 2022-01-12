/*
    You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
    There is at least one empty seat, and at least one person sitting.
    Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
    Return that maximum distance to the closest person.
*/

var maxDistToClosest = function (seats) {
    let max = 0;
    let count = 0;

    let i = 0;
    if (i === 0) {
        while (seats[i] === 0) {
            i++;
            count += 1;
        }

        max = count;
        count = 0;
    }

    for (let i = 0; i < seats.length; i++) {
        let currentValue = seats[i];

        if (i === seats.length - 1 && currentValue === 0) {
            count += 1;
            max = Math.max(max, count);
            break;
        }

        if (currentValue === 1) {
            count = 0;
        } else {
            count += 1;
            max = Math.max(max, Math.ceil(count / 2));
        }
    }

    return max;
};
