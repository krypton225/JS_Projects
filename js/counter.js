let countNumber = document.getElementById("countNumber"),
  myButtons = document.querySelectorAll(".content__btn");

let myDefultCounter = 0;

myButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    let myTargetButton = event.currentTarget.classList;

    if (myTargetButton.contains("increase")) {
      myDefultCounter++;
    } else if (myTargetButton.contains("decrease")) {
      myDefultCounter--;
    } else {
      myDefultCounter = 0;
    }
    countNumber.textContent = myDefultCounter;
  });
});
