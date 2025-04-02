// 背包问题是一个非常好的动态规划入门题目，是动态规划中最常见的问题形式。其具有很多变种，例如 0‑1

// 在本节中，我们先来求解最常见的 0‑1 背包问题。
// Question
// 给定 𝑛 个物品，第 𝑖 个物品的重量为 𝑤𝑔𝑡[𝑖 − 1]、价值为 𝑣𝑎𝑙[𝑖 − 1] ，和一个容量为 𝑐𝑎𝑝 的背包。每
// 个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
// 观察图 14‑17 ，由于物品编号 𝑖 从 1 开始计数，数组索引从 0 开始计数，因此物品 𝑖 对应重量 𝑤𝑔𝑡[𝑖 − 1] 和
// 价值 𝑣𝑎𝑙[𝑖 − 1] 。

//状态:第几个物品i, 背包容量c
//选择:放入和不放入
//dp[i, c]:第i个物品在容量c的背包内的最大价值
//dp记录第i个物品在容量为c的背包内的最大价值
//不放入i物品
//dp[i, c] = dp[i-1, c]
//放入i物品
//dp[i, c + wgt[i-1]] = dp[i-1, c] + val[i-1]

//动态规划
function maxBagValue(wgt: number[], val: number[], cap: number) {
    //选择:放入第i物品和不放入第i物品
    //无后效性
    //dp[i][c]:代表第i个物品在c容量下的最大价值
    let itemSize = wgt.length + 1
    let capSize = cap + 1
    const dp = Array.from({ 'length': itemSize }).map(() => [0])
    dp[0] = Array.from({ length: capSize }).map(() => 0)

    for (let i = 1; i < itemSize; i++) {
        for (let j = 1; j < capSize; j++) {
            //当前物品重量超过背包重量，沿用dp[i-1][j]的价值
            if (wgt[i - 1] > j) {
                dp[i][j] = dp[i - 1][j]
                continue
            }

            //比较入包和不入包的最大值
            dp[i][j] = Math.max(dp[i - 1][j],
                dp[i - 1][j - wgt[i - 1]] + val[i - 1])
        }
    }


    return dp[itemSize - 1][capSize - 1]
}


//回溯算法
//两个状态背包容量c和物品i
//求:在c容量下，第i个商品产生的最大商品价值
//当前i选择[加入,不加入]

function maxBagValueBacktrack(i: number, c: number, val: number[], wgt: number[]) {

}



// Test case 1
// Weights: [1, 2, 3]
// Values: [15, 2, 3]
// Capacity: 5
// Expected output: 18 (items with weights 1 and 3)
console.log(maxBagValue([1, 2, 3], [15, 2, 3], 5)); // 18

// Test case 2
// Weights: [1, 2, 3]
// Values: [15, 2, 3]
// Capacity: 4
// Expected output: 18 (items with weights 1 and 3)
console.log(maxBagValue([1, 2, 3], [15, 2, 3], 4)); // 18

// Test case 3
// Weights: [2, 3, 4, 5]
// Values: [3, 4, 5, 6]
// Capacity: 5
// Expected output: 7 (items with weights 2 and 3)
console.log(maxBagValue([2, 3, 4, 5], [3, 4, 5, 6], 5)); // 7

// Test case 4
// Weights: [1, 2, 3, 8]
// Values: [10, 20, 30, 40]
// Capacity: 10
// Expected output: 60 (items with weights 2 and 8)
console.log(maxBagValue([1, 2, 3, 8], [10, 20, 30, 40], 10)); // 60

// Test case 5
// Weights: [1, 2, 3]
// Values: [10, 20, 30]
// Capacity: 0
// Expected output: 0 (no items can be taken)
console.log(maxBagValue([1, 2, 3], [10, 20, 30], 0)); // 0









