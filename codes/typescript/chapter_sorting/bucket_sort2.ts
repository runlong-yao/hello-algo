/**
 * File: bucket_sort.ts
 * Created Time: 2023-04-08
 * Author: Justin (xiefahit@gmail.com)
 */

/* 桶排序 */
function bucketSort(nums: number[]): void {
    let bucketRange = 0.2, bucketSize = 5
    let buckets = Array.from({ length: bucketSize }).map(() => [])
    let range: Array<number> = []

    for (let i = 0; i < bucketSize; i++) {
        range.push((i + 1) * bucketRange)
    }

    for (let num of nums) {
        let index = 0
        while (index < bucketSize) {
            if (num <= range[index]) break

            index++
        }

        buckets[index].push(num)
    }

    let index = 0
    for (let bucket of buckets) {
        const sorted = bucket.sort()

        for (let i of sorted) {
            nums[index] = i
            index++;
        }
    }

}

/* Driver Code */
const nums = [0.49, 0.96, 0.82, 0.09, 0.57, 0.43, 0.91, 0.75, 0.15, 0.37];
bucketSort(nums);
console.log('桶排序完成后 nums =', nums);

export { };
