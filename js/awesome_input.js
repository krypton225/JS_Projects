let mySpans = document.querySelectorAll("label span"),
  allInputs = document.querySelectorAll("input");

const movingCharacters = () => {
  mySpans.forEach((el) => {});
};

allInputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.nextElementSibling.querySelectorAll("span").forEach((span) => {
      span.classList.toggle("active");
    });
  });

  input.addEventListener("blur", (e) => {
    e.target.nextElementSibling.querySelectorAll("span").forEach((span) => {
      span.classList.remove("active");
    });
  });
});
