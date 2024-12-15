document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submitButton');
    const resetButton = document.querySelector('#resetButton');
    const inputs = document.querySelectorAll('input[data-answer], select[data-answer]');
    const spDisplay = document.querySelector('.score-div')
    const scoreDisplay = document.querySelector('#score');
    const percDisplay = document.querySelector('#perc');
    const answersDiv = document.querySelector('.answers-div');

    // Clear all inputs and dropdowns on page refresh
    inputs.forEach(input => {
        if (input.tagName === "SELECT") {
            input.selectedIndex = 0; // Reset dropdown to the first option
        } else {
            input.value = ''; // Clear text input value
        }
        input.classList.remove("correctInput", "wrongInput", "filledCorrectAnswer", "neutralInput");
        input.classList.add("neutralInput"); // Optionally, reapply a neutral class
        input.disabled = false; // Ensure inputs are enabled on page load
    });

    // Clear the score display and hide answers-div on page refresh
    scoreDisplay.textContent = '';
    answersDiv.style.display = 'none'; // Hide the answers-div initially
    spDisplay.style.display = 'none';
    // Submit button logic
    submitButton.addEventListener("click", () => {
        let score = 0;
        let count = 0;

        inputs.forEach(input => {
            count++;
            const correctAnswer = input.dataset.answer.trim().toLowerCase();
            const userAnswer = input.value.trim().toLowerCase();

            // Compare user input with the correct answer
            if (userAnswer === correctAnswer) {
                input.classList.remove("wrongInput", "filledCorrectAnswer");
                input.classList.add("correctInput");
                score++;
            } else {
                input.classList.remove("correctInput");
                input.classList.add("wrongInput");

                // If the input is empty, fill it with the correct answer and add the filledCorrectAnswer class
                if (userAnswer === '') {
                    if (input.tagName === "SELECT") {
                        // Set the correct answer for a dropdown
                        [...input.options].forEach(option => {
                            if (option.value.toLowerCase() === correctAnswer) {
                                option.selected = true;
                            }
                        });
                    } else {
                        // Set the correct answer for a text input
                        input.value = input.dataset.answer;
                    }
                    input.classList.remove("correctInput", "wrongInput");
                    input.classList.add("filledCorrectAnswer");
                }
            }

            // Disable the input or dropdown
            input.disabled = true;
        });

        let percent = ((score * 100) / count).toFixed(2);

        // Display the score
        scoreDisplay.textContent = `Your score is: ${percent}%`;
        percDisplay.textContent = `Correct answers: ${score} out of ${count}`;
        // Show the answers-div
        answersDiv.style.display = 'block';
        spDisplay.style.display = 'flex';
        // Scroll back to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Reset button logic
    resetButton.addEventListener("click", () => {
        inputs.forEach(input => {
            if (input.tagName === "SELECT") {
                input.selectedIndex = 0; // Reset dropdown to the first option
            } else {
                input.value = ''; // Clear text input value
            }
            input.classList.remove("correctInput", "wrongInput", "filledCorrectAnswer", "neutralInput");
            input.classList.add("neutralInput"); // Optionally, reapply a neutral class
            input.disabled = false; // Re-enable the input or dropdown
        });

        // Clear the score display
        scoreDisplay.textContent = '';

        // Hide the answers-div
        answersDiv.style.display = 'none';
        spDisplay.style.display = 'none';

        // Scroll back to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
