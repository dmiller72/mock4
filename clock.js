let dayofweek  = document.getElementById('days');
let hourofday = document.getElementById('hours');
let minofhour = document.getElementById('minutes');
let secofmin = document.getElementById('seconds');

// // //Set Launch Date
let then = new Date('Nov 29, 2018 06:00:00').getTime();

// // //Update By Seconds
let intvl = setInterval(() => {

//     //  //Get today's date and time (ms)
    let now = new Date().getTime();

//     //  //Distance from then to now 
    let distance = then - now;

// //  //Calculations
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//Display result
    dayofweek.innerHTML = `${days}<span>days</span>`;
    hourofday.innerHTML = `${hours}<span>hours</span>`;
    minofhour.innerHTML = `${minutes}<span>minutes</span>`;
    secofmin.innerHTML = `${seconds}<span>seconds</span>`;

}, 1000)



 