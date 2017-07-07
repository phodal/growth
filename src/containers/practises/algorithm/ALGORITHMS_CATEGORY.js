
const ALGORITHMS_CATEGORY = [
  {
    list: [
      {
        key: "knight's_tour",
        title: 'Knight’s tour problem',
      },
      {
        key: 'n_queens',
        title: 'N Queens Problem',
      },
    ],
    name: 'Backtracking',
    zh_name: '回溯法',
    slug: 'backtracking',
  },
  {
    list: [
      {
        key: 'affine_cipher',
        title: 'Affine Cipher',
      },
      {
        key: 'caesar_cipher',
        title: 'Caesar Cipher',
      },
    ],
    name: 'Cryptography',
    zh_name: '密码学',
    slug: 'cryptography',
  },
  {
    list: [
      {
        key: 'catalan_number',
        title: 'Catalan Number',
      },
      {
        key: 'fibonacci',
        title: 'Fibonacci Sequence',
      },
      {
        key: 'integer_partition',
        title: 'Integer Partition',
      },
      {
        key: 'knapsack_problem',
        title: 'Knapsack Problem',
      },
      {
        key: 'longest_common_subsequence',
        title: 'Longest Common Subsequence',
      },
      {
        key: 'longest_increasing_subsequence',
        title: 'Longest Increasing Subsequence',
      },
      {
        key: 'longest_palindromic_subsequence',
        title: 'Longest Palindromic Subsequence',
      },
      {
        key: 'max_subarray',
        title: 'Maximum Subarray',
      },
      {
        key: 'max_sum_path',
        title: 'Maximum Sum Path',
      },
      {
        key: 'pascal_triangle',
        title: "Pascal's Triangle",
      },
      {
        key: 'shortest_common_supersequence',
        title: 'Shortest Common Supersequence',
      },
      {
        key: 'sliding_window',
        title: 'Sliding Window',
      },
      {
        key: 'ugly_numbers',
        title: 'Ugly Numbers',
      },
    ],
    name: 'Dynamic Programming',
    zh_name: '动态规划',
    slug: 'dp',
  },
  {
    list: [
      {
        key: 'bellman_ford',
        title: 'Bellman-Ford',
      },
      {
        key: 'bfs',
        title: 'BFS',
      },
      {
        key: 'bridges',
        title: 'Find-Bridges',
      },
      {
        key: 'dfs',
        title: 'DFS',
      },
      {
        key: 'dls',
        title: 'Depth-Limited Search',
      },
      {
        key: 'dijkstra',
        title: 'Dijkstra',
      },
      {
        key: 'floyd_warshall',
        title: 'Floyd-Warshall',
      },
      {
        key: 'page_rank',
        title: 'PageRank Algorithm',
      },
      {
        key: 'topological_sort',
        title: 'Topological-Sort',
      },
      {
        key: 'tarjan',
        title: 'Tarjan',
      },
    ],
    name: 'Graph Search',
    zh_name: '图搜索',
    slug: 'graph_search',
  },
  {
    list: [
      {
        key: 'job_scheduling',
        title: 'Job Scheduling Problem',
      },
      {
        key: 'majority_element',
        title: 'Majority Element(Boyer–Moore majority vote algorithm)',
      },
    ],
    name: 'Greedy',
    zh_name: '贪婪算法',
    slug: 'greedy',
  },
  {
    list: [
      {
        key: 'kruskal',
        title: "Kruskal's Algorithm",
      },
      {
        key: 'prim',
        title: "Prim's Algorithm",
      },
    ],
    name: 'Minimum Spanning Tree',
    zh_name: '最小生成树',
    slug: 'mst',
  },
  {
    list: [
      {
        key: 'euclidean_algorithm',
        title: 'Euclidean Algorithm',
      },
      {
        key: 'sieve_of_eratosthenes',
        title: 'Sieve of Eratosthenes',
      },
      {
        key: 'freivalds_algorithm',
        title: 'Freivalds Algorithm',
      },
      {
        key: 'miller_rabin_primality_test',
        title: 'Miller-Rabin primality test',
      },
    ],
    name: 'Number Theory',
    zh_name: '数论',
    slug: 'number_theory',
  },
  {
    list: [
      {
        key: 'binary_search',
        title: 'Binary Search',
      },
    ],
    name: 'Search',
    zh_name: '搜索',
    slug: 'search',
  },
  {
    list: [
      {
        key: 'bucket',
        title: 'Bucket Sort',
      },
      {
        key: 'bubble',
        title: 'Bubble Sort',
      },
      {
        key: 'comb',
        title: 'Comb Sort',
      },
      {
        key: 'counting',
        title: 'Counting Sort',
      },
      {
        key: 'cycle',
        title: 'Cycle Sort',
      },
      {
        key: 'heap',
        title: 'Heapsort',
      },
      {
        key: 'insertion',
        title: 'Insertion Sort',
      },
      {
        key: 'merge',
        title: 'Merge Sort',
      },
      {
        key: 'pigeonhole',
        title: 'Pigeonhole Sort',
      },
      {
        key: 'quick',
        title: 'Quicksort',
      },
      {
        key: 'radix',
        title: 'Radix Sort',
      },
      {
        key: 'selection',
        title: 'Selection Sort',
      },
      {
        key: 'shell',
        title: 'Shellsort',
      },
      {
        key: 'pancake',
        title: 'Pancake Sort',
      },
    ],
    name: 'Sorting',
    zh_name: '分类',
    slug: 'sorting',
  },
  {
    list: [
      {
        key: 'edit_distance',
        title: 'Edit Distance',
      },
      {
        key: 'knuth_morris_pratt',
        title: 'KMP Substring Search',
      },
      {
        key: 'rabin_karp_algorithm',
        title: 'Rabin-Karp Algorithm',
      },
      {
        key: 'suffix_array',
        title: 'Suffix Array (construction & usage)',
      },
      {
        key: 'z_algorithm',
        title: 'Z Algorithm',
      },
    ],
    name: 'String',
    zh_name: '字符',
    slug: 'string',
  },
  {
    list: [
      {
        key: 'binary_search_tree',
        title: 'Binary Search Tree',
      },
      {
        key: 'binary_tree_traversal',
        title: 'Binary Tree Traversal',
      },
      {
        key: 'lowest_common_ancestor',
        title: 'Lowest Common Ancestor',
      },
    ],
    name: 'Tree',
    zh_name: '树',
    slug: 'tree',
  },
  {
    list: [
      {
        key: 'flood_fill',
        title: 'Flood Fill',
      },
      {
        key: 'cellular_automata',
        title: 'Cellular Automata',
      },
      {
        key: 'create_maze',
        title: 'Create Maze',
      },
      {
        key: 'magic_square',
        title: 'Magic Square',
      },
      {
        key: 'stable_matching',
        title: 'Stable Matching',
      },
    ],
    name: 'Uncategorized',
    zh_name: '未分类',
    slug: 'etc',
  },
];

export default ALGORITHMS_CATEGORY;
