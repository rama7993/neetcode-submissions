class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            let prev = res.at(-1);

            if (curr[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                res.push(curr);
            }

        }

        return res;
    }
}
