class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let removals = 0;
        const n = intervals.length;
        intervals.sort((a, b) => a[1] - b[1]);

        let prev = intervals[0];
        for (let i = 1; i < n; i++) {
            const curr = intervals[i];

            if (curr[0] < prev[1]) {
                removals++;
            } else {
                prev = curr;
            }
        }
        return removals;
    }


}
