// // operadores do terário: ? e o :

// let gratification = 2500;

// if ( gratification < vendas ) {
//   console.log('Parabéns amigão, você vai receber sua gratificação ae!!!');
// }

// let nota = 9
// const result = nota >=7 ? 'Aprovado' : nota < 5 ? 'Reprovado' : 'Recuperação'

// console.log(result)

const prompt = require('prompt-sync')();

const name = prompt('Informe seu nome: ').toLowerCase();

const funcao = name === 'paulo' ? 'Professor' : name === 'aline' ? 'Aluna' : name === 'mateus' ? 'aluno' : 'Não identificado' 

console.log(funcao)
