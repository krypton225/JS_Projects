const URL_API_DATA = "http://universities.hipolabs.com/search?country=egypt";

// Get my all needed elements.
let searchInput = document.getElementById("searchInput"),
  countriesDiv = document.querySelector(".search__countries");

window.addEventListener("load", () => {
  searchInput.focus();

  fetch(URL_API_DATA)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        let myElement = document.createElement("p");
        myElement.textContent = el.name;
        myElement.classList.add("search__countries__p");

        myElement.style.cssText = `font-size: 1.3rem; margin-block: 0.5rem;`;
        countriesDiv.appendChild(myElement);
      });
    });
});

searchInput.addEventListener("input", () => {
  let allElements = Array.from(
    document.querySelectorAll(".search__countries__p")
  );

  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].innerHTML.toLowerCase().includes(searchInput.value)) {
      allElements[i].style.display = "";
    } else {
      allElements[i].style.display = "none";
    }
  }
});
