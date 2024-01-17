// function area(width, height) {
//   const area = width * height;

//   if (area > 20) {
//     console.log(`O valor acima do permitido: ${area}`);
//   } else {
//     return area;
//   }
// }

// console.log(area(2, 2));
// console.log(area(2));
// console.log(area());

// function soma() {
//   let soma = 0;

//   for (i in arguments) {
//     soma += arguments[i];
//   }
// }

// functions com parametros padrões

function multiplicacao(a=1, b=1, c=1) {
  return a * b * c;
}

console.log(multiplicacao())
console.log(0**0)
