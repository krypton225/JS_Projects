const myReviews = [
  {
    id: 1,
    myName: "John Doe 1",
    myImage: "imgs/man-1.jpg",
    myJob: "Software Engineer",
    myInfo:
      "First, Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore provident.",
  },

  {
    id: 2,
    myName: "John Doe 2",
    myImage: "imgs/man-2.jpg",
    myJob: "Back End Developer",
    myInfo:
      "Second, Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore provident.",
  },

  {
    id: 3,
    myName: "John Doe 3",
    myImage: "imgs/man-3.jpg",
    myJob: "Front End Developer",
    myInfo:
      "Third, Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore provident.",
  },
];

// * This is info about the person.
let containerImage = document.getElementById("containerImage");
let personName = document.getElementById("personName");
let personJob = document.getElementById("personJob");
let infoPerson = document.getElementById("infoPerson");

// * My buttons (pre and next)
let preBtn = document.getElementById("preBtn");
let nextBtn = document.getElementById("nextBtn");

// * This is for counting in array to show the data of each person.
let myCounter = 0;

// * Load data when the page is loaded.
window.addEventListener("DOMContentLoaded", () => {
  containerImage.src = myReviews[myCounter].myImage;
  personName.textContent = myReviews[myCounter].myName;
  personJob.textContent = myReviews[myCounter].myJob;
  infoPerson.textContent = myReviews[myCounter].myInfo;
});

function getPersonData(onePerson) {
  containerImage.src = myReviews[onePerson].myImage;
  personName.textContent = myReviews[onePerson].myName;
  personJob.textContent = myReviews[onePerson].myJob;
  infoPerson.textContent = myReviews[onePerson].myInfo;
}

preBtn.addEventListener("click", () => {
  myCounter--;

  // * Check the length of the array and myCounter.
  if (myCounter < 0) {
    myCounter = myReviews.length - 1;
  }

  getPersonData(myCounter);
});

nextBtn.addEventListener("click", () => {
  myCounter++;

  // * Check the length of the array and myCounter.
  if (myCounter > myReviews.length - 1) {
    myCounter = 0;
  }

  getPersonData(myCounter);
});
