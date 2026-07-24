class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const strg of strs) {
            res += strg.length + '#' + strg;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        // 123#strg...
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str.at(j) !== '#') {
                j++;
            }
            const len = Number(str.slice(i, j));
            j++;
            res.push(str.slice(j, j + len));
            i = j + len;
        }

        return res;
    }
}
