# 🧮 Data Structures & Algorithms - Complete Curriculum (2026)

> **"DSA programming ki backbone hai. FAANG companies DSA hi puchti hain."**

---

## 📖 What is DSA?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time** | 6-12 months |
| **Prerequisites** | Any programming language |

### Definition
**Data Structures** = ways to organize data. **Algorithms** = steps to solve problems.

### Roman English Explanation
DSA ko "toolkit" samjho. Data structures woh tools hain jinme aap data rakhte ho (jaise stack, queue, tree). Algorithms woh steps hain jo aap data par perform karte ho (jaise search, sort). FAANG interviews mein DSA kaafi puchte hain. Isliye yeh career ke liye sabse important hai.

---

## 🗺️ Complete Roadmap (500+ Topics)

```
🟢 BEGINNER (Month 1-2)
├── Time & Space Complexity
├── Arrays
├── Strings
├── Linked Lists
├── Recursion
├── Stack & Queue
└── Hashing

🔵 INTERMEDIATE (Month 3-4)
├── Trees (Binary, BST)
├── Heaps & Priority Queues
├── Graphs (BFS, DFS)
├── Sorting Algorithms
├── Searching Algorithms
├── Two Pointers
└── Sliding Window

🟠 ADVANCED (Month 5-7)
├── Dynamic Programming
├── Graph Algorithms (Shortest Path, MST)
├── Trie, Segment Tree, Fenwick Tree
├── Disjoint Set Union
├── Bit Manipulation
├── Greedy Algorithms
├── Backtracking
└── Divide & Conquer

🔴 PROFESSIONAL (Month 8-10)
├── Advanced DP (Digit DP, DP on Trees)
├── String Algorithms (KMP, Rabin-Karp)
├── Advanced Graphs (Tarjan, Eulerian)
├── Computational Geometry
├── Number Theory
└── Game Theory

⚫ EXPERT (Month 11-12+)
├── System Design + DSA
├── Competitive Programming
├── Advanced Data Structures
└── Research Papers
```

---

## 🟢 MODULE 1: BEGINNER

### Time & Space Complexity (Big O)

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Array traversal |
| O(n log n) | Linearithmic | Merge Sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Fibonacci recursion |
| O(n!) | Factorial | Permutations |

```python
# O(1) - Constant time
def get_first(arr):
    return arr[0]

# O(n) - Linear time
def find_element(arr, target):
    for i in arr:
        if i == target:
            return True
    return False

# O(n²) - Quadratic time
def print_pairs(arr):
    for i in arr:
        for j in arr:
            print(i, j)

# O(log n) - Logarithmic time (Binary Search)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### Arrays
```python
# Array operations
arr = [1, 2, 3, 4, 5]
arr.append(6)       # O(1) amortized
arr.insert(0, 0)    # O(n)
arr.pop()           # O(1)
arr.pop(0)          # O(n)
arr[2]              # O(1) access

# Two pointers
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# Kadane's Algorithm (Maximum Subarray)
def max_subarray(nums):
    max_ending_here = max_so_far = nums[0]
    for num in nums[1:]:
        max_ending_here = max(num, max_ending_here + num)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
```

### Strings
```python
# String operations
s = "hello"
s[0]           # 'h'
s[::-1]        # "olleh" (reverse)
len(s)         # 5
"".join(["a","b"])  # "ab"

# Palindrome check
def is_palindrome(s):
    return s == s[::-1]

# Anagram check
from collections import Counter
def is_anagram(s1, s2):
    return Counter(s1) == Counter(s2)
```

### Linked List
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Traverse
def traverse(head):
    current = head
    while current:
        print(current.val)
        current = current.next

# Reverse
def reverse_list(head):
    prev, curr = None, head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev

# Detect cycle (Floyd's Algorithm)
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Merge two sorted lists
def merge_two_lists(l1, l2):
    dummy = ListNode()
    current = dummy
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 or l2
    return dummy.next
```

### Stack & Queue
```python
# Stack (LIFO) - using list
stack = []
stack.append(1)      # push
stack.append(2)
top = stack[-1]      # peek
popped = stack.pop() # pop
is_empty = len(stack) == 0

# Queue (FIFO) - using collections.deque
from collections import deque
queue = deque()
queue.append(1)      # enqueue
queue.append(2)
front = queue[0]     # peek
popped = queue.popleft()  # dequeue

# Stack: Valid Parentheses
def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return not stack

# Queue: Implement using stacks
class QueueUsingStacks:
    def __init__(self):
        self.s1 = []  # for push
        self.s2 = []  # for pop/peek
    
    def push(self, x):
        self.s1.append(x)
    
    def pop(self):
        self.peek()
        return self.s2.pop()
    
    def peek(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2[-1]
```

