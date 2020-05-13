const loading = document.getElementById('loading');
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;


// Update coundown time
function updateCoundown() {
  const currentTime = new Date();

  // Get diff between newYearTime & currentYear
  const diff = newYearTime - currentTime;
  // console.log(diff);  // -> /mimiseconds

  // Get the number of days
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  // Get the number of hours
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;

  // Get the number of minutes
  const m = Math.floor(diff / 1000 / 60) % 60;

  // Get the number of seconds
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
};

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCoundown, 1000);