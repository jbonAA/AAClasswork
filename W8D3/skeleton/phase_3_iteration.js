Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let val = this[i];
      if (this[i + 1] < val) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }

    }

  }
  return this;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i = 0; i < this.length-1; i++) {
    let currentSubtring = this[i];
    result.push(currentSubtring);
    for (let j = i+1; j < this.length; j++) {
      currentSubtring = this.slice(i, j+1);
      result.push(currentSubtring);
    }
  }
  result.push(this[this.length - 1])
  return result;
};