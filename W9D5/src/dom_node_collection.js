class DOMNodeCollection{
  constructor(elements){
    this.elements = elements;
  }

  html(str) {
    if (!str) {
      return this.elements[0].innerHTML;
    }
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = str;
    }
  }

  empty(){
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
  }

  append(ele){
    // debugger
    if (typeof ele === "string") {
      for (let x of this.elements){
        x.innerHTML += ('\n');
        x.innerHTML += ele;
      }
    } else {
      let stuff = ele.outerHTML;
      for (let x of this.elements) {
        x.innerHTML += ('\n');
        x.innerHTML += stuff;
      }
    }
  }

  addClass(classname){
    for (let ele of this.elements){
      ele.className = classname;
    }
  }

  removeClass(classname) {
    for (let ele of this.elements) {
      ele.classList.toggle(classname);
    }
  }

  attr(name, value) {
    // let name = el.attributes;
    if (!value) {
      for (let el of this.elements) {
        if (el.hasAttribute(name)){
          console.log("friend");
          return el.getAttribute(name);
        }
      }
    } else {
      for (let el of this.elements) {
        el.setAttribute(name, value);
      }
    }
  }

  children() {
     let res = [];
    for (let el of this.elements) {
      res = res.concat(Array.from(el.children));
    }

     return new DOMNodeCollection(res);
  }

  parent() {
    let res = [];

    for (let el of this.elements) {
      res.push(el.parentNode);
    }

    return new DOMNodeCollection(res);
  }

  find(selector) {
    let res = [];

    for (let el of this.elements) {
      res = res.concat(el.querySelectorAll(selector));
    }

    return new DOMNodeCollection(res);
  }

  remove(){
    for (let el of this.elements){
      el.remove();
    }
    this.elements = [];
  }
  // 'click', (el) => el.setAttribute('class', 'sdfsl')
  on(event, listener) {
    for (let el of this.elements){
      el.addEventListener(event, listener);
    }
  }
  t2 = document.getElementsByClassName("hello");
  t2.on('click', alert())

  off() {

  }

}




module.exports = DOMNodeCollection;