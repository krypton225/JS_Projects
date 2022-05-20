let skewedBgContent = document.getElementById("skewedBgContent");

window.addEventListener("scroll", (e) => {
  skewedBgContent.style.transform = `skewY(${-15 + window.scrollY / 30}deg)`;
});
