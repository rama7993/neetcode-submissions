class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let cnt = 0;

        function dfs(i, j) {

            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return;

            grid[i][j] = '0';

            for (const [dx, dy] of dir) {
                dfs(i + dx, j + dy);
            }

        }


        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    cnt++;
                    dfs(i, j);
                }
            }
        }

        return cnt;
    }
}
