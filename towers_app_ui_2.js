HT.UI = (function() {
  function UI(game) {
    this.game = game;
  }

  UI.prototype.start = function() {
    this.initialize();

    var that = this;
    var input_array = [];
    $('.tower').on('click', function () {
      //var input_array = $('#command').val().split(" ");
      //console.log("input array" + input_array);
      //
      // first click

      if(input_array.length === 0){
        var id = this.id.replace('tower', '');
        input_array.push(1 + parseFloat(id));
        console.log("first click       " + input_array);
      } else { //second click
        console.log("Second click -------" + input_array);
        var id = this.id.replace('tower', '');
        input_array.push(1 + parseFloat(id));

        if(that.game.moveDisk(input_array[0], input_array[1])) {
          that.moveDisk(input_array);
        }
        input_array = [];
      }


    });
  }

  UI.prototype.moveDisk = function(array) {
    // var string = '#tower'+ --array[1] +' div';
//     console.log(string);
    $('#tower'+ --array[1] +' .stack').prepend($('#tower' + --array[0] + ' .stack .disk:first'));
  }

  UI.COLORS = ['blue','green','red','orange','cyan'];

  UI.prototype.widths = function(){
    return _.range(30, 100, (100-30)/this.game.towers.length);
  };

  UI.prototype.initialize = function() {

    var that = this;
    _.each(that.game.towers, function(row, idx) {
console.log("I'm here ");
      var tower = $('#tower' + idx);
      var disks = $('<div>');
      disks.addClass('stack');
      _.each(row, function(el, i) {
        var disk = $('<div>');
        //disk.draggable();
        //colors, sizes and places the disks
        disk.css({'width': that.widths()[i] + '%',
                  'background-color': UI.COLORS[i],
                  'margin-left': 100 - that.widths()[i],
                  'height' : '40px'
                });
                disk.addClass('disk');
        disks.append(disk);
      });
      tower.append(disks);
      tower.children().first().children().first().draggable();
    });
  }

  return UI;
})();