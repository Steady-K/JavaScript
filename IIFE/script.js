// (function () {
//   var aName = 'Barry';
// })();

// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가.
// console.log(aName);

// var result = (function () {
//   var name = 'Barry';
//   return name;
// })();
// console.log(result);

// 이름 없는 함수
// 할당 받을 변수 지정정
// const minus = function (a, b) {
//   return a - b;
// };

// // IIFE 사용
// (function (a, b) {
//   return a - b;
// })();

// const score = () => {
//   let count = 0;
//   return {
//     current: () => {
//       return count;
//     },
//     increment: () => {
//       count++;
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
// };

// console.log(typeof score);
// console.log(score);
// console.log(score().current());
// score().increment();
// console.log(score().current());

// const score = (() => {
//   let count = 0;
//   return {
//     current: () => {
//       return count;
//     },
//     increment: () => {
//       count++;
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
// })();

// console.log(typeof score);
// console.log(score);
// console.log(score.current());
// score.increment();
// score.increment();
// score.increment();
// score.increment();
// console.log(score.current());
// score.reset();
// console.log(score.current());
// console.log(score().current());
// score().increment();
// console.log(score().current());

// const increment = () => {
//   let counter = 0;
//   console.log(counter);
//   const number = (num) => console.log(`it is ${num} number`);
//   return () => {
//     counter++;
//     number(counter);
//   };
// };

// increment();
// increment();

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`it is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment);
increment();
