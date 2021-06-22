const form = document.querySelector(".quiz-form");
const scoreboard = document.querySelector('.score');
const correctAnswers = ["A", "C", "B", "D", "B", "A", "E", "C", "D", "E"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value,
    event.target.inputQuestion5.value,
    event.target.inputQuestion6.value,
    event.target.inputQuestion7.value,
    event.target.inputQuestion8.value,
    event.target.inputQuestion9.value,
    event.target.inputQuestion10.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 100 / correctAnswers.length;
    }
  });

  scoreboard.textContent = `${score} pontos`;
});
