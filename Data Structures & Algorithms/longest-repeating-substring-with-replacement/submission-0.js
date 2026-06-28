class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;
        const mp = new Map();
        let l = 0;
        let max = 0, ans = 0;

        for (let r = 0; r < n; r++) {
            mp.set(s[r], (mp.get(s[r]) || 0) + 1);
            max = Math.max(max, mp.get(s[r]));

            while (r - l + 1 - max > k) {
                mp.set(s[l], mp.get(s[l]) - 1);
                if (mp.get(s[l]) === -1) mp.delete(s[l]);
                l++;
            }

            ans = Math.max(ans, r - l + 1);
        }
        return ans;
    }
}
