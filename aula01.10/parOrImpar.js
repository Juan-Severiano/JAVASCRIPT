// crie um codigo que solicite 10 numeros para o usuario e o=ao final informe quantos foram pares e quants foram imppares
const prompt = require('prompt-sync')()
let qtdePar = 0
let qtdeImpar = 0

for (let i = 1; i < 11 ; i ++) {
    const res = Number(prompt('Digite um número: '))

    if (res % 2) {
        qtdePar++
    } else {
        qtdeImpar++
    }
}

console.log(`A quantidade de números pares que você digitou foi ${qtdePar} e foram ${qtdeImpar} números impares`)
