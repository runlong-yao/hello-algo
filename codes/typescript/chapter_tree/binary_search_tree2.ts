/**
 * File: binary_search_tree.ts
 * Created Time: 2022-12-14
 * Author: Justin (xiefahit@gmail.com)
 */

import { TreeNode } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';

//左节点<根<右节点

//  1
//2   4
/* 二叉搜索树 */
class BinarySearchTree {
    private root: TreeNode | null;

    /* 构造方法 */
    constructor() {
        // 初始化空树
        this.root = null;
    }

    insert(num: number) {
        let insertNode: TreeNode = this.root

        while (insertNode) {

            if (insertNode.val === num) throw "重复值"

            if (insertNode.val > num) {
                if (insertNode.left) {
                    insertNode = insertNode.left
                    continue
                }

                break
            } else if (insertNode.val < num) {
                if (insertNode.right) {
                    insertNode = insertNode.right
                    continue
                }

                break;
            }

        }

        if (!insertNode) {
            this.root = new TreeNode(num)
            return
        }

        if (insertNode.val > num) insertNode.left = new TreeNode(num)

        else if (insertNode.val < num) insertNode.right = new TreeNode(num)
    }

    getRoot() {
        return this.root
    }


    search(num: number) {
        let cur = this.root
        while (cur) {
            if (cur.val === num) {
                break;
            } else if (cur.val > num) {
                cur = cur.left
            } else {
                cur = cur.right
            }
        }

        return cur
    }

    remove(num: number) {
        let cur = this.root
        let pre: TreeNode = null
        while (cur) {
            if (cur.val === num) {
                break;
            } else if (cur.val > num) {
                pre = cur
                cur = cur.left
            } else {
                pre = cur
                cur = cur.right
            }
        }

        if (!cur) return

        if (!pre) this.root = null

        switch (cur.height) {
            case 0: {
                let isLeft = pre?.left.val === cur.val
                isLeft ? (pre.left = null) : (pre.right = null)
                break
            }
            case 1: {
                let isLeft = pre?.left.val === cur.val
                const nex = cur.left ?? cur.right
                isLeft ? pre.left = nex : pre.right = nex
                break;
            }
            case 2: {
                //寻找右子树的最左节点，将其值设置到cur，并删除最左节点
                let pre = cur
                let max = cur.right

                while (true) {
                    if (!max.left)
                        break;

                    pre = max
                    max = max.left
                }

                pre.left = null
                cur.val = max.val
                break;
            }
        }


    }
}

/* Driver Code */
/* 初始化二叉搜索树 */
const bst = new BinarySearchTree();
// 请注意，不同的插入顺序会生成不同的二叉树，该序列可以生成一个完美二叉树
const nums = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];
for (const num of nums) {
    bst.insert(num);
}

console.log('\n初始化的二叉树为\n');
printTree(bst.getRoot());

/* 查找节点 */
const node = bst.search(7);
console.log(
    '\n查找到的节点对象为 ' + node + '，节点值 = ' + (node ? node.val : 'null')
);

/* 插入节点 */
bst.insert(16);
console.log('\n插入节点 16 后，二叉树为\n');
printTree(bst.getRoot());

/* 删除节点 */
bst.remove(1);
console.log('\n删除节点 1 后，二叉树为\n');
printTree(bst.getRoot());
bst.remove(2);
console.log('\n删除节点 2 后，二叉树为\n');
printTree(bst.getRoot());
bst.remove(4);
console.log('\n删除节点 4 后，二叉树为\n');
printTree(bst.getRoot());

export { };
