function removeAllClasses() {
    document.querySelectorAll(".main-sec div").forEach(div => {
        div.classList.remove("custom-style");
    });
}

document.querySelectorAll("ul li").forEach(li => {

    li.addEventListener("click", (e) => {
        const firstDiv = document.querySelector(".first");
        const secondDiv = document.querySelector(".second");
        const thirdDiv = document.querySelector(".third");

        removeAllClasses();

        if (e.currentTarget.classList.contains("one")) {
            secondDiv.classList.add("custom-style");
            thirdDiv.classList.add("custom-style");
        } else if (e.currentTarget.classList.contains("two")) {
            // removeAllClasses();
            firstDiv.classList.add("custom-style");
            thirdDiv.classList.add("custom-style");
        } else if (e.currentTarget.classList.contains("three")) {
            // removeAllClasses();
            firstDiv.classList.add("custom-style");
            secondDiv.classList.add("custom-style");
        }
    });
})