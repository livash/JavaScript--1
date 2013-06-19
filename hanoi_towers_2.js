// Towers of  Hanoi

HT = {};

HT.Game = (function() {

  function TowersHanoi(number_of_disks) {
    this.towers = [[], [], []];
    var that = this;
    _.times(number_of_disks, function(idx) {
      that.towers[0].push(idx + 1);
    });
  }

  TowersHanoi.prototype.moveDisk = function(from, to) {
    from -= 1;
    to -= 1;

    var fromDisk = this.towers[from][0];
    if (this.towers[to].length === 0) {
      var toDisk = fromDisk + 1;
    } else {
      var toDisk = this.towers[to][0];
    }

    if (fromDisk < toDisk) {
      //make the move
      this.towers[from].shift();
      this.towers[to].unshift(fromDisk);
      return true;
    } else {
      console.log("this move is not allowed");
      return false;
    }
  };

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

  return TowersHanoi;

})();


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
