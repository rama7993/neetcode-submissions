class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        let num = n;
        for (let i = 0; i < n; i++) {
            num ^= i ^ (nums[i]);
        }
        return num;
    }
}
