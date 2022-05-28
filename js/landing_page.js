let myContent = document.getElementById("myContent");
let myImageContainer = document.querySelector(".container__content__img");
let myImage = document.querySelector(".container__content__img img");

myContent.addEventListener("animationend", () => {
  myImageContainer.style.width = "30%";
  myImageContainer.style.height = "30%";
  myContent.style.clipPath = "circle(100% at 50% 50%)";
  myImage.style.visibility = "visible";
  myImage.style.opacity = "1";
});

myContent.addEventListener("animationstart", () => {
  myImageContainer.style.width = "0%";
  myImageContainer.style.height = "0%";
  myContent.style.clipPath = "circle(6% at 50% 50%)";
  myContent.style.backgroundColor = "transparent";
});
