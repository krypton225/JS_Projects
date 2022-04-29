// My all quotes
const myQuotes = [
  {
    descQuote: "Forgive others as quickly as you expect Allah to forgive you.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "To Allah is your return, all of you, and He will inform you of what you used to do.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "A busy life makes prayer harder, but prayer makes a busy life easier.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "They plan, and Allah plans. Surely, Allah is the best of planners.",
    authorQuote: "- quraan kareem",
  },
  {
    descQuote:
      "Speak only when your words are more beautiful than the silence.",
    authorQuote: "- anonymous",
  },
  {
    descQuote: "Give love in secret by praying for one another.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "Before going to sleep every night, forgive everyone and sleep with a clean heart.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "The heart that beats for Allah (God) is always a stranger among the hearts that beat for the Dunya (world).",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "The bravest heart is the one that stays close to Allah (God), even, when it’s in pain.",
    authorQuote: "- anonymous",
  },
  {
    descQuote:
      "We laugh....and perhaps Allah has seen our deeds and said: I will accept nothing from you.",
    authorQuote: "- Al-Hasan Al-Basri",
  },
  {
    descQuote:
      "Moving stones is easier for the hypocrite (Monafeeq) than reciting the Qur’an.",
    authorQuote: "- Abu Al-Jawza",
  },
  {
    descQuote:
      "Nothing is more cut off for the back of evil than saying: There is no god but Allah.",
    authorQuote: "- Sufyan al-Thawri",
  },
];

// My IDs in the page
let quotesDesc = document.getElementById("quotesDesc");
let quotesAuthor = document.getElementById("quotesAuthor");
let getRandomQuotesBtn = document.getElementById("getRandomQuotes");

function getRandomNumber() {
  return Math.round(Math.random() * (myQuotes.length - 1));
}

getRandomQuotesBtn.addEventListener("click", () => {
  let myQuoteValue = getRandomNumber();
  quotesDesc.textContent = myQuotes[myQuoteValue].descQuote;
  quotesAuthor.textContent = myQuotes[myQuoteValue].authorQuote;
});
