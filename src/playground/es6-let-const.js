// Const, var, let and Block scoping

// Can redefine variable, Available in the parent global scope.
var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);


// Can't redefine a let variable, but can reassign the value. NOT available in the parent global scope - Function scoped
let nameLet = "Peder";
nameLet = "Peder Lund";
console.log("nameLet", nameLet);


// Can't redefine or reassign a constant. NOT available in the parent global scope - Function scoped
const nameConst = "Tora";
console.log("nameConst", nameConst);


