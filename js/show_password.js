let myPassword = document.getElementById("myPassword"),
  myIconEye = document.getElementById("myIconEye");

window.addEventListener("load", () => {
  myPassword.focus();
});

myIconEye.addEventListener("click", () => {
  if (myIconEye.classList.contains("fa-eye-slash")) {
    myIconEye.classList.remove("fa-eye-slash");
    myIconEye.classList.add("fa-eye");
  } else {
    myIconEye.classList.add("fa-eye-slash");
  }

  if (myPassword.getAttribute("type") === "password") {
    myPassword.setAttribute("type", "text");
  } else {
    myPassword.setAttribute("type", "password");
  }
});
