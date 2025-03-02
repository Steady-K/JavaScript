// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = 'how are you?';
// console.log(greeting);

// var 위와 같이 중복 선언과 재할당이 가능하며 마지막에 할당된 값이 변수에 저장됩니다.
// 이런 특징으로 인해 자율성은 생기지만 소스 코드가 복잡해질 경우 기존 선언 변수를 잊고 다시 선언하거나 재 할당을 해서
// 어떤 부분에서 값이 변경되는지 파악하기 힘들어지게 될 수 있습니다.

// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi';
// console.log(greeting);
// let은 중복 선언이 안되기 때문에 let greeting 하는 순간 부터 에러표시가 뜹니다.

// greeting = 'hi';
// console.log(greeting);
// // 재할당은 가능

// const greeting = 'hello';
// console.log(greeting);

// const greeting = 'hi';
// console.log(greeting);

// 유효한 참조 범위
// var => 함수 레벨 스코프
// function func() {
//   if (true) {
//     var a = 'a';
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);
// func();

// let, const => block 레벨 스코프
// function func() {
//   if (true) {
//     const a = 'a';
//     console.log(a);
//   }
//   console.log(a); // let, const => block 레벨 스코프이므로 a is not defined
// }
// func();

// console.log(greeting);

// // var greeting = 'hello';
// // undefined

// let greeting = 'hello';
// Cannot access 'greeting' before initialization

// func();

// function func() {
//   console.log('hoisting test');
// }
