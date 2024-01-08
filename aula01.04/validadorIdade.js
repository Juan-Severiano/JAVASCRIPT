const prompt = require('prompt-sync')();

const age = prompt('Qual sua idade? ')

if ( age >= 18 && age < 60) {
    console.log('Você é Adulto')
} else if (age > 0 && age < 12) {
    console.log('Você é um criança')
} else if (age >= 12 && age <= 17) {
    console.log('Você é Adolecente')
} else if (age >= 60) {
    console.log('Você é idoso')
} else {
    console.log('Impossível identificar sua faixa');
}
