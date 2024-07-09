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
const SearchInput = document.querySelector(".search");

function handleCheck(event) {
  event.target.id; 
}

const rendertasks = (filteredTasks) => {
  list.innerHTML = "";
  for (const task of filteredTasks || tasks) {
    if (task.completed === true) {
      list.innerHTML += `<li class="task${task.id} checked"><input checked type="checkbox" id="${task.id}" name="" />${task.name}
      </li>`;
    } else {
      list.innerHTML += `<li><input type="checkbox" id="${task.id}" name="" />${task.name}
      </li>`;
    }
  }

  const check = document.querySelectorAll('[type="checkbox"]');
  for (const checkbox of check) {
    checkbox.addEventListener("input", handleCheck);
  }
};

secondButton.addEventListener("click", (event) => {
  event.preventDefault();
  const filteredTasks = tasks.filter((searchTask) => {
    return searchTask.name.includes(SearchInput.value);
  });

  rendertasks(filteredTasks);
});

rendertasks();
