class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length, n = grid[0].length;
        const INF = 2 ** 31 - 1;
        const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        const dfs = (i, j, cnt) => {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === -1 || cnt > grid[i][j]) return;

            grid[i][j] = cnt;

            for (const [dx, dy] of dir) {
                dfs(i + dx, j + dy, cnt + 1);
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    dfs(i, j, 0);
                }
            }
        }

    }
}
