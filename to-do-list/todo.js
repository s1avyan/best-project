const refs = {
  formFromInsert: document.querySelector(".form"),
  inputForInsert: document.querySelector(".input"),
  listForAdd: document.querySelector(".list"),
  newLiTask: document.querySelectorAll("li"),
};
let list = JSON.parse(localStorage.getItem("list") || "[]");

list.forEach((task) => {
  toDoList(task);
});

refs.formFromInsert.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = [];

  newTask = refs.inputForInsert.value;

  if (task) {
    /* эту операцию есть смысл выносить в отдельную функцию */
    newTask = task.name;
  }

  const newLiTask = document.createElement("li");

  newLiTask.innerText = newTask;

  if (task && task.checked) {
    /* эту операцию есть смысл выносить в отдельную функцию */
    newLiTask.classList.add("checked");
  }

  newLiTask.insertAdjacentHTML(
    "beforeend",
    `<i class="fa-solid fa-circle-check"></i>`
  );
  newLiTask.insertAdjacentHTML(
    "beforeend",
    `<i class="fa-solid fa-trash"></i>`
  );

  if (refs.inputForInsert.value || task) {
    refs.listForAdd.appendChild(newLiTask);
  }

  refs.inputForInsert.value = "";

  refs.newLiTask = document.querySelectorAll(".list li");

  refs.newLiTask.forEach((li) => {
    li.addEventListener(
      "click",
      onClick /* тут можно стрелочную функцию присобачить? */
    );
  });

  updateLocalStorage();
}
// function toDoList(task) {
//   if (task) {
//     refs.listForAdd.insertAdjacentHTML("beforeend", `<li>${task.name}</li>`);
//   }
//   refs.listForAdd.insertAdjacentHTML(
//     "beforeend",
//     `<li>${refs.inputForInsert.value}</li>`
//   );
//   updateLocalStorage();
// }

function updateLocalStorage() {
  const taskList = document.querySelectorAll("li");
  let list = [];
  taskList.forEach((tasks) => {
    list.push({
      name: tasks.innerText,
      checked: tasks.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
function onClick(e) {
  if (e.target.classList.contains("fa-trash")) {
    /* после удаления надо отписываться от события? или не стало элемента не стало и события? */
    e.target.parentElement.remove();
    updateLocalStorage();
  }
  if (e.target.classList.contains("fa-circle-check")) {
    e.target.parentElement.classList.toggle("checked");
    updateLocalStorage();
  }
}

function loadSaveList(task, newLiTask, newTask) {
  if (task) {
    newTask = task.name;
  }
  if (task && task.checked) {
    newLiTask.classList.add("checked");
  }
}
