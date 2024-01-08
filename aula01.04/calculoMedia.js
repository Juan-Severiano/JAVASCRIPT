// fazer uma estrutura que calcule a media das 3 notas do aluno e informe se o mesmo passsou ou nao de ano

const prompt = require('prompt-sync')();

const nota1 = prompt('Digite a primeira nota: ')
const nota2 = prompt('Digite a segunda nota: ')
const nota3 = prompt('Digite a terceira nota: ')

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
console.log(media)

if ( media > 0 && media >= 7 && media <= 10 ) {
    console.log('Aprovado');
} else if (media < 7 && media > 0) {
    console.log('Reprovado');
} else {
    console.log('Não foi possivel realizar a média, Fique atento se os valores da nota estão entre 0 e 10');
}
