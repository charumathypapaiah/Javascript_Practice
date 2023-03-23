'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
