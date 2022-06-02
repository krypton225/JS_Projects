window.addEventListener("scroll", () => {
  document
    .getElementById("goToTop")
    .classList.toggle("active", window.scrollY > 160);
});
