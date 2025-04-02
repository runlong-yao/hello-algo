/**
 * File: climbing_stairs_dfs.ts
 * Created Time: 2023-07-26
 * Author: yuan0221 (yl1452491917@gmail.com)
 */

/* 搜索 */
function dfs(i: number): number {
    if (i === 1 || i === 2) return i

    return dfs(i - 1) + dfs(i - 2)
}

/* 爬楼梯：搜索 */
function climbingStairsDFS(n: number): number {
    return dfs(n);
}

/* Driver Code */
const n = 9;
const res = climbingStairsDFS(n);
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);

export { };
