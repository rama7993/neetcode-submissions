class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = {};

        const dfs = (target) => {
            if (target <= 0) return 0;
            if (target in memo) return memo[target];
            let res = Infinity;
            for (const coin of coins) {
                if (target - coin >= 0) {
                    res = Math.min(res, 1 + dfs(target - coin));
                }
            }

            return memo[target] = res;
        }

        const minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins;
    }
}
