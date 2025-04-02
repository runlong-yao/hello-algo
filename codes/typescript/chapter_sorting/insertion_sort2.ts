/**
 * File: insertion_sort.ts
 * Created Time: 2022-12-12
 * Author: Justin (xiefahit@gmail.com)
 */

// 12453
/* 插入排序 */
function insertionSort(nums: number[]): void {
    for (let i = 1; i < nums.length; i++) {
        let base = nums[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (base > nums[j])
                break

            nums[j + 1] = nums[j]
        }

        nums[j + 1] = base
    }


}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
insertionSort(nums);
console.log('插入排序完成后 nums =', nums);

export { };
