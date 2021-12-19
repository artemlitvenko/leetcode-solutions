/*
    Given a roman numeral, convert it to an integer.
*/

var romanToInt = function (s) {
    const symbolList = {
        I: 1,
        IV: 4,
        IX: 9,
        V: 5,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentNum = s[i];
        const romePair = s[i + 1] ? currentNum + s[i + 1] : '';
        if (symbolList[romePair]) {
            result += symbolList[romePair];
            i++;
        } else {
            result += symbolList[currentNum];
        }
    }

    return result;
};
