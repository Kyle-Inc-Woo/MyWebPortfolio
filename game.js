const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const message = document.getElementById('message');

const choices = ['Rock', 'Scissors', 'Paper'];

rockBtn.addEventListener('click', () => playGame('Rock'));
scissorsBtn.addEventListener('click', () => playGame('Scissors'));
paperBtn.addEventListener('click', () => playGame('Paper'));

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  if (playerChoice === computerChoice) {
    message.textContent = `It's a draw! You: ${playerChoice}, Computer: ${computerChoice}`;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    message.textContent = `Congratulations! You won! You: ${playerChoice}, Computer: ${computerChoice}`;
  } else {
    message.textContent = `That's unfortunate! You lose! You: ${playerChoice}, Computer: ${computerChoice}`;
  }
}