/**
 * File: binary_tree_dfs.ts
 * Created Time: 2022-12-14
 * Author: Justin (xiefahit@gmail.com)
 */

import { type TreeNode } from '../modules/TreeNode';
import { arrToTree } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';

// 初始化列表，用于存储遍历序列
const list: number[] = [];

/* 前序遍历 */
function preOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级：根节点 -> 左子树 -> 右子树
    list.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

/* 中序遍历 */
function inOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级：左子树 -> 根节点 -> 右子树
    inOrder(root.left);
    list.push(root.val);
    inOrder(root.right);
}

/* 后序遍历 */
function postOrder(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    // 访问优先级：左子树 -> 右子树 -> 根节点
    postOrder(root.left);
    postOrder(root.right);
    list.push(root.val);
}

/* Driver Code */
/* 初始化二叉树 */
// 这里借助了一个从数组直接生成二叉树的函数
const root = arrToTree([1, 2, 3, 4, 5]);
console.log('\n初始化二叉树\n');
printTree(root);

/* 前序遍历 */
list.length = 0;
preOrder(root);
console.log('\n前序遍历的节点打印序列 = ' + list);

/* 中序遍历 */
list.length = 0;
inOrder(root);
console.log('\n中序遍历的节点打印序列 = ' + list);

/* 后序遍历 */
list.length = 0;
postOrder(root);
console.log('\n后序遍历的节点打印序列 = ' + list);

export { };
