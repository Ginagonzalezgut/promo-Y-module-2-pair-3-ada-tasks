const list = document.querySelector(".js-list2");

const liElement = document.createElement("li");
liElement.setAttribute("class", "checked");
list.appendChild(liElement);
console.log(list);
const input = document.createElement("input");
liElement.appendChild(input);
input.setAttribute("class", "js-checkbox");
console.log(list);
