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
const secondButton = document.querySelector('.Secondbutton')


const rendertasks = () => {
  for (const task of tasks) {
    if (task.completed === true) {
      list.innerHTML += `<li class="checked"><input checked type="checkbox" id="${task.id}" name="" />${task.name}
      </li>`;
    } else {
      list.innerHTML += `<li><input type="checkbox" id="${task.id}"  name="" />${task.name}
      </li>`;
    }
  }
};


function handleClick(){
  rendertasks.classList.remove(checkbox)
}

secondButton.addEventListener('click', handleClick)


rendertasks();