### Recursion
```python
# Basic recursion
def factorial(n):
    if n <= 1: return 1  # Base case
    return n * factorial(n - 1)  # Recursive case

def fibonacci(n):
    if n <= 1: return n
    return fibonacci(n-1) + fibonacci(n-2)

# Recursion tree visualization
def fibonacci(n):
    # fib(4) → fib(3) + fib(2)
    #        → (fib(2) + fib(1)) + (fib(1) + fib(0))
    #        → ((fib(1) + fib(0)) + 1) + (1 + 0)
    #        → ((1 + 0) + 1) + 1 = 3
    pass

# Backtracking template
def backtrack(path, options):
    if is_solution(path):
        process_solution(path)
        return
    
    for option in options:
        if is_valid(option):
            path.append(option)
            backtrack(path, options)
            path.pop()  # Undo
```

### Hashing (HashMaps, HashSets)
```python
# HashMap (dict)
freq = {}
for num in [1, 2, 2, 3]:
    freq[num] = freq.get(num, 0) + 1
# {1: 1, 2: 2, 3: 1}

# HashSet (set)
seen = set()
for num in [1, 2, 2, 3]:
    if num in seen:
        print("Duplicate!")
    seen.add(num)

# Two Sum (Classic!)
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Contains Duplicate
def contains_duplicate(nums):
    return len(nums) != len(set(nums))
```

---

## 🔵 MODULE 2: INTERMEDIATE

### Binary Trees
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Tree traversals
def inorder(root):      # Left, Root, Right
    if not root: return
    inorder(root.left)
    print(root.val)
    inorder(root.right)

def preorder(root):     # Root, Left, Right
    if not root: return
    print(root.val)
    preorder(root.left)
    preorder(root.right)

def postorder(root):    # Left, Right, Root
    if not root: return
    postorder(root.left)
    postorder(root.right)
    print(root.val)

def level_order(root):  # BFS
    if not root: return []
    result, queue = [], [root]
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result

# Max depth
def max_depth(root):
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Validate BST
def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root: return True
    if root.val <= min_val or root.val >= max_val:
        return False
    return (is_valid_bst(root.left, min_val, root.val) and
            is_valid_bst(root.right, root.val, max_val))
```

### Sorting Algorithms
```python
# Bubble Sort - O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Selection Sort - O(n²)
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Insertion Sort - O(n²)
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Merge Sort - O(n log n)
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Quick Sort - O(n log n) average
def quick_sort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

### Binary Search
```python
# Standard
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1

# First occurrence
def first_occurrence(arr, target):
    left, right = 0, len(arr) - 1
    result = -1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Search left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return result

# Search in rotated array
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target: return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

### Heaps (Priority Queue)
```python
import heapq

# Min Heap (default)
min_heap = []
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 2)
smallest = heapq.heappop(min_heap)  # 1

# Max Heap (use negative values)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
largest = -heapq.heappop(max_heap)  # 3

# Find K largest elements
def k_largest(nums, k):
    return heapq.nlargest(k, nums)

# Merge K sorted lists
def merge_k_lists(lists):
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    
    result = []
    while heap:
        val, list_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        if elem_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][elem_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, elem_idx + 1))
    return result
```

### Graphs (BFS, DFS)
```python
# Graph representation: adjacency list
graph = {
    1: [2, 3],
    2: [4],
    3: [4],
    4: []
}

# DFS (Depth First Search) - Recursive
def dfs(graph, node, visited=set()):
    if node in visited: return
    visited.add(node)
    print(node)
    for neighbor in graph[node]:
        dfs(graph, neighbor, visited)

# BFS (Breadth First Search)
def bfs(graph, start):
    visited = {start}
    queue = [start]
    while queue:
        node = queue.pop(0)
        print(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Detect cycle in directed graph
def has_cycle(graph):
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node: WHITE for node in graph}
    
    def dfs(node):
        if color[node] == GRAY: return True
        if color[node] == BLACK: return False
        color[node] = GRAY
        for neighbor in graph[node]:
            if dfs(neighbor): return True
        color[node] = BLACK
        return False
    
    return any(dfs(node) for node in graph)
```

---

## 🟠 MODULE 3: ADVANCED

### Dynamic Programming
```python
# 1. Fibonacci (Memoization - Top Down)
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# 2. Fibonacci (Tabulation - Bottom Up)
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 3. Climbing Stairs
def climb_stairs(n):
    if n <= 2: return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

# 4. 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]

# 5. Longest Common Subsequence (LCS)
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# 6. Longest Increasing Subsequence (LIS)
def length_of_lis(nums):
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)

# 7. Coin Change (minimum coins)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for a in range(coin, amount + 1):
            dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# 8. Edit Distance
def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]
```

### Graph Algorithms (Advanced)
```python
import heapq

# Dijkstra's Shortest Path
def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]  # (distance, node)
    
    while pq:
        dist, node = heapq.heappop(pq)
        if dist > distances[node]: continue
        for neighbor, weight in graph[node].items():
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    return distances

