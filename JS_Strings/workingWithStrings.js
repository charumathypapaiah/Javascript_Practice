'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/* Working with Strings Part 1 */

// Strings and retreiving through Index

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

//Length of the string

console.log(airline.length);
console.log('B737'.length);

// String Methods

console.log(airline.indexOf('r')); // first occurrence

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // case sensitive

// Index is useful to extract part in slice method

console.log(airline.slice(4)); // begin parameter to produce a substring

console.log(airline.slice(4, 7)); // (begin,end) parameter

console.log(airline.slice(0, airline.indexOf(' '))); // Extract first word

console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// Output: Portugal

console.log(airline.slice(-2));
// Returns the value from end of the string - al

console.log(airline.slice(1, -1));
// => AP Air Portuga

// To find if the given seat is middle seat or not

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😂');
  } else console.log('You got lucky 😎😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Conversion of string primitive to String object is called Boxing - done by JS

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // String is an object here

console.log(typeof new String('jonas').slice(1)); // But while applying method on string object the result is String

/* Working with Strings Part 2 */

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Can also be called directly on a string

console.log('jonas'.toUpperCase());

//Fix Capitalization in name

const passenger = 'jOnAS';

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// To compare User input email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.IO \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// ES 19 has trimStart and trimEnd

// Replacing Example

const priceGB = '288,97£';
// replace method example
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// replaceAll method example
console.log(announcement.replaceAll('door', 'gate'));

// Example of Regex

console.log(announcement.replace(/door/g, 'gate'));

// Methods that return boolean value on String

const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.includes('Boeing')); // false
console.log(plane1.startsWith('Air')); //true

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} // prints the msg as the condition is true

//Prcatice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); // Not allowed
checkBaggage('Socks and camera'); // Allowed
checkBaggage('Get some snacks and a gun for protection'); // Not allowed
