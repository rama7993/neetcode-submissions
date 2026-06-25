class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = {};

        const dfs = (i) => {
            if (i >= cost.length) return 0;
            if (memo[i]) return memo[i];
            let l = dfs(i + 1);
            let r = dfs(i + 2);
            return memo[i] = cost[i] + Math.min(l, r);
        }

        return Math.min(dfs(0), dfs(1));
    }
}
