const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const valueSpan = document.querySelector('#value');
const updateCounterValue = (newValue) => {
    counterValue = newValue;
    valueSpan.textContent = counterValue;
};
const counterDown = () => {
    updateCounterValue(counterValue - 1)};
const counterUp = () => {
    updateCounterValue(counterValue + 1)};
  
  decrementBtn.addEventListener('click', counterDown);
  incrementBtn.addEventListener('click', counterUp);