// Calculadora de operações básicas
const prompt = require('prompt-sync')();

const operator = Number(prompt('Digite o Operador: + - x \n'))
const n1 = Number(prompt('Digite o 1° Numero: '))
const n2 = Number(prompt('Digite o 2° Numero: '))

switch (operator) {
    case '+':
        console.log(`A soma de ${n1} + ${n2} resulta em ${n1 + n2}`)
    case '-':
        console.log(`A subtração de ${n1} - ${n2} resulta em ${n1 - n2}`)
        break
    case 'x':
        console.log(`A multiplicação de ${n1} x ${n2} resulta em ${n1 * n2}`)
        break
    case '/':
        console.log(`A divisão de ${n1} / ${n2} resulta em ${n1 / n2}`)
        break
}
