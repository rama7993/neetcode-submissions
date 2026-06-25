/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let sum = -Infinity;

        const dfs = (node) => {
            if (!node) return 0;
            let maxl = Math.max(dfs(node.left), 0);
            let maxr = Math.max(dfs(node.right), 0);
            sum = Math.max(sum, maxl + maxr + node.val);
            return node.val + Math.max(maxl, maxr);
        }

        dfs(root);
        return sum;

    }
}
