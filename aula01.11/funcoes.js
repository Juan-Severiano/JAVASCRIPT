function soma (a, b) {
    console.log(a + b)
}
soma(1, 9)
soma(2, 8)
soma(3, 7)
soma(4, 6)
soma(5, 5)
soma(6, 4)
soma(7, 3)
soma(8, 2)
soma(9, 1)

function deMaior(age) {
    if (age >=18) {
        console.log('Você é maior de idade')
    } else {
        console.log('Você é moenor de idade')
    }
}

const prompt = require('prompt-sync')()
const age = Number(prompt('Digite sua iadde'))