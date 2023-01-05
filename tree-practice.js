const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
if (rootNode.left) return findMinBST(rootNode.left)
return rootNode.val


}

function findMaxBST (rootNode) {
  // Your code here
  if (rootNode.right) return findMaxBST(rootNode.right)
  return rootNode.val
}

function findMinBT (rootNode) {

  // if right or left = null stop
  /*----------------recusion------------------------------- */
  // if (rootNode === null ) return
  // let res = rootNode.val;
  // let left = findMinBT(rootNode.left);

  // let right = findMinBT(rootNode.right);

  // if (left < res) {
  //   res = left
  // }
  // if (right < res) {
  //   res = right;
  // }
  // return res
/**-------------Iteration-------------------------- */
if (!rootNode) return;
const queue = [];
const arr = [];
queue.push(rootNode);
while (queue.length) {
  const curr = queue.shift();
  // DO THE THING!!!
  arr.push(curr.val)

  Math.min(...arr)

  if (curr.left) queue.push(curr.left);
  if (curr.right) queue.push(curr.right);


}
console.log(Math.min(...arr))
return Math.min(...arr) ;
}

function findMaxBT (rootNode) {
  // Your code here
  //use Math.max
//   if (!rootNode) return;
// const queue = [];
// const arr = [];
// queue.push(rootNode);
// while (queue.length) {
//   const curr = queue.shift();
//   // DO THE THING!!!
//   arr.push(curr.val)

//   Math.max(...arr)

//   if (curr.left) queue.push(curr.left);
//   if (curr.right) queue.push(curr.right);


// }
// console.log(Math.max(...arr))
// return Math.max(...arr) ;

/* --------------------recusion-------------------------- */

if (rootNode === null) return;

let res = rootNode.val
let left = findMaxBT(rootNode.left)
let right = findMaxBT(rootNode.right)

if (left > res) res = left
if (right > res) res = right

return res
}

function getHeight (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
