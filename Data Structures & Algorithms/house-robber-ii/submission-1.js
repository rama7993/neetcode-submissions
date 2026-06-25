class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const hrob = (start, end) => {
            let prev1 = 0, prev2 = 0;
            for (let i = start; i <= end; i++) {
                let temp = Math.max(nums[i] + prev1, prev2);
                prev1 = prev2;
                prev2 = temp;
            }
            return prev2;
        }


        return Math.max(hrob(0, n - 2), hrob(1, n - 1));
    }
}
