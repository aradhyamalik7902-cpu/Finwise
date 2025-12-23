// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Existing quiz function
function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value;
    if (answer.toLowerCase() === 'diversification') {
        alert('Correct! Diversification reduces risk.');
    } else {
        alert('Try again. Hint: Spreading investments.');
    }
}