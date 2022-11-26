const allItemsList = Array.from(document.querySelectorAll("li"));

const allSections = document.querySelectorAll("section");

const removeHigh = () => allSections.forEach((sec) => sec.classList.remove("high-one"));

allItemsList.forEach((li) => {
    li.addEventListener("click", (e) => {

        removeHigh();

        if (e.target.classList[0].toLowerCase() === "item-first") {
            allSections[0].classList.add("high-one");
        } else if (e.target.classList[0].toLowerCase() === "item-second") {
            allSections[1].classList.add("high-one");
        } else if (e.target.classList[0].toLowerCase() === "item-third") {
            allSections[2].classList.add("high-one");
        } else if (e.target.classList[0].toLowerCase() === "item-fourth") {
            allSections[3].classList.add("high-one");
        }
    })
})