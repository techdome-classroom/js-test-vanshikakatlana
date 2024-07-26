const getTotalIsles = function (grid) {


  // write your code here
  function numIslands(grid) {
    if (grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
            return;
        }
        visited[r][c] = true;
        const directions = [
            [0, 1],  
            [1, 0],  
            [0, -1], 
            [-1, 0] 
        ];
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited[r][c]) {
                dfs(r, c);
                islandCount++;
            }
        }
    }

    return islandCount;
}


const map1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];

const map2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

console.log(numIslands(map1));  // Output: 1
console.log(numIslands(map2));  // Output: 3


};

module.exports = getTotalIsles;