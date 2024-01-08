const prompt = require('prompt-sync')();
const userResponse = prompt('Digite alguma coisa: ');

if (userResponse === 'true' || userResponse === 'false') {
    console.log('O usuário digitou um dado do tipo Boolean');
} else if (!isNaN(userResponse)) {
    console.log('O usuário digitou um dado do tipo Number');
} else if (typeof userResponse === 'string') {
    console.log('O usuário digitou um dado do tipo String');
} else {
    console.log('Não foi possível identificar o tipo de dado do usuário');
}
