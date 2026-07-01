class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;
        let len = 32;

        while (len--) {
            res <<= 1;
            res |= n & 1;
            n >>>= 1;
        }

        return res >>> 0;
    }
}
