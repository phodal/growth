const ALGORITHMS = {
  backtracking: [
    {
      files: {
        basic: 'Solving the Knight’s tour problem using Backtracking & Recursion',
      },
      name: 'Knight’s tour problem',
      category: 'backtracking',
      key: "knight's_tour",
      complexity: {
        time: 'Worst $O(8^{N^{2}})$',
        space: 'Worst $O(N^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Knight%27s_tour'>Wikipedia</a>",
      ],
    },
    {
      files: {
        n_queens: 'Solving the N Queens Puzzle using Backtracking & Recursion',
      },
      name: 'N Queens Problem',
      category: 'backtracking',
      key: 'n_queens',
      applications: [
        'Puzzle Solving',
        'Searching',
      ],
      complexity: {
        time: 'Worst $O(N!)$',
        space: 'Worst $O(N)$',
      },
      references: [
        "<a href='http://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/'>geeksforgeeks</a>",
      ],
    },
  ],
  cryptography: [
    {
      files: {
        basic: 'Encrypting and Decrypting a string using affine functions',
      },
      name: 'Affine Cipher',
      category: 'cryptography',
      key: 'affine_cipher',
      applications: [
        'Cryptanalysis',
        'More complex Variations of Affine Cipher are used in practical cryptography',
      ],
      complexity: {
        time: 'worst $O(N)$, $N$ = length of plain/cipher text',
        space: 'worst $O(N)$, to create the new mapping (plain->cipher, cipher->plain)',
      },
      references: [
        "<a href='http://practicalcryptography.com/ciphers/affine-cipher/'>Practicalcryptography</a>",
      ],
    },
    {
      files: {
        basic: 'Encrypting and Decrypting a string using character rotation',
      },
      name: 'Caesar Cipher',
      category: 'cryptography',
      key: 'caesar_cipher',
      applications: [
        'Often incorporated as part of more complex schemes, such as the Vigenère cipher',
      ],
      complexity: {
        time: 'best O(N * #ofRotations), worst O(N * #ofRotations * alphabetSize)',
        space: 'best O(1), worst O(alphabetSize)',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Caesar_cipher'>Wikipedia</a>",
      ],
    },
  ],
  dp: [
    {
      files: {
        catalan_number: 'Catalan Number',
      },
      name: 'Catalan Number',
      category: 'dp',
      key: 'catalan_number',
      applications: [
        'The number of ways to stack coins on a bottom row that consists of n consecutive coins in a plane, such that no coins are allowed to be put on the two sides of the bottom coins and every additional coin must be above two other coins, is the nth Catalan number',
        'The number of ways to group a string of n pairs of parentheses, such that each open parenthesis has a matching closed parenthesis, is the nth Catalan number',
        'The number of ways to cut an n+2-sided convex polygon in a plane into triangles by connecting vertices with straight, non-intersecting lines is the nth Catalan number. This is the application in which Euler was interested.',
      ],
      complexity: {
        time: ' $O(N^2)$',
        space: '$O(N)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Catalan_number'>Wikipedia</a>",
        "<a href='http://oldweb.sbc.edu/sites/default/files/Honors/XiaotongJiang.July20_0.pdf'>Sweet Briar College",
      ],
    },
    {
      files: {
        basic: 'Fibonacci Sequence',
      },
      name: 'Fibonacci Sequence',
      category: 'dp',
      key: 'fibonacci',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Dynamic_programming#Fibonacci_sequence'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Integer partition',
      },
      name: 'Integer Partition',
      category: 'dp',
      key: 'integer_partition',
      complexity: {
        time: '$O(n(log \\, n))$',
        space: '$O(n^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Partition_(number_theory)'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Knapsack problem',
      },
      name: 'Knapsack Problem',
      category: 'dp',
      key: 'knapsack_problem',
      complexity: {
        time: '$O(n^2)$',
        space: '$O(n^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Knapsack_problem'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Longest common subsequence',
      },
      name: 'Longest Common Subsequence',
      category: 'dp',
      key: 'longest_common_subsequence',
      complexity: {
        time: '$O(m\\cdot n)$',
        space: '$O(m\\cdot n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Longest_common_subsequence_problem'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Longest increasing subsequence',
      },
      name: 'Longest Increasing Subsequence',
      category: 'dp',
      key: 'longest_increasing_subsequence',
      complexity: {
        time: '$O(n(log\\,n))$',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Longest_increasing_subsequence'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Longest Palindromic Subsequence',
      },
      name: 'Longest Palindromic Subsequence',
      category: 'dp',
      key: 'longest_palindromic_subsequence',
      complexity: {
        time: '$O(n^2)$',
        space: '$O(n^2)$',
      },
      references: [
        "<a href='http://www.geeksforgeeks.org/dynamic-programming-set-12-longest-palindromic-subsequence/'>GeeksForGeeks</a>",
      ],
    },
    {
      files: {
        basic: 'Maximum subarray',
      },
      name: 'Maximum Subarray',
      category: 'dp',
      key: 'max_subarray',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Maximum_subarray_problem'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Maximum sum path',
      },
      name: 'Maximum Sum Path',
      category: 'dp',
      key: 'max_sum_path',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [],
    },
    {
      files: {
        pascal_triangle: "Pascal's Triangle",
      },
      name: "Pascal's Triangle",
      category: 'dp',
      key: 'pascal_triangle',
      applications: [
        'Binomial Expansion',
        'Probability',
      ],
      complexity: {
        time: ' $O(N^2)$',
        space: '$O(N^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Pascal%27s_triangle'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Shortest common supersequence',
      },
      name: 'Shortest Common Supersequence',
      category: 'dp',
      key: 'shortest_common_supersequence',
      complexity: {
        time: '$O(m\\cdot n)$',
        space: '$O(m\\cdot n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Shortest_common_supersequence_problem'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Sliding window',
      },
      name: 'Sliding Window',
      category: 'dp',
      key: 'sliding_window',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [],
    },
    {
      files: {
        basic: 'Ugly Numbers',
      },
      name: 'Ugly Numbers',
      category: 'dp',
      key: 'ugly_numbers',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [
        "<a href='http://www.algorithmist.com/index.php/UVa_136'>Algorithmist</a>",
      ],
    },
  ],
  etc: [
    {
      files: {
        cellular_automata: '',
      },
      name: 'Cellular Automata',
      category: 'etc',
      key: 'cellular_automata',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Cellular_automaton'>Wikipedia</a>",
      ],
    },
    {
      files: {
        create_maze: '',
      },
      name: 'Create Maze',
      category: 'etc',
      key: 'create_maze',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Disjoint-set_data_structure'>Disjoint Sets Wikipedia</a>",
      ],
    },
    {
      files: {
        flood_fill: '',
      },
      name: 'Flood Fill',
      category: 'etc',
      key: 'flood_fill',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Flood_fill'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Magic Square',
      },
      name: 'Magic Square',
      category: 'etc',
      key: 'magic_square',
      complexity: {
        time: ' $O(N^2)$',
        space: '$O(N^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Magic_square'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Stable Matching',
      },
      name: 'Stable Matching',
      category: 'etc',
      key: 'stable_matching',
      complexity: {
        time: ' $O(N^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Stable_marriage_problem'>Wikipedia</a>",
      ],
    },
  ],
  graph_search: [
    {
      files: {
        shortest_path: 'Finding the shortest path',
      },
      name: 'Bellman-Ford',
      category: 'graph_search',
      key: 'bellman_ford',
      applications: [
        'Packet Routing - A variation of BF is used in the Distance vector Routing Protocol',
      ],
      complexity: {
        time: 'worst $O(|V|\\cdot |E|)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        tree: 'Searching a tree',
        shortest_path: 'Finding the shortest path',
        test_bipartiteness: 'Test if graph is biparted (or 2-colorable)',
      },
      name: 'BFS',
      category: 'graph_search',
      key: 'bfs',
      applications: [
        "Copying garbage collection, Cheney's algorithm",
        'Finding the shortest path between two nodes u and v, with path length measured by number of edges (an advantage over depth-first search)',
        'Testing a graph for bipartiteness',
        '(Reverse) Cuthill–McKee mesh numbering',
        'Ford–Fulkerson method for computing the maximum flow in a flow network',
        'Serialization/Deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.',
        'Construction of the failure function of the Aho-Corasick pattern matcher.',
      ],
      complexity: {
        time: 'worst $O(|V|+|E|)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Breadth-first_search'>Wikipedia</a>",
      ],
    },
    {
      files: {
        naive: 'Find all the bridges in an Undirected Graph',
        efficient: 'Efficiently find all the bridges in an Undirected Graph',
      },
      name: 'Bridges',
      category: 'graph_search',
      key: 'bridges',
      applications: [
        'Finding vulnerabilities in Graphs and Electrical Circuits',
      ],
      complexity: {
        time: 'worst Naive: $O(|E| \\cdot (|V|+|E|))$, Efficient: $O(|V|+|E|)$',
        space: 'worst $O(|V| \\cdot |E|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Bridge_(graph_theory)'>Wikipedia</a>",
      ],
    },
    {
      files: {
        tree: 'Searching a tree',
        all_paths: 'Going through all possible paths without making any circuit',
        weighted_graph: 'DFS of Weighted Graph',
        shortest_path: 'Finding the shortest path',
        exploration: 'Explore an undirected graph to see if it is connected',
      },
      name: 'DFS',
      category: 'graph_search',
      key: 'dfs',
      applications: [
        'Finding connected components.',
        'Topological sorting.',
        'Finding 2-(edge or vertex)-connected components.',
        'Finding 3-(edge or vertex)-connected components.',
        'Finding the bridges of a graph.',
        'Generating words in order to plot the Limit Set of a Group.',
        'Finding strongly connected components.',
        'Planarity testing',
        'Solving puzzles with only one solution, such as mazes. (DFS can be adapted to find all solutions to a maze by only including nodes on the current path in the visited set.)',
        'Maze generation may use a randomized depth-first search.',
        'Finding biconnectivity in graphs.',
      ],
      complexity: {
        time: 'worst $O(|V|+|E|)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Depth-first_search'>Wikipedia</a>",
      ],
    },
    {
      files: {
        shortest_path: 'Finding the shortest path between two nodes',
      },
      name: 'Dijkstra',
      category: 'graph_search',
      key: 'dijkstra',
      applications: [
        'Ar.',
      ],
      complexity: {
        time: 'worst $O(|V|^2)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        tree: 'Searching a tree (limited depth)',
        count_descendant: 'Count all descendant of root within some depth',
      },
      name: 'DLS',
      category: 'graph_search',
      key: 'dls',
      complexity: {
        time: 'worst $O(b^l)$',
        space: 'worst $O(bl)$',
        notes: '</br>b is branching factor, for example binary tree has branching factor 2 </br> l is limit that we define',
      },
      references: [
        "<a href='http://www.cs.colostate.edu/~anderson/cs440/index.html/doku.php?id=notes:week2b'>Colorado State University Lecture Notes</a>",
      ],
    },
    {
      files: {
        shortest_paths: 'Finding the shortest path between all nodes',
      },
      name: 'Floyd-Warshall',
      category: 'graph_search',
      key: 'floyd_warshall',
      applications: [
        '',
      ],
      complexity: {
        time: 'worst $O(|V|^3)$',
        space: 'worst $O(|V|^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Floyd–Warshall_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Version #1 of PageRank Algorithm (does not take into account the total number of nodes in the graph, i.e., number of pages on web).',
        v2: 'Version #2 divides (1 - D), where D = damping factor, by N, the total no. of documents on internet (nodes in Graph). The resultant Page Ranks form a probability distribution.',
      },
      name: 'PageRank-Algorithm',
      category: 'graph_search',
      key: 'page_rank',
      applications: [
        'Web Page Indexing for refining search results',
      ],
      complexity: {
        time: 'worst $O(|V|+|E|)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='http://www.cs.princeton.edu/~chazelle/courses/BIB/pagerank.htm'>Princeton university</a>",
        "<a href='http://pr.efactory.de/e-pagerank-algorithm.shtml'>E-Factory</a>",
      ],
    },
    {
      files: {
        basic: 'Find the strongly connected components of a graph',
      },
      name: 'Tarjan',
      category: 'graph_search',
      key: 'tarjan',
      complexity: {
        time: 'worst $O(|V|+|E|)$',
      },
      references: [
        "<a href='https://www.wikiwand.com/en/Tarjan%27s_strongly_connected_components_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        kahn_algorithm: 'Performing Topological Sort using Queue Data Structure & an array of In-degrees',
      },
      name: 'Topological-Sort',
      category: 'graph_search',
      key: 'topological_sort',
      applications: [
        'Job Scheduling',
        'Instruction Scheduling',
        'Logic Synthesis',
        'Determining the order of compilation tasks to perform in makefiles',
        'Data serialization',
      ],
      complexity: {
        time: 'worst $O(|V|+|E|)$',
        space: 'worst $O(|V|)$',
      },
      references: [
        "<a href='http://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/'>GeeksForGeeks</a>",
        "<a href='http://www.geeksforgeeks.org/topological-sorting/'>GeeksForGeeks</a>",
      ],
    },
  ],
  greedy: [
    {
      files: {
        job_scheduling: 'Job Scheduling Algorithm',
      },
      name: 'Job Scheduling Algorithm',
      category: 'greedy',
      key: 'job_scheduling',
      applications: [],
      complexity: {
        time: ' $O(N^2)$',
        space: '$O(N)$',
      },
      references: [
        "<a href='http://ocw.mit.edu/courses/civil-and-environmental-engineering/1-204-computer-algorithms-in-systems-engineering-spring-2010/lecture-notes/MIT1_204S10_lec10.pdf'>mit.edu</a>",
      ],
    },
    {
      files: {
        basic: 'Find majority element in array using Boyer–Moore majority vote algorithm',
      },
      name: 'Majority Element(Boyer–Moore majority vote algorithm)',
      category: 'greedy',
      key: 'majority_element',
      complexity: {
        time: ' $O(N)$',
        space: '$O(logN)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm'>Wikipedia</a>",
      ],
    },
  ],
  mst: [
    {
      files: {
        normal: 'Finds minimum spanning tree of a given graph.',
      },
      name: "Kruskal's Algorithm",
      category: 'mst',
      key: 'kruskal',
      applications: [],
      complexity: {
        time: 'worst $O(E\\, log(E))$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Kruskal%27s_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        normal: 'Finds minimum spanning tree of a given graph.',
      },
      name: "Prim's Algorithm",
      category: 'mst',
      key: 'prim',
      applications: [],
      complexity: {
        time: 'worst $O(|V|^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Prim%27s_algorithm'>Wikipedia</a>",
      ],
    },
  ],
  number_theory: [
    {
      files: {
        basic: 'Euclidean Algorithm',
      },
      name: 'Euclidean Algorithm',
      category: 'number_theory',
      key: 'euclidean_algorithm',
      complexity: {
        time: '$O(log(m)log(n))$',
        space: '$O(1)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Euclidean_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Freivalds Algorithm',
      },
      name: 'Freivalds Algorithm',
      category: 'number_theory',
      key: 'freivalds_algorithm',
      complexity: {
        time: '$O(n^2)$',
      },
      references: [
        "<a href='https://www.wikiwand.com/en/Freivalds%27_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Miller Rabin primality test',
      },
      name: 'Miller-Rabin primality test',
      category: 'number_theory',
      key: 'miller_rabin_primality_test',
      complexity: {
        time: '$O(klog^{3}(n)))$',
        probability: '$1 - (1/(4^{k}))$',
      },
      references: [
        "<a href='https://www.wikiwand.com/en/Miller%E2%80%93Rabin_primality_test'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Sieve of Eratosthenes',
      },
      name: 'Sieve of Eratosthenes',
      category: 'number_theory',
      key: 'sieve_of_eratosthenes',
      complexity: {
        time: '$O(n\\,(log\\,n)(log\\,log\\,n))$',
        space: '$O(n^{\\frac{1}{2}})$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes'>Wikipedia</a>",
      ],
    },
  ],
  scratch_paper: [
    {
      'Code written in the ...': {
        '... top editor': 'predefines data variables that will be shown in a visualizing module.',
        '... bottom editor': 'actually implements and visualizes the algorithm.',
      },
      'Be our contributor': "If you want to add your code to the side menu, check out our <strong><a href='https://github.com/parkjs814/AlgorithmVisualizer/wiki'>wiki</a></strong>!",
      files: {
        scratch_paper: 'Write down your own algorithm!',
      },
      name: 'Scratch Paper',
      category: 'scratch_paper',
      key: '',
    },
  ],
  search: [
    {
      files: {
        recursive: 'Recursively searching a sorted array',
        iterative: 'Iteratively searching a sorted array',
      },
      name: 'Binary Search',
      category: 'search',
      key: 'binary_search',
      applications: [
        'Finding values in a sorted collection',
        'Traversing binary search trees',
      ],
      complexity: {
        time: 'worst $O(log(N))$, best $O(1)$, average $O(log(N))$',
        space: 'worst $O(log(N))$ - recursive, $O(1)$ - iterative',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Binary_search_algorithm'>Wikipedia</a>",
      ],
    },
  ],
  sorting: [
    {
      files: {
        basic: 'Bubble sort',
      },
      name: 'Bubble Sort',
      category: 'sorting',
      key: 'bubble',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n)$, average $O(n^2)$',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Bubble_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Bucket sort',
      },
      name: 'Bucket Sort',
      category: 'sorting',
      key: 'bucket',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n+k)$, average $O(n+k)$ where $n$ is the number of buckets and $k$ is the range of the input',
        space: 'worst $O(n \\cdot k)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Bucket_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Bubble sort',
      },
      name: 'Comb Sort',
      category: 'sorting',
      key: 'comb',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n \\,log \\,n)$, average $O(n^2 / 2^p)$, where $p$ is the number of increment)',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Comb_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Counting sort',
      },
      name: 'Counting Sort',
      category: 'sorting',
      key: 'counting',
      complexity: {
        time: 'worst $O(n+k)$, best $O(n)$, average $O(n+k)$ where $n$ is the number of elements in the input array and $k$ is the range of the output',
        space: 'worst $O(n+k)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Counting_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Cycle Sort',
      },
      name: 'Cycle Sort',
      category: 'sorting',
      key: 'cycle',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n^2)$, average $O(n^2)$',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Cycle_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Heap sort',
      },
      name: 'Heap Sort',
      category: 'sorting',
      key: 'heap',
      complexity: {
        time: 'worst $O(n \\, log \\, n)$, best $O(n \\, log \\, n)$, average $O(n \\, log \\, n)$',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Heapsort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Insertion sort',
      },
      name: 'Insertion Sort',
      category: 'sorting',
      key: 'insertion',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n)$, average $O(n^2)$',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Insertion_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        bottom_up: 'Bottom-up implementation',
        top_down_list: 'Top-down implementation using lists',
      },
      name: 'Merge Sort',
      category: 'sorting',
      key: 'merge',
      complexity: {
        time: 'average $O(n \\, log \\, n)$',
        space: 'worst $O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Merge_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Pancake sort',
      },
      name: 'Pancake Sort',
      category: 'sorting',
      key: 'pancake',
      complexity: {
        time: 'worst $O(n^2)$',
        space: 'worst $O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Pancake_sorting'>Wikipedia</a>",
        "<a href='http://www.geeksforgeeks.org/pancake-sorting/'>Geeksforgeeks</a>",
      ],
    },
    {
      files: {
        basic: 'Pigeonhole Sort',
      },
      name: 'Pigeonhole Sort',
      category: 'sorting',
      key: 'pigeonhole',
      complexity: {
        time: ' $O(n + N)$',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Pigeonhole_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Quicksort',
      },
      name: 'Quicksort',
      category: 'sorting',
      key: 'quick',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n \\, log \\, n)$, average $O(n \\, log \\, n)$',
        space: 'worst $O(n)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Quicksort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        lsd: 'LSD Radix sort',
      },
      name: 'Radix LSD Sort',
      category: 'sorting',
      key: 'radix',
      complexity: {
        time: 'worst $O(n)$, best $O(n)$, average $O(n)$',
        space: 'always $O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Radix_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Selection sort',
      },
      name: 'Selection Sort',
      category: 'sorting',
      key: 'selection',
      complexity: {
        time: 'worst $O(n^2)$, best $O(n^2)$, average $O(n^2)$',
        space: '$O(1)$ auxiliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Selection_sort'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Shellsort',
      },
      name: 'Shellsort',
      category: 'sorting',
      key: 'shell',
      complexity: {
        time: "best $O(n \\, log \\, n)$, average - depends on 'gap sequence'",
        space: 'worst $O(n)$ total, $O(1)$ auxilliary',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Shellsort'>Wikipedia</a>",
      ],
    },
  ],
  string: [
    {
      files: {
        dynamic_programming: 'Distance from str1 to str2 using Dynamic Programming (2D Array method)',
      },
      name: 'Edit-Distance',
      category: 'string',
      key: 'edit_distance',
      applications: [
        'Displaing Near-Proximity Words',
        'Information Retrieval (eg- Lucene API)',
        'Natural Language Processing',
      ],
      complexity: {
        time: 'worst $O(|M| \\cdot |N|)$',
        space: 'worst $O(|M| \\cdot |N|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Edit_distance'>Wikipedia</a>",
      ],
    },
    {
      files: {
        substring_search: "Efficiently find is A is a substring of B (and A's position(s))",
      },
      name: 'Knuth-Morris-Pratt',
      category: 'string',
      key: 'knuth_morris_pratt',
      applications: [
        'Substring Search',
      ],
      complexity: {
        time: 'worst $O(|N|+|K|)$',
        space: 'worst $O(|K|)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        basic: 'Rabin-Karp Algorithm',
      },
      name: 'Rabin–Karp Algorithm',
      category: 'string',
      key: 'rabin_karp_algorithm',
      applications: [
        'Substring Search',
      ],
      complexity: {
        time: ' $O(N)$ : If a sufficiently large prime number is used for the hash function. $O(M\\cdot N)$ : Worst Case ',
        space: '$O( 1 )$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm'>Wikipedia</a>",
      ],
    },
    {
      files: {
        construction_naive: 'Suffix Array inefficient construction',
      },
      name: 'Suffix Array',
      category: 'string',
      key: 'suffix_array',
      applications: [
        'Substring Search',
        'Bioinformatics',
        'Data Compression',
      ],
      complexity: {
        time: ' $O(N^2 \\cdot log(N))$ for Naive construction',
        space: '$O(N^2)$',
      },
      references: [
        "<a href='https://discuss.codechef.com/questions/21385/a-tutorial-on-suffix-arrays'>Codechef</a>",
      ],
    },
    {
      files: {
        pattern_search: 'Find the occurances and position of a pattern in a text',
      },
      name: 'Z Algorithm',
      category: 'string',
      key: 'z_algorithm',
      applications: [
        'Substring Search',
      ],
      complexity: {
        time: 'worst $O(|M|+|N|)$',
        space: 'worst $O(|M|+|N|)$',
      },
      references: [
        "<a href='http://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/'>GeeksForGeeks</a>",
      ],
    },
  ],
  tree: [
    {
      files: {
        bst_search: 'Search in Binary Search Tree',
        bst_insert: 'Insert in Binary Search Tree',
      },
      name: 'Binary Search Tree',
      category: 'tree',
      key: 'binary_search_tree',
      applications: [
        "Search applications where data is constantly entering/leaving such as map and set objects in many languages' library.",
      ],
      complexity: {
        time: ' Best : $O(1)$ Average : $O(logN)$ Worst : $O(N)$ ',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Binary_search_tree'>Wikipedia</a>",
      ],
    },
    {
      files: {
        in_order: 'Traverse Binary Tree In-order',
        post_order: 'Traverse Binary Tree Post-order',
        pre_order: 'Traverse Binary Tree Pre-order',
      },
      name: 'Binary Tree Traversal',
      category: 'tree',
      key: 'binary_tree_traversal',
      applications: [
        'Pre-order traversal while duplicating nodes and edges can make a complete duplicate of a binary tree.',
        'Pre-order traversal can also be used to make a prefix expression (Polish notation) from expression trees: traverse the expression tree pre-orderly.',
        'In-order traversal is very commonly used on binary search trees because it returns values from the underlying set in order, according to the comparator that set up the binary search tree (hence the name).',
        'Post-order traversal while deleting or freeing nodes and values can delete or free an entire binary tree.',
        'Post-order traversal can also generate a postfix representation of a binary tree.',
      ],
      complexity: {
        time: 'Best : $O(N)$ Average : $O(N)$ Worst : $O(N)$',
        space: 'Worst: $O(N)$ (recursive), Best: $O(1)$ (iterative)',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Tree_traversal'>Wikipedia</a>",
      ],
    },
    {
      files: {
        binary_tree: 'LCA in a Binary Tree',
      },
      name: 'Binary Tree Traversal',
      category: 'tree',
      key: 'lowest_common_ancestor',
      applications: [],
      complexity: {
        time: 'Worst: $O(N)$',
        space: 'Worst: $O(1)$',
      },
      references: [
        "<a href='http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/'>GeeksForGeeks</a>",
      ],
    },
  ],
};

export default ALGORITHMS;
