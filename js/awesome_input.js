let allInputs = document.querySelectorAll("input");

allInputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.nextElementSibling.querySelectorAll("span").forEach((span) => {
      span.classList.add("active");
    });
  });

  input.addEventListener("blur", (e) => {
    let mySpans = e.target.nextElementSibling.querySelectorAll("span");
    if (input.value.length === 0) {
      mySpans.forEach((span) => {
        span.classList.remove("active");
      });
    } else {
      mySpans.forEach((span) => {
        span.classList.add("active");
      });
    }
  });
});
