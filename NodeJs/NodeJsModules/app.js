// mathOperations.js file will act as a module for app.js

const mathOperations=require('./mathOperations');
const result1=mathOperations.add(5,3);
const result2=mathOperations.subtract(8,4);
const result3=mathOperations.multiply(2,6);
const result4=mathOperations.divide(10,2);

console.log(`Addition : ${result1}`);
console.log(`Subtraction : ${result2}`);
console.log(`Multiplication : ${result3}`);
console.log(`Division : ${result4}`);