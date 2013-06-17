// Tic-Tac-Toe game

function TicTacToe(mark1, mark2) {
  this.mark1 = mark1;
  this.mark2 = mark2;
  this.emptyMark = '_';
  this.board = [[], [], []];
  this.initializeBoard(this.emptyMark);
};

TicTacToe.prototype.initializeBoard = function(emptyMark) {
  for(var ii = 0; ii < this.board.length; ii++) {
    for (var jj = 0; jj < this.board.length; jj++) {
      this.board[ii][jj] = emptyMark;
    }
  }
}

TicTacToe.prototype.makeMove = function(row, col, mark) {
  if (this.isPositionEmpty(row, col)) {
    this.board[row][col] = mark;
  } else {
    console.log("Move [" + row + ", " + col + "] is invalid");
  }
}

TicTacToe.prototype.isPositionEmpty = function(row, col) {
  var mark = this.board[row][col];
  if (mark === this.emptyMark) {
    return true;
  } else {
    return false;
  }
}

TicTacToe.prototype.print = function() {
  console.log("Board");
  console.log(this.board[0]);
  console.log(this.board[1]);
  console.log(this.board[2]);
}

TicTacToe.prototype.isGameOver = function() {
  var winCombinations = this.winCombinations();

}

TicTacToe.prototype.winCombinations = function() {

}

// testing here
var game = new TicTacToe('x', 'o');
//console.log(game.board);
game.print();
game.makeMove(0, 0, game.mark1);
game.print();
// game.makeMove(0, 0, game.mark2);
// game.print();