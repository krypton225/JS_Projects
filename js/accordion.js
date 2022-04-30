let accordion = document.getElementById("accordion"),
  accordionContainer = document.getElementById("accordionContainer"),
  accordionHeader = document.getElementById("accordionHeader"),
  accordionHeaderIcon = document.querySelectorAll(".fa-plus"),
  accordionFooter = document.getElementById("accordionFooter");

accordionHeaderIcon.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const myContent =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "accordion__footer"
      )[0];

    if (item.classList.contains("fa-plus")) {
      item.classList.remove("fa-plus");
      item.classList.add("fa-minus");
    } else {
      item.classList.add("fa-plus");
    }

    myContent.classList.toggle("visible-acc");

    if (myContent.classList.contains("visible-acc")) {
      myContent.style.height = `${myContent.scrollHeight + 20}px`;
    } else {
      myContent.style.height = `0px`;
    }
  });
});
