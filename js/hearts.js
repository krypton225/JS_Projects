let heartsEmojesDiv = document.getElementById("emojesDiv");
let heartsEmojesFirstSpans = document.querySelectorAll(
  ".hearts__emojes__first"
);

let heartsEmojesSecondSpans = document.querySelectorAll(
  ".hearts__emojes__second"
);

let showHeartsBtn = document.getElementById("showHeartsBtn");

showHeartsBtn.addEventListener("click", () => {
  heartsEmojesDiv.classList.add("move-div-animation");

  heartsEmojesFirstSpans.forEach((itemSpanFirst) => {
    itemSpanFirst.classList.toggle("add-animation-1");
  });

  heartsEmojesSecondSpans.forEach((itemSpanSecond) => {
    itemSpanSecond.classList.toggle("add-animation-2");
  });

  setTimeout(() => {
    window.location.reload();
  }, 3000);
});
