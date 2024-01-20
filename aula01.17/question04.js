// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
const prompt = require('prompt-sync')();

const number = Number(prompt('Digite um número: '));

const isPrime = (num) => {
  if (num <= 1) return false
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};

console.log(isPrime(number));
