let clockDayName = document.querySelector(".clock__day__name");
let clockDayNumber = document.querySelector(".clock__day__day-number");
let clockDayMonth = document.querySelector(".clock__day__month");
let clockDayYear = document.querySelector(".clock__day__year");

function getDayName(day) {
  switch (day) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    default:
      console.log("There is an error!");
      break;
  }

  return day;
}

function getMonthName(month) {
  switch (month) {
    case 0:
      month = "January";
      break;

    case 1:
      month = "February";
      break;

    case 2:
      month = "March";
      break;

    case 3:
      month = "April";
      break;

    case 4:
      month = "May";
      break;

    case 5:
      month = "June";
      break;

    case 6:
      month = "July";
      break;

    case 7:
      month = "August";
      break;

    case 8:
      month = "September";
      break;

    case 9:
      month = "October";
      break;

    case 10:
      month = "November";
      break;

    case 11:
      month = "December";
      break;

    default:
      console.log("There is an error in the month!");
      break;
  }

  return month;
}

function setTimeInHTML() {
  const myDateObj = new Date();

  //   * Get the hour of the current day.
  let myHours = myDateObj.getHours();
  if (myHours > 11) {
    myHours -= 12;
  }
  if (myHours < 10) {
    myHours = `0${myHours}`;
  }

  //   * Get the minutes of the current hour.
  let myMin = myDateObj.getMinutes();
  if (myMin < 10) {
    myMin = `0${myMin}`;
  }

  //   * Get the seconds of the current hour.
  let mySeconds = myDateObj.getSeconds();
  if (mySeconds < 10) {
    mySeconds = `0${mySeconds}`;
  }

  clockTime.innerHTML = `${myHours} : ${myMin} : ${mySeconds}`;

  //   * Setting once the name, number, month and year of the current day.
  (function setFirstRowInDate() {
    clockDayName.innerHTML = getDayName(myDateObj.getDay());
    clockDayNumber.innerHTML = myDateObj.getDay();
    clockDayMonth.innerHTML = getMonthName(myDateObj.getMonth());
    clockDayYear.innerHTML = myDateObj.getFullYear();
  })();
}

// * Setting the current time every one seconds.
setInterval(() => {
  setTimeInHTML();
}, 1000);
