let myProgress = document.querySelector(".third");

window.addEventListener("scroll", () => {
  if (window.scrollY >= myProgress.offsetTop - 60) {
    document.querySelectorAll(".progress span").forEach((el) => {
      el.style.width = el.dataset.animate;
    });
  }
});
