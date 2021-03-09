const naive = require('./getPrimes');
const optimized = require('./getPrimesOptimized');
const seive = require('./getPrimesSieve');
const seiveOptimized = require('./getPrimesSieveOptimized');

const prompt = require('prompt-sync')();

console.log("Prime Number Generator");
console.log("enter two numbers between which you wish to generate prime numbers");
console.log("Note that negatives will be converted to 1 and user is ecpected to give integral positive values ");

let num1 = prompt('enter first number: ');
while((num1 != parseInt(num1)) || (num1 < 0)){
    console.log("i think i made myself clear up there.");
    num1 = prompt("let's give it another shot: ");
}
let num2 = prompt('enter second number: ');
while((num2 != parseInt(num2)) || (num2 < 0)){
    console.log("i think i made myself clear up there.");
    num2 = prompt("let's give it another shot: ");
}

console.log("which algorithm you want to follow we have - ");
console.log("1. naive");
console.log("2. optimized");
console.log("3. seive algorithm");
console.log("4. optimized seive algorithm");

let algo = prompt("select a number from 1 to 4 to choose algorithm: ");


while((algo != parseInt(algo)) || (algo < 1) || (algo > 4)){
    console.log("Integer BETWEEN 1 AND 4");
    algo = prompt("let's give it another shot: ");
}

let answer = [];

if(algo == 1){
    answer = naive(num1, num2);
}
if(algo == 2){
    answer = optimized(num1, num2);
}
if(algo == 3){
    answer = seive(num1, num2);
}
if(algo == 4){
    answer = seiveOptimized(num1, num2);
}

console.log("the generated prime numbers are: ");
console.log(answer);