let pikkerSection = document.getElementById("pikker"),
  pikkerID = document.getElementById("pikkerID"),
  hexBtn = document.getElementById("hexBtn");

(function changeTheColorInHeader() {
  hexBtn.style.textDecoration = "underline";
})();

function getRandomValues() {
  return Math.round(Math.random() * 255);
}

pikkerID.addEventListener("click", () => {
  let mySetValue = ``;
  let pikkerTitle = document.getElementById("pikkerTitle");

  mySetValue = `#${getRandomValues().toString(16)}${getRandomValues().toString(
    16
  )}${getRandomValues().toString(16)}`;
  pikkerSection.style.backgroundColor = mySetValue;
  pikkerTitle.innerHTML = `Background Color: <span>${mySetValue}</span>`;
});
