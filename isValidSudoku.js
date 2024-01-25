function isValidSudoku(board) {
  function hasDuplicates(nums) {
    const numSet = new Set();
    for (const num of nums) {
      if (num !== ".") {
        if (numSet.has(num)) {
          return true;
        }
        numSet.add(num);
      }
    }

    return false;
  }

  // Check rows
  for (const row of board) {
    if (hasDuplicates(row)) {
      return false;
    }
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
    const column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (hasDuplicates(column)) {
      return false;
    }
  }

  // Check sub-boxes
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {
      const subBox = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          subBox.push(board[rowStart + i][colStart + j]);
        }
      }
      if (hasDuplicates(subBox)) {
        return false;
      }
    }
  }

  return true;
}

// Example Sudoku board (partially filled)
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board)); // Output: true
