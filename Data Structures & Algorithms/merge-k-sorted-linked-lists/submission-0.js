/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const nodes = [];
        for (let l of lists) {
            if (l) {
                while (l) {
                    nodes.push(l.val);
                    l = l.next;
                }
            }
        }

        nodes.sort((a, b) => a - b);

        let dummy = new ListNode();
        let curr = dummy;
        for (let node of nodes) {
            curr.next = new ListNode(node)
            curr = curr.next;
        }

        return dummy.next;
    }
}
