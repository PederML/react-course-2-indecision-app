//Normal function - ES5
const square = function (x) {
  return x*x ;
};
console.log(square(9));


// Arrow function syntax - traditional return statement
const squareArrow = (x) => {
  return x* x;
};
console.log(squareArrow(8));


// Arrow function syntax - short return statement
const squareArrow2 = (x) => x*x;
console.log(squareArrow2(8));

// Challenge
// Traditional function
const getFirstName = function (fullName) {
  return fullName.split(" ")[0];
};
console.log(getFirstName("Peder Lund"));

// Arrow function
const getFirstName2 = (fullName) => fullName.split(" ")[0];
console.log(getFirstName2("Peder Lund"));




