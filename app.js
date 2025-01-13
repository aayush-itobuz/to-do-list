const inputTask = document.getElementById("task-input");
const inputBtn = document.getElementById("task-btn");
const taskList = document.querySelector('#tasks');

const arr = [];

const addTask = () => {
  const task = inputTask.value.trim();
  if (task != '') {
    const obj = {};
    obj.title = task;
    obj.completed = "false";

    arr.push(obj);

    console.log(arr);
  }
  else {
    alert("Please add a valid task!");
  }
}

const printTask = () => {
  taskList.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const note = document.createTextNode(arr[i].title);
    const div = document.createElement('div');
    const deleteBtn = document.createElement("btn");

    div.classList.add("task");
    deleteBtn.classList.add("remove-btn");
    deleteBtn.innerText = "X";

    div.appendChild(note);
    div.appendChild(deleteBtn);
    taskList.appendChild(div);
  }
}

const deleteTask = () => {

}

inputBtn.addEventListener("click", function () {
  addTask();
  printTask();
});

deleteBtn.addEventListener("click", function () {
  deleteTask();
});

