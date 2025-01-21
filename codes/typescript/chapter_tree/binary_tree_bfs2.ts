/**
 * File: binary_tree_bfs.ts
 * Created Time: 2022-12-14
 * Author: Justin (xiefahit@gmail.com)
 */

import { type TreeNode } from '../modules/TreeNode';
import { arrToTree } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';


function levelOrder(root: TreeNode | null): number[] {
    const queue = [root]
    const list: number[] = []
    let node: TreeNode
    while (node = queue.shift()) {
        list.push(node.val)

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return list

}

// 1,2,3,4,5,6,7

/* Driver Code */
/* 初始化二叉树 */
// 这里借助了一个从数组直接生成二叉树的函数
const root = arrToTree([1, 2, 8, 3, 4, 5, 6, 7]);
console.log('\n初始化二叉树\n');
printTree(root);

/* 层序遍历 */
const list = levelOrder(root);
console.log('\n层序遍历的节点打印序列 = ' + list);

export { };
