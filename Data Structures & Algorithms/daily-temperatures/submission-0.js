class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const n = temperatures.length;
        const ans = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]) {
                const idx = stack.pop();
                ans[idx] = i - idx;
            }
            stack.push(i);
        }
        return ans;
    }
}
