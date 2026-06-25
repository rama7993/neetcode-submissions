class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '{': '}',
            '(': ')',
            '[': ']'
        }

        const stack = [];
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(pairs[char]);
            } else {
                if (stack.length === 0 || stack.pop() !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

}
