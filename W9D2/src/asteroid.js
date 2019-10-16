const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Asteroid (options, game) {
  options.vel = Util.randomVec(10);
  // options.pos = 
  options.radius = 10;
  options.color = "gray";

  MovingObject.call(this, options, game);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
