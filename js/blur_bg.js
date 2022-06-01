let blur = document.getElementById("blur"),
  bg = document.getElementById("bg");

let counter = 0;
let blurStart = 90;

let myInterval = setInterval(() => {
  blur.textContent = `${counter++}%`;
  bg.style.filter = `blur(${blurStart--}px)`;

  if (counter > 100) {
    clearInterval(myInterval);
    blur.style.opacity = "0";
    blur.style.visibility = "hidden";
    blur.style.transform = "scale(0.4), translateX(50%)";
  }
}, 17);
