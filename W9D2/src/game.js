const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({ pos: [500, 300] }, this);
  this.allObjects();
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroid({pos: this.randomPosition()}, this));
  }
};

Game.prototype.randomPosition = function() {
  const x = Math.floor(Math.random() * (Game.DIM_X + 1));
  const y = Math.floor(Math.random() * (Game.DIM_Y + 1));
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  // console.log(this.asteroids);
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  // console.log(this.asteroids);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

Game.prototype.wrap = function(pos){
  let [x, y] = pos;
  if (x < 0){
    x += Game.DIM_X;
  } else if(x > Game.DIM_X){
    x -= Game.DIM_X;
  }

  if (y < 0){
    y += Game.DIM_Y;
  }else if (y > Game.DIM_Y){
    y -= Game.DIM_Y;
  }

  return [x, y];
};

Game.prototype.checkCollisions = function () {
  for (let i = 0; i < this.asteroids.length; i++) {
    let curr = this.asteroids[i];

    for (let j = i + 1; j < this.asteroids.length; j++) {
      if(curr.isCollidedWith(this.asteroids[j])) {
        // window.alert("COLLISION");
        curr.collideWith(this.asteroids[j]);
      }
    }
  }
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(ast){
  let i = this.asteroids.indexOf(ast);
  this.asteroids = this.asteroids.slice(0, i).concat(this.asteroids.slice(i+1));
};

Game.prototype.allObjects = function() {
  this.asteroids.push(this.ship);
};

module.exports = Game;
