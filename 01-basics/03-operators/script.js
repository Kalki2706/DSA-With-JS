'use strict';

// <----- Arithmetic Operators ----->
let num = 0;
console.log(`num value is ${num}`);

num = num + 2;
console.log(`New num value is ${num}`);

num = num * 2;
console.log(`New num value is ${num}`);

num = num - 2;
console.log(`New num value is ${num}`);

num = num / 2;
console.log(`New num value is ${num}`);

num++; // post-increment
num--; // post-decrement

console.log('New num value is ' + num);

console.log('num mod 2 value is ' + (num % 2));

/* <----- Assignment operators -----> */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log(`New num value is ${num}`);

/* <----- Assignment operators -----> */
console.log(`num == 1 : ${num == 1}`);
console.log(`num === 1 : ${num === 1}`);
console.log(`num != 1 : ${num != 1}`);
console.log(`num > 1 : ${num > 1}`);
console.log(`num < 1 : ${num < 1}`);
console.log(`num >= 1 : ${num >= 1}`);
console.log(`num <= 1 : ${num <= 1}`);

/* <----- Logical operators -----> */
console.log(`true && false : ${true && false}`);
console.log(`true || false : ${true || false}`);
console.log(`!true : ${!true}`);

/* <----- Bitwise operators -----> */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/*  <-----typeof -----> */
console.log('typeof num:', typeof num);
console.log('typeof Kalki:', typeof 'Kalki');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete values from object */
let myObj = { name: 'John', age: 21 };
delete myObj.age; // deleting `age` key from myObj
console.log(myObj);
