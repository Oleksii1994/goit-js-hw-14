const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = Number(value.textContent);

const decrementValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);

incrementBtn.addEventListener("click", incrementValue);
