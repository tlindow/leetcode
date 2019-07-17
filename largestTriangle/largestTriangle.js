/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    //sort from largest to smallest
    A.sort((a,b) => b - a);
    //slice section, three at a time
    for (var i = 0; i < A.length; i++) {
        if (A[i] < A[i + 1] + A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return 0;
};