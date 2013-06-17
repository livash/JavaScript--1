// Towers of  Hanoi

function towersHanoi(number_of_disks) {
  this.towerOne = new Array();
  this.towerTwo = new Array();
  this.towerThree = new Array();

  //put disks onto the first tower
  for(var ii = number_of_disks; ii > 0; ii--) {
    this.towerOne.push(ii);
  }
}

towersHanoi.prototype.moveDisk = function(tower_from, tower_to) {
  // console.log("tower one" + this.towerOne);
  switch(tower_from) {
  case 1:
    var fromTower = this.towerOne;
    break;
  case 2:
    var fromTower = this.towerTwo;
    break;
  case 3:
    var fromTower = this.towerThree;
  };

  switch(tower_to) {
  case 1:
    var toTower = this.towerOne;
    break;
  case 2:
    var toTower = this.towerTwo;
    break;
  case 3:
    var toTower = this.towerThree;
  };

  var fromDisk = fromTower[fromTower.length - 1];

  if (toTower.length === 0) {
    var toDisk = fromDisk + 1;
  } else {
    var toDisk = toTower[toTower.length - 1];
  }
  // console.log("to disk = " + toDisk);
  if (fromDisk < toDisk) {
    //make the move
    fromTower.pop();
    toTower.push(fromDisk);

  }
  this.print();
};

towersHanoi.prototype.print = function() {
  console.log(this.towerOne);
  console.log(this.towerTwo);
  console.log(this.towerThree);
  console.log("############################")
};

towersHanoi.prototype.gameOver = function() {
  tOneLength = this.towerOne.length;
  tTwoLength = this.towerTwo.length;
  tThreeLength = this.towerThree.length;
  if (tOneLength === 0 && (tTwoLength === 0 || tThreeLength === 0)) {
    return true;
  } else {
    return false;
  }
};

//* the way to play this game would be

// var game = new towersHanoi(2);
//
// game.moveDisk(1,2);
// game.moveDisk(1,3);
// game.moveDisk(2,3);
// console.log("By the end we have following disks on the towers");
// console.log(game.towerOne);
// console.log(game.towerTwo);
// console.log(game.towerThree);


// console.log(game.towerOne);
var game = new towersHanoi(3);
game.print();
game.moveDisk(1,2);
game.moveDisk(1,3);
game.moveDisk(2,3);
game.moveDisk(1,2);
game.moveDisk(3,1);
game.moveDisk(3,2);
game.moveDisk(1,2);
console.log("By the end we have following disks on the towers");
game.print();
//game should be over :)
//*/
