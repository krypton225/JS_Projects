let header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky-nav", window.scrollY > 50);
});

let barsIcon = document.getElementById("barsIcon");
barsIcon.addEventListener("click", () => {
  barsIcon.firstElementChild.classList.toggle("fa-times");
  header.classList.toggle("header-padding");
  document.querySelector(".header__list").classList.toggle("show-list");
});
