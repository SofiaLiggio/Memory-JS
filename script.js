// const btnPlus = document.getElementById("plus");
// const btnMinus = document.querySelector("#minus");
// const btnNumber = document.getElementById("btn");

// btnPlus.addEventListener("click", function () {
//   btnNumber.textContent++;
// });

// btnMinus.addEventListener("click", function () {
//   btnNumber.textContent--;
// });

const listToWrite = document.getElementById("ordered-list");
const inputField = document.getElementById("input-field");
const btnEnter = document.getElementById("btn-star");
const tasks = [];

btnEnter.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("Add a task! 😜");
  } else {
    const task = inputField.value;
    tasks.push(task);

    const li = document.createElement("li");
    li.textContent = task;
    listToWrite.appendChild(li);

    inputField.textContent = "";
  }
});
