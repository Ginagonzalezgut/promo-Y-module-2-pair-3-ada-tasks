"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

const list = document.querySelector(".js-list");
const secondButton = document.querySelector(".Secondbutton");

const rendertasks = () => {
  list.innerHTML = "";

  for (const task of tasks) {
    if (task.completed === true) {
      list.innerHTML += `<li class="checked"><input class="js-checkbox" checked type="checkbox" id="${task.id}" name="" />${task.name}
      </li>`;
    } else {
      list.innerHTML += `<li><input class="js-checkbox" type="checkbox" id="${task.id}"  name="" />${task.name}
      </li>`;
    }
  }

  const checkboxes = document.querySelectorAll(".js-checkbox");

  for (const checkbox of checkboxes) {
    checkbox.addEventListener("click", () => {
      const checboxId = parseInt(checkbox.id);
      const taskToCheck = tasks.find((task) => {
        return task.id === checboxId;
      });
      taskToCheck.completed = !taskToCheck.completed;
      rendertasks();
    });
  }
};

rendertasks();
