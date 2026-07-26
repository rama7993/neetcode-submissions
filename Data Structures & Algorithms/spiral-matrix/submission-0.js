class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const m = matrix.length, n = matrix[0].length;
        let l = 0, r = n - 1, t = 0, b = m - 1;
        let res = [];

        while (l <= r && t <= b) {
            for (let j = l; j <= r; j++) {
                res.push(matrix[t][j]);
            }
            t++;

            for (let i = t; i <= b; i++) {
                res.push(matrix[i][r]);
            }
            r--;

            if (l > r || t > b) break;

            for (let j = r; j >= l; j--) {
                res.push(matrix[b][j]);
            }
            b--;


            for (let i = b; i >= t; i--) {
                res.push(matrix[i][l]);
            }
            l++;
        }
        return res;
    }
}
