let myInput = document.getElementById("myInput"),
  text = document.getElementById("text");

window.addEventListener("load", () => {
  myInput.focus();
  text.style.border = "none";
});

myInput.addEventListener("input", () => {
  text.textContent = myInput.value;

  if (myInput.value === "") {
    text.style.border = "none";
  } else {
    text.style.borderRight = "2px solid #fff";
  }
});
