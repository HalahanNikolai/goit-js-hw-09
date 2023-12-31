import getRandomHexColor from './comon';
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;
let timerId = null;


btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;

    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
});