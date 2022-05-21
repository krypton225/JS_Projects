let containerDiv = document.querySelectorAll(".container__expand");

containerDiv.forEach((div) => {
  div.addEventListener("click", () => {
    containerDiv.forEach((item) => {
      item.style.flex = 1;
    });

    div.style.flex = 5;
  });
});
