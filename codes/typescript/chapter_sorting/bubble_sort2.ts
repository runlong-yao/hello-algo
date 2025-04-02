
function bubbleSort(nums: number[]): void {
    for (let i = 0; i < nums.length - 1; i++) {
        let hasMove = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] <= nums[j + 1]) continue

            let tmp = nums[j]
            nums[j] = nums[j + 1]
            nums[j + 1] = tmp

            hasMove = true
        }

        if (!hasMove) break
    }
}


function bubbleSortWithFlag(nums: number[]): void {
    for (let i = 0; i < nums.length - 1; i++) {
        let hasMove = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] <= nums[j + 1]) continue

            let tmp = nums[j]
            nums[j] = nums[j + 1]
            nums[j + 1] = tmp

            hasMove = true
        }

        if (!hasMove) break
    }
}


/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
bubbleSort(nums);
console.log('冒泡排序完成后 nums =', nums);

const nums1 = [4, 1, 3, 1, 5, 2];
bubbleSortWithFlag(nums1);
console.log('冒泡排序完成后 nums =', nums1);

export { };

