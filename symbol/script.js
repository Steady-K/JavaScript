// // const sym1 = Symbol();
// // const sym2 = Symbol();
// // const sym3 = Symbol('hi');

// // console.log(sym1.description);
// // console.log(sym2);
// // console.log(sym1 === sym2);

// // console.log(sym3.description);

// let carA = {
//   id: 1,
//   name: 'moring',
//   brand: 'kia',
//   price: 1000,
// };

// const idSym = Symbol('id');
// carA[idSym] = 300;

// // console.log(carA);

// console.log(Object.getOwnPropertyNames(carA));

// for (const key in carA) {
//   console.log(key);
// }

// console.log(Object.getOwnPropertySymbols(carA));

// symbol의 description이 같더라도 false
// const sym1 = Symbol('sym1');
// const sym2 = Symbol('sym1');

// for을 이용하여 심볼을 생성하면 전역 심볼이 되어서 Symbol 값이 같음음
// const sym1 = Symbol.for('sym1');
// const sym2 = Symbol.for('sym1222');

// // console.log(sym1 === sym2);

// // symbol description을 알려면 keyFor 사용
// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor((sym2));

// const RED = Symbol('red');
// const ORANGE = Symbol('orange');
// const YELLOW = Symbol('yellow');
// const BLUE = Symbol('blue');
// const dog = 'blue';

// function getImporantLevel(color) {
//   switch (color) {
//     case RED:
//       return 'very important';
//     case ORANGE:
//       return 'important';
//     case YELLOW:
//       return 'little important';
//     case BLUE:
//       return 'not important';
//     default:
//       console.log(`${color} not included`);
//   }
// }
// console.log(getImporantLevel(BLUE));
// console.log(getImporantLevel(dog));

const length = Symbol('length');
class Car {
  constructor() {
    this[length] = 0;
  }

  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
  console.log(car, myCars[car]);
}
