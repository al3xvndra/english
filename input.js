document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submitButton');
    const resetButton = document.querySelector('#resetButton');
  
    // Submit button logic
    submitButton.addEventListener("click", () => {
      let score = 0;
      let count = 0;
      const scoreDisplay = document.querySelector('#score');
  
      // Select all input fields with a `data-answer` attribute
      const inputs = document.querySelectorAll('input[data-answer]');
  
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
      });
  
      // Display the score
      scoreDisplay.textContent = `Your score is: ${score} out of ${count}`;
    });
  
    // Reset button logic
    resetButton.addEventListener("click", () => {
      const inputs = document.querySelectorAll('input[data-answer]');
      const scoreDisplay = document.querySelector('#score');
  
      // Clear all inputs and reset styles
      inputs.forEach(input => {
        input.value = ''; // Clear the value
        input.classList.remove("correctInput", "wrongInput"); // Remove any applied classes
        input.classList.add("neutralInput"); // Optionally, reapply a neutral class
      });
  
      // Clear the score display
      scoreDisplay.textContent = '';
    });
  });
  