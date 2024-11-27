// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the 'category' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category'); // This will be "Past Simple" or "Past Continuous"

    // Get the container where the questions will be displayed
    const categoryContainer = document.querySelector('.categoryContainer');

    // Filter questions based on the selected category
    const filteredQuestions = questions.filter(question => question.category === category);

    // If there are no questions for the selected category, show a message
    if (filteredQuestions.length === 0) {
        const noQuestionsMessage = document.createElement('p');
        noQuestionsMessage.textContent = `No questions found for ${category}`;
        categoryContainer.appendChild(noQuestionsMessage);
    } else {
        // Loop through the filtered questions and display them
        filteredQuestions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('questionBox');

            // Add the question text
            const questionText = document.createElement('h3');
            questionText.textContent = question.question;
            questionDiv.appendChild(questionText);

            // Add possible answers
            const answersList = document.createElement('ul');
            [question.answer1, question.answer2, question.answer3].forEach(answer => {
                const answerItem = document.createElement('li');
                answerItem.textContent = answer;
                answersList.appendChild(answerItem);
            });

            questionDiv.appendChild(answersList);
            categoryContainer.appendChild(questionDiv);
        });
    }
});
