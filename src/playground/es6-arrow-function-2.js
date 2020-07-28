// Arguments object - no longer bound with arrow functions
const add = function(a,b ){
    console.log(arguments);
  return a + b;
};

const add2 = (a,b) => {
  // console.log(arguments);
  return a + b;
};


// this keyword - no longer bound.
const user = {
    name : "andrew",
    cities : ["Oslo", "Trondheim", "Bergen"],

    // Only ES6 - using arrow method no function keyword
    printPlacesLived () {
        return this.cities.map((city) => this.name + " has lived in " + city + "!");
        }
};

    // Workaround ES6 and ES5
    // Arrow function goes up to the top parent object, but ES5 only goes one step up (if arrow methods not used (above)
    // printPlacesLives:  function () {
    // this.cities.forEach((city) => {
    // console.log(this.name + " has lived in " + city);

    // Workaround ES5
    // Arrow function goes up to the top parent object, but ES5 only goes one step up.(if arrow methods not used (above)
    // printPlacesLives:  function () {
    //const that = this;
    //this.cities.forEach(function (city) {
    //    console.log(that.name + " has lived in " + city);
    //})


console.log(user.printPlacesLived());