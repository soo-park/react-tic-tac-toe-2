export function checkWinner(board, x, y, player) {
  if (
    checkDiagonal(board, x, y, player) ||
    checkHorizontal(board, x, y, player) ||
    checkVertical(board, x, y, player)
  ) {
    console.log("player is being returned");
    return player;
  } else {
    return null;
  }
}

const checkDiagonal = (board, x, y, player) => {
  const len = board.length - 1;
  // same number case
  if (x === y) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] !== player) {
        return false;
      }
    }
  } else if (x + y !== len) {
    return false;
  } else {
    for (let i = 0; i < board.length; i++) {
      if (board[i][len - i] !== player) {
        return false;
      }
    }
  }
  console.log('checkDiagonal is true');
  return true;
};

const checkHorizontal = (board, x, y, player) => {
  for (let i = 0; i < board.length; i++) {
    if (board[x][i] !== player) {
      return false;
    }
  }
  console.log('checkHorizontal is true');
  return true;
};

// vertical ---- y is the same and x changes
const checkVertical = (board, x, y, player) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][y] !== player) {
      return false;
    }
  }
  console.log('checkVertical is true');
  return true;
};
