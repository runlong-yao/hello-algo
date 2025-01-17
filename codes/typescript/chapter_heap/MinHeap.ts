import { printHeap } from '../modules/PrintUtil';


//小顶堆
export class MinHeap {
    private heap: number[] = []
    constructor(nums: number[]) {
        this.heap = [...nums]

        this.buildHeap()
    }

    private buildHeap() {
        let heap = this.heap
        let max = this.heap.length
        for (let i = heap.length - 1; i >= 0; i--) {

            if ((this.left(i) >= max) &&
                (this.right(i) >= max))
                continue


            this.siftDown(i)
        }
    }

    push(i: number) {
        this.heap.push(i)

        this.siftUp(this.heap.length - 1)
    }

    pop() {
        if (this.isEmpty()) throw "no value in heap"

        let top = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()

        this.siftDown(0)

        return top
    }

    peek() {
        if (this.isEmpty()) throw "no value in heap"
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.heap.length === 0
    }

    /* 取出堆中元素 */
    getMaxHeap(): number[] {
        return this.heap;
    }

    private swap(i, j) {
        let tmp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = tmp
    }

    private siftUp(i: number) {
        let heap = this.heap
        let p = this.parent(i)
        if (p < 0 || heap[p] <= heap[i]) return

        this.swap(i, p)

        return this.siftUp(p)
    }

    private siftDown(i: number) {
        let heap = this.heap
        let edgeIndex = heap.length
        let swapIndex = i,
            l = this.left(i),
            r = this.right(i)

        if (l < edgeIndex && (heap[l] < heap[swapIndex])) swapIndex = l

        if (r < edgeIndex && (heap[r] < heap[swapIndex])) swapIndex = r

        if (i === swapIndex) return

        this.swap(i, swapIndex)

        return this.siftDown(swapIndex)
    }


    /* 获取左子节点的索引 */
    private left(i: number): number {
        return 2 * i + 1;
    }

    /* 获取右子节点的索引 */
    private right(i: number): number {
        return 2 * i + 2;
    }

    /* 获取父节点的索引 */
    private parent(i: number): number {
        return Math.floor((i - 1) / 2); // 向下整除
    }

    /* 打印堆（二叉树） */
    public print(): void {

        printHeap(this.heap);
    }
}


function doTest() {

    /* Driver Code */
    // if (import.meta.url.endsWith(process.argv[1])) {
    /* 初始化大顶堆 */
    const maxHeap = new MinHeap([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    console.log('\n输入列表并建堆后');
    maxHeap.print();

    /* 获取堆顶元素 */
    let peek = maxHeap.peek();
    console.log(`\n堆顶元素为 ${peek}`);

    /* 元素入堆 */
    const val = 3;
    maxHeap.push(val);
    console.log(`\n元素 ${val} 入堆后`);
    maxHeap.print();

    /* 堆顶元素出堆 */
    peek = maxHeap.pop();
    console.log(`\n堆顶元素 ${peek} 出堆后`);
    maxHeap.print();

    /* 获取堆大小 */
    const size = maxHeap.size();
    console.log(`\n堆元素数量为 ${size}`);

    /* 判断堆是否为空 */
    const isEmpty = maxHeap.isEmpty();
    console.log(`\n堆是否为空 ${isEmpty}`);
}

doTest()
