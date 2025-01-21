/**
 * File: avl_tree.ts
 * Created Time: 2023-02-06
 * Author: Justin (xiefahit@gmail.com)
 */

import { TreeNode } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';


//    5
//  1   9
// 0 2  
//    3


//      5
//    2  9
//  1  3
// 0    


//    2
//   1  5
// 0   3  9

/* AVL 树*/
class AVLTree {
    root: TreeNode;
    /* 构造方法 */
    constructor() {
        this.root = null; //根节点
    }

    /* 获取节点高度 */
    height(node: TreeNode): number {
        // 空节点高度为 -1 ，叶节点高度为 0
        return node === null ? -1 : node.height;
    }

    /* 更新节点高度 */
    private updateHeight(node: TreeNode): void {
        // 节点高度等于最高子树高度 + 1
        node.height =
            Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    /* 获取平衡因子 */
    balanceFactor(node: TreeNode): number {
        // 空节点平衡因子为 0
        if (node === null) return 0;
        // 节点平衡因子 = 左子树高度 - 右子树高度
        return this.height(node.left) - this.height(node.right);
    }


    //     7
    //    2  8
    //   4 5

    //    2
    //  4   7
    //    5   8

    /* 右旋操作 */
    private rightRotate(node: TreeNode): TreeNode {
        let newRoot = node.left

        //newRoot的右节点成为node左叶节点
        node.left = newRoot.right

        //右旋
        newRoot.right = node;

        this.updateHeight(node)
        this.updateHeight(newRoot)

        return newRoot
    }

    /* 左旋操作 */
    private leftRotate(node: TreeNode): TreeNode {
        let newRoot = node.right

        //与右旋堆成

        //newRoot的左节点成为node右叶节点
        node.right = newRoot.left

        //左旋
        newRoot.left = node;

        this.updateHeight(node)
        this.updateHeight(newRoot)

        return newRoot
    }

    /* 执行旋转操作，使该子树重新恢复平衡 */
    private rotate(node: TreeNode): TreeNode {
        let factor = this.balanceFactor(node)
        if (factor > 1) {
            if (this.balanceFactor(node.left) < 0) {
                node.left = this.leftRotate(node.left)
            }

            node = this.rightRotate(node)

        } else if (factor < -1) {
            //对称
            if (this.balanceFactor(node.right) > 0) {
                node.right = this.rightRotate(node.right)
            }
            node = this.leftRotate(node)
        }

        return node

    }

    // 1 
    //    2 
    //      3
    /* 插入节点 */
    insert(val: number): void {

        this.root = this.insertHelper(this.root, val)
    }

    /* 递归插入节点（辅助方法） */
    private insertHelper(node: TreeNode, val: number): TreeNode {
        if (!node) return new TreeNode(val)

        if (val > node.val) {
            node.right = this.insertHelper(node.right, val)

        }
        else if (val < node.val) {
            node.left = this.insertHelper(node.left, val)
        }
        else
            return node


        node = this.rotate(node)

        this.updateHeight(node)

        return node
    }

    /* 删除节点 */
    remove(val: number): void {
        this.root = this.removeHelper(this.root, val)
    }
    //       5
    //    3   9
    //  1   4 8
    // 0  2  


    //   5
    // 1  9
    //0 2
    // 3
    //  X
    /* 递归删除节点（辅助方法） */
    private removeHelper(node: TreeNode, val: number): TreeNode {

        if (val > node.val) node.right = this.removeHelper(node.right, val)
        else if (val < node.val) node.left = this.removeHelper(node.left, val)
        else {
            console.log(node.val, val);

            if (node.left === null || node.right === null) {
                let child = node.left ?? node.right
                if (child) {
                    node = child
                } else {

                    return null
                }
            } else {
                let tmp = node.right
                while (tmp.left) tmp = tmp.left

                //从右子树上删除tmp节点
                node.right = this.removeHelper(node.right, tmp.val)


                node.val = tmp.val
            }
        }


        this.updateHeight(node)


        node = this.rotate(node)


        return node;
    }

    /* 查找节点 */
    search(val: number): TreeNode {
        let node = this.root
        while (node) {
            if (val > node.val) node = node.right
            else if (val < node.val) node = node.left
            else return node
        }

        throw "未搜索到"

    }
}

function testInsert(tree: AVLTree, val: number): void {
    tree.insert(val);
    console.log('\n插入节点 ' + val + ' 后，AVL 树为');
    printTree(tree.root);
}

function testRemove(tree: AVLTree, val: number): void {
    tree.remove(val);
    console.log('\n删除节点 ' + val + ' 后，AVL 树为');
    printTree(tree.root);
}

/* Driver Code */
/* 初始化空 AVL 树 */
const avlTree = new AVLTree();
/* 插入节点 */
// 请关注插入节点后，AVL 树是如何保持平衡的
testInsert(avlTree, 1);
testInsert(avlTree, 2);
testInsert(avlTree, 3);
testInsert(avlTree, 4);
testInsert(avlTree, 5);
testInsert(avlTree, 8);
testInsert(avlTree, 7);
testInsert(avlTree, 9);
testInsert(avlTree, 10);
testInsert(avlTree, 6);

/* 插入重复节点 */
testInsert(avlTree, 7);

// /* 删除节点 */
// // 请关注删除节点后，AVL 树是如何保持平衡的
testRemove(avlTree, 8); // 删除度为 0 的节点
testRemove(avlTree, 5); // 删除度为 1 的节点
testRemove(avlTree, 4); // 删除度为 2 的节点

// /* 查询节点 */
const node = avlTree.search(7);
console.log('\n查找到的节点对象为', node, '，节点值 = ' + node.val);

export { };

// 插入节点 1 后，AVL 树为
// ——— 1

// 插入节点 2 后，AVL 树为
//     /——— 2
// ——— 1

// 插入节点 3 后，AVL 树为
//     /——— 3
// ——— 2
//     \——— 1

// 插入节点 4 后，AVL 树为
//         /——— 4
//     /——— 3
// ——— 2
//     \——— 1

// 插入节点 5 后，AVL 树为
//         /——— 5
//     /——— 4
//    |    \——— 3
// ——— 2
//     \——— 1

// 插入节点 8 后，AVL 树为
//         /——— 8
//     /——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 插入节点 7 后，AVL 树为
//         /——— 8
//     /——— 7
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 插入节点 9 后，AVL 树为
//             /——— 9
//         /——— 8
//     /——— 7
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 插入节点 10 后，AVL 树为
//             /——— 10
//         /——— 9
//        |    \——— 8
//     /——— 7
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 插入节点 6 后，AVL 树为
//             /——— 10
//         /——— 9
//        |    \——— 8
//     /——— 7
//    |   |    /——— 6
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 插入节点 7 后，AVL 树为
//             /——— 10
//         /——— 9
//        |    \——— 8
//     /——— 7
//    |   |    /——— 6
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 删除节点 8 后，AVL 树为
//             /——— 10
//         /——— 9
//     /——— 7
//    |   |    /——— 6
//    |    \——— 5
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 删除节点 5 后，AVL 树为
//             /——— 10
//         /——— 9
//     /——— 7
//    |    \——— 6
// ——— 4
//    |    /——— 3
//     \——— 2
//         \——— 1

// 删除节点 4 后，AVL 树为
//         /——— 10
//     /——— 9
//    |    \——— 7
// ——— 6
//    |    /——— 3
//     \——— 2
//         \——— 1