//A B C D
//A B C

//
//BA BC
//CA CB
//AB AC



// 593. 有效的正方形
// 中等
// 相关标签
// 相关企业
// 给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

// 点的坐标 pi 表示为 [xi, yi] 。 输入没有任何顺序 。

// 一个 有效的正方形 有四条等边和四个等角(90度角)。



// 示例 1:

// 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// 输出: true
// 示例 2:

// 输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// 输出：false
// 示例 3:

// 输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// 输出：true



function dotProduct(a: [number, number], b: [number, number]): number {
    return a[0] * b[0] + a[1] * b[1];
}

/**
 * 计算两个点之间的距离
 * @param pointA 点 A，包含两个元素的数组，表示点的坐标 [x1, y1]
 * @param pointB 点 B，包含两个元素的数组，表示点的坐标 [x2, y2]
 * @returns 两个点之间的距离
 */
function distanceBetweenPoints(pointA: [number, number], pointB: [number, number]): number {
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


function isRectangle(nums: Array<[number, number]>) {
    let [A, B, C, D] = nums
    let lens = {

    }, ang = {

    }

    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; nums.length; j++) {
            lens[`${i}${j}`] = distanceBetweenPoints(nums[i], nums[j])
        }



}