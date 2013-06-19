HT.UI = (function() {
  function UI(game) {
    this.game = game;
  }

  UI.prototype.start = function() {
    this.initialize();

    var that = this;
    $('button').on('click', function () {
      var input_array = $('#command').val().split(" ");
      console.log("input array" + input_array);
      if(that.game.moveDisk(input_array[0], input_array[1])) {
        that.moveDisk(input_array);
      }
    });
  }

  UI.prototype.moveDisk = function(array) {
    // var string = '#tower'+ --array[1] +' div';
//     console.log(string);
    $('#tower'+ --array[1] +' div').prepend($('#tower' + --array[0] + ' div p:first'));

  }

  UI.prototype.initialize = function() {
    var that = this;
    _.each(that.game.towers, function(row, idx) {
      //console.log(idx);
      var tower = $('#tower' + idx);
      var disks = $('<div>');
      disks.css('margin-left', 75);
      _.each(row, function(el, i) {
        var disk = $('<p>').text(el);
        disks.append(disk);
      });
      tower.append(disks);
    });
  }

  return UI;
})();