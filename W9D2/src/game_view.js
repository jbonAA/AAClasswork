const Game = require("./game.js");

// const canvasEl = document.getElementById("game-canvas");
// canvasEl.width = Game.DIM_X;
// canvasEl.height = Game.DIM_Y;
// const ctx = canvasEl.getContext("2d");

function GameView (ctx) {
  this.game = new Game();
  this.drawing = ctx;
}

GameView.prototype.start = function() {
  // setInterval(this.game.moveObjects.bind(this.game), 20);

  // setInterval(() => { 
  //   // console.log(this);
  //   // console.log(this.game);
  //   this.game.draw(this.drawing);
  // }, 20);

  const that = this;
  setInterval(function() {
    that.game.step();
    that.game.draw(that.drawing);
  }, 20);
};

// function setInterval(callback, interval) {
//   ////// after interval

//   callback(); // function-style
// }



module.exports = GameView;