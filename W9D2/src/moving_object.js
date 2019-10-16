function MovingObject (options, game) {
  // debugger;
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let x = this.pos[0] - otherObject.pos[0];
  let y = this.pos[1] - otherObject.pos[1];
  let z = Math.sqrt(x * x + y * y);

  if (this.radius + otherObject.radius >= z) {
    return true;
  } else {
    return false;
  }
};

MovingObject.prototype.collideWith = function(otherObj){
  this.game.remove(this);
  this.game.remove(otherObj);
}

module.exports = MovingObject;