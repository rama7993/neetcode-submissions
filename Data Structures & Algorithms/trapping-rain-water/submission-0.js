class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        let res = 0;
        let lmax = 0, rmax = 0;
        let i = 0, j = n - 1;

        while (i < j) {
            if (height[i] <= height[j]) {
                lmax = Math.max(height[i], lmax);
                res += lmax - height[i];
                i++
            } else {
                rmax = Math.max(height[j], rmax);
                res += rmax - height[j];
                j--;
            }
        }

        return res;
    }
}
