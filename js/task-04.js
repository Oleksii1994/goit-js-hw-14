const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");

let total = Number(counterValue.textContent);

const decrementValue = () => {
  total -= 1;
  counterValue.textContent = total;
};

const incrementValue = () => {
  total += 1;
  counterValue.textContent = total;
};

decrementBtn.addEventListener("click", decrementValue);

incrementBtn.addEventListener("click", incrementValue);
