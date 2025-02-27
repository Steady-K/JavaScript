let foo = 42;
foo = 'bar';
foo = true;

console.log(typeof foo);

// 원시 타입
// 문자열 String
const name = 'hwan';
// Number
const age = 33;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
  province: '경기도',
  city: '인천',
};

console.log(typeof hobbies);
console.log(Array.isArray(address));

// 배열인지 알기 위해서는 typeof 말고 Array.isArray()을 사용
