/**
 * File: insertion_sort.ts
 * Created Time: 2022-12-12
 * Author: Justin (xiefahit@gmail.com)
 */

/* 插入排序 */
function insertionSort(nums: number[]): void {
    // 外循环：已排序区间为 [0, i-1]
    for (let i = 1; i < nums.length; i++) {
        const base = nums[i];
        let j = i - 1;
        // 内循环：将 base 插入到已排序区间 [0, i-1] 中的正确位置
        while (j >= 0 && nums[j] > base) {
            nums[j + 1] = nums[j]; // 将 nums[j] 向右移动一位
            j--;
        }
        nums[j + 1] = base; // 将 base 赋值到正确位置
    }
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
insertionSort(nums);
console.log('插入排序完成后 nums =', nums);

export { };
