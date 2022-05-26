const myQuizdata = [
  {
    question: "Who founded the Umayya Empire?",
    first: "Muawiya Ibn Abi Sufyan.",
    second: "Abi Sufyan Ibn Harb.",
    third: "Yazed Ibn Abi Sufyan.",
    fourth: "No answer is correct.",
    correct: "first",
  },

  {
    question: "The most used programming language in 2022 is",
    first: "Javascript.",
    second: "C#.",
    third: "C++",
    fourth: "Java",
    correct: "fourth",
  },

  {
    question: "Who founded the Google?",
    first: "Thomas",
    second: "Larry Page.",
    third: "Roberto.",
    fourth: "Maxwell.",
    correct: "second",
  },

  {
    question: "Who founded the Twitter?",
    first: "Elon Mask",
    second: "Evan Williams.",
    third: "Marko yaso.",
    fourth: "Taigo.",
    correct: "second",
  },
];

let quizSection = document.getElementById("quiz");

let questionTitle = document.getElementById("question");

let firstLabel = document.getElementById("firstLabel");
let secondLabel = document.getElementById("secondLabel");
let thirdLabel = document.getElementById("thirdLabel");
let fourthLabel = document.getElementById("fourthLabel");

let answersInput = document.querySelectorAll("input[name=answers]");

let submitBtn = document.getElementById("submit");

let counter = 0;
let myScore = 0;

const setQuestionAndAnswers = () => {
  let currentQuiz = myQuizdata[counter];

  questionTitle.textContent = currentQuiz.question;
  firstLabel.textContent = currentQuiz.first;
  secondLabel.textContent = currentQuiz.second;
  thirdLabel.textContent = currentQuiz.third;
  fourthLabel.textContent = currentQuiz.fourth;
};

setQuestionAndAnswers();

submitBtn.addEventListener("click", () => {
  let myAnswer = getSelectedAnswer();

  if (myAnswer !== undefined) {
    if (myAnswer === myQuizdata[counter].correct) {
      myScore++;
    }

    counter++;
    removeAllCheckingInputs();

    if (counter >= myQuizdata.length) {
      alert(`You score is: ${myScore} of ${myQuizdata.length}`);
      location.reload();
    } else {
      setQuestionAndAnswers();
    }
  } else {
    alert("Choose an answer, please!");
  }
});

const removeAllCheckingInputs = () => {
  let myAllInputs = document.querySelectorAll("input[type=radio]");

  myAllInputs.forEach((input) => {
    input.checked = false;
  });
};

const getSelectedAnswer = () => {
  let myAnswer;

  answersInput.forEach((answer) => {
    if (answer.checked) {
      myAnswer = answer.id;
    }
  });

  return myAnswer;
};
