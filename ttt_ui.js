TTT.UI = function(game) {
  this.game = game
}

TTT.UI.prototype.start = function() {
  var game = this.game;
  $('.element').on('click', function() {
    var element = $(this);

    element.append("<span class='mark'>" + game.currentMark + "</span>");

    var row = Math.floor(this.id / 3);
    var col = this.id - row * 3;
    game.makeMove(row, col, game.currentMark);

    if (game.isGameOver()) {
      var p = $('<p>').text("You WIN!");
      $('body').append(p);

      var b = $('<button>').text("Start new game");
      b.on('click', function() {
        game = new TicTacToe('O', 'X');
        $(".element").text("");
        b.remove();
        p.remove();
      });

      $("body").append(b);
    }
  });
}