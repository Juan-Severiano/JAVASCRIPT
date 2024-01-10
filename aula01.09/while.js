const prompt = require('prompt-sync')()
let i = 0;
let maior = 0;

while (i < 5) {
    const number = Number(prompt('Informe um número: '))
    if (maior < number) {
        maior = number
    }
    i++
}

console.log(`O maior número digitado foi: ${maior}`)