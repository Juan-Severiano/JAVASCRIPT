// Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato Dia de mesPorExtenso de Ano. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
const prompt = require('prompt-sync')();

const userDay = Number(prompt('Digite o dia: '));
const userMouth = Number(prompt('Digite o mês: '));
const userYear = Number(prompt('Digite o mês: '));

const dateFormat = (day, mouth, year) => {
  return day < 1 && day > 31 && mouth < 1 && mouth > 12 ?  `${day} de ${defineMouth(mouth)} de ${year}` : null
}

const defineMouth = (numMouth) => {
  switch (numMouth) {
    case 1:
      return 'Janeiro';
    case 2:
      return 'Fervereiro';
    case 3:
      return 'Março';
    case 4:
      return 'Abril';
    case 5:
      return 'Maio';
    case 6:
      return 'Junho';
    case 7:
      return 'Julho';
    case 8:
      return 'Agosto';
    case 9:
      return 'Setembro';
    case 10:
      return 'Outubro';
    case 11:
      return 'Novembro';
    case 12:
      return 'Dezembro';
  }
}

console.log(dateFormat(userDay, userMouth, userYear));