const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

// setInterval = window 및 worker 인터페이스에서 제공되는 setInterval()메서드는
// 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 스니펫을 실행
buttonStart.onclick = function () {
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = 0;
  appendSeconds.innerText = 0;
  tens = 0;
  appendTens.innerText = 0;
};

function startTimer() {
  tens++;

  if (tens > 99) {
    // seconds 1 올리기
    seconds++;
    // appendSeconds에도 반영하기
    appendSeconds.innerText = seconds;
    // tens, appendTens => 0
    tens = 0;
    appendTens.innerText = 0;
  } else {
    appendTens.innerText = tens;
  }
}
