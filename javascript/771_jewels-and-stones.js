/*
    You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
    Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

    Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    for (let i = 0; i < jewels.length; i++ ) {
        for (let ii = 0; ii < stones.length; ii++ ) {
            if (jewels[i] === stones[ii]) {
                result += 1;
            }
        }
    }
    return result;
};
