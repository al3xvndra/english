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
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    // Create radio buttons for answers
    const answersList = document.createElement('ul');
    ['answer1', 'answer2', 'answer3'].forEach((answerKey) => {
      const answerItem = document.createElement('li');
      const answerRadio = document.createElement('input');
      answerRadio.type = 'radio';
      answerRadio.name = `question-${index}`;
      answerRadio.value = question[answerKey];
      
      // Wrap each answer in a div for styling
      const answerDiv = document.createElement('div');
      answerDiv.classList.add('answerDiv');
      answerDiv.textContent = question[answerKey];

      answerItem.appendChild(answerRadio);
      answerItem.appendChild(answerDiv);
      answersList.appendChild(answerItem);
    });

    questionDiv.appendChild(answersList);
    categoryContainer.appendChild(questionDiv);
  });

  // Function to check answers
  checkAnswersBtn.addEventListener('click', () => {
    let score = 0;

    filteredQuestions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
      const answerDivs = document.querySelectorAll(`input[name="question-${index}"] ~ div.answerDiv`);

    // Check if the correct answer was selected and apply colors
    if (selectedAnswer) {
      if (selectedAnswer.value === question.correctAnswer) {
        score++;
        // Highlight correct answer div in green
        const correctDiv = [...answerDivs].find(div => div.textContent === question.correctAnswer);
        correctDiv.classList.add('correctAnswer');
      } else {
        // Highlight the selected wrong answer div in red
        const wrongDiv = [...answerDivs].find(div => div.textContent === selectedAnswer.value);
        wrongDiv.classList.add('wrongAnswer');

        // Highlight correct answer div in green
        const correctDiv = [...answerDivs].find(div => div.textContent === question.correctAnswer);
        correctDiv.classList.add('correctAnswer');
      }
    }
  });

    // Display score
    scoreDisplay.textContent = `Your score is: ${score} out of ${filteredQuestions.length}`;
  });

  // Function to restart the quiz
  restartBtn.addEventListener('click', () => {
    // Clear all selected answers
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => (radio.checked = false));

    // Reset all answer div backgrounds to white
    const answerDivs = document.querySelectorAll('div.answerDiv');
    answerDivs.forEach(div => (div.classList.remove('wrongAnswer')));
    answerDivs.forEach(div => (div.classList.remove('correctAnswer')));
    // Clear the score display
    scoreDisplay.textContent = '';
  });
});