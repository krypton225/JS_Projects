let pikkerSection = document.getElementById("pikker"),
  pikkerID = document.getElementById("pikkerID"),
  rgbBtn = document.getElementById("rgbBtn");

(function changeTheColorInHeader() {
  rgbBtn.style.textDecoration = "underline";
})();

function getRandomValues() {
  return Math.round(Math.random() * 255);
}

pikkerID.addEventListener("click", () => {
  let mySetValue = ``;
  let pikkerTitle = document.getElementById("pikkerTitle");
  mySetValue += `rgb(${getRandomValues()}, ${getRandomValues()}, ${getRandomValues()})`;

  pikkerSection.style.backgroundColor = mySetValue;

  pikkerTitle.innerHTML = `Background Color: <span>${mySetValue}</span>`;
});
