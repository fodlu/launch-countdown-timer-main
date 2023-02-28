const days = document.querySelector(".day");
const Hours = document.querySelector(".hours");
const Minutes = document.querySelector(".min");
const Seconds = document.querySelector(".sec");

let day = 08;
let Hour = 23;
let Minute = 55;
let Second = 41;

days.textContent = `${day}`.padStart(2, 0);
Hours.textContent = `${Hour}`.padStart(2, 0);
Minutes.textContent = `${Minute}`.padStart(2, 0);
Seconds.textContent = `${Second}`.padStart(2, 0);

const timer = setInterval(() => {
  Second--;
  Seconds.textContent = `${Second}`.padStart(2, 0);
  if (Second === 00) {
    Second = 60;
    Minute--;
    Minutes.textContent = `${Minute}`.padStart(2, 0);
  }
}, 1000);
