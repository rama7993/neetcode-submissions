class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const memo = {};

        const dfs = (idx) => {
            if (idx >= n) return 0;
            if (memo[idx]) return memo[idx];
            const l = nums[idx] + dfs(idx + 2);
            const r = dfs(idx + 1);
            return memo[idx] = Math.max(l, r);
        }

        return dfs(0);
    }
}
