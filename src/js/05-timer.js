//!=========================================

const clockfaceElem = document.querySelector('.js-clockface');
const startBtn = document.querySelector('.js-start-btn');
const stopBtn = document.querySelector('.js-stop-btn');
let INTERVAL_ID;

//!=========================================

startBtn.addEventListener('click', () => {
  console.log('START');
  const futureDate = new Date('09/24/2026 12:08:00');

  INTERVAL_ID = setInterval(() => {
    const currentTime = new Date();
    const diff = futureDate - currentTime;
    const str = convertMS(diff);
    clockfaceElem.textContent = str;

    console.log(diff);

    if (diff < 1000) {
      clearInterval(INTERVAL_ID);
      return;
    }
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  console.log('STOP');
  clearInterval(INTERVAL_ID);
  clockfaceElem.textContent = '00:00:00';
});

function convertMS(ms) {
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;

  const hStr = h.toString().padStart(2, '0');
  const mStr = m.toString().padStart(2, '0');
  const sStr = s.toString().padStart(2, '0');

  return `${hStr}:${mStr}:${sStr}`;
}

//!=========================================
