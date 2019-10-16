const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Ship (options, game) {
  options.vel = [0, 0];
  options.radius = 10;
  options.color = "blue";

  MovingObject.call(this, options, game);
}

Util.inherits(Ship, MovingObject);

module.exports = Ship;