let showBtn = document.getElementById("show");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");

showBtn.addEventListener("click", () => {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.top = "50%";
});

closeBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.top = "40%";
});
