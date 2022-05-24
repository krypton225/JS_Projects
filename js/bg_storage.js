window.addEventListener("load", () => {
  if (localStorage.getItem("bgColor") !== null) {
    document.body.style.backgroundColor = localStorage.getItem("bgColor");
  } else {
    document.body.style.backgroundColor = "#264653";
  }
});

let allListItems = document.querySelectorAll(".content__colors li");

let myAllColors = [];

allListItems.forEach((item) => {
  myAllColors.push(item.dataset.color);

  item.addEventListener("click", () => {
    document.body.style.backgroundColor = item.dataset.color;

    localStorage.setItem("bgColor", item.dataset.color);
  });
});

console.log(myAllColors);

console.log(localStorage.getItem("bgColor"));
