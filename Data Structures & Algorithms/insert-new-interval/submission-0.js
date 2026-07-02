class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];

        for (let interval of intervals) {
            const [start, end] = interval;

            if (end < newInterval[0]) {
                res.push(interval)
            }
            else if (start > newInterval[1]) {
                res.push(newInterval);
                newInterval = [start, end]
            } else if (!(start > newInterval[1] || end < newInterval[0])) { // overlap
                newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])]
            }
        }

        res.push(newInterval);
        return res;
    }
}
