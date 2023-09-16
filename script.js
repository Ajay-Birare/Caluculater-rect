// calculator.js
document.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.querySelector('input[placeholder="Num 1"]');
  const num2Input = document.querySelector('input[placeholder="Num 2"]');
  const operatorButtons = document.querySelectorAll(".operaters button");
  const resultDisplay = document.querySelector(".result h4:nth-child(2)");

  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const operator = button.textContent.trim();

      if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Invalid input";
      } else {
        let result;
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            if (num2 === 0) {
              result = "Cannot divide by zero";
            } else {
              result = num1 / num2;
            }
            break;
          default:
            result = "Invalid operator";
        }

        resultDisplay.textContent = "Result: " + result;
      }
    });
  });
});
