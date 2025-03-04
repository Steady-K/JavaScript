// // Call();
// const fullName = function (city, country) {
//   console.log(this.firstName + ' ' + this.lastName, city, country);
// };

// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// fullName.call(person1, 'Oslo', 'Norway');

// Apply();
const fullName = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

fullName.apply(person1, ['Oslo', 'Norway']);
