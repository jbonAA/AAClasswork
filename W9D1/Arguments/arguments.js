function Sum() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

function Sum2(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

Function.prototype.myBind = function(context) {

  let that = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function (...callArgs) {
    // console.log(args);
    // console.log(context);

   return that.apply(context, bindArgs.concat(callArgs));
  };


}

Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...callArgs) => this.apply(context, bindArgs.concat(callArgs)); 
};

Function.prototype.myBind3 = function(context) {
  const that = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function() {
    const callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind4 = function(context, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};



const boundFn = markov.says(pavlov, "meow"); // one bind time arg
boundFn("Kush"); // one call time arg

// const boundFn = markov.says(pavlov)
// boundFn("meow", "Kush"); // only CALL TIME ARGS

// const boundFn = markov.says(pavlov, "meow", "Kush") // only BIND ARGS
// boundFn();

// const newFunction = oldFunction.bind(context, arg1, arg2); 
// boundFn();



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");


function curriedSum(numArgs){
  let numbers = [];
  let num = numArgs;
  return function _curriedSum(singleNum) {
    numbers.push(singleNum);
    let sum = 0;
    if (numbers.length === num){
      for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
      }
      return sum;
    }else{
      return _curriedSum;
    }
  }
}


Function.prototype.curry = function(numArgs) {
   let numbers = [];
  //  let num = numArgs;
   const that = this;
   return function _curry(singleArg){ 
     numbers.push(singleArg);
     if (numbers.length === numArgs){
       return that.call(that, ...numbers);
       
     }else {return _curry;}
   }


}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
 

const collector = sumThree.curry(3); 
// sumThree(1);
// collector(2);

function curry(numArgs, context, callback) {
  // 115: return callback.call(context, ...numbers);
}