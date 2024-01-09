// crie um codigo que informe o dia da semana atraves de seu número.
const prompt = require('prompt-sync')();

const number = Number(prompt('Informe qual número deseja informação: '));

switch (number) {
    case 1:
        console.log('Domingo');
        break
    case 2:
        console.log('Segunda-feira');
        break
    case 3:
        console.log('Terça-feira');
        break
    case 4:
        console.log('Quarta-feira');
        break
    case 5:
        console.log('Quinta-feira');
        break
    case 6:
        console.log('Sexta-feira');
        break
    case 7:
        console.log('Sábado');
        break
}