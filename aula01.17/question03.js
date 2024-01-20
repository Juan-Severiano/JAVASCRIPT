// Faça um programa, com uma função sem argumento. A função retorna o valor de caractere 'P', se for um numero positivo, e 'N' se for negativo e 'Z' se for zero.

const prompt = require('prompt-sync')();

function avaliarNumero() {
  const numero = Number(prompt('Digite um número:'));

  if (isNaN(numero)) {
    return 'Entrada inválida. Por favor, digite um número.';
  } else if (numero > 0) {
    return 'P';
  } else if (numero < 0) {
    return 'N';
  } else {
    return 'Z';
  }
}

const resultado = avaliarNumero();
console.log(resultado);
