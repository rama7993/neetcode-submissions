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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root || p.val === root.val || q.val === root.val) return root;
        const l = this.lowestCommonAncestor(root.left, p, q);
        const r = this.lowestCommonAncestor(root.right, p, q);

        if (l && r) return root;

        return l || r;
    }
}
