let cursor = document.getElementById("cursor");
let myNavLinks = document.querySelectorAll(".header__nav__list__item");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});

myNavLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("bg-change");
    cursor.classList.add("scale-2");
    link.classList.add("white-hover");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("bg-change");
    cursor.classList.remove("scale-2");
    link.classList.remove("white-hover");
  });
});
