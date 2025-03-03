// window.onload = function () {
//   // 문서가 load 될 때 이 함수를 실행

//   let text = document.getElementById('text');
//   // 아이디가 'text'인 요소를 return

//   text.innerText = 'HTML 문서 loaded';
// };

// const aElement = document.querySelector('a');

// aElement.addEventListener('click', () => {
//   alert('a element clicked');
// });

const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  val = event.clientY;

  val = event.offsetY;

  console.log(val);
});
