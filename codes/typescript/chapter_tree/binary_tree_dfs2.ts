/**
 * File: binary_tree.ts
 * Created Time: 2022-12-13
 * Author: Justin (xiefahit@gmail.com)
 */

import { TreeNode, arrToTree } from '../modules/TreeNode';
import { printTree } from '../modules/PrintUtil';

/* 初始化二叉树 */
// 初始化节点




const root = arrToTree([1, 2, 3, 4, 5])
printTree(root)
// /——— 3
// ——— 1
//    |    /——— 5
//     \——— 2
//         \——— 4

let list: Array<number> = []
//4 2 5 1 3
function preOrder(root: TreeNode) {
    list.push(root.val)

    root.left && preOrder(root.left)

    root.right && preOrder(root.right)
}

preOrder(root)
console.log("前续遍历:", list);


//3 1 2 5 4
function postOrder(root: TreeNode) {
    root.left && postOrder(root.left)
    root.right && postOrder(root.right)

    list.push(root.val)

}

list = []
postOrder(root)
console.log("后续遍历:", list);

//1 2 4 5 3
function inOrder(root: TreeNode) {
    root.left && inOrder(root.left)
    list.push(root.val)
    root.right && inOrder(root.right)
}
list = []
inOrder(root)
console.log("中续遍历:", list);

export { };
