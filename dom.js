const list2 = document.querySelector(".js-list2");

const liElement = document.createElement("li");
liElement.setAttribute("class", "checked");
list2.appendChild(liElement);
console.log(list);
const input = document.createElement("input");
liElement.appendChild(input);
input.setAttribute("class", "js-checkbox");
input.setAttribute("type", "checkbox");
console.log(list);
