/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid (options, game) {\n  options.vel = Util.randomVec(10);\n  // options.pos = \n  options.radius = 10;\n  options.color = \"gray\";\n\n  MovingObject.call(this, options, game);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({ pos: [500, 300] }, this);\n  this.allObjects();\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++){\n    this.asteroids.push(new Asteroid({pos: this.randomPosition()}, this));\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  const x = Math.floor(Math.random() * (Game.DIM_X + 1));\n  const y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n  return [x, y];\n};\n\nGame.prototype.draw = function(ctx) {\n  // console.log(this.asteroids);\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n  // console.log(this.asteroids);\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n};\n\nGame.prototype.wrap = function(pos){\n  let [x, y] = pos;\n  if (x < 0){\n    x += Game.DIM_X;\n  } else if(x > Game.DIM_X){\n    x -= Game.DIM_X;\n  }\n\n  if (y < 0){\n    y += Game.DIM_Y;\n  }else if (y > Game.DIM_Y){\n    y -= Game.DIM_Y;\n  }\n\n  return [x, y];\n};\n\nGame.prototype.checkCollisions = function () {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    let curr = this.asteroids[i];\n\n    for (let j = i + 1; j < this.asteroids.length; j++) {\n      if(curr.isCollidedWith(this.asteroids[j])) {\n        // window.alert(\"COLLISION\");\n        curr.collideWith(this.asteroids[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function(){\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(ast){\n  let i = this.asteroids.indexOf(ast);\n  this.asteroids = this.asteroids.slice(0, i).concat(this.asteroids.slice(i+1));\n};\n\nGame.prototype.allObjects = function() {\n  this.asteroids.push(this.ship);\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n// const canvasEl = document.getElementById(\"game-canvas\");\n// canvasEl.width = Game.DIM_X;\n// canvasEl.height = Game.DIM_Y;\n// const ctx = canvasEl.getContext(\"2d\");\n\nfunction GameView (ctx) {\n  this.game = new Game();\n  this.drawing = ctx;\n}\n\nGameView.prototype.start = function() {\n  // setInterval(this.game.moveObjects.bind(this.game), 20);\n\n  // setInterval(() => { \n  //   // console.log(this);\n  //   // console.log(this.game);\n  //   this.game.draw(this.drawing);\n  // }, 20);\n\n  const that = this;\n  setInterval(function() {\n    that.game.step();\n    that.game.draw(that.drawing);\n  }, 20);\n};\n\n// function setInterval(callback, interval) {\n//   ////// after interval\n\n//   callback(); // function-style\n// }\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Asteroid = require(\"./asteroid.js\");\n// const Game = require(\"./game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n// const Util = require(\"./utils.js\");\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n\nconst canvasEl = document.getElementById(\"game-canvas\");\ncanvasEl.width = 1000;\ncanvasEl.height = 600;\nconst ctx = canvasEl.getContext(\"2d\");\n\n// const a = new MovingObject([100, 100], [1, 4], 100, \"red\");\n// const mo = new MovingObject({pos: [30, 30], vel: [10, 10], \n//   radius: 5, color: \"#00FF00\"});\n\n// const mo = new Asteroid({pos: [30, 30]});\nconst gameview1 = new GameView(ctx);\n\ndocument.addEventListener(\"DOMContentLoaded\", () => { \n  gameview1.start();\n } );\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options, game) {\n  // debugger;\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  // ctx.strokeStyle = \"green\";\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n  // ctx.fillStyle = \"blue\";\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let x = this.pos[0] - otherObject.pos[0];\n  let y = this.pos[1] - otherObject.pos[1];\n  let z = Math.sqrt(x * x + y * y);\n\n  if (this.radius + otherObject.radius >= z) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nMovingObject.prototype.collideWith = function(otherObj){\n  this.game.remove(this);\n  this.game.remove(otherObj);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship (options, game) {\n  options.vel = [0, 0];\n  options.radius = 10;\n  options.color = \"blue\";\n\n  MovingObject.call(this, options, game);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Function.prototype.inherits = function (parent) {\n//   function Surrogate() { };\n//   Surrogate.prototype = parent.prototype;\n//   this.prototype = new Surrogate();\n//   this.prototype.constructor = this;\n// };\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });