document.addEventListener('DOMContentLoaded', () => {
  const categoryContainer = document.querySelector('.categoryContainer');
  const checkAnswersBtn = document.querySelector('#checkAnswersBtn');
  const scoreDisplay = document.querySelector('#score');

  // Get query parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category'); // e.g., "Past Continuous"
  const set = urlParams.get('set'); // e.g., "1"

  // Filter questions based on category and set
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
          const answerLabel = document.createElement('label');
          answerLabel.textContent = question[answerKey];
          answerItem.appendChild(answerRadio);
          answerItem.appendChild(answerLabel);
          answersList.appendChild(answerItem);
      });

      questionDiv.appendChild(answersList);
      categoryContainer.appendChild(questionDiv);
  });

  // Function to check answers
  checkAnswersBtn.addEventListener('click', () => {
      let score = 0;

      // Loop through each question to check answers
      filteredQuestions.forEach((question, index) => {
          const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
          
          if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
              score++;
          }
      });

      // Display score
      scoreDisplay.textContent = `Your score is: ${score} out of ${filteredQuestions.length}`;
  });
});
