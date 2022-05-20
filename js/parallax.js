let parallax = document.getElementById("parallax");

window.addEventListener("mousemove", (e) => {
  let myX = e.clientX / 4;
  let myY = e.clientY / 4;

  parallax.style.backgroundPositionX = `-${myX}px`;
  parallax.style.backgroundPositionY = `-${myY}px`;
});
