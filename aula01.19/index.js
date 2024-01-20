// faça um algoritmo que calcule o fatorial de um numero
const prompt = require('prompt-sync')();
// const num = Number(prompt('Digite um número: '));

// const fatorial = (num) => {
//   let fat = 1
//   for (let i = 1; i <= num; i++) {
//     fat *= i
//   }
//   return fat
// }
// const response = fatorial(num)
// console.log(`O fatorial de ${num} é ${response}`)

// crie um codigo que informe quantas e quais cedulas sao necessarias para entregar um valor determinado
// cedulas: 2, 5, 10, 20, 30, 100, 200

const valorRecebido = parseInt(prompt('Digite o valor recebido'));;

const troco = (valorRecebido) => {
  const resultadoCD = {}
  const cedulas = [2, 5, 10, 20, 50, 100, 200]
  
  cedulas.forEach((cedula) => {
    const qtde = Math.floor(valorRecebido / cedula)

    if (qtde > 0) {
      resultadoCD[cedula] = qtde
      valorRecebido %= cedula 
    }

    return resultadoCD
  })
}

// console.log(troco(valorRecebido))
const entregarCedulas = entregarCedulas(valorRecebido)
