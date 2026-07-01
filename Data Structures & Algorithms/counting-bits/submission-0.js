class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = Array(n + 1).fill(0);

        const countBits = n => {
            let cnt = 0;
            while (n) {
                cnt++;
                n &= n - 1;
            }
            return cnt;
        }

        for (let i = 0; i < n + 1; i++) {
            res[i] = countBits(i);
        }

        return res;
    }
}
