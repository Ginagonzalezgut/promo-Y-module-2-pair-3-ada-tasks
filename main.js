"use strict";

// const tasks = [
//   { name: "Recoger setas en el campo", completed: true, id: 1 },
//   { name: "Comprar pilas", completed: true, id: 2 },
//   { name: "Poner una lavadora de blancos", completed: true, id: 3 },
//   {
//     name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
//     completed: false,
//     id: 4,
//   },
// ];

let tasks = [];

let filteredTasks = null;

const list = document.querySelector(".js-list");
const secondButton = document.querySelector(".Secondbutton");
const SearchInput = document.querySelector(".js-input-search");
const buttonAddTask = document.querySelector(".js-button-task");
const inputTask = document.querySelector(".js-input-new-task");

const rendertasks = () => {
  list.innerHTML = "";
  for (const task of filteredTasks || tasks) {
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

secondButton.addEventListener("click", (event) => {
  event.preventDefault();
  filteredTasks = tasks.filter((searchTask) => {
    return searchTask.name.includes(SearchInput.value);
  });

  rendertasks();
});

rendertasks();

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if (tasksLocalStorage) {
  // si (existe el listado de tareas en Local Storage)
  // pinta la lista de tareas almacenadas en tasksLocalStorage
  tasks = tasksLocalStorage
  rendertasks();
} else {
  fetch(" https://dev.adalab.es/api/todo")
    .then((response) => response.json())
    .then((data) => {
      const dataResults = data.results;
      tasks = dataResults;
      rendertasks();
      localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    .catch((error) => {
      console.error(error);
    });
}

const handleNewTask = (event) => {
  event.preventDefault();

  const newTaskName = inputTask.value;

  const newTask = {
    name: newTaskName,
    completed: false,
  };

  tasks.push(newTask);
  rendertasks();
};

buttonAddTask.addEventListener("click", handleNewTask);
