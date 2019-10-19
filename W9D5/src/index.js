const DOMNodeCollection = require('./dom_node_collection');

window.$1 = function(selector){
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(selector));
  } else {
    let nodelist = document.querySelectorAll(selector);
    return new DOMNodeCollection(Array.from(nodelist));
  }
};