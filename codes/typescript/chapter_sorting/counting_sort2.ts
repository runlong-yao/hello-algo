/**
 * File: counting_sort.ts
 * Created Time: 2023-04-08
 * Author: Justin (xiefahit@gmail.com)
 */

/* 计数排序 */
// 简单实现，无法用于排序对象
function countingSortNaive(nums: number[]): void {
    let bucket: Array<number> = Array.from({ 'length': Math.max(nums.length) - 1 }).map(() => 0)

    for (let i = 0; i < nums.length; i++) {
        let v = nums[i] as any
        bucket[v]++
    }

    let index = 0;
    for (let i = 0; i < bucket.length; i++) {
        for (let j = 0; j < bucket[i]; j++) {
            nums[index] = bucket[i]

            index++
        }
    }
}

/* 计数排序 */
// 完整实现，可排序对象，并且是稳定排序
function countingSort(nums: number[]): void {
    let m = Math.max(...nums)
    let bucket: Array<number> = Array.from({ 'length': m }).map(() => 0)
    //每种数最后填入位置
    let cursor: Array<number> = Array.from({ 'length': m })
    let result: Array<number> = Array.from({ length: nums.length })

    for (let i = 0; i < nums.length; i++) {
        let v = nums[i] as any
        bucket[v]++
    }

    //bucket [1,3,8,10]
    //cursor [1,4,12,22]
    for (let i = 0; i < bucket.length; i++) {
        cursor[i] = (i === 0 ? 0 : cursor[i - 1]) + bucket[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        const k = nums[i]
        const pos = cursor[k]
        result[pos] = k
    }

    Object.assign(nums, result)
}

/* Driver Code */
const nums = [1, 0, 1, 2, 0, 4, 0, 2, 2, 4];
countingSortNaive(nums);
console.log('计数排序（无法排序对象）完成后 nums =', nums);

const nums1 = [1, 0, 1, 2, 0, 4, 0, 2, 2, 4];
countingSort(nums1);
console.log('计数排序完成后 nums1 =', nums1);

export { };
