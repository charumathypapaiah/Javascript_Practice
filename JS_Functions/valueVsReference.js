'use strict';

const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247598314556,
};

// Function to check In passenger

const checkIn = function (flightNum, passenger) {
  // Changing the flightNum and passenger name
  (flightNum = 'LH999'), (passenger.name = 'Mr.' + passenger.name);

  if (passenger.passport === 247598314556) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // 'LH234' - Its just the primitive value and doesn't get changed
console.log(jonas); // 'Mr.Jonas Schmedtmann' - can see the function changes here because the value passed is an reference and the value is pointing to the same reference

// Is the same as assigning inside function
const flightNum = flight;
const passenger = jonas;

// A new function that changes the passport number

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
// Sending a different passport number to checkIn to see the results
checkIn(flight, jonas);
// Passport number has been changed
console.log(jonas);
