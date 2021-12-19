/*
    Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
    Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

var shuffle = function (nums, n) {
    let newArr = [];
    let arrX = nums.slice(0, n);
    let arrY = nums.slice(n);
    for (let i = 0; i < arrX.length; i++) {
        newArr.push(arrX[i]);
        newArr.push(arrY[i]);
    }

    return newArr;
};
