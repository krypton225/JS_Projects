let myInput = document.getElementById("input");
let items = document.querySelectorAll(".item");

console.log(items);

myInput.addEventListener("keyup", () => {
  items.forEach((el) => {
    if (el.innerHTML.toLowerCase().indexOf(myInput.value.toLowerCase()) > -1) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
});
