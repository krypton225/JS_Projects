let allLinks = document.querySelectorAll("ul li");

let firstContent = document.querySelector(".first-content");
let secondContent = document.querySelector(".second-content");
let thirdContent = document.querySelector(".third-content");


function removeAboveAndScaling() {
    document.querySelectorAll("div").forEach((el) => {
        el.classList.remove("above-element", "scale-0", "scale-1");
        el.classList.add("scale-0");
    });
}

allLinks.forEach((el) => {
    el.addEventListener("click", (e) => {

        removeAboveAndScaling();

        if (e.target.classList.contains("first-link")) {
            firstContent.classList.remove("scale-0");
            firstContent.classList.add("above-element", "scale-1");
        } else if (e.target.classList.contains("second-link")) {
            secondContent.classList.remove("scale-0");
            secondContent.classList.add("above-element", "scale-1");
        } else if (e.target.classList.contains("third-link")) {
            thirdContent.classList.remove("scale-0");
            thirdContent.classList.add("above-element", "scale-1");
        }
    })
})