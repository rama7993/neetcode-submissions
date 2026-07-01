class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) return 1;
        if (n < 0) return 1 / this.myPow(x, -n);
        return (n % 2 === 0) ? this.myPow(x * x, n / 2) : x * this.myPow(x * x, (n - 1) / 2);
    }
}
