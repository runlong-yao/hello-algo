/**
 * File: quick_sort.ts
 * Created Time: 2022-12-12
 * Author: Justin (xiefahit@gmail.com)
 */
//[0,2], 0,1
function splitter(nums: number[], left: number, right: number) {
    if (nums.length === 0) return

    let i = left + 1, j = right


    while (i < j) {
        while (i < j && nums[j] >= nums[left]) {
            j -= 1; // 从右向左找首个小于基准数的元素
        }


        while (i < j && nums[i] <= nums[left]) {
            i += 1; // 从左向右找首个大于基准数的元素
        }


        if (i > -1 && j > -1) {
            let tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }


    }




    let tmp = nums[i]
    nums[i] = nums[left]
    nums[left] = tmp

    console.log([nums, nums.slice(left, right + 1), i])

    return i
}

function quickSort(nums: number[], left: number, right: number) {

    let mid = splitter(nums, left, right)

    if (left < mid - 1)
        quickSort(nums, left, mid - 1)

    if (right > mid + 1)
        quickSort(nums, mid + 1, right)
}

/* Driver Code */
/* 快速排序  */
const nums = [2, 4, 1, 0, 3, 5];
console.log('原始数组', nums)
quickSort(nums, 0, nums.length - 1);

console.log('快速排序完成后 nums =', nums);

// /* 快速排序（中位基准数优化） */
// const nums1 = [2, 4, 1, 0, 3, 5];
// const quickSortMedian = new QuickSortMedian();
// quickSortMedian.quickSort(nums1, 0, nums1.length - 1);
// console.log('快速排序（中位基准数优化）完成后 nums =', nums1);

// /* 快速排序（尾递归优化） */
// const nums2 = [2, 4, 1, 0, 3, 5];
// const quickSortTailCall = new QuickSortTailCall();
// quickSortTailCall.quickSort(nums2, 0, nums2.length - 1);
// console.log('快速排序（尾递归优化）完成后 nums =', nums2);

export { };
