// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
const prompt = require('prompt-sync')();

const number = Number(prompt('Digite um número: '));

const numberIsPar = n => n % 2 == 0 ? true : false;

console.log(numberIsPar(number));
