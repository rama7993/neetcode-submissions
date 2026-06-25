class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const hrob = (start, end) => {
            const len = end - start + 1;
            const dp = Array(len);
            dp[0] = nums[start];
            dp[1] = Math.max(nums[start], nums[start + 1]);

            for (let i = 2; i <= end; i++) {
                dp[i] = Math.max(nums[start + i] + dp[i - 2], dp[i - 1]);
            }

            return dp[len - 1];
        }


        return Math.max(hrob(0, n - 2), hrob(1, n - 1));
    }
}
