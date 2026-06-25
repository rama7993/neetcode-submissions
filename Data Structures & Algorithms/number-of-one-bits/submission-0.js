class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        const bin = n.toString(2);
        let cnt = 0;
        console.log(bin, n);
        for (let i = 0; i < bin.length; i++) {
            if (bin[i] === '1') cnt++;
        }

        return cnt;
    }
}
