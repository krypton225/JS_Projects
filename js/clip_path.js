let myClip = document.querySelector(".clip");

window.addEventListener("scroll", () => {
  myClip.style.clipPath = `circle(${window.scrollY}px at center)`;
});
