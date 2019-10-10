Array.prototype.uniq = function() {
  let uniqArray = [];
  this.forEach((ele) => {
    if (!(uniqArray.includes(ele))) {
      uniqArray.push(ele);
    }
  });
  return uniqArray;
};

Array.prototype.twoSum = function() {
  let result = [];
  this.forEach((ele) => {
    for (let i = this.indexOf(ele)+1; i < this.length; i++) {
      if (ele + this[i] === 0) {
        let pair = [this.indexOf(ele), i];
        result.push(pair);
      }
    }
  });
  return result;
};

Array.prototype.transpose = function() {
  let total = this[0].length;
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let subArr = [];
    for (let j = 0; j < this[i].length; j++) {
      subArr.push(this[j][i]);
    }
    result.push(subArr);
  }
  return result;
};