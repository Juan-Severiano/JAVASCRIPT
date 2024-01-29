// 
const calculaSalario = (horasTrabalhadas, valorPorHora) => `Salário igual à R$ ${horasTrabalhadas * valorPorHora}`
console.log(calculaSalario(150, 40.5))

// 
const returnMonth = (number) => {
  switch (number) {
    case 1: return 'Janeiro'
    case 2: return 'Fervereiro'
    case 3: return 'Março'
    case 4: return 'Abril'
    case 5: return 'Maio'
    case 6: return 'Junho'
    case 7: return 'Julho'
    case 8: return 'Agosto'
    case 9: return 'Setembro'
    case 10: return 'Outubro'
    case 11: return 'Novembro'
    case 12: return 'Dezembro'
  }
}

console.log(returnMonth(1))
//
const hello = (text) => `Olá ${text}`
console.log(hello('JP'))

//
const howManyDays = (years) => years * 365
console.log(howManyDays(25))
