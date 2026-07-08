import { Course } from "@/types";

export const dsaCourse: Course = {
  id: "dsa",
  title: "Data Structures & Algorithms",
  description: "Data Structures aur Algorithms ko seekhein. Arrays, Linked Lists, Trees, Graphs, Sorting, Searching ke saath.",
  longDescription: "Data Structures aur Algorithms ko Roman English mein seekhein. Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, aur interview questions.",
  lessonsCount: 15,
  duration: "6 hours",
  category: "programming-languages",
  difficulty: "intermediate",
  icon: "git-branch",
  color: "purple",
  modules: [
    {
      id: "dsa-basics",
      title: "DSA Basics aur Advanced Topics",
      description: "Data Structures aur Algorithms ka complete guide.",
      order: 1,
      lessons: [
        {
          id: "dsa-intro",
          title: "Arrays aur Strings",
          description: "Arrays, strings aur sliding window techniques seekhenge.",
          order: 1,
          content: {
            introduction: "Arrays aur Strings fundamental data structures hain. Array operations, string manipulation, sliding window, two-pointer techniques seekhenge.",
            sections: [
              {
                title: "Array Basics",
                explanation: "Array contiguous memory allocation. O(1) access by index. Static vs dynamic arrays. JavaScript Arrays dynamic hain. Insertion/Deletion O(n). Array methods: push, pop, shift, unshift, splice, slice.",
                example: "let arr = [1, 2, 3, 4, 5];\narr.push(6); arr.pop();\narr.unshift(0); arr.shift();\n\n// Two pointer reverse\nfunction reverseArray(arr) {\n  let l = 0, r = arr.length - 1;\n  while (l < r) {\n    [arr[l], arr[r]] = [arr[r], arr[l]];\n    l++; r--;\n  }\n  return arr;\n}"
              },
              {
                title: "String Manipulation",
                explanation: "Strings immutable in JS. split(), join(), substring(), slice(), replace(), trim(). Character codes. Anagram, palindrome, subsequence problems.",
                example: "function isPalindrome(str) {\n  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return str === str.split('').reverse().join('');\n}\n\nfunction isAnagram(s1, s2) {\n  return s1.split('').sort().join('') === s2.split('').sort().join('');\n}"
              },
              {
                title: "Sliding Window",
                explanation: "Sliding window contiguous subarrays/substrings solve karta hai. O(n^2) brute force ko O(n) mein improve. Fixed vs variable window.",
                example: "function maxSumSubarray(arr, k) {\n  let maxSum = 0, windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}"
              }
            ],
            codeExamples: [
              {
                title: "Two Sum Problem",
                language: "python",
                code: "function twoSum(arr, target) {\n  let map = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    let complement = target - arr[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(arr[i], i);\n  }\n  return [-1, -1];\n}\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]"
              }
            ],
            notes: [
              "Array access O(1), insertion/deletion O(n).",
              "Strings immutable hain, har operation new string banata hai.",
              "Sliding window O(n^2) se O(n) improve karta hai.",
              "Two-pointer sorted arrays ke liye useful."
            ],
            commonMistakes: [
              { mistake: "Array bounds exceed karna", correction: "Hamesha length check karein: arr[i] !== undefined" },
              { mistake: "String methods mutating samajhna", correction: "Strings immutable, hamesha new value assign karein." }
            ],
            interviewQuestions: [
              "Array vs Linked List?",
              "Sliding window kab use karein?"
            ],
            practiceExercises: [
              { question: "Array mein duplicate find karo without extra space.", hint: "Sort karo ya cyclic sort pattern use karo.", difficulty: "medium" },
              { question: "Longest palindrome substring find karo.", hint: "Expand around center technique.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-dsa-intro",
              title: "Arrays & Strings Quiz",
              questions: [
                { id: "q1", question: "Array access time complexity?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: 0, explanation: "Array mein index ke through access O(1) hota hai kyunki contiguous memory allocation hota hai." },
                { id: "q2", question: "Two Sum optimal approach?", options: ["Brute force", "HashMap", "Sort + Binary Search", "Two pointer"], correctAnswer: 1, explanation: "HashMap approach O(n) time mein kaam karta hai, har element ka complement store karke." },
                { id: "q3", question: "String immutable matlab?", options: ["Modify kar sakte", "Naya value assign karna padega", "Fast operation", "Mutable"], correctAnswer: 1, explanation: "Immutable string ka matlab hai ki original string change nahi ho sakti, naya string banana padta hai." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "dsa-linkedlist",
          title: "Linked Lists aur Stacks",
          description: "Linked lists, stacks aur LIFO data structures seekhenge.",
          order: 2,
          content: {
            introduction: "Linked Lists (singly, doubly) aur Stacks (LIFO) data structures seekhenge. Implementation, operations, common problems.",
            sections: [
              {
                title: "Singly Linked List",
                explanation: "LL node = data + next pointer. Head node entry. Insert/Delete O(1) at head, O(n) at tail. Search O(n). Reverse LL, detect cycle, find middle.",
                example: "class ListNode {\n  constructor(val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nfunction reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    let next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}\n\nfunction hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}"
              },
              {
                title: "Stack (LIFO)",
                explanation: "Stack Last-In-First-Out. push(), pop(), peek(), isEmpty(). Use cases: undo/redo, expression eval, DFS, balanced parentheses.",
                example: "class Stack {\n  constructor() { this.items = []; }\n  push(val) { this.items.push(val); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\n\nfunction isValid(s) {\n  let stack = [];\n  let map = { ')': '(', '}': '{', ']': '[' };\n  for (let ch of s) {\n    if ('({['.includes(ch)) stack.push(ch);\n    else if (stack.pop() !== map[ch]) return false;\n  }\n  return stack.length === 0;\n}"
              },
              {
                title: "Common LL Problems",
                explanation: "Detect cycle (Floyd's algorithm). Remove nth from end. Merge two sorted lists. Intersection of two LL. Fast/slow pointer pattern.",
                example: "function mergeTwoLists(l1, l2) {\n  let dummy = new ListNode(0);\n  let curr = dummy;\n  while (l1 && l2) {\n    if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }\n    else { curr.next = l2; l2 = l2.next; }\n    curr = curr.next;\n  }\n  curr.next = l1 || l2;\n  return dummy.next;\n}"
              }
            ],
            codeExamples: [
              {
                title: "LRU Cache",
                language: "python",
                code: "class LRUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    this.cache = new Map();\n  }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    let val = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    else if (this.cache.size >= this.cap) {\n      let lru = this.cache.keys().next().value;\n      this.cache.delete(lru);\n    }\n    this.cache.set(key, value);\n  }\n}"
              }
            ],
            notes: [
              "LL insertion/deletion O(1) at head, O(n) at tail.",
              "Stack LIFO, Queue FIFO.",
              "Fast/slow pointer cycle detection ka standard pattern.",
              "Dummy node edge cases simplify karta hai."
            ],
            commonMistakes: [
              { mistake: "LL mein null pointer reference", correction: "node?.next ya node && node.next check karein." },
              { mistake: "Stack empty hone par pop karna", correction: "pop() se pehle isEmpty() check karein." }
            ],
            interviewQuestions: [
              "Array vs Stack implementation?",
              "LL cycle detection algorithm?"
            ],
            practiceExercises: [
              { question: "Singly LL reverse karo (iterative + recursive).", hint: "3 pointers: prev, curr, next.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-dsa-linkedlist",
              title: "Linked Lists & Stacks Quiz",
              questions: [
                { id: "q1", question: "Stack principle?", options: ["FIFO", "LIFO", "LILO", "FILO"], correctAnswer: 1, explanation: "Stack LIFO (Last-In-First-Out) principle par kaam karta hai - last jo add hoga, wahi pehle nikalega." },
                { id: "q2", question: "Cycle detection space?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: 2, explanation: "Floyd's cycle detection algorithm O(1) extra space use karta hai - sirf slow aur fast pointers." },
                { id: "q3", question: "LL search time?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctAnswer: 1, explanation: "Linked List mein search O(n) hai kyunki random access nahi hai, sequentially traverse karna padta hai." }
              ]
            }
          },
          duration: "20 min"
        },
        {
          id: "dsa-queues-trees",
          title: "Queues aur Trees",
          description: "Queues, trees aur BST data structures seekhenge.",
          order: 3,
          content: {
            introduction: "Queues (FIFO) aur Trees (Binary Tree, BST) data structures. BFS/DFS traversal, tree operations, priority queues.",
            sections: [
              {
                title: "Queue (FIFO)",
                explanation: "Queue First-In-First-Out. enqueue(), dequeue(). Array shift O(n), object-based O(1). Use cases: scheduling, BFS, print spooler.",
                example: "class Queue {\n  constructor() {\n    this.items = {};\n    this.front = 0;\n    this.rear = 0;\n  }\n  enqueue(val) { this.items[this.rear++] = val; }\n  dequeue() {\n    if (this.isEmpty()) return null;\n    let val = this.items[this.front];\n    delete this.items[this.front++];\n    return val;\n  }\n  isEmpty() { return this.front === this.rear; }\n}"
              },
              {
                title: "Binary Search Tree",
                explanation: "BST: left < root < right. Inorder traversal sorted order. Search O(log n) avg, O(n) worst. Insert/Delete O(log n). Recursive implementation.",
                example: "class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BST {\n  constructor() { this.root = null; }\n  insert(val) { this.root = this._insert(this.root, val); }\n  _insert(node, val) {\n    if (!node) return new TreeNode(val);\n    if (val < node.val) node.left = this._insert(node.left, val);\n    else node.right = this._insert(node.right, val);\n    return node;\n  }\n  search(val) {\n    let curr = this.root;\n    while (curr) {\n      if (val === curr.val) return true;\n      curr = val < curr.val ? curr.left : curr.right;\n    }\n    return false;\n  }\n  inorder(node = this.root, result = []) {\n    if (!node) return result;\n    this.inorder(node.left, result);\n    result.push(node.val);\n    this.inorder(node.right, result);\n    return result;\n  }\n}"
              },
              {
                title: "Tree Traversals",
                explanation: "DFS: Preorder (root, left, right), Inorder (left, root, right), Postorder (left, right, root). BFS: Level order using queue. Recursive vs iterative.",
                example: "function inorder(node) {\n  if (!node) return [];\n  return [...inorder(node.left), node.val, ...inorder(node.right)];\n}\n\nfunction levelOrder(root) {\n  if (!root) return [];\n  let queue = [root], result = [];\n  while (queue.length) {\n    let levelSize = queue.length;\n    let level = [];\n    for (let i = 0; i < levelSize; i++) {\n      let node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(level);\n  }\n  return result;\n}"
              }
            ],
            codeExamples: [
              {
                title: "Max Depth & Validate BST",
                language: "python",
                code: "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}\n\nfunction isValidBST(root, min = -Infinity, max = Infinity) {\n  if (!root) return true;\n  if (root.val <= min || root.val >= max) return false;\n  return isValidBST(root.left, min, root.val) &&\n         isValidBST(root.right, root.val, max);\n}\n\nfunction diameterOfBinaryTree(root) {\n  let max = 0;\n  function dfs(node) {\n    if (!node) return 0;\n    let left = dfs(node.left);\n    let right = dfs(node.right);\n    max = Math.max(max, left + right);\n    return 1 + Math.max(left, right);\n  }\n  dfs(root);\n  return max;\n}"
              }
            ],
            notes: [
              "Queue FIFO, BFS traversal mein use hota hai.",
              "BST inorder traversal sorted order deta hai.",
              "DFS stack use karta hai (recursion ya explicit).",
              "BFS queue use karta hai level order ke liye."
            ],
            commonMistakes: [
              { mistake: "BST mein duplicate values handle na karna", correction: "Define karo left <= root < right ya left < root <= right." },
              { mistake: "Queue mein shift() O(n) operation", correction: "Object-based implementation O(1) deta hai." }
            ],
            interviewQuestions: [
              "BFS vs DFS kab use karein?",
              "Balanced BST rotate kaise?"
            ],
            practiceExercises: [
              { question: "Binary tree ko mirror/invert karo.", hint: "Swap left and right children recursively.", difficulty: "medium" },
              { question: "BST se kth smallest element find karo.", hint: "Inorder traversal, O(k) time.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-dsa-queues-trees",
              title: "Queues & Trees Quiz",
              questions: [
                { id: "q1", question: "Queue principle?", options: ["LIFO", "FIFO", "LILO", "FILO"], correctAnswer: 1, explanation: "Queue FIFO (First-In-First-Out) principle par kaam karta hai - jo pehle aayega wahi pehle jayega." },
                { id: "q2", question: "BST inorder gives?", options: ["Sorted order", "Reverse order", "Level order", "Random"], correctAnswer: 0, explanation: "BST ka inorder traversal (left-root-right) sorted ascending order mein values return karta hai." },
                { id: "q3", question: "BFS uses which DS?", options: ["Stack", "Queue", "Heap", "Array"], correctAnswer: 1, explanation: "BFS (Breadth-First Search) queue data structure use karta hai level order traversal ke liye." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "dsa-graphs",
          title: "Graphs aur Sorting",
          description: "Graphs, sorting algorithms aur shortest path algorithms seekhenge.",
          order: 4,
          content: {
            introduction: "Graph data structures aur sorting algorithms. Graph representations, BFS/DFS, Dijkstra, topological sort. Quick sort, merge sort, heap sort.",
            sections: [
              {
                title: "Graph Representations",
                explanation: "Graph = vertices + edges. Directed vs undirected. Adjacency matrix O(V^2) space. Adjacency list O(V+E) space. HashMap/HashSet for adjacency.",
                example: "class Graph {\n  constructor() { this.adj = {}; }\n  addVertex(v) { if (!this.adj[v]) this.adj[v] = []; }\n  addEdge(u, v) { this.adj[u].push(v); this.adj[v].push(u); }\n  bfs(start) {\n    let visited = new Set(), queue = [start];\n    visited.add(start);\n    while (queue.length) {\n      let node = queue.shift();\n      console.log(node);\n      for (let n of this.adj[node]) {\n        if (!visited.has(n)) { visited.add(n); queue.push(n); }\n      }\n    }\n  }\n  dfs(start, visited = new Set()) {\n    visited.add(start); console.log(start);\n    for (let n of this.adj[start]) {\n      if (!visited.has(n)) this.dfs(n, visited);\n    }\n  }\n}"
              },
              {
                title: "Sorting Algorithms",
                explanation: "Quick Sort: pivot, partition, O(n log n) avg, O(n^2) worst. Merge Sort: divide & conquer, O(n log n), O(n) space. Heap Sort: O(n log n), O(1) space. Stability: merge stable.",
                example: "function quickSort(arr, low = 0, high = arr.length - 1) {\n  if (low < high) {\n    let pi = partition(arr, low, high);\n    quickSort(arr, low, pi - 1);\n    quickSort(arr, pi + 1, high);\n  }\n  return arr;\n}\nfunction partition(arr, low, high) {\n  let pivot = arr[high], i = low - 1;\n  for (let j = low; j < high; j++) {\n    if (arr[j] < pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }\n  }\n  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];\n  return i + 1;\n}\n\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  let mid = Math.floor(arr.length / 2);\n  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));\n}\nfunction merge(left, right) {\n  let result = [], i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) result.push(left[i++]);\n    else result.push(right[j++]);\n  }\n  return [...result, ...left.slice(i), ...right.slice(j)];\n}"
              },
              {
                title: "Dijkstra & Topological Sort",
                explanation: "Dijkstra: weighted shortest path, greedy. BFS: unweighted shortest path. Topological sort: DAG mein ordering. Kahn's algorithm.",
                example: "function dijkstra(graph, start) {\n  let dist = {};\n  let pq = [[0, start]];\n  for (let v in graph) dist[v] = Infinity;\n  dist[start] = 0;\n  while (pq.length) {\n    pq.sort((a, b) => a[0] - b[0]);\n    let [d, u] = pq.shift();\n    if (d > dist[u]) continue;\n    for (let [v, w] of graph[u]) {\n      if (dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n        pq.push([dist[v], v]);\n      }\n    }\n  }\n  return dist;\n}\n\nfunction topologicalSort(graph) {\n  let indegree = {};\n  for (let v in graph) {\n    indegree[v] = 0;\n    for (let n of graph[v]) indegree[n] = (indegree[n] || 0) + 1;\n  }\n  let queue = Object.keys(graph).filter(v => indegree[v] === 0);\n  let result = [];\n  while (queue.length) {\n    let v = queue.shift();\n    result.push(v);\n    for (let n of graph[v]) {\n      indegree[n]--;\n      if (indegree[n] === 0) queue.push(n);\n    }\n  }\n  return result;\n}"
              }
            ],
            codeExamples: [
              {
                title: "Number of Islands",
                language: "python",
                code: "function numIslands(grid) {\n  let count = 0;\n  for (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[0].length; j++) {\n      if (grid[i][j] === '1') { count++; dfs(grid, i, j); }\n    }\n  }\n  return count;\n}\nfunction dfs(grid, i, j) {\n  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;\n  grid[i][j] = '0';\n  dfs(grid, i+1, j); dfs(grid, i-1, j);\n  dfs(grid, i, j+1); dfs(grid, i, j-1);\n}\nconsole.log(numIslands([\n  ['1','1','0','0','0'],\n  ['1','1','0','0','0'],\n  ['0','0','1','0','0'],\n  ['0','0','0','1','1']\n])); // 3"
              }
            ],
            notes: [
              "Adjacency list space O(V+E) efficient.",
              "Quick sort average O(n log n), unstable.",
              "Merge sort O(n log n), stable, O(n) space.",
              "Dijkstra greedy shortest path, no negative edges.",
              "Topological sort works only on DAG."
            ],
            commonMistakes: [
              { mistake: "Dijkstra mein negative weights use karna", correction: "Negative edges ke liye Bellman-Ford use karein." },
              { mistake: "Graph cycle handle na karna", correction: "DFS/BFS mein visited set rakhein." }
            ],
            interviewQuestions: [
              "Adjacency matrix vs list?",
              "Quick sort vs Merge sort?"
            ],
            practiceExercises: [
              { question: "Graph mein cycle detect karo.", hint: "Undirected: DFS parent check. Directed: DFS + recursion stack.", difficulty: "medium" },
              { question: "Kth largest element using heap.", hint: "Min heap of size k.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-dsa-graphs",
              title: "Graphs & Sorting Quiz",
              questions: [
                { id: "q1", question: "Graph adjacency list space?", options: ["O(V^2)", "O(V+E)", "O(V)", "O(E)"], correctAnswer: 1, explanation: "Adjacency list O(V+E) space leti hai, adjacency matrix O(V^2) ke comparison mein efficient hai sparse graphs ke liye." },
                { id: "q2", question: "Stable sorting algorithm?", options: ["Quick sort", "Merge sort", "Heap sort", "All"], correctAnswer: 1, explanation: "Merge sort stable hai - equal elements ka relative order preserve karta hai, unlike quick sort aur heap sort." },
                { id: "q3", question: "Dijkstra algorithm type?", options: ["Greedy", "DP", "Divide & Conquer", "Backtracking"], correctAnswer: 0, explanation: "Dijkstra greedy algorithm hai - har step mein current shortest path select karta hai, negative edges ke liye kaam nahi karta." }
              ]
            }
          },
          duration: "25 min"
        },
        {
          id: "dsa-searching-dp",
          title: "Searching aur Dynamic Programming",
          description: "Binary search aur dynamic programming concepts seekhenge.",
          order: 5,
          content: {
            introduction: "Binary Search aur Dynamic Programming concepts. Memoization, tabulation, common DP patterns, recursion optimization.",
            sections: [
              {
                title: "Binary Search",
                explanation: "Binary search sorted array mein O(log n). Standard BS, first/last occurrence, rotated array search. Lower bound/upper bound.",
                example: "function binarySearch(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (l <= r) {\n    let mid = Math.floor((l + r) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) l = mid + 1;\n    else r = mid - 1;\n  }\n  return -1;\n}\n\nfunction searchRotated(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (l <= r) {\n    let mid = Math.floor((l + r) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[l] <= arr[mid]) {\n      if (target >= arr[l] && target < arr[mid]) r = mid - 1;\n      else l = mid + 1;\n    } else {\n      if (target > arr[mid] && target <= arr[r]) l = mid + 1;\n      else r = mid - 1;\n    }\n  }\n  return -1;\n}"
              },
              {
                title: "Dynamic Programming",
                explanation: "DP optimal substructure + overlapping subproblems. Top-down (memoization) vs Bottom-up (tabulation). Fibonacci, climbing stairs, knapsack. DP state definition key.",
                example: "function fib(n, memo = {}) {\n  if (n <= 1) return n;\n  if (memo[n] !== undefined) return memo[n];\n  memo[n] = fib(n-1, memo) + fib(n-2, memo);\n  return memo[n];\n}\n\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  let one = 1, two = 2;\n  for (let i = 3; i <= n; i++) {\n    let curr = one + two;\n    one = two;\n    two = curr;\n  }\n  return two;\n}\n\nfunction knapsack(weights, values, capacity) {\n  let n = weights.length;\n  let dp = Array(n+1).fill(null).map(() => Array(capacity+1).fill(0));\n  for (let i = 1; i <= n; i++) {\n    for (let w = 1; w <= capacity; w++) {\n      if (weights[i-1] <= w)\n        dp[i][w] = Math.max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w]);\n      else dp[i][w] = dp[i-1][w];\n    }\n  }\n  return dp[n][capacity];\n}"
              },
              {
                title: "Common DP Patterns",
                explanation: "LCS (Longest Common Subsequence), LIS (Longest Increasing Subsequence), edit distance, matrix chain, DP on grids, DP on strings.",
                example: "function lcs(text1, text2) {\n  let m = text1.length, n = text2.length;\n  let dp = Array(m+1).fill(null).map(() => Array(n+1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i-1] === text2[j-1])\n        dp[i][j] = 1 + dp[i-1][j-1];\n      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n    }\n  }\n  return dp[m][n];\n}\n\nfunction uniquePaths(m, n) {\n  let dp = Array(m).fill(null).map(() => Array(n).fill(1));\n  for (let i = 1; i < m; i++) {\n    for (let j = 1; j < n; j++) {\n      dp[i][j] = dp[i-1][j] + dp[i][j-1];\n    }\n  }\n  return dp[m-1][n-1];\n}\n\nfunction coinChange(coins, amount) {\n  let dp = Array(amount+1).fill(Infinity);\n  dp[0] = 0;\n  for (let coin of coins)\n    for (let i = coin; i <= amount; i++)\n      dp[i] = Math.min(dp[i], 1 + dp[i-coin]);\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}"
              }
            ],
            codeExamples: [
              {
                title: "Longest Palindromic Substring",
                language: "python",
                code: "function longestPalindrome(s) {\n  let n = s.length;\n  let dp = Array(n).fill(null).map(() => Array(n).fill(false));\n  let start = 0, maxLen = 1;\n  for (let i = 0; i < n; i++) dp[i][i] = true;\n  for (let i = 0; i < n - 1; i++) {\n    if (s[i] === s[i+1]) { dp[i][i+1] = true; start = i; maxLen = 2; }\n  }\n  for (let len = 3; len <= n; len++) {\n    for (let i = 0; i < n - len + 1; i++) {\n      let j = i + len - 1;\n      if (s[i] === s[j] && dp[i+1][j-1]) {\n        dp[i][j] = true;\n        start = i; maxLen = len;\n      }\n    }\n  }\n  return s.substring(start, start + maxLen);\n}"
              }
            ],
            notes: [
              "Binary search only sorted arrays par kaam karta hai.",
              "DP optimal substructure + overlapping subproblems.",
              "Memoization top-down, tabulation bottom-up.",
              "DP state definition sabse important step hai."
            ],
            commonMistakes: [
              { mistake: "Binary search unsorted array par lagna", correction: "Array sort karo ya sorting ke baad binary search use karo." },
              { mistake: "DP mein base case bhoolna", correction: "dp[0] ya empty string ka base case hamesha define karo." }
            ],
            interviewQuestions: [
              "Binary search complexity?",
              "DP vs Greedy?"
            ],
            practiceExercises: [
              { question: "Word break problem solve karo.", hint: "dp[i] = substring(0,i) breakable?", difficulty: "medium" },
              { question: "Edit distance (Levenshtein distance) implement karo.", hint: "dp[i][j] = min cost to convert.", difficulty: "medium" }
            ],
            quiz: {
              id: "quiz-dsa-searching-dp",
              title: "Searching & Dynamic Programming Quiz",
              questions: [
                { id: "q1", question: "Binary search time complexity?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correctAnswer: 1, explanation: "Binary search har step mein search space aadha karta hai, isliye sorted array mein O(log n) time lagta hai." },
                { id: "q2", question: "DP approach from top?", options: ["Tabulation", "Memoization", "Greedy", "Divide"], correctAnswer: 1, explanation: "Top-down DP ko memoization kehte hain jahan recursion + caching use hoti hai, bottom-up ko tabulation." },
                { id: "q3", question: "0/1 Knapsack time?", options: ["O(n)", "O(n*w)", "O(2^n)", "O(n^2)"], correctAnswer: 1, explanation: "0/1 Knapsack DP solution O(n*w) time leta hai, jahan n items hain aur w capacity." }
              ]
            }
          },
          duration: "25 min"
        }
      ]
    }
  ],
};

