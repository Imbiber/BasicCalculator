let currentInput = "";
let expression = "";
const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;

    if (buttonText === '=') {
      try {
        expression += currentInput;
        currentInput = eval(expression).toString();
        display.value = currentInput;
        expression = "";
      } catch (error) {
        display.value = "Error";
        expression = "";
        currentInput = "";
      }
    } else if (buttonText === 'C') {
      currentInput = "";
      expression = "";
      display.value = "";
    } else {
      currentInput += buttonText;
      display.value = currentInput;
    }
  });
});
