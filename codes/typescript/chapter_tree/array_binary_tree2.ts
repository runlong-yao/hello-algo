/**
 * File: array_binary_tree.js
 * Created Time: 2023-08-09
 * Author: yuan0221 (yl1452491917@gmail.com)
 */

import { arrToTree } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';

type Order = 'pre' | 'in' | 'post';

/* 数组表示下的二叉树类 */
class ArrayBinaryTree {
    #tree: (number | null)[];

    /* 构造方法 */
    constructor(arr: (number | null)[]) {
        this.#tree = arr;
    }

    /* 列表容量 */
    size(): number {
        return this.#tree.length;
    }

    /* 获取索引为 i 节点的值 */
    val(i: number): number | null {
        return this.#tree[i] ?? null
    }

    /* 获取索引为 i 节点的左子节点的索引 */
    left(i: number): number {
        return 2 * i + 1
    }

    /* 获取索引为 i 节点的右子节点的索引 */
    right(i: number): number {
        return 2 * i + 2

    }

    /* 获取索引为 i 节点的父节点的索引 */
    parent(i: number): number {
        return Math.floor((i - 1) / 2)

    }

    /* 层序遍历 */
    levelOrder(): number[] {
        return this.#tree
    }

    /* 深度优先遍历 */
    #dfs(i: number, order: Order, res: (number | null)[]): void {

        if (i >= this.#tree.length) return

        switch (order) {
            case 'pre': {
                res.push(this.#tree[i])
                this.#dfs(this.left(i), order, res)
                this.#dfs(this.right(i), order, res)
                break;
            }
            case 'in': {
                this.#dfs(this.left(i), order, res)
                res.push(this.#tree[i])
                this.#dfs(this.right(i), order, res)
                break;
            }
            case 'post': {
                this.#dfs(this.left(i), order, res)
                this.#dfs(this.right(i), order, res)
                res.push(this.#tree[i])
                break;
            }
        }


    }

    /* 前序遍历 */
    preOrder(): (number | null)[] {
        let list: number[]

        this.#dfs(0, 'pre', (list = []))

        return list
    }

    /* 中序遍历 */
    inOrder(): (number | null)[] {
        let list: number[]

        this.#dfs(0, 'in', (list = []))

        return list
    }

    /* 后序遍历 */
    postOrder(): (number | null)[] {
        let list: number[]

        this.#dfs(0, 'post', (list = []))

        return list
    }
}

/* Driver Code */
// 初始化二叉树
// 这里借助了一个从数组直接生成二叉树的函数
const arr = Array.of(
    1,
    2,
    3,
    4,
    null,
    6,
    7,
    8,
    9,
    null,
    null,
    12,
    null,
    null,
    15
);

const root = arrToTree(arr);
console.log('\n初始化二叉树\n');
console.log('二叉树的数组表示：');
console.log(arr);
console.log('二叉树的链表表示：');
printTree(root);

// 数组表示下的二叉树类
const abt = new ArrayBinaryTree(arr);

// 访问节点
const i = 1;
const l = abt.left(i);
const r = abt.right(i);
const p = abt.parent(i);
console.log('\n当前节点的索引为 ' + i + ' ，值为 ' + abt.val(i));
console.log(
    '其左子节点的索引为 ' + l + ' ，值为 ' + (l === null ? 'null' : abt.val(l))
);
console.log(
    '其右子节点的索引为 ' + r + ' ，值为 ' + (r === null ? 'null' : abt.val(r))
);
console.log(
    '其父节点的索引为 ' + p + ' ，值为 ' + (p === null ? 'null' : abt.val(p))
);

// 遍历树
let res = abt.levelOrder();
console.log('\n层序遍历为：' + res);
res = abt.preOrder();
console.log('前序遍历为：' + res);
res = abt.inOrder();
console.log('中序遍历为：' + res);
res = abt.postOrder();
console.log('后序遍历为：' + res);

export { };
