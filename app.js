const inputTask = document.getElementById("task-input");
const inputBtn = document.getElementById("task-btn");
const taskList = document.querySelector('#tasks');
const allTask = document.querySelector('.all-task');
const activeTask = document.querySelector('.active-task');
const completedTask = document.querySelector('.completed-task');
const clearCompletedTask = document.querySelector('.clear-completed-task');

let arr = [];

const isDuplicate = (task) => {
  const present = arr.find((obj) => obj.title.toLowerCase() === task.toLowerCase());
  return present != undefined;
}

const addTask = () => {
  const task = inputTask.value.trim();
  if (task === '') {
    alert("Please add a valid task!");
    return;
  }
  if(isDuplicate(task)){
    alert("Task already in the list!");
    inputTask.value = '';
    return;
  }
  
  const obj = {};
    obj.title = task;
    obj.completed = "false";

    arr.push(obj);
    inputTask.value = '';
}

const printTask = (condition = null) => {
  taskList.innerHTML = '';

  const tasksToPrint = condition ? arr.filter(condition) : arr;

  tasksToPrint.forEach((taskObj, index) => {
    const div = document.createElement('div');
    div.classList.add("task");
    div.setAttribute("task-index", index);

    if (taskObj.completed === "true") {
      div.classList.add("completed");
    }

    const taskText = document.createElement('span');
    taskText.textContent = taskObj.title;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add("button-container");

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '\u2713';
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => toggleComplete(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-btn");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    div.appendChild(taskText);
    div.appendChild(buttonContainer);
    taskList.appendChild(div);

  })
}

const deleteTask = (index) => {
  arr.splice(index, 1);
  printTask();
}

const toggleComplete = (index) => {
  arr[index].completed = arr[index].completed === "false" ? "true" : "false";
  printTask();
}

inputBtn.addEventListener("click", () => {
  addTask();
  printTask();
})

allTask.addEventListener('click', () => {
  printTask();
})

activeTask.addEventListener("click", () => {
  printTask(task => task.completed === "false");
})

completedTask.addEventListener("click", () => {
  printTask(task => task.completed === "true");
})

clearCompletedTask.addEventListener('click', () => {
  arr = arr.filter(task => task.completed === "false");
  printTask();
})