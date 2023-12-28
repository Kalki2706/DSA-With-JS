let num = 1;
num = 3;

const price = 1.5;
const myName = 'Kalki';
const trueValue = true;
const nullVar = null;
let undefinedValue;

console.log(
  `num: ${num}\nprice: ${price}\nmyName: ${myName}\ntrueValue: {trueValue}\nnullVar: ${nullVar}\nundefinedValue: ${undefined}`
);

// <----- Variable Scope ----->
let myVariable = 'global';
let anotherVariable = 'global value';

function myFunction() {
  let myVariable = 'local';
  return myVariable;
}

function anotherFunction() {
  anotherVariable = 'local';
  return anotherVariable;
}

console.log(myVariable);
console.log(anotherVariable);

// calling functions
console.log(myFunction());
console.log(anotherFunction());
