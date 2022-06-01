let searching = document.getElementById("searching"),
  myInput = document.getElementById("search"),
  submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  searching.classList.toggle("active");
  submitBtn.classList.toggle("active");
  myInput.focus();
});
