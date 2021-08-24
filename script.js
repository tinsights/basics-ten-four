var main = function (input) {

// declare a variable and assign it the numerical value of 'input'
var someVariable = Number(input)
console.log(`You entered ${input}`);

// increment the value of someVariable by 1.
someVariable = someVariable + 1;
console.log(`${input} + 1 is ${someVariable}`);

// double the value of someVariable
someVariable = someVariable * 2;
console.log(`(${input} + 1) * 2 is ${someVariable}`);

// returns someVariable, which is effectively (input + 1) * 2
return someVariable;
}
