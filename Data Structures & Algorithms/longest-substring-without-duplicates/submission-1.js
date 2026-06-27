class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        let l = 0;
        const mp = new Map();
        let res = 0;

        for (let r = 0; r < n; r++) {
            while (mp.has(s[r])) {
                mp.delete(s[l]);
                l++;
            }
            mp.set(s[r], (mp.get(s[r]) || 0) + 1);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
