// NUMBER VARIABLES 
console.log('hello!');
 let motorcycles = 9;
let cars = 0
let vehicles = motorcycles + cars;
console.log( 'Total vehicles: ', vehicles)
console.log('Had to put the soft tail in the garage');

motorcycles--;
//subtract 1 from variable

console.log('Bikes: ', motorcycles);
console.log('Cars: ', cars);
vehicles = motorcycles + cars
console.log('missed the bike to I bought 2 lambos');

cars += 2;
vehicles = motorcycles + cars
console.log('Bikes: ', motorcycles);
console.log('Cars: ', cars);

console.log('I wanted a Jetta so I got one')
cars++;
console.log('Sold 3 bikes');
motorcycles -= 3;
vehicles = motorcycles + cars
console.log('Bikes: ', motorcycles);
console.log('Cars: ', cars);
console.log(vehicles);

console.log('took softail back out the garage');
motorcycles++
vehicles = motorcycles + cars
console.log( 'Total vehicles: ', vehicles)

// STRING VARIABLES BELOW

let catName = 'Mischa';
let catAge = 3;
console.log(catName);

//concatenate BELOW, space added automatically afer comma
console.log('The cat name is:', catName)
console.log('Tha age of the cat is:', catAge);
//using a +, there is no space auto added w/ a + sign, needs to be added in
let sentence = 'Sentence about a cat named: ' + catName;
console.log( sentence );

sentence = 'The cat is ' + catAge + ' years old.';
console.log( sentence );

sentence = 'Later on, a different cat is ' + catAge + ' years old and is named ' + catName;
console.log(sentence)
// using the + sign will turn any numbers into strings when in between two strings

//CONDITIONALS 
// checking if something is true, if it is, then the following code will run

//road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;
if (seatsInCar >= passengers && infantSeats >= infants) {
console.log('Ready for the road trip!')
  if ( fullTank === true) {
    console.log('Ready to hit the Highway!')
  }//end fullTank
  else {
    console.log('gotta get gas!')
  } // end not fullTank
} // end enough seats 
else {
console.log('Not ready, check car and passengers!')
} // end not enough seats