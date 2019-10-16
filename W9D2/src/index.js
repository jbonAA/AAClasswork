// const Asteroid = require("./asteroid.js");
// const Game = require("./game.js");
const GameView = require("./game_view.js")
// const Util = require("./utils.js");

// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 1000;
canvasEl.height = 600;
const ctx = canvasEl.getContext("2d");

// const a = new MovingObject([100, 100], [1, 4], 100, "red");
// const mo = new MovingObject({pos: [30, 30], vel: [10, 10], 
//   radius: 5, color: "#00FF00"});

// const mo = new Asteroid({pos: [30, 30]});
const gameview1 = new GameView(ctx);

document.addEventListener("DOMContentLoaded", () => { 
  gameview1.start();
 } );

