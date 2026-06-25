class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        let res = '', maxLen = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let l = i, r = j;
                while (l < r && s[l] === s[r]) {
                    l++; r--;
                }

                if (l >= r && j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    res = s.substring(i, j + 1);
                }

            }
        }

        return res;
    }
}
