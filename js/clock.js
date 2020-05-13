const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//Set Launch Date
const then = new Date("Nov 29, 2020 06:00:00").getTime();

//Update By Seconds
const intvl = setInterval(() => {
  //Get today's date and time (ms)
  const now = new Date().getTime();

  //Distance from then to now
  const distance = then - now;

  //Calculations
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);

  //Display result
  days.innerHTML = `${day}<span>days</span>`;
  hours.innerHTML = `${hour}<span>hours</span>`;
  minutes.innerHTML = `${minute}<span>minutes</span>`;
  seconds.innerHTML = `${second}<span>seconds</span>`;
}, 1000);
