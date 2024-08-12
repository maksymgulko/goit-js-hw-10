import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loginForm = document.querySelector('.form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const delay = form.elements.delay.value.trim();
  const state = form.elements.state.value.trim();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise
    .then(() =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        backgroundColor: '#4CAF50',
        messageColor: '#fff',
      })
    )
    .catch(() =>
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        backgroundColor: '#F44336',
        messageColor: '#fff',
      })
    );

  console.log(delay, state);

  form.reset();
}
