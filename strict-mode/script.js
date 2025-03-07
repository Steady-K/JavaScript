// 'use strict';

// // function sum(a, b) {
// //   'use strict';

// //   return a + b;
// // }

// class Cat {

// }

'use strict';
function sum(a, b) {
  console.log(this);
  return a + b;
}

console.log(this);
sum.bind(this)(1, 2);

// 'string'.prop = 7;

// console.log('string'.prop);

// function add(a, a, b) {
//   return a + a + b;
// }

// console.log(add(1, 2, 3));

// const obj = {
//   get readOnly() {
//     return 7;
//   },
// };
// console.log(obj.readOnly);
// obj.readOnly = 10;

// console.log(obj.readOly);

// const obj = {};

// Object.defineProperty(obj, 'readOnly', {
//   writable: false,
//   value: 7,
// });

// console.log(obj);
// obj.readOnly = 10;

// console.log(obj);

// undefined = 8;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);

// let greeting = 'hello';
// greating = 'hi';

// console.log(greeting);
// console.log(greeting, window.greating);
