
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form.form');
const options = {
  position: 'right',
  distance: '20px',
  borderRadius: '20px',
  timeout: 10000,
  clickToClose: true,
};

form.addEventListener('click', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    // if ([i] == 1) {
    //   inputDelay = 0;
    // }
    // else {
    //   inputDelay += inputStep;
    // }

    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          options
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          options
        );

      });
    inputDelay += inputStep;
    e.currentTarget.reset();
  }
}