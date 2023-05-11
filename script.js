// 'use strict';

// const Bookings = [];

// const flightBooking = function (
//   flightName,
//   NumPass = 1,
//   Price = 120 * NumPass
// ) {
//   const Booking = {
//     flightName,
//     NumPass,
//     Price,
//   };
//   console.log(Booking);
//   Bookings.push(Booking);
// };

// flightBooking('B127');
// flightBooking('B127', 2);
// flightBooking('B127', 5);
// flightBooking('B127', undefined, 1000);

// const flight = 'B127';
// const shafiq = {
//   name: 'Shafiquddin Saifuddin',
//   passport: 526341897,
// };

// const checkIn = function (flight, shafiq) {
//   flight = 'L562';
//   shafiq.name = 'Mr.' + shafiq.name;
//   if (shafiq.passport === 52634197) {
//     alert('check In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, shafiq);
// console.log(flight);
// // console.log(shafiq);

// const newPassport = function (Person) {
//   Person.passport = Math.trunc(Math.random() * 100000000);
// };
// newPassport(shafiq);
// checkIn(flight, shafiq);
// const flight = 'B127';
// const shafiq = {
//   name: 'Shafiquddin Saifuddin',
//   Passport: 98786545321,
// };

// const checkIn = function (flightName, person) {
//   flightName = 'S315';
//   person.name = 'Mr.' + person.name;
//   if (person.Passport === 98786545321) alert('Check In');
//   else alert('Wrong Password');
// };

// // checkIn(flight, shafiq);

// const newPassword = function (person) {
//   person.Passport = Math.trunc(Math.random() * 100000000);
// };

// newPassword(shafiq);
// checkIn(flight, shafiq);
// console.log(flight);
// console.log(shafiq);

// higher Order function

// const greet = () => console.log('Wellcome');
// const plane = document.querySelector('.buy');
// plane.addEventListener('click', greet);

// const wordSpace = function (str) {
//   return str.replace(/ /g, str).toLowerCase();
// };

// const upperFisrtWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transform = function (str, fn) {
//   console.log('Original Text:', str);
//   console.log('Transform Text:', fn(str));
//   console.log(fn.name);
// };

// transform('JavaScrit is best', wordSpace);
// transform('JavaScript is best', upperFisrtWord);

// const high5 = function () {
//   console.log('👋');
// };
// ['nabeel', 'zainab', 'omer'].forEach(high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('hello')('shafiq');

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNo, name) {
//     console.log(
//       `${name} is Booked ${this.airline} with ${this.iataCode}${flightNo}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNo}`,
//       name: `${name}`,
//     });
//   },
// };

// const eurowing = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowing, 560, 'khaled');
// console.log(eurowing.bookings);

// book.call(lufthansa, 362, 'shafiq');
// console.log(lufthansa.bookings);

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 963, 'Afif');
// book.call(swiss, 962, 'Saif');
// const flightData = [964, 'Ahmed'];

// book.apply(swiss, flightData);
// console.log(swiss.bookings);

// book.call(swiss, ...flightData);

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNo, name) {
//     console.log(
//       `${name} is Booked ${this.airline} with ${this.iataCode}${flightNo}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNo}`,
//       name: `${name}`,
//     });
//   },
// };

// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// const addTax = function (rate, value) {
//   return value + value * rate;
// };

// const addVAT = value => rate => value + value * rate;
// console.log(addVAT(100)(0.2));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// const runOnce = function () {
//   console.log('this will never run again');
// };

// runOnce();

// //immediately Invoked function Expression
// (function () {
//   console.log('this will never run again');
// })();

// //arrow function

// (() => console.log('this will never run again'))();

// {
//   var isPrivate = 123;
// }
// console.log(isPrivate);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// const h = function () {
//   const b = 231;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// h();
// f();
// console.dir(f);

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are boarding ${n} passengers`);
//     console.log(`there are 3 groups each ${perGroup} passenger`);
//   }, wait * 1000);
//   console.log(`Will start Boarding in ${wait}`);
// };

// boardPassenger(180, 3);

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
