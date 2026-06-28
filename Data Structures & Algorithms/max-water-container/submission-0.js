class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxArea(nums) {
        const n = nums.length;
        let i = 0, j = n - 1;
        let res = 0, area;

        while (i < j) {
            if (nums[i] < nums[j]) {
                area = (j - i) * nums[i];
                i++;
            } else {
                area = (j - i) * nums[j];
                j--;
            }
            res = Math.max(area, res);
        }

        return res;
    }
}
