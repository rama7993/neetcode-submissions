class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const n = nums.length;
        let res = nums[0], sum = nums[0];

        for (let i = 1; i < n; i++) {
            sum = Math.max(nums[i], sum + nums[i]);
            res = Math.max(sum, res);
        }

        return res;
    }
}
