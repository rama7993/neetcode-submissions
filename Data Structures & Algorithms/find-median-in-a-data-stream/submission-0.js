class MedianFinder {
    constructor() { this.pq = new MinPriorityQueue(); }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) { this.pq.enqueue(num); }

    /**
     * @return {number}
     */
    findMedian() {
        const size = this.pq.size();
        let len = Math.floor(size / 2);
        const arr = this.pq.toArray();
        return (size & 1) ? arr[len] : (arr[len - 1] + arr[len]) / 2
    }
}
