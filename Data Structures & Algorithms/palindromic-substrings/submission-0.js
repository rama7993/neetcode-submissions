class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let cnt = 0;
        const n = s.length;

        const expand = (i, j) => {
            while (s[i] === s[j] && i >= 0 && j < n) {
                cnt++;
                i--; j++;
            }
        }


        for (let mid = 0; mid < n; mid++) {
            expand(mid, mid);
            expand(mid, mid + 1);
        }

        return cnt;
    }
}
