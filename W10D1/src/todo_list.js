const todos = [];
const list = document.getElementsByClassName("todos")[0];
const form = document.getElementsByClassName("add-todo-form")[0];

function addToDo(form) {
  form.addEventListener("submit", (e) => {
    let value = document.getElementsByName("add-todo")[0].value
    var li = document.createElement("li");
    
    li.innerHTML = value;
    // li.type = "checkbox"
    todos.push(li);
    debugger
    console.log(value);
  })
populateList(todos, list);
}

function populateList(todos, list) {
  todos.forEach((el) => {
    let x = document.createElement(el);
    list.append(x)
  })
}

export const addEl = addToDo(form, list);