/*
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function (nums) {
    let result = [];
    let target = 0;

    if (nums.length < 3) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let firstPoint = 0; firstPoint < nums.length - 2; firstPoint++) {
        if (nums[firstPoint] > target) {
            break;
        }

        if (firstPoint > 0 && nums[firstPoint] === nums[firstPoint - 1]) {
            continue;
        }

        let secondPoint = firstPoint + 1;
        let thirdPoint = nums.length - 1;

        while (secondPoint < thirdPoint) {
            let sum = nums[firstPoint] + nums[secondPoint] + nums[thirdPoint];

            if (sum === target) {
                result.push([nums[firstPoint], nums[secondPoint], nums[thirdPoint]]);

                while (nums[secondPoint] === nums[secondPoint + 1]) secondPoint++;
                while (nums[thirdPoint] === nums[thirdPoint - 1]) thirdPoint--;

                secondPoint++;
                thirdPoint--;
                continue;
            }

            if (sum < target) {
                secondPoint++;
                continue;
            }

            if (sum > target) {
                thirdPoint--;
                continue;
            }
        }
    }

    return result;
};
