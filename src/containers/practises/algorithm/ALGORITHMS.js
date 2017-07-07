const ALGORITHMS = {
  backtracking: [
    {
      name: 'Knight’s tour problem',
      key: 'knight\'s_tour',
      category: 'backtracking',
      description: 'A knight\'s tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once. If the knight ends on a square that is one knight\'s move from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed, otherwise it is open.',
      complexity: {
        time: 'Worst $O(8^{N^{2}})$',
        space: 'Worst $O(N^2)$',
      },
      references: [
        '<a href=\'https://en.wikipedia.org/wiki/Knight%27s_tour\'>Wikipedia</a>',
      ],
      files: {
        basic: 'Solving the Knight’s tour problem using Backtracking & Recursion',
      },
    },
    {
      name: 'N Queens Problem',
      key: 'n_queens',
      category: 'backtracking',
      description: 'The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.',
      applications: [
        'Puzzle Solving',
        'Searching',
      ],
      complexity: {
        time: 'Worst $O(N!)$',
        space: 'Worst $O(N)$',
      },
      references: [
        '<a href=\'http://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/\'>geeksforgeeks</a>',
      ],
      files: {
        n_queens: 'Solving the N Queens Puzzle using Backtracking & Recursion',
      },
    },
  ],
  cryptography: [
    {
      name: 'Affine Cipher',
      key: 'affine_cipher',
      category: 'cryptography',
      description: 'The affine cipher is a type of monoalphabetic substitution cipher, wherein each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter.',
      applications: [
        'Cryptanalysis',
        'More complex Variations of Affine Cipher are used in practical cryptography',
      ],
      complexity: {
        time: 'worst $O(N)$, $N$ = length of plain/cipher text',
        space: 'worst $O(N)$, to create the new mapping (plain->cipher, cipher->plain)',
      },
      references: [
        '<a href=\'http://practicalcryptography.com/ciphers/affine-cipher/\'>Practicalcryptography</a>',
      ],
      files: {
        basic: 'Encrypting and Decrypting a string using affine functions',
      },
    },
    {
      name: 'Caesar Cipher',
      key: 'caesar_cipher',
      description: "In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.",
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
      files: {
        basic: 'Encrypting and Decrypting a string using character rotation',
      },
    },
  ],
  dp: [
    {
      name: 'Catalan Number',
      key: 'catalan_number',
      description: " In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects.The Catalan numbers on nonnegative integers n are a set of numbers that arise in tree enumeration problems of the type, 'In how many ways can a regular n-gon be divided into n-2 triangles if different orientations are counted separately?' (Euler's polygon division problem).",
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
      files: {
        catalan_number: 'Catalan Number',
      },
    },
    {
      name: 'Fibonacci Sequence',
      key: 'fibonacci',
      description: 'Finding Fibonacci sequence using dynamic programming.',
      complexity: {
        time: '$O(n)$',
        space: '$O(n)$',
      },
      references: [
        "<a href='https://en.wikipedia.org/wiki/Dynamic_programming#Fibonacci_sequence'>Wikipedia</a>",
      ],
      files: {
        basic: 'Fibonacci Sequence',
      },
    },
    {
      name: "Integer Partition",
      key: 'integer_partition',
      description: "In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers.",
      "Complexity": {
        "time": "$O(n(log \\, n))$",
        "space": "$O(n^2)$"
      },
      "References": [
        "<a href='https://en.wikipedia.org/wiki/Partition_(number_theory)'>Wikipedia</a>"
      ],
      "files": {
        "basic": "Integer partition"
      }
    },
    {
      name: "Knapsack Problem",
      key: 'knapsack_problem',
      descrption: "Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.",
      "Complexity": {
        "time": "$O(n^2)$",
        "space": "$O(n^2)$"
      },
      "References": [
        "<a href='https://en.wikipedia.org/wiki/Knapsack_problem'>Wikipedia</a>"
      ],
      "files": {
        "basic": "Knapsack problem"
      }
    },
    {
      name: "Longest Common Subsequence",
      key: 'longest_common_subsequence',
      descrption: "The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences)." ,
      "Complexity": {
        "time": "$O(m\\cdot n)$",
        "space": "$O(m\\cdot n)$"
      },
      "References": [
        "<a href='https://en.wikipedia.org/wiki/Longest_common_subsequence_problem'>Wikipedia</a>"
      ],
      "files": {
        "basic": "Longest common subsequence"
      }
    },
  ],
};

export default ALGORITHMS;
