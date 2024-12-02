document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('#submitButton');
  const resetButton = document.querySelector('#resetButton');

  // Submit button logic
  submitButton.addEventListener("click", () => {
      let score = 0;
      let count = 0;
      const scoreDisplay = document.querySelector('#score');

      // Select all inputs and dropdowns with a `data-answer` attribute
      const inputs = document.querySelectorAll('input[data-answer], select[data-answer]');

      inputs.forEach(input => {
          count++;
          const correctAnswer = input.dataset.answer.trim().toLowerCase();
          const userAnswer = input.value.trim().toLowerCase();

          // Compare user input with the correct answer
          if (userAnswer === correctAnswer) {
              input.classList.remove("wrongInput");
              input.classList.add("correctInput");
              score++;
          } else {
              input.classList.remove("correctInput");
              input.classList.add("wrongInput");
          }

          // Disable the input or dropdown
          input.disabled = true;
      });

      // Display the score
      scoreDisplay.textContent = `Your score is: ${score} out of ${count}`;
  });

  // Reset button logic
  resetButton.addEventListener("click", () => {
      const inputs = document.querySelectorAll('input[data-answer], select[data-answer]');
      const scoreDisplay = document.querySelector('#score');

      // Clear all inputs and dropdown selections, reset styles, and re-enable inputs
      inputs.forEach(input => {
          if (input.tagName === "SELECT") {
              input.selectedIndex = 0; // Reset dropdown to the first option
          } else {
              input.value = ''; // Clear text input value
          }

          input.classList.remove("correctInput", "wrongInput"); // Remove any applied classes
          input.classList.add("neutralInput"); // Optionally, reapply a neutral class
          input.disabled = false; // Re-enable the input or dropdown
      });

      // Clear the score display
      scoreDisplay.textContent = '';
  });
});
