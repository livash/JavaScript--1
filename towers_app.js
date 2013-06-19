$(function() {
  var game = new HT.Game(3);
  var ui = new HT.UI(game);
  ui.start();
});





// $(document).ready(function() {
//   var game = new TowersHanoi(3);
//   _.each(game.towers, function(element, idx) {
//     console.log(idx);
//     var tower = $('#tower' + idx);
//     var disks = $('<div>');
//     _.each(element, function(el, i) {
//       var disk = $('<p>').text(el);
//       disks.append(disk);
//     });
//     tower.append(disks);
//   });
//
//
// });



