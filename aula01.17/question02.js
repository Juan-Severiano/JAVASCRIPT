//  Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M.
// A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. 
// Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M.
// Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.
const prompt = require('prompt-sync')();

const convertHour = (hour) => {
  let newHour = hour;
  let paramAmOrPm = 'A.M';
  if (hour > 12) {
    switch (hour) {
      case 13:
        newHour = 1
        break
      case 14:
        newHour = 2
        break
      case 15:
        newHour = 3
        break
      case 16:
        newHour = 4
        break
      case 17:
        newHour = 5
        break
      case 18:
        newHour = 6
        break
      case 19:
        newHour = 7
        break
      case 20:
        newHour = 8
        break
      case 21:
        newHour = 9
        break
      case 22:
        newHour = 10
        break
      case 23:
        newHour = 11
        break
      case 24:
        newHour = 12
        break
    }
    paramAmOrPm = 'P.M'
  }
  return { newHour, paramAmOrPm };
}
const defineHour = (hour, minute) => {
  let newHour = convertHour(hour);
  return `${newHour.newHour}:${minute} ${newHour.paramAmOrPm}`;
}

while (true) {
  const hours = parseInt(prompt('Digite as horas: '));
  const minutes = parseInt(prompt('Digite os minutos: '));
  console.log(defineHour(hours, minutes));

  const stop = prompt('Quer parar? S/N ');

  if (stop.toLowerCase() === 's') break;
}
