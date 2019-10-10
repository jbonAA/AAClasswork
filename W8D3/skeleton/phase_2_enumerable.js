Array.prototype.myEach = function(callback, ele){
  for (let i = 0; i < this.length; i ++) {
    callback(this[i]);

  }
};

//(ele => callback(ele));

const cb1 = function timesTwo(num) {
  return num * 2;
};

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach((el) => {
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function(cb, initialValue) {
  let result = this;
  let sum = 0;
  if (initialValue || initialValue === 0) {
    sum = initialValue;
  }
  if (!initialValue){
    result = this.slice(1);
    sum = this[0];
  }
  
  
  result.myEach((el) => {
    sum = cb(sum, el);
  });
  return sum;
};