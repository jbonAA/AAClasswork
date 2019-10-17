const Game = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$(() => {
  const game = new Game();
  const rootEl = $('.hanoi');
  new HanoiView(game, rootEl);
});
