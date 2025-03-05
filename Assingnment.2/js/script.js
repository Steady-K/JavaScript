const choices = ['rock', 'paper', 'scissors'];

const message = document.getElementById('message');
const resultmessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const restartButton = document.getElementById('restart-btn');
const buttons = document.querySelectorAll('.choice-btn button');

const userChoiceImg = document.getElementById('user-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');

let userScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  userChoiceImg.src = `img/${playerChoice}.png`;
  computerChoiceImg.src = `img/${computerChoice}.png`;

  if (playerChoice === computerChoice) {
    message.textContent = '비겼습니다';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    message.textContent = '이겼습니다.';
    userScore++;
  } else {
    message.textContent = '졌습니다.';
    computerScore++;
  }

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

  if (userScore === 10 || computerScore === 10) {
    message.textContent = userScore === 10 ? '유저 승리!' : '컴퓨터 승리!';
    alert(message.textContent);
    resetGame();
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  message.textContent = '게임을 시작하세요!';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playGame(button.id);
  });
});

restartButton.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  message.textContent = '게임을 시작하세요!';
});
