// Towers of  Hanoi

function TowersHanoi(number_of_disks) {
  this.towers = [[], [], []];

  _.times(number_of_disks, function(idx) {
    this.towers[0].push(idx);
  });
  // for(var ii = 1; ii <= number_of_disks; ii++) {
//     this.towers[0].push(ii);
//   }
}

TowersHanoi.prototype.moveDisk = function(from, to) {
  from -= 1;
  to -= 1;
  var lastElement = this.towers[from].length - 1;
  var fromDisk = this.towers[from][lastElement];

  if (this.towers[to].length === 0) {
    var toDisk = fromDisk + 1;
  } else {
    var lastEl = this.towers[to].length - 1;
    var toDisk = this.towers[to][lastEl];
  }
  // console.log("to disk = " + toDisk);
  if (fromDisk < toDisk) {
    //make the move
    this.towers[from].pop();
    this.towers[to].push(fromDisk);
  } else {
    console.log("this move is not allowed");
  }
};

TowersHanoi.prototype.validMove = function(to, from) {
  //implement this function to dry the makeMove function

}

TowersHanoi.prototype.print = function() {
  console.log(this.towers[0]);
  console.log(this.towers[1]);
  console.log(this.towers[2]);
  console.log("############################")
};

TowersHanoi.prototype.gameOver = function() {
  tOneLength = this.towers[0].length;
  tTwoLength = this.towers[1].length;
  tThreeLength = this.towers[2].length;
  return (tOneLength === 0 && (tTwoLength === 0 || tThreeLength === 0));
};

//* the way to play this game would be

// var game = new TowersHanoi(2);
//
// game.moveDisk(1,2);
// game.moveDisk(1,3);
// game.moveDisk(2,3);
// console.log("By the end we have following disks on the towers");
// console.log(game.towerOne);
// console.log(game.towerTwo);
// console.log(game.towerThree);


// console.log(game.towerOne);
// var game = new TowersHanoi(3);
// game.print();
// game.moveDisk(1,2);
// game.print();
// game.moveDisk(1,3);
// game.print();
// game.moveDisk(2,3);
// game.print();
// game.moveDisk(1,2);
// game.print();
// game.moveDisk(3,1);
// game.print();
// game.moveDisk(3,2);
// game.print();
// game.moveDisk(1,2);
// console.log("By the end we have following disks on the towers");
// game.print();
//game should be over :)
//*/
