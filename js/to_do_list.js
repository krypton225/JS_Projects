// All vars needed.
let taskIDInput = document.getElementById("taskIDInput"),
  btnSubmit = document.getElementById("btnSubmit"),
  divTasks = document.getElementById("divTasks");

// * ==========================================================

window.addEventListener("load", () => {
  taskIDInput.focus();
});

// * ==========================================================

const setItemsIntoDiv = (myValueText) => {
  let createDivItem = document.createElement("div");
  createDivItem.classList.add("to-do__tasks__item");

  let createParagraphItem = document.createElement("p");
  createParagraphItem.classList.add("to-do__tasks__item__desc");

  let itemText = document.createTextNode(myValueText);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("to-do__tasks__item__button");
  let delTextNode = document.createTextNode("Delete");

  deleteButton.appendChild(delTextNode);

  createParagraphItem.appendChild(itemText);

  createDivItem.appendChild(createParagraphItem);
  createDivItem.appendChild(deleteButton);

  divTasks.appendChild(createDivItem);
};

// * ==========================================================

// * When click enter into the add task button.
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // * Create the div and set text node into the div.
  if (taskIDInput.value !== "") {
    divTasks.style.padding = "24px";
    setItemsIntoDiv(taskIDInput.value);
  } else {
    alert("Enter the task name!");
  }

  // * Set value of the input after entering the value to zero.
  taskIDInput.value = "";
});

// * ==========================================================

// * When click into the delete button to delete the one task.
document.addEventListener("DOMNodeInserted", () => {
  let getAllButtons = document.querySelectorAll(".to-do__tasks__item__button");

  getAllButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.classList.add("hide");
      taskIDInput.focus();
    });
  });
});
