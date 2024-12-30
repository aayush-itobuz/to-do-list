const inputTask = document.getElementById("task-input");
const inputBtn = document.getElementById("task-btn");

const arr = [];

inputBtn.addEventListener("click", function () {

  const task = inputTask.value;
  arr.push(task);
  console.log(arr);

  const p = document.createElement('p');
  const note = document.createTextNode(task);
  p.appendChild(note);
  document.querySelector('#tasks').appendChild(p);
}
)