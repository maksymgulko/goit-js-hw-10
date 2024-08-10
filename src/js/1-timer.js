import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate = new Date();
const myInput = document.querySelector('#datetime-picker');
const submitBtn = document.querySelector('[data-start]');
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
  const currentDate = new Date();
  if (currentDate > userSelectedDate) {
    window.alert('Please choose a date in the future');
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
