'use strict';

// An bookings array to store all the bookings.
const bookings = [];

// A create booking function to create bookings using object literal

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Using Short circuiting to assign default values
  //But we are not using this ES5 way
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  //In ES6 default values can be assigned with parameter

  // Creating an object literal to store booking details
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  // Inserting each booking object data into bookings array
  bookings.push(booking);
};

// Calling create booking function with single parameter
createBooking('LH123');
// Calling create booking function with 3 parameters
createBooking('LH123', 2, 800);
// Letting the default parameter calculate price based on numofpassengers
createBooking('LH123', 2);
createBooking('LH123', 5);
/* Note:
1. Cannot skip arguments while calling the function parameters
2. To skip a argument from passing provide undefined
*/
createBooking('LH123', undefined, 1000);