# Kruskal's MST (Minimum Spanning Tree)
def kruskal(edges, n):
    parent = list(range(n))
    rank = [0] * n
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        px, py = find(x), find(y)
        if px == py: return False
        if rank[px] < rank[py]: parent[px] = py
        elif rank[px] > rank[py]: parent[py] = px
        else: parent[py] = px; rank[px] += 1
        return True
    
    edges.sort(key=lambda x: x[2])  # Sort by weight
    mst = []
    for u, v, w in edges:
        if union(u, v):
            mst.append((u, v, w))
    return mst

# Topological Sort (Kahn's Algorithm)
def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1
    
    queue = [node for node in graph if in_degree[node] == 0]
    result = []
    
    while queue:
        node = queue.pop(0)
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return result if len(result) == len(graph) else []
```

### Tries (Prefix Trees)
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_word
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
```

### Bit Manipulation
```python
# Basic operations
x & y    # AND
x | y    # OR
x ^ y    # XOR
~x       # NOT
x << n   # Left shift (x * 2^n)
x >> n   # Right shift (x / 2^n)

# Check if kth bit is set
def is_kth_bit_set(num, k):
    return (num >> k) & 1

# Count set bits
def count_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

# Check if power of two
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

# Find single number (all others appear twice)
def single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

# Find missing number
def missing_number(nums):
    n = len(nums)
    xor_sum = n
    for i, num in enumerate(nums):
        xor_sum ^= i ^ num
    return xor_sum
```

### Sliding Window
```python
# Fixed window: Maximum sum of K consecutive elements
def max_sum_fixed(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Variable window: Longest substring without repeating characters
def length_of_longest_substring(s):
    char_set = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# Minimum window substring
def min_window(s, t):
    from collections import Counter
    need = Counter(t)
    have = 0
    left = min_left = 0
    min_len = float('inf')
    
    for right, char in enumerate(s):
        need[char] -= 1
        if need[char] >= 0: have += 1
        
        while have == len(t):
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            need[s[left]] += 1
            if need[s[left]] > 0: have -= 1
            left += 1
    
    return s[min_left:min_left + min_len] if min_len != float('inf') else ""
```

---

## 💼 INTERVIEW MODULE

### FAANG Interview Pattern

| Category | Topics | Frequency |
|----------|--------|-----------|
| Arrays | Two pointers, sliding window, prefix sum | ⭐⭐⭐⭐⭐ |
| Strings | Palindrome, anagram, pattern matching | ⭐⭐⭐⭐ |
| Linked Lists | Reverse, cycle, merge | ⭐⭐⭐⭐ |
| Trees | BST, traversals, LCA | ⭐⭐⭐⭐⭐ |
| Graphs | BFS, DFS, shortest path | ⭐⭐⭐⭐ |
| Dynamic Programming | 1D, 2D, knapsack, LCS | ⭐⭐⭐⭐⭐ |
| Hashing | Two sum, frequency | ⭐⭐⭐⭐ |
| Heaps | K largest/smallest | ⭐⭐⭐ |
| Binary Search | Search, rotated array | ⭐⭐⭐⭐ |
| Backtracking | Permutations, combinations | ⭐⭐⭐ |

### Top 50+ Interview Questions

**Beginner:**
1. Two Sum
2. Reverse Linked List
3. Valid Parentheses
4. Maximum Subarray (Kadane)
5. Merge Two Sorted Lists

**Medium:**
6. 3Sum
7. Longest Substring Without Repeating
8. LRU Cache
9. Top K Frequent Elements
10. Product of Array Except Self

**Hard:**
11. Merge K Sorted Lists
12. Serialize/Deserialize Binary Tree
13. Longest Increasing Path
14. Word Ladder II
15. Median of Two Sorted Arrays

### System Design + DSA
- Design Twitter (News Feed)
- Design URL Shortener
- Design WhatsApp/Chat System
- Design Netflix/Video Streaming
- Design Uber/Ride Sharing
- Design Dropbox/File Storage

---

## 📝 DSA Cheat Sheet

```
Big O Cheatsheet:
├── O(1): hash lookup, array access
├── O(log n): binary search
├── O(n): linear scan
├── O(n log n): sorting (merge, quick, heap)
├── O(n²): bubble sort, nested loops
├── O(2^n): Fibonacci recursion
└── O(n!): permutations

Data Structures:
├── Array: O(1) get, O(n) insert/delete
├── Stack: O(1) push/pop
├── Queue: O(1) enqueue/dequeue
├── Hash Table: O(1) average get/set
├── BST: O(log n) average search
├── Heap: O(log n) push/pop
└── Graph: O(V+E) DFS/BFS

Techniques:
├── Two Pointers
├── Sliding Window
├── Prefix Sum
├── Binary Search
├── DFS/BFS
├── Recursion + Memoization
├── DP (Tabulation)
├── Backtracking
├── Greedy
└── Divide & Conquer
```

---

> **"DSA = Maths + Practice. Roz 1 problem karo, FAANG mein job pakki!" 🎯**
>
> **[Next: AI & ML →](../ai-ml/ai-ml.md)**

[Back to Main Curriculum →](../README.md)
