// Tic-Tac-Toe game
_ = require('underscore');

function TicTacToe(mark1, mark2) {
  this.mark1 = mark1;
  this.mark2 = mark2;
  this.emptyMark = '_';
  this.board = [[], [], []];
  this.initializeBoard(this.emptyMark);
  this.winCombs = {
    1: [0, 1, 2],
    2: [3, 4, 5],
    3: [6, 7, 8],

    4: [0, 3, 6],
    5: [1, 4, 7],
    6: [2, 5, 8],

    7: [0, 4, 8],
    8: [2, 4, 6]
  };
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
    return this.board[row][col] = mark;
  } else {
    console.log("Move [" + row + ", " + col + "] is invalid");
    return false;
  }
}

TicTacToe.prototype.isPositionEmpty = function(row, col) {
  var mark = this.board[row][col];
  return (mark === this.emptyMark);
}

TicTacToe.prototype.print = function() {
  console.log("Board");
  console.log(this.board[0]);
  console.log(this.board[1]);
  console.log(this.board[2]);
}

TicTacToe.prototype.isGameOver = function() {
  var markOnePositions = this.getMarkPositions(this.mark1);
  var markTwoPositions = this.getMarkPositions(this.mark2);
  for (var seq in this.winCombs) {
    if (_.isEqual(_.intersection(markOnePositions, this.winCombs[seq]), this.winCombs[seq])) {
      return true;
    } else if (_.isEqual(_.intersection(markTwoPositions, this.winCombs[seq]), this.winCombs[seq])) {
      return true;
    }
  }
  return false;
}

TicTacToe.prototype.getMarkPositions = function(mark) {
  var result = [];
  for(var ii = 0; ii < this.board.length; ii++) {
    for(var jj = 0; jj < this.board.length; jj ++) {
      if (this.board[ii][jj] === mark) {
        result.push(jj + ii * 3); //convert from [ii][jj] to single index
      }
    }
  }
  return result;
}

// testing here
var game = new TicTacToe('x', 'o');
//console.log(game.board);
game.print();
game.makeMove(0, 0, game.mark1);
console.log(game.isGameOver());
game.makeMove(1, 1, game.mark1);
game.print();
console.log(game.isGameOver());
game.makeMove(2, 2, game.mark1);
game.print();
console.log(game.isGameOver());