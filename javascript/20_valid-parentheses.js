/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
    -Open brackets must be closed by the same type of brackets.
    -Open brackets must be closed in the correct order.
*/

var isValid = function (parentheses) {
    if (parentheses.length % 2 !== 0) return false;
    let result = [];

    for (const parenthe of parentheses) {
        if (parenthe === ')' && result[result.length - 1] === '(') {
            result.pop();
        } else if (parenthe === '}' && result[result.length - 1] === '{') {
            result.pop();
        } else if (parenthe === ']' && result[result.length - 1] === '[') {
            result.pop();
        } else {
            result.push(parenthe);
        }
    }

    return !result.length;
};
