/*
    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

var firstUniqChar = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let currentValue = s[i];

        if (map.has(currentValue)) {
            map.set(currentValue, map.get(currentValue) + 1);
        } else {
            map.set(currentValue, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
