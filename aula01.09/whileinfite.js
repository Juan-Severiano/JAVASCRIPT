// let i = 0;
// while (true) {
//     console.log(i * i^53);
//     i++;
// }

//faça um codigo que calcule as notas de um professor e entregue a media
const prompt = require('prompt-sync')();
let notasTotal = 0
let qtdeNotas = 0
let media = 0

while (true) {
    const nota = Number(prompt('Digite uma nota: '))
    notasTotal += nota
    qtdeNotas ++
    const continued = prompt('Você quer continuar? S/N ')
    if (continued.toLowerCase() === 'n') {
        break
    }
}

media = notasTotal / qtdeNotas

console.log('A média é ' + media)

// while(true) {
//     const age = Number(prompt('Informe a sua idade: '))
//     if (age >= 0 && age < 18 ) {
//         console.log(`A idade de ${age} não pode ter acesso ao sistema`)
//         break
//     } else {
//         console.log('Olá, seja bem-vindo(a) ao nosso sistema')
//     }
// }

// Crie um codigo que peça as notas dos alunos e quando não houver mais notas para registrar o professor deve informar 'SAIR'

// while (true) {
//     const name = prompt('Digite o nome do aluno: ')
//     const nota = Number(prompt('Digite sua nota: '))
//     console.log(`O aluno ${name}, teve a nota ${nota}`)

//     const exit = prompt('Você quer continuar? S/N ')
//     if (exit.toLowerCase() === 'n') {
//         console.log('Volte sempre');
//         break
//     }
// }
