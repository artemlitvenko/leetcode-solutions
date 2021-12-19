/*

*/

var maximumWealth = function (accounts) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < accounts.length; i++) {
        sum = accounts[i].reduce((a, b) => a + b);
        result.push(sum);
    }
    return Math.max(...result);
};
