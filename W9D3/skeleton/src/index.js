const View = require('./ttt-view.js');
const Game = require('./game.js');

  $(() => {
    const g = new Game();
    let $el = $('.ttt');
    const v = new View(g, $el);

  });
