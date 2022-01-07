/*
    Given a square matrix mat, return the sum of the matrix diagonals.
    Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

var diagonalSum = function (mat) {
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < mat.length; i++) {
        primary += mat[i][i];
        secondary += mat[i][mat.length - i - 1];
    }

    if (mat.length === mat[0].length && mat[0].length % 2 !== 0) {
        let centerIndex = Math.floor(mat.length / 2);
        return primary + secondary - mat[centerIndex][centerIndex];
    } else {
        return primary + secondary;
    }
};
