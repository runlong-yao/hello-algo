/**
 * File: merge_sort.ts
 * Created Time: 2022-12-12
 * Author: Justin (xiefahit@gmail.com)
 */

/* 合并左子数组和右子数组 */
function merge(nums: number[], left: number, mid: number, right: number): void {
    let i = left, j = mid + 1
    let store: Array<number> = Array.from({ length: right - left + 1 })
    let index = 0

    while (i <= mid && j <= right) {
        if (nums[i] < nums[j]) {
            store[index] = nums[i]
            i++
        } else {
            store[index] = nums[j]
            j++;
        }

        index++
    }

    while (i <= mid) {
        store[index] = nums[i]
        i++
        index++
    }


    while (j <= right) {
        store[index] = nums[j]
        j++
        index++
    }


    let count = 0
    for (let i = left; i <= right; i++) {
        nums[i] = store[count]
        count++
    }
}


/* 归并排序 */
function mergeSort(nums: number[], left: number, right: number): void {

    if (left === right) return
    if (right - left === 1) {
        if (nums[left] > nums[right]) {
            let tmp = nums[left]
            nums[left] = nums[right]
            nums[right] = tmp
        }

        return
    }



    let mid = Math.floor((right - left) / 2) + left

    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    merge(nums, left, mid, right)
}

/* Driver Code */
try {
    const nums = [7, 3, 2, 6, 0, 1, 5, 4];
    console.log('原始数组', nums);
    mergeSort(nums, 0, nums.length - 1);

    console.log('归并排序完成后 nums =', nums);
}
finally {


}


export { };
