// faça uma estrutura de repetiçaõo que indique qual é o numero maior digitado ppelo usuário. OBS: você deve repetirno máximo 5 vezes
const prompt = require('prompt-sync')()
let maior = -2^53

for (i = 1; i <= 5; i++) {
    const number = Number(prompt('Informe um número: '))
    if (maior < number) {
        maior = number
    }
}

console.log(`O maior número digitado foi: ${maior}`)