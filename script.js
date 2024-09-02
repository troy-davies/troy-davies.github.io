let score = 0;
let totalQuestions = 5;
let currentQuestion = 0;

function checkAnswer(question, answer, element) {
    const feedbackElement = document.getElementById(`feedback-${question}`);
    feedbackElement.style.display = 'block'; // Show feedback

    // Correct answers
    const correctAnswers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'e'
    };

    if (answer === correctAnswers[question]) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.className = 'feedback correct';
        score++;
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
        feedbackElement.className = 'feedback incorrect';
    }

    // Update progress bar
    currentQuestion++;
    updateProgress();

    // Animate feedback
    feedbackElement.style.opacity = '1';
    feedbackElement.style.transform = 'translateY(0)';

    // Reset the feedback after a few seconds
    setTimeout(() => {
        feedbackElement.style.opacity = '0'; // Fade out
        feedbackElement.style.transform = 'translateY(-10px)'; // Move up
        setTimeout(() => {
            feedbackElement.style.display = 'none'; // Hide after fade out
            feedbackElement.className = 'feedback'; // Reset class
        }, 500); // Wait for the fade out to complete
    }, 2000);

    // Show final score if all questions are answered
    if (currentQuestion === totalQuestions) {
        setTimeout(() => {
            alert(`Quiz completed! Your score: ${score} out of ${totalQuestions}`);
        }, 2500);
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress');
    const percentage = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = percentage + '%';
}
