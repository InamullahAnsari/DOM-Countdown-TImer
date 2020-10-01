const daysElements = document.getElementById("days");
const hoursElements = document.getElementById("hours");
const minsElements = document.getElementById("mins");
const secondsElements = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds % 60);

  console.log(days, hours, mins, seconds);

  daysElements.innerHTML = days;
  hoursElements.innerHTML = formatTime(hours);
  minsElements.innerHTML = formatTime(mins);
  secondsElements.innerHTML = formatTime(seconds);

  //   console.log(days);
  //   console.log(days, hours);
  //   console.log(days, hours, minutes);
  //   console.log(days, hours, mins, seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initail call
countdown();

setInterval(countdown, 1000);
