const answers = {
    q1: 'b',
    q2: 'a',
    q3: 'b',
    q4: 'a',
    q5: 'a'
};

function checkAnswer(question, selectedAnswer, radio) {
    const feedbackDiv = document.getElementById(`feedback-${question}`);
    feedbackDiv.style.display = 'block';
    feedbackDiv.style.opacity = '0'; // Reset opacity for animation

    if (selectedAnswer === answers[question]) {
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.className = "feedback correct";
    } else {
        feedbackDiv.textContent = "Incorrect!";
        feedbackDiv.className = "feedback incorrect";
    }

    // Trigger animation
    setTimeout(() => {
        feedbackDiv.style.opacity = '1'; // Fade in
    }, 10);
}

function submitQuiz() {
    let score = 0;
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${Object.keys(answers).length}.`;
}
