const ALGORITHMS = {
  backtracking: {
    "knight's_tour": {
      code: "function knightTour(x, y, moveNum) {\n\tif (moveNum === N*N) {\n\t\treturn true;\n\t}\n\n\tfor (var i = 0; i < 8; i++) {\n\t\tvar nextX = x + X[i];\n\t\tvar nextY = y + Y[i];\n\t\t\n\t\tposTracer._notify ( 0, nextX)._wait ();\n\t\tposTracer._notify ( 1, nextY)._wait ();\n\t\tposTracer._denotify (0);\n\t\tposTracer._denotify (1);\n\t\t/*\n\t\tCheck if knight is still in the board\n\t\tCheck that knight does not visit an already visited square\n\t\t*/\n\t\tif (nextX>=0 && nextX<N && nextY>=0 && nextY<N && board[nextX][nextY]===-1) {\n\t\t\tboard[nextX][nextY] = moveNum;\n\t\t\t\n\t\t\tlogTracer._print ('Move to ' + nextX + ',' + nextY);\n\t\t\tboardTracer._notify ( nextX, nextY, moveNum)._wait();\n\t\t\tboardTracer._denotify( nextX, nextY);\n\t\t\tboardTracer._select ( nextX, nextY);\n\t\t\t\n\t\t\tvar nextMoveNum = moveNum + 1;\n\t\t\tif ( knightTour (nextX,nextY, nextMoveNum) === true) {\n\t\t\t\treturn true;\n\t\t\t} else {\n\t\t\t\tlogTracer._print ('No place to move from ' + nextX + ',' +nextY + ': Backtrack');\n\t\t\t\tboard[nextX][nextY] = -1; // backtrack \n\t\t\t\tboardTracer._notify ( nextX, nextY, -1)._wait();\n\t\t\t\tboardTracer._denotify( nextX, nextY);\n\t\t\t\tboardTracer._deselect( nextX, nextY);\n\t\t\t}\n\t\t} else {\n\t\t\tlogTracer._print (nextX + ',' + nextY + ' is not a valid move');\n\t\t}\n\t}\n\treturn false;\n}\n\nboard[0][0] = 0; // start from this position\npos[0] = 0;\npos[0] = 0;\n\nboardTracer._notify ( 0, 0, 0)._wait();\nposTracer._notify ( 0, 0)._wait ();\nposTracer._notify ( 1, 0)._wait ();\nboardTracer._denotify( 0, 0);\nboardTracer._denotify( 0, 0);\nposTracer._denotify (0);\nposTracer._denotify (1);\n\nif (knightTour ( 0, 0, 1) === false ) {\n\tlogTracer._print ('Solution does not exist');\n} else {\n\tlogTracer._print ('Solution found');\n}\n",
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
      code: "function validState (row, col, currentQueen) {\n\tfor (var q = 0; q < currentQueen; q++) {\n\t\tvar currentQ = queens [q];\n\t\tif ( row === currentQ [0] || col === currentQ [1] || ( Math.abs(currentQ [0] - row) === Math.abs(currentQ [1] - col)) ) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\n\nfunction nQ (currentQueen, currentCol) {\n\tlogger._print ('Starting new iteration of nQueens () with currentQueen = ' + currentQueen +  ' & currentCol = ' + currentCol);\n\tlogger._print ('------------------------------------------------------------------');\n\tif (currentQueen >= N) {\n\t\tlogger._print ('The recursion has BOTTOMED OUT. All queens have been placed successfully');\n\t\treturn true;\n\t}\n\n\tvar found = false, row = 0;\n\twhile ( (row < N) && (!found) ) {\n\t\tboardTracer._select (row, currentCol)._wait ();\n\t\tlogger._print ('Trying queen ' + currentQueen + ' at row ' + row + ' & col ' + currentCol);\n\t\t\n\t\tif (validState (row, currentCol, currentQueen)) {\n\t\t\tqueens [currentQueen] [0] = row;\n\t\t\tqueens [currentQueen] [1] = currentCol;\n\n\t\t\tqueenTracer._notify (currentQueen, 0, row)._wait ();\n\t\t\tqueenTracer._notify (currentQueen, 1, currentCol)._wait ();\n\t\t\tqueenTracer._denotify (currentQueen, 0)._wait ();\n\t\t\tqueenTracer._denotify (currentQueen, 1)._wait ();\n\n\t\t\tfound = nQ (currentQueen + 1, currentCol + 1);\n\t\t}\n\n\t\tif (!found) {\n\t\t\tboardTracer._deselect (row, currentCol)._wait ();\n\t\t\tlogger._print ('row ' + row + ' & col ' + currentCol + ' didn\\'t work out. Going down');\n\t\t}\n\t\trow++;\n\t}\n\n\treturn found;\n}\n\nlogger._print ('Starting execution');\nnQ (0, 0);\nlogger._print ('DONE');",
    },
  },
  cryptography: {
    affine_cipher: {
      code: "/*\n code assumes that plainText contains ONLY LOWER CASE ALPHABETS\n */\n\nNumber.prototype.mod = function (n) {\n  return ((this % n) + n) % n;\n};\n\nvar keys = {a: 5, b: 7},\n  N = 26;\n\nfunction encrypt(plainText) {\n  var cypherText = '';\n\n  function cryptAlpha(alpha) {\n    var index = alpha.charCodeAt(0) - 'a'.charCodeAt(0);\n    var result = ((keys.a * index) + keys.b).mod(N);\n\n    logger._print('Index of ' + alpha + ' = ' + index);\n\n    result += 'a'.charCodeAt(0);\n    return String.fromCharCode(result);\n  }\n\n  logger._print('Beginning Affine Encryption');\n  logger._print('Encryption formula: <b>((keys.a * index_of_alphabet) + keys.b) % N</b>');\n  logger._print('keys.a=' + keys.a + ', keys.b=' + keys.b + ', N=' + N);\n\n  for (var i in plainText) {\n    ptTracer._select(i)._wait();\n    ptTracer._deselect(i);\n\n    cypherText += cryptAlpha(plainText [i]);\n\n    ptTracer._notify(i, cypherText.slice(-1))._wait();\n    ptTracer._denotify(i);\n  }\n\n  return cypherText;\n}\n\nfunction decrypt(cypherText) {\n  var plainText = '';\n  var aInverse = (function () {\n    for (var i = 1; i < N; i++) {\n      if (((keys.a * i).mod(N)) === 1) {\n        return i;\n      }\n    }\n  })();\n\n  logger._print('a<sup>-1</sup> = ' + aInverse);\n\n  function decryptAlpha(alpha) {\n    var index = alpha.charCodeAt(0) - 'a'.charCodeAt(0);\n    var result = (aInverse * (index - keys.b)).mod(N);\n\n    logger._print('Index of ' + alpha + ' = ' + index);\n\n    result += 'a'.charCodeAt(0);\n    return String.fromCharCode(result);\n  }\n\n  logger._print('Beginning Affine Decryption');\n  logger._print('Decryption formula: <b>(a<sup>-1</sup> * (index - keys.b)) % N</b>');\n  logger._print('keys.b=' + keys.b + ', N=' + N);\n\n  for (var i in cypherText) {\n    ctTracer._select(i)._wait();\n    ctTracer._deselect(i)._wait();\n\n    plainText += decryptAlpha(cypherText [i]);\n\n    ctTracer._notify(i, plainText.slice(-1))._wait();\n    ctTracer._denotify(i)._wait();\n  }\n\n  return plainText;\n}\n\nvar cipherText = encrypt(plainText);\nctTracer._setData(cipherText);\ndecrypt(cipherText);",
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
      code: "function getPosUp(pos) {\n  return (pos === alphabet.length - 1) ? 0 : pos + 1;\n}\n\nfunction getPosDown(pos) {\n  return (pos === 0) ? alphabet.length - 1 : pos - 1;\n}\n\nfunction getNextChar(currChar, direction) {\n  var pos = alphabetMap[currChar];\n  var nextPos = direction === 'up' ? getPosUp(pos) : getPosDown(pos);\n  var nextChar = alphabet.charAt(nextPos);\n\n  logger._print(currChar + ' -> ' + nextChar);\n  return nextChar;\n}\n\nfunction cipher(str, rotation, direction, cipherTracer) {\n  if (!str) return '';\n\n  for (var i = 0; i < str.length; i++) {\n\n    cipherTracer._wait();\n\n    var currChar = str.charAt(i);\n    if (typeof alphabetMap[currChar] === 'number') { // don't encrpt/decrypt characters not in  alphabetMap\n      var r = rotation;\n\n      logger._print('Rotating ' + currChar + ' ' + direction + ' ' + rotation + ' times');\n      cipherTracer._select(i)._wait();\n\n      // perform given amount of rotations in the given direction\n      while (r-- > 0) {\n        currChar = getNextChar(currChar, direction);\n        cipherTracer._notify(i, currChar)._wait();\n      }\n    } else {\n      logger._print('Ignore this character');\n    }\n    str = str.substring(0, i) + currChar + str.substring(i + 1);\n    logger._print('Current result: ' + str);\n  }\n\n  return str;\n}\n\nfunction encrypt(str, rotation) {\n  logger._print('Encrypting: ' + str);\n  return cipher(str, rotation, 'up', encryptTracer);\n}\n\nfunction decrypt(str, rotation) {\n  logger._print('Decrypting: ' + str);\n  return cipher(str, rotation, 'down', decryptTracer);\n}\n\nvar encrypted = encrypt(string, rotation);\nlogger._print('Encrypted result: ' + encrypted);\n\ndecryptTracer._setData(encrypted);\nvar decrypted = decrypt(encrypted, rotation);\nlogger._print('Decrypted result: ' + decrypted);\n",
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
      code: "A[0] = 1;\ntracer._notify ( 0, A[0] )._wait();\ntracer._denotify ( 0 );\nA[1] = 1;\ntracer._notify ( 1, A[1] )._wait();\ntracer._denotify ( 1 );\n\nfor (var i = 2; i <= N; i++) {\n\tfor (var j = 0; j < i; j++) {\n\t\tA[i] += A[j] * A[i-j-1];\n\t\ttracer._select( j )._wait();\n\t\ttracer._select( i - j -1 )._wait();\n\t\ttracer._notify( i, A[i])._wait();\n\t\ttracer._deselect( j );\n\t\ttracer._deselect( i - j - 1 );\n\t\ttracer._denotify( i );\n\t}\n}\n\nlogger._print ( ' The ' + N + 'th Catalan Number is ' + A[N] );\ntracer._select( N )._wait();",
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
      code: 'for (var i = 2; i < index; i++) {\n    D[i] = D[i - 2] + D[i - 1];\n    tracer._select(i - 2, i - 1)._wait();\n    tracer._notify(i, D[i])._wait();\n    tracer._denotify(i);\n    tracer._deselect(i - 2, i - 1);\n}',
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
      code: "function partition(A, n, p){\n  if (n === 0) tracer.logTracer._print('[' + A.join(', ') + ']');\n  else {\n    var end = n;\n    if (p !== 0 && A[p-1] < n) end = A[p-1];\n    for (var i = end; i > 0; i--){\n        A[p] = i;\n        partition(A, n-i, p+1);\n    }\n  }\n}\n\nfunction integerPartition(n){\n  //Calculate number of partitions for all numbers from 1 to n\n  for (var i = 2; i <= n; i++){\n    // We are allowed to use numbers from 2 to i\n    for (var j = 1; j <= i; j++){\n      // Number of partitions without j number + number of partitions with max j\n      tracer._select(i, j)._wait();\n      D[i][j] = D[i][j-1] + D[i-j][Math.max(j, i-j)];\n      tracer._notify(i, j, D[i][j])._wait();\n      tracer._denotify(i, j);\n      tracer._deselect(i, j);\n    }\n  }\n  return D[n][n];\n}\n\ntracer.logTracer._print('Partitioning: ' + integer);\npartition(A, integer, 0);\nvar part = integerPartition(integer);\ntracer.logTracer._print(part);",
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
      code: "\nfor ( var i = 0; i <= N; i++ ) {\n\tfor( var j = 0; j <= W; j++ ) {\n\t\tif( i === 0 || j === 0 ) { \n\t\t\t/*\n\t\t\tIf we have no items or maximum weight we can take in collection is 0 \n\t\t\tthen the total weight in our collection is 0\n\t\t\t*/\n\t\t\tDP[i][0] = 0;\n\t\t\ttracer._notify( i, j, DP[i][j])._wait();\n\t\t\ttracer._denotify( i, j);\n\t\t} else if ( wt[i-1] <= j ) { // take the current item in our collection\n\n\t\t\tdataViewer1._select(i-1)._wait();\n\t\t\tdataViewer2._select(i-1)._wait();\n\t\t\ttracer._select( i-1, j)._wait();\n\n\t\t\tvar A = val[i - 1] + DP[i - 1][j - wt[i - 1]];\n\t\t\tvar B = DP[i - 1][j];\n\t\t\t/*\n\t\t\tfind the maximum of these two values\n\t\t\tand take which gives us a greater weight\n\t\t\t */\n\t\t\tif (A > B) {\n\t\t\t\tDP[i][j] = A;\n\t\t\t\ttracer._notify( i, j, DP[i][j])._wait();\n\t\t\t} else {\n\t\t\t\tDP[i][j] = B;\n\t\t\t\ttracer._notify( i, j, DP[i][j])._wait();\n\t\t\t}\n\n\t\t\ttracer._deselect( i-1, j);\n\t\t\ttracer._denotify( i, j);\n\t\t\tdataViewer2._deselect(i-1);\n\t\t\tdataViewer1._deselect(i-1);\n\n\t\t} else { // leave the current item from our collection \n\n\t\t\tDP[i][j] = DP[i - 1][j];\n\t\t\ttracer._notify( i, j, DP[i][j])._wait();\n\t\t\ttracer._denotify( i, j);\n\t\t}\n\t}\n}\n\nlogger._print(' Best value we can achieve is ' + DP[N][W]);\n",
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
      code: "var i,j;\n\n// Build the memo table in bottom up fashion \n for( i = 0; i <= m; i++ ) {\n \tfor( j = 0; j <= n; j++ ) {\n \t\tif ( i === 0 || j === 0 ) {\n \t\t\tA[i][j] = 0;\n \t\t} else if ( string1[i-1] == string2[j-1] ) {\n \t\t\ttracer1._select ( i-1 )._wait ();\n \t\t\ttracer2._select ( j-1 )._wait ();\n \t\t\ttracer3._select ( i-1, j-1 )._wait ();\n \t\t\t\n \t\t\tA[i][j] = A[i-1][j-1] + 1;\n \t\t\t\n \t\t\ttracer1._deselect ( i-1 );\n \t\t\ttracer2._deselect ( j-1 );\n \t\t\ttracer3._deselect ( i-1, j-1 );\n \t\t} else {\n \t\t\ttracer3._select ( i-1, j )._wait ();\n \t\t\ttracer3._select ( i, j-1 )._wait ();\n \t\t\t\n \t\t\tif( A[i-1][j] > A[i][j-1] ) {\n \t\t\t\tA[i][j] = A[i-1][j];\n \t\t\t} else {\n \t\t\t\tA[i][j] = A[i][j-1];\n \t\t\t}\n \t\t\t\n \t\t\ttracer3._deselect ( i-1, j );\n \t\t\ttracer3._deselect ( i, j-1 );\n \t\t}\n \t\ttracer3._notify ( i, j , A[i][j] )._wait ();\n \t\ttracer3._denotify( i, j );\n \t}\n }\n\nvar finalString = '';\ni=m;\nj=n;\nwhile( i>=1 && j>=1 ) {\n\n\ttracer3._select ( i, j )._wait ();\n\tif( string1[i-1] == string2[j-1] ) {\n\t\ttracer1._select ( i-1 )._wait ();\n \t\ttracer2._select ( j-1 )._wait ();\n \t\t\n\t\tfinalString = string1[i-1] + finalString;\n\t\ti--;\n\t\tj--;\n\t} else if( A[i-1][j] > A[i][j-1] ) {\n\t\ti--;\n\t} else {\n\t\tj--;\n\t}\n}\n\nlogger._print ( 'Longest Common Subsequence Length is ' + A[m][n] );\nlogger._print ( 'Longest Common Subsequence is ' + finalString );",
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
      code: "// Initialize LIS values for all indexes\nfor (var i = 0; i < A.length; i++) {\n    LIS[i] = 1;\n}\n\nlogger._print('Calculating Longest Increasing Subsequence values in bottom up manner ');\n// Compute optimized LIS values in bottom up manner\nfor (var i = 1; i < A.length; i++) {\n    tracer._select(i);\n    logger._print(' LIS[' + i + '] = ' + LIS[i]);\n    for (var j = 0; j < i; j++) {\n        tracer._notify(j)._wait();\n        tracer._denotify(j);\n        if (A[i] > A[j] && LIS[i] < LIS[j] + 1) {\n            LIS[i] = LIS[j] + 1;\n            logger._print(' LIS[' + i + '] = ' + LIS[i]);\n        }\n    }\n    tracer._deselect(i);\n}\n\n// Pick maximum of all LIS values\nlogger._print('Now calculate maximum of all LIS values ');\nvar max = LIS[0];\nfor (var i = 1; i < A.length; i++) {\n\tif (max < LIS[i]) {\n\t\tmax = LIS[i];\n\t}\n}\nlogger._print('Longest Increasing Subsequence = max of all LIS = ' + max);\n",
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
      code: 'function max(a,b) {\n  if(a>b){\n    return a;\n  } else {\n    return b;\n  }\n}\nlogger._print("LPS for any string with length = 1 is 1");\nfor(i=2;i<=N;i++) {\n  logger._print("--------------------------------------------------");\n  logger._print("Considering a sub-string of length "+i);\n  logger._print("--------------------------------------------------");\n  for(j=0;j<N-i+1;j++) {\n    var k = j+i-1;\n    tracer._select(j)._wait();\n    tracer._notify(k)._wait();\n\n    logger._print("Comparing "+seq[j] + " and "+seq[k]);\n\n    if(seq[j]==seq[k] && i==2) {\n      logger._print("They are equal and size of the string in the interval"+j+" to "+k+" is 2, so the Longest Palindromic Subsequence in the Given range is 2");\n\n      matrix._notify(j,k)._wait();\n\n      L[j][k]=2;\n      matrix._setData(L);\n\n      matrix._denotify(j,k)._wait();\n\n    } else if(seq[j]==seq[k]) {\n      logger._print("They are equal, so the Longest Palindromic Subsequence in the Given range is 2 + the Longest Increasing Subsequence between the indices "+(j+1)+" to "+(k-1));\n\n      matrix._notify(j,k)._wait();\n      matrix._select(j+1,k-1)._wait();\n\n      L[j][k] = L[j+1][k-1] + 2;\n      matrix._setData(L);\n\n      matrix._denotify(j,k)._wait();\n      matrix._deselect(j+1,k-1)._wait();\n\n    } else {\n      logger._print("They are NOT equal, so the Longest Palindromic Subsequence in the Given range is the maximum Longest Increasing Subsequence between the indices "+(j+1)+" to "+(k) + " and "+(j)+" to "+(k-1));\n      matrix._notify(j,k)._wait();\n      matrix._select(j+1,k)._wait();\n      matrix._select(j,k-1)._wait();\n\n      L[j][k] = max(L[j+1][k],L[j][k-1]);\n      matrix._setData(L);\n\n      matrix._denotify(j,k)._wait();\n      matrix._deselect(j+1,k)._wait();\n      matrix._deselect(j,k-1)._wait();\n    }\n    logger._print("--------------------------------------------------");\n    tracer._deselect(j)._wait();\n    tracer._denotify(k)._wait();\n  }\n}\nlogger._print("Longest Increasing Subsequence of the given string = L[0]["+(N-1)+"]="+L[0][N-1]);\n',
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
      code: "var maxSubarraySum = (function maxSubarray(array) {\n    var maxSoFar = 0,\n        maxEndingHere = 0;\n\n    logger._print('Initializing maxSoFar = 0 & maxEndingHere = 0');\n\n    for (var i = 0; i < array.length; i++) {\n        tracer._select(i);\n        logger._print(maxEndingHere + ' + ' + array[i]);\n        maxEndingHere += array[i];\n        logger._print('=> ' + maxEndingHere);\n\n        if (maxEndingHere < 0) {\n            logger._print('maxEndingHere is negative, set to 0');\n            maxEndingHere = 0;\n        }\n\n        if (maxSoFar < maxEndingHere) {\n            logger._print('maxSoFar < maxEndingHere, setting maxSoFar to maxEndingHere (' + maxEndingHere + ')');\n            maxSoFar = maxEndingHere;\n        }\n\n        tracer._wait();\n        tracer._deselect(i);\n    }\n\n    return maxSoFar;\n})(D);\n\nlogger._print('Maximum Subarray\\'s Sum is: ' + maxSubarraySum);",
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
      code: "var N = DP.length;\nvar M = DP[0].length;\nfunction update(i, j, value) {\n    DP[i][j] = value;\n    dataViewer._select(i, j)._wait();\n    tracer._notify(i, j, DP[i][j])._wait();\n    tracer._denotify(i, j);\n    dataViewer._deselect(i, j);\n}\nfor (var i = 0; i < N; i++) {\n    for (var j = 0; j < M; j++) {\n        if (i === 0 && j === 0) {\n            update(i, j, D[i][j]);\n        } else if (i === 0) {\n            tracer._select(i, j - 1);\n            update(i, j, DP[i][j - 1] + D[i][j]);\n            tracer._deselect(i, j - 1);\n        } else if (j === 0) {\n            tracer._select(i - 1, j);\n            update(i, j, DP[i - 1][j] + D[i][j]);\n            tracer._deselect(i - 1, j);\n        } else {\n            tracer._select(i, j - 1)._select(i - 1, j);\n            update(i, j, Math.max(DP[i][j - 1], DP[i - 1][j]) + D[i][j]);\n            tracer._deselect(i, j - 1)._deselect(i - 1, j);\n        }\n    }\n}\nlogger._print('max = ' + DP[N - 1][M - 1]);",
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
      code: 'for ( var i = 0; i < N; i++ ) {\n\tfor ( var j = 0; j <= i; j++ ) {\n\t\tif( j === i || j === 0 ) { // First and last values in every row are 1\n\t\t\tA[i][j] = 1;\n\n\t\t\ttracer._notify( i, j, A[i][j])._wait();\n\t\t\ttracer._denotify( i, j);\n\t\t} else { // Other values are sum of values just above and left of above\n\t\t\ttracer._select( i-1, j-1)._wait();\n\t\t\ttracer._select( i-1, j)._wait();\n\n\t\t\tA[i][j] = A[i-1][j-1] + A[i-1][j];\n\t\t\t\n\t\t\ttracer._notify( i, j, A[i][j])._wait();\n\t\t\ttracer._denotify( i, j);\n\t\t\ttracer._deselect( i-1, j-1);\n\t\t\ttracer._deselect( i-1, j);\n\t\t}\n\t}\n}',
    },
    shortest_common_supersequence: {
      code: "var i,j;\n\n// Fill memo table in bottom up manner \nfor ( i = 0; i <= m; i++ ) {\n\tfor ( j = 0; j <= n; j++ ) {\n\t\tif( i === 0 ) {\n\t\t\tA[i][j] = j;\n\t\t} else if ( j === 0 ) {\n\t\t\tA[i][j] = i;\n\t\t} else if ( string1[i-1] == string2[j-1] ) {\n\t\t\ttracer1._select ( i-1 )._wait ();\n \t\t\ttracer2._select ( j-1 )._wait ();\n \t\t\ttracer3._select ( i-1, j-1 )._wait ();\n\n\t\t\tA[i][j] = A[i-1][j-1] + 1;\n\n\t\t\ttracer1._deselect ( i-1 );\n \t\t\ttracer2._deselect ( j-1 );\n \t\t\ttracer3._deselect ( i-1, j-1 );\n\t\t} else {\n\t\t\ttracer3._select ( i-1, j )._wait ();\n \t\t\ttracer3._select ( i, j-1 )._wait ();\n\n\t\t\tif ( A[i-1][j] < A[i][j-1] ) {\n\t\t\t\tA[i][j] = 1 + A[i-1][j];\n\t\t\t} else {\n\t\t\t\tA[i][j] = 1 + A[i][j-1];\n\t\t\t}\n\n\t\t\ttracer3._deselect ( i-1, j );\n \t\t\ttracer3._deselect ( i, j-1 );\n\t\t}\n\t\ttracer3._notify ( i, j , A[i][j] )._wait ();\n \t\ttracer3._denotify( i, j );\n\t}\n}\n\n logger._print ( 'Shortest Common Supersequence is ' + A[m][n] );\n",
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
      code: "var sum = D[0] + D[1] + D[2];\nvar max = sum;\ntracer._select(0, 2);\nlogger._print('sum = ' + sum)._wait();\nfor (var i = 3; i < D.length; i++) {\n    sum += D[i] - D[i - 3];\n    if (max < sum) max = sum;\n    tracer._deselect(i - 3);\n    tracer._select(i);\n    logger._print('sum = ' + sum)._wait();\n}\ntracer._deselect(D.length - 3, D.length - 1);\nlogger._print('max = ' + max);",
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
      code: "for ( var i = 1; i < N; i++ ) {\n\t// next is minimum of m2, m3 and m5\n\tvar next = (M[0] <= M[1])?( M[0] <= M[2] )?M[0]:M[2]:( M[1] <= M[2] )?M[1]:M[2];\n\tlogger._print( ' Minimum of ' + M[0] + ', ' + M[1] + ', ' + M[2] + \" : \" + next );\n\tA[i] = next;\n\n\ttracer._notify( i, A[i] )._wait();\n\ttracer._denotify( i );\n\n\tif ( next === M[0] ) {\n\t\tI[0]++;\n\t\tM[0] = A[I[0]] * 2;\n\t\ttracer2._notify( 0, M[0])._wait();\n\t\ttracer3._notify( 0, I[0])._wait();\n\t\ttracer2._denotify(0);\n\t\ttracer3._denotify(0);\n\n\t}\n\tif ( next === M[1] ) {\n\t\tI[1]++;\n\t\tM[1] = A[I[1]] * 3;\n\t\ttracer2._notify( 1, M[1])._wait();\n\t\ttracer3._notify( 1, I[1])._wait();\n\t\ttracer2._denotify(1);\n\t\ttracer3._denotify(1);\n\t}\n\tif ( next === M[2] ) {\n\t\tI[2]++;\n\t\tM[2] = A[I[2]] * 5;\n\t\ttracer2._notify( 2, M[2])._wait();\n\t\ttracer3._notify( 2, I[2])._wait();\n\t\ttracer2._denotify(2);\n\t\ttracer3._denotify(2);\n\t}\n}\n",
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
      code: "function CellularAutomata(fillShape, emptyShape) {\n\tvar nextGrid = [];\n\n\tfor (let i = 0; i < G.length; i++) {\n\t\tnextGrid[i] = [];\n\t\tfor (let j = 0; j < G[i].length; j++) {\n\t\t\tvar adjCount = 0;\n\t\t\tvar twoAwayCount = 0;\n\t\t\t//look at the states of the neighboring cells\n\t\t\tfor (var x = -2; x <= 2; x++) {\n\t\t\t\tfor (var y = -2; y <= 2; y++) {\n\t\t\t\t\tif ((i + x >= 0 && i + x < G.length) && (j + y >= 0 && j + y < G[i].length)) {\n\t\t\t\t\t\tif (!(x !== 0 && y !== 0) && G[i + x][j + y] == emptyShape) {\n\t\t\t\t\t\t\tif (x == -2 || x == 2 || y == -2 || y == 2) {\n\t\t\t\t\t\t\t\ttwoAwayCount++;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tadjCount++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t//change the current cell's state according to these rules\n\t\t\tif ((adjCount >= 5)) {\n\t\t\t\tnextGrid[i][j] = fillShape;\n\t\t\t} else if (adjCount <= 1) {\n\t\t\t\tif (twoAwayCount < 3) {\n\t\t\t\t\tnextGrid[i][j] = fillShape;\n\t\t\t\t} else {\n\t\t\t\t\tnextGrid[i][j] = emptyShape;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tnextGrid[i][j] = emptyShape;\n\t\t\t}\n\t\t}\n\t}\n\t\n\tfor (let i = 0; i < nextGrid.length; i++) {\n\t\tfor (let j = 0; j < nextGrid[i].length; j++) {\n\t\t\ttracer._denotify(i, j, G[i][j]);\n\t\t\ttracer._select(i, j)._wait();\n\t\t\tG[i][j] = nextGrid[i][j];\n\t\t\tif (G[i][j] == fillShape) {\n\t\t\t\ttracer._notify(i, j, G[i][j]);\n\t\t\t} else {\n\t\t\t\ttracer._notify(i, j, G[i][j]);\n\t\t\t\ttracer._denotify(i, j, G[i][j]);\n\t\t\t\ttracer._deselect(i, j);\n\t\t\t}\n\t\t}\n\t}\n}\n\nfor (var iter = 0; iter < generations; iter++) {\n\tCellularAutomata('#', '.');\n}",
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
      code: "function buildMaze(){\n    var mySet = new disjoint_set();\n    var width = m;\n\tvar height = n;\n\tvar setSize = 0;\n\tvar graph = [];\n\tvar visitedMap = {};\n\tvar walls = {};\n\tvar rightWalls = [];\n\tvar downWalls = [];\n\tvar location = 0;\n\n\tmySet.addElements(width*height);\n\n    logger._print(\"initializing grid (all walls are up)\");\n    // init 'graph'\n    // each room has two walls, a down and right wall.\n\tfor (var i = 0; i < width; i++) {\n\t\tgraph[i] = new Array(height);\n\t\tfor(var j = 0; j < height; j++){\n\t\t\tgraph[i][j] = location;\n\n\t\t\twalls[location] = {down: true, right: true};\n\t\t\tvisitedMap[location] = false;\n\n            // If you can label the rooms with just 2 digits\n            if (width*height < 100) {\n                var location_string = location.toString();\n\n                G[j*2 + 1][i*3 + 1] = location_string[0];\n                G[j*2 + 1][i*3 + 2] = location_string[1];\n\n                tracer._setData(G);\n            }\n\n\t\t\trightWalls.push({x:i, y:j});\n\t\t\tdownWalls.push({x:i, y:j});\n\t\t\tlocation++;\n\t\t}\n\t}\n\n    logger._print(\"shuffled the walls for random selection\");\n    // Randomly shuffle the walls\n\tvar rightWalls = shuffle(rightWalls);\n\tvar downWalls = shuffle(downWalls);\n\n    // Picking random walls to remove\n\twhile(setSize != mySet.elements - 1){\n\t\tvar randomWall = Math.floor((Math.random() * 2) + 1);\n\t\tif(randomWall === 1 && downWalls.length > 0){\n            // Down wall\n\t\t\tvar current_room = downWalls.pop();\n\t\t\tvar i_x = current_room.x;\n\t\t\tvar i_y = current_room.y;\n\t\t\tvar i_y_down = i_y + 1;\n\t\t\tif(i_y_down < height){\n\t\t\t\tvar u = graph[i_x][i_y];\n\t\t\t\tvar v = graph[i_x][i_y_down];\n                tracer._notify(i_y*2 + 1, i_x*3 + 1);\n                tracer._notify(i_y*2 + 1, i_x*3 + 2);\n                tracer._notify(i_y_down*2 + 1, i_x*3 + 1);\n                tracer._notify(i_y_down*2 + 1, i_x*3 + 2);\n\t\t\t\tif(mySet.find(u) != mySet.find(v)){\n                    logger._print('Rooms: ' + u + ' & ' + v + ' now belong to the same set, delete wall between them');\n\n                    logger._wait();\n\t\t\t\t\tmySet.setUnion(u,v);\n\t\t\t\t\tsetSize++;\n                    // delete wall\n\t\t\t\t\twalls[u].down = false;\n\t\t\t\t}else{\n                    logger._print('Rooms: ' + u + ' & ' + v + ' would create a cycle! This is not good!');\n                    logger._wait();\n                }\n\t\t\t}\n            tracer._clear();\n\t\t}else if(randomWall === 2 && rightWalls.length > 0){\n            // Right Wall\n\t\t\tvar current_room = rightWalls.pop();\n\t\t\tvar i_x = current_room.x;\n\t\t\tvar i_y = current_room.y;\n\t\t\tvar i_x_right = i_x + 1;\n\t\t\tif(i_x_right < width){\n\t\t\t\tvar u = graph[i_x][i_y];\n\t\t\t\tvar v = graph[i_x_right][i_y];\n                tracer._notify(i_y*2 + 1, i_x*3 + 1);\n                tracer._notify(i_y*2 + 1, i_x*3 + 2);\n                tracer._notify(i_y*2 + 1, i_x_right*3 + 1);\n                tracer._notify(i_y*2 + 1, i_x_right*3 + 2);\n                if(mySet.find(u) != mySet.find(v)){\n                    logger._print('Rooms: ' + u + ' & ' + v + ' now belong to the same set, delete wall between them');\n\n                    logger._wait();\n\t\t\t\t\tmySet.setUnion(u,v);\n\t\t\t\t\tsetSize++;\n                    // delete wall\n\t\t\t\t\twalls[u].right = false;\n\t\t\t\t}else{\n                    logger._print('Rooms: ' + u + ' & ' + v + ' would create a cycle! This is not good!');\n                    logger._wait();\n                }\n\t\t\t}\n            tracer._clear();\n\t\t}\n\t}\n\n    tracer._clear();\n\n    logger._print(\"deleting the walls\");\n    //update deleted walls\n    for (var i = 0; i < width; i++) {\n        for(var j = 0; j < height; j++){\n            var current_wall = walls[graph[i][j]];\n\n            if(current_wall.down === false){\n                G[j*2 + 2][i*3 + 1] = ' ';\n                G[j*2 + 2][i*3 + 2] = ' ';\n                tracer._select(j*2 + 2, i*3 + 1)._wait();\n                tracer._select(j*2 + 2, i*3 + 2)._wait();\n            }\n\n            if(current_wall.right === false){\n                G[j*2 + 1][i*3 + 3] = ' ';\n                tracer._select(j*2 +1 , i*3 + 3)._wait();\n            }\n            tracer._setData(G);\n        }\n    }\n    logger._print('cleaning up the grid!');\n    cleanUpGrid(width,height);\n\n    // Clear out walls for the start and end locations.\n    var random_start = Math.floor(Math.random()*width);\n    var random_end = Math.floor(Math.random()*width);\n\n    logger._print('setting the Start (S) & End (E) locations');\n\n    // Start Location\n    G[0][random_start*3 + 1] = ' ';\n    G[0][random_start*3 + 2] = ' ';\n    G[1][random_start*3 + 1] = 'S';\n\n    // End Location\n    G[v_end - 1][random_end*3 + 1] = ' ';\n    G[v_end - 1][random_end*3 + 2] = ' ';\n    G[v_end - 2][random_end*3 + 1] = 'E';\n\n    cleanUpStartLocation(random_start);\n    cleanUpEndLocation(random_end);\n\n    logger._print('maze is completed!');\n\n    // set the data\n    tracer._setData(G);\n}\nfunction cleanUpStartLocation(start){\n    if(G[0][start*3] === \"┬\" && G[1][start*3] === '│'){\n        G[0][start*3] = '┐';\n    }\n    if(G[0][start*3 + 3] === \"┬\" && G[1][start * 3 + 3] === '│'){\n        G[0][start*3 + 3] = '┌';\n    }\n    if(G[0][start*3] === '┌'){\n        G[0][start*3] = '│';\n    }\n    if(G[0][start*3 + 3] === '┐'){\n        G[0][start*3 + 3] = '│';\n    }\n}\n\nfunction cleanUpEndLocation(end){\n    if(G[v_end - 1][end*3] === '┴' && G[v_end - 2][end*3] === '│'){\n        G[v_end - 1][end*3] = '┘';\n    }\n    if(G[v_end - 1][end*3+3] === '┴' && G[v_end - 2][end*3+3] === '│'){\n        G[v_end - 1][end*3+3] = '└';\n    }\n    if(G[v_end - 1][end*3] === '└'){\n        G[v_end - 1][end*3] = '│';\n    }\n    if(G[v_end - 1][end*3 + 3] === '┘'){\n        G[v_end - 1][end*3 + 3] = '│';\n    }\n}\n\nfunction cleanUpGrid(width,height){\n    // Remove room numbers\n    for (var i = 0; i < width; i++) {\n\t\tfor(var j = 0; j < height; j++){\n                G[j*2 + 1][i*3 + 1] = ' ';\n                G[j*2 + 1][i*3 + 2] = ' ';\n        }\n    }\n\n    // clean up grid for looks\n    for (var i = 0; i < v_end; i++) {\n        for(var j = 0; j < h_end; j++){\n\n            if(G[i][j] === '├'){\n                if(G[i][j+1] === ' '){\n                    G[i][j] = '│';\n                }\n            }\n\n            if(G[i][j] === '┤'){\n                if(G[i][j-1] === ' '){\n                    G[i][j] = '│';\n                }\n            }\n\n            if(G[i][j] === '┬'){\n                if(G[i+1][j] === ' '){\n                    G[i][j] = '─';\n                }\n            }\n\n            if(G[i][j] === '┴'){\n                if(G[i-1][j] === ' '){\n                    G[i][j] = '─';\n                }\n            }\n\n            if(G[i][j] === '┼'){\n                if(G[i][j+1] === ' '&& G[i-1][j] === ' ' && G[i][j-1] !== ' ' && G[i+1][j] !== ' '){\n                    G[i][j] = '┐';\n                }\n                else if(G[i][j-1] === ' '&& G[i-1][j] === ' ' && G[i+1][j] !== ' ' && G[i][j+1] !== ' '){\n                    G[i][j] = '┌';\n                }\n                else if(G[i][j-1] === ' '&& G[i+1][j] === ' ' && G[i-1][j] !== ' ' && G[i][j+1] !== ' '){\n                    G[i][j] = '└';\n                }\n                else if(G[i][j+1] === ' '&& G[i+1][j] === ' ' && G[i-1][j] !== ' ' && G[i][j-1] !== ' '){\n                    G[i][j] = '┘';\n                }\n\n                else if(G[i][j+1] === ' '&& G[i][j-1] === ' ' && (G[i+1][j] === ' ' || G[i-1][j] === ' ')){\n                    G[i][j] = '│';\n                }\n                else if(G[i+1][j] === ' '&& G[i-1][j] === ' ' && (G[i][j-1] === ' ' || G[i][j+1] === ' ')){\n                    G[i][j] = '─';\n                }\n\n                else if(G[i][j+1] === ' '&& G[i][j-1] === ' ' ){\n                    G[i][j] = '│';\n                }\n                else if(G[i+1][j] === ' '&& G[i-1][j] === ' '){\n                    G[i][j] = '─';\n                }\n                else if(G[i+1][j] === ' ' && G[i-1][j] !== ' ' && G[i][j-1] !== ' ' && G[i][j+1] !== ' '){\n                    G[i][j] = '┴';\n                }\n\n                else if(G[i-1][j] === ' ' && G[i+1][j] !== ' ' && G[i][j+1] !== ' ' && G[i][j-1] !== ' '){\n                    G[i][j] = '┬';\n                }\n\n                else if(G[i][j+1] === ' ' && G[i-1][j] !== ' ' && G[i+1][j] !== ' ' && G[i][j-1] !== ' '){\n                    G[i][j] = '┤';\n                }\n\n                else if(G[i][j-1] === ' ' && G[i-1][j] !== ' ' && G[i+1][j] !== ' ' && G[i][j+1] !== ' '){\n                    G[i][j] = '├';\n                }\n\n\n            }\n\n        }\n    }\n}\n\nclass disjoint_set {\n    constructor(){\n        this.set = [];\n        this.elements = 0;\n    }\n    addElements(numberOfElements){\n        for(var i = 0; i < numberOfElements; i++){\n            this.elements++;\n            this.set.push(-1);\n        }\n    }\n    find(element){\n        if(this.set[element] < 0){\n            return element;\n        }else {\n            return this.set[element] = this.find(this.set[element]);\n        }\n    }\n    setUnion(_a,_b){\n        var a = this.find(_a);\n        var b = this.find(_b);\n\n        if(a != b){\n            var newSize = (this.set[a] + this.set[b]);\n            if(this.compareSize(a,b)){\n                this.set[b] = a;\n                this.set[a] = newSize;\n            }else{\n                this.set[a] = b;\n                this.set[b] = newSize;\n            }\n        }\n    }\n    compareSize(a,b){\n        if(this.set[a] === this.set[b]){\n    \t\treturn true;\n    \t}else if(this.set[a] < this.set[b]){\n    \t\treturn true;\n    \t}else{\n    \t\treturn false;\n    \t}\n    }\n}\n\n// http://bost.ocks.org/mike/shuffle/\nfunction shuffle(array) {\n  var m = array.length, t, i;\n  // While there remain elements to shuffle…\n  while (m) {\n    // Pick a remaining element…\n    i = Math.floor(Math.random() * m--);\n    // And swap it with the current element.\n    t = array[m];\n    array[m] = array[i];\n    array[i] = t;\n  }\n  return array;\n}\n\nbuildMaze();\n",
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
      code: "function FloodFill(i, j, oldColor, newColor) {\n\n    if (i < 0 || i >= G.length || j < 0 || j >= G[i].length) return;\n    if (G[i][j] != oldColor) return;\n\n    // set the color of node to newColor\n    G[i][j] = newColor;\n\n    tracer._select(i, j)._wait();\n    tracer._notify(i, j, G[i][j])._wait();\n\n    // next step four-way\n    FloodFill(i + 1, j, oldColor, newColor);\n    FloodFill(i - 1, j, oldColor, newColor);\n    FloodFill(i, j + 1, oldColor, newColor);\n    FloodFill(i, j - 1, oldColor, newColor);\n}\n\nFloodFill(4, 4, '-', 'a');\n\n",
    },
    magic_square: {
      code: "var i = Math.floor (n/2);\nvar j = n-1;\n\nfor ( var num = 1; num <= n*n; ) {\n\tlogTracer._print ( 'i = ' + i );\n\tlogTracer._print ( 'j = ' + j );\n\n\tif( i == -1 && j == n ) {\n\t\tj = n - 2;\n\t\ti = 0;\n\n\t\tlogTracer._print ( 'Changing : ' );\n\t\tlogTracer._print ( 'i = ' + i );\n\t\tlogTracer._print ( 'j = ' + j );\n\t} else {\n\t\tif ( j == n ) {\n\t\t\tj = 0;\n\t\t\tlogTracer._print ( 'Changing : ' + 'j = ' + j);\n\t\t}\n\t\tif ( i < 0 ) {\n\t\t\ti = n-1;\n\t\t\tlogTracer._print ( 'Changing : ' + 'i = ' + i );\n\t\t}\n\t}\n\n\tif ( A[i][j] > 0 ) {\n\t\tlogTracer._print ( ' Cell already filled : Changing ' + ' i = ' + i + ' j = ' + j );\n\t\tj -= 2;\n\t\ti++;\n\t\tcontinue;\n\t} else {\n\t\tA[i][j] = num++;\n\t\ttracer._notify( i, j, A[i][j] )._wait ();\n\t\ttracer._denotify ( i, j );\n\t\ttracer._select ( i, j )._wait ();\n\t}\n\tj++;\n\ti--;\n}\n\nlogTracer._print ( 'Magic Constant is ' + n*(n*n+1)/2 );",
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
      code: "function init(rank) {\n  var o = {};\n  for (var k in rank) {\n    o[k] = {\n      key: k,\n      stable: false,\n      rank_keys: rank[k]\n    };\n  }\n  return o;\n}\n\nfunction extractUnstable(Q) {\n  for (var k in Q) {\n    if (Q[k].stable === false) {\n      return Q[k];\n    }\n  }\n}\n\nvar A = init(ARank), B = init(BRank);\nvar a, b;\n\nwhile ((a = extractUnstable(A)) != null) {\n\n  logTracer._print('Selecting ' + a.key)._wait();\n\n  var bKey = a.rank_keys.shift();\n  var b = B[bKey];\n  \n  logTracer._print('--> Choicing ' + b.key)._wait();\n\n  if (b.stable === false) {\n  \n    logTracer._print('--> ' + b.key + ' is not stable, stabilizing with ' + a.key)._wait();\n \n    a.stable = b;\n    b.stable = a;\n \n    tracerA._select(_aKeys.indexOf(a.key))._wait();\n    tracerB._select(_bKeys.indexOf(b.key))._wait();\n\n  } else {\n\n    var rank_a_in_b = b.rank_keys.indexOf(a.key);\n    var rank_prev_a_in_b = b.rank_keys.indexOf(b.stable.key);\n    if (rank_a_in_b < rank_prev_a_in_b) {\n   \n      logTracer._print('--> ' + bKey + ' is more stable with ' + a.key + ' rather than ' + b.stable.key + ' - stabilizing again')._wait();\n \n      A[b.stable.key].stable = false;\n      tracerA._deselect(_aKeys.indexOf(b.stable.key))._wait();\n \n      a.stable = b;\n      b.stable = a;\n\n      tracerA._select(_aKeys.indexOf(a.key))._wait();\n      tracerB._select(_bKeys.indexOf(b.key))._wait();\n    }\n\n  }\n}",
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
      code: "function BELLMAN_FORD(src, dest) {\n  var weights = new Array(G.length), i, j;\n\n  for (i = 0; i < G.length; i++) {\n    weights[i] = MAX_VALUE;\n    tracer._weight(i, weights[i]);\n  }\n  weights[src] = 0;\n  tracer._weight(src, 0);\n\n  logger._print('Initializing weights to: [' + weights + ']');\n  logger._print('');\n\n  //begin BF algorithm execution\n  var k = G.length;\n  while (k--) {\n    logger._print('Iteration: ' + (G.length - k));\n    logger._print('------------------------------------------------------------------');\n\n    for (i = 0; i < G.length; i++) {\n      for (j = 0; j < G.length; j++) {\n        if (G[i][j]) {\t//proceed to relax Edges only if a particular weight != 0 (0 represents no edge)\n          if (weights[j] > (weights[i] + G[i][j])) {\n            weights[j] = weights[i] + G[i][j];\n            logger._print('weights[' + j + '] = weights[' + i + '] + ' + G[i][j]);\n          }\n          tracer._visit(j, i, weights[j])._wait();\n          tracer._leave(j, i)._wait();\n        }\n      }\n    }\n\n    logger._print('updated weights: [' + weights.join(', ') + ']');\n    logger._print('');\n  }\n\n  //check for cycle\n  logger._print('checking for cycle');\n  for (i = 0; i < G.length; i++) {\n    for (j = 0; j < G.length; j++) {\n      if (G[i][j]) {\n        if (weights[j] > (weights[i] + G[i][j])) {\n          logger._print('A cycle was detected: weights[' + j + '] > weights[' + i + '] + ' + G[i][j]);\n          return (MAX_VALUE);\n        }\n      }\n    }\n  }\n\n  logger._print('No cycles detected. Final weights for the source ' + src + ' are: [' + weights + ']');\n\n  return weights[dest];\n}\n\nvar src = Integer.random(0, G.length - 1), dest;\nvar MAX_VALUE = Infinity;\nvar minWeight;\n\n/*\n src = start node\n dest = start node (but will eventually at as the end node)\n */\n\ndo {\n  dest = Integer.random(0, G.length - 1);\n}\nwhile (src === dest);\n\nlogger._print('finding the shortest path from ' + src + ' to ' + dest);\n\nminWeight = BELLMAN_FORD(src, dest);\n\nif (minWeight === MAX_VALUE) {\n  logger._print('there is no path from ' + src + ' to ' + dest);\n} else {\n  logger._print('the shortest path from ' + src + ' to ' + dest + ' is ' + minWeight);\n}",
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
      code: 'function BFS(s) { // s = start node\n    var Q = [];\n    Q.push(s); // add start node to queue\n    tracer._visit(s)._wait();\n    while (Q.length > 0) {\n        var node = Q.shift(); // dequeue\n        for (var i = 0; i < G[node].length; i++) {\n            if (G[node][i]) { // if current node has the i-th node as a child\n                Q.push(i); // add child node to queue\n                tracer._visit(i, node)._wait();\n            }\n        }\n    }\n}\nBFS(0);',
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
      code: "//Depth First Search Exploration Algorithm to test connectedness of the Graph (see Graph Algorithms/DFS/exploration), without the tracer & logger commands\nfunction DFSExplore (graph, source) {\n\tvar stack = [ [source, null] ], visited = {};\n\tvar node, prev, i, temp;\n\n\twhile (stack.length > 0) {\n\t\ttemp = stack.pop ();\n\t\tnode = temp [0];\n\t\tprev = temp [1];\n\n\t\tif (!visited [node]) {\n\t\t\tvisited [node] = true;\n\t\t\t//logger._print (node);\n\n\t\t\t/*\n\t\t\tif (prev !== undefined && graph [node] [prev]) { tracer._visit (node, prev)._wait (); console.log ('tracer ' + prev + ', ' + node); }\n\t\t\telse { tracer._visit (node)._wait (); console.log ('tracer ' + node); }\n\t\t\t*/\n\n\t\t\tfor (i = 0; i < graph.length; i++) {\n\t\t\t\tif (graph [node] [i]) {\n\t\t\t\t\tstack.push ([i, node]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn visited;\n}\n\nfunction findBridges (graph) {\n\tvar tempGraph, bridges = [], visited;\n\n\tfor (var i = 0; i < graph.length; i++) {\n\t\tfor (var j = 0; j < graph.length; j++) {\n\t\t\tif (graph [i] [j]) {\t//check if an edge exists\n\t\t\t\tlogger._print ('Deleting edge ' + i + '->' + j + ' and calling DFSExplore ()');\n\t\t\t\ttracer._visit (j, i)._wait ();\n\t\t\t\ttracer._leave (j, i)._wait ();\n\n\t\t\t\ttempGraph = JSON.parse (JSON.stringify (graph));\n\t\t\t\ttempGraph [i] [j] = 0;\n\t\t\t\ttempGraph [j] [i] = 0;\n\t\t\t\tvisited = DFSExplore (tempGraph, 0);\n\n\t\t\t\tif (Object.keys (visited).length === graph.length) {\n\t\t\t\t\tlogger._print ('Graph is CONNECTED. Edge is NOT a bridge');\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tlogger._print ('Graph is DISCONNECTED. Edge IS a bridge');\n\t\t\t\t\tbridges.push ([i,j]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn bridges;\n}\n\nvar bridges = findBridges (G);\n\nlogger._print ('The bridges are: ');\nfor (var i in bridges) {\n\tlogger._print (bridges [i] [0] + ' to ' + bridges [i] [1]);\n}\nlogger._print ('NOTE: A bridge is both ways, i.e., from A to B and from B to A, because this is an Undirected Graph');\n",
    },
    dfs: {
      code: "function DFS(node, parent, weight) { // node = current node, parent = previous node\n    tracer._visit(node, parent, weight)._wait();\n    D[node] = true; // label current node as discovered\n    for (var i = 0; i < G[node].length; i++) {\n        if (G[node][i]) { // if the edge from current node to the i-th node exists\n            if (!D[i]) { // if the i-th node is not labeled as discovered\n                DFS(i, node, weight + G[node][i]); // recursively call DFS\n            }\n        }\n    }\n    D[node] = false; // label current node as undiscovered\n    tracer._leave(node, parent, 0)._wait();\n}\nvar D; // D[i] indicates whether the i-th node is discovered or not\nfor (var i = 0; i < G.length; i++) { // start from every node\n    logger._print('start from ' + i);\n    D = [];\n    for (var j = 0; j < G.length; j++) D.push(false);\n    DFS(i, undefined, 0);\n    tracer._clear();\n}",
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
      code: "function Dijkstra(start, end) {\n    var minIndex, minDistance;\n    var D = []; // D[i] indicates whether the i-th node is discovered or not\n    for (var i = 0; i < G.length; i++) D.push(false);\n    S[start] = 0; // Starting node is at distance 0 from itself\n    tracerS._notify(start, S[start])._wait()._denotify(start);\n    tracerS._select(start);\n    var k = G.length;\n    while (k--) {\n        // Finding a node with the shortest distance from S[minIndex]\n        minDistance = MAX_VALUE;\n        for (i = 0; i < G.length; i++) {\n            if (S[i] < minDistance && !D[i]) {\n                minDistance = S[i];\n                minIndex = i;\n            }\n        }\n        if (minDistance === MAX_VALUE) break; // If there is no edge from current node, jump out of loop\n        D[minIndex] = true;\n        tracerS._select(minIndex);\n        tracer._visit(minIndex)._wait();\n        // For every unvisited neighbour of current node, we check\n        // whether the path to it is shorter if going over the current node\n        for (i = 0; i < G.length; i++) {\n            if (G[minIndex][i] && S[i] > S[minIndex] + G[minIndex][i]) {\n                S[i] = S[minIndex] + G[minIndex][i];\n                tracerS._notify(i, S[i]);\n                tracer._visit(i, minIndex, S[i])._wait();\n                tracerS._denotify(i);\n                tracer._leave(i, minIndex)._wait();\n            }\n        }\n        tracer._leave(minIndex)._wait();\n    }\n    if (S[end] === MAX_VALUE) {\n        logger._print('there is no path from ' + start + ' to ' + end);\n    } else {\n        logger._print('the shortest path from ' + start + ' to ' + end + ' is ' + S[end]);\n    }\n}\n\nvar s = Integer.random(0, G.length - 1); // s = start node\nvar e; // e = end node\ndo {\n    e = Integer.random(0, G.length - 1);\n} while (s === e);\nlogger._print('finding the shortest path from ' + s + ' to ' + e)._wait();\nDijkstra(s, e);",
    },
    dls: {
      code: '// This is a sample DLS where\n// we try to find number of descendant of root within some depth\nfunction DLS (limit, node, parent) { // node = current node, parent = previous node\n    tracer._visit(node, parent)._wait();\n    if (limit>0) { // cut off the search\n        for (var i = 0; i < G[node].length; i++) {\n            if (G[node][i]) { // if current node has the i-th node as a child\n                DLS(limit-1, i, node); // recursively call DLS\n            }\n        }\n    }\n}\nDLS(2,0);\n',
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
      code: "function FloydWarshall() {\n  // Finds the shortest path between all nodes\n  var S = new Array(G.length);\n  for (var i = 0; i < G.length; i++) S[i] = new Array(G.length)\n  for (i = 0; i < G.length; i++) {\n    for (var j = 0; j < G.length; j++) {\n      // Distance to self is always 0\n      if (i == j) S[i][i] = 0;\n      // Distance between connected nodes is their weight\n      else if (G[i][j] > 0) {\n        S[i][j] = G[i][j];\n      }// Else we don't know the distance and we set it to infinity\n      else S[i][j] = MAX_VALUE;\n    }\n  }\n  // If there is a shorter path using k, use it instead\n  for (var k = 0; k < G.length; k++) {\n    for (i = 0; i < G.length; i++) {\n      if (k === i) continue;\n      tracer._visit(k, i)._wait();\n      for (j = 0; j < G.length; j++) {\n        if (i === j || j === k) continue;\n        tracer._visit(j, k)._wait();\n        if (S[i][j] > S[i][k] + S[k][j]) {\n          tracer._visit(j, i, S[i][j])._wait();\n          S[i][j] = S[i][k] + S[k][j];\n          tracer._leave(j, i, S[i][j]);\n        }\n        tracer._leave(j, k);\n      }\n      tracer._leave(k, i)._wait();\n    }\n  }\n  for (i = 0; i < G.length; i++)\n    for (j = 0; j < G.length; j++)\n      if (S[i][j] === MAX_VALUE) logger._print('there is no path from ' + i + ' to ' + j);\n      else logger._print('the shortest path from ' + i + ' to ' + j + ' is ' + S[i][j]);\n}\nvar MAX_VALUE = Infinity;\nlogger._print('finding the shortest paths from and to all nodes');\nFloydWarshall();",
    },
    page_rank: {
      code: "/*\n\tPageRank Algorithm Version 2\n\tEquation:\n\t\tPR (X) = ( (1 - D)/N ) + D (Summation i->X (PR (I) / Out (i)))\n\tNOTE: Algorithm uses the recommended damping factor (D). Number of iterations is small because only a small Web of 5 Pages is simulated\n*/\n\nfunction arraySum (array) {\n\treturn array.reduce (function (sum, curr) {\n\t\treturn sum + (curr ? 1 : 0);\t//if curr is 0 (no edge) or undefined (loop not allowed), sum remains unchanged\n\t}, 0);\n}\n\nfunction showOutgoingEdges (i) {\n\tG [i].forEach (function (edgeExists, j) {\n\t\tedgeExists && graphTracer._visit (j, i)._wait () && graphTracer._leave (j, i)._wait ();\n\t});\n}\n\n//PRECOMPUTATIONS\n\nlogger._print ('Calculate Outgoing Edge Count for each Node');\n(function calculateOEC () {\n\tvar count = 0;\n\tG.forEach (function (relations, i) {\n\t\toutgoingEdgeCounts [i] = arraySum (relations);\n\t\tshowOutgoingEdges (i);\n\n\t\toecTracer._notify (i, outgoingEdgeCounts [i])._wait ();\n\t\toecTracer._denotify (i)._wait ();\n\t});\n}) ();\n\nlogger._print ('determine incoming nodes for each node');\n(function determineIN () {\n\tfor (var i = 0; i < G.length; i++) {\n\t\tfor (var j = 0; j < G.length; j++) {\n\t\t\tif (G [i] [j]) {\n\t\t\t\t//there's an edge FROM i TO j\n\t\t\t\tgraphTracer._visit (j, i)._wait ();\n\n\t\t\t\tvar nextPos = incomingNodes [j].indexOf (-1);\n\t\t\t\tincomingNodes [j] [nextPos] = i;\n\t\t\t\tinTracer._notify (j, nextPos, i)._wait ();\n\t\t\t\tinTracer._denotify (j, nextPos)._wait ();\n\n\t\t\t\tgraphTracer._leave (j, i)._wait ();\n\t\t\t}\n\t\t}\n\t}\n\n\t//logger._print ('All -1s will be removed from incoming node records, they are irrelevant');\n\tincomingNodes.forEach (function (arr) {\n\t\tarr.splice (arr.indexOf (-1));\n\t});\n}) ();\n\nfunction updateRank (nodeIndex) {\n\tvar inNodeSummation = 0, result;\n\n\tlogger._print ('Updating rank of ' + nodeIndex);\n\tlogger._print ('The incoming Nodes of ' + nodeIndex + ' are being highlighted');\n\n\tincomingNodes [nodeIndex].forEach (function (incoming, i) {\n\t\tinTracer._select (nodeIndex, i)._wait ();\n\t\tlogger._print ('Outgoing edge count of ' + incoming + ' is ' + outgoingEdgeCounts [incoming]);\n\t\toecTracer._select (incoming)._wait ();\n\n\t\tinNodeSummation += (ranks [incoming] / outgoingEdgeCounts [incoming]);\n\n\t\toecTracer._deselect (incoming)._wait ();\n\t\tinTracer._deselect (nodeIndex, i)._wait ();\n\t});\n\tlogger._print ('In-Node summation of ' + nodeIndex + ' = ' + inNodeSummation);\n\t\n\tresult = ((1 - damping) / G.length) + (damping * inNodeSummation);\t\t//notice the subtle difference between equations of Basic PR & PR version 2 (divide by N)\n\tlogger._print ('Therefore, using Equation, new rank of ' + nodeIndex + ' = ' + result);\n\treturn result;\n}\n\nvar damping = 0.85,\n\titerations = 7;\nvar initialRank = 1.0;\n\nlogger._print ('Initialized all Page ranks to ' + initialRank);\nranks = filledArray (G.length, initialRank);\n\nrankTracer._setData (ranks);\nlogger._print ('Begin execution of PageRank Version #1');\nlogger._print ('Equation used: PR (X) = (1 - D) + D (In-Node-Summation i->X (PR (I) / Out (i)))');\nlogger._print ('D = Damping Factor, PR (X) = Page rank of Node X, i = the ith In-Node of X, Out (i) = outgoing Edge Count of i');\nlogger._print ('');\n\nwhile (iterations--) {\n\tfor (var node = 0; node < ranks.length; node++) {\n\t\tranks [node] = updateRank (node);\n\t\trankTracer._notify (node, ranks [node])._wait ();\n\t\trankTracer._notify (node)._wait ();\n\t}\n}\n\nlogger._print ('Page Ranks have been converged to.')\nranks.forEach (function (rank, node) {\n\tlogger._print ('Rank of Node #' + node + ' = ' + rank);\n});\nlogger._print ('Done');\n",
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
      code: "function SCCVertex(u, disc, low,  st, stackMember, carry) \n{\n\tgraphTracer._visit(u)._wait();\n\n    disc[u] = ++carry.time;\n    discTracer._notify(u, carry.time)._wait();\n\n    low[u] = carry.time;\n    lowTracer._notify(u, carry.time)._wait();\n\n    st.push(u);\n    stTracer._setData(st)._wait();\n\n    stackMember[u] = true;\n    stackMemberTracer._notify(u, true)._wait();\n\n    // Go through all vertices adjacent to this\n    for (var v = 0; v < G[u].length; v++) {\n    \tif (G[u][v]) {\n\n            // If v is not visited yet, then recur for it\n            if (disc[v] == -1) {\n            \tSCCVertex(v, disc, low, st, stackMember, carry);\n\n                // Check if the subtree rooted with 'v' has a\n                // connection to one of the ancestors of 'u'\n                low[u]  = Math.min(low[u], low[v]);\n                lowTracer._notify(u, low[u]);\n            }\n\n            // Update low value of 'u' only of 'v' is still in stack\n            // (i.e. it's a back edge, not cross edge).\n            else if (stackMember[v] == true) {\n            \tlow[u]  = Math.min(low[u], disc[v]);\n            \tlowTracer._notify(u, low[u])._wait();\n            }\n\n        }\n    }\n\n    // head node found, pop the stack and print an SCC\n    var w = 0;  // To store stack extracted vertices\n    if (low[u] == disc[u]) {\n    \t\n    \twhile (st[st.length-1] != u) {\n    \t\tw = st.pop();\n    \t\tstTracer._setData(st)._wait();\n    \t\n    \t\tlogger._print(w)._wait();\n\n    \t\tstackMember[w] = false;\n    \t\tstackMemberTracer._notify(w, false)._wait();\n    \t}\n\n    \tw = st.pop();\n    \tstTracer._setData(st)._wait();\n\n    \tlogger._print(w)._wait();\n    \tlogger._print('------');\n\n    \tstackMember[w] = false;\n    \tstackMemberTracer._notify(w, false)._wait();\n    }\n}\n\nfunction SCC()\n{\n\tvar disc = new Array(G.length);\n\tvar low = new Array(G.length);\n\tvar stackMember = new Array(G.length);\n\tvar st = [];\n\tvar carry = { time: 0 };\n\n    for (var i = 0; i < G.length; i++) {\n    \tdisc[i] = -1;\n    \tlow[i] = -1;\n    \tstackMember[i] = false;\n    }\n\n    discTracer._setData(disc);\n    lowTracer._setData(low);\n    stackMemberTracer._setData(stackMember);\n    stTracer._setData(st);\n\n    for (var i = 0; i < G.length; i++) {\n    \tif (disc[i] == -1) {\n    \t\tSCCVertex(i, disc, low, st, stackMember, carry);\n    \t}\n    }\n}",
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
      code: "(function topologicalSort() {\n    var inDegrees = Array.apply(null, Array(G.length)).map(Number.prototype.valueOf, 0);\t\t//create an Array of G.length number of 0s\n    var Q = [], iter = 0, i;\n\n    logger._print('Calculating in-degrees for each Node...');\n    for (var currNode = 0; currNode < G.length; currNode++) {\n        for (var currNodeNeighbor = 0; currNodeNeighbor < G.length; currNodeNeighbor++) {\n            if (G [currNode] [currNodeNeighbor]) {\n                logger._print(currNodeNeighbor + ' has an incoming edge from ' + currNode);\n                tracer._visit(currNodeNeighbor, currNode)._wait();\n                inDegrees [currNodeNeighbor]++;\n                tracer._leave(currNodeNeighbor, currNode)._wait();\n            }\n        }\n    }\n    logger._print('Done. In-Degrees are: [ ' + String(inDegrees) + ' ]');\n    logger._print('');\n\n    logger._print('Initializing queue with all the sources (nodes with no incoming edges)');\n    inDegrees.map(function (indegrees, node) {\n        tracer._visit(node)._wait();\n        if (!indegrees) {\n            logger._print(node + ' is a source');\n            Q.push(node);\n        }\n        tracer._leave(node)._wait();\n    });\n    logger._print('Done. Initial State of Queue: [ ' + String(Q) + ' ]');\n    logger._print('');\n\n    //begin topological sort (kahn)\n    while (Q.length > 0) {\n        logger._print('Iteration #' + iter + '. Queue state: [ ' + String(Q) + ' ]');\n        currNode = Q.shift();\n        tracer._visit(currNode)._wait();\n\n        for (i = 0; i < G.length; i++) {\n            if (G [currNode] [i]) {\n                logger._print(i + ' has an incoming edge from ' + currNode + '. Decrementing ' + i + '\\'s in-degree by 1.');\n                tracer._visit(i, currNode)._wait();\n                inDegrees [i]--;\n                tracer._leave(i, currNode)._wait();\n\n                if (!inDegrees [i]) {\n                    logger._print(i + '\\'s in-degree is now 0. Enqueuing ' + i);\n                    Q.push(i);\n                }\n            }\n        }\n        tracer._leave(currNode)._wait();\n        logger._print('In-degrees are: [' + String(inDegrees) + ' ]');\n        logger._print('-------------------------------------------------------------------');\n\n        iter++;\n    }\n})();",
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
      code: "// sort according to decreasing order of profit \n// Bubble sort implemented ... Implement a better algorithm for better performance\nfor (var i = 0; i < N - 1; i++) {\n    for (var j = 0; j < N - i - 1; j++) {\n        if (profit[j] < profit[j + 1]) {\n            var temp = profit[j];\n            profit[j] = profit[j + 1];\n            profit[j + 1] = temp;\n            temp = deadline[j];\n            deadline[j] = deadline[j + 1];\n            deadline[j + 1] = temp;\n            var t = jobId[j];\n            jobId[j] = jobId[j + 1];\n            jobId[j + 1] = t;\n        }\n    }\n}\n\nvar slot = new Array(N);\nvar result = new Array(N);\nfor (var i = N - 1; i >= 0; i--) {\n    result[i] = '-';\n}\ntracer._setData(jobId);\ntracer1._setData(deadline);\ntracer2._setData(profit);\ntracer3._setData(result);\n\n// Initialise all slots to free \nfor (var i = 0; i < N; i++) {\n    slot[i] = 0;\n}\n\n// Iterate through all the given jobs\nfor (var i = 0; i < N; i++) {\n    /*\n     Start from the last possible slot.\n     Find a slot for the job\n     */\n    tracer._select(i)._wait();\n    tracer1._select(i)._wait();\n    for (var j = Math.min(N, deadline[i]) - 1; j >= 0; j--) {\n        if (slot[j] === 0) {\n            tracer3._notify(j, jobId[i])._wait();\n            result[j] = jobId[i];\n            slot[j] = 1;\n            tracer3._denotify(j);\n            break;\n        }\n    }\n    tracer._deselect(i);\n    tracer1._deselect(i);\n}\n\n",
    },
    majority_element: {
      code: "function isMajorityElement ( element ) {\n\tvar count = 0;\n\tlogger._print ('Verify majority element ' + element );\n\tfor (var i = N - 1; i >= 0; i--) {\n\t\ttracer._notify (i,A[i])._wait ();\n\t\tif (A[i] == element) {\n\t\t\tcount++;\n\t\t} else {\n\t\t\ttracer._denotify (i);\n\t\t}\n\t}\n\tlogger._print ('Count of our assumed majority element ' + count);\n\tif(count>Math.floor (N/2)) {\n\t\tlogger._print ('Our assumption was correct!');\n\t\treturn true;\n\t}\n\tlogger._print ('Our assumption was incorrect!');\n\treturn false;\n}\n\nfunction findProbableElement () {\n\tvar index = 0, count = 1;\n\ttracer._select (index)._wait();\n\tlogger._print ('Beginning with assumed majority element : ' + A[index] + ' count : ' +count);\n\tlogger._print ('--------------------------------------------------------');\n\tfor( var i = 1; i < N; i++ ) {\n\t\ttracer._notify (i,A[i])._wait ();\n\t\tif(A[index]==A[i]) {\n\t\t\tcount++;\n\t\t\tlogger._print ('Same as assumed majority element! Count : ' + count);\n\t\t} else {\n\t\t\tcount--;\n\t\t\tlogger._print ('Not same as assumed majority element! Count : ' + count);\n\t\t}\n\n\t\tif(count===0) {\n\t\t\tlogger._print ('Wrong assumption in majority element');\n\t\t\ttracer._deselect (index);\n\t\t\ttracer._denotify (i);\n\t\t\tindex = i;\n\t\t\tcount = 1;\n\t\t\ttracer._select (i)._wait ();\n\t\t\tlogger._print ('New assumed majority element!'+ A[i]  +' Count : '+count);\n\t\t\tlogger._print ('--------------------------------------------------------');\n\t\t} else {\n\t\t\ttracer._denotify (i);\t\t\n\t\t}\n\t}\n\tlogger._print ('Finally assumed majority element ' + A[index]);\n\tlogger._print ('--------------------------------------------------------');\n\treturn A[index];\n}\n\nfunction findMajorityElement () {\n\tvar element = findProbableElement ();\n\tif(isMajorityElement (element) === true) {\n\t\tlogger._print ('Majority element is ' + element);\n\t} else {\n\t\tlogger._print ('No majority element');\n\t}\n}\n\nfindMajorityElement ();",
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
      code: 'function kruskal() {\n    var vcount = G.length;\n\n    // Preprocess: sort edges by weight.\n    var edges = [];\n    for (var vi = 0; vi < vcount - 1; vi++) {\n        for (var vj = vi + 1; vj < vcount; vj++) {\n            edges.push({\n                0: vi,\n                1: vj,\n                weight: G[vi][vj]\n            });\n        }\n    }\n    edges.sort(function (ei, ej) {\n        return ei.weight - ej.weight\n    });\n\n    // Give each vertex a tree to decide if they are already in the same tree.\n    var t = [];\n    for (var i = 0; i < vcount; i++) {\n        t[i] = {};\n        t[i][i] = true;\n    }\n\n    var wsum = 0;\n    for (var n = 0; n < vcount - 1 && edges.length > 0;) {\n        var e = edges.shift(); // Get the edge of min weight\n        tracer._visit(e[0], e[1])._wait();\n        if (t[e[0]] === t[e[1]]) {\n            // e[0] & e[1] already in the same tree, ignore\n            tracer._leave(e[0], e[1])._wait();\n            continue;\n        }\n\n        // Choose the current edge.\n        wsum += e.weight;\n\n        // Merge tree of e[0] & e[1]\n        var tmerged = {};\n        for (i in t[e[0]]) tmerged[i] = true;\n        for (i in t[e[1]]) tmerged[i] = true;\n        for (i in tmerged) t[i] = tmerged;\n\n        n += 1;\n    }\n\n    logger._print("The sum of all edges is: " + wsum);\n}\n\nkruskal();\n',
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
      code: 'function prim() {\n    // Finds a tree so that there exists a path between\n    // every two nodes while keeping the cost minimal\n    var minD, minI, minJ, sum = 0, D = [];\n    for (var i = 0; i < G.length; i++) D.push(0);\n    D[0] = 1; // First node is visited\n    for (var k = 0; k < G.length - 1; k++) { // Searching for k edges\n        minD = Infinity;\n        for (i = 0; i < G.length; i++)\n            if (D[i]) // First node in an edge must be visited\n                for (var j = 0; j < G.length; j++)\n                    if (!D[j] && G[i][j]) {\n                        tracer._visit(i, j)._wait();\n                        // Second node must not be visited and must be connected to first node\n                        if (G[i][j] < minD) {\n                            // Searching for cheapest edge which satisfies requirements\n                            minD = G[i][j];\n                            minI = i;\n                            minJ = j;\n                        }\n                        tracer._leave(i, j)._wait();\n                    }\n        tracer._visit(minI, minJ)._wait();\n        D[minJ] = 1; // Visit second node and insert it into or tree\n        sum += G[minI][minJ];\n    }\n    logger._print("The sum of all edges is: " + sum);\n}\n\nlogger._print("nodes that belong to minimum spanning tree are: ");\nprim();',
    },
  },
  number_theory: {
    euclidean_algorithm: {
      code: 'logger._print("Finding the greatest common divisor of " + a[0] + " and " + a[1]);\n\nlogger._print("Checking if first number is at most the second number");\n\nif(a[0] > a[1]) {\n    var tmp = a[0];\n    a[0] = a[1];\n    a[1] = tmp;\n    logger._print("The first number is bigger than the second number. Switching the numbers.");\n    tracer._setData(a)._wait();\n}\n\nwhile(a[0] > 0) {\n    logger._print(a[1] + " % " + a[0] + " = " + a[1]%a[0]);\n    logger._print("Switching a[1] with a[1]%a[0]");\n    a[1] %= a[0];\n    tracer._notify(1, a[1])._wait();\n    logger._print("Now switching the two values to keep a[0] < a[1]");\n    var tmp = a[0];\n    a[0] = a[1];\n    a[1] = tmp;\n    tracer._notify(0, a[0]);\n    tracer._notify(1, a[1])._wait();\n    tracer._denotify(0);\n    tracer._denotify(1);\n}\n\nlogger._print("The greatest common divisor is " + a[1]);',
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
      code: "function FreivaldsAlgorithm() {\n\tvar k = 5;\n\tvar i, j, tmp, tmpB, tmpC, n = A.length;\n\n\twhile (k--) {\n\t\tlogger._print('Iterations remained: #' + k);\n\n\t\t// Generate random vector\n\t\tvar r = [], P = [];\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tP.push(-1);\n\t\t\tr.push( (Math.random() < 0.5) << 0);\n\t\t}\n\t\t_r._setData(r)._wait();\n\n\t\t// Compute Br, Cr\n\t\tvar Br = [], Cr = [];\n\t\tfor (i = 0; i < n; i++) {\n\t\t\ttmpB = 0; \n\t\t\ttmpC = 0;\n\t\t\tfor (j = 0; j < n; j++) { \n\t\t\t\ttmpB += r[j] * B[j][i];\n\t\t\t\ttmpC += r[j] * C[j][i];\n\t\t\t}\n\t\t\tBr.push(tmpB);\n\t\t\tCr.push(tmpC);\n\t\t}\n\n\t\t// Compute A * Br - Cr\n\t\tP = [];\n\t\tfor (i = 0; i < n; i++) {\n\t\t\ttmp = 0;\n\t\t\tfor (j = 0; j < n; j++) { \n\t\t\t\ttmp += (A[i][j] * Br[i]) - Cr[i];\n\t\t\t}\n\t\t\tP.push(tmp);\n\t\t}\n\t\t_p._setData(P)._wait();\n\n\t\tfor (i = 0; i < n; i++) {\n\t\t\tif (P[i] !== 0) {\n\t\t\t\tlogger._print('P[' + i + '] !== 0 (' + P[i] + '), exit');\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tlogger._print('Result vector is identity, continue...');\n\n\n\t}\n\n\treturn true;\n}\n\nFreivaldsAlgorithm();",
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
      code: "// Utility function to do modular exponentiation.\n// It returns (x^y) % p\nfunction power(x, y, p)\n{\n\tvar res = 1;\n\tx = x % p;\n\twhile (y > 0) {\n    \t// If y is odd, multiply x with result\n      if (y & 1) res = (res*x) % p;\n      // y must be even now\n      y = y>>1; // y = y/2\n      x = (x*x) % p;\n   }\n   return res;\n}\n\n\n/**\n * Determine if N is prime using Miller-Rabin probabilistic algorithm\n * @param  {Number} n The number\n * @param  {Number} k An integer that determine the accuracy of the solution\n * @return {Boolean}\n */\nfunction testProbablyPrime(n, k) {\n\tlogger._print(\"==> Testing number \" + n);\n\n\tif (n === 1 || n === 3) {\n\t\tlogger._print(\"==> Simple case, N is 1 or 3\");\n\t\treturn true;\n\t}\n\tif (n % 2 === 0) {\n\t\tlogger._print(\"==> Simple case, \" + n + \" mod 2 = 0\");\n\t\treturn false;\n\t}\n\n\t// Write (n - 1) as 2^s * d\n\tvar d = n-1;\n\twhile (d % 2 === 0) {\n\t\td /= 2;\n\t}\n\tlogger._print(\"d = \" + d);\n\n\t// Do 5 iterations if none supplied\n\tk = k || 5;\n\tvar P = 100 * (1 - (1/Math.pow(4, k)));\n\n\tWitnessLoop: do {\n\t\tlogger._print(\"Remaining iterations: #\" + k);\n\n\t\tvar a = 2 + Math.floor(Math.random() * (n - 4));\n\t\tlogger._print(\"--> first test with random = \" + a);\n\n\t\t// Compute a^d % n\n\t\tvar x = power(a, d, n);\n\n\t\tif (x === 1 || x === n - 1) {\n\t\t\tlogger._print(\"--> continue WitnessLoop, x = 1 or x = n-1\");\n\t\t\tcontinue;\n\t\t}\n\n\t\tlogger._print(\"--> second test\");\n\t\t\n\t\t// Keep squaring x while one of the following doesn't\n    \t// happen\n    \t// (i)   d does not reach n-1\n    \t// (ii)  (x^2) % n is not 1\n    \t// (iii) (x^2) % n is not n-1\n    \tvar i = d;\n    \twhile (i != n-1) {\n    \t\tx = (x * x) % n;\n    \t\ti *= 2;\n\n    \t\tif (x == 1) {\n    \t\t\tlogger._print(\"--> exiting, \" + n + \" is composite\");\n    \t\t\treturn false;\n    \t\t}\n\n    \t\tif (x == n-1) {\n    \t\t\tlogger._print(\"--> continue WitnessLoop\");\n\t\t\t\tcontinue WitnessLoop;\n\t\t\t}\n    \t}\n\n\t\tlogger._print(\"--> exiting, \" + n + \" is composite 'cause (n-1) is reached\");\n\t\treturn false;\n\n\t} while (--k);\n \t\n\tlogger._print(\"End of tests, \" + n + \" is probably prime with probabilty of \" + P + \"%\");\n\treturn true;\n}",
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
      code: 'logger._print("1 is not prime");\ntracer._select(0)._wait();\nfor (var i = 2; i <= N; i++) {\n  if (b[i] === 0) {\n    logger._print(i + " is not marked, so it is prime");\n    // a[i-1] is prime mark by red indicators\n    tracer._notify(i - 1)._wait();\n    for (var j = i + i; j <= N; j += i) {\n      b[j] = 1; // a[j-1] is not prime, mark by blue indicators\n      logger._print(j + " is a multiple of " + i + " so it is marked as composite");\n      tracer._select(j - 1)._wait();\n    }\n    tracer._denotify(i - 1);\n  }\n}\nlogger._print("The unmarked numbers are the prime numbers from 1 to " + N);\n',
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
      code: "function BinarySearch(array, element, minIndex, maxIndex) { // array = sorted array, element = element to be found, minIndex = low index, maxIndex = high index\n    if (minIndex > maxIndex) {\n        logger._print(element + ' is not found!');\n        return -1;\n    }\n\n    var middleIndex = Math.floor((minIndex + maxIndex) / 2);\n    var testElement = array[middleIndex];\n\n    tracer._select(minIndex, maxIndex)._wait();\n    tracer._notify(middleIndex);\n    logger._print('Searching at index: ' + middleIndex)._wait();\n    tracer._denotify(middleIndex);\n    tracer._deselect(minIndex, maxIndex);\n\n    if (testElement < element) {\n        logger._print('Going right.');\n        return BinarySearch(array, element, middleIndex + 1, maxIndex);\n    }\n\n    if (testElement > element) {\n        logger._print('Going left.');\n        return BinarySearch(array, element, minIndex, middleIndex - 1);\n    }\n\n    if (testElement === element) {\n        logger._print(element + ' is found at position ' + middleIndex + '!');\n        tracer._select(middleIndex);\n        return middleIndex;\n    }\n\n    logger._print(element + ' is not found!');\n    return -1;\n}\n\nvar element = D[Integer.random(0, D.length - 1)];\n\nlogger._print('Using binary search to find ' + element);\nBinarySearch(D, element, 0, D.length - 1);",
    },
  },
  sorting: {
    bubble: {
      code: "logger._print('original array = [' + D.join(', ') + ']');\nvar N = D.length;\nvar swapped;\ndo {\n    swapped = false;\n    tracer._select(N - 1)._wait();\n    for (var i = 1; i < N; i++) {\n        tracer._select(i)._wait();\n        if (D[i - 1] > D[i]) {\n            logger._print('swap ' + D[i - 1] + ' and ' + D[i]);\n            var temp = D[i - 1];\n            D[i - 1] = D[i];\n            D[i] = temp;\n            swapped = true;\n            tracer._notify(i - 1, D[i - 1])._notify(i, D[i])._wait();\n            tracer._denotify(i - 1)._denotify(i);\n        }\n        tracer._deselect(i);\n    }\n    tracer._deselect(N - 1);\n    N--;\n} while (swapped);\nlogger._print('sorted array = [' + D.join(', ') + ']');",
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
      code: '//place numbers into appropriate buckets\nfor (let i = 0; i < array.length; i++) {\n\tvar bucketPos = Math.floor(numBuckets * (array[i] / maxValue));\n\tbuckets[bucketPos].push(array[i]);\n\tbucketsCount[bucketPos]++;\n\ttracer._select(0, i)._wait();\n\ttracer._notify(1, bucketPos, D[1][bucketPos])._wait();\n\ttracer._deselect(0, i);\n\ttracer._denotify(1, bucketPos, D[1][bucketPos]);\n}\n\nvar sortLocation = 0;\nfor (let k = 0; k < buckets.length; k++) {\n\t//do insertion sort\n\tfor (let i = 1; i < buckets[k].length; i++) {\n\t\tvar key = buckets[k][i];\n\t\tvar j;\n\t\tfor (j = i - 1; (j >= 0) && (buckets[k][j] > key); j--) {\n\t\t\tbuckets[k][j + 1] = buckets[k][j];\n\t\t}\n\t\tbuckets[k][j + 1] = key;\n\t}\n\t\n\t//place ordered buckets into sorted array\n\tfor (let i = 0; i < buckets[k].length; i++) {\n\t\tsortedArray[sortLocation] = buckets[k][i];\n\t\tbucketsCount[k]--;\n\t\ttracer._notify(1, k, D[1][k]);\n        tracer._notify(2, sortLocation, D[2][sortLocation])._wait();\n\t\ttracer._denotify(1, k, D[1][k]);\n        tracer._denotify(2, sortLocation, D[2][sortLocation]);\n\t\tsortLocation++;\n\t}\n}',
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\nvar N = D.length;\nvar swapped;\nvar gap = N;            // initialize gap size\nvar shrink = 1.3;       // set the gap shrink factor\n\ndo{\n    // update the gap value for the next comb.\n    gap = Math.floor( gap/shrink );\n    if( gap < 1 ){\n        // minimum gap is 1\n        gap = 1;\n    }\n\n    swapped = false;    // initialize swapped\n    // a single comb over the input list\n    for( var i=0; i+gap < N; i++ ){\n        tracer._select(i)._select(i+gap)._wait();\n\n        if( D[i] > D[i+gap] ){\n            logger._print('swap ' + D[i] + ' and ' + D[i+gap]);     // log swap event\n            \n            var temp = D[i];\n            D[i] = D[i+gap];\n            D[i+gap] = temp;\n\n            tracer._notify(i, D[i])._notify(i+gap, D[i+gap])._wait();\n            tracer._denotify(i)._denotify(i+gap);\n\n            swapped = true;     // Flag swapped has happened and list is not guaranteed sorted\n        }\n        tracer._deselect(i)._deselect(i+gap);\n    } // End of combing\n} while( gap!=1 || swapped  )",
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
      code: '//set counts values\nfor (let i = 0; i < A.length; i++) {\n    tracer._select(0, i)._wait();\n    counts[A[i]]++;\n    tracer._notify(1, A[i], D[1][A[i]])._wait();\n    tracer._deselect(0, i);\n    tracer._denotify(1, A[i], D[1][A[i]])._wait();\n}\n\n//sort\nvar i = 0;\nfor (var j = 0; j <= maxValue; j++) {\n    while (counts[j] > 0) {\n        tracer._select(1, j)._wait();\n        sortedA[i] = j;\n        counts[j]--;\n        tracer._notify(1, j, D[1][j]);\n        tracer._notify(2, i, D[2][i])._wait();\n        tracer._deselect(1, j);\n        tracer._denotify(1, j, D[1][j]);\n        tracer._denotify(2, i, D[2][i])._wait();\n        i++;\n    }\n}',
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\nvar N = D.length;\nvar writes = 0;   // number of writing performed\nvar pos;          // the index of item in the sorted array\nvar item;         // an item in the array\nvar temp;         // a temp value used for storing swapped item\nfor (var cycleStart = 0; cycleStart <= N - 2; cycleStart++) {\n  item = D[cycleStart];\n\n  // find where to put the item\n  pos = cycleStart;\n  tracer._select(cycleStart);\n\n  for (var i = cycleStart + 1; i <= N - 1; i++) {\n    tracer._select(i)._wait()._deselect(i);\n    if (D[i] < item) {\n      pos++;\n    }\n  }\n\n  // if the item is already there, this is not a circle\n  if (pos === cycleStart) {\n    tracer._deselect(cycleStart);\n    continue;\n  }\n\n  // otherwise put the item there or right after any duplicates\n  while (item === D[pos]) {\n    pos++;\n  }\n\n  // write item to new index and increment writes\n  temp = D[pos];\n  D[pos] = item;\n  item = temp;\n\n  writes++;\n\n  if (pos !== cycleStart) {\n    logger._print('Rewrite ' + D[pos] + ' to index ' + pos + '; the next value to rewrite is ' + item);\n  } else {\n    logger._print('Rewrite ' + D[pos] + ' to index ' + pos);\n  }\n  tracer._select(pos)._wait()._deselect(pos);\n  tracer._notify(pos, D[pos])._notify(cycleStart, D[cycleStart])._wait();\n  tracer._denotify(pos)._denotify(cycleStart);\n\n  // rotate the rest of the cycle\n  while (pos !== cycleStart) {\n    pos = cycleStart;\n\n    for (i = cycleStart + 1; i <= N - 1; i++) {\n      tracer._select(i)._wait()._deselect(i);\n      if (D[i] < item) {\n        pos++;\n      }\n    }\n\n    while (item === D[pos]) {\n      pos++;\n    }\n\n    temp = D[pos];\n    D[pos] = item;\n    item = temp;\n\n    if (pos !== cycleStart) {\n      logger._print('Rewrite ' + D[pos] + ' to index ' + pos + '; the next value to rewrite is ' + item);\n    } else {\n      logger._print('Rewrite ' + D[pos] + ' to index ' + pos);\n    }\n    tracer._select(pos)._wait()._deselect(pos);\n    tracer._notify(pos, D[pos])._notify(cycleStart, D[cycleStart])._wait();\n    tracer._denotify(pos)._denotify(cycleStart);\n\n    writes++;\n  }\n}\n\nlogger._print('Number of writes performed is ' + writes);\n",
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
      code: "logger._print('Original array = [' + D.join(', ') + ']');\n\nfunction heapSort(array, size) {\n    var i, j, temp;\n\n    for (i = Math.ceil(size / 2) - 1; i >= 0; i--) {\n        heapify(array, size, i);\n    }\n\n    for (j = size - 1; j >= 0; j--) {\n        temp = array[0];\n        array[0] = array[j];\n        array[j] = temp;\n        \n        tracer._notify(0, array[0])._notify(j, array[j]);\n        logger._print('Swapping elements : ' + array[0] + ' & ' + array[j])._wait();\n        tracer._denotify(0)._denotify(j);\n        tracer._select(j)._wait();\n\n        heapify(array, j, 0);\n\n        tracer._deselect(j);\n    }\n}\n\nfunction heapify(array, size, root) {\n\n    var largest = root;\n    var left = 2 * root + 1;\n    var right = 2 * root + 2;\n    var temp;\n\n    if (left < size && array[left] > array[largest]) {\n        largest = left;\n    }\n\n    if (right < size && array[right] > array[largest]) {\n        largest = right;\n    }\n\n    if (largest != root) {\n        temp = array[root];\n        array[root] = array[largest];\n        array[largest] = temp;\n\n        tracer._notify(root, array[root])._notify(largest, array[largest]);\n        logger._print('Swapping elements : ' + array[root] + ' & ' + array[largest])._wait();\n        tracer._denotify(root)._denotify(largest);\n\n        heapify(array, size, largest);\n    }\n}\n\nheapSort(D, D.length);\n\nlogger._print('Final array = [' + D.join(', ') + ']');\n",
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\nfor (var i = 1; i < D.length; i++) {\n    var key = D[i];\n    logger._print('insert ' + key);\n    tracer._select(i)._wait();\n    var j;\n    for (j = i - 1; (j >= 0) && (D[j] > key); j--) {\n        D[j + 1] = D[j];\n        tracer._notify(j + 1, D[j + 1])._wait();\n        tracer._denotify(j + 1);\n    }\n    D[j + 1] = key;\n    tracer._notify(j + 1, D[j + 1])._wait();\n    tracer._denotify(j + 1);\n    tracer._deselect(i);\n}\nlogger._print('sorted array = [' + D.join(', ') + ']');",
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\n\nfunction mergeSort(start, end) {\n    if (Math.abs(end - start) <= 1) return [];\n    var middle = Math.ceil((start + end) / 2);\n\n    mergeSort(start, middle);\n    mergeSort(middle, end);\n\n    logger._print('divide left[' + start + ', ' + (middle - 1) + '], right[' + (middle) + ', ' + (end - 1) + ']');\n    return mergeSort.merge(start, middle, end);\n}\n\nmergeSort.merge = function (start, middle, end) {\n    var leftSize = middle - start;\n    var rightSize = end - middle;\n    var maxSize = Math.max(leftSize, rightSize);\n    var size = end - start;\n    var left = [];\n    var right = [];\n    var i;\n\n    for (i = 0; i < maxSize; i++) {\n        if (i < leftSize) {\n            left.push(D[start + i]);\n            tracer._select(start + i);\n            logger._print('insert value into left array[' + i + '] = ' + D[start + i])._wait();\n        }\n        if (i < rightSize) {\n            right.push(D[middle + i]);\n            tracer._select(middle + i);\n            logger._print('insert value into right array[' + i + '] = ' + D[middle + i])._wait();\n        }\n    }\n    logger._print('left array = [' + left.join(', ') + '], ' + 'right array = [' + right.join(', ') + ']');\n\n    i = 0;\n    while (i < size) {\n        if (left[0] && right[0]) {\n            if (left[0] > right[0]) {\n                D[start + i] = right.shift();\n                logger._print('rewrite from right array[' + i + '] = ' + D[start + i]);\n            } else {\n                D[start + i] = left.shift();\n                logger._print('rewrite from left array[' + i + '] = ' + D[start + i]);\n            }\n        } else if (left[0]) {\n            D[start + i] = left.shift();\n            logger._print('rewrite from left array[' + i + '] = ' + D[start + i]);\n        } else {\n            D[start + i] = right.shift();\n            logger._print('rewrite from right array[' + i + '] = ' + D[start + i]);\n        }\n\n        tracer._deselect(start + i);\n        tracer._notify(start + i, D[start + i])._wait();\n        tracer._denotify(start + i);\n        i++;\n    }\n\n    var tempArray = [];\n    for (i = start; i < end; i++) tempArray.push(D[i]);\n    logger._print('merged array = [' + tempArray.join(', ') + ']');\n};\n\nmergeSort(0, D.length);\nlogger._print('sorted array = [' + D.join(', ') + ']');\n",
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\nvar N = D.length;\nfunction flip (start) {\n  tracer._select(start, N)._wait();\n  var idx = 0;\n  for (var i=start;i<(start+N)/2;i++) {\n    tracer._select(i)._wait();\n    var temp = D[i];\n    D[i] = D[N-idx-1];\n    D[N-idx-1] = temp;\n    idx++;\n    tracer._notify(i, D[i])._notify(N-idx, D[N-idx])._wait();\n    tracer._denotify(i)._denotify(N-idx);\n    tracer._deselect(i);\n  }\n  tracer._deselect(start, N);\n}\nfor (var i=0;i<N-1;i++) {\n  logger._print('round ' + (i+1));\n  var currArr = D.slice(i, N);\n  var currMax = currArr.reduce((prev, curr, idx) => {\n    return (curr > prev.val) ? { idx: idx, val: curr} : prev;\n  }, {idx: 0, val: currArr[0]});\n  if (currMax.idx !== 0) { // if currMax.idx === 0 that means max element already at the bottom, no flip required\n    logger._print('flip at ' + (currMax.idx+i) + ' (step 1)');\n    flip(currMax.idx+i, N);\n    logger._print('flip at ' + (i) + ' (step 2)');\n    flip(i, N);\n  }\n}\nlogger._print('sorted array = [' + D.join(', ') + ']');\n",
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
      code: "var min = A[0];\nvar max = A[0];\n\nfor( var  i = 1; i < N; i++ ) {\n\tif( A[i] < min ) {\n\t\tmin = A[i];\n\t}\n\tif( A[i] > max ) {\n\t\tmax = A[i];\n\t}\n}\nvar range = max - min + 1;\n\nvar holes = new Array ( range );\nfor ( var i = 0; i < range; i++ ) {\n\tholes[i] = [];\n}\ntracer2._setData( holes );\n\nlogTracer._print ( 'Filling up holes' );\nfor ( var i = 0; i < N ; i++ ) {\n\ttracer1._select ( i )._wait ();\n\n\tholes[ A[i] - min ].push( A[i] );\n\t\n\ttracer2._setData( holes );\n\ttracer1._deselect ( i );\n}\n\nlogTracer._print ( 'Building sorted array' );\nvar k = 0;\nfor ( var i = 0; i < range ; i++ ) {\n\tfor (var j = 0; j < holes[i].length; j++ ) {\n\t\ttracer2._select ( i, j )._wait ();\n\t\tA[k++] = holes[i][j];\n\t\ttracer1._notify ( k-1, A[k-1] )._wait ();\n\t\ttracer2._deselect ( i, j );\n\t\ttracer1._denotify ( k-1 );\n\t}\n}\n\nlogTracer._print ( 'Sorted array is ' + A );",
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
      code: "logger._print('original array = [' + D.join(', ') + ']');\n\nfunction partition(D, low, high) {\n    var i, j, s;\n    while (high > low) {\n        i = low;\n        j = high;\n        s = D[low];\n        while (i < j) {\n            tracer._select(high)._select(low)._wait();\n            while (D[j] > s){ \n                tracer._select(j)._wait();\n                tracer._deselect(j);\n                j--;\n            }\n            D[i] = D[j];\n            tracer._notify(i, D[j])._wait()._denotify(i);\n            while (s >= D[i] && i < j){ \n                tracer._select(i)._wait();\n                tracer._deselect(i);\n                i++;\n            }\n            D[j] = D[i];\n            tracer._notify(j, D[i])._wait()._denotify(j);\n            tracer._deselect(high)._deselect(low);\n        }\n        D[i] = s;\n        tracer._notify(i, s)._wait();\n        tracer._denotify(i);\n        partition(D, low, i-1);\n        low = i+1;\n    }\n}\n\nfunction quicksort(D) {\n       partition(D, 0, D.length-1);\n}\n\nquicksort(D);\nlogger._print('sorted array = [' + D.join(', ') + ']');\n",
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
      code: "logger._print('original array = [' + D[0].join(', ') + ']');\nfunction pow(base, expo) {\n    var ans = 1;\n    for (var i = 0; i < expo; i++) {\n        ans *= base;\n    }\n    return ans;\n}\nfunction digit(i, exp) {\n    return parseInt(D[0][i] / pow(10, exp) % 10);\n}\nfor (var exp = 0; exp < 3; exp++) {\n    logger._print(\"Digit: \" + exp);\n    var i;\n    for (i = 0; i < D[0].length; i++) {\n        var d = digit(i, exp);\n        tracer._select(0, i)._wait();\n        D[2][d] += 1;\n        tracer._notify(2, d, D[2][d])._wait();\n        tracer._denotify(2, d);\n        tracer._deselect(0, i);\n    }\n    for (i = 1; i < 10; i++) {\n        tracer._select(2, i - 1)._wait();\n        D[2][i] += D[2][i - 1];\n        tracer._notify(2, i, D[2][i])._wait();\n        tracer._denotify(2, i);\n        tracer._deselect(2, i - 1);\n    }\n    for (i = D[0].length - 1; i >= 0; i--) {\n        var d = digit(i, exp);\n        tracer._select(0, i)._wait();\n        D[2][d] -= 1;\n        tracer._notify(2, d, D[2][d])._wait();\n        tracer._denotify(2, d);\n        D[1][D[2][d]] = D[0][i];\n        tracer._notify(1, D[2][d], D[1][D[2][d]])._wait();\n        tracer._denotify(1, D[2][d]);\n        tracer._deselect(0, i);\n    }\n    for (i = 0; i < D[0].length; i++) {\n        tracer._select(1, i)._wait();\n        D[0][i] = D[1][i];\n        tracer._notify(0, i, D[0][i])._wait();\n        tracer._denotify(0, i);\n        tracer._deselect(1, i);\n    }\n    for (i = 0; i < 10; i++) {\n        D[2][i] = 0;\n        tracer._notify(2, i, D[2][i])._wait();\n        tracer._denotify(2, i);\n    }\n}\nlogger._print('sorted array = [' + D[0].join(', ') + ']');\n",
    },
    selection: {
      code: "logger._print('original array = [' + D.join(', ') + ']');\nfor (var i = 0; i < D.length - 1; i++) {\n    var minJ = i;\n    tracer._select(i)._wait();\n    for (var j = i + 1; j < D.length; j++) {\n    \ttracer._select(j)._wait();\n        if (D[j] < D[minJ]) {\n            minJ = j;\n            tracer._notify(j)._wait();\n            tracer._denotify(j);\n        }\n        tracer._deselect(j);\n    }\n    if (minJ != i) {\n        logger._print('swap ' + D[i] + ' and ' + D[minJ]);\n        var temp = D[i];\n        D[i] = D[minJ];\n        D[minJ] = temp;\n        tracer._notify(i, D[i])._notify(minJ, D[minJ])._wait();\n        tracer._denotify(i)._denotify(minJ);\n    }\n    tracer._deselect(i);\n}\nlogger._print('sorted array = [' + D.join(', ') + ']');",
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
      code: "logger._print('Original array = [' + D.join(', ') + ']');\nvar N = D.length;\n\nfor (var gap = N; gap = parseInt(gap / 2);) {\n    logger._print('');\n    logger._print('Gap of ' + gap);\n    for (var i = gap; i < N; i++) {\n        tracer._select(i)._select(i - gap)._wait();\n        var k = D[i];\n        logger._print('Holding: ' + k)\n        for (var j = i; j >= gap && k < D[j - gap]; j -= gap) {\n            logger._print(k + ' < ' + D[j - gap]);\n            D[j] = D[j - gap];\n            tracer._notify(j, D[j])._wait();\n            tracer._denotify(j);\n        }\n        var old = D[j];\n        D[j] = k;\n        if (old != k) {\n            tracer._notify(j,D[j])._wait();\n            tracer._denotify(j);\n            logger._print('Swapped ' + D[j] + ' with ' + old);\n        }\n\n        tracer._deselect(i)._deselect(i - gap);\n    }\n}\ntracer._clear();\nlogger._print('')\nlogger._print('Sorted array = [' + D.join(', ') + ']');\n",
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
      code: "logger._print('Initialized DP Table');\nlogger._print('Y-Axis (Top to Bottom): ' + str1);\nlogger._print('X-Axis (Left to Right): ' + str2);\n\nvar dist = (function editDistance(str1, str2, table) {\n    //display grid with words\n    logger._print('*** ' + str2.split('').join(' '));\n    table.forEach(function (item, index) {\n        var character = (index === 0) ? '*' : str1 [index - 1];\n        logger._print(character + '\\t' + item);\n    });\n\n    //begin ED execution\n    for (var i = 1; i < str1.length + 1; i++) {\n        for (var j = 1; j < str2.length + 1; j++) {\n            if (str1[i - 1] === str2[j - 1]) {\n                tracer._select(i - 1, j - 1)._wait();\n                table[i][j] = table[i - 1][j - 1];\n                tracer._notify(i, j, table[i][j])._wait();\n                tracer._denotify(i, j);\n                tracer._deselect(i - 1, j - 1);\n            }\n            else {\n                tracer._select(i - 1, j);\n                tracer._select(i, j - 1);\n                tracer._select(i - 1, j - 1)._wait();\n                table[i][j] = Math.min(table [i - 1] [j], table [i] [j - 1], table [i - 1] [j - 1]) + 1;\n                tracer._notify(i, j, table[i][j])._wait();\n                tracer._denotify(i, j);\n                tracer._deselect(i - 1, j);\n                tracer._deselect(i, j - 1);\n                tracer._deselect(i - 1, j - 1);\n            }\n        }\n    }\n\n    tracer._select(str1.length, str2.length);\n    return table [str1.length] [str2.length];\n})(str1, str2, table);\n\nlogger._print('Minimum Edit Distance: ' + dist);",
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
      code: "//Fix JS Negative number modulo Bug\nNumber.prototype.mod = function (n) {\n    return ((this%n)+n)%n;\n};\n\nfunction tracker (substring) {\n\tvar i = 1, j = 0;\n\n\tlogger._print ('Initializing i to 1, j to 0.');\n\tsubstrTracer._select (j);\n\twhile (i < track.length) {\n\t\tsubstrTracer._select (i)._wait ();\n\n\t\twhile ( (substring [i] !== substring [j]) && (j > 0) ) {\n\t\t\tlogger._print ('j = ' + track [j-1]);\n\t\t\ttrackTracer._select (j-1)._wait ();\n\t\t\ttrackTracer._deselect (j-1)._wait ();\n\n\t\t\tsubstrTracer._deselect (j);\n\t\t\tj = track [j-1];\n\t\t\tlogger._print ('j = ' + j);\n\t\t\tsubstrTracer._select (j);\n\t\t}\n\n\t\tif (substring [i] === substring [j]) {\n\t\t\tsubstrTracer._deselect (j);\n\t\t\ttrack [i] = ++j;\n\t\t\ttrackTracer._notify (i, track [i])._wait ();\n\t\t\ttrackTracer._denotify (i)._wait ();\n\t\t\tlogger._print ('substring [ ' + i + ' ] (' + substring [i] + ') equals substring [ ' + j + ' ] (' + substring [j] + '), track [ ' + i + ' ] updated to: ' + track [i]);\n\n\t\t\tlogger._print ('j = ' + j);\n\t\t\tsubstrTracer._select (j);\n\t\t}\n\t\telse {\n\t\t\ttrack [i] = 0;\n\t\t\tlogger._print ('substring [ ' + i + ' ] (' + substring [i] + ') is not equal to substring [ ' + j + ' ] (' + substring [j] + '), setting track [' + i + '] to 0');\n\t\t\ttrackTracer._select (i)._wait ();\n\t\t\ttrackTracer._deselect (i)._wait ();\n\t\t}\n\n\t\tsubstrTracer._deselect (i)._wait ();\n\t\ti++;\n\t\tlogger._print ('i = ' + i);\n\t}\n\n\treturn track;\n}\n\nfunction kmp (string, substr) {\n\tvar positions = [], j = 0, startPos;\n\n\tlogger._print ('Constructing Tracker for substring <b>' + substr + '</b>');\n\ttrack = tracker (substr);\n\tlogger._print ('Tracker for substring constructed: [ ' + String (track) + ' ]');\n\tlogger._print ('--------------------------------------------------------------------------');\n\tlogger._print ('Running KMP...');\n\n\tlogger._print ('Initializing i = 0, j = 0');\n\tfor (var i = 0; i < string.length; i++) {\n\t\tlogger._print ('comparing string [' + i + '] (' + string [i] + ') and substring [' + j + '] (' + substr [j] + ')...');\n\t\tstringTracer._select (i)._wait ();\n\t\tstringTracer._select (j)._wait ();\n\n\t\tif (string [i] === substr [j]) {\n\t\t\tlogger._print ('they\\'re equal!');\n\n\t\t\tif (j === substr.length-1) {\n\t\t\t\tlogger._print ('j (' + j + ') equals length of substring - 1 (' + substr.length + '-1), we\\'ve found a new match in the string!');\n\t\t\t\tstartPos = i - substr.length + 1;\n\t\t\t\tpositions.push (startPos);\n\n\t\t\t\tlogger._print ('Adding start position of the substring (' + startPos + ') to the results.');\n\t\t\t\tstringTracer._select (startPos)._wait ();\n\t\t\t}\n\t\t\telse {\n\t\t\t\tstringTracer._deselect (j)._wait ();\n\t\t\t\tlogger._print ('But j (' + j + ') does not equal length of substring (' + substr.length + ') Incrementing j and moving forward.');\n\t\t\t\tj++;\n\t\t\t\tlogger._print ('j = ' + j);\n\t\t\t\tstringTracer._select (j)._wait ();\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tvar tempJ = j - 1;\n\t\t\tlogger._print ('they\\'re NOT equal');\n\t\t\ttrackTracer._select (tempJ)._wait ();\n\t\t\tstringTracer._deselect (j)._wait ();\n\n\t\t\tj = track [(j-1).mod (substr.length)];\t//use modulo to wrap around, i.e., if index = -1, access the LAST element of array (PYTHON-LIKE)\n\n\t\t\tlogger._print ('Setting j to ' + j);\n\t\t\tstringTracer._select (j)._wait ();\n\t\t\ttrackTracer._deselect (tempJ)._wait ();\n\t\t}\n\n\t\tstringTracer._deselect (i)._wait ();\n\t}\n\n\treturn positions;\n}\n\nvar positions = kmp (string, substring);\n\nlogger._print ('Substring positions are: ' + (positions.length ? String (positions) : 'NONE'));\nfor (var i = 0; i < positions.length; i++) {\n\tstringTracer._select (positions [i], positions [i] + substring.length - 1)._wait ();\n}\n",
    },
    rabin_karp_algorithm: {
      code: "var N = text.length;\nvar M = pattern.length;\n\nvar hashText = 0; //hash value for text\nvar hashPattern = 0; //hash value for pattern\nvar h = 1;\n\nfor ( var i = 0; i <  (M - 1); i++ ) {\n\th = ( h * D ) % Q;\n}\n\nfor ( var i = 0; i < M; i++ ) {\n\thashPattern = ( D * hashPattern + pattern[i].charCodeAt(0)) % Q;\n\thashText = ( D * hashText + text[i].charCodeAt(0)) % Q;\n}\n\nfor ( var i = 0 ; i <= N-M; i++ ) {\n\n\t/*\n\tCheck if hash values of current window of text matches \n\twith hash values of pattern. If match is found then \n\tcheck for characters one by one\n\t*/\n\tif ( hashPattern === hashText ) {\n\t\tvar f = 0;\n\t\ttracer1._select( i, i + M )._wait();\n\t\ttracer2._select( 0, M - 1 )._wait();\n\t\tfor( var j = 0; j < M; j++ ) {\n\n\t\t\ttracer1._notify( i + j )._wait();\n\t\t\ttracer2._notify( j )._wait();\n\t\t\tif ( text[i + j] != pattern[j] ) {\n\t\t\t\tf++;\n\t\t\t}\n\t\t\ttracer1._denotify( i + j );\n\t\t\ttracer2._denotify( j );\n\t\t}\n\n\t\tif( f === 0 ) {\n\t\t\tlogger._print( ' Pattern found at index ' + i );\n\t\t}\n\t\ttracer1._deselect( i, i + M );\n\t\ttracer2._deselect( 0, M - 1 );\n\t}\n\n\t/*\n\tCalculate hash value for next window of text :\n\t*/\n\tif ( i < N-M ) {\n\t\thashText = ( D * ( hashText - text[i].charCodeAt(0)*h ) + text[ i + M ].charCodeAt(0) ) % Q;\n\n\t\t// Convert negative value of hashText (if found) to positive\n\t\tif ( hashText < 0 ) {\n\t\t\thashText = hashText + Q;\n\t\t}\n\t}\n}",
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
      code: "word += '$';\t//special character\nlogger._print ('Appended \\'$\\' at the end of word as terminating (special) character. Beginning filling of suffixes');\n\nfunction selectSuffix (word, i) {\n\tvar c = i;\n\n\twhile (i < word.length-1) {\n\t\twordTracer._select (i);\n\t\ti++;\n\t}\n\twordTracer._wait ();\n\n\twhile (c < word.length-1) {\n\t\twordTracer._deselect (c);\n\t\tc++;\n\t}\n\twordTracer._wait ();\n}\n\n(function createSA (sa, word) {\n\tfor (var i = 0; i < word.length; i++) {\n\t\tsa [i] [1] = word.slice (i);\n\n\t\tselectSuffix (word, i);\n\t\tsaTracer._notify (i, 1, sa [i] [1])._wait ();\n\t\tsaTracer._denotify (i, 1)._wait ();\n\t}\n}) (suffixArray, word);\n\nlogger._print ('Re-organizing Suffix Array in sorted order of suffixes using efficient sorting algorithm (O(N.log(N)))');\nsuffixArray.sort (function (a, b) {\n\tlogger._print ('The condition a [1] (' + a [1] + ') > b [1] (' + b [1] + ') is ' + (a [1] > b [1]));\n\treturn a [1] > b [1];\n});\n\nfor (var i = 0; i < word.length; i++) {\n\tsaTracer._notify (i, 0, suffixArray [i] [0]);\n\tsaTracer._notify (i, 1, suffixArray [i] [1])._wait ();\n\n\tsaTracer._denotify (i, 0);\n\tsaTracer._denotify (i, 1);\n}",
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
      code: 'function createZarr(concat) {\n  var i,left,right,k,N;\n  N=concat.length;\n  left=0;\n  right=0;\n  for(i=1;i<N;i++) {\n    tracer._select(i)._wait();\n    if(i>right) {\n      left=right=i;\n      while(right<N && concat[right]==concat[right-left]) {\n\n        concat_tracer._notify(right)._wait();\n        concat_tracer._select(right-left)._wait();\n        logger._print(concat[right]+" ( at position "+right+" ) is equal to "+concat[right-left]+" (at position "+(right-left)+")");\n        concat_tracer._denotify(right)._wait();\n        concat_tracer._deselect(right-left)._wait();\n        right++;\n      }\n      concat_tracer._notify(right)._wait();\n      concat_tracer._select(right-left)._wait();\n      logger._print(concat[right]+" ( at position "+right+" ) is NOT equal to "+concat[right-left]+" (at position "+(right-left)+")");\n      concat_tracer._denotify(right)._wait();\n      concat_tracer._deselect(right-left)._wait();\n      z[i]=(right-left);\n      logger._print("--------------------------------");\n      logger._print("Value of z["+i+"] = the length of the substring starting from "+i+" which is also the prefix of the concatinated string(="+(right-left)+")");\n      logger._print("--------------------------------");\n      right--;\n    } else {\n      if(z[i-left]<(right-i+1)) {\n        logger._print("The substring from index "+(i-left)+" will not cross the right end.");\n        concat_tracer._select(i-left)._wait();\n        concat_tracer._notify(right-i+1)._wait();\n        z[i]=z[i-left];\n        concat_tracer._deselect(i-left)._wait();\n        concat_tracer._denotify(right-i+1)._wait();\n      } else {\n        logger._print("The substring from index "+(i-left)+" will cross the right end.");\n        left=i;\n        while (right<N && concat[right]==concat[right-left]) {\n          concat_tracer._notify(right)._wait();\n          concat_tracer._select(right-left)._wait();\n          logger._print(concat[right]+" ( at position "+right+" ) is equal to "+concat[right-left]+" (at position "+(right-left)+")");\n          concat_tracer._denotify(right)._wait();\n          concat_tracer._deselect(right-left)._wait();\n          right++;\n        }\n        concat_tracer._notify(right)._wait();\n        concat_tracer._select(right-left)._wait();\n        logger._print(concat[right]+" ( at position "+right+" ) is NOT equal to "+concat[right-left]+" (at position "+(right-left)+")");\n        concat_tracer._denotify(right)._wait();\n        concat_tracer._deselect(right-left)._wait();\n        z[i]=(right-left);\n        right--;\n        logger._print("--------------------------------");\n        logger._print("Value of z["+i+"] = the length of the substring starting from "+i+" which is also the prefix of the concatinated string(="+(right-left)+")");\n        logger._print("--------------------------------");\n      }\n    }\n    tracer._deselect(i)._wait();\n    tracer._setData(z);\n  }\n}\n\nvar concat = pattern + "$" + text;\nconcat_tracer._setData(concat);\nvar patLen = pattern.length;\ncreateZarr(concat);\ntracer._setData(z);\nvar i;\nlogger._print("The Values in Z array equal to the length of the pattern indicates the index at which the pattern is present");\nlogger._print("===================================");\nfor(i=0;i<len;i++) {\n  if(z[i]==patLen) {\n    var pos = i - (patLen+1);\n    logger._print("Pattern Found at index "+pos);\n  }\n}\nlogger._print("===================================");\n',
    },
  },
  tree: {
    binary_search_tree: {
      code: "function bst(item, node, parent) { // node = current node , parent = previous node\n  tracer._visit(node, parent)._wait();\n  if (item === node) { \t\t\t// key found\n    logger._print(' Match Found ');\n  } else if (item < node) { \t// key less than value of current node\n    if (T[node][0] === -1) {\n      logger._print(' Not Found ');\n    } else {\n      bst(item, T[node][0], node);\n    }\n  } else {\t\t\t\t\t\t// key greater than value of current node\n    if (T[node][1] === -1) {\n      logger._print(' Not Found ');\n    } else {\n      bst(item, T[node][1], node);\n    }\n  }\n}\n\nlogger._print('Finding number ' + key);\nbst(key, 5); // node with key 5 is the root",
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
      code: "var index = 0;\n\nfunction inorder ( root , parent ) {\n\tif (root === -1) {\n\t\tlogger._print( 'No more nodes. Backtracking.' )._wait ();\n\t\treturn;\n\t}\n\n\tlogger._print( 'Reached ' + root);\n\ttreeTracer._visit ( root , parent )._wait ();\n\n  logger._print( 'Printing ' + root);\n\ttreeTracer._leave ( root );\n\tarrayTracer._notify ( index++, root )._wait();\n\n\tlogger._print ( ' Going left from ' + root )._wait ();\n\tinorder(T[root][0], root);\n\n\tlogger._print ( ' Going right from ' + root )._wait ();\n\tinorder(T[root][1], root);\n}\n\ninorder ( 5 ); // node with key 5 is the root\nlogger._print( 'Finished' );\n",
    },
    lowest_common_ancestor: {
      code: "function lcaBT (parent, root, a, b) {\n    logger._print ('Beginning new Iteration of lcaBT () with parent: ' + parent + ', current root: ' + root);\n    if (root === -1) {\n        logger._print ('Reached end of path & target node(s) not found')\n        return null;\n    }\n    \n    if (parent !== null) treeTracer._visit (root, parent)._wait ();\n    else treeTracer._visit (root)._wait ();\n    \n    if (root === a || root === b) return root;\n    \n    var left = lcaBT (root, T [root] [0], a, b);\n    var right = lcaBT (root, T [root] [1], a, b);\n    \n    if (left !== null && right !== null) return root;\n    if (left === null && right === null) {\n        treeTracer._leave (root, parent)._wait ();\n    }\n    \n    return (left !== null ? left : right);\n}\n\nvar a = 7, b = 2;\nlogger._print ('Lowest common ancestor of ' + a + ' & ' + b + ' is: ' + lcaBT (null, 5, a, b));",
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
