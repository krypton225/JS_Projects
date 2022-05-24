let imgSecond = document.getElementById("imgSecond");

window.addEventListener("mousemove", (e) => {
  imgSecond.style.left = `${e.clientX}px`;
});
