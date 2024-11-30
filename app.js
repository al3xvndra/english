document.addEventListener('DOMContentLoaded', () => {
  const categoryContainer = document.querySelector('.categoryContainer');
  const checkAnswersBtn = document.querySelector('#checkAnswersBtn');
  const restartBtn = document.querySelector('#restartBtn');
  const scoreDisplay = document.querySelector('#score');

  // Get query parameters for category and set
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const set = urlParams.get('set');

  // Filter questions by category and set
  const filteredQuestions = questions.filter(
    question => question.category === category && question.set == set
  );

  // Dynamically generate question elements
  filteredQuestions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('questionBox');

    // Add question text
    const questionText = document.createElement('h3');
    questionText.textContent = (index + 1) + ". " + question.question;
    questionDiv.appendChild(questionText);

    if (question.type === "typed") {
      // If the question is of type 'typed', create an input field
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.placeholder = 'Type your answer here';
      inputField.dataset.questionId = index; // To identify the question
      inputField.classList.add('typedAnswerInput');
      questionDiv.appendChild(inputField);
    } else {
      // If the question is multiple choice, create answer buttons
      const answersList = document.createElement('ul');
      ['answer1', 'answer2', 'answer3'].forEach((answerKey) => {
        const answerItem = document.createElement('li');

        // Create a button for each answer
        const answerButton = document.createElement('button');
        answerButton.classList.add('neutralAnswer');
        answerButton.textContent = question[answerKey];
        answerButton.dataset.questionId = index; // To identify the question
        answerButton.dataset.answer = question[answerKey]; // To identify the selected answer

        // Add click event to mark the button as selected
        answerButton.addEventListener('click', () => {
          // Remove 'selectedAnswer' class from all buttons for the same question
          const siblingButtons = document.querySelectorAll(
            `button[data-question-id="${index}"]`
          );
          siblingButtons.forEach(button => {
            button.classList.remove('selectedAnswer');
            button.classList.add('neutralAnswer'); // Reset to neutral state
          });

          // Add 'selectedAnswer' class to the clicked button
          answerButton.classList.add('selectedAnswer');
          answerButton.classList.remove('neutralAnswer'); // Remove neutral class
        });

        // Append the button to the list item and the list item to the list
        answerItem.appendChild(answerButton);
        answersList.appendChild(answerItem);
      });
      questionDiv.appendChild(answersList);
    }

    categoryContainer.appendChild(questionDiv);
  });

  // Function to check answers
  checkAnswersBtn.addEventListener('click', () => {
    let score = 0;

    filteredQuestions.forEach((question, index) => {
      // If it's a multiple choice question
      if (question.type === "multiple") {
        const answerButtons = document.querySelectorAll(
          `button[data-question-id="${index}"]`
        );

        // Find the selected answer
        const selectedButton = [...answerButtons].find(button =>
          button.classList.contains('selectedAnswer')
        );

        // Reset classes for all buttons
        answerButtons.forEach(button => {
          button.classList.remove('correctAnswer', 'wrongAnswer');
          button.classList.add('neutralAnswer'); // Reset to neutral state
          button.disabled = true; // Disable all buttons
        });

        if (selectedButton) {
          const selectedAnswer = selectedButton.dataset.answer;

          if (selectedAnswer === question.correctAnswer) {
            // Mark correct answer
            selectedButton.classList.remove('neutralAnswer');
            selectedButton.classList.add('correctAnswer');
            score++;
          } else {
            // Mark wrong answer
            selectedButton.classList.remove('neutralAnswer');
            selectedButton.classList.add('wrongAnswer');

            // Highlight the correct answer
            const correctButton = [...answerButtons].find(
              button => button.dataset.answer === question.correctAnswer
            );
            if (correctButton) {
              correctButton.classList.remove('neutralAnswer');
              correctButton.classList.add('correctAnswer');
            }
          }
        }
      }

      // If it's a typed answer question
      if (question.type === "typed") {
        const inputField = document.querySelector(
          `input[data-question-id="${index}"]`
        );

        // Check the typed answer
        const userAnswer = inputField.value.trim().toLowerCase();
        const correctAnswer = question.correctAnswer.toLowerCase();

        if (userAnswer === correctAnswer) {
          inputField.classList.add('correctAnswer');
          score++;
        } else {
          inputField.classList.add('wrongAnswer');
        }

        // Disable the input field after checking
        inputField.disabled = true;
      }
    });

    // Display the score
    scoreDisplay.textContent = `Your score is: ${score} out of ${filteredQuestions.length}`;
  });

  // Function to restart the quiz
  restartBtn.addEventListener('click', () => {
    // Reset answer buttons and typed answers
    const answerButtons = document.querySelectorAll('button[data-question-id]');
    answerButtons.forEach(button => {
      button.classList.remove('correctAnswer', 'wrongAnswer', 'selectedAnswer');
      button.classList.add('neutralAnswer');
      button.disabled = false; // Re-enable all buttons
    });

    const typedInputs = document.querySelectorAll('.typedAnswerInput');
    typedInputs.forEach(input => {
      input.value = ''; // Clear the input field
      input.classList.remove('correctAnswer', 'wrongAnswer');
      input.disabled = false; // Re-enable input field
    });

    // Clear the score display
    scoreDisplay.textContent = '';
  });
});
