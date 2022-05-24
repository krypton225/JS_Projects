let userName = document.getElementById("userName");

const hidePlaceHolderInput = (myElement) => {
  myElement.addEventListener("focus", () => {
    myElement.setAttribute("data-place", myElement.getAttribute("placeholder"));
    myElement.setAttribute("placeholder", "");
  });

  myElement.addEventListener("blur", () => {
    myElement.setAttribute("placeholder", myElement.getAttribute("data-place"));
  });
};

hidePlaceHolderInput(userName);
