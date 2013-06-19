TTT.UI = (function() {
  function UI(game) {
    this.game = game;
  }

  UI.prototype.start = function() {
    var that = this;
    $('.element').on('click', function() {
      var element = $(this);
      var row = Math.floor(this.id / 3);
      var col = this.id - row * 3;

      if(that.game.makeMove(row, col, that.game.currentMark)) {
        element.append("<span class='mark'>" + that.game.currentMark + "</span>");

        if (that.game.isGameOver()) {
          that.displayWinner();
        }
      };
    });
  };

  UI.prototype.displayWinner = function() {
    var that = this;
    var p = $('<p>').text("You WIN!");
    $('body').append(p);

    var b = $('<button>').text("Start new game");
    b.on('click', function() {
      that.game = new TTT.Game('O', 'X');
      $(".element").text("");
      b.remove();
      p.remove();
    });

    $("body").append(b);
  };

  return UI;

})();
