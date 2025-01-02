

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
    const p = document.createElement('p');
    const note = document.createTextNode(arr[i].title);

    const div = document.createElement('div');
    const btn = document.createElement('btn');
    btn.classList.add("remove-btn");
    btn.innerText = "X";
    btn.style.color = "red";
    p.appendChild(note);
    taskList.appendChild(p);
    taskList.appendChild(btn);

    // p.appendChild(note);
    // taskList.appendChild(p);
  }
}

inputBtn.addEventListener("click", function () {
  addTask();
  printTask();
});