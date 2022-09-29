const refs = {
  day: document.querySelector(".day"),
  hour: document.querySelector(".hour"),
  minute: document.querySelector(".minute"),
  second: document.querySelector(".second"),
};
console.log(refs.day);
const newDate = new Date("Jan 1, 2022 00:00:00").getTime();
updateCountdown();
function updateCountdown() {
  const now = new Date().getTime();
  const gap = newDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  refs.day.innerText = d;
  refs.hour.innerText = h;
  refs.minute.innerText = m;
  refs.second.innerText = s;
  setTimeout(updateCountdown, 1000);
}
