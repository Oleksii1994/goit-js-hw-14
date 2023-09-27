const input = document.querySelector("#name-input");

const spanOutput = document.querySelector("#name-output");

const onInput = () => {
  if (input.value.trim() === "") {
    spanOutput.textContent = "Anonymous";
    return;
  }

  spanOutput.textContent = input.value.trim();
};

input.addEventListener("input", onInput);
