import { MinHeap } from "./MinHeap"
import { printHeap } from '../modules/PrintUtil';

/**
 * 获取最大的K个值
 * @param nums 
 * @param k 
 */
function topK(nums: number[], k: number) {
    const initNums = nums.slice(0, k)
    const restNums = nums.slice(k)
    const heap = new MinHeap(initNums)

    for (let i = 0; i < restNums.length; i++) {
        if (heap.peek() >= restNums[i]) continue

        heap.pop()
        heap.push(restNums[i])
    }

    return heap.getMaxHeap()
}



function doTest() {
    const input = [2, 5, 100, 1, 30, 87, 40, 23]
    const fetchSize = 4
    topK([2, 5, 1, 30, 87, 40, 23], 4)
    console.log(`
input: ${input}
size: ${fetchSize}
output: ${topK(input, fetchSize)}
    `);


}

doTest()

