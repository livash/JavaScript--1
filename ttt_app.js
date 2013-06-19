$(function () {
  var game = new TTT.Game('X', 'O');
  var ui = new TTT.UI(game);
  ui.start();
});

