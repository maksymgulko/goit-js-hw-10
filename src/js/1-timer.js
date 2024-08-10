import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = new Date();
const myInput = document.querySelector('#datetime-picker');
const submitBtn = document.querySelector('[data-start]');
submitBtn.disabled = true;
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');
const flatPickr = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    dateCheck();
  },
}); // flatpickr

function dateCheck() {
  const currentDate = Date.now();
  if (currentDate > userSelectedDate) {
    iziToast.show({
      message: 'Please choose a date in the future',
      position: 'topCenter',
    });
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

submitBtn.addEventListener('click', event => {
  const timer = setInterval(() => {
    const timeDiff = userSelectedDate.getTime() - Date.now();
    const countdown = convertMs(timeDiff);
    daysCounter.innerHTML = countdown.days.toString().padStart(2, '0');
    hoursCounter.innerHTML = countdown.hours.toString().padStart(2, '0');
    minutesCounter.innerHTML = countdown.minutes.toString().padStart(2, '0');
    secondsCounter.innerHTML = countdown.seconds.toString().padStart(2, '0');
    submitBtn.disabled = true;

    if (timeDiff <= 0) {
      clearInterval(timer);
      daysCounter.innerHTML = '00';
      hoursCounter.innerHTML = '00';
      minutesCounter.innerHTML = '00';
      secondsCounter.innerHTML = '00';
      submitBtn.disabled = false;
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
