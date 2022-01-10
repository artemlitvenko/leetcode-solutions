/*
    Given two integer arrays nums1 and nums2, return an array of their intersection.
    Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

var intersect = function (nums1, nums2) {
    let result = [];

    let map = nums1.reduce((accum, index) => {
        accum[index] = accum[index] ? accum[index] + 1 : 1;
        return accum;
    }, {});

    for (let i = 0; i < nums2.length; i++) {
        let currentItem = nums2[i];
        let count = map[currentItem];

        if (count && count > 0) {
            result.push(currentItem);
            map[currentItem] -= 1;
        }
    }

    return result;
};
