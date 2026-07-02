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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const n = intervals.length;
        intervals.sort((a, b) => a.start - b.start);
        const pq = new MinPriorityQueue(); // first room to free

        for (const interval of intervals) {
            if (pq.size() && interval.start >= pq.front()) {
                pq.dequeue();
            }
            pq.enqueue(interval.end);
        }

        return pq.size();
    }
}
