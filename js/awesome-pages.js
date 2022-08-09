const myLi = Array.from(document.querySelectorAll(".navbar ul li"));

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

myLi.forEach((li) => {
  li.addEventListener("click", () => {
    document.querySelectorAll("section").forEach((sec) => {
      sec.classList.remove("high-index");
    });

    if (li.getAttribute("id") === "btn-first") {
      first.classList.add("high-index");
    } else if (li.getAttribute("id") === "btn-second") {
      second.classList.add("high-index");
    } else if (li.getAttribute("id") === "btn-third") {
      third.classList.add("high-index");
    }
  });
});
