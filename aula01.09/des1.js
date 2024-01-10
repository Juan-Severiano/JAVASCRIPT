const prompt = require('prompt-sync')()

const name = prompt('Digite o nome do produto: ');
const price = Number(prompt('Digite o preço do produto: '))
const expiration = prompt('Digite se o produto está no prazo de validade S/N : ')

const expirationConsole = expiration.toLowerCase() == 's' ? 'True' : 'False'

console.log(`Nome: ${name}\nPreço: R$ ${price.toFixed(2)}\nValidade: ${expirationConsole}`)
