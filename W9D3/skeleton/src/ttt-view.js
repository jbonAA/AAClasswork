class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this
    $('li').on('click', function(e) {
      let $li = e.currentTarget;
      // $li.addClass('green');
  
      
    
      that.makeMove($li);
    });
  }
  
  makeMove($square) {
    // debugger

    const positions = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [1, 0],
      4: [1, 1],
      5: [1, 2],
      6: [2, 0],
      7: [2, 1],
      8: [2, 2]
    };

    this.game.playMove(positions[$square.dataset.pos]);

    if (this.game.currentPlayer === 'x') {
      $($square).addClass('x');
      $($square).text('👨🏻');
    } else {
      $($square).addClass('o');
      $($square).text('👩🏻');
    }

    if (this.game.board.winner()) {
      alert(`${this.game.currentPlayer} wins!`);
    }
    
  }

  setupBoard() {
    $('<ul>')
      .appendTo(this.$el);

    for (let i = 0; i < 9; i++){
      $(`<li data-pos = '${i}'>`)
        // $li.data('pos', i)
        .appendTo($('ul'));
    }
  }
}

module.exports = View;
