// crie um game para o usuario ficar tentando acertar o numero oculto. Quanto ele acertar o game deve finalizar e informar a quantidade de tentativas
const prompt = require('prompt-sync')()
const ocultNumber = 23
let tentativas = 0

console.log('Seja bem vindo ao game !!!\nTente acertar o número oculto:')

while (true) {
    const userResponse = Number(prompt('Sua escolha: '))
    tentativas ++
    console.log('Estamos calculando .....')
    console.log('Será que você acertou? .....')

    if (userResponse === ocultNumber) {
        console.log('PARABÉNS !!!! VOCÊ ACERTOU !!!');
        console.log(`Você acertou depois de ${tentativas} tentativas`)
        break
    }

    console.log('Ah que pena :(\nVocê infelizmente errou:(')
}
