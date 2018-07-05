export function checkWinner(board, x, y, player) {
  console.log("in checkWinner", board, x, y, player)
  // winning cases
  if (
    checkDiagonal(board, x, y, player) ||
    checkHorizontal(board, x, y, player) ||
    checkVertical(board, x, y, player)
  ) {
    // if won, return player
    return player;
  } else {
    return null;
  }
}

// diagonal --- [0,0] [1,1] [2,2] or [0,2] [1,1] [2,0]
// adding the two numbers will equal to the board length
const checkDiagonal = (board, x, y, player) => {
  const len = board.length - 1;
  if (board[Math.floor(len/2)][Math.floor(len/2)] === player) {
    // if center of the board is the player
    if (x === y) {
      // check all same number cases
      console.log("they are same")
    } else {
      // check all opposite number cases
      console.log("they are opposite")
    }
  }
  console.log('checkDiagonal is true');
  return false;
};

const checkHorizontal = (board, x, y, player) => {
  for (let i = 0; i < board.length; i++) {
    if (board[x][i] !== player) {
      console.log('checkHorizontal is false');
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
      console.log('checkVertical is false');
      return false;
    }
  }
  console.log('checkVertical is true');
  return true;
};