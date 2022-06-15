const URL_API = "https://type.fit/api/quotes";

let quoteContent = document.getElementById("quoteContent"),
  quoteAuthor = document.getElementById("quoteAuthor"),
  quoteIcon = document.getElementById("quoteIcon");

const getRandomNumber = (myLength) => {
  return Math.round(Math.random() * myLength);
};

quoteIcon.addEventListener("click", () => {
  fetch(URL_API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const myRandom = getRandomNumber(data.length);

      quoteAuthor.textContent = `${data[myRandom].author}`;
      quoteContent.textContent = `“ ${data[myRandom].text} ”`;
    });
});
