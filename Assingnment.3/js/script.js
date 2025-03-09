const quizData = [
  {
    question: '타이타닉의 구명보트는 몇 명이 탈 수 있을까요?',
    answers: [
      { text: '4명', correct: false },
      { text: '9명', correct: true },
      { text: '7명', correct: false },
      { text: '3명', correct: false },
    ],
  },
  {
    question: '폭력배가 많은 나라는?',
    answers: [
      { text: '칠레', correct: true },
      { text: '미국', correct: false },
      { text: '한국', correct: false },
      { text: '중국', correct: false },
    ],
  },
  {
    question: '세상에서 가장 쉬운 숫자는?',
    answers: [
      { text: '2,000', correct: false },
      { text: '1,500', correct: false },
      { text: '200,000', correct: false },
      { text: '190,000', correct: true },
    ],
  },
];

const quizQuestion = document.getElementById('quiz-question');
const quizAnswers = document.getElementById('quiz-answers');
const quizNextBtn = document.getElementById('quiz-next-btn');

let currentQuestionIndex = 0;
let score = 0;

const updateBackground = (color) =>
  (() => {
    document.body.style.backgroundColor = color;
  })();

const handleAnswerSelection = (isCorrect) => (e) => {
  const selectedBtn = e.target;
  selectedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    updateBackground('#d4edda');
    score++;
  } else {
    updateBackground('#f8d7da');
  }

  Array.from(quizAnswers.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  quizNextBtn.style.display = 'block';
};

function renderQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  quizQuestion.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    quizAnswers.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', handleAnswerSelection(answer.correct));
  });
}

function resetState() {
  quizNextBtn.style.display = 'none';
  updateBackground('#ffffff');
  while (quizAnswers.firstChild) {
    quizAnswers.removeChild(quizAnswers.firstChild);
  }
}

function displayScore() {
  resetState();
  quizQuestion.innerHTML = `당신의 점수는 ${score} / ${quizData.length}입니다!`;
  quizNextBtn.innerHTML = '다시 시작하기';
  quizNextBtn.style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    renderQuestion();
  } else {
    displayScore();
  }
}

(() => {
  function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    updateBackground('#ffffff');
    quizNextBtn.innerHTML = '다음';
    renderQuestion();
  }

  quizNextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length) {
      nextQuestion();
    } else {
      initQuiz();
    }
  });

  initQuiz();
})();
