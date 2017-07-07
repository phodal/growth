const ALGORITHMS = {
  backtracking: {
    "knight's_tour": {
      files: {
        basic: 'Solving the Knight’s tour problem using Backtracking & Recursion',
      },
      name: 'Knight’s tour problem',
      description: "A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once. If the knight ends on a square that is one knight's move from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed, otherwise it is open.",
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
    n_queens: {
      files: {
        n_queens: 'Solving the N Queens Puzzle using Backtracking & Recursion',
      },
      name: 'N Queens Problem',
      description: 'The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.',
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
  },
  cryptography: {
    affine_cipher: {
      files: {
        basic: 'Encrypting and Decrypting a string using affine functions',
      },
      name: 'Affine Cipher',
      description: 'The affine cipher is a type of monoalphabetic substitution cipher, wherein each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter.',
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
    caesar_cipher: {
      files: {
        basic: 'Encrypting and Decrypting a string using character rotation',
      },
      name: 'Caesar Cipher',
      description: "In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.",
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
  },
  dp: {
    catalan_number: {
      files: {
        catalan_number: 'Catalan Number',
      },
      name: 'Catalan Number',
      description: " In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects.The Catalan numbers on nonnegative integers n are a set of numbers that arise in tree enumeration problems of the type, 'In how many ways can a regular n-gon be divided into n-2 triangles if different orientations are counted separately?' (Euler's polygon division problem).",
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
    fibonacci: {
      files: {
        basic: 'Fibonacci Sequence',
      },
      name: 'Fibonacci Sequence',
      description: 'Finding Fibonacci sequence using dynamic programming.',
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
    integer_partition: {
      files: {
        basic: 'Integer partition',
      },
      name: 'Integer Partition',
      description: 'In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers.',
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
    knapsack_problem: {
      files: {
        basic: 'Knapsack problem',
      },
      name: 'Knapsack Problem',
      description: 'Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.',
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
    longest_common_subsequence: {
      files: {
        basic: 'Longest common subsequence',
      },
      name: 'Longest Common Subsequence',
      description: 'The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences).',
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
    longest_increasing_subsequence: {
      files: {
        basic: 'Longest increasing subsequence',
      },
      name: 'Longest Increasing Subsequence',
      description: 'Find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order',
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
    longest_palindromic_subsequence: {
      files: {
        basic: 'Longest Palindromic Subsequence',
      },
      name: 'Longest Palindromic Subsequence',
      description: 'Find the length of the longest palindromic subsequence in a given sequence',
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
    max_subarray: {
      files: {
        basic: 'Maximum subarray',
      },
      name: 'Maximum Subarray',
      description: 'Find the sum of the maximum Subarray in the given Array',
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
    max_sum_path: {
      files: {
        basic: 'Maximum sum path',
      },
      name: 'Maximum Sum Path',
      description: 'Finding the maximum sum in a path from (0, 0) to (N-1, M-1) when can only move to right or down',
      category: 'dp',
      key: 'max_sum_path',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [],
    },
    pascal_triangle: {
      files: {
        pascal_triangle: "Pascal's Triangle",
      },
      name: "Pascal's Triangle",
      description: " Pascal's triangle is a triangular array of the binomial coefficients.",
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
    shortest_common_supersequence: {
      files: {
        basic: 'Shortest common supersequence',
      },
      name: 'Shortest Common Supersequence',
      description: 'n computer science, the shortest common supersequence problem is a problem closely related to the longest common subsequence problem. Given two sequences X = < x1,...,xm > and Y = < y1,...,yn >, a sequence U = < u1,...,uk > is a common supersequence of X and Y if U is a supersequence of both X and Y. In other words, a shortest common supersequence of strings x and y is a shortest string z such that both x and y are subsequences of z.',
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
    sliding_window: {
      files: {
        basic: 'Sliding window',
      },
      name: 'Sliding Window',
      description: 'Finding the largest sum of three contiguous number',
      category: 'dp',
      key: 'sliding_window',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [],
    },
    ugly_numbers: {
      files: {
        basic: 'Ugly Numbers',
      },
      name: 'Ugly Numbers',
      description: 'Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence (1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …) shows the first 11 ugly numbers. By convention, 1 is included. The given code displays the first N ugly numbers.',
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
  },
  etc: {
    cellular_automata: {
      files: {
        cellular_automata: '',
      },
      name: 'Cellular Automata',
      description: "Uses a grid of cells and looks at each cell and the state (ex: on/off) of each of the surrounding neighbor cells and changes the state of the current cell according to a set of rules based on the neighbor cells' states.",
      category: 'etc',
      key: 'cellular_automata',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Cellular_automaton'>Wikipedia</a>",
      ],
    },
    create_maze: {
      files: {
        create_maze: '',
      },
      name: 'Create Maze',
      description: 'Building a maze can be done with using disjoint sets.',
      category: 'etc',
      key: 'create_maze',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Disjoint-set_data_structure'>Disjoint Sets Wikipedia</a>",
      ],
    },
    flood_fill: {
      files: {
        flood_fill: '',
      },
      name: 'Flood Fill',
      description: 'Flood fill, also called seed fill, is an algorithm that determines the area connected to a given node in a multi-dimensional array',
      category: 'etc',
      key: 'flood_fill',
      references: [
        "<a href='https://en.wikipedia.org/wiki/Flood_fill'>Wikipedia</a>",
      ],
    },
    magic_square: {
      files: {
        basic: 'Magic Square',
      },
      name: 'Magic Square',
      description: "In recreational mathematics, a magic square is an arrangement of distinct numbers (i.e., each number is used once), usually integers, in a square grid, where the numbers in each row, and in each column, and the numbers in the main and secondary diagonals, all add up to the same number, called the magic constant. A magic square has the same number of rows as it has columns, and in conventional math notation, 'n' stands for the number of rows (and columns) it has. Thus, a magic square always contains n2 numbers, and its size (the number of rows [and columns] it has) is described as being of order n. A magic square that contains the integers from 1 to n2 is called a normal magic square. (The term magic square is also sometimes used to refer to any of various types of word squares.)",
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
    stable_matching: {
      files: {
        basic: 'Stable Matching',
      },
      name: 'Stable Matching',
      description: 'In mathematics, economics, and computer science, the stable marriage problem (also stable matching problem or SMP) is the problem of finding a stable matching between two equally sized sets of elements given an ordering of preferences for each element. A matching is a mapping from the elements of one set to the elements of the other set. A matching is not stable if: There is an element A of the first matched set which prefers some given element B of the second matched set over the element to which A is already matched, and also prefers A over the element to which B is already matched. In other words, a matching is stable when there does not exist any match (A, B) by which both A and B would be individually better off than they are with the element to which they are currently matched.',
      category: 'etc',
      key: 'stable_matching',
      complexity: {
        time: ' $O(N^2)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Stable_marriage_problem'>Wikipedia</a>",
      ],
    },
  },
  graph_search: {
    bellman_ford: {
      files: {
        shortest_path: 'Finding the shortest path',
      },
      name: 'Bellman-Ford',
      description: "The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is different from Dijkstra's Shortest Path Algorithm because it allows NEGATIVE weights unlike Dijkstra's.",
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
    bfs: {
      files: {
        tree: 'Searching a tree',
        shortest_path: 'Finding the shortest path',
        test_bipartiteness: 'Test if graph is biparted (or 2-colorable)',
      },
      name: 'BFS',
      description: "Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores the neighbor nodes first, before moving to the next level neighbors.",
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
    bridges: {
      files: {
        naive: 'Find all the bridges in an Undirected Graph',
        efficient: 'Efficiently find all the bridges in an Undirected Graph',
      },
      name: 'Bridges',
      description: 'An edge in an undirected connected graph is a bridge iff removing it disconnects the graph. A naive solution to finding bridges in a graph is to:<br /> 1.Delete an edge E<br /> 2.Perform DFS Exploration to check if the Graph is still connected<br /> 3.Restore Edge E. E is a bridge only if DFS exploration determines that the graph is disconnected without E. <br /> <br /> A more efficient solution, which can find bridges in linear time, is to perform a DFS (depth-first-search) on the graph. At each step: <br /> 1. Number the vertex with a counter. The first vertex visited should be labelled 0, the second vertex labelled 1, etc. <br /> 2. Each vertex should also keep track of the lowest numbered vertex that can be reached with the DFS. This can be done recursively by looking at the smallest "low" of its children <br /> 3. If the lowest vertex that can be reached with the DFS is greater than its own label, that means the edge with its parent is a bridge. This is because the vertex cannot reach its parent with the DFS, implying that the edge is not part of a cycle. ',
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
    dfs: {
      files: {
        tree: 'Searching a tree',
        all_paths: 'Going through all possible paths without making any circuit',
        weighted_graph: 'DFS of Weighted Graph',
        shortest_path: 'Finding the shortest path',
        exploration: 'Explore an undirected graph to see if it is connected',
      },
      name: 'DFS',
      description: 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.',
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
    dijkstra: {
      files: {
        shortest_path: 'Finding the shortest path between two nodes',
      },
      name: 'Dijkstra',
      description: "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.",
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
    dls: {
      files: {
        tree: 'Searching a tree (limited depth)',
        count_descendant: 'Count all descendant of root within some depth',
      },
      name: 'DLS',
      description: "Depth-Limited search (DLS) is an algorithm for traversing or searching tree or graph data structures. It's actually specific type of DFS where the search is limited to some depth from start node (root). One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible (within some limit) along each branch before backtracking.",
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
    floyd_warshall: {
      files: {
        shortest_paths: 'Finding the shortest path between all nodes',
      },
      name: 'Floyd-Warshall',
      description: 'Floyd–Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles)',
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
    page_rank: {
      files: {
        basic: 'Version #1 of PageRank Algorithm (does not take into account the total number of nodes in the graph, i.e., number of pages on web).',
        v2: 'Version #2 divides (1 - D), where D = damping factor, by N, the total no. of documents on internet (nodes in Graph). The resultant Page Ranks form a probability distribution.',
      },
      name: 'PageRank-Algorithm',
      description: 'PageRank is an algorithm used by Google Search to rank websites in their search engine results.<br />Before viewing this visualization, we recommend you give the E-Factory Page a read (link provided under References).<br />The top-most view simulates a mini-internet: a web of connections. A directed edge from A to B means that web Page A provides a link to B. The next view will display the final ranks. We first calculate the no. of links a page has, i.e., its <b>outgoing edges</b> and display in the next view pane.<br />The last visual is an array of arrays. From 0 (top of matrix) down to the Nth Node (bottom), each stores an array of the <b>Nodes pointing to it</b>.<br />For eg-if the first line of Matrix says "2 3 -1 -1 -1", it means Web Page 2 and 3 have a link to Web Page 0. The -1s represent null (nothing).<br />The bottom-most view is where you will see the logs as the algorithm progresses.',
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
    tarjan: {
      files: {
        basic: 'Find the strongly connected components of a graph',
      },
      name: 'Tarjan',
      description: "Tarjan's algorithm is an algorithm in graph theory for finding the strongly connected components of a graph",
      category: 'graph_search',
      key: 'tarjan',
      complexity: {
        time: 'worst $O(|V|+|E|)$',
      },
      references: [
        "<a href='https://www.wikiwand.com/en/Tarjan%27s_strongly_connected_components_algorithm'>Wikipedia</a>",
      ],
    },
    topological_sort: {
      files: {
        kahn_algorithm: 'Performing Topological Sort using Queue Data Structure & an array of In-degrees',
      },
      name: 'Topological-Sort',
      description: 'Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG. NOTE: when the graph is represented as an Adjacency Matrix, the Calculation of in-degree Array becomes O(|V|<sup>2</sup>)',
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
  },
  greedy: {
    job_scheduling: {
      files: {
        job_scheduling: 'Job Scheduling Algorithm',
      },
      name: 'Job Scheduling Algorithm',
      description: 'An array of jobs along with their deadline and profit (if job completes within deadline) where every job takes single unit of time. Maximize total profit if only one job can be scheduled at a time.',
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
    majority_element: {
      files: {
        basic: 'Find majority element in array using Boyer–Moore majority vote algorithm',
      },
      name: 'Majority Element(Boyer–Moore majority vote algorithm)',
      description: 'The majority vote problem is to determine in any given sequence of choices whether there is a choice with more occurrences than half of the total number of choices in the sequence and if so, to determine this choice.',
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
  },
  mst: {
    kruskal: {
      files: {
        normal: 'Finds minimum spanning tree of a given graph.',
      },
      name: "Kruskal's Algorithm",
      description: 'Greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.',
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
    prim: {
      files: {
        normal: 'Finds minimum spanning tree of a given graph.',
      },
      name: "Prim's Algorithm",
      description: 'Greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.',
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
  },
  number_theory: {
    euclidean_algorithm: {
      files: {
        basic: 'Euclidean Algorithm',
      },
      name: 'Euclidean Algorithm',
      description: 'Finds the greatest common divisor of two positive integers. The Euclidean Algorithm uses the fact that gcd(m, n) = gcd(m, n % m).',
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
    freivalds_algorithm: {
      files: {
        basic: 'Freivalds Algorithm',
      },
      name: 'Freivalds Algorithm',
      description: "Freivalds' algorithm is a probabilistic randomized algorithm used to verify matrix multiplication. Given three n × n matrices A, B, and C, a general problem is to verify whether A*B=C",
      category: 'number_theory',
      key: 'freivalds_algorithm',
      complexity: {
        time: '$O(n^2)$',
      },
      references: [
        "<a href='https://www.wikiwand.com/en/Freivalds%27_algorithm'>Wikipedia</a>",
      ],
    },
    miller_rabin_primality_test: {
      files: {
        basic: 'Miller Rabin primality test',
      },
      name: 'Miller-Rabin primality test',
      description: 'Determines whether a given number is prime',
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
    sieve_of_eratosthenes: {
      files: {
        basic: 'Sieve of Eratosthenes',
      },
      name: 'Sieve of Eratosthenes',
      description: 'Finding all prime numbers up to a given range.',
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
  },
  scratch_paper: {
    '': {
      'Code written in the ...': {
        '... top editor': 'predefines data variables that will be shown in a visualizing module.',
        '... bottom editor': 'actually implements and visualizes the algorithm.',
      },
      'Be our contributor': "If you want to add your code to the side menu, check out our <strong><a href='https://github.com/parkjs814/AlgorithmVisualizer/wiki'>wiki</a></strong>!",
      files: {
        scratch_paper: 'Write down your own algorithm!',
      },
      name: 'Scratch Paper',
      description: 'Write down your own algorithm to be visualized.',
      category: 'scratch_paper',
      key: '',
    },
  },
  search: {
    binary_search: {
      files: {
        recursive: 'Recursively searching a sorted array',
        iterative: 'Iteratively searching a sorted array',
      },
      name: 'Binary Search',
      description: 'Binary Search is a search algorithm that finds the position of a target value within a sorted array. It works by comparing the target value to the middle element of the array; if they are unequal, the lower or upper half of the array is eliminated depending on the result and the search is repeated in the remaining subarray until it is successful.',
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
  },
  sorting: {
    bubble: {
      files: {
        basic: 'Bubble sort',
      },
      name: 'Bubble Sort',
      description: 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.',
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
    bucket: {
      files: {
        basic: 'Bucket sort',
      },
      name: 'Bucket Sort',
      description: 'Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.',
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
    comb: {
      files: {
        basic: 'Bubble sort',
      },
      name: 'Comb Sort',
      description: 'Comb sort is a relatively simple sorting algorithm originally designed by Włodzimierz Dobosiewicz in 1980. Later it was rediscovered by Stephen Lacey and Richard Box in 1991. Comb sort improves on bubble sort. <br /><br />The basic idea is to eliminate turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort.',
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
    counting: {
      files: {
        basic: 'Counting sort',
      },
      name: 'Counting Sort',
      description: 'Counting sort is a sorting algorithm for a collection of objects. Sorting is done according to the keys (small integers) of the objects. This works by counting the number of objects that have each distinct key value, and then using those counts to determine the positions of each key value.',
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
    cycle: {
      files: {
        basic: 'Cycle Sort',
      },
      name: 'Cycle Sort',
      description: 'Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result.',
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
    heap: {
      files: {
        basic: 'Heap sort',
      },
      name: 'Heap Sort',
      description: 'Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.',
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
    insertion: {
      files: {
        basic: 'Insertion sort',
      },
      name: 'Insertion Sort',
      description: 'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
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
    merge: {
      files: {
        bottom_up: 'Bottom-up implementation',
        top_down_list: 'Top-down implementation using lists',
      },
      name: 'Merge Sort',
      description: 'In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output. Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and Neumann as early as 1948.',
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
    pancake: {
      files: {
        basic: 'Pancake sort',
      },
      name: 'Pancake Sort',
      description: 'Pancake Sort,inspired from sorting a stack of pancake using spatula, is a simple sorting algorithm that only have 1 operation called flip. </br> flip (i) : Reverse array from i to N where N is length of array ',
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
    pigeonhole: {
      files: {
        basic: 'Pigeonhole Sort',
      },
      name: 'Pigeonhole Sort',
      description: 'Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the number of possible key values (N) are approximately the same.',
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
    quick: {
      files: {
        basic: 'Quicksort',
      },
      name: 'Quicksort',
      description: 'Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959, with his work published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.',
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
    radix: {
      files: {
        lsd: 'LSD Radix sort',
      },
      name: 'Radix LSD Sort',
      description: 'Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value.',
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
    selection: {
      files: {
        basic: 'Selection sort',
      },
      name: 'Selection Sort',
      description: 'Selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.',
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
    shell: {
      files: {
        basic: 'Shellsort',
      },
      name: 'Shellsort',
      description: "Shellsort, also known as Shell sort or Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.",
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
  },
  string: {
    edit_distance: {
      files: {
        dynamic_programming: 'Distance from str1 to str2 using Dynamic Programming (2D Array method)',
      },
      name: 'Edit-Distance',
      description: 'Given two strings str1 (length M) and str2 (length N) and below operations that can performed on str1. Find minimum number of edits (operations) required to convert str1 into str2.<br />Insert<br />Remove<br />Replace<br />All of the above operations are of equal cost',
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
    knuth_morris_pratt: {
      files: {
        substring_search: "Efficiently find is A is a substring of B (and A's position(s))",
      },
      name: 'Knuth-Morris-Pratt',
      description: 'searches for occurrences of a substring W with length K within a main string S with Length N by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters',
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
    rabin_karp_algorithm: {
      files: {
        basic: 'Rabin-Karp Algorithm',
      },
      name: 'Rabin–Karp Algorithm',
      description: 'Rabin–Karp algorithm or Karp–Rabin algorithm is a string searching algorithm created by Richard M. Karp and Michael O. Rabin (1987) that uses hashing to find any one of a set of pattern strings in a text.',
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
    suffix_array: {
      files: {
        construction_naive: 'Suffix Array inefficient construction',
      },
      name: 'Suffix Array',
      description: 'a suffix array is just a sorted array of all the suffixes of a given string. The main algorithms include (efficient & inefficient) construction of Suffix Array and how we can use it for substring search & other purposes',
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
    z_algorithm: {
      files: {
        pattern_search: 'Find the occurances and position of a pattern in a text',
      },
      name: 'Z Algorithm',
      description: 'Finding all the occurances of a pattern (length = M) in a text (length = N) in linear time',
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
  },
  tree: {
    binary_search_tree: {
      files: {
        bst_search: 'Search in Binary Search Tree',
        bst_insert: 'Insert in Binary Search Tree',
      },
      name: 'Binary Search Tree',
      description: 'Binary search trees (BST), sometimes called ordered or sorted binary trees, are a particular type of containers: data structures that store "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).',
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
    binary_tree_traversal: {
      files: {
        in_order: 'Traverse Binary Tree In-order',
        post_order: 'Traverse Binary Tree Post-order',
        pre_order: 'Traverse Binary Tree Pre-order',
      },
      name: 'Binary Tree Traversal',
      description: 'In computer science, tree traversal (also known as tree search) is a form of graph traversal and refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. Such traversals are classified by the order in which the nodes are visited.',
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
    lowest_common_ancestor: {
      files: {
        binary_tree: 'LCA in a Binary Tree',
      },
      name: 'Binary Tree Traversal',
      description: 'The LCA of n1 and n2 in T is the shared ancestor of n1 and n2 that is located farthest from the root.',
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
  },
};

export default ALGORITHMS;
