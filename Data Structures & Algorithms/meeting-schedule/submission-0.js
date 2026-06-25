/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;
        if (n <= 1) return true;
        intervals.sort((a, b) => a.start - b.start);
        let prev = intervals[0];

        for (let i = 1; i < n; i++) {
            const curr = intervals[i];

            if (curr.start < prev.end) return false;
            else {
                prev.end = Math.max(prev.end, curr.end);
            }
        }

        return true;
    }
}
