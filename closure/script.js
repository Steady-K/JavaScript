// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log('Outer function ' + outerVariable);
//     console.log('Inner function ' + innerVariable);
//   };
// }
// const newFucntion = outerFunction('outside');
// console.log('New function ' + newFucntion);
// // newFucntion('inside');

let a = 'a';

function functionA() {
  let b = 'b';
  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}
functionA();
