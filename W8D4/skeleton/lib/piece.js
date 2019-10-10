/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  let color = this.color;
  if (color === "white"){
    this.color = "black";
  } else{
    this.color = "white";
  }

};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
  let color = this.color;
  if (color === "white") {
    return 'W';
  } else {
    return 'B';
  }
};

module.exports = Piece;
